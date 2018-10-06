import ActionTypes from '../constants/actionTypes';

const populateLists = lists =>({
  type: ActionTypes.POPULATE_LISTS,
  payload: lists
})

const createItem = task => ({
  type: ActionTypes.CREATE_ITEM,
  payload: task
});
const deleteItem = id => ({
  type: ActionTypes.DELETE_ITEM,
  payload: id
});
const TodoActions = {
  createItem,
  deleteItem
};

export default TodoActions;