import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
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
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length}</Text>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate(
            'AddCard',
            { deck: deck.title }
        )}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate(
            'CardQuiz',
            { deck: deck.title }
        )}>
          <Text>Start Quiz</Text>
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

export default connect(mapStateToProps)(Deck)