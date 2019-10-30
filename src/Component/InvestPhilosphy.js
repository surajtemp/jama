import React, { Component } from 'react';
import '../css/style.css';
import Moneybag from '../assets/Money Bag.svg';
import magicwand from '../assets/magic-wand.svg';
import allocate from '../assets/allocate.svg';
import PhilImg from '../assets/img_grphcs.svg';
import bars from '../assets/bars.svg';




export class InvestPhilosphy extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col s12 m4 xl3 tab-card-margin-style">
              <div class="left-menu-wealth-tab">
                <div class="Jama-tab-card-btn Build-wealth-tab-btn">
                  <span>
                    <img src={bars} />
                    <span>
                      <h6 class="under-line-style">Build Wealth with Prudence</h6>
                    </span>
                  </span>

                </div>
              </div>

              <div class="left-menu-sub-tabs">
                <div class="Jama-tab-card-btn left-menu-sub-tabs-below-wealth b-rad-t">
                  <span>
                    <img class="money-bar-img-style" src={Moneybag} />
                    <span>
                      <h6 class="under-line-style">India's $5 Trillion Economy</h6>
                    </span>
                  </span>
                </div>
                <div class="Jama-tab-card-btn left-menu-sub-tabs-below-wealth b-t-1">
                  <span>
                    <img class="money-bar-img-style" src={allocate} />
                    <span>
                      <h6 class="under-line-style">How to allocate your portfolio</h6>
                    </span>
                  </span>
                </div>
                <div class="Jama-tab-card-btn left-menu-sub-tabs-below-wealth b-t-1 b-rad-b">
                  <span>
                    <img class="money-bar-img-style" src={magicwand} />
                    <span>
                      <h6 class="under-line-style">The sheer magic of compounding</h6>
                    </span>
                  </span>
                </div>

              </div>
            </div>

            <div class="col s12 m8 xl9">
              <div class="home-right-content-section">
                <div class="tabs-right-top-sections">
                  <div class="row m-0">
                    <div class="col m4 s6 no-padding tab-card-margin-style">
                      <div
                        class="Jama-tab-card-btn jama-right-tabs jama-right-tabs-active bg-white m-r-4 b-left">
                        <h6 class="under-line-style m-0">Our Investment Philosophy</h6>
                      </div>
                    </div>
                    <div class="col m4 s6 no-padding tab-card-margin-style">
                      <div class="Jama-tab-card-btn jama-right-tabs bg-white m-r-4">
                        <h6 class="under-line-style">How Jama Wealth Works?</h6>
                      </div>
                    </div>
                    <div class="col m4 s12 no-padding tab-card-margin-style">
                      <div class="Jama-tab-card-btn jama-right-tabs bg-white b-right">
                        <h6 class="under-line-style">Start your Wealth Creation Journey.</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="Jama-home-tab-content-box">
                  <div class="row m-0">
                    <div class="col s12 m8">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type and scrambled
                                            it to make a type specimen book.</p>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley</p>
                      <div class="read-more-btn">
                        <a href="./how-jama-works.html"> <button class="read-more-btn-style">
                          Read More
                                                </button></a>
                      </div>
                    </div>
                    <div class="col s12 m4">
                      <div class="tab-content-img">
                        <img class="responsive-img m-t-20" src={PhilImg} />
                      </div>
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

export default InvestPhilosphy


