import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { globalStyles } from "../globalStyles";
import Card from '../components/Card'

export default function HomeScreen({ navigation }){
    const navigateToFriendsScreen = () => {
        navigation.navigate('Friends')
    }
    return (
        <SafeAreaView style={globalStyles.container}>
            <Header title="Hello" icon={navigateToFriendsScreen}></Header>
            <Card text="Your friend has completed a workout!"></Card>
        </SafeAreaView>
    )
}