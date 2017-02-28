import React from 'react';
import StephenJohnsonImage from '../../assets/stephen-johnson.png';
import KevinJohnsonImage from '../../assets/kevin-johnson.png';
import GrahamAndAshkahnImage from '../../assets/graham-and-ashkahn.png';

let Schedule = React.createClass({
  render() {
    return (
      <section className="section schedule">
        <div className="container">
          <h3 className="title is-2 has-text-centered">Speakers</h3>
          <div className="columns">
            <div className="column">
              <div className="content has-text-centered">
                <img src={StephenJohnsonImage} alt="Rise Float Conference Speaker Stephen Johnson"/>
                <h3>Stephen Johnson</h3>
                <p>Psychiatric Nurse, Fascial Anatomist, and Philosopher</p>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
              <img src={KevinJohnsonImage} alt="Rise Float Conference Speaker Kevin Johnson"/>
                <h3>Kevin Johnson</h3>
                <p>Owner of Zero Gravity Float Rooms</p>
                <a href="https://twitter.com/ZeroGravityInst" target="_blank">@ZeroGravityInst</a>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <img src={GrahamAndAshkahnImage} alt="Rise Float Conference Speakers Graham Talley & Ashkahn Jahromi"/>
                <h3>Graham & Oshkahn</h3>
                <p>Co-Owners of Float On</p>
                <a href="https://twitter.com/floathq" target="_blank">@floathq</a>
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

export default Schedule;
