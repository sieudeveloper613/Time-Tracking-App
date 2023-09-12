import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

/* modules */
import PropTypes from "prop-types";

export default function TimerButton({ color, title, small, onPress }) {
  return (
    <TouchableOpacity
        style={[styles.button, { borderColor: color }]}
        onPress={onPress}>
        <Text
            style={[
                styles.buttonText,
                small ? styles.small : styles.large,
                { color }
            ]}
        >
            {title}
        </Text>
    </TouchableOpacity>
  )
}

TimerButton.propTypes = {
    color: PropTypes.string,
    small: PropTypes.bool,
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}


const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        minWidth: 100,
        borderWidth: 2,
        borderRadius: 4,
    },
    small: {
        fontSize: 14,
        padding: 4,
    },
    large: {
        fontSize: 16,
        padding: 10,

    },
    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
    },
    elapsedTime: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 10,
    },
})