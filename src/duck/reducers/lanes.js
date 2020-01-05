import { LANE_ADD_CARD, BOARD_ADD_LANE } from '../actions/types';
import { generateRandomBG } from '../../helpers/configs';

const initialState = {
  lane0: {
    id: 'lane0',
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
    case BOARD_ADD_LANE:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          title: '',
          bg: generateRandomBG(),
          cards: [],
        }
      }
    default:
      return state;
  }
}
