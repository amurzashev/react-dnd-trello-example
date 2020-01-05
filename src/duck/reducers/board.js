import { LIST_ADD_TODO, BOARD_ADD_LANE, LIST_EDIT_TODO, BOARD_EDIT_LANE } from '../actions/types';
import { generateRandomBG } from '../../helpers/configs';

const initialState = {
  lanes: [
    {
      id: 'lane0',
      title: 'Untitled Group',
      bg: generateRandomBG(),
      cards: [],
    },
  ]
};

export default (state = initialState, action) => {
  switch(action.type) {
    case BOARD_ADD_LANE:
      return {
        lanes: [
          ...state.lanes,
          {
            id: action.id,
            title: 'Untitled Group',
            bg: generateRandomBG(),
            cards: [],
          }
        ]
      };
    case BOARD_EDIT_LANE:
      return {
        lanes: {
          ...state.lanes,
          [action.id]: {
            ...state.lanes[action.id],
            title: action.title,
          }
        }
      }
    case LIST_EDIT_TODO:
      return {
        lanes: [
          ...state.lanes.slice(0, action.laneId),
          {
            ...state.lanes[action.laneId],
            cards: [
              ...action.cards,
            ],
          },
          ...state.lanes.slice(action.laneId + 1),
        ]
      }
    case LIST_ADD_TODO:
      return {
        lanes: [
          ...state.lanes.slice(0, action.laneIndex),
          action.newLane,
          ...state.lanes.slice(action.laneIndex + 1),
        ],
      }
    default:
      return state;
  };
};
