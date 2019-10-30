import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/style.css';
import InvestPhilosphy from './InvestPhilosphy';
import feature1 from '../assets/feature1.JPG';
import Jargraph from '../assets/Jargraph.PNG';
import Group2284 from '../assets/Group 2284.svg';
import Downladebook from './Downladebook';
import profile from '../assets/profile.PNG';
import Ram2x from '../assets/Ram@2x.png';
import Manoj2x from '../assets/Manoj@2x.png';
import linkedin from '../assets/linkedin-logo.svg';
import nocusmoney from '../assets/nocusmoney.svg';
import nocustomshare from '../assets/nocustomshare.svg';
import Group10 from '../assets/Group10.svg';
import Group11 from '../assets/Group11.svg';
import Group12 from '../assets/Group12.svg';
import Group13 from '../assets/Group13.svg';
import homegraph from '../assets/homegraph.svg';
import videosectionbg from '../assets/videosectionbg.svg';
import testimonialbrcard from '../assets/testimonial-brcard.svg';





export class HomepageBodyContent extends Component {
  render() {
    return (
      <div class="homepage-body-bg">

        <div class="container homepage-below-feature-section-list w-percent-90">
          <div class="row">
            <div class="col m2 lg2">
              <div class="features-icons-images center-align">
                <img src={nocusmoney} />
              </div>
            </div>
            <div class="col m2 lg2">
              <div class="features-icons-images center-align">
                <img src={nocustomshare} />
              </div>
            </div>
            <div class="col m2 lg2">
              <div class="features-icons-images center-align">
                <img src={Group10} />
              </div>
            </div>
            <div class="col m2 lg2">
              <div class="features-icons-images center-align">
                <img src={Group11} />
              </div>
            </div>
            <div class="col m2 lg2">
              <div class="features-icons-images center-align">
                <img src={Group12} />
              </div>
            </div>
            <div class="col m2 lg2">
              <div class="features-icons-images center-align">
                <img src={Group13} />
              </div>
            </div>
          </div>
        </div>

        <div class="jars-section">
          <div class="container w-percent-90">
            <div class="jars-section-title-heading">
              <h3> <b>J</b>ama <b>A</b>dvisory & <b>R</b>esearch on <b>S</b>tocks <b>(JARS)</b> </h3>
            </div>
            <div class="row">
              <div class="col s12 m6">
                <div class="Jars-section-left">
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard</p>

                  <div class="jars-btns">
                    <li class="btn-orange">Contact Advisor</li>
                    <li class="btn-outline">Know more</li>
                  </div>
                </div>
              </div>

              <div class="col s12 m6">
                <div class="Jar-graph-img">
                  <img src={homegraph} />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="jars-section video-section">
          <div class="container w-percent-90">
            <div class="jars-section-title-heading">
              <h3>What does Our Experts Say</h3>
            </div>
            <div class="row">
              <div class="col m8 s12 offset-m2">
                <div class="video-container">
                  <iframe width="560" height="315"
                    src="https://www.youtube-nocookie.com/embed/fPt-kHmC-hY?controls=0" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div class="video-section-bg">
              <img src={videosectionbg} />
            </div>
          </div>

        </div>

        <div class="jars-section-portfolio">
          <div class="container w-percent-90">
            <div class="row">
              <div class="col s12 m6">
                <div class="Jars-section-left">
                  <h4>Get your portfolio Health <br></br> Checkup Now</h4>
                  <p class="no-padding">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer</p>

                  <div class="jars-btns">
                    <li class="btn-orange">Contact Advisor</li>
                    <li class="no-obigation-style">No Obigations</li>
                  </div>
                </div>
              </div>

              <div class="col s12 m6">
                <div class="portfolio-img-section">
                  {/* <img class="responsive-img" src="./assets/Group 2284.svg"> */}
                  <img src={Group2284} />
                </div>
              </div>
            </div>

          </div>
        </div>

        <Downladebook />

        <div class="jama-testimonials-section">
          <div class="container w-percent-90">
            <div class="jars-section-title-heading">
              <h3 class="testimonials-title-style">Testimonials</h3>
            </div>
            <div class="row m-0">
              <div class="col s12 m4">
                <div class="jama-testimonials-cards">
                  <div class="Testimonial-profile">
                    <div class="row valign-wrapper testimonial-section-profile-details">
                      <div class="testimonial-pic-section">
                        <img class="profile-pic" src={profile} />
                      </div>

                      <div class="testimonial-text">
                        <h6>Pam Beesly</h6>
                        <p class="m-0">since 2011</p>
                      </div>

                    </div>
                    <div class="testimonial-description">
                      <h6>The best of the best..</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book.
                                    </p>
                    </div>
                  </div>
                  <div class="float-right">
                    <i class="material-icons testimonial-more-vert-btn">
                      more_vert
                            </i>
                  </div>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="jama-testimonials-cards">
                  <div class="Testimonial-profile">
                    <div class="row valign-wrapper testimonial-section-profile-details">
                      <div class="testimonial-pic-section">
                        <img class="profile-pic" src={profile} />
                      </div>

                      <div class="testimonial-text">
                        <h6>Pam Beesly</h6>
                        <p class="m-0">since 2011</p>
                      </div>

                    </div>
                    <div class="testimonial-description">
                      <h6>The best of the best..</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book.
                                    </p>
                    </div>
                  </div>
                  <div class="float-right">
                    <i class="material-icons testimonial-more-vert-btn">
                      more_vert
                            </i>
                  </div>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="jama-testimonials-cards">
                  <div class="Testimonial-profile">
                    <div class="row valign-wrapper testimonial-section-profile-details">
                      <div class="testimonial-pic-section">
                        <img class="profile-pic" src={profile} />
                      </div>

                      <div class="testimonial-text">
                        <h6>Pam Beesly</h6>
                        <p class="m-0">since 2011</p>
                      </div>

                    </div>
                    <div class="testimonial-description">
                      <h6>The best of the best..</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book.
                                    </p>
                    </div>
                  </div>
                  <div class="float-right">
                    <i class="material-icons testimonial-more-vert-btn">
                      more_vert
                            </i>
                  </div>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="jama-testimonials-cards">
                  <div class="Testimonial-profile">
                    <div class="row valign-wrapper testimonial-section-profile-details">
                      <div class="testimonial-pic-section">
                        <img class="profile-pic" src={profile} />
                      </div>

                      <div class="testimonial-text">
                        <h6>Pam Beesly</h6>
                        <p class="m-0">since 2011</p>
                      </div>

                    </div>
                    <div class="testimonial-description">
                      <h6>The best of the best..</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book.
                                    </p>
                    </div>
                  </div>
                  <div class="float-right">
                    <i class="material-icons testimonial-more-vert-btn">
                      more_vert
                            </i>
                  </div>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="jama-testimonials-cards">
                  <div class="Testimonial-profile">
                    <div class="row valign-wrapper testimonial-section-profile-details">
                      <div class="testimonial-pic-section">
                        <img class="profile-pic" src={profile} />
                      </div>

                      <div class="testimonial-text">
                        <h6>Pam Beesly</h6>
                        <p class="m-0">since 2011</p>
                      </div>

                    </div>
                    <div class="testimonial-description">
                      <h6>The best of the best..</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book.
                                    </p>
                    </div>
                  </div>
                  <div class="float-right">
                    <i class="material-icons testimonial-more-vert-btn">
                      more_vert
                            </i>
                  </div>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="jama-testimonials-cards">
                  <div class="Testimonial-profile">
                    <div class="row valign-wrapper testimonial-section-profile-details">
                      <div class="testimonial-pic-section">
                        <img class="profile-pic" src={profile} />
                      </div>

                      <div class="testimonial-text">
                        <h6>Pam Beesly</h6>
                        <p class="m-0">since 2011</p>
                      </div>

                    </div>
                    <div class="testimonial-description">
                      <h6>The best of the best..</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book.
                                    </p>
                    </div>
                  </div>
                  <div class="float-right">
                    <i class="material-icons testimonial-more-vert-btn">
                      more_vert
                            </i>
                  </div>
                </div>
              </div>

            </div>
            <div class="See-more-btn">
              <button class="btn waves-effect waves-light center testimonial-see-more-btn" type="submit"
                name="action">See More
                </button>
            </div>
          </div>
        </div>


        <div class="research-invest-section">
          <div class="row">
            <div class="col s12 m6 offset-m3">
              <div class="research-invest-section-content">
                <h4>Too Busy to Research and Invest in Stocks and Funds</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book</p>
                <div class="research-invest-btn-section">
                  <a class="btn-orange research-btn">Contact Advisor</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="jars-section video-section">
          <div class="container w-percent-90">
            <div class="jars-section-title-heading">
              <h3>Our Wealth Curators</h3>
            </div>
            <div class="row">
              <div class="col s12 m6">
                <div class="Curator-card-section">
                  {/* <div class="wealth-curators">
                    <img src={testimonialbrcard} />
                  </div> */}

                  <div class="row">
                    <div class="col s3 no-padding">
                      {/* <img class="curators-profile-img responsive-img" src="./assets/Ram@2x.png" /> */}
                      <img class="curators-profile-img responsive-img" src={Ram2x} />
                    </div>
                    <div class="col s9 no-padding">
                      <div class="curators-profile-title">
                        <h6>Ram Kalyan Medury</h6>
                        <p class="m-0">Founder & Ceo <span><img
                          src={linkedin} /></span>
                        </p>
                        <p class="SEBI-style">SEBI Registered Investment Advisor INA 200006725</p>
                      </div>
                    </div>
                  </div>

                  <div class="row m-b-0">
                    <div class="curator-description">
                      <ul class="m-0">
                        <li class="curator-description-li">> &nbsp Ex CXO at BFSI Majors, Fin Services
                                        Leader at Infosys</li>
                        <li class="curator-description-li">> &nbsp Ex Consultant, Global Fortune 100 Firm in
                                        Financial Services & Investment Advisory</li>
                        <li class="curator-description-li">> &nbsp SEBI Registered Investment Advisor</li>
                        <li class="curator-description-li">> &nbsp > PGDM from 11M Bangalore</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col s12 m6">
                <div class="Curator-card-section">

                  <div class="row">
                    <div class="col s3 no-padding">
                      <img class="curators-profile-img responsive-img" src={Manoj2x} />
                    </div>
                    <div class="col s9 no-padding">
                      <div class="curators-profile-title">
                        <h6>Manoj Trivedi</h6>
                        <p class="m-0">Research & Advisory Head <span><img
                          src={linkedin} /></span></p>
                        <p class="SEBI-style">SEBI Registered Investment Advisor INA 200006725</p>
                      </div>
                    </div>
                  </div>

                  <div class="row m-b-0">
                    <div class="curator-description">
                      <ul class="m-0">
                        <li class="curator-description-li">> &nbsp Ex CXO at BFSI Majors, Fin Services
                                        Leader at Infosys</li>
                        <li class="curator-description-li">> &nbsp Ex Consultant, Global Fortune 100 Firm in
                                        Financial Services & Investment Advisory</li>
                        <li class="curator-description-li">> &nbsp SEBI Registered Investment Advisor</li>
                        <li class="curator-description-li">> &nbsp > PGDM from 11M Bangalore</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomepageBodyContent


