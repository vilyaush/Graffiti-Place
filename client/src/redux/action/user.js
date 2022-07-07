const regUser = (data) => ({type:'REGISTER_USER', payload: data})
const logOutUser = () => ({type:'LOGOUT_USER'})
const logInUser = (data) => ({type:'LOGIN_USER', payload: data})

 export const regUserThunk = (body, role) => async (dispatch) => {
   console.log(body, role);
  const response = await fetch(`${process.env.REACT_APP_serverApi}/user/register`, 
    {
      method: 'post',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({body, role}),
      credentials: 'include'
    },
  );
  const result = await response.json();
  console.log(result);
  dispatch(regUser(result));
};

export const logOutUserThunk = () => async (dispatch) => {
 const response = await fetch (`${process.env.REACT_APP_serverApi}/user/logout`, 
 {
      credentials: 'include'
    }
  )
  dispatch(logOutUser())
}


export const logInUserThunk = (body) => async (dispatch) => {
  const response = await fetch (`${process.env.REACT_APP_serverApi}/user/signin`,
  {
    method: 'post',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({body}),
      credentials: 'include'
  },
  );
  const result = await response.json();
  console.log(result);
  dispatch(logInUser(result))



}

    