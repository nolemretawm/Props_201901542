import React from "react";
import {Text, View, StyleSheet, Button} from 'react-native';

function Home({navigation}) {
    return (
        <>
            <Text> Hello Home </Text>
            <Button 
                title = "Go to Layout" 
                onPress={() => navigation.navigate('Layout')}
                />
        </>

    );
}

export default Home;