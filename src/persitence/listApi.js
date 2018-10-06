import fetch from 'node-fetch';
import config from '../constants/config';

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
    console.log(`[listAPI] status: ${fetchResponse.status}`);
    const json = await fetchResponse.json();
    console.log('[listAPI] json: ',json);
    return json;
}

const ListApi = {
    GetAllLists
};

export default ListApi;