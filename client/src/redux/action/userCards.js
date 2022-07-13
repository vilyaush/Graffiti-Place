const getUserCards = (data) => ({ type: 'GET_USER_CARDS', payload: data });

const getUserCardsThunk = (id) => async (dispatch) => {
  // console.log('1111111111111111111111111111111111111111111111111111111111111111111111111111111');
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/card/${id}`,
    {
      credentials: 'include',
    },
  );
  const result = await response.json();
  // console.log(result, '////////////////////////////////////////////////////////////////////');
  dispatch(getUserCards(result));
  // console.log(result, '++++++++++');
};

export default getUserCardsThunk;
