import fetch from 'node-fetch';
import config from '../../constants/config';
import ModelTranslation from './modelTranslation';

const GetAllLists = async function (callback) {
  try {
    const url = config.homesiteApi.concat("lists/");
    const options = {
      method: 'GET',
      heasers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }

    const fetchResponse = await fetch(url, options);
    const json = await fetchResponse.json();
    console.log('[listAPI] json: ', json);

    const decks = ModelTranslation.RenderDecksFromListArray(json);
    callback({ decks });
    
  } catch (error) {
    console.info(error);
    callback({ error });
  }
}


const AddDeck = function (store, displayName) {
  // do some funny work


}

const AddCardToDeck = function (callback, deckId, card) {
  try {
    // do some funny work

    callback({ deckId, card });
  } catch (error) {
    console.info(error);
    callback({ error });
  }

}

const ListApi = {
  GetAllLists,
  AddCardToDeck
};

export default ListApi;