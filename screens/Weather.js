import React from "react";
import { Text, Alert, StyleSheet, View } from "react-native";
import * as Location from 'expo-location';

import {REACT_APP_WEATHER_KEY} from "@env";
import axios from "axios";

export default class Weather extends React.Component {

    getWeather = async (latitude, longitude) => {
        try {
            const {data} = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_WEATHER_KEY}`
            );
            console.log(data);
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
        <>
        </>
    }
}
