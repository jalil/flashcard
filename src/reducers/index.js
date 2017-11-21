import { RECEIVE_DECKS, ADD_NEW_DECK, ADD_NEW_CARD } from '../actions'
import tolower from 'lodash.tolower'

const initialState = {
  decks: {}
}

function deck (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        decks: action.decks
      }
    case ADD_NEW_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          [tolower(action.title)]: {
            title: action.title,
            questions: []
          }
        }
      }
    case ADD_NEW_CARD:
      const { id, card } = action
      return {
        ...state,
        decks: {
          ...state.decks,
          [id]: {
            ...state.decks[id],
            questions: [...state.decks[id].questions, card]
          }
        }
      }
    default:
      return state
  }
}

export default deck
