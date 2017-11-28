import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
  // This wont show for some reason.
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
        <TouchableOpacity>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity>
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