import React from "react";
import { Text, Alert, StyleSheet, View, Image,} from "react-native";
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
            console.log("temp_min: " + data.main.temp_min);
            console.log("temp_max : " + data.main.temp_max);

            this.setState({
                    cond : data.weather[0].main, 
                    temp : data.main.temp,
                    icon : data.weather[0].icon,
                    feels_like: data.main.feels_like,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max

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
        const {cond, temp, icon,feels_like,temp_min,temp_max} = this.state;
        return (
            <>
               <View style={{ paddingTop: Constants.statusBarHeight}} />
                
                <View style={styles.container}></View>
                    <View style={styles.playingSpace}>
                    <View style={styles.halfContainer}>                    
                    </View>
                    <Text style={styles.MainText}>{'\n'}    What should I wear today?  </Text>
                 <Image
                    source={require('../assets/weather-clothes3.jpg')}
                    style={{height:400,width:400}}
            />    
                    
                    <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={50} color="#58CCFF" />                 

                    <Text style={styles.temptitile}>날씨 상태 : {cond}, 현재 기온 : {temp}℃  </Text> 
                    <Text style={styles.temptitile}>체감 온도 : {feels_like}℃</Text> 
                    <Text style={styles.temptitile}>최저 기온 : {temp_min}℃, 최고 기온 : {temp_max}℃</Text>
                    <Text>{'\n'}<AntDesign name="check" size={25} color="red" />
                    ※ 오늘의 기온을 확인하고 기온에 맞게 옷을 챙겨 입으세요! </Text>
                    </View>
                    <View style={{ paddingBottom: Constants.statusBarHeight}} />
                            </>

        );
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFF7D3'

    },
    halfcontainer: {
        flex: 1,
        justifyContent : "center",
        alignItems: "center",
        backgroundColor: '#FFF7D3',
        fontStyle:'italic',

    },
    temptitle: {
        fontSize: 26,
        fontWeight: 'bold',
        backgroundColor: '#FFF7D3',
        fontStyle:'italic',
        
    },
    playingSpace: {
        backgroundColor: '#FFF7D3',
        borderColor: '#FD8A69',
        borderStyle: 'dashed',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent:'space-between'
      },
      MainText: {
        fontSize:27,
        fontWeight: "bold",
        color:'#FD6F22',
        fontStyle: 'italic',
        textShadowColor: "#FD9F28",
        textShadowRadius: 3,
        textDecorationStyle:'dashed',
        backgroundColor: '#FFF7D3',
        alignItems: 'center',
        justifyContent: "center",
      },
    
})
