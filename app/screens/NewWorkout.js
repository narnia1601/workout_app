import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import EndWorkoutButton from "../components/EndWorkoutButton";
import BouncyCheckbox from 'react-native-bouncy-checkbox'

export default function NewWorkout({ navigation }){
    const navigateToWorkoutScreen = () => {
        navigation.navigate('Tabs')
    }

    const columns = [
        {
            Header: "Set",
            accessor: "set"
        },
        {
            Header: "Weight",
            accessor: 'weight'
        },
        {
            Header: 'Reps',
            accessor: 'reps'
        }
    ]
    const data = [
        {
            'set': '1',
            'weight': '10',
            'reps': '12'
        },
    ]

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
            <View style={styles.workout}>
                <View style={styles.title}>
                    <Text style={styles.exerciseName}>Exercise:</Text>
                    <TextInput style={styles.input} placeholder="Bench Press"></TextInput>
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
                    {data.map((set, idx) => (
                        <View style={styles.row} key={idx}>
                            <View style={styles.cell}>
                                <TextInput keyboardType="numeric" style={styles.cellText} placeholder={set.set}></TextInput>
                            </View>
                            <View style={styles.cell}>
                                <TextInput keyboardType="numeric" style={styles.cellText} placeholder={set.weight}></TextInput>
                            </View>
                            <View style={styles.cell}>
                                <TextInput keyboardType="numeric" style={styles.cellText} placeholder={set.reps}></TextInput>
                            </View>
                            <View style={styles.completedCell}>
                                <BouncyCheckbox size={30} style={styles.checkbox}></BouncyCheckbox>
                            </View>
                        </View>
                    ))}
                </View>
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
    workout: {
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    exerciseName: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: 10
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
})