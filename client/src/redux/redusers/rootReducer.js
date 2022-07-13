import { combineReducers } from 'redux';
import userReducer from './userReducer';
import painterCardReduser from './painterCardReduser';
import orderCardReduser from './orderCardReduser';
import oneUserReducer from './oneUserReducer';
import rolesReduser from './rolesReduser';
import painterResponseReducer from './paintesResponseReducer';
import userCardsReducer from './userCardsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  painterCard: painterCardReduser,
  orderCard: orderCardReduser,
  oneUser: oneUserReducer,
  roles: rolesReduser,
  painterResponse: painterResponseReducer,
  userCards: userCardsReducer,

});

export default rootReducer;
