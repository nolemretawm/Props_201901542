import React from "react";
import {Image, Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';

function Home({navigation}) {
    return (
        <>

          <View style = {styles.container}>
            <Image
              source ={require('../assets/frog-1371919.png')}
              style={{height:400, width:400}}
           />

           <TouchableOpacity
            style = {styles.buttonContainer}
            onPress={()=> navigation.navigate('Layout')}
         >
             <Text style={styles.buttonText}>Go To Layout</Text>

           </TouchableOpacity>
        
            
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    buttoncontainer:{
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
    buttonText:{
        fontSize:20,
        color:'#fff'

    }
})
export default Home;