import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

class CardQuiz extends Component {
  state = {
    cardIndex: 0,
    numberCorrect: 0,
    showAnswer: false
  }
    
  handleAnswerToggle = () => {
    // Toggle between the question and answer.
    this.setState((state) => ({
      showAnswer: !state.showAnswer
    }))
  }

  handleCorrect = () => {
    // Move to next question.
    
    // Set quiz state.
    this.setState((state) => ({
      cardIndex: state.cardIndex + 1,
      numberCorrect: state.numberCorrect + 1
    }))    
  }
  
  handleIncorrect = () => {
    // Move to next question.
    
    // Set quiz state.
    this.setState((state) => ({
      cardIndex: state.cardIndex + 1
    }))    
  }  
    
    render() {
    const { cardIndex, numberCorrect, showAnswer } = this.state
    const { deck } = this.props
    
    return (
      <View behavior='padding'>
        {deck.questions.length > cardIndex ?
          <View>
            <Text>{cardIndex + 1} / {deck.questions.length}</Text>
            {showAnswer === true ?
              <Text>{deck.questions[cardIndex].answer}</Text>
            : 
              <Text>{deck.questions[cardIndex].question}</Text>
            }          
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
        :
          <Text>{(numberCorrect / deck.questions.length * 100).toFixed(2)} % Correct!</Text>
        }
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