import React, { Component } from 'react';
import jamabrandlogo from '../assets/Jama_wealth_logo.svg';
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import '../css/style.css';
import Sidebar from './Sidebar';

export class Header extends Component {



    render() {
        return (
            <div>
                <nav className="row white header-bg-shadow" role="navigation">
                    <div class="nav-wrapper container-fluid custom-width-header">
                        <Sidebar />
                        <a className="navbar-brand">
                            <Link to="/"> <img className="brand-logo-img" src={jamabrandlogo} /></Link>
                        </a>
                        <ul className="right hide-on-med-and-down nav-pills">
                            <li><Link to="/Aboutus" class="active">About Us</Link></li>
                            <li><Link to="/Values" class="active">Our Values</Link></li>
                            <li><Link to="/testimonial" class="active">Testimonials</Link></li>
                            <li><Link to="#" class="start-btn">Get Started</Link></li>
                        </ul>
                    </div>                    
                </nav>

               
            </div>
        )
    }
}

export default Header


