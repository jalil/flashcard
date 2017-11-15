import _ from "lodash";
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import {Button} from 'react-native-elements'

class Quiz extends Component {
QuestionsArray(title) {
    const decks = _.map(this.props.decks[title].questions, val => {
      return { ...val };
    });
    return decks;
  }

  render () {
   const  deckName = this.props.navigation.state.params.deckName;
   console.log(deckName);
//  const  questions =  this.QuestionsArray(deckName)[deckName]
   console.log(this.props.decks[deckName].questions);
    return (
      <View>
	<Text/>
        <Button title="Correct" />
	<Text/>
        <Button title="Inorrect" />
      </View>
    )
  }
}

export default connect(state => state)(Quiz)
