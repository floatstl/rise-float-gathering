import React from 'react';
import Particles from 'react-particles-js';
import ParticleParams from './../particles.json';

import Header from './Header';
import Footer from './Footer';

let About = React.createClass({
  render() {
    return (
      <div id="outer-container">
        <section className="hero home">
          <Header isHome={true}/>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1">About Rise</h1><br/>
              <h2 className="subtitle is-3">Coming Soon</h2>
              <span className="icon"><a href="https://www.facebook.com/events/1901297480100411/" target="_blank"><i className="fa fa-facebook" style={{'color': 'white'}} aria-hidden="true"></i></a></span>
            </div>
          </div>
        </section>
        <Particles params={ParticleParams} height={600} style={{'marginTop': '-600px'}}/>
        <Footer/>
      </div>
    );
  }
});

export default About;
