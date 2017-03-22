import React from 'react';

import AtPeaceFloatSpa from '../../assets/atpeacefloatspa.png';
import SuperiorFloatTanks from '../../assets/superior-float-tanks-logo.png';
import FlotationLocations from '../../assets/floatation-locations-logo.png'

let Sponsors = React.createClass({
  render() {
    return (
      <section className="section sponsors">
        <div className="container has-text-centered">
          <h4 className="title is-3">Rise is Produly Sponsored By</h4>
          <br/>
          <div className="columns">
            <div className="column">
              <a href="http://atpeacefloatationspa.com/pricing/" target="_blank">
                <img src={AtPeaceFloatSpa} alt="At Peace Float Spa Website"/>
              </a>
            </div>
            <div className="column">
              <a href="http://superiorfloattanks.com/" target="_blank">
                <img src={SuperiorFloatTanks} alt="Superior Float Tanks Website"/>
              </a>
            </div>
            <div className="column">
              <a href="http://floatationlocations.com/" target="_blank">
                <img src={FlotationLocations} alt="Flotation Locations Website"/>
              </a>
            </div>
          </div>
        </div>
        <br/><br/>
      </section>
    );
  }
});

export default Sponsors;
