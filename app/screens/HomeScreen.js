import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { StyleSheet } from "react-native";
import { globalStyles } from "../globalStyles";

export default function HomeScreen({ navigation }){
    const navigateToFriendsScreen = () => {
        navigation.navigate('Friends')
    }
    return (
        <SafeAreaView style={globalStyles.container}>
            <Header title="Hello" icon={navigateToFriendsScreen}></Header>
        </SafeAreaView>
    )
}