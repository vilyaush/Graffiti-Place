const regUser = (data) => ({type:'REGISTER_USER', payload: data})


 export const regUserThunk = (body, role) => async (dispatch) => {
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

export const handleLogout = () => 
    fetch (`${process.env.REACT_APP_serverApi}/logout`, {
      credentials: 'include'
    })