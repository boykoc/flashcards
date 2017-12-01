import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/notification'

class CardQuiz extends Component {
  state = {
    cardIndex: 0,
    numberCorrect: 0,
    showAnswer: false
  }
  
  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
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
      numberCorrect: state.numberCorrect + 1,
      showAnswer: false
    }))    
  }
  
  handleIncorrect = () => {
    // Move to next question.
    
    // Set quiz state.
    this.setState((state) => ({
      cardIndex: state.cardIndex + 1,
      showAnswer: false
    }))    
  }  
    
  render() {
    const { cardIndex, numberCorrect, showAnswer } = this.state
    const { deck } = this.props
    
    return (
      <View style={styles.container}>
        {deck.questions.length > cardIndex ?
          <View>
            <Text style={styles.count}>{cardIndex + 1} / {deck.questions.length}</Text>
            {showAnswer === true ?
              <Text style={styles.title}>{deck.questions[cardIndex].answer}</Text>
            : 
              <Text style={styles.title}>{deck.questions[cardIndex].question}</Text>
            }          
            <TouchableOpacity 
              style={styles.button}
              onPress={this.handleAnswerToggle} >
              <Text style={styles.buttonText}>Answer</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
              onPress={this.handleCorrect} >
              <Text style={styles.buttonText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
              onPress={this.handleIncorrect} >
              <Text style={styles.buttonText}>Incorrect</Text>
            </TouchableOpacity>   
          </View>
        :
          <View style={styles.centerContainer}>
            <Text style={styles.center}>{(numberCorrect / deck.questions.length * 100).toFixed(2)}% Correct!</Text>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => this.props.navigation.navigate(
                'Deck',
                { deck: deck.title }
              )}
            >
              <Text style={styles.buttonText}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
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
  center: {
    fontSize: 16
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function mapStateToProps(state, { navigation }) {
  const { deck } = navigation.state.params
  
  return {
    deck: state[deck]
  }
}

export default connect(mapStateToProps)(CardQuiz)