import { combineReducers } from 'redux';
import userReducer from './userReducer';
import painterCardReduser from './painterCardReduser';
import orderCardReduser from './orderCardReduser';
import oneUserReducer from './oneUserReducer';
import rolesReduser from './rolesReduser';

const rootReducer = combineReducers({
  user: userReducer,
  painterCard: painterCardReduser,
  orderCard: orderCardReduser,
  oneUser: oneUserReducer,
  roles: rolesReduser,

});

export default rootReducer;
