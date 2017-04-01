import React from 'react';

import AtPeaceFloatSpa from '../../assets/atpeacefloatspa.png';
import SuperiorFloatTanks from '../../assets/superior-float-tanks-logo.png';
import FlotationLocations from '../../assets/floatation-locations-logo.png';
import Conscious from '../../assets/conscious.png';
import BioMat from '../../assets/biomat.png';
import SolSweat from '../../assets/sol-sweat.png';
import EscapePods from '../../assets/escape-pods.png';
import FloatRoomsUSA from '../../assets/float-rooms-usa.png';
import FloatTankSolutions from '../../assets/float-tank-solutions.png';
import FloatHelm from '../../assets/float-helm.png';
import SonixWellness from '../../assets/sonix-wellness.png';

let Sponsors = React.createClass({
  render() {
    return (
      <section className="section sponsors">
        <div className="container has-text-centered">
          <h4 className="title is-3">Rise 2017 is Proudly Sponsored By</h4>
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
              <a href="https://escapepodtank.com/" target="_blank">
                <img src={EscapePods} alt="Escape Pods Website"/>
              </a>
            </div>
            <div className="column">
              <a href="http://floatroomsusa.com/" target="_blank">
                <img src={FloatRoomsUSA} alt="Float Rooms USA Website"/>
              </a>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <a href="http://floatationlocations.com/" target="_blank">
                <img src={FlotationLocations} alt="Flotation Locations Website"/>
              </a>
            </div>
            <div className="column">
              <a href="http://consciousapothecary.com/" target="_blank">
                <img src={Conscious} alt="Flotation Locations Website"/>
              </a>
            </div>
            <div className="column">
              <a href="http://www.sonixwellness.com/" target="_blank">
                <img src={SonixWellness} alt="Sonix Wellness Website"/>
              </a>
            </div>
            <div className="column">
              <a href="https://libbie.thebiomatcompany.com/site/" target="_blank">
                <img src={BioMat} alt="BioMat Website"/>
              </a>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <a href="http://floathelm.com/" target="_blank">
                <img src={FloatHelm} alt="Float Helm Website"/>
              </a>
            </div>
            <div className="column">
              <a href="http://gosweattoday.com/" target="_blank">
                <img src={SolSweat} alt="Sol Sweat Website"/>
              </a>
            </div>
            <div className="column">
              <a href="http://floattanksolutions.com/" target="_blank">
                <img src={FloatTankSolutions} alt="Float Tank Solutions Website"/>
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
