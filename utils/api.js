import { AsyncStorage } from 'react-native'
import tolower from 'lodash.tolower'
import { MockData, FLASHCARD_STORAGE_KEY } from './_flashCard'

export function fetchAllDecks () {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(MockData)
}

export function AddNewDeck (DeckName) {
  const title = tolower(DeckName)
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title: DeckName,
        questions: []
      }
    })
  )
}


export function saveNewCard(id, card) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(result => {
    const data = JSON.parse(result);
    console.log(data);
    data[id].questions.push(card);
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
  });
}
