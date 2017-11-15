import tolower from "lodash.tolower";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, List, ListItem, Button } from "react-native-elements";
import {connect} from 'react-redux'

class Deck extends Component {

 Quiz = (deckTitle) => {
 this.props.navigation.navigate("Quiz",{
    deckName: this.props.navigation.state.params.deckTitle
  })
};

 addCard = () => {
}
  render() {
    const { deckTitle } = this.props.navigation.state.params;
    return (
      <View>
        <Text style={styles.title}>
          {deckTitle}
        </Text>
        <Button title="Add a Card" buttonStyle={{ marginTop: 10 }}  onPress={() =>this.addCard()}/>
        <Text />
        <Button title="Start Quiz" onPress={() => this.Quiz(deckTitle)} />
      </View>
    );
  }
}

styles = {
  title: {
    fontSize: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  }
};
export default connect(state => state)(Deck);
