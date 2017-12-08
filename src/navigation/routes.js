import React from 'react'
import DeckList from './../components/DeckList'
import Deck from './../components/Deck'
import NewDeck from './../components/NewDeck'
import AddCard from './../components/AddCard'
import Quiz from './../components/Quiz'
import { TabNavigator, StackNavigator } from 'react-navigation'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'Deck List',
      tabBarLabel: 'Deck List'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'New Deck',
      tabBarLabel: 'New Deck'
    }
  }
})

export const RootNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckList: {
    screen: DeckList
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck'
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add New Card'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
})
