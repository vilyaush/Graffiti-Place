// eslint-disable-next-line default-param-last
const userReducer = (state = {}, action) => {
  const { type, payload } = action;
  // console.log(payload, 'FRONT_USER_REDUSER_PAYLOAD');
  switch (type) {
    case 'LOGIN_USER':
      return payload;
    case 'REGISTER_USER':
      return payload;
    case 'LOGOUT_USER':
      // eslint-disable-next-line no-return-assign, no-param-reassign
      return state = null;
    case 'AUTH_USER':
      return payload;

    default:
      return state;
  }
};

export default userReducer;
