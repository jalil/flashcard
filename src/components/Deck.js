import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, List, ListItem, Button } from "react-native-elements";
import {connect} from 'react-redux'

class Deck extends Component {
  handlePress = () => {
    //const deckTitle = tolower(title);
    this.props.navigation.navigate("Quiz");
  };

  render() {
    const { deckTitle } = this.props.navigation.state.params;
   
    return (
      <View>
        <Text style={styles.title}>
          {deckTitle}
        </Text>
        <Button title="Add a Card" buttonStyle={{ marginTop: 10 }} />
        <Text />
        <Button title="Start Quiz" onPress={() => this.handlePress()} />
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
