import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../Css/NavigationBar.css'

const NavigationBar = () => {
    return(
        <nav className="teal darken-4">
        <div className="container">
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><Link to={'/numberOne'}>Number One</Link></li>
            <li><Link to={'/numberTwo'}>Number Two</Link></li>
            <li><Link to={'/numberThree'}>Number Three</Link></li>
            <li><Link to={'/numberFour'}>Number Four</Link></li>
            <li><Link to={'/search'}>Search</Link></li>
          </ul>
        </div>
      </nav>
    )
}
export default NavigationBar
