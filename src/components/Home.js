import React from 'react';
import Particles from 'react-particles-js';
import ParticleParams from './../particles.json';

import MobileMenu from './Header';
import Hero from './home/Hero';
import TicketCallout from './home/TicketCallout';
import Speakers from './home/Speakers';
import Schedule from './home/Schedule';
import GeneralInfo from './home/GeneralInfo';
import Sponsors from './home/Sponsors';
import Footer from './Footer';

let Home = React.createClass({
  render() {
    return (
      <div id="outer-container">
        <section className="hero home">
          <MobileMenu isHome={true}/>
          <Hero/>
        </section>
        <Particles params={ParticleParams} height={600} style={{'marginTop': '-600px'}}/>
        <TicketCallout/>
        <section className="top">
          <Speakers/>
        </section>
        <Schedule/>
        <GeneralInfo/>
        <Footer/>
      </div>
    );
  }
});

export default Home;
