import React from "react";
import { Text, Alert, StyleSheet, View, Image, } from "react-native";
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {REACT_APP_WEATHER_KEY} from "@env";
import axios from "axios";


const weatherOptions = {
    Clear: {
        iconName : "weather-sunny"
    },
    Clouds: {
        iconName : "weather-cloudy"
    },
    Rain:{
        iconName: "weather-rainy"
    },
    Snow:{
        iconName: "snow"
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
            console.log("temperature : " + data.main.temp);
            console.log("weather : " + data.weather[0].main);
            console.log("icon : " + data.weather[0].icon);
            console.log("feels_like : " + data.main.feels_like);

            this.setState({
                    cond : data.weather[0].main, 
                    temp : data.main.temp,
                    icon : data.weather[0].icon,
                    feels_like: data.main.feels_like
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

    render() {
        const {cond, temp, icon,feels_like} = this.state;
        return (
            <>
                <View style={{ paddingTop: Constants.statusBarHeight}} />
                <Text style={styles.MainText}>      What should I wear today? </Text>
                <View style={styles.container}></View>
                    <View style={styles.playingSpace}>
                    <View style={styles.halfContainer}>                    
                    </View>
                 <Image
                    source={require('../assets/weather-clothes3.jpg')}
                    style={{height:400,width:400}}
            />    
                    
                    <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={50} color="#58CCFF" />                 

                    <Text style={styles.temptitile}>날씨 상태 : {cond}    </Text> 
                    <Text style={styles.temptitile}>현재 기온 : {temp}℃</Text>
                    <Text style={styles.temptitile}>체감 온도 : {feels_like}℃</Text>                   
                    </View>
                    <View style ={styles.halfContainer}>
                    <Image
                            source={{uri:`http://openweathermap.org/img/wn/${weatherOptions[cond].openName}@2x.png`}}
                            style={{width: 30, height: 30}}/>
                    <Text><AntDesign name="check" size={30} color="red" />
                     ※ 오늘의 기온을 확인하고 옷을 챙겨 입으세요! </Text>
                    </View>


            </>

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
        fontWeight: 'bold',
        
    },
    playingSpace: {
        backgroundColor: '#FFF7D3',
        borderColor: '#FD8A69',
        borderStyle: 'dashed',
        borderWidth: 3,
        alignItems: 'center'
      },
      MainText: {
        fontSize:25,
        fontWeight: "bold",
        color:'#FD6F22',
        fontStyle: 'italic',
        textShadowColor: "#FD9F28",
        textShadowRadius: 3,
        textDecorationStyle:'dashed'
      },
      paddingTop:{
      }
});