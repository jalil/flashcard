import React, { Component } from 'react'
import {View, Text} from 'react-native'
import {Card, List, ListItem, Button} from 'react-native-elements'

const decklist = [
{
 name: "Javascript"
},
 {
  name: "React.js"
},
]
class DeckList extends Component {
  render() {
	return (
	<View style={{width: 350}}> 
	<Card title=" All Decks" imageStyle={{width: 345}}>
	<List containerStyle={{marginBottom: 20}}>
  {
    decklist.map((l, i) => (
      <ListItem
        key={i}
        title={l.name}
      />
    ))
  }
</List>
	  <Button title="Create A New Deck" backgroundColor="#03A9F4" />
	</Card>
	</View> 
	)
  }
}

export default DeckList;
