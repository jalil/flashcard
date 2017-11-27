import _ from "lodash";
import tolower from "lodash.tolower";
import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { addNewDeck } from "../actions/";
import { connect } from "react-redux";
import {AddNewDeck} from '../../utils/api'

class NewDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Deck Title' };
  }

  NewDeck() {
   const { title } = this.state;
   const deckId = tolower(title);
    this.setState({ title: ""} )
    this.props.dispatch(addNewDeck(this.state.title));
  //this.props.navigation.navigate("Deck" ,{deckId});
 //  console.log(deckId);
 //  console.log("SENTINAL");
 //  console.log(this.state.title);
  console.log(AddNewDeck({title}));
}
 
  render () {
    return (
      <View>
        <Text style={styles.title} >What is the title of your new deck </Text>
     <Text />
          <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 20}}
 onChangeText={(title) => this.setState({title})}
            value={this.state.title}
          />

	<Text />
      <Button title="Submit" onPress={()  => this.NewDeck()}  />
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
};
export default connect()(NewDeck);
