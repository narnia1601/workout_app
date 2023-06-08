import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Workout from "../components/Workout";
import { useState } from "react";
import { CommonActions } from "@react-navigation/native";

export default function NewWorkout({ navigation }){
    const [data, setData] = useState({
        'Bench Press': [
            {
                'set': '1',
                'weight': '10',
                'reps': '12'
            }
        ]
    })
    const [dataArr, setDataArr] = useState(Object.keys(data).map((key) => ({key: key})))

    const navigateToWorkoutScreen = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'Tabs' }
                ]
            })
        )
    }

    const addExercise = (exerciseName) => {
        currentData = data
        currentData[exerciseName] = [
            {
                'set': '1',
                'weight': '-',
                'reps': '-'
            }
        ]
        setData(currentData)
        setDataArr(Object.keys(data).map((key) => ({key: key})))
    }

    const deleteExercise = (exerciseName) => {
        currentData = data
        delete currentData[exerciseName]
        setData(currentData)
        setDataArr(Object.keys(data).map((key) => ({key: key})))
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

    const handleCellChange = (text, column, idx, oldValue) => {
        console.log(text,column,idx,oldValue)
        const newData = [...data]
        if(column == 'weight'){
            if(text == ''){
                newData[idx]['weight'] = oldValue
            }else{
                newData[idx]['weight'] = text
            }
        }else{
            if(text == ''){
                newData[idx]['reps'] = oldValue
            }else{
                newData[idx]['reps'] = text
            }
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container} scrollEventThrottle={40}>
            <View style={styles.header}>
                <Text style={styles.headerText}>New Workout</Text>
            </View>
                <FlatList data={dataArr} renderItem={(itemData) => {
                    return (
                        <Workout data={data[itemData.item.key]} exerciseName={itemData.item.key} deleteExercise={deleteExercise}></Workout>
                    )
                }}></FlatList>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => addExercise('-')}>
                        <Text style={styles.buttonText}>Add new exercise</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.endWorkoutButton} onPress={navigateToWorkoutScreen}>
                        <Text style={styles.buttonText}>End Workout</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
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
    },
    container: {
        flexGrow: 1,
        paddingBottom: 20
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      },
    endWorkoutButton: {
        backgroundColor: 'red',
        paddingHorizontal: 73,
        paddingVertical: 12,
        borderRadius: 8,
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 50,
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
})