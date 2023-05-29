import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Friend from "../components/Friend";

export default function FriendsScreen({ navigation }){
    const navigateToHomeScreen = () => {
        navigation.navigate('Tabs')
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity onPress={navigateToHomeScreen}>
                    <Image source={require('../assets/arrow.png')} style={styles.image} tintColor="white"></Image>
                </TouchableOpacity>
            </View>
            <Friend></Friend>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginBottom: 20
    },
    image: {
        width: 25,
        height: 25
    }
})