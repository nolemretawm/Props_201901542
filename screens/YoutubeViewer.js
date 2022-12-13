import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground, TextInput } from "react-native";
import Constants from 'expo-constants';
import { useState, useCallback } from "react";

import YoutubePlayer from "react-native-youtube-iframe";


const YoutubeViewer = (props) => {
    const { navigation } = props;

    const [playing, setPlaying] = useState(false);
    const [playingVideoId, setPlayingVideoId] = useState('iCUkiUGmIi8');

    const onStateChange = useCallback((state) => {
        if (state === "ended"){
            setPlaying(false);
            Alert.alert("video has finished playing");
        }
    },[]);
    
    const togglePlaying = useCallback(()=>{
        setPlaying((prev)=> !prev);
    },[]);

    return (
        <ScrollView>
            <YoutubePlayer
            height = {300}
            play = {playing}
            videoId={playingVideoId}
            onStateChange={onStateChange}
            

            />

            <Button title={playing ? "pause": "play"} onPress ={togglePlaying}/>
            <TextInput
            style={StyleSheet.input}
            onChangeText = {setPlayingVideoId}
            value ={playingVideoId}
            />
            <View style={styles.buttonView}>
          <Button title="GO TO HOME"
             onPress={() =>navigation.navigate('Home')}
          />
        </View>
        </ScrollView>
    )

}


const styles = StyleSheet.create({
    input:{

        height:30,
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
    },
});

export default YoutubeViewer