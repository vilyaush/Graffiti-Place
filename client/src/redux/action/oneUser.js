<<<<<<< HEAD
const getOneUser = (data) => ({ type: 'GET_ONE_USER', payload: data });

export const getOneUserThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_serverApi}/user/${id}`);
  const result = await response.json();
  dispatch(getOneUser(result));
};
=======
const getOneOrderUser = (data) => ({ type: 'GET_ONE_USER', payload: data });


const getOneOrderUserThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_serverApi}/user/${id}`);
  const result = await response.json();

  dispatch(getOneOrderUser(result));
  // console.log(result, '++++++++++');
};


export default getOneOrderUserThunk;
>>>>>>> c7b33585148f08303d6c9b2f3af0dd65cfe8477f
