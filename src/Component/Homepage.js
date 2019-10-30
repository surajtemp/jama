import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import '../css/style.css';
import InvestPhilosphy from './InvestPhilosphy';
import Footer from './Footer';
import HomepageBodyContent from './HomepageBodyContent';
import Moneybag from '../assets/Money Bag.svg';
import magicwand from '../assets/magic-wand.svg';
import allocate from '../assets/allocate.svg';
import aboutimg from '../assets/aboutimg.svg';
import bars from '../assets/bars.svg';
import philosophyblk from '../assets/philosophyblk.png';
import howjamaimgyllo from '../assets/howjamaimgyllo.png';
import startimgyllo from '../assets/startimgyllo.png';
import Introsection from './Introsection';






export class Homepage extends Component {


  changeRoute = () => {
    this.context.router.push('/promospace/detail');
  }
  render() {
    return (
      <div>
        <Header />
        <Introsection />
        <div class="Home-section-banner-img">

          <div class="container home-tabed-section">
            <div class="row">
              <div class="col s3 m4 xl3 tab-card-margin-style">
                <Link to="/BuildWealthPrudence"> <div class="left-menu-wealth-tab">
                  <div class="Jama-tab-card-btn Build-wealth-tab-btn">
                    <span>
                      <img src={bars} />
                      <span>
                        <h6 class="under-line-style">Build Wealth with Prudence</h6>
                      </span>
                    </span>

                  </div>
                </div></Link>

                <div class="left-menu-sub-tabs">
                  <Link to="/IndiasEconomy">  <div class="Jama-tab-card-btn left-menu-sub-tabs-below-wealth b-rad-t">
                    <span>
                      <img class="money-bar-img-style" src={Moneybag} />
                      <span>
                        <h6 class="under-line-style">India's $5 Trillion Economy</h6>
                      </span>
                    </span>
                  </div>
                  </Link>
                  <Link to="/HowtoAlocate">  <div class="Jama-tab-card-btn left-menu-sub-tabs-below-wealth b-t-1">
                    <span>
                      <img class="money-bar-img-style" src={allocate} />
                      <span>
                        <h6 class="under-line-style">How to allocate your portfolio</h6>
                      </span>
                    </span>
                  </div></Link>
                  <Link to="/SheerMagic">  <div class="Jama-tab-card-btn left-menu-sub-tabs-below-wealth b-t-1 b-rad-b">
                    <span>
                      <img class="money-bar-img-style" src={magicwand} />
                      <span>
                        <h6 class="under-line-style">The sheer magic of compounding</h6>
                      </span>
                    </span>
                  </div></Link>

                </div>
              </div>

              <div class="col s9 m8 xl9">
                <div class="home-right-content-section">
                  <div class="tabs-right-top-sections">
                    <div class="row m-0">
                      <div class="col m4 s4 no-padding tab-card-margin-style">
                        <div
                          class="Jama-tab-card-btn jama-right-tabs jama-right-tabs-active bg-white m-r-4 b-left">
                          <span>
                            <img class="mobile-show-img" src={philosophyblk} />
                          </span>
                          <h6 class="under-line-style m-0">Our Investment Philosophy</h6>
                        </div>
                      </div>
                      <div class="col m4 s4 no-padding tab-card-margin-style">
                        <Link to="/HowjamaWorks"> <div class="Jama-tab-card-btn jama-right-tabs bg-white m-r-4">
                          <span>
                            <img class="mobile-show-img" src={howjamaimgyllo} />
                          </span>
                          <h6 class="under-line-style">How Jama Wealth Works?</h6>
                        </div></Link>
                      </div>
                      <div class="col m4 s4 no-padding tab-card-margin-style">
                        <Link to="/StartWealthCreation"> <div class="Jama-tab-card-btn jama-right-tabs bg-white b-right">
                          <span>
                            <img class="mobile-show-img" src={startimgyllo} />
                          </span>
                          <h6 class="under-line-style">Start your Wealth Creation Journey.</h6>
                        </div></Link>
                      </div>
                    </div>
                  </div>

                  <div class="Jama-home-tab-content-box">
                    <div class="row m-0">
                      <div class="col s12 m8">
                        <h5 class="mobile-title-text">Invest Philosphy</h5>
                        <p class="mobile-content-text ">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                        </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled
                                            it to make a type specimen book.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley</p>
                        <div class="read-more-btn">
                          <Link to="/Investphilosphyinfo"><button class="read-more-btn-style">
                            Read More
                                                </button></Link>
                        </div>
                      </div>
                      <div class="col s12 m4">
                        <div class="tab-content-img hide-on-small-only">
                          <img class="responsive-img" src={aboutimg} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        <HomepageBodyContent />

        <Footer />

      </div>
    )
  }
}

export default Homepage


