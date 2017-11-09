import { AsyncStorage } from 'react-native'
import {MockData, FLASHCARD_STORAGE_KEY } from './_flashCard'

//Get all decks
export function fetchAllDecks () {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(MockData); 
}

