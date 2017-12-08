import _ from 'lodash'
import tolower from 'lodash.tolower'
import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { addNewDeck } from '../actions/'
import { connect } from 'react-redux'
import { SaveNewDeck } from '../../utils/api'

class NewDeck extends Component {
  constructor (props) {
    super(props)
    this.state = { title: 'DeckName' }
  }

  newDeck () {
    const { title } = this.state
    const deckTitle = tolower(title)
    this.props.dispatch(addNewDeck(deckTitle))
    SaveNewDeck(deckTitle)
    this.props.navigation.navigate('Deck', { deckTitle })
  }

  render () {
    return (
      <View>
        <Text style={styles.title}>What is the title of your new deck </Text>
        <Text />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 20
          }}
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />

        <Text />
        <Button title='Submit' onPress={() => this.newDeck()} />
      </View>
    )
  }
}
styles = {
  title: {
    fontSize: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 25
  }
}
export default connect()(NewDeck)
