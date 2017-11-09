import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, List, ListItem, Button } from 'react-native-elements'

class Deck extends Component {
  renderDecks () {
    return this.props.decks.map(deck => {
      return this.props.renderDeck(deck)
    })
  }
  render () {
    return (
      <View>
        {this.renderDecks()}
      </View>
    )
  }
}

export default Deck
