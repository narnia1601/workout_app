import { FlatList, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
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
    const [dataArr, setDataArr] = useState(Object.keys(data));

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

    const addSet = (exerciseName) => {
        setData(prevData => {
          const updatedData = {
            ...prevData,
            [exerciseName]: [
              ...prevData[exerciseName],
              {
                'set': String(prevData[exerciseName].length + 1),
                'weight': '-',
                'reps': '-'
              }
            ]
          };
          return updatedData;
        });
    };

    const removeSet = (exerciseName) => {
        setData(prevData => {
          const updatedData = {
            ...prevData,
            [exerciseName]: prevData[exerciseName].slice(0, -1)
          };
          return updatedData;
        });
    };

    const addExercise = () => {
        const newData = { ...data };
        newData['-'] = [{ set: '1', weight: '-', reps: '-' }];
        setData(newData);
        setDataArr(Object.keys(newData));
    };

    return (
        <FlatList
        data={dataArr}
        ListHeaderComponent={() => (
            <View style={styles.header}>
            <Text style={styles.headerText}>New Workout</Text>
            </View>
        )}
        renderItem={(itemData) => {
            return (
                <View style={styles.workout}>
                    <View style={styles.title}>
                        <Text style={styles.inputLabel}>Exercise:</Text>
                        <TextInput style={styles.input} placeholderTextColor='gray' placeholder={itemData.item}></TextInput>
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
                        </View>
                        <FlatList data={data[itemData.item]} renderItem={(exercise) => {
                            return (
                                <View style={styles.row}>
                                    <View style={styles.cell}>
                                        <Text style={styles.cellText}>{exercise.item.set}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <TextInput keyboardType="numeric" style={styles.cellText} placeholderTextColor='gray' placeholder={exercise.item.weight}></TextInput>
                                    </View>
                                    <View style={styles.cell}>
                                        <TextInput keyboardType="numeric" style={styles.cellText} placeholderTextColor='gray' placeholder={exercise.item.reps}></TextInput>
                                    </View>
                                </View>
                            )
                        }}></FlatList>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => addSet(itemData.item)}>
                        <Text style={styles.buttonText}>Add new set</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.removeSetButton} onPress={() => removeSet(itemData.item)}>
                        <Text style={styles.buttonText}>Remove set</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.removeSetButton}>
                        <Text style={styles.buttonText}>Delete Exercise</Text>
                    </TouchableOpacity>
                </View>
            )
        }}
        keyExtractor={(itemData) => itemData}
        ListFooterComponent={() => (
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.newExerciseButton} onPress={addExercise}>
                    <Text style={styles.buttonText}>Add new exercise</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.endWorkoutButton}>
                    <Text style={styles.buttonText}>End Workout</Text>
                </TouchableOpacity>
            </View>
        )}
        />
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginTop: 50,
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
    newExerciseButton: {
        backgroundColor: '#15202b',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 15
    },
    endWorkoutButton: {
        backgroundColor: 'red',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
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
        color: 'white',
        width: '70%'
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
        fontSize: 30,
        color: 'white'
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