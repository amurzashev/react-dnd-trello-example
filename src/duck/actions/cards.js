import { LIST_ADD_CARD, LANE_ADD_CARD } from './types';

export const addCard = laneId => (
   (dispatch, getState) => {
    const { cards } = getState();
    const id = `card${Object.keys(cards).length}`;
    dispatch({
      type: LIST_ADD_CARD,
      id,
    });
    dispatch({
      type: LANE_ADD_CARD,
      laneId,
      id,
    })
  }
);
