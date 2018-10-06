import fetch from 'node-fetch';
import config from '../../constants/config';

const GetAllLists = async function () {
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
  return json;
}


const AddDeck = function (store, displayName) {
  // do some funny work


}

const AddCardToDeck = function (callback, deckId, card) {
  try {
    // do some funny work

    callback({deckId, card});
  } catch (error) {
    console.info(error);
    callback({error});
  }

}

const ListApi = {
  GetAllLists,
  AddCardToDeck
};

export default ListApi;