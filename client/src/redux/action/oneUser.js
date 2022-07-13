const getOneUser = (data) => ({ type: 'GET_ONE_USER', payload: data });

export const getOneUserThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_serverApi}/user/${id}`);
  const result = await response.json();
  dispatch(getOneUser(result));
};
