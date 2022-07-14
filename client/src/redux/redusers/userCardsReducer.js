// eslint-disable-next-line default-param-last
const userCardsReducer = (state = [], action) => {
  const { type, payload } = action;

  // console.log("order", payload)
  switch (type) {
    case 'GET_USER_CARDS':
      return payload;

    default:
      return state;
  }
};

export default userCardsReducer;
