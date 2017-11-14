import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class Quiz extends Component {
  render () {
    console.log(this.props)
    console.log(this.props.navigations)
    return (
      <View>
        <Text> QUIZ </Text>
      </View>
    )
  }
}

export default connect(state => state)(Quiz)
