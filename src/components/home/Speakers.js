import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Modal from 'boron/WaveModal';

import StephenJohnsonImage from '../../assets/stephen-johnson.png';
import KevinJohnsonImage from '../../assets/kevin-johnson.png';
import GrahamTalleyImage from '../../assets/graham-talley-rise-speaker.png';
import AshkahnJahromiImage from '../../assets/ashkahn-jahromi-rise-speaker.png';
import AndyZaremba from '../../assets/andy-zaremba-rise-speaker.png';
import MikeZaremba from '../../assets/mike-zaremba-rise-speaker.png';
import LeePerry from '../../assets/lee-perry.png';

let Speakers = React.createClass({

  showModal: function(person) {
    console.log(person);
    if (person === 'lee') {
      this.refs.lee.show();
    } else if (person === 'kevin') {
      this.refs.kevin.show();
    } else if (person === 'stephen') {
      this.refs.stephen.show();
    } else if (person === 'mike') {
      this.refs.mike.show();
    } else if (person === 'ashkahn') {
      this.refs.ashkahn.show();
    } else if (person === 'graham') {
      this.refs.graham.show();
    }
  },

  hideModal: function(person){
    if (person === 'lee')
      this.refs.lee.hide();
    else if (person === 'kevin')
      this.refs.kevin.hide();
    else if (person === 'stephen')
      this.refs.stephen.hide();
    else if (person === 'mike')
      this.refs.mike.hide();
    else if (person === 'ashkahn')
      this.refs.ashkahn.hide();
    else if (person === 'graham')
      this.refs.graham.hide();
  },

  render() {
    return (
      <section className="section speakers">
        <ScrollableAnchor id={'speakers'}>
        <div className="container">
          <h3 className="title is-2 has-text-centered">Speakers</h3>
          <div className="columns">
            <div className="column">
              <div className="content has-text-centered">
                <img className="circle" src={LeePerry} alt="Rise Float Conference Speaker Lee Perry" onClick={() => this.showModal('lee')}/>
                <h3 onClick={() => this.showModal('lee')}>Lee Perry</h3>
                <p>President of <a href="http://www.samadhitank.com/" target="_blank">Samadhi Tank Company</a> & Chairman of the Board of the <a href="http://www.floatation.org/">Floatation Tank Association</a></p>
                <Modal ref="lee" backdropStyle={{'backgroundColor' : 'rgba(10, 10, 10, 0.75)'}}>
                  <section className="modal-card-body has-text-centered">
                    <h3 className="modal-card-title">Lee Perry</h3>
                    <br/>
                    <button className="delete" onClick={() => this.hideModal('lee')}></button>
                    <img className="circle" src={LeePerry} alt="Rise Float Conference Speaker Ashkahn Jahromi"/>
                    <br/><br/>
                    <p>Lee Perry, as president of the <a href="http://www.samadhitank.com/" target="_blank">Samadhi Tank Company</a>, has spent the last 40 years working to keep the business of floating a journey into the realm of service and adventure. As chairman of the board of the <a href="http://www.floatation.org/">Floatation Tank Association</a>, she focuses on advocating best practices, educating health departments on regulations for this industry, and supporting new float businesses.</p>
                  </section>
                </Modal>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
              <img className="circle" onClick={() => this.showModal('kevin')} src={KevinJohnsonImage} alt="Rise Float Conference Speaker Kevin Johnson"/>
                <h3 onClick={() => this.showModal('kevin')}>Kevin Johnson</h3>
                <p>Owner of <a href="http://zerogravityinstitute.com/" target="_blank">Zero Gravity Float Rooms</a></p>
                <a href="https://twitter.com/ZeroGravityInst" target="_blank">@ZeroGravityInst</a>
                <Modal ref="kevin" backdropStyle={{'backgroundColor' : 'rgba(10, 10, 10, 0.75)'}}>
                  <section className="modal-card-body has-text-centered">
                    <h3 className="modal-card-title">Kevin Johnson</h3>
                    <br/>
                    <button className="delete" onClick={() => this.hideModal('kevin')}></button>
                    <img className="circle" src={LeePerry} alt="Rise Float Conference Speaker Ashkahn Jahromi"/>
                    <br/><br/>
                    <p>Lee Perry, as president of the <a href="http://www.samadhitank.com/" target="_blank">Samadhi Tank Company</a>, has spent the last 40 years working to keep the business of floating a journey into the realm of service and adventure. As chairman of the board of the <a href="http://www.floatation.org/">Floatation Tank Association</a>, she focuses on advocating best practices, educating health departments on regulations for this industry, and supporting new float businesses.</p>
                  </section>
                </Modal>
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
                <p>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://floatconference.com/" target="_blank">The Float Conference</a></p>
                <a href="https://twitter.com/floathq" target="_blank">@floathq</a>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <img className="circle" src={GrahamTalleyImage} alt="Rise Float Conference Speakers Graham Talley"/>
                <h3>Graham Talley</h3>
                <p>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://www.floattanksolutions.com/" target="_blank">Float Tank Solutions</a></p>
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
        </ScrollableAnchor>
      </section>
    );
  }
});

export default Speakers;
