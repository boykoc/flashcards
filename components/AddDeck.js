import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class AddDeck extends Component {
  state = {
    title: '',
    questions: []
  }
    
  handleSubmit = () => {
    // Save to redux store
    this.props.dispatch(addDeck(
      {
        [this.state.title]: {
          title: this.state.title,
          questions: []
        }
      }
    ))
    
    // Save to DB
    saveDeckTitle(this.state.title)
    
    // Navigate to new deck.
    this.props.navigation.navigate(
      'Deck',
      { deck: this.state.title }
    )
    
    // Clear title for next deck.
    this.setState(() => ({ title: '' }))    
  }
  
  handleTextChange = (textValue) => {
    this.setState(() => ({ title: textValue }))
  }
    
  render() {
    const { title } = this.state
    return (
      <KeyboardAvoidingView 
        behavior='padding'
        style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          value={title}
          placeholder='Deck Title'
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit} >
          <Text style={styles.buttonText}>Save Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  },
  title: {
    margin: 12,
    fontSize: 16
  },
  text: {
    marginLeft: 12,
    fontSize: 14
  },
  button: {
    margin: 12,
    fontSize: 14,
    backgroundColor: '#292477',
    padding: 12,
    alignItems: 'center',
    borderRadius: 3,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 2
  }, 
  buttonText: {
    color: '#FFFFFF'
  },
  input: {
    height: 44,
    padding: 12,
    margin: 12,
    borderColor: '#292477'
  }
})

export default connect()(AddDeck)