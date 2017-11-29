import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

class CardQuiz extends Component {
  state = {
    cardIndex: 0,
    numberCorrect: 0
  }
    
  handleAnswerToggle = () => {
    // Toggle between the question and answer.
  }

  handleCorrect = () => {
    // Move to next question.
    
    // Set quiz state.
    this.setState(() => ({
      cardIndex: '',
      numberCorrect: ''
    }))    
  }
  
  handleIncorrect = () => {
    // Move to next question.
    
    // Set quiz state.
    this.setState(() => ({
      cardIndex: '',
      numberCorrect: ''
    }))    
  }  
    
  render() {
    const { cardIndex, numberCorrect } = this.state
    const { deck } = this.props
    return (
      <View behavior='padding'>
        <Text>{cardIndex + 1} / {deck.questions.length}</Text>
        <Text>Question Goes Here</Text>
        <TouchableOpacity 
          onPress={this.handleAnswerToggle} >
          <Text>Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={this.handleCorrect} >
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={this.handleIncorrect} >
          <Text>Incorrect</Text>
        </TouchableOpacity>        
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }) {
  const { deck } = navigation.state.params
  
  return {
    deck: state[deck]
  }
}

export default connect(mapStateToProps)(CardQuiz)