import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'StorageKey:flashcards'

/**
 * Return all of the decks along with their titles, questions, and answers.
 */ 
export function getDecks () {
    
}

/**
 * Take in a single id argument and return the deck associated with that id.
 */ 
export function getDeck (id) {
    
}

/**
 * Take in a single title argument and add it to the decks. 
 */
export function saveDeckTitle (title) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        } 
    }))
}

/**
 * Take in two arguments, title and card, and will add the card to the list of 
 * questions for the deck with the associated title. 
 */ 
export function addCardToDeck (title, card) {
    
}