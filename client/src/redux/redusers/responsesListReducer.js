// eslint-disable-next-line default-param-last
const responsesListReducer = (state = [], action) => {
  const { type, payload } = action;
  //  console.log(payload)

  console.log('Припиздили юзеры', payload);
  switch (type) {
    case 'GET_RESPONSES_LIST':
      return payload;

    default:
      return state;
  }
};

export default responsesListReducer;
