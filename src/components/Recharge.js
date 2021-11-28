import React from 'react'
import { Link } from 'react-router-dom'
import "../css/style1.css"

export default class Recharge extends React.Component {

    constructor(props) {
        super(props);
        this.onClickFunction = this.onClickFunction.bind(this);
      }

    onClickFunction(e) {
        console.log(e.target.className);
        e.target.className="operatorClicked";
     }
    render(){
        return(
<div class="bg-light">
<div class="container" style={{"marginTop": "0px","marginBottom": "0px"}}>
    <div class="py-5 text-center">
    <h2>Recharge</h2>
    <p class="lead">Please Fill In The Details</p>
  </div>

  <div class="row justify-content-center">
    <div class="col-lg-" >
      <h4 class="mb-3">Select your operator</h4>
      <form class="needs-validation" novalidate>
        <div class="row" style={{"marginBottom": "40px"}}>
          <div class="col">
              <div class="row">
                <img class="operator-img" src="./img/jio.png" alt="jio" onClick={this.onClickFunction} />
              </div>
              <div class="row operatorName">
                Jio
              </div>
          </div>
          <div class="col">
              <div class="row">
              <img class="operator-img" src="./img/airtel.jpg" alt="airtel" onClick={this.onClickFunction} />
              </div>
              <div class="row operatorName">
                Airtel
              </div>
          </div>
          <div class="col">
              <div class="row">
              <img class="operator-img" src="./img/vi.jpg" alt="vi" onClick={this.onClickFunction} />
              </div>
              <div class="row operatorName">
                VI
              </div>
          </div>
          <div class="col">
              <div class="row">
              <img class="operator-img" src="./img/bsnl.png" alt="bsnl" onClick={this.onClickFunction} />
              </div>
              <div class="row operatorName">
                BSNL
              </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="username">Mobile Number</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">+91</span>
            </div>
            <input type="number" class="form-control" id="number" placeholder="Mobli Number" required />
            <div class="invalid-feedback" style={{"width": "100%"}}>
              Your Moblie Number is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email <span class="text-muted">(Optional)</span></label>
          <input type="email" class="form-control" id="email" placeholder="you@example.com" />
          <div class="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="country">Choose your plan</label>
            <select class="custom-select d-block w-100" id="country" required>
              <option value="">Choose...</option>
              <option>1.5Gb/day</option>
              <option>2Gb/day</option>
              <option>3Gb/day</option>
              <option>5Gb/day</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid plan.
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="state">Duration</label>
            <select class="custom-select d-block w-100" id="state" required>
              <option value="">Choose...</option>
              <option>1 Month</option>
              <option>2 Month</option>
              <option>3 Month</option>
              <option>6 Month</option>
              <option>1 Year</option>
            </select>
            <div class="invalid-feedback">
              Please provide a valid Duration.
            </div>
          </div>
        </div>
        <hr class="mb-4" />

        <h4 class="mb-3">Payment</h4>

        <div class="d-block my-3">
          <div class="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
            <label class="custom-control-label" for="credit">Credit card</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required />
            <label class="custom-control-label" for="debit">Debit card</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />
            <label class="custom-control-label" for="paypal">PayPal</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="cc-name">Name on card</label>
            <input type="text" class="form-control" id="cc-name" placeholder="" required />
            <small class="text-muted">Full name as displayed on card</small>
            <div class="invalid-feedback">
              Name on card is required
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="cc-number">Credit card number</label>
            <input type="text" class="form-control" id="cc-number" placeholder="" required />
            <div class="invalid-feedback">
              Credit card number is required
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="cc-expiration">Expiration</label>
            <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
            <div class="invalid-feedback">
              Expiration date required
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-cvv">CVV</label>
            <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
            <div class="invalid-feedback">
              Security code required
            </div>
          </div>
        </div>
        <hr class="mb-4" />
        <button class="btn btn-primary btn-xl btn-block" type="submit"><Link to="/rechargeSuccessfull">Recharge</Link></button>
      </form>
    </div>
  </div>
</div>
    
</div>
        )
    }
}