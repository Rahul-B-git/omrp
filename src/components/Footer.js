import React from 'react'
import "../css/footer.css"

export default class Home extends React.Component {
    render() {
        return (
            <footer>
                <h3>Mobi-Charge</h3>
                <h5>© Mobi-Charge All rigths reserved</h5>
                <h5>Design By</h5>
                <h6>Rahul , Rakesh , Punith , Pavan</h6>
                <div class="rounded-social-buttons">
                    <a class="social-button facebook" target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                    <a class="social-button twitter" target="_blank" rel="noreferrer" href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                    <a class="social-button instagram" target="_blank" rel="noreferrer" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                </div>
            </footer>
        )
    }
}