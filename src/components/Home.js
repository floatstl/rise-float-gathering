import React from 'react';
import Particles from 'react-particles-js';
import ParticleParams from './../particles.json';

import MobileMenu from './header/MobileMenu';
import Hero from './home/Hero';
import TicketCallout from './home/TicketCallout';
import BenifitStatement from './home/BenefitStatement';
import Speakers from './home/Speakers';
import Schedule from './home/Schedule';
import GeneralInfo from './home/GeneralInfo';
import Sponsors from './home/Sponsors';
import TicketInfo from './home/TicketInfo';
import Footer from './home/Footer';

let Home = React.createClass({
  render() {
    return (
      <div id="outer-container">
        <section className="hero home">
          <MobileMenu/>
          <Hero/>
        </section>
        <Particles params={ParticleParams} height={600} style={{'marginTop': '-600px'}}/>
        <TicketCallout/>
        <section className="top">
          <BenifitStatement/>
          <Speakers/>
        </section>
        <Schedule/>
        <GeneralInfo/>

        <TicketInfo/>
        <Footer/>
      </div>
    );
  }
});

export default Home;