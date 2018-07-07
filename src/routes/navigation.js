import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Delivery Reminders</NavLink></li>
      <li><NavLink to='/add'>Add Customer</NavLink></li>
      <li><NavLink to='/archives'>Archives</NavLink></li>
    </ul>
  </nav>
);

export default Navigation