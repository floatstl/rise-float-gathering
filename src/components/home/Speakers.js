import React from 'react';

import StephenJohnsonImage from '../../assets/stephen-johnson.png';
import KevinJohnsonImage from '../../assets/kevin-johnson.png';
import GloriaMorrisImage from '../../assets/gloria.png';
import AshkahnJahromiImage from '../../assets/ashkahn-jahromi-rise-speaker.png';
import LeePerryImage from '../../assets/lee-perry.png';
import RichardBonkImage from '../../assets/richard-bonk.png';

let Speakers = React.createClass({

  render() {
    return (
      <section className="section speakers">
        <div className="container">
          <h3 className="title is-2 has-text-centered">Last Years Speakers</h3>
          <div className="columns">
            <div className="column">
              <div className="content has-text-centered">
                <a href="/speakers/#stephen">
                  <img className="circle" src={StephenJohnsonImage} alt="Rise Float Conference Speaker Stephen Johnson"/>
                </a>
                <h2>Floating and the Broadening of Empathy, Altruism, and Love</h2>
                <h3>Stephen Johnson</h3>
                <p>Psychiatric Nurse, Fascial Anatomist, and Philosopher</p>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <a href="/speakers/#lee">
                  <img className="circle" src={LeePerryImage} alt="Rise Float Conference Speaker Lee Perry"/>
                </a>
                <h2>In the Province of My Mind</h2>
                <h3>Lee Perry</h3>
                <p>President of <a href="http://www.samadhitank.com/" target="_blank">Samadhi Tank Company</a> & Chairman of the Board of the <a href="http://www.floatation.org/">Floatation Tank Association</a></p>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <a href="/speakers/#richard">
                  <img className="circle" src={RichardBonkImage} alt="Rise Float Conference Speaker Richard Bonk"/>
                </a>
                <h2>Floating to Enlightenment</h2>
                <h3>Richard Bonk</h3>
                <a href="https://twitter.com/floatgurubonk" target="_blank">@FloatGuruBonk</a>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="content has-text-centered">
                <a href="/speakers/#kevin">
                  <img className="circle" src={KevinJohnsonImage} alt="Rise Float Conference Speaker Kevin Johnson"/>
                </a>
                <h2>Seeing in the Dark</h2>
                <h3>Kevin Johnson</h3>
                <p>Owner of <a href="http://zerogravityinstitute.com/" target="_blank">Zero Gravity Float Rooms</a></p>
                <a href="https://twitter.com/ZeroGravityInst" target="_blank">@ZeroGravityInst</a>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <a href="/speakers/#ashkahn-and-graham">
                  <img className="circle" src={AshkahnJahromiImage} alt="Rise Float Conference Speaker Ashkahn Jahromi"/>
                </a>
                <h2>Why Graham and Ashkahn are Probably Wrong About Almost Everything</h2>
                <h3>Ashkahn Jahromi</h3>
                <p>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://floatconference.com/" target="_blank">The Float Conference</a></p>
                <a href="https://twitter.com/floathq" target="_blank">@floathq</a>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <a href="/speakers/#gloria">
                  <img className="circle" src={GloriaMorrisImage} alt="Rise Float Conference Speakers Graham Talley"/>
                </a>
                <h2>Zero to Sixty in Nine Months</h2>
                <h3>Gloria Morris</h3>
                <p>Founder <a href="http://www.floatsixty.com/" target="_blank">Float Sixty</a>, Director at <a href="https://www.actioniq.com/" target="_blank">ActionIQ</a></p>
                <a href="https://twitter.com/ghip" target="_blank">@ghip</a>
              </div>
            </div>
          </div>
          <div className="columns is-mobile has-text-centered">
            <div className="column is-half is-offset-one-quarter">
              <a className="button is-large is-outlined" href="/speakers/">See All Speakers</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

export default Speakers;
