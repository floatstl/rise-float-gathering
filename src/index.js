import React from 'react';
import ReactDOM from 'react-dom';
import MobileMenu from './components/header/MobileMenu';
import Hero from './components/home/Hero';
import TicketCallout from './components/home/TicketCallout';
import BenifitStatement from './components/home/BenifitStatement';
import Speakers from './components/home/Speakers';
import Schedule from './components/home/Schedule';
import GeneralInfo from './components/home/GeneralInfo';
import Sponsors from './components/home/Sponsors';
import TicketInfo from './components/home/TicketInfo';
import Footer from './components/home/Footer';
import './style.css';
import 'font-awesome/css/font-awesome.css';

let App = React.createClass({

  render() {
    return (
      <div id="outer-container">
        <section className="hero home">
          <MobileMenu/>
          <Hero/>
        </section>
        <TicketCallout/>
        <section className="top">
          <BenifitStatement/>
          <Speakers/>
        </section>
        <Schedule/>
        <GeneralInfo/>
        <Sponsors/>
        <TicketInfo/>
        <Footer/>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
