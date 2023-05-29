import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EndWorkoutButton(props){
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={props.onclick}>
                <Text style={styles.buttonText}>End Workout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 50,
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    button: {
      backgroundColor: 'red',
      paddingHorizontal: 50,
      paddingVertical: 12,
      borderRadius: 8,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });