import { AsyncStorage } from 'react-native'
import tolower from 'lodash.tolower'
import { MockData, FLASHCARD_STORAGE_KEY } from './_flashCard'

//returns all data
export function fetchAllDecks () {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(MockData)
}


//save new deck into storage
export function SaveNewDeck (DeckName) {
  const deckId = tolower(DeckName)
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [deckId]: {
        title: DeckName,
        questions: []
      }
    })
  )
}


//saves new card into deck
export function saveNewCard(id, card) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(result => {
    const data = JSON.parse(result);
    data[id].questions.push(card);
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
  });
}
