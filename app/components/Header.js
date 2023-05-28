import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Header(props){
    return (
          <View style={styles.container}>
              <Text style={styles.title}>{props.title}</Text>
              <TouchableOpacity onPress={props.icon}>
                <Image source={require('../assets/friends.png')} style={styles.image} tintColor="white"></Image>
              </TouchableOpacity>
          </View>    
    )
}

const styles = StyleSheet.create({
    container: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 15,
      paddingRight: 15
    },
    title: {
      fontSize: 23,
      fontWeight: 'bold',
      color: 'white',
    },
    image: {
      width: 35,
      height: 35,
    }
  });