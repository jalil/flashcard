import tolower from "lodash.tolower";
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {TextInput} from 'react-native'
import {connect} from 'react-redux'
import { addNewCard } from '../actions/index'
import { saveNewCard } from "../../utils/api";

class NewDeck extends Component {

 state = {
   question: "",
   answer: ""
};

saveCard = () => {
    const {deckTitle} = this.props.navigation.state.params.deckTitle;
   console.log("POW",deckTitle);
     const { question, answer } = this.state;
     this.props.dispatch(addNewCard(deckTitle, { question, answer }));
    saveNewCard(deckTitle, { question, answer });
     this.props.navigation.goBack();
  };

  render () {
 const {deckTitle} = this.props.navigation.state.params.deckTitle
    return (
      <View>
	<Text style={styles.title}>{deckTitle}</Text>
        <TextInput 
            placeholder="Question"
             style={{height: 40,padding: 10, borderColor: 'gray', borderWidth: 1}}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
          />
        <TextInput 
            placeholder="Answer"
             style={{height: 40,padding: 10, borderColor: 'gray', borderWidth: 1}}
onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
  <Text/> 
        <Button title='Add To Deck' backgroundColor='#03A9F4'
         buttonStyle={{ borderRadius: 10}}
        onPress={this.saveCard}
 />
      </View>
    )
  }

}
const styles = {
   title: {
     fontSize: 20,
     justifyContent: "center",
     alignSelf: "center",
     margin: 10
   }
 };
export default connect()(NewDeck);
