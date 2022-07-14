// eslint-disable-next-line default-param-last
const oneUserReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_ONE_USER':
      return payload;
    default:
      return state;
  }
};

export default oneUserReducer;
