import React from 'react'
import { NavLink } from 'react-router-dom'

const CompanyLogo: React.FC<{ navPath: string; logoPath: string }> = ({
  navPath = `/`,
  logoPath = `/logo192.png`,
}) => (
  <NavLink to={navPath} className="brand-logo">
    <img className="logo" src={logoPath} alt="" />
  </NavLink>
)

export default CompanyLogo
