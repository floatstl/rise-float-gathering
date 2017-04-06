import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({offset: -40, scrollDuration: 600})

import Header from './Header';
import Footer from './Footer';

import StephenJohnsonImage from '../assets/stephen-johnson.png';
import KevinJohnsonImage from '../assets/kevin-johnson.png';
import GrahamTalleyImage from '../assets/graham-talley-rise-speaker.png';
import AshkahnJahromiImage from '../assets/ashkahn-jahromi-rise-speaker.png';
import LeePerry from '../assets/lee-perry.png';

let Speakers = React.createClass({
  render() {
    return (
      <div id="outer-container">
        <Header/>
        <section className="section speakers-page">
          <div className="container">
            <h1 className="title is-2 has-text-centered">Speakers</h1>
            <ScrollableAnchor id={'stephen'}>
              <div className="columns">
                <div className="column is-one-third has-text-centered">
                  <img className="circle" src={StephenJohnsonImage} alt="Rise Float Conference Speaker Stephen Johnson"/>
                </div>
                <div className="column">
                  <div className="content">
                    <h2>Floating and the Broadening of Empathy, Altruism, and Love</h2>
                    <h3>Stephen Johnson</h3>
                    <h4>Psychiatric Nurse, Fascial Anatomist, and Philosopher</h4>
                    <br/>
                    <p><strong>Talk Summary:</strong></p>
                    <p>An invitation to partake in the upcoming book project- A deeper exploration of the Protean Potential state experienced in the tank through a survey of multiple forms of scientific research, origin and comparative religions, philosophical and poetic forays, current meditative, therapeutic and transpersonal practices, and how floating can be a place for the exploration of consciousness and the broadening of empathy, altruism and love.</p>
                    <p><strong>Bio:</strong></p>
                    <p>Stephen Johnson has been a boxer, modern dancer, actor, coach and trainer. He has worked as a Psychiatric Nurse for 27 years, and conducted a private practice as a Structural Integrator for over 20 years. He is an Anatomist specializing in Fascial Anatomy, has conducted research, and taught at various schools. He is a Bio Somatic Movement educator, a yoga teacher in the Ashtanga style, a long time meditator in both Soto and Rinzai traditions and a practitioner of Tai Chi / Qi Gong.</p>
                  </div>
                </div>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'lee'}>
              <div className="columns">
                <div className="column is-one-third has-text-centered">
                  <img className="circle" src={LeePerry} alt="Rise Float Conference Speaker Lee Perry"/>
                </div>
                <div className="column">
                  <div className="content">
                    <h2>Lee Perry</h2>
                    <h3>President of <a href="http://www.samadhitank.com/" target="_blank">Samadhi Tank Company</a> & Chairman of the Board of the <a href="http://www.floatation.org/">Floatation Tank Association</a></h3>
                    <p><strong>Talk Summary:</strong></p>
                    <p>Coming soon</p>
                    <p><strong>Bio:</strong></p>
                    <p>Lee Perry, as president of the <a href="http://www.samadhitank.com/" target="_blank">Samadhi Tank Company</a>, has spent the last 40 years working to keep the business of floating a journey into the realm of service and adventure. As chairman of the board of the <a href="http://www.floatation.org/">Floatation Tank Association</a>, she focuses on advocating best practices, educating health departments on regulations for this industry, and supporting new float businesses.</p>
                  </div>
                </div>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'kevin'}>
              <div className="columns">
                <div className="column is-one-third has-text-centered">
                  <img className="circle" src={KevinJohnsonImage} alt="Rise Float Conference Speaker Kevin Johnson"/>
                </div>
                <div className="column">
                  <div className="content">
                  <h2>Kevin Johnson</h2>
                  <h3>Owner of <a href="http://zerogravityinstitute.com/" target="_blank">Zero Gravity Float Rooms</a> | <a href="https://twitter.com/ZeroGravityInst" target="_blank">@ZeroGravityInst</a></h3>
                  <p><strong>Talk Summary:</strong></p>
                  <p>Coming soon</p>
                  <p><strong>Bio:</strong></p>
                  <p>Kevin Johnson is the founder and CEO of <a href="http://zerogravityinstitute.com/" target="_blank">Zero Gravity Institute</a> in Austin, TX. ZGI is a state of the art floatation center and private research facility. He is also the designer and manufacturer of the new, technologically advanced <a href="http://zerogravityinstitute.com/float-room-sales/" target="_blank">Zero Gravity Float Rooms.</a></p>
                  <p>Kevin has been floating since 1986, when he went to work for one of the world’s first commercial floatation centers. With a history of over 500 floats, including a recent research project titled “100 floats in 100 days”, Kevin brings a vast amount of knowledge, insight and experience to the world of floatation and the tank manufacturing industry.</p>
                  <p>In addition to his work with Zero Gravity Institute and Zero Gravity Float Rooms, Kevin is also actively consulting on over a dozen new float centers opening around the world and has recently started working on a new book called “Floating – Evolution of the Next Consciousness”. He has been featured in several magazines and periodicals, and has appeared on many popular podcasts including; “Tangentially Speaking” with Christopher Ryan Ph.D, “The Warrior Poet” with Aubrey Marcus, “Not Just Paleo” with Evan Brand, and “Fat Burning Man” with Abel James.</p>
                  </div>
                </div>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'ashkahn'}>
              <div className="columns">
                <div className="column is-one-third has-text-centered">
                  <img className="circle" src={AshkahnJahromiImage} alt="Rise Float Conference Speaker Ashkahn Jahromi"/>
                </div>
                <div className="column">
                  <div className="content">
                    <h2>Ashkahn Jahromi</h2>
                    <h3>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://floatconference.com/" target="_blank">The Float Conference</a> | <a href="https://twitter.com/floathq" target="_blank">@floathq</a></h3>
                    <p><strong>Talk Summary:</strong></p>
                    <p>Coming soon</p>
                    <p><strong>Bio:</strong></p>
                    <p>Ashkahn is one of the co-founders of <a href="https://floathq.com" target="_blank">Float On</a> in Portland, Oregon. He's been in the float scene since Float On opened it's doors in 2010 and has been loving every minute of it. Over the years Ashkahn has dealt with so many salty messes that at this point he thinks he may be more salt than man. In his off time Ashkahn enjoys practicing the kazoo, eating popcorn, and learning everything he can about octopuses (did you know they have more neurons in their tentacles than they do in their brain?). He's super excited to come out to The Big Louis (he's pretty sure people call it that).</p>
                  </div>
                </div>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'graham'}>
            <div className="columns">
              <div className="column is-one-third has-text-centered">
                <img className="circle" onClick={() => this.showModal('graham')} src={GrahamTalleyImage} alt="Rise Float Conference Speakers Graham Talley"/>
              </div>
              <div className="column">
                <div className="content">
                  <h2>Graham Talley</h2>
                  <h3>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://www.floattanksolutions.com/" target="_blank">Float Tank Solutions</a></h3>
                  <p><strong>Talk Summary:</strong></p>
                  <p>Coming soon</p>
                  <p><strong>Bio:</strong></p>
                  <p>Graham is one of the Co Founders of <a href="https://floathq.com" target="_blank">Float On</a>, Float Tank Solutions, the Float Conference, and a handful of other salty endeavors. He has been lecturing for over a decade on small business, happiness, and (most recently) float tanks. Graham's interests and areas of expertise extend from water sanitation to treasure hunts, from complex systems design to experimental theater. He is thrilled to come out to St. Louis, hang out, and exchange ideas with other members of our magical industry.</p>
                </div>
              </div>
            </div>
            </ScrollableAnchor>
          </div>
        </section>
      <Footer/>
    </div>
    );
  }
});

export default Speakers;
