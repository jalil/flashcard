import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootNavigator } from './src/navigation/routes'
import { Header, Card, List, ListItem, Button } from 'react-native-elements'
import reducer from './src/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { setLocalNotification } from './utils/notifications'

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }

  render () {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100
  }
})
