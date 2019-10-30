import React, { Component } from 'react';
import jamabrandlogo from '../assets/Jama_wealth_logo.svg';
import { Link } from "react-router-dom";
import '../css/style.css';
import Sidebar from './Sidebar';


export class Header extends Component {
    
    render() {
        return (
            <div>
                <nav class="row white header-bg-shadow" role="navigation">
                    <div class="nav-wrapper container-fluid custom-width-header">
                        <Sidebar />
                        <a class="navbar-brand">
                            <Link to="/" > <img className="brand-logo-img" src={jamabrandlogo} /></Link>
                        </a>
                        <ul class="right hide-on-med-and-down">
                            <li><Link to="/Aboutus">About Us</Link></li>
                            <li><Link to="/Values">Our Values</Link></li>
                            <li><Link to="/testimonial">Testimonials</Link></li>
                            <li><Link to="#" class="start-btn">Get Started</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header


