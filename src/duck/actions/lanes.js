import { BOARD_ADD_LANE } from './types';

export const addLane = () => (
  dispatch => {
    dispatch({
      type: BOARD_ADD_LANE,
      id: `lane${Math.random()}${Date.now()}`,
    });
  }
)
