const regUser = (data) => ({ type: 'REGISTER_USER', payload: data });
const logOutUser = () => ({ type: 'LOGOUT_USER' });
const logInUser = (data) => ({ type: 'LOGIN_USER', payload: data });
const authUser = (data) => ({ type: 'AUTH_USER', payload: data });
<<<<<<< HEAD

console.log('>>>>>>>>', process.env);
=======
>>>>>>> c7b33585148f08303d6c9b2f3af0dd65cfe8477f

export const regUserThunk = (body) => async (dispatch) => {
  //  console.log('regUserThunk', body);
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/user/register`,
    {
      method: 'post',
      // headers: { 'Content-type': 'application/json'},
      body,
      credentials: 'include',
    },
  );
  const result = await response.json();
  // console.log(result,'PAILOAD при регистрации');
  dispatch(regUser(result));
};

export const logOutUserThunk = () => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/user/logout`,
    {
      credentials: 'include',
    },
  );
  dispatch(logOutUser());
};

export const logInUserThunk = (body) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/user/signin`,
    {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ body }),
      credentials: 'include',
    },
  );
  const result = await response.json();
  dispatch(logInUser(result));
};

export const authUserThunk = (body) => async (dispatch) => {
<<<<<<< HEAD
  try {
    console.log('THUNK__________________________________________________________');
    const response = await fetch(
      `${process.env.REACT_APP_serverApi}/user/auth`,
      {
        credentials: 'include',
      },
    );
    const result = await response.json();
    console.log('999999999999999999999999999999999', result);
    dispatch(authUser(result));
  } catch (error) {
    console.log(error);
  }
=======
  // console.log('THUNK__________________________________________________________');
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/user/auth`,
    {
      credentials: 'include',
    },
  );
  const result = await response.json();
  console.log('999999999999999999999999999999999', result);
  dispatch(authUser(result));
>>>>>>> c7b33585148f08303d6c9b2f3af0dd65cfe8477f
};
