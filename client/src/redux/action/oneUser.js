const getOneOrderUser = (data) => ({ type: 'GET_ONE_USER', payload: data });

const getOneOrderUserThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_serverApi}/user/${id}`);
  const result = await response.json();

  dispatch(getOneOrderUser(result));
  // console.log(result, '++++++++++');
};

export default getOneOrderUserThunk;
