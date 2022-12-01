import React from "react";
import { Text, Alert, StyleSheet, View } from "react-native";
import * as Location from 'expo-location';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import {REACT_APP_WEATHER_KEY} from "@env";

import axios from "axios";

const weatherOptions = {
    Clear: {
        iconName : "weather-sunny"
    },
    Clouds: {
        iconName : "weather-cloudy"
    }
}

export default class Weather extends React.Component {

    state = {
     cond : "Clear"
    }

    getWeather = async (latitude, longitude) => {
        try {
            const {data} = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_WEATHER_KEY}&units=metric`
            );
            console.log(data);
            console.log(data);
            console.log("temperature : " + data.main.temp);
            console.log("weather : " + data.weather[0].main);
            console.log("icon : " + data.weather[0].icon);

            this.setState({
                    cond : data.weather[0].main, 
                    temp : data.main.temp,
                    icon : data.weather[0].icon
                });
        } catch(error) {
            Alert.alert("Error", error.message)
        }
    };

    getLocation = async () => {
        try {
            //await location

            await Location.requestForegroundPermissionsAsync();
            const location = await Location.getCurrentPositionAsync();
            console.log(location);
            console.log(location.coords.latitude);
            console.log(location.coords.longitude);

            this.getWeather(location.coords.latitude, location.coords.longitude);
        } catch (error) {
            Alert.alert("error", {error})
        }
    };

    componentDidMount() {
        this.getLocation();

    };

    render () {

        const {cond, temp, icon} = this.state;

        return (
            <View style={[styles.container]}>
                <View style={[styles.halfcontainer]}>
                    <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={128} color="black" />
                    <Text style={[styles.temptitle]}> {temp} </Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfcontainer: {
        flex: 1,
        justifyContent : "center",
        alignItems: "center",
    },
    temptitle: {
        fontSize: 24,
    }
});