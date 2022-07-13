// eslint-disable-next-line default-param-last
const painterResponseReducer = (state = [], action) => {
  const { type, payload } = action;
  //  console.log(payload)

  //  console.log("paint", payload)
  switch (type) {
    case 'GET_PAINTER_RESPONSE':
      return payload;

    default:
      return state;
  }
};

export default painterResponseReducer;
