import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import StephenJohnsonImage from '../../assets/stephen-johnson.png';
import KevinJohnsonImage from '../../assets/kevin-johnson.png';
import GrahamTallyImage from '../../assets/graham-talley-rise-speaker.png';
import AshkahnJahromiImage from '../../assets/ashkahn-jahromi-rise-speaker.png';
import AndyZaremba from '../../assets/andy-zaremba-rise-speaker.png';
import MikeZaremba from '../../assets/mike-zaremba-rise-speaker.png';

let Speakers = React.createClass({
  render() {
    return (
      <section className="section speakers">
        <ScrollableAnchor id={'speakers'}>
        <div className="container">
          <h3 className="title is-2 has-text-centered">Speakers</h3>
          <p>Throughout the weekend, you’ll meet with industry leaders, learn about new products and be inspired by the innovation and passion that surrounds you.</p>
          <br/><br/>
          <div className="columns">
            <div className="column">
              <div className="content has-text-centered">
                <img className="circle" src={MikeZaremba} alt="Rise Float Conference Speaker Mike Zaremba"/>
                <h3>Mike Zaremba</h3>
                <p>Co-Founder of <a href="http://www.floathouse.com" target="_blank">Float House</a></p>
                <a href="https://twitter.com/Float_House" target="_blank">@Float_House</a>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                  <img className="circle" src={AshkahnJahromiImage} alt="Rise Float Conference Speaker Ashkahn Jahromi"/>
                <h3>Ashkahn Jahromi</h3>
                <p>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://www.floattanksolutions.com/" target="_blank">Float Tank Solutions</a></p>
                <a href="https://twitter.com/floathq" target="_blank">@floathq</a>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <img className="circle" src={StephenJohnsonImage} alt="Rise Float Conference Speaker Stephen Johnson"/>
                <h3>Stephen Johnson</h3>
                <p>Psychiatric Nurse, Fascial Anatomist, and Philosopher</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="content has-text-centered">
                <img className="circle" src={AndyZaremba} alt="Rise Float Conference Speaker Andy Zaremba"/>
                <h3>Andy Zaremba</h3>
                <p>Co-Founder of <a href="http://www.floathouse.com" target="_blank">Float House</a></p>
                <a href="https://twitter.com/Float_House" target="_blank">@Float_House</a>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <img className="circle" src={GrahamTallyImage} alt="Rise Float Conference Speakers Graham Talley"/>
                <h3>Graham Tally</h3>
                <p>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://www.floattanksolutions.com/" target="_blank">Float Tank Solutions</a></p>
                <a href="https://twitter.com/floathq" target="_blank">@floathq</a>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
              <img className="circle" src={KevinJohnsonImage} alt="Rise Float Conference Speaker Kevin Johnson"/>
                <h3>Kevin Johnson</h3>
                <p>Owner of <a href="http://zerogravityinstitute.com/" target="_blank">Zero Gravity Float Rooms</a></p>
                <a href="https://twitter.com/ZeroGravityInst" target="_blank">@ZeroGravityInst</a>
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
