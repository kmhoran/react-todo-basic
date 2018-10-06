import ActionTypes from '../constants/actionTypes';

const populateLists = decks =>({
  type: ActionTypes.POPULATE_DECKS,
  decks
})

const addDeck = (deckId, cardArray) =>({
  type: ActionTypes.ADD_DECK,
  deckId,
  cardArray
});

const createCard = (deckId, card) => ({
  type: ActionTypes.CREATE_CARD,
  deckId,
  card
});
const deleteCard = (deckId, cardId) => ({
  type: ActionTypes.DELETE_CARD,
  deckId,
  cardId
});
const DeckActions = {
  populateLists,
  addDeck,
  createCard,
  deleteCard
};

export default DeckActions;