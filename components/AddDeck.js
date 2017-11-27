import React, { Component } from 'react'
import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity, View } from 'react-native'

export default class AddDeck extends Component {
  state = {
    title: '',
    questions: []
  }
    
  handleSubmit = () => {
    // Hoist state (the deck) to App.
    this.props.onCreateDeck(this.state)
  }
  
  handleTextChange = (textValue) => {
    this.setState(() => ({ title: textValue }))
  }
    
  render() {
    const { title } = this.state
    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          value={title}
          placeholder='Deck Title'
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity 
          onPress={this.handleSubmit} >
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}