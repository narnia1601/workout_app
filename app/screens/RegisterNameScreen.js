import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../globalStyles';

export default function RegisterNameScreen({ navigation }){
    const [name, setName] = useState('')

    const handleInputChange = (text) => {
        setName(text)
    }

    const navigateToRegisterPhoneScreen = () => {
        navigation.navigate('RegisterPhone');
    };

    return (
      <View style={styles.component}>
          <Text style={styles.heading}>TrainTogether</Text>
          <Text style={styles.heading2}>Welcome on this workout journey!</Text>
          <Text style={styles.heading2}>What's your name?</Text>
          <TextInput style={styles.input} placeholderTextColor='white' onChangeText={handleInputChange} placeholder='Enter your name:'></TextInput>
          <TouchableOpacity style={styles.button} onPress={navigateToRegisterPhoneScreen}>
          <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
      </View>
    )
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
      color: 'white'
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