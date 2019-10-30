import React, { Component } from 'react';
import '../css/style.css';
// import '../css/footer.css';


export class Footer extends Component {
    render() {
        return (

            <footer class="page-footer-section">
                <div class="row m-0">
                    <div class="col m10 offset-m1">
                        <div class="row">
                            <div class="col m3 s12 m-t-20">
                                <h6 class="footer-titles">Contact Us</h6>
                                <ul>
                                    <li><a href="#!">+91 90909 09090</a></li>
                                    <li><a href="#!">dummymail@jama.co.in</a></li>
                                </ul>
                                <div class="footer-download-sections">
                                    <h6 class="footer-titles">Downloads</h6>
                                    <ul>
                                        <li><a href="#!">Brochure</a></li>
                                        <li><a href="#!">Factsheet: Comparison MF vs JARS</a></li>
                                        <li><a href="#!">Factsheet: Comparison MF vs JARS</a></li>
                                        <li><a href="#!">Comparison NPS vs JARS</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div class="col m3 s12 m-t-20">
                                <h6 class="footer-titles">Customer Service</h6>
                                <ul>
                                    <li><a href="#!">Contact Us</a></li>
                                    <li><a href="#!">Ordaring & Payment</a></li>
                                    <li><a href="#!">Product Walkthrough</a></li>
                                    <li><a href="#!">Your Open Ticket</a></li>
                                    <li><a href="#!">Returns</a></li>
                                    <li><a href="#!">FAQ</a></li>
                                </ul>
                            </div>
                            <div class="col m3 s12 m-t-20">
                                <h6 class="footer-titles">Information</h6>
                                <ul>
                                    <li><a href="#!">About Jama JARS</a></li>
                                    <li><a href="#!">Pricacy Ploicy</a></li>
                                    <li><a href="#!">Terms & Conditions</a></li>
                                    <li><a href="#!">Press Enquiries</a></li>
                                </ul>
                            </div>
                            <div class="col m3 s12 m-t-20">
                                <h6 class="footer-titles">Subscribe to jama via Email</h6>
                                <p>Lorem Ipsum is simply dumszmy text of the printing and typesetting industry.</p>
                                <form class="example">
                                    <input type="text" placeholder="Email Address" name="Email Address"></input>
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Footer


