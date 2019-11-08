import React, { Component } from 'react';
import '../css/style.css';
import '../css/about.css';
import '../css/values.css';
import ourvalueimg from '../assets/ourvalueimg.svg';
import promiselogoa from '../assets/promiselogoa.svg';
import value from '../assets/value.svg';
import honesty from '../assets/honesty.svg';
import profit from '../assets/profit.svg';
import save from '../assets/save.svg';
import speed from '../assets/speed.svg';
import valueicon1 from '../assets/valueicon1.svg';
import valueicon2 from '../assets/valueicon2.svg';
import valueicon3 from '../assets/valueicon3.svg';
import valueicon4 from '../assets/valueicon4.svg';
import valueicon5 from '../assets/valueicon5.svg';
import valueicon6 from '../assets/valueicon6.svg';
import Footer from './Footer';
import Header from './Header';
import Tab from './Tab';
import WOW from 'wowjs';





export class Values extends Component {
    componentDidMount() {
        new WOW.WOW().init();
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Header />

                <div class="jars-section top-content-section value-top-section valign-wrapper">
                    <div class="container w-percent-90 valign-wrapper">
                        <div class="row valign-wrapper">
                            <div class="col s12 m8 offset-m2">
                                <div class="jars-section-title-heading">
                                    <h4><b>What we vouch for</b></h4>
                                </div>
                                <div class="about-philosophy-left-content center-align wow fadeInUp" data-wow-delay="0.4s">
                                    <p>Our <span class="link-text-style"> core values</span> and <span class="link-text-style"> operating principles</span> are designed such that your <span class="link-text-style"> wealth</span> is preserved first and then procreated.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="value-tab-section">
                    <Tab />

                    {/* <div class="tabs-btns center-align">

                        <ul>
                            <li>
                                <a class="waves-effect waves-light btn btn-large btn-orange m-r-15">Contact Advisor</a>
                            </li>                             <span>
                                <li>
                                    <a class="waves-effect waves-light btn btn-large btn-orange m-r-15">Contact Advisor</a>
                                </li>
                            </span>

                        </ul>
                    </div> */}

                    <div class="container Values-tab-content">
                        <div class="row m-0">
                            <div class="col m4 col s12">
                                <div class="tab-content-value-list wow fadeInUp">
                                    <img src={value} />
                                    <h5>Customer Focus</h5>
                                    <p>Do what is right for the client. <br></br>Always be on their side! </p>
                                </div>
                            </div>
                            <div class="col m4 col s12">
                                <div class="tab-content-value-list wow fadeInUp">
                                    <img src={honesty} />
                                    <h5>Honesty</h5>
                                    <p>No lies, No hidden costs for the <br></br>
                                        clients. No Jargon. No BS. </p>
                                </div>
                            </div>
                            <div class="col m4 col s12">
                                <div class="tab-content-value-list wow fadeInUp">
                                    <img src={profit} />
                                    <h5>Profitability</h5>
                                    <p>Help clients in a long term and<br></br>
                                        sustainable way. </p>
                                </div>
                            </div>
                        </div>
                        <div class="row m-0">
                            <div class="col m2"></div>
                            <div class="col m4 col s12">
                                <div class="tab-content-value-list wow fadeInUp">
                                    <img src={save} />
                                    <h5>Frugality</h5>
                                    <p>Do what is right for the client. <br></br>Always be on their side! </p>
                                </div>
                            </div>
                            <div class="col m4 col s12">
                                <div class="tab-content-value-list wow fadeInUp">
                                    <img src={speed} />
                                    <h5>Speed</h5>
                                    <p>Spend judiciously in the interest <br></br>
                                        of the client and the company. </p>
                                </div>
                            </div>
                            <div class="col m2"></div>
                        </div>
                    </div>

                </div>
                <div class="divider"></div>

                <div class="promise-image-section valign-wrapper">
                    <div class=" row valign-wrapper">
                        <div class=" research-invest-section-content ">
                            <img src={promiselogoa} />
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default Values


