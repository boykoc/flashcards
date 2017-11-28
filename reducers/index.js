// REDUCERS

import { RECIEVE_DECKS, ADD_DECK } from '../actions'

function decks (state = {}, action) {
    switch (action.tyep) {
        case RECIEVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
            }
        default:
            return state
    }
}

export default decks