import React from 'react'
import { Link } from 'react-router-dom'
import "../css/style1.css"

export default class Home extends React.Component {
  
    render() {
        return (
            <div>
                <div className="home-img">
                    <img src="./img/home.jpeg" alt="" style={{ "width": "100%"}}/>
                    <div class="centered">Online Mobile Recharge Portal<br/>
                        <div class="centered-qoute">Recharge Your Moble in a better way</div>
                        <Link to="/recharge"><button type="button" class="btn btn-primary">Recharge</button></Link>
                    </div>
                
                </div>
                <div class="container">
                    <div class="row"> 
                        <div class="col-3">
                            <h4>
                                Recharge your Moblie in 3 simple steps.
                            </h4>
                                
                        </div>
                        <div class="col-9">
                            <ul class="progressbar">
                                <li>Login to your account</li>
                                <li>Enter recharge details</li>
                                <li>Make Payment</li>
                            </ul>
                        </div>
                    
                    </div>
                    
                </div>

            </div>
            
        )
    }
}