import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const DriveTesting = ({}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.contains}>
        <Text style={styles.title}>Agenda tu prueba de manejo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contains:{
        flex:1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    title:{
        color: 'rgb(199, 101, 101)',
        fontSize: 40,
        textAlign: 'center'
    },
});

export default DriveTesting
