import { CARDS_ADD_CARD } from '../actions/types';

const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CARDS_ADD_CARD:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          value: '',
        },
      }
    default:
      return state;
  }
}
