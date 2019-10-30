import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import '../css/Introsection.css';



export class Introsection extends Component {
    constructor(props) {
        super(props);
        this.state = { show: true }
    }

    render() {
        return (
            <div>
                {this.state.show ?

                    <div class="intro-section-bg">

                        <div class="close-div-btn">
                            <Button variant="raised" onClick={() => this.setState({ show: false })}><CloseIcon /></Button>
                            {/* <i class="material-icons right">close</i> */}
                        </div>
                        <div class="intro-section-content">
                            <div class="row">
                                <div class="col m7">
                                    <div class="intro-section-content-text">

                                        <h4>Preserve Wealth. Increase Prosperity.</h4>
                                        <ul class="banner-para-list">
                                            <li>by algorithmic investing  in a high qulaiyt 'Long' portfolio if equities.</li>
                                            <hr class="divider-line"></hr>
                                            <li>Unique model designed for trust. Managed by RIAs, IIM/IIT alumni.</li>
                                        </ul>
                                        {/* <p>by algorithmic investing  in a high qulaiyt 'Long' portfolio if equities.</p>
                                    <h6>Unique model designed for trust. Managed by RIAs, IIM/IIT alumni.</h6> */}
                                    </div>
                                    <div class="jars-btns">
                                        <li class="btn-orange">Contact Wealth Manager</li>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    : null
                }
            </div >
        )
    }
}

export default Introsection