import React from 'react'
import { NavLink } from 'react-router-dom'
import CompanyLogo from './CompanyLogo/CompanyLogo'
import UserProfile from './UserProfile/UserProfile'

export const Navbar: React.FC = () => {
  const navPath = `/`
  const logoPath = `/logo512.png`
  return (
    <nav>
      <div className="nav-wrapper cyan darken-1 px1">
        <CompanyLogo navPath={navPath} logoPath={logoPath} />
        <ul className="right hide-on-med-and-down">
          <li cy-data="home-nav-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <UserProfile />
        </ul>
      </div>
    </nav>
  )
}
