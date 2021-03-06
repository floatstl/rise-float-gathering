import React from 'react';

let Hero = React.createClass({
  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            A Float Community Gathering
          </h1>
          <h2 className="subtitle is-3">
            April 28th - 30th, 2017 | St. Louis, MO
          </h2>
          <p>Rise is a gathering of float industry enthusiasts and professionals to connect, discover and relax.</p>
        </div>
      </div>
    );
  }
});

export default Hero;
