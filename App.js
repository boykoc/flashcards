import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import AddDeck from './components/AddDeck'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
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
  
  createDeck(deck) {
    // Save to DB.
    
    // Save to state.
    this.setState(state => ({
      decks: state.decks.concat([ deck ])  
    }))
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
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <AddDeck 
            onCreateDeck={(deck) => {
              this.createDeck(deck)  
            }}
          />
          <View>
            <FlatList
              data={decks}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
