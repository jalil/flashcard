import React, { Component}  from 'react'
import {View, Text} from 'react-native'
import { Button,FormLabel, FormInput } from 'react-native-elements'

class AddCard extends Component {
	render() {
	return (
	<View>
		<FormLabel>Name</FormLabel>

  <Button title="Start Quiz" backgroundColor="#03A9F4" />
	</View>

);
}
}

export default AddCard;
