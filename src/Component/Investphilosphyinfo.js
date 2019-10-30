import React, { Component } from 'react';
import '../css/style.css';
import '../css/about.css';
import { Link } from "react-router-dom";
import leftarrow from '../assets/left-arrow.svg';
import howjamawealthimg from '../assets/how-jama-wealth-img.svg';
import Footer from './Footer';
import Header from './Header';
import Downladebook from './Downladebook';





export class Investphilosphyinfo extends Component {
    render() {
        return (
            <div>
                <Header />

                <div class="jars-section">
                    <div class="row">
                        <div class="container-fluid back-btn-section-row w-percent-90 m-auto">
                            <Link to="/"> <img class=" responsive-img" src={leftarrow} /></Link>
                        </div>
                    </div>

                    <div class="container how-jama-works-content w-percent-90">
                        <div class="row">
                            <div class="col s12 m5">
                                <div class="about-philosophy-left-content">
                                    <h4>Our Investment philosophy</h4>
                                    <p>Lorem ipsum dolor sit amet, quod deserunt intellegam nam in, cum no atqui definiebas. Ex nam
                                        error recteque. Eam cu rebum phaedrum lobortis. quod deserunt intellegam nam in, Eam labitur
                            nominavi suscipiantur eu. </p>
                                    <p>Lorem ipsum dolor sit amet, quod deserunt intellegam nam in, cum no atqui definiebas. quod
                            deserunt intellegam nam cum no atqui definiebas. quod deserunt intellegam nam </p>
                                </div>
                            </div>

                            <div class="col s12 m7">
                                <div class="Aboutus-img-right right-align">
                                    <img class=" responsive-img" src={howjamawealthimg} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Downladebook />

                <div class=" research-invest-section ">
                    <div class=" row ">
                        <div class=" col s12 m6 offset-m3 ">
                            <div class=" research-invest-section-content ">
                                <h4>Too Busy to Research and Invest in Stocks and Funds</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer
                                    took a galley
                                        of type and scrambled it to make a type specimen book</p>
                                <div class=" research-invest-btn-section ">
                                    <a class=" btn-orange research-btn ">Contact Advisor</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div >
        )
    }
}

export default Investphilosphyinfo


