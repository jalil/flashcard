import _ from "lodash";
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import {Button} from 'react-native-elements'

class Quiz extends Component {
  state = {
	index: 0,
}
QuestionsArray(title) {
    const decks = _.map(this.props.decks[title].questions, val => {
      return { ...val };
    });
    return decks;
  }
askQuestion() {
   const  deckName = this.props.navigation.state.params.deckName;
   console.log(deckName);
//  const  questions =  this.QuestionsArray(deckName)[deckName]
   questions = this.props.decks[deckName].questions;
   const question = (questions[0].question);
  return 
question

}
correctAnswer () {

   const  deckName = this.props.navigation.state.params.deckName;
   console.log(deckName);
//  const  questions =  this.QuestionsArray(deckName)[deckName]
   questions = this.props.decks[deckName].questions;
   const question = (questions[0].question);

}
  render () {
   const  deckName = this.props.navigation.state.params.deckName;
   console.log(deckName);
//  const  questions =  this.QuestionsArray(deckName)[deckName]
   questions = this.props.decks[deckName].questions;
   const question = (questions[0].question);
    return (
      <View>
        <Text style={styles.question}> 
        {question}
       </Text>
	<Text/>
        <Button title="Correct" onPress={() => console.log("Correct") } />
	<Text/>
        <Button title="Incorrect"  onPress={ () => console.log("Incorrect")}/>
      </View>
    )
  }
}

styles = {
  question: {
     marginTop: 10,
    fontSize: 20,
    justifyContent: "center",
    alignSelf: "center"
  },
};
export default connect(state => state)(Quiz)
