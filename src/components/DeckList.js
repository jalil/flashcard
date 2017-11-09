import _ from 'lodash'
import React, { Component } from 'react'
import { FlatList,View, Text } from 'react-native'
import { Card, List, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions/'

import { fetchAllDecks } from '../../utils/api'

class DeckList extends Component {
  async componentDidMount () {
    const { dispatch } = this.props
    const data = await fetchAllDecks()
    dispatch(receiveDecks(data))
  }
  deckArray () {
    const decks = _.map(this.props.decks, val => {
      return { ...val }
    })
    return decks
  }
  render () {
    return (
      <View style={{ width: 350 }}>
	<FlatList data={this.deckArray()} renderItem={({item}) =>(
	<ListItem
	  title={item.title}
	/>
	)}
>
		
	</FlatList>
      </View>
    )
  }
}

export default connect(state => state)(DeckList)
