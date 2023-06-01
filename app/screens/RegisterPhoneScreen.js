import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Keyboard, TouchableWithoutFeedback } from "react-native";
import { CommonActions } from '@react-navigation/native';

export default function RegisterPhoneScreen({ navigation }) {

  const navigateToHomeScreen = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'Tabs' },
        ],
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.component}>
          <Text style={styles.heading}>TrainTogether</Text>
          <Text style={styles.heading2}>Welcome!</Text>
          <Text style={styles.heading2}>Enter your phone number to create an account</Text>
          <TextInput style={styles.input} keyboardType="numeric" placeholderTextColor='white' placeholder='Enter your number:'></TextInput>
          <TouchableOpacity style={styles.button} onPress={navigateToHomeScreen}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    alignItems: 'center',
    marginTop: '40%'
  },
  heading: {
    fontSize: 30,
    marginBottom: 30,
    color: 'white'
  },
  heading2: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 20,
    padding: 10,
    color: 'white'
  },
  button: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 15,
    padding: 10
  },
  buttonText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  }
});