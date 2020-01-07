import { BOARD_ADD_LANE } from '../actions/types';

const initialState = {
  columns: ['lane0'],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOARD_ADD_LANE:
      return {
        columns: [...state.columns, action.id]
      };
    default:
      return state;
  };
};
