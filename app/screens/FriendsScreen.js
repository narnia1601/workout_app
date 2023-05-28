import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FriendsScreen(){
    return (
        <SafeAreaView>
            <Text style={style.text}>Friends Page</Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    text: {
        color: 'white'
    }
})