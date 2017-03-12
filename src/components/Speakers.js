import React from 'react';

import Header from './Header';
import Footer from './Footer';

import StephenJohnsonImage from '../assets/stephen-johnson.png';
import KevinJohnsonImage from '../assets/kevin-johnson.png';
import GrahamTalleyImage from '../assets/graham-talley-rise-speaker.png';
import AshkahnJahromiImage from '../assets/ashkahn-jahromi-rise-speaker.png';
import AndyZaremba from '../assets/andy-zaremba-rise-speaker.png';
import MikeZaremba from '../assets/mike-zaremba-rise-speaker.png';
import LeePerry from '../assets/lee-perry.png';

let Speakers = React.createClass({
  render() {
    return (
      <div id="outer-container">
        <Header/>
        <section className="section speakers-page">
          <div className="container">
            <h1 className="title is-2 has-text-centered">Speakers</h1>
            <div className="columns">
              <div className="column is-one-third has-text-centered">
                <img className="circle" src={LeePerry} alt="Rise Float Conference Speaker Lee Perry"/>
              </div>
              <div className="column">
                <div className="content">
                  <h2>Lee Perry</h2>
                  <h3>President of <a href="http://www.samadhitank.com/" target="_blank">Samadhi Tank Company</a> & Chairman of the Board of the <a href="http://www.floatation.org/">Floatation Tank Association</a></h3>
                  <p>Lee Perry, as president of the <a href="http://www.samadhitank.com/" target="_blank">Samadhi Tank Company</a>, has spent the last 40 years working to keep the business of floating a journey into the realm of service and adventure. As chairman of the board of the <a href="http://www.floatation.org/">Floatation Tank Association</a>, she focuses on advocating best practices, educating health departments on regulations for this industry, and supporting new float businesses.</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third has-text-centered">
                <img className="circle" src={KevinJohnsonImage} alt="Rise Float Conference Speaker Kevin Johnson"/>
              </div>
              <div className="column">
                <div className="content">
                <h2>Kevin Johnson</h2>
                <h3>Owner of <a href="http://zerogravityinstitute.com/" target="_blank">Zero Gravity Float Rooms</a> | <a href="https://twitter.com/ZeroGravityInst" target="_blank">@ZeroGravityInst</a></h3>
                <p>Kevin Johnson is the founder and CEO of <a href="http://zerogravityinstitute.com/" target="_blank">Zero Gravity Institute</a> in Austin, TX. ZGI is a state of the art floatation center and private research facility. He is also the designer and manufacturer of the new, technologically advanced <a href="http://zerogravityinstitute.com/float-room-sales/" target="_blank">Zero Gravity Float Rooms.</a></p>
                <p>Kevin has been floating since 1986, when he went to work for one of the world’s first commercial floatation centers. With a history of over 500 floats, including a recent research project titled “100 floats in 100 days”, Kevin brings a vast amount of knowledge, insight and experience to the world of floatation and the tank manufacturing industry.</p>
                <p>In addition to his work with Zero Gravity Institute and Zero Gravity Float Rooms, Kevin is also actively consulting on over a dozen new float centers opening around the world and has recently started working on a new book called “Floating – Evolution of the Next Consciousness”. He has been featured in several magazines and periodicals, and has appeared on many popular podcasts including; “Tangentially Speaking” with Christopher Ryan Ph.D, “The Warrior Poet” with Aubrey Marcus, “Not Just Paleo” with Evan Brand, and “Fat Burning Man” with Abel James.</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third has-text-centered">
                <img className="circle" src={StephenJohnsonImage} alt="Rise Float Conference Speaker Stephen Johnson"/>
              </div>
              <div className="column">
                <div className="content">
                  <h2>Stephen Johnson</h2>
                  <h3>Psychiatric Nurse, Fascial Anatomist, and Philosopher</h3>
                  <p>Stephen Johnson has been a boxer, modern dancer, actor, coach and trainer. He has worked as a Psychiatric Nurse for 27 years, and conducted a private practice as a Structural Integrator for over 20 years. He is an Anatomist specializing in Fascial Anatomy, has conducted research, and taught at various schools. He is a Bio Somatic Movement educator, a yoga teacher in the Ashtanga style, a long time meditator in both Soto and Rinzai traditions and a practitioner of Tai Chi / Qi Gong.</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third has-text-centered">
                <img className="circle" src={MikeZaremba} alt="Rise Float Conference Speaker Mike Zaremba"/>
              </div>
              <div className="column">
                <div className="content">
                  <h2>Mike Zaremba</h2>
                  <h3>Co-Founder of <a href="http://www.floathouse.com" target="_blank">Float House</a> | <a href="https://twitter.com/FloatingYogi" target="_blank">@FloatingYogi</a></h3>
                  <p>Mike Zaremba is the co-founder of <a href="http://www.floathouse.com" target="_blank">Float House</a>, Vancouver’s 1st commercial float centre in over 20 years. Float House opened in 2013 and has expanded to 6 locations across BC and Alberta as a part of a multi-owner partnership program. Float House was a significant catalyst in the resurgence of the float industry creating one of the largest centers at the time in North America with industry leading branding and marketing.</p>
                  <p>Mike is also the host of a podcast called Vancouver Real which is a talk-show found on iTunes, Stitcher Radio, YouTube and Facebook with over 100 episodes.</p>
                  <p> Mike lives in North Vancouver with his partner, Jessica, and enjoys an active lifestyle holistically-based. He enjoys travelling to all parts of the globe, exploring cultures and dissolving into the power of Nature.</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third has-text-centered">
              <img className="circle" src={AndyZaremba} alt="Rise Float Conference Speaker Andy Zaremba"/>
              </div>
              <div className="column">
                <div className="content">
                  <h2>Andy Zaremba</h2>
                  <h3>Co-Founder of <a href="http://www.floathouse.com" target="_blank">Float House</a> | <a href="https://twitter.com/AndyZaremba" target="_blank">@AndyZaremba</a></h3>
                  <p>Andy is the co-founder of Float House and the co-host of the Vancouver Real podcast. No matter which realm he’s playing in, he strives to be the best man he can possibly be, bringing his greatest efforts forth to family, friends, and community. Andy has a fascination for learning and a deep passion for personal growth through books, courses, public speaking, podcasts, floating, and the like. He believes that growth is infinite; the journey is about conscious exploration, living fully and aspiring towards excellence. Andy is living his vision helping to facilitate the expansion of human consciousness worldwide. He encourages this through floating as well as through the podcast, providing a platform for others to showcase their vision. His interests include traveling, fitness, martial arts, yoga, music, art, hiking, scuba diving, and of course, having stimulating conversations. His precious daughter, Ella Faith, is truly a gift and continues to be an inspiration and strength in his life.</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third has-text-centered">
                <img className="circle" src={AshkahnJahromiImage} alt="Rise Float Conference Speaker Ashkahn Jahromi"/>
              </div>
              <div className="column">
                <div className="content">
                  <h2>Ashkahn Jahromi</h2>
                  <h3>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://floatconference.com/" target="_blank">The Float Conference</a> | <a href="https://twitter.com/floathq" target="_blank">@floathq</a></h3>
                  <p>Ashkahn is one of the co-founders of <a href="https://floathq.com" target="_blank">Float On</a> in Portland, Oregon. He's been in the float scene since Float On opened it's doors in 2010 and has been loving every minute of it. Over the years Ashkahn has dealt with so many salty messes that at this point he thinks he may be more salt than man. In his off time Ashkahn enjoys practicing the kazoo, eating popcorn, and learning everything he can about octopuses (did you know they have more neurons in their tentacles than they do in their brain?). He's super excited to come out to The Big Louis (he's pretty sure people call it that).</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third has-text-centered">
                <img className="circle" onClick={() => this.showModal('graham')} src={GrahamTalleyImage} alt="Rise Float Conference Speakers Graham Talley"/>
              </div>
              <div className="column">
                <div className="content">
                  <h2>Graham Talley</h2>
                  <h3>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://www.floattanksolutions.com/" target="_blank">Float Tank Solutions</a></h3>
                  <p>Graham is one of the Co Founders of <a href="https://floathq.com" target="_blank">Float On</a>, Float Tank Solutions, the Float Conference, and a handful of other salty endeavors. He has been lecturing for over a decade on small business, happiness, and (most recently) float tanks. Graham's interests and areas of expertise extend from water sanitation to treasure hunts, from complex systems design to experimental theater. He is thrilled to come out to St. Louis, hang out, and exchange ideas with other members of our magical industry.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer/>
    </div>
    );
  }
});

export default Speakers;
