import RegisterNameScreen from './screens/RegisterNameScreen';
import RegisterPhoneScreen from './screens/RegisterPhoneScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkoutScreen from './screens/WorkoutScreen';
import { globalStyles } from './globalStyles';
import FriendsScreen from './screens/FriendsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


// bottom navbar and components
function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Workout" component={WorkoutScreen}/>
    </Tab.Navigator>
  );
}

// screens 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, contentStyle: globalStyles.container}}>
        <Stack.Screen name="RegisterName" component={RegisterNameScreen} />
        <Stack.Screen name="RegisterPhone" component={RegisterPhoneScreen} />
        <Stack.Screen name="Home" component={BottomTabNavigator}/>
        <Stack.Screen name="Friends" component={FriendsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
