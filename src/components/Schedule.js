import React from 'react';
import Particles from 'react-particles-js';
import ParticleParams from './../particles.json';

import MobileMenu from './header/MobileMenu';
import Footer from './Footer';

let Schedule = React.createClass({
  render() {
    return (
      <div id="outer-container">
        <section className="hero home">
          <MobileMenu/>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1">
                404 Not Found
              </h1><br/>
              <h2 className="subtitle is-3">
                “In the province of the mind, what one believes to be true, either is true or becomes true within certain limits. These limits are to be found experientially and experimentally. When the limits are determined, it is found that they are further beliefs to be transcended. In the province of the mind, there are no limits. The body imposes definite limits.”
              </h2>
            </div>
          </div>
        </section>
        <Particles params={ParticleParams} height={600} style={{'marginTop': '-600px'}}/>
        <Footer/>
      </div>
    );
  }
});

export default Schedule;
