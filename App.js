import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckList from './src/components/DeckList'
import Deck from './src/components/Deck'
import AddCard from './src/components/AddCard'
import { Header, Card, List, ListItem, Button } from 'react-native-elements'
import reducer from './src/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const DATA = [
  {
    id: 1,
    text: 'JAVASCRIPT'
  },
  {
    id: 2,
    text: 'REACTJS'
  },
  {
    id: 2,
    text: 'REACTJS'
  },
  {
    id: 2,
    text: 'REACTJS'
  },
  {
    id: 2,
    text: 'REACTJS'
  }
]

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
	<DeckList />
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
