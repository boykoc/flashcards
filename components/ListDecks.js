import React, { Component } from 'react'
import { Text, KeyboardAvoidingView, TouchableOpacity, View, FlatList } from 'react-native'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { recieveDecks } from '../actions'

class ListDecks extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    
    getDecks().then(
      (decks) => dispatch(recieveDecks(decks))
    )
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
    const { decks } = this.props
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

function mapStateToProps (decks) {
  return {
    decks: Object.keys(decks).map((deck) => (decks[deck]))
  }
}

export default connect(mapStateToProps)(ListDecks)