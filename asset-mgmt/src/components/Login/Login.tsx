import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { actionTypes, selectors } from '../../features/userprofile'

export const Login: React.FC = () => {
  const [loginDetails, setLoginDetails] = useState({userId: '', password: '', message: '', isSuccessful: false});
  const dispatch = useDispatch()
  const history = useHistory();
  const isSignedIn = useSelector(selectors.getIsSignedIn)

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if(loginDetails.userId === 'Admin' && loginDetails.password === 'Password'){
      setLoginDetails({userId: '', password: '', message: '', isSuccessful: true})
    }
    else{
      setLoginDetails((prev) => {
        return {
        ...prev,
        message: "Invalid Login"
      }})
    }
  }
  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const userId = event.target.value
    setLoginDetails((prev) => {
      return {
      ...prev,
      userId
    }})
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const password = event.target.value
    setLoginDetails((prev) => {
      return {
      ...prev,
      password
    }})
  }

  useEffect(() => {
    if(loginDetails.isSuccessful){
      dispatch({ type: actionTypes.SIGNED_IN });
      history.push('/');
    }
  }, [loginDetails]);

  useEffect(() => {
    if(isSignedIn){
      dispatch({ type: actionTypes.SIGNED_OUT });
    }
  }, [isSignedIn]);
  
  return (
    <Fragment>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Login</span>
          <form className="col s12">
            <div className='row'>
              <div className='col s12' />
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label className='col s12' htmlFor="userId">User Id<input id="userId" type="text" className="validate" value={loginDetails.userId} onChange={handleUserIdChange}/></label>
              </div>
            </div>
            <div className='row'>
              <div className='col s12' />
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label className='col s12' htmlFor="password">Password<input id="password" type="password" className="validate" value={loginDetails.password}  onChange={handlePasswordChange}/></label>
              </div>
            </div>
            <div className='row'>
              <div className='col s12' />
            </div>
            <div className='row'>
              <div className='col s12' />
            </div>
            <div className='row'>
              <div className='col s12'>
                <span>{loginDetails.message}</span>
              </div>
            </div>
          </form>
        </div>
        <div className="card-action right-align">
          <button
            className="waves-effect waves-teal btn-flat blue"
            type="button"
            data-qa="login"
            onClick={handleSignIn}
          >
            login
                </button>
        </div>
      </div>
    </Fragment>
  )
};


