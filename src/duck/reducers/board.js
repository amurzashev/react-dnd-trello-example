import { LIST_ADD_TODO, BOARD_ADD_LANE } from '../actions/types';
import randomColor from 'randomcolor';

randomColor({
  luminosity: 'dark',
});

const initialState = {
  lanes: {
    lane1: {
      id: 'lane1',
      title: 'Untitled group',
      bg: randomColor(),
      cards: []
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
            bg: randomColor(),
            cards: [],
          }
        }
      }
    case LIST_ADD_TODO:
      return {
        lanes: {
          ...state.lanes,
          [action.id]: {
            ...state.lanes[action.id],
            cards: [
              ...state.lanes[action.id].cards,
              {
                id: `${Math.random()}${Date.now()}`,
                value: 'Untitled',
              }
            ],
          }
        }
      }
    default:
      return state;
  };
};
