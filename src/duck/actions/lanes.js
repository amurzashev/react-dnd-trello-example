import { BOARD_ADD_LANE, BOARD_EDIT_LANE } from './types';

export const addLane = () => (
  (dispatch, getState) => {
    const { board } = getState();
    const id = board.lanes.length;
    dispatch({
      type: BOARD_ADD_LANE,
      id: `lane${id}`,
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
