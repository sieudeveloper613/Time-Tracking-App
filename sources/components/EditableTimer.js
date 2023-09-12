
import React, { useState } from "react"

/* modules */
import PropTypes from "prop-types"

/* components */
import Timer from "./Timer"
import TimerForm from "./TimerForm"

const EditableTimer = ({
    id, 
    title, 
    project,
    elapsed,
    isRunning,
    onFormSubmit,
    onRemovePress,
    onStartPress,
    onStopPress
}) => {
    
    /* create state */
    const [editFormOpen, setEditFormOpen] = useState(false);

    /* function:  handle open form to edit */
    const handleEditPress = () => {
        return openForm();
    }

    /* function: handle close form to cancel */
    const handleFormClose = () => {
        return closeForm();
    }

    /* function: create form or edit form */
    const handleSubmit = (timer) => {
        onFormSubmit(timer);
        return closeForm();
    }

    /* function: close form */
    const closeForm = () => {
        setEditFormOpen(false);
    }

    /* function: open form */
    const openForm = () => {
        setEditFormOpen(true);
    }

    if (editFormOpen) {
        return (
            <TimerForm 
                id={id} 
                title={title} 
                project={project}
                onFormSubmit={handleSubmit}
                onFormClose={handleFormClose}/>
            );
    }
    return (
        <Timer
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            onEditPress={handleEditPress}
            onRemovePress={onRemovePress}
            onStartPress={onStartPress}
            onStopPress={onStopPress}
        />
    )
}

export default EditableTimer;

EditableTimer.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    elapsed: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    onRemovePress: PropTypes.func.isRequired,
    onStartPress: PropTypes.func.isRequired,
    onStopPress: PropTypes.func.isRequired,
};
