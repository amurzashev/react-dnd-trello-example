import { BOARD_ADD_LANE, BOARD_EDIT_LANE } from './types';

export const addLane = () => (
  dispatch => {
    dispatch({
      type: BOARD_ADD_LANE,
      id: `lane${Math.random()}${Date.now()}`,
    });
  }
);


export const editLane = (laneId, title) => (
  dispatch => {
    dispatch({
      type: BOARD_EDIT_LANE,
      id: laneId,
      title,
    });
  }
)
