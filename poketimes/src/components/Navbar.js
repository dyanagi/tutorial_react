import React from "react";
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  // console.log(props)

  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000)

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <span className="brand-logo">Poke'Times</span>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

// <Navbar/> doesn't get `props` by default. `withRouter` (Higher Order Component) will supply `props`
export default withRouter(Navbar);
