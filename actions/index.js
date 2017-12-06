// ACTIONS

export const RECIEVE_DECKS = 'RECIEVE_DECKS'

export function recieveDecks (decks = {}) {
    return {
        type: RECIEVE_DECKS,
        decks
    }
}

export const ADD_DECK = 'ADD_DECK'

export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export const ADD_CARD = 'ADD_CARD'

export function addCard (title, card) {
    return {
        type: ADD_CARD,
        title,
        card
    }
}