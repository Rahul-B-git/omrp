import React from 'react'
import { Link } from 'react-router-dom'
import '../css/login.css'

export default class Signup extends React.Component {
    render(){
        return(
            <form class="form-signin">
                 <div className="brand" to="/">Mobi-Charge</div>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <label for="inputPassword" class="sr-only">Re-Enter Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Re-Enter Password" required />
                <label htmlFor="register-display-name"  className="sr-only">User Name</label>
                <input type="text" id="username" class="form-control" placeholder="User Name" required />
                <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <Link to="/"><button type="button" class="btn btn-primary">sign-up</button></Link>
				<Link to="/"><button type="button" class="btn btn-primary">cancel</button></Link>
			</form>
        )
    }
}