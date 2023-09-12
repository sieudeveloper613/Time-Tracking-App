import React from "react"
import { StyleSheet, Text, View } from "react-native"

/* components */
import TimerButton from "./TimerButton"

/* modules */
import PropTypes from "prop-types"

/* implements */
import { millisecondsToHuman } from "../utils/TimerUtils";

const Timer = ({ 
    id, 
    title, 
    project, 
    elapsed, 
    isRunning, 
    onEditPress,
    onRemovePress,
    onStartPress,
    onStopPress
}) => {

    const elapsedString = millisecondsToHuman(elapsed);

    /* function: handle event by removing timer */
    const handleRemovePress = () => {
        return onRemovePress(id);
    }

    /* function: handle event by starting timer */
    const handleStartPress = () => {
        return onStartPress(id);
    }

    /* function: handle event by stopping timer */
    const handleStopPress = () => {
        return onStopPress(id);
    }

    /* component: render action button to start and stop timer */
    const renderActionButton = () => {
        if(isRunning) {
            return(
                <TimerButton
                    color="#DB2828"
                    title="Stop"
                    onPress={handleStopPress}
                />
            );
        }
        return(
            <TimerButton
            color="#21BA45"
            title="Start"
            onPress={handleStartPress}
            />
        );
    }
    return (
        <View style={styles.timerContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text>{project}</Text>
            <Text style={styles.elapsedTime}>{elapsedString}</Text>
            <View style={styles.buttonGroup}>
                <TimerButton color="blue" small title="Edit" onPress={onEditPress} />
                <TimerButton color="blue" small title="Remove" onPress={handleRemovePress} />
            </View>
            {renderActionButton()}
        </View>
    )
}

export default Timer;

Timer.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    elapsed: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
    onEditPress: PropTypes.func.isRequired,
    onRemovePress: PropTypes.func.isRequired,
    onStartPress: PropTypes.func.isRequired,
    onStopPress: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
    timerContainer: {
        backgroundColor: "white",
        borderColor: "#d6d7da",
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
        margin: 16,
        marginBottom: 0,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
    },
    elapsedTime: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 16,
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
})