import React from 'react';
import Tabs from './Tabs';
import value from '../assets/value.svg';
import honesty from '../assets/honesty.svg';
import profit from '../assets/profit.svg';
import save from '../assets/save.svg';
import speed from '../assets/speed.svg';



const styles = {
    fontFamily: 'sans-serif',
};

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: 'aTab' };
    }
    render() {
        const content = {
            aTab: [<div>
                <div class="container Values-tab-content">
                    <div class="row m-0">
                        <div class="col m4 col s12">
                            <div class="tab-content-value-list">
                                <img src={value} />
                                <h5>Customer Focus</h5>
                                <p>Do what is right for the client. <br></br>Always be on their side! </p>
                            </div>
                        </div>
                        <div class="col m4 col s12">
                            <div class="tab-content-value-list">
                                <img src={honesty} />
                                <h5>Honesty</h5>
                                <p>No lies, No hidden costs for the <br></br>
                                    clients. No Jargon. No BS. </p>
                            </div>
                        </div>
                        <div class="col m4 col s12">
                            <div class="tab-content-value-list">
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
                            <div class="tab-content-value-list">
                                <img src={save} />
                                <h5>Frugality</h5>
                                <p>Do what is right for the client. <br></br>Always be on their side! </p>
                            </div>
                        </div>
                        <div class="col m4 col s12">
                            <div class="tab-content-value-list">
                                <img src={speed} />
                                <h5>Speed</h5>
                                <p>Spend judiciously in the interest <br></br>
                                    of the client and the company. </p>
                            </div>
                        </div>
                        <div class="col m2"></div>
                    </div>
                </div>
            </div>],
            bTab: [<div>
                <div class="container Values-tab-content">
                    <div class="row m-0">
                        <div class="col m4 col s12">
                            <div class="tab-content-value-list">
                                <img src={value} />
                                <h5>Customer Focus</h5>
                                <p>Do what is right for the client. <br></br>Always be on their side! </p>
                            </div>
                        </div>
                        <div class="col m4 col s12">
                            <div class="tab-content-value-list">
                                <img src={honesty} />
                                <h5>Honesty</h5>
                                <p>No lies, No hidden costs for the <br></br>
                                    clients. No Jargon. No BS. </p>
                            </div>
                        </div>
                        <div class="col m4 col s12">
                            <div class="tab-content-value-list">
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
                            <div class="tab-content-value-list">
                                <img src={save} />
                                <h5>Frugality</h5>
                                <p>Do what is right for the client. <br></br>Always be on their side! </p>
                            </div>
                        </div>
                        <div class="col m4 col s12">
                            <div class="tab-content-value-list">
                                <img src={speed} />
                                <h5>Speed</h5>
                                <p>Spend judiciously in the interest <br></br>
                                    of the client and the company. </p>
                            </div>
                        </div>
                        <div class="col m2"></div>
                    </div>
                </div>
            </div>],

        };
        return (
            <div style={styles}>
                <Tabs
                    active={this.state.active}
                    onChange={active => this.setState({ active })}
                >
                    <div key="aTab">Values</div>
                    <div key="bTab">Operating Principles</div>
                </Tabs>
                <p>{content[this.state.active]}</p>

            </div>
        );
    }
};
export default Tab;