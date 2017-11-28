import React, { Component } from 'react'
import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity, View } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class AddDeck extends Component {
  state = {
    title: '',
    questions: []
  }
    
  handleSubmit = () => {
    // Hoist state (the deck) to App.
    // TODO: Switch this to redux because it seems to be painful to
    //       pass around props with navigation when the time comes.
    this.props.onCreateDeck(this.state)
    
    // Save to redux store
    this.props.dispatch(addDeck(this.state.title))
    
    // Save to DB
    saveDeckTitle(this.state.title)
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

export default connect()(AddDeck)