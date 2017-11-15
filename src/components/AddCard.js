import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {TextInput} from 'react-native'
import {connect} from 'react-redux'

class AddCard extends Component {
  render () {
    return (
      <View>
        <TextInput 
            placeholder="Question"
             style={{height: 40,padding: 10, borderColor: 'gray', borderWidth: 1}}
          />
        <TextInput 
            placeholder="Answer"
             style={{height: 40,padding: 10, borderColor: 'gray', borderWidth: 1}}
          />
        <Button title='Add To Deck' backgroundColor='#03A9F4'
         buttonStyle={{ borderRadius: 10}}
        onPress={() => console.log(this.props.navigation.state)}
 />
      </View>
    )
  }
}

export default connect()(AddCard);
