import tolower from "lodash.tolower";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, List, ListItem, Button } from "react-native-elements";
import { connect } from "react-redux";

class Deck extends Component {
  Quiz = deckTitle => {
    this.props.navigation.navigate("Quiz", {
      deckTitle: this.props.navigation.state.params.deckTitle
    });
  };

  addCard = deckTitle => {
    this.props.navigation.navigate("AddCard", {
      deckTitle,
      update: () => this.refreshOnGoBack()
    });
  };
  render() {
    const { decks, navigation } = this.props;
    //const questionCount = deck.questions.length;
    const deck = decks[navigation.state.params.deckTitle];
    const questionCount = deck.questions.length;
    const cardText =
      questionCount === 1 ? " 1 card" : ` ${questionCount} cards`;
    return (
      <View>
        <Text
          style={{
            justifyContent: "center",
            fontSize: 25,
            alignSelf: "center"
          }}
        >
          {deck.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            justifyContent: "center",
            alignSelf: "center"
          }}
        >
          {" "}{cardText}
        </Text>
        <Button
          title="Add a Card"
          buttonStyle={{ marginTop: 10 }}
          onPress={() => this.addCard(deck.title)}
        />
        <Text />
        <Button title="Start Quiz" onPress={() => this.Quiz(deck.title)} />
      </View>
    );
  }
}

styles = {
  cardTitle: {
    fontSize: 25,
    justifyContent: "center",
    alignSelf: "center"
  }
};
export default connect(state => state)(Deck);
