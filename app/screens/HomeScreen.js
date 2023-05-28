import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { StyleSheet } from "react-native";
import { globalStyles } from "../globalStyles";

export default function HomeScreen(){
    return (
        <SafeAreaView style={globalStyles.container}>
            <Header title="Hello"></Header>
        </SafeAreaView>
    )
}