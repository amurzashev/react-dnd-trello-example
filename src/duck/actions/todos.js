import { LIST_ADD_TODO, LIST_EDIT_TODO, LIST_REORDER_TODO } from './types';

export const addTodo = laneIndex => (
   (dispatch, getState) => {
    const { board } = getState();

    const newLane = board.lanes[laneIndex];
    newLane.cards = [
      ...newLane.cards,
      {
        id: `todo${board.lanes[laneIndex].cards.length}`,
        value: '',
      },
    ];
  
    dispatch({
      type: LIST_ADD_TODO,
      laneIndex,
      newLane,
    });
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

