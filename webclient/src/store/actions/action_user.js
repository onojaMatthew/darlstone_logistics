import Auth from "../../helper/Auth"

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * Action types for agent login
 */

export const loginStart = () => {
   return {
     type: LOGIN_START
   }
}

export const loginSuccess = ( data ) => {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

export const loginFailed = ( error ) => {
  return {
    type: LOGIN_FAILED,
    error
  }
}

/**
 * Action creator for agents login
 */

export const onLogin = ( data ) =>{
  return dispatch => {
    dispatch( loginStart() );
    fetch( `${ BASE_URL }/login`, {
      method: "POST",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify( data )
    } )
      .then( response => response.json() )
      .then( resp => {
        if ( resp.error ) {
          dispatch( loginFailed( resp.error ) );
          return;
        }
        dispatch( loginSuccess( resp ) );
        Auth.authenticateUser( JSON.stringify( resp ) );
      } )
      .catch( err => {
        dispatch( loginFailed( "Something went wrong. Please try again" ) );
      } );
  }  
}

 
/**
 * Handles account logout
 */
export const logoutStart = () => {
  return {
    type: LOGIN_START
  }
}

export const logoutSuccess = ( data ) => {
  return {
    type: LOGOUT_SUCCESS,
    data
  }
}

export const logoutFailed = ( error ) => {
  return {
    type: LOGOUT_FAILED,
    error
  }
}

export const logout = () => {
  return dispatch => {
    dispatch( logoutStart() );
    fetch( `${ BASE_URL }/signout`, {
      method: "GET",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json"
      }
    } )
      .then( response => response.json() )
      .then( resp => {
        dispatch( logoutSuccess( resp ) );
      } )
      .catch( err => {
        dispatch( logoutFailed( err.message ) );
      } );
  }
}

/**
 * Action types for agent registration
 */
export const registrationStart = () => {
  return {
    type: REGISTRATION_START
  }
}

export const registrationSuccess = ( data ) => {
  return {
    type: REGISTRATION_SUCCESS,
    data
  }
}

export const registrationFailed = ( error ) => {
  return {
    type: REGISTRATION_FAILED,
    error
  }
}

/**
 * Action creator for agent registration
 * @param {data} data of the person registering
 */
export const register = ( data ) => {
  return dispatch => {
    dispatch( registrationStart() );
    fetch( `${ BASE_URL }/signup`, {
      method: "POST",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify( data )
    } )
      .then( response => response.json() )
      .then( resp => {
        if ( resp.error ) {
          dispatch( registrationFailed( resp.error ) );
          return;
        }
        Auth.authenticateUser( JSON.stringify( resp ) );
        dispatch( registrationSuccess( resp ) );
      } )
      .catch( err => {
        dispatch( registrationFailed( `Request failed. ${err.message}`));
      } );
  }
}
