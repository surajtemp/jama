import React, { Component } from 'react';
import '../css/style.css';
import '../css/about.css';
import '../css/values.css';
import ourvalueimg from '../assets/ourvalueimg.svg';
import promiselogoa from '../assets/promiselogoa.svg';
import twitter from '../assets/twitter_logo.svg';
import linkedin from '../assets/linkedin_logo.svg';
import team1 from '../assets/team1.JPG';
import team2 from '../assets/team2.JPG';
import Rectangle1a from '../assets/Rectangle1a.png';
import Footer from './Footer';
import Header from './Header';
import Tab from './Tab';






export class Values extends Component {
    render() {
        return (
            <div>
                <Header />

                <div class="jars-section top-content-section">
                    <div class="container w-percent-90">
                        <div class="jars-section-title-heading">
                            <h3><b>Our Values</b></h3>
                        </div>
                        <div class="row">
                            <div class="col s12 m5">
                                <div class="about-philosophy-left-content p-t-20percent">
                                    <h5>We value our users </h5>
                                    <p>Our core values and operating principles are designed such that your <span class="link-text-style"> wealth</span> is preserved first and then procreated.</p>
                                </div>
                            </div>

                            <div class="col s12 m7">
                                <div class="Aboutus-img-right right-align">
                                    <img src={ourvalueimg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="value-tab-section">
                    <Tab />
                </div>

                <div class=" research-invest-section ">
                    <div class=" row ">
                        <div class=" col s12 m6 offset-m3 ">
                            <div class=" research-invest-section-content ">
                                <img src={promiselogoa} />
                                <h4>Don't get trapped into the others offerings.<br></br>We are always on your side</h4>
                                <div class=" research-invest-btn-section ">
                                    <a class=" btn-orange research-btn ">Contact Advisor</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default Values


