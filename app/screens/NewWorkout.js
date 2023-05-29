import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";

export default function NewWorkout(){
    return (
        <SafeAreaView>
            <Text style={styles.text}>New Workout</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white"
    }
})