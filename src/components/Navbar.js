import React from 'react'
import { Link } from 'react-router-dom'
import "../css/style1.css"


export default class Navbar extends React.Component {
  
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{"backgroundColor": "#080808"}}>
                <Link className="navbar-brand" to="/">© Mobi-Charge</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <div className="nav-list">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/recharge" >Recharge</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/user/login">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/user/signup">Sign Up</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}