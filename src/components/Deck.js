import tolower from "lodash.tolower";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, List, ListItem, Button } from "react-native-elements";
import { connect } from "react-redux";

class Deck extends Component {
  Quiz = deckTitle => {
    this.props.navigation.navigate("Quiz", {
      deckName: this.props.navigation.state.params.deckTitle
    });
  };

   addCard = (deckTitle) => {
  this.props.navigation.navigate("AddCard",{
    deckTitle: this.props.navigation.state.params
  });
 }
  render() {
    const { deckTitle } = this.props.navigation.state.params;
    const questionCount = this.props.decks[deckTitle].questions.length;
   const cardText = questionCount === 1 ? " 1 card" : ` ${questionCount} cards`;
    return (
      <View>
        <Text style={styles.title}>
           {deckTitle}
        </Text>
	<Text style={{ fontSize: 15,justifyContent: "center", alignSelf: "center"}}> {cardText }</Text>
        <Button
          title="Add a Card"
          buttonStyle={{ marginTop: 10 }}
          onPress={() => this.addCard({deckTitle})}
        />
        <Text />
        <Button title="Start Quiz" onPress={() => this.Quiz(deckTitle)} />
      </View>
    );
  }
}

styles = {
  title: {
    fontSize: 25,
    justifyContent: "center",
    alignSelf: "center"
  },
};
export default connect(state => state)(Deck);
