import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../globalStyles";
import { Calendar } from 'react-native-calendars'
import { useState } from "react";


export default function WorkoutScreen({ navigation }){
    const navigateToNewWorkoutScreen = () => {
        navigation.replace('NewWorkout')
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Workouts</Text>
                <TouchableOpacity onPress={navigateToNewWorkoutScreen}>
                    <Image source={require('../assets/plus.png')} style={styles.image} tintColor="white"></Image>
                </TouchableOpacity>
            </View>
            <View>
              <Calendar style={styles.calendar} onDayPress={day => {
                console.log(day.dateString)
                setSelected(day.dateString)
              }} markedDates={{
                '2023-05-09': {selected: true},
                '2023-05-08': {selected: true} 
              }}></Calendar>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 15,
      paddingRight: 15
    },
    title: {
      fontSize: 23,
      fontWeight: 'bold',
      color: 'white',
    },
    image: {
      width: 30,
      height: 30,
    },
    calendar: {
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 20,
      padding: 8,
    }
  });