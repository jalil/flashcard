import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class FlipCard extends Component {
  state = {
    showAnswer: false
  };

  flipCard = () => {
    this.setState({ showAnswer: true });
  };

  render() {
    if (this.state.showAnswer) {
      return (
        <View>
          <Text>Answer:</Text>
          <Text>
            {this.props.card.answer}
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.flipCard();
              this.props.handleAnswer(true);
            }}
          >
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.flipCard();
              this.props.handleAnswer(false);
            }}
          >
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>Question:</Text>
        <Text>
          {this.props.card.question}
        </Text>
        <TouchableOpacity onPress={this.flipCard}>
          <Text>Show Answer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FlipCard;
