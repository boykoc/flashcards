// ACTIONS

export const RECIEVE_DECKS = 'RECIEVE_DECKS'

export function recieveDecks (decks) {
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