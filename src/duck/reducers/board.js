const initialState = {
  lanes: [
    {
      id: 'list1',
      title: 'Planned Tasks',
      cards: [
        {
          id: 1,
          value: 'Wake up at 9AM',
        },
        {
          id: 2,
          value: 'Go to school at 10AM',
        },
      ]
    },
    {
      id: 'list2',
      title: 'Unplanned Tasks',
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
  ]
};

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  };
};
