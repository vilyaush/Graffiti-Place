const painterCardReducer = (state = [], action) => {
  const { type, payload } = action;
  //  console.log(payload)
  switch (type) {
    case 'GET_PAINTER_CARD':
      return payload;
    case 'CREATE_PAINTER_CARD':
      return state;
    case 'DELETE_PAINTER_CARD':
      return  state.filter((painterCard) => painterCard.id !== payload)

    

    default:
      return state

  }

};

export default painterCardReducer;
