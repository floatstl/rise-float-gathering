import React from 'react';
import Particles from 'react-particles-js';
import ParticleParams from './../particles.json';

import Header from './Header';
import Footer from './Footer';

let NotFound = React.createClass({
  render() {
    return (
      <div id="outer-container">
        <section className="hero home">
          <Header isHome={true}/>
          <div className="hero-body">
            <div className="container has-text-centered not-found">
              <h1 className="title is-1">
                404 - Not Found
              </h1><br/>
              <p className="subtitle is-3">
                “In the province of the mind, what one believes to be true, either is true or becomes true within certain limits. These limits are to be found experientially and experimentally. When the limits are determined, it is found that they are further beliefs to be transcended. In the province of the mind, there are no limits. The body imposes definite limits.”
              </p>
              <p className="subtitle is-4">
                John C. Lilly
              </p><br/><br/>
              <a className="button is-large" href="/about/" target="_blank">Learn More</a>
            </div>
          </div>
        </section>
        <Particles params={ParticleParams} height={600} style={{'marginTop': '-600px'}}/>
        <Footer/>
      </div>
    );
  }
});

export default NotFound;
