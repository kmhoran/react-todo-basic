import { deckState } from "../../constants/defaultState";

const RenderDecksFromListArray = (listArray) => {
    let result = deckState();

    listArray.forEach(list => {
        let deckId = list.id;
        if (!deckId) return;

        result.userDecks[deckId.toString()] = {
            id: deckId,
            user: list.user,
            displayName: list['display_name'],
            dateCreated: list['date_created'],
            isComplete: list['is_complete'],
            cardCount: list['listitem_set'].length
        }

        let cardArray = [];
        list['listitem_set'].forEach(item => {
            let cardId = item.id;
            if(!cardId) return;

            let card = {
                cardId: item.id,
                text: item.text,
                ordinal: item.ordinal,
                deckId: item.parent_list,
                dateCreated: item.date_created,
                isComplete: item.is_complete,
                dateCompleted: item.completed_timestamp

            };
            cardArray.push(card)
        });
        result.cardsByDeck[deckId.toString()] = cardArray;
    });

    return result;
}

const ModelTranslation = {
    RenderDecksFromListArray
};

export default ModelTranslation;