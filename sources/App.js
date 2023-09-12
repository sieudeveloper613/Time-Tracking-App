import React, { useEffect, useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView
} from "react-native"

/* components */
import EditableTimer from "./components/EditableTimer"
import ToggleableTimerForm from "./components/ToggleableTimerForm"

/* modules */
import { v4 as uuidv4 } from "uuid"
import "react-native-get-random-values"

/* implements */
import { newTimer } from "./utils/TimerUtils"

const App = () => {
    /* create state */
    const [timers, setTimers] = useState([
        {
            title: "Mow the lawn",
            project: "House Chores",
            id: uuidv4(),
            elapsed: 5456099,
            isRunning: false,
        },
        {
            title: "Bake squash",
            project: "Kitchen chores",
            id: uuidv4(),
            elapsed: 1273998,
            isRunning: false,
        }]);

    /* create useEffect to handle events */
    useEffect(() => {
        const TIME_INTERVAL = 1000;
        const intervalId = setInterval(() => {
          setTimers((prevTimers) =>
            prevTimers.map((timer) => ({
              ...timer,
              elapsed: timer.isRunning ? timer.elapsed + TIME_INTERVAL : timer.elapsed,
            }))
          );
        }, TIME_INTERVAL);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);

    /* function: handle event by creating form submit */
    const handleCreateFormSubmit = (timer) => {
        setTimers([newTimer(timer), ...timers]);
    }

    /* function: handle event by handling form submit */
    const handleFormSubmit = (attrs) => {
        setTimers((prevTimers) =>
        prevTimers.map((timer) => {
            if (timer.id === attrs.id) {
            const { title, project } = attrs;

            return {
                ...timer,
                title,
                project,
            };
            }
            return timer;
        })
        );
    }

    /* function: handle event by removing timers by timer id */
    const handleRemovePress = (timerId) => {
        let remove = timers.filter(timer => timer.id != timerId);
        setTimers(remove);
    }

    /* function: handle start or stop timer */
    const toggleTimer = (timerId) => {
        setTimers(prevState => {
            return prevState.map(timer => {
                if (timer.id === timerId) {
                    return {
                        ...timer,
                        isRunning: !timer.isRunning
                    };
                }
                return timer;
            })
        })
    }
   
    return (
        <View style={styles.appContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Timers</Text>
            </View>

            <KeyboardAvoidingView
                behavior="padding"
                style={styles.timerListContainer}>
                <ScrollView style={styles.timeList}>
                    <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
                    {timers.map(({ title, project, id, elapsed, isRunning }) => (
                        <EditableTimer
                            key={id}
                            id={id}
                            title={title}
                            project={project}
                            elapsed={elapsed}
                            isRunning={isRunning}
                            onFormSubmit={handleFormSubmit}
                            onRemovePress={handleRemovePress}
                            onStartPress={toggleTimer}
                            onStopPress={toggleTimer}
                        />
                    ))}
                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    )
}

export default App

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    titleContainer: {
        paddingTop: 36,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#D6D7DA"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    timeList: {
        paddingBottom: 16,
    },
    timerListContainer: {
        flex: 1,
    }
})