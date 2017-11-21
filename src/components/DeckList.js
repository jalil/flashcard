import _ from "lodash";
import tolower from "lodash.tolower";
import React, { Component } from "react";
import { TouchableOpacity, FlatList, View, Text } from "react-native";
import { Card, List, ListItem, Button } from "react-native-elements";
import { connect } from "react-redux";
import { receiveDecks } from "../actions/";

import { fetchAllDecks } from "../../utils/api";

class DeckList extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    const data = await fetchAllDecks();
    dispatch(receiveDecks(data));
  }
  deckArray() {
    const decks = _.map(this.props.decks, val => {
      return { ...val };
    });
    return decks;
  }

  handlePress = title => {
    const deckTitle = tolower(title);
    this.props.navigation.navigate("Deck", { deckTitle });
  };

  render() {
    console.log(this.props.navigations);
    return (
      <View style={{ width: 350 }}>
        <FlatList
          keyExtractor={item => item.title}
          data={this.deckArray()}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              subtitle={item.questions.length}
              onPress={() => this.handlePress(item.title)}
            />}
        />
      </View>
    );
  }
}

const styles = {
  title: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 5,
    width: 240,
    height: 70
  }
};
export default connect(state => state)(DeckList);
