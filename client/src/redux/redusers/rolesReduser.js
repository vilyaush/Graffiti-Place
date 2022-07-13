// eslint-disable-next-line default-param-last
const rolesReduser = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_ROLES':
      return payload;
    default:
      return state;
  }
};

export default rolesReduser;
