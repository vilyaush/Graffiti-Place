import { combineReducers } from 'redux';
import userReducer from './userReducer';
import painterCardReduser from './painterCardReduser';
import orderCardReduser from './orderCardReduser';
import oneUserReducer from './oneUserReducer';
import rolesReduser from './rolesReduser';
import painterResponseReducer from './paintesResponseReducer';
import userCardsReducer from './userCardsReducer';
import responsesListReducer from './responsesListReducer';

const rootReducer = combineReducers({
  user: userReducer,
  painterCard: painterCardReduser,
  orderCard: orderCardReduser,
  oneUser: oneUserReducer,
  roles: rolesReduser,
  painterResponse: painterResponseReducer,
  userCards: userCardsReducer,
  responsesList: responsesListReducer,

});

export default rootReducer;
