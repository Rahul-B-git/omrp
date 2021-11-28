import React from 'react'
import { Link } from 'react-router-dom'
import "../css/style1.css"

const rechargeSuccessfull = () => {
    return (
        <div style={{"textAlign": "center"}}>
            <img src="./img/green tick.png" alt="done" style={{"marginLeft": "200px" , "marginRight": "200px"}}/>
            <h3>Recharge Successful</h3>
            <Link to="/"><button type="button" class="btn btn-primary" style={{"width": "200px"}}>Done</button></Link>
        </div>
    )
}

export default  rechargeSuccessfull