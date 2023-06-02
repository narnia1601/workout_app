import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
        console.log(newData)
    }

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>New Workout</Text>
            </View>
            <Workout data={data} addSet={addSet} handleCellChange={handleCellChange} removeSet={removeSet}></Workout>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={navigateToWorkoutScreen}>
                    <Text style={styles.buttonText}>End Workout</Text>
                </TouchableOpacity>
            </View>
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
    },
    container: {
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
})