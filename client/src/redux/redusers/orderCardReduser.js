const orderCardReducer = (state = [], action) => {
  const { type, payload } = action;
  //  console.log(payload)
  switch (type) {
    case 'GET_ORDER_CARD':
      return payload;
    case 'CREATE_ORDER_CARD':
      return state;

    

    default:
      return state

  }

};

export default orderCardReducer;
