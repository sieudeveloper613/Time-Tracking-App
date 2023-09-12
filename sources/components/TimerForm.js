import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"

/* components */
import TimerButton from "./TimerButton";

/* modules */
import PropTypes from "prop-types"

const TimerForm = ({ id, title: initialTitle, project: initialProject, onFormSubmit, onFormClose }) => {
    /* create state */
    const [title, setTitle] = useState(id ? initialTitle : "");
    const [project, setProject] = useState(id ? initialProject : "");

    const submitText = id ? "Update" : "Create";

    /* function: handle change title */
    const handleTitleChange = (newTitle) => {
        setTitle(newTitle);
    }

    /* function: handle change project name */
    const handleProjectChange = (newProject) => {
        setProject(newProject);
    }

    /* function: handle state when submitting  */
    const handleSubmit = () => {
        return onFormSubmit({ id, title, project });
    }

    return (
        <View style={styles.formContainer}>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Title</Text>
                <View style={styles.textInputContainer}> 
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        value={title}
                        onChangeText={handleTitleChange}
                    />
                </View>
            </View>
    
            <View style={styles.attributeContainer}> 
                <Text style={styles.textInputTitle}>Project</Text>
                <View style={styles.textInputContainer}> 
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        value={project}
                        onChangeText={handleProjectChange}
                    />
                </View>
            </View>
    
            <View style={styles.buttonGroup}>
                <TimerButton 
                    small 
                    color="#21BA45" 
                    title={submitText} 
                    onPress={handleSubmit}
                />
                <TimerButton 
                    small 
                    color="#DB2828" 
                    title="Cancel" 
                    onPress={onFormClose}    
                />
            </View>
        </View>
    )
}

export default TimerForm;

TimerForm.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    project: PropTypes.string,
    onFormSubmit: PropTypes.func.isRequired,
    onFormClose: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: "white",
        borderColor: "#D6D7DA",
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        borderColor: "#D6D7DA",
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});