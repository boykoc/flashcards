import React from 'react'
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native'
import AddDeck from './components/AddDeck'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import ListDecks from './components/ListDecks'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { StatusBar } from 'react-native';
import { Constants } from 'expo'

function FlashcardsStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  ListDecks: {
    screen: ListDecks,
    navigationOptions: {
      headerTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: '#292477'
      },
      tabBarLabel: 'Decks'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      headerTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: '#292477'
      },
      tabBarLabel: 'Add Deck'
    }
  }
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#292477' : '#FFFFFF',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? '#FFFFFF' : '#292477',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <FlashcardsStatusBar backgroundColor='#292477' barStyle='light-content' />
          <Tabs />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
