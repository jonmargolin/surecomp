import React from 'react';
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';


export const Auth = props =>{
   const storeUser = JSON.parse(localStorage.getItem('user'));
   if(!storeUser) {
     return(<Redirect to='/login' /> );
   } else {
     const dispatch = useDispatch()
     dispatch({ type: 'LOGIN_USER', payload: storeUser });
     return (props.orRender);
   }

}
export default Auth
