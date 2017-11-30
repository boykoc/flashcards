import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
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
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.listItem}
          onPress={() => this.props.navigation.navigate(
            'Deck',
            { deck: item.title }
        )}>
          <Text style={styles.listTitle}>{item.title}</Text>
          <Text style={styles.text}>{item.questions.length} cards</Text>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row'
  },
  listItem: {
    flex: 1
  },
  listTitle: {
    marginLeft: 12,
    fontSize: 16
  },
  text: {
    marginLeft: 12,
    fontSize: 14
  }
})

export default connect(mapStateToProps)(ListDecks)
