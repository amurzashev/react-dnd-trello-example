import { LIST_ADD_TODO } from './types';

export const addTodo = listId => (
   dispatch => {
    dispatch({
      type: LIST_ADD_TODO,
      id: listId,
    })
  }
);
