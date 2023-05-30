import EndWorkoutButton from "../components/EndWorkoutButton";

export default function NewWorkout({ navigation }){
    const navigateToWorkoutScreen = () => {
        navigation.navigate('Tabs')
    }

    return (
        <EndWorkoutButton onclick={navigateToWorkoutScreen}></EndWorkoutButton>
    )
}