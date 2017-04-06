import React from 'react';
import Modal from 'boron/WaveModal';

import StephenJohnsonImage from '../../assets/stephen-johnson.png';
import KevinJohnsonImage from '../../assets/kevin-johnson.png';
import GrahamTalleyImage from '../../assets/graham-talley-rise-speaker.png';
import AshkahnJahromiImage from '../../assets/ashkahn-jahromi-rise-speaker.png';
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
    else if (person === 'ashkahn')
      this.refs.ashkahn.hide();
    else if (person === 'graham')
      this.refs.graham.hide();
  },

  render() {
    return (
      <section className="section speakers">
        <div className="container">
          <h3 className="title is-2 has-text-centered">Speakers</h3>
          <div className="columns">
            <div className="column">
              <div className="content has-text-centered">
                <img className="circle" onClick={() => this.showModal('stephen')}  src={StephenJohnsonImage} alt="Rise Float Conference Speaker Stephen Johnson"/>
                <h3 onClick={() => this.showModal('stephen')} >Floating and the Broadening of Empathy, Altruism, and Love</h3>
                <h3 onClick={() => this.showModal('stephen')} >Stephen Johnson</h3>
                <p>Psychiatric Nurse, Fascial Anatomist, and Philosopher</p>
              </div>
              <Modal ref="stephen" backdropStyle={{'backgroundColor' : 'rgba(10, 10, 10, 0.75)'}}>
                <section className="modal-card-body has-text-centered">
                  <h3 className="modal-card-title">Floating and the Broadening of Empathy, Altruism, and Love</h3>
                  <button className="delete" onClick={() => this.hideModal('stephen')}></button>
                  <h4>Sat Apr 29 at 9:30 am — 10:00</h4>
                  <br/>
                  <p>An invitation to partake in the upcoming book project- A deeper exploration of the Protean Potential state experienced in the tank through a survey of multiple forms of scientific research, origin and comparative religions, philosophical and poetic forays, current meditative, therapeutic and transpersonal practices, and how floating can be a place for the exploration of consciousness and the broadening of empathy, altruism and love.</p>
                </section>
              </Modal>
            </div>
          </div>
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
                    <img className="circle" src={LeePerry} alt="Rise Float Conference Speaker Lee Perry"/>
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
                    <img className="circle" src={KevinJohnsonImage} alt="Rise Float Conference Speaker Kevin Johnson"/>
                    <br/><br/>
                    <p>Kevin Johnson is the founder and CEO of <a href="http://zerogravityinstitute.com/" target="_blank">Zero Gravity Institute</a> in Austin, TX. ZGI is a state of the art floatation center and private research facility. He is also the designer and manufacturer of the new, technologically advanced <a href="http://zerogravityinstitute.com/float-room-sales/" target="_blank">Zero Gravity Float Rooms.</a></p>
                    <p>Kevin has been floating since 1986, when he went to work for one of the world’s first commercial floatation centers. With a history of over 500 floats, including a recent research project titled “100 floats in 100 days”, Kevin brings a vast amount of knowledge, insight and experience to the world of floatation and the tank manufacturing industry.</p>
                  </section>
                </Modal>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="content has-text-centered">
                <img className="circle" onClick={() => this.showModal('ashkahn')} src={AshkahnJahromiImage} alt="Rise Float Conference Speaker Ashkahn Jahromi"/>
                <h3 onClick={() => this.showModal('ashkahn')}>Ashkahn Jahromi</h3>
                <p>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://floatconference.com/" target="_blank">The Float Conference</a></p>
                <a href="https://twitter.com/floathq" target="_blank">@floathq</a>
                <Modal ref="ashkahn" backdropStyle={{'backgroundColor' : 'rgba(10, 10, 10, 0.75)'}}>
                  <section className="modal-card-body has-text-centered">
                    <h3 className="modal-card-title">Ashkahn Jahromi</h3>
                    <br/>
                    <button className="delete" onClick={() => this.hideModal('ashkahn')}></button>
                    <img className="circle" src={AshkahnJahromiImage} alt="Rise Float Conference Speaker Ashkahn Jahromi"/>
                    <br/><br/>
                    <p>Ashkahn is one of the co-founders of <a href="https://floathq.com" target="_blank">Float On</a> in Portland, Oregon. He's been in the float scene since Float On opened it's doors in 2010 and has been loving every minute of it. Over the years Ashkahn has dealt with so many salty messes that at this point he thinks he may be more salt than man. In his off time Ashkahn enjoys practicing the kazoo, eating popcorn, and learning everything he can about octopuses (did you know they have more neurons in their tentacles than they do in their brain?). He's super excited to come out to The Big Louis (he's pretty sure people call it that).</p>
                  </section>
                </Modal>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <img className="circle" onClick={() => this.showModal('graham')} src={GrahamTalleyImage} alt="Rise Float Conference Speakers Graham Talley"/>
                <h3 onClick={() => this.showModal('graham')}>Graham Talley</h3>
                <p>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://www.floattanksolutions.com/" target="_blank">Float Tank Solutions</a></p>
                <a href="https://twitter.com/floathq" target="_blank">@floathq</a>
                <Modal ref="graham" backdropStyle={{'backgroundColor' : 'rgba(10, 10, 10, 0.75)'}}>
                  <section className="modal-card-body has-text-centered">
                    <h3 className="modal-card-title">Graham Talley</h3>
                    <br/>
                    <button className="delete" onClick={() => this.hideModal('graham')}></button>
                    <img className="circle" src={GrahamTalleyImage} alt="Rise Float Conference Speaker Graham Talley"/>
                    <br/><br/>
                    <p>Graham is one of the Co Founders of <a href="https://floathq.com" target="_blank">Float On</a>, Float Tank Solutions, the Float Conference, and a handful of other salty endeavors. He has been lecturing for over a decade on small business, happiness, and (most recently) float tanks. Graham's interests and areas of expertise extend from water sanitation to treasure hunts, from complex systems design to experimental theater. He is thrilled to come out to St. Louis, hang out, and exchange ideas with other members of our magical industry.</p>
                  </section>
                </Modal>
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
