

const userReducer = (state=null, action) => {
  const { type, payload } = action;
//  console.log(payload)
  switch (type) {
    case 'LOGIN_USER':
      return [...state, payload];
    case 'REGISTER_USER':
      return payload;
    case 'LOGOUT_USER':
      return state=null;
    
    
    
    default:
      return state
    
    break; 
  }

};

export default userReducer;