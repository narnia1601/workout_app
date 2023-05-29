import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../globalStyles";

export default function WorkoutScreen(){
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={styles.text}>Workout Screen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})