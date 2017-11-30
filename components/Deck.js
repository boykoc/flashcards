import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
  // This wont show for some reason.
  // I believe this because of npm's version of react-navigation.
  // This actually works when built, but not in emulators.
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    
    return {
      title: deck
    }
  }
  
  render() {
    const { deck } = this.props
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.text}>{deck.questions.length} cards</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => this.props.navigation.navigate(
            'AddCard',
            { deck: deck.title }
        )}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => this.props.navigation.navigate(
            'CardQuiz',
            { deck: deck.title }
        )}>
          <Text style={styles.buttonText}>Start Quiz</Text>
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
  }
})

export default connect(mapStateToProps)(Deck)