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
    
    // Navigate back to list.
    this.props.navigation.goBack()
    
    // Clear title for next deck.
    this.setState(() => ({ title: '' }))    
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