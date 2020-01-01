const initialState = {
  // TODO: from array of objects to object with key[id]: val
  lanes: {
    list1: {
      id: 'list1',
      title: 'Planned Tasks',
      bg: '#78ED78',
      cards: [
        {
          id: 1,
          value: 'Server side rendering in Emotion 10 has two approaches, each with their own trade-offs. The default approach works with streaming and requires no additional configuration, but does not work with nth child or similar selectors.',
        },
        {
          id: 2,
          value: 'Go to school at 10AM',
        },
        {
          id: 3,
          value: 'Do laundry at 5PM',
        },
      ]
    },
    list2: {
      id: 'list2',
      title: 'Unplanned Tasks',
      bg: '#211082',
      cards: [
        {
          id: 2,
          value: 'Do homework',
        },
        {
          id: 3,
          value: 'Go for a walk',
        },
      ]
    }
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  };
};
