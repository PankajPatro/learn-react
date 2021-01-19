import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css';
import { selectors } from '../../features/userprofile'

const UserProfile: React.FC = () => {
  const displayName = useSelector(selectors.getDisplayName)
  const isSignedIn = useSelector(selectors.getIsSignedIn)

  useEffect(() => {
    if (isSignedIn) {
      const elems = document.querySelectorAll('.navdropdown');
      const options = {
        inDuration: 300,
        outDuration: 300,
        hover: false,
        closeOnClick: true,
        coverTrigger: false, // Displays dropdown below the button
      };
      M.Dropdown.init(elems, options);
    }
  }, [isSignedIn]);

  return (
    isSignedIn ?
      <li>
        <a className="dropdown-trigger navdropdown" href="#!" data-target="dropdown1">
          <strong>{displayName}</strong><i className="material-icons right">arrow_drop_down</i>
        </a>
        <ul id="dropdown1" className="dropdown-content">
          <li><NavLink to="/login">Logout</NavLink>
          </li>
        </ul>
      </li>
      : <li><NavLink to="/login">Login</NavLink></li>
  )
};

export default UserProfile
