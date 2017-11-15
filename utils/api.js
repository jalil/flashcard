import { AsyncStorage } from 'react-native'
import {MockData, FLASHCARD_STORAGE_KEY } from './_flashCard'

export function fetchAllDecks () {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(MockData); 
}

export function AddNewDeck (DeckName) {
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
   [deckName]: {
	title: deckName,
        questions: []
   }
  })
 )
}

