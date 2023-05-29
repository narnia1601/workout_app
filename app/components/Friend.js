import { StyleSheet, View, Text } from "react-native";

export default function Friend(){
    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <View style={styles.circle}></View>
                <Text style={styles.name}>Name</Text>
            </View>
            <View style={styles.button}>
                <Text>Add</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10
    },
    circle: {
        width: 65,
        height: 65,
        borderRadius: 50,
        backgroundColor: 'white',
        marginRight: 10
    },
    name: {
        color: 'white',
        fontSize: 20
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'white',
        width: 60,
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})