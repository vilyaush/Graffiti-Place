const regUser = (data) => ({type:'REGISTER_USER', payload: data})


 export const regUserThunk = (body) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_serverApi}/register`, 
    {
      method: 'post',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(body),
      credentials: 'include'
    },
  );
  const result = await response.json();
  dispatch(regUser(result));
};

export const handleLogout = () => 
    fetch (`${process.env.REACT_APP_serverApi}/logout`, {
      credentials: 'include'
    })