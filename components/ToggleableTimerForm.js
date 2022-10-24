import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

// import others child component
import TimerButton from './TimerButton'
import TimerForm from './TimerForm'

export default class ToggleableTimerForm extends React.Component{
  state = {
    isOpen: false,
  };

  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,  
  }

  handleFormOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleFormClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleFormSubmit = timer => {
    const { onFormSubmit } = this.props;

    onFormSubmit(timer);
    this.setState({ isOpen: false });
  };

  render(){
    const { isOpen } = this.state;
    return (
      <View style={[styles.container, !isOpen && styles.buttonPadding]}>
        {isOpen ? (
          <TimerForm 
            onFormSubmit={this.handleFormSubmit}
            onFormClose={this.handleFormClose}
          />
        ) : ( 
          <TimerButton title='+' color='black' onPress={this.handleFormOpen}/>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    buttonPadding: {
        paddingHorizontal: 15,
    }
})