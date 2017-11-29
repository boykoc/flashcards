import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'StorageKey:flashcards'

const DEFAULT_STATE = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

/**
 * Return all of the decks along with their titles, questions, and answers.
 */ 
export function getDecks () {
  return AsyncStorage.getItem(STORAGE_KEY).then((response) => { 
    return JSON.parse(response) 
  })
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
  AsyncStorage.getItem(STORAGE_KEY).then((response) => {
    const data = JSON.parse(response)
    const questions = data[title].questions
    questions.push(card)
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [title]: {
        title: title,
        questions: questions
      }      
    }))
  })
}