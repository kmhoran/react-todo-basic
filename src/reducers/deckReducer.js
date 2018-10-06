import ActionTypes from "../constants/actionTypes";
import _ from "lodash";
const defaultState = {
  cardsByDeck:{
    '0': []
  },
  userDecks:{
    '0': {
      id: 0,
      user: 0,
      displayName: 'Zero Deck',
      dateCreated: '2018-10-06T00:00:00Z',
      isComplete: false,
      cardCount: 0
  }
  }
  
};
const DeckReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.POPULATE_DECKS:{
      return action.decks;
    }

    case ActionTypes.CREATE_CARD: {
      let newState = _.cloneDeep(state);

      // cardsByDeck update
      let newCard = action.card;
      newState.cardsByDeck[action.deckId].push(newCard);

      // userDecks update
      const newCardCount = state.userDecks[action.deckId].cardCount + 1;
      newState.userDecks[action.deckId].cardCount = newCardCount;

      return newState;
    }
    case ActionTypes.DELETE_CARD: {
      let newState = _.cloneDeep(state);

      // cardsByDeck update
      let index = _.findIndex(newState.cardsByDeck[action.deckId], { id: action.id });
      newState.cardsByDeck[action.deckId].splice(index, 1);

      // userDecks update
      const newCardCount = state.userDecks[action.deckId].cardCount - 1;
      newState.userDecks[action.deckId].cardCount = newCardCount;
      return newState;
    }
    default:
      return state;
  }
};
export default DeckReducer;