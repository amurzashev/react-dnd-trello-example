import { LIST_ADD_TODO, LIST_EDIT_TODO, LIST_REORDER_TODO } from './types';

export const addTodo = laneId => (
   dispatch => {
    dispatch({
      type: LIST_ADD_TODO,
      id: laneId,
      todoId: `todo${Math.random()}${Date.now()}`,
      value: '',
    })
  }
);

export const editTodo = (laneId, cardId, value) => (
  dispatch => {
    dispatch({
      type: LIST_EDIT_TODO,
      laneId,
      cardId,
      value,
    });
  }
);

export const reorderTodo = newLanes => (
  dispatch => {
    dispatch({
      type: LIST_REORDER_TODO,
    });
  }
);

