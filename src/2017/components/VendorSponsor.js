import React from 'react';
import Particles from 'react-particles-js';
import ParticleParams from './../particles.json';

import Header from './Header';
import Footer from './Footer';
import Sponsors from './home/Sponsors';

let Schedule = React.createClass({
  render() {
    return (
      <div id="outer-container">
        <section className="hero home">
          <Header isHome={true}/>
          <div className="hero-body">
            <div className="container has-text-centered">
            <h3 className="title is-2 has-text-centered">Want to be a Vendor or Sponsor at Rise?</h3>
            <p className="has-text-centered">Please submit all inquiries to <a href="mailto:info@risefloatgathering.com">info@risefloatgathering.com</a></p>
          </div>
          </div>
        </section>
        <Particles params={ParticleParams} height={600} style={{'marginTop': '-600px'}}/>
        <Sponsors/>
        <Footer/>
      </div>
    );
  }
});

export default Schedule;
