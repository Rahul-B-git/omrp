import React from 'react'
import { Link } from 'react-router-dom'
import '../css/login.css'

export default class Login extends React.Component {
    render(){
        return(
            <form class="form-signin">
                 <div className="brand" to="/">Mobi-Charge</div>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="btn btn-primary" type="submit"><Link to="/">login</Link></button>
				<Link to="/"><button type="button" class="btn btn-primary">cancel</button></Link>
            </form>
        )
    }
}