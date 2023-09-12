import React, { useState } from "react"
import { StyleSheet, View } from "react-native"

/* components */
import TimerForm from "./TimerForm"
import TimerButton from "./TimerButton"

/* modules */
import PropTypes from "prop-types"

const ToggleableTimerForm = ({ onFormSubmit }) => {
  /* create state */
  const [isOpen, setIsOpen] = useState(false);

  /* function: set form is open */
  const handleFormOpen = () => {
    setIsOpen(true);
  }

  /* function: set form is close */
  const handleFormClose = () => {
    setIsOpen(false);
  }

  /* function: handle form when submitting */
  const handleFormSubmit = (timer) => {
    onFormSubmit(timer);
    setIsOpen(false);
  }

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm 
          onFormSubmit={handleFormSubmit}
          onFormClose={handleFormClose}
        />
      ) : ( 
        <TimerButton title="+" color="black" onPress={handleFormOpen}/>
      )}
    </View>
  )
}

export default ToggleableTimerForm;

ToggleableTimerForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    buttonPadding: {
        paddingHorizontal: 15,
    }
})