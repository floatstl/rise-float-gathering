import React from 'react';
//import Collapsible from 'react-collapsible'; https://www.npmjs.com/package/react-collapsible
import ScrollableAnchor from 'react-scrollable-anchor';
import StephenJohnsonImage from '../../assets/stephen-johnson.png';
import KevinJohnsonImage from '../../assets/kevin-johnson.png';
import GrahamAndAshkahnImage from '../../assets/graham-and-ashkahn.png';

let Speakers = React.createClass({
  render() {
    return (
      <section className="section speakers">
        <ScrollableAnchor id={'speakers'}>
        <div className="container">
          <h3 className="title is-2 has-text-centered">Speakers</h3>
          <div className="columns">
            <div className="column">
              <div className="content has-text-centered">
                <img className="" src={StephenJohnsonImage} alt="Rise Float Conference Speaker Stephen Johnson"/>
                <h3><a href="#">Stephen Johnson</a></h3>
                <p>Psychiatric Nurse, Fascial Anatomist, and Philosopher</p>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
              <img src={KevinJohnsonImage} alt="Rise Float Conference Speaker Kevin Johnson"/>
                <h3><a href="#">Kevin Johnson</a></h3>
                <p>Owner of Zero Gravity Float Rooms</p>
                <a href="https://twitter.com/ZeroGravityInst" target="_blank">@ZeroGravityInst</a>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <img src={GrahamAndAshkahnImage} alt="Rise Float Conference Speakers Graham Talley & Ashkahn Jahromi"/>
                <h3><a href="#">Graham & Ashkahn</a></h3>
                <p>Co-Owners of Float On</p>
                <a href="https://twitter.com/floathq" target="_blank">@floathq</a>
              </div>
            </div>
          </div>
          <div className="columns is-mobile has-text-centered is-hidden">
            <div className="column is-half is-offset-one-quarter">
              <a className="button is-large is-outlined" href="/speakers/">See All Speakers</a>
            </div>
          </div>
        </div>
        </ScrollableAnchor>
      </section>
    );
  }
});

export default Speakers;
