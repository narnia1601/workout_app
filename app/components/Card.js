import { StyleSheet, View, Text } from "react-native"

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Text>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },
});
