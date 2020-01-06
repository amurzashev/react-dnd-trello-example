import { BOARD_ADD_LANE, BOARD_EDIT_LANE } from './types';

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
)
