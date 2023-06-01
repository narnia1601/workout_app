import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import EndWorkoutButton from "../components/EndWorkoutButton";
import Workout from "../components/Workout";
import { useState } from "react";

export default function NewWorkout({ navigation }){
    const [data, setData] = useState([
        {
            'set': '1',
            'weight': '10',
            'reps': '12'
        },
    ])
    const navigateToWorkoutScreen = () => {
        navigation.navigate('Tabs')
    }

    const addSet = () => {
        num = data.length
        newData = {
            'set': (num + 1).toString(),
            'weight': '-',
            'reps': '-'
        }
        setData(currentData => [...currentData, newData])
    }

    const removeSet = () => {
        setData(currentData => currentData.slice(0, -1))
    }

    const handleCellChange = (text, rowIndex, colIndex) => {
        const newData = [...tableData];
        newData[rowIndex][colIndex] = text;
        setTableData(newData);
    };

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>New Workout</Text>
            </View>
            <Workout data={data} addSet={addSet} removeSet={removeSet}></Workout>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    headerText: {
        color: 'white',
        fontSize: 25
    }
})