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
    default:
      return state;
  }
}
