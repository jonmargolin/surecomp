import * as actionTypes from '../actions/actionTypes';
import { Action, updateObject } from '../utility';
import { User } from '../model/user-model';
const initialState = null

const userLogin = ( state, action: Action<User> ) => {
  return updateObject( state, { ...action.payload } );
}
const  userLogOut =(state,  action) => {
 // return updateObject(state, action)
  state = initialState;
  return state;
}
const reducer = ( state = initialState, action: Action<User> ) => {
  switch ( action.type ) {
    case  actionTypes.LOGIN: return userLogin(state, action);
    case  actionTypes.GET_USER: return {state};
    case  actionTypes.LOGOUT: return userLogOut(state, null);
    default: return state;
  }
}
export default reducer;
