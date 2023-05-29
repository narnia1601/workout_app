import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../globalStyles";

export default function WorkoutScreen(){
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={styles.container}>
                <Image source={require('../assets/plus.png')} style={styles.image} tintColor="white"></Image>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 15
    },
    image: {
        width: 25,
        height: 25
    }
})