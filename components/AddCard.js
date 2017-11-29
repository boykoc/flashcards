import React, { Component } from 'react'
import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity, View } from 'react-native'
import { addCardToDeck } from '../utils/api'
import { connect } from 'react-redux'
import { addCard } from '../actions'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }
    
  handleSubmit = () => {
    const { deck } = this.props.navigation.state.params
    // Save to redux store
    this.props.dispatch(addCard(
      deck, this.state
    ))
    
    // Save to DB
    addCardToDeck(deck, this.state)
    
    // Navigate back to list.
    this.props.navigation.goBack()
    
    // Clear question and answer for next card.
    this.setState(() => ({
      question: '',
      answer: ''
    }))    
  }
  
  handleQuestionTextChange = (textValue) => {
    this.setState(() => ({ question: textValue }))
  }

  handleAnswerTextChange = (textValue) => {
    this.setState(() => ({ answer: textValue }))
  }  
    
  render() {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          value={question}
          placeholder='Question'
          onChangeText={this.handleQuestionTextChange}
        />
        <TextInput
          value={answer}
          placeholder='Answer'
          onChangeText={this.handleAnswerTextChange}
        />        
        <TouchableOpacity 
          onPress={this.handleSubmit} >
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddCard)