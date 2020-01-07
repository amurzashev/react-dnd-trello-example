import { CARDS_ADD_CARD, CARDS_EDIT_CARD, LANE_ADD_CARD } from './types';

export const addCard = laneId => (
   (dispatch, getState) => {
    const { cards } = getState();
    const id = `card${Object.keys(cards).length}`;
    dispatch({
      type: CARDS_ADD_CARD,
      id,
    });
    dispatch({
      type: LANE_ADD_CARD,
      laneId,
      id,
    })
  }
);

export const editCard = (id, value) => (
  disptach => {
    disptach({
      type: CARDS_EDIT_CARD,
      id,
      value,
    })
  }
)
