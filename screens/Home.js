import React from "react";
import {Image, Text, Button, View, StyleSheet, Touchable, TouchableOpacity} from 'react-native';

function Home({navigation}) {
    return (
        <View style = {styles.container}>
            <Image>
            source ={require('../assets/frog-1371919.png')}
            styke={{width:400,height:400}}
            /</Image>

        <TouchableOpacity
         style = {styles.buttoneContainer}
         onPress={()=> navigation.navigate('Layout')}
        >
             <Text style={styles.buttonTest}>Go To Layout</Text>
        </TouchableOpacity>
          
            <Button 
                title = "Go to Layout" 
                onPress={() => navigation.navigate('Layout')}
            />
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ebebeb'
    },
    buttonContainer:{
        backgroundColor:'black',
        borderRadius:5,
        padding:10,
        margin:20

    },
    buttonTest:{
        fontSize:20,
        color:'#fff'

    }
})
export default Home;