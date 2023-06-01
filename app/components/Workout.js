import { StyleSheet, TextInput, View, Text, TouchableOpacity, FlatList } from "react-native";
import BouncyCheckbox from 'react-native-bouncy-checkbox'

export default function Workout(props){
    return (
        <View style={styles.workout}>
            <View style={styles.title}>
                <Text style={styles.inputLabel}>Exercise:</Text>
                <TextInput style={styles.input} placeholderTextColor='gray' placeholder="Bench Press"></TextInput>
            </View>
            <View style={styles.table}>
                <View style={styles.row}>
                    <View style={styles.cell}>
                        <Text style={styles.cellHeaderText}>Set:</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cellHeaderText}>Weight:</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cellHeaderText}>Reps:</Text>
                    </View>
                    <View style={styles.completedCell}>
                        <Text style={styles.cellHeaderText}>Completed:</Text>
                    </View>
                </View>
                <FlatList
                    data={props.data}
                    renderItem={(itemData) => {
                        return (
                        <View style={styles.row}>
                            <View style={styles.cell}>
                                <TextInput keyboardType="numeric" style={styles.cellText} placeholderTextColor='white' placeholder={itemData.item.set}></TextInput>
                            </View>
                            <View style={styles.cell}>
                                <TextInput keyboardType="numeric" style={styles.cellText} placeholderTextColor='white' placeholder={itemData.item.weight}></TextInput>
                            </View>
                            <View style={styles.cell}>
                                <TextInput keyboardType="numeric" style={styles.cellText} placeholderTextColor='white' placeholder={itemData.item.reps}></TextInput>
                            </View>
                            <View style={styles.completedCell}>
                                <BouncyCheckbox size={30} style={styles.checkbox}></BouncyCheckbox>
                            </View>
                        </View>
                        );
                    }}
                ></FlatList>
                <TouchableOpacity style={styles.button} onPress={props.addSet}>
                    <Text style={styles.buttonText}>Add new set</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.removeSetButton} onPress={props.removeSet}>
                    <Text style={styles.buttonText}>Remove set</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    workout: {
        backgroundColor: '#8899a6',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
    },
    inputLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: 10,
        color: 'white'
    },
    input: {
        fontSize: 18,
        color: 'white'
    },
    title: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    table: {
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        flex: 4,
        padding: 10,
    },
    completedCell: {
        flex: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkbox: {
        transform: [{ translateX: 6 }], // Adjust the translation as needed
    },
    cellHeaderText: {
        textAlign: 'center',
        fontSize: 15
    },
    cellText: {
        textAlign: 'center',
        fontSize: 30
    },
    button: {
        backgroundColor: '#15202b',
        padding: 10,
        margin: 10,
    },
    removeSetButton: {
        backgroundColor: 'red',
        padding: 10,
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    }
})