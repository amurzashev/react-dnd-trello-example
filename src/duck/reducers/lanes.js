import { LANE_ADD_CARD } from '../actions/types';
import { generateRandomBG } from '../../helpers/configs';

const initialState = {
  lane1: {
    id: 'lane1',
    title: '',
    bg: generateRandomBG(),
    cards: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LANE_ADD_CARD:
      return {
        ...state,
        [action.laneId]: {
          ...state[action.laneId],
          cards: [
            ...state[action.laneId].cards,
            action.id,
          ]
        }
      };
    default:
      return state;
  }
}
