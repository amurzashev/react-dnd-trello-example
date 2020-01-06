import { BOARD_ADD_LANE, BOARD_EDIT_LANE, LANE_REORDER_CARDS, LANE_REORDER_CARDS_BETWEEN_LANES, } from './types';

export const addLane = () => (
  (dispatch, getState) => {
    const { lanes } = getState();
    const id = Object.keys(lanes).length;
    dispatch({
      type: BOARD_ADD_LANE,
      id: `lane${id}`,
    });
  }
);


export const editLane = (id, title) => (
  dispatch => {
    dispatch({
      type: BOARD_EDIT_LANE,
      id,
      title,
    });
  }
);

export const reorderCards = lane => (
  dispatch => {
    dispatch({
      type: LANE_REORDER_CARDS,
      lane,
    });
  }
);

export const reorderBetweenLanes = (start, finish) => (
  dispatch => {
    dispatch({
      type: LANE_REORDER_CARDS_BETWEEN_LANES,
      start,
      finish,
    });
  }
);

