import { combineReducers } from 'redux'
import userReducer from './userReducer'
import painterCardReduser from './painterCardReduser'
import orderCardReduser from './orderCardReduser'




const rootReducer = combineReducers({ 
  user:userReducer, 
  painterCard: painterCardReduser,
  orderCard: orderCardReduser,
})

export default rootReducer