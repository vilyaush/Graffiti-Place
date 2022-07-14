// eslint-disable-next-line default-param-last
const orderCardReducer = (state = [], action) => {
  const { type, payload } = action;

  // console.log('order', payload);
  switch (type) {
    case 'GET_ORDER_CARD':
      return payload;
    case 'CREATE_ORDER_CARD':
      return [payload.newOrder, ...state];
    case 'DELETE_ORDER_CARD':
      return state.filter((orderCard) => orderCard.id !== payload);

    default:
      return state;
  }
};

export default orderCardReducer;
