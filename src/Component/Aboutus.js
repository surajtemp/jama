import React, { Component } from 'react';
import '../css/style.css';
import '../css/about.css';
import aboutimg from '../assets/aboutimg.svg';
import aboutustopimg from '../assets/aboutustopimg.JPG';
import twitter from '../assets/twitter_logo.svg';
import linkedin from '../assets/linkedin_logo.svg';
import team1 from '../assets/team1.JPG';
import team2 from '../assets/team2.JPG';
import Rectangle1a from '../assets/Rectangle1a.png';
import Footer from './Footer';
import Header from './Header';





export class Aboutus extends Component {
    render() {
        return (
            <div>
                <Header />

                <div class="jars-section top-content-section">
                    <div class="container w-percent-90">
                        <div class="jars-section-title-heading">
                            <h3><b>About Us</b></h3>
                        </div>
                        <div class="row">
                            <div class="col s12 m5">
                                <div class="about-philosophy-left-content">
                                    <h5>Our Philosophy</h5>
                                    <p>Lorem ipsum dolor sit amet, quod deserunt intellegam nam in, cum no atqui definiebas. Ex nam error recteque. Eam cu rebum phaedrum lobortis. quod deserunt intellegam nam in, Eam labitur nominavi suscipiantur eu. </p>
                                    <p>Lorem ipsum dolor sit amet, quod deserunt intellegam nam in, cum no atqui definiebas. quod deserunt intellegam nam</p>
                                </div>
                            </div>

                            <div class="col s12 m7">
                                <div class="Aboutus-img-right right-align">
                                    <img src={aboutustopimg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="jars-section">
                    <div class=" jars-section-title-heading ">
                        <h3><b>Our Team</b></h3>
                    </div>
                    <div class=" row ">
                        <div class=" col m6 offset-m3 ">
                            <div class=" row ">
                                <div class=" col m6 ">
                                    <div class=" team-top-section ">
                                        <div class=" team-top-img center-align ">
                                            <img src={team1} />
                                        </div>
                                        <div class=" team-top-content center-align ">
                                            <h6>Ram kalyan Medury</h6>
                                            <p>Founder & CEO</p>
                                            <li><img src={twitter} /></li>
                                            <li><img src={linkedin} /></li>

                                        </div>
                                    </div>
                                </div>
                                <div class=" col m6 ">
                                    <div class=" team-top-section ">
                                        <div class=" team-top-img center-align ">
                                            <img src={team2} />
                                        </div>
                                        <div class=" team-top-content center-align ">
                                            <h6>Manoj Trivedi</h6>
                                            <p>Research & Advisory Head</p>
                                            <li><img src={twitter} /></li>
                                            <li><img src={linkedin} /></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="team-members-fullwidth-section">
                        <div class="row">
                            <div class=" col m2 no-padding ">
                                <div class=" image-section ">
                                    <div class=" content ">
                                        <a href=" https://unsplash.com/photos/HkTMcmlMOUQ " target=" _blank ">
                                            <div class=" content-overlay "></div>
                                            <img class=" content-image " src={Rectangle1a} />
                                            <div class=" content-details fadeIn-bottom ">
                                                <h6 class=" content-title ">Vinay Kumar Raj</h6>
                                                <ul class=" team-top-content team-member-profile-descritption ">
                                                    <li class=" profile-designation ">UX Design Head</li> I
                                                    <li><img src={twitter} /></li>
                                                    <li><img src={linkedin} /></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class=" col m2 no-padding ">
                                <div class=" image-section ">
                                    <div class=" content ">
                                        <a href=" https://unsplash.com/photos/HkTMcmlMOUQ " target=" _blank ">
                                            <div class=" content-overlay "></div>
                                            <img class=" content-image " src={Rectangle1a} />
                                            <div class=" content-details fadeIn-bottom ">
                                                <h6 class=" content-title ">Vinay Kumar Raj</h6>
                                                <ul class=" team-top-content team-member-profile-descritption ">
                                                    <li class=" profile-designation ">UX Design Head</li> I
                                                    <li><img src={twitter} /></li>
                                                    <li><img src={linkedin} /></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class=" col m2 no-padding ">
                                <div class=" image-section ">
                                    <div class=" content ">
                                        <a href=" https://unsplash.com/photos/HkTMcmlMOUQ " target=" _blank ">
                                            <div class=" content-overlay "></div>
                                            <img class=" content-image " src={Rectangle1a} />
                                            <div class=" content-details fadeIn-bottom ">
                                                <h6 class=" content-title ">Vinay Kumar Raj</h6>
                                                <ul class=" team-top-content team-member-profile-descritption ">
                                                    <li class=" profile-designation ">UX Design Head</li> I
                                                    <li><img src={twitter} /></li>
                                                    <li><img src={linkedin} /></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class=" col m2 no-padding ">
                                <div class=" image-section ">
                                    <div class=" content ">
                                        <a href=" https://unsplash.com/photos/HkTMcmlMOUQ " target=" _blank ">
                                            <div class=" content-overlay "></div>
                                            <img class=" content-image " src={Rectangle1a} />
                                            <div class=" content-details fadeIn-bottom ">
                                                <h6 class=" content-title ">Vinay Kumar Raj</h6>
                                                <ul class=" team-top-content team-member-profile-descritption ">
                                                    <li class=" profile-designation ">UX Design Head</li> I
                                                    <li><img src={twitter} /></li>
                                                    <li><img src={linkedin} /></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class=" col m2 no-padding ">
                                <div class=" image-section ">
                                    <div class=" content ">
                                        <a href=" https://unsplash.com/photos/HkTMcmlMOUQ " target=" _blank ">
                                            <div class=" content-overlay "></div>
                                            <img class=" content-image " src={Rectangle1a} />
                                            <div class=" content-details fadeIn-bottom ">
                                                <h6 class=" content-title ">Vinay Kumar Raj</h6>
                                                <ul class=" team-top-content team-member-profile-descritption ">
                                                    <li class=" profile-designation ">UX Design Head</li> I
                                                    <li><img src={twitter} /></li>
                                                    <li><img src={linkedin} /></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class=" col m2 no-padding ">
                                <div class=" image-section ">
                                    <div class=" content ">
                                        <a href=" https://unsplash.com/photos/HkTMcmlMOUQ " target=" _blank ">
                                            <div class=" content-overlay "></div>
                                            <img class=" content-image " src={Rectangle1a} />
                                            <div class=" content-details fadeIn-bottom ">
                                                <h6 class=" content-title ">Vinay Kumar Raj</h6>
                                                <ul class=" team-top-content team-member-profile-descritption ">
                                                    <li class=" profile-designation ">UX Design Head</li> I
                                                    <li><img src={twitter} /></li>
                                                    <li><img src={linkedin} /></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class=" col m2 no-padding ">
                                <div class=" image-section ">
                                    <div class=" content ">
                                        <a href=" https://unsplash.com/photos/HkTMcmlMOUQ " target=" _blank ">
                                            <div class=" content-overlay "></div>
                                            <img class=" content-image " src={Rectangle1a} />
                                            <div class=" content-details fadeIn-bottom ">
                                                <h6 class=" content-title ">Vinay Kumar Raj</h6>
                                                <ul class=" team-top-content team-member-profile-descritption ">
                                                    <li class=" profile-designation ">UX Design Head</li> I
                                                    <li><img src={twitter} /></li>
                                                    <li><img src={linkedin} /></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class=" col m2 no-padding ">
                                <div class=" image-section ">
                                    <div class=" content ">
                                        <a href=" https://unsplash.com/photos/HkTMcmlMOUQ " target=" _blank ">
                                            <div class=" content-overlay "></div>
                                            <img class=" content-image " src={Rectangle1a} />
                                            <div class=" content-details fadeIn-bottom ">
                                                <h6 class=" content-title ">Vinay Kumar Raj</h6>
                                                <ul class=" team-top-content team-member-profile-descritption ">
                                                    <li class=" profile-designation ">UX Design Head</li> I
                                                    <li><img src={twitter} /></li>
                                                    <li><img src={linkedin} /></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class=" col m2 no-padding ">
                                <div class=" image-section ">
                                    <div class=" content ">
                                        <a href=" https://unsplash.com/photos/HkTMcmlMOUQ " target=" _blank ">
                                            <div class=" content-overlay "></div>
                                            <img class=" content-image " src={Rectangle1a} />
                                            <div class=" content-details fadeIn-bottom ">
                                                <h6 class=" content-title ">Vinay Kumar Raj</h6>
                                                <ul class=" team-top-content team-member-profile-descritption ">
                                                    <li class=" profile-designation ">UX Design Head</li> I
                                                    <li><img src={twitter} /></li>
                                                    <li><img src={linkedin} /></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class=" col m2 no-padding ">
                                <div class=" image-section ">
                                    <div class=" content ">
                                        <a href=" https://unsplash.com/photos/HkTMcmlMOUQ " target=" _blank ">
                                            <div class=" content-overlay "></div>
                                            <img class=" content-image " src={Rectangle1a} />
                                            <div class=" content-details fadeIn-bottom ">
                                                <h6 class=" content-title ">Vinay Kumar Raj</h6>
                                                <ul class=" team-top-content team-member-profile-descritption ">
                                                    <li class=" profile-designation ">UX Design Head</li> I
                                                    <li><img src={twitter} /></li>
                                                    <li><img src={linkedin} /></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class=" col m2 no-padding ">
                                <div class=" image-section ">
                                    <div class=" content ">
                                        <a href=" https://unsplash.com/photos/HkTMcmlMOUQ " target=" _blank ">
                                            <div class=" content-overlay "></div>
                                            <img class=" content-image " src={Rectangle1a} />
                                            <div class=" content-details fadeIn-bottom ">
                                                <h6 class=" content-title ">Vinay Kumar Raj</h6>
                                                <ul class=" team-top-content team-member-profile-descritption ">
                                                    <li class=" profile-designation ">UX Design Head</li> I
                                                    <li><img src={twitter} /></li>
                                                    <li><img src={linkedin} /></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class=" col m2 no-padding ">
                                <div class=" image-section ">
                                    <div class=" content ">
                                        <a href=" https://unsplash.com/photos/HkTMcmlMOUQ " target=" _blank ">
                                            <div class=" content-overlay "></div>
                                            <img class=" content-image " src={Rectangle1a} />
                                            <div class=" content-details fadeIn-bottom ">
                                                <h6 class=" content-title ">Vinay Kumar Raj</h6>
                                                <ul class=" team-top-content team-member-profile-descritption ">
                                                    <li class=" profile-designation ">UX Design Head</li> I
                                                    <li><img src={twitter} /></li>
                                                    <li><img src={linkedin} /></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" JAR-contant-button center-align ">
                    <div class=" row ">
                        <div class=" col m6 offset-m3 ">
                            <h5>Connect with us to know more about</h5>
                            <h3 class=" background "><span>J &nbsp; . &nbsp;A &nbsp;. &nbsp;R &nbsp;. &nbsp;S</span>
                            </h3>
                            <div class=" jars-btns JAR-contant-button-style ">
                                <li class=" btn-outline ">Know more</li>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default Aboutus


