import { CARDS_ADD_CARD, CARDS_EDIT_CARD } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CARDS_ADD_CARD:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          value: '',
        },
      };
    case CARDS_EDIT_CARD:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          value: action.value,
        },
      }
    default:
      return state;
  }
}
