import React, { Component } from 'react'
import { Text, KeyboardAvoidingView, TouchableOpacity, View, FlatList } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

export default class ListDecks extends Component {
  state = {
    decks: [
      {
        title: 'title 1', 
        questions: []
      }, 
      {
        title: 'title 2',
        questions: []
      }
    ]
  }
  
  renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.questions.length} cards</Text>
      </View>
    )
  }  
  
  render() {
    const { decks } = this.state
    return (
      <View>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}
