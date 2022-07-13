const getRoles = (data) => ({ type: 'GET_ROLES', payload: data });

export const getRolesThunk = () => async (dispatch) => {
  const res = await fetch(`${process.env.REACT_APP_serverApi}/roles`);
  const result = await res.json();
  dispatch(getRoles(result));
};
