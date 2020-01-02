import { LIST_ADD_TODO, BOARD_ADD_LANE, LIST_EDIT_TODO, BOARD_EDIT_LANE } from '../actions/types';
import { generateRandomBG } from '../../helpers/configs';

const initialState = {
  lanes: {
    lane1: {
      id: 'lane1',
      title: 'Untitled Group',
      bg: generateRandomBG(),
      cards: {}
    },
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case BOARD_ADD_LANE:
      return {
        lanes: {
          ...state.lanes,
          [action.id]: {
            id: action.id,
            title: 'Untitled Group',
            bg: generateRandomBG(),
            cards: {},
          }
        }
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
        lanes: {
          ...state.lanes,
          [action.laneId]: {
            ...state.lanes[action.laneId],
            cards: {
              ...state.lanes[action.laneId].cards,
              [action.cardId]: {
                id: action.cardId,
                value: action.value,
              },
            }
          }
        }
      }
    case LIST_ADD_TODO:
      return {
        lanes: {
          ...state.lanes,
          [action.id]: {
            ...state.lanes[action.id],
            cards: {
              ...state.lanes[action.id].cards,
              [action.todoId]: {
                id: action.todoId,
                value: action.value,
              }
            }
          }
        }
      }
    default:
      return state;
  };
};
