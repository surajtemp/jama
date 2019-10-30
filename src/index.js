import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Homepage from '../src/Component/Homepage';
import HowjamaWorks from '../src/Component/HowjamaWorks';
import * as serviceWorker from './serviceWorker';
import Aboutus from '../src/Component/Aboutus';
import testimonial from '../src/Component/testimonial';
import StartWealthCreation from './Component/StartWealthCreation';
import BuildWealthPrudence from './Component/BuildWealthPrudence';
import IndiasEconomy from './Component/IndiasEconomy';
import HowtoAlocate from './Component/HowtoAlocate';
import SheerMagic from './Component/SheerMagic';
import HowJamaWorksInfo from './Component/HowJamaWorksInfo';
import startwealthcreationinfo from './Component/startwealthcreationinfo';
import BuildWealthprudenceinfo from './Component/BuildWealthprudenceinfo';
import Values from './Component/Values';
import Investphilosphyinfo from './Component/Investphilosphyinfo';
import IndiasEconomyinfo from './Component/IndiasEconomyinfo';
import Jamaadvisorypage from './Component/Jamaadvisorypage';




const routing = (
  <Router>
    {/* <BrowserRouter> */}
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/HowjamaWorks" component={HowjamaWorks} />
      <Route path="/Aboutus" component={Aboutus} />
      <Route path="/testimonial" component={testimonial} />
      <Route path="/StartWealthCreation" component={StartWealthCreation} />
      <Route path="/BuildWealthPrudence" component={BuildWealthPrudence} />
      <Route path="/IndiasEconomy" component={IndiasEconomy} />
      <Route path="/HowtoAlocate" component={HowtoAlocate} />
      <Route path="/SheerMagic" component={SheerMagic} />
      <Route path="/HowJamaWorksInfo" component={HowJamaWorksInfo} />
      <Route path="/startwealthcreationinfo" component={startwealthcreationinfo} />
      <Route path="/BuildWealthprudenceinfo" component={BuildWealthprudenceinfo} />
      <Route path="/Values" component={Values} />
      <Route path="/Investphilosphyinfo" component={Investphilosphyinfo} />
      <Route path="/IndiasEconomyinfo" component={IndiasEconomyinfo} />
      <Route path="/HowtoAlocateinfo" component={HowJamaWorksInfo} />
      <Route path="/Jamaadvisorypage" component={Jamaadvisorypage} />
    </Switch>
    {/* </BrowserRouter> */}
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
