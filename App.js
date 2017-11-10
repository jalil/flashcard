import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckList from './src/components/DeckList'
import Deck from './src/components/Deck'
import NewDeck from './src/components/NewDeck'
import Quiz from './src/components/Quiz'
import { Header, Card, List, ListItem, Button } from 'react-native-elements'
import reducer from './src/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { TabNavigator, StackNavigator } from 'react-navigation'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'Deck List',
      tabBarLabel: 'Deck List'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'New Deck',
      tabBarLabel: 'New Deck'
    }
  }
})

const RootNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckList: {
    screen: DeckList
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'Add New Question'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
})

export default class App extends React.Component {
  renderDeck (deck) {
    return (
      <Text>
        {' '}{deck.text}{' '}
      </Text>
    )
  }
  render () {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100
  }
})
