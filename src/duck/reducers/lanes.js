import { LANE_ADD_CARD, BOARD_ADD_LANE, BOARD_EDIT_LANE, LANE_REORDER_CARDS } from '../actions/types';
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
      };
    case BOARD_EDIT_LANE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          title: action.title,
        },
      };
    case LANE_REORDER_CARDS:
      return {
        ...state,
        [action.lane.id]: {
          ...action.lane
        }
      }
    default:
      return state;
  }
}
