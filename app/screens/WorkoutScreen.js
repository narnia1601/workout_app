import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../globalStyles";

export default function WorkoutScreen({ navigation }){
    const navigateToNewWorkoutScreen = () => {
        navigation.navigate('NewWorkout')
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Workouts</Text>
                <TouchableOpacity onPress={navigateToNewWorkoutScreen}>
                    <Image source={require('../assets/plus.png')} style={styles.image} tintColor="white"></Image>
                </TouchableOpacity>
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
    }
  });