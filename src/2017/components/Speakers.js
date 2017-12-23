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
import LeePerryImage from '../assets/lee-perry.png';
import RichardBonkImage from '../assets/richard-bonk.png';
import DylanCalmImage from '../assets/dylan.png';
import AmyGrimesImage from '../assets/amy.png';
import GloriaMorrisImage from '../assets/gloria.png';

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
                  <img className="circle" src={LeePerryImage} alt="Rise Float Conference Speaker Lee Perry"/>
                </div>
                <div className="column">
                  <div className="content">
                    <h2>In the Province of My Mind</h2>
                    <h3>Lee Perry</h3>
                    <h4>President of <a href="http://www.samadhitank.com/" target="_blank">Samadhi Tank Company</a> & Chairman of the Board of the <a href="http://www.floatation.org/">Floatation Tank Association</a></h4>
                    <p><strong>Bio:</strong></p>
                    <p>Lee Perry, as president of the <a href="http://www.samadhitank.com/" target="_blank">Samadhi Tank Company</a>, has spent the last 40 years working to keep the business of floating a journey into the realm of service and adventure. As chairman of the board of the <a href="http://www.floatation.org/">Floatation Tank Association</a>, she focuses on advocating best practices, educating health departments on regulations for this industry, and supporting new float businesses.</p>
                  </div>
                </div>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'richard'}>
              <div className="columns">
                <div className="column is-one-third has-text-centered">
                  <img className="circle" src={RichardBonkImage} alt="Rise Float Conference Speaker Richard Bonk"/>
                </div>
                <div className="column">
                  <div className="content">
                    <h2>Floating to Enlightenment</h2>
                    <h3>Richard Bonk | <a href="https://twitter.com/floatgurubonk" target="_blank">@FloatGuruBonk</a></h3>
                    <br/>
                    <p><strong>Talk Summary:</strong></p>
                    <p>Perhaps you have had an out of body experience while floating - or another out of the ordinary experience - and wondered what was that? Or perhaps you’d like to have such an experience and wondered how to make that happen? This presentation is offered as a teaser for an upcoming book of the same title, which will document the presenter’s experiences exploring the mind and examining the interrelationship between floatation, meditation, lucid dreaming and preparing for death. We will briefly touch bases on each of these 3 topics, how they are connected to floating, and each other, and the value they may present for investigating and understanding the mind, as well as possible applications. There will also be an invitation for YOU to participate in this collaborative work as psychonauts, phenomenologists and citizen scientists.</p>
                    <p><strong>Bio:</strong></p>
                    <p>Richard Bonk has a Masters degree in counseling, and works as a wellness coach facilitating a program for people with chronic health conditions, as well as meditation facilitator, workshop leader and artist. With a special interest in the intersection between body and mind, Richard utilizes techniques to enhance consciousness such as creativity, hypnosis, dream-work, yoga and mindfulness meditation. He is also one of the world’s few floatation elders, having floated for over 30 years and was involved in early research at the Medical College of Ohio in Toledo. There Richard developed a technique  - the Alternate Waking States Induction Method or AWSIM  - to facilitate lucid dreams and out of body experiences with about 80% regularity. Richard has helped established 2 successful float centers in the Twin Cities and is currently developing a non-profit. With a growing international community, he hopes to lead in providing opportunities uniting professional and citizen scientists (like YOU) to explore the “inner space” of consciousness and map the mind from the inside. Toward these ends Richard is currently leading a pilot study on floating for lucid dreams and is writing a book “Floating to Enlightenment,” documenting his experiences and exploring the interrelationship between floatation, meditation, lucid dreaming and preparing for death.</p>
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
                  <h2>Seeing in the Dark</h2>
                  <h3>Kevin Johnson</h3>
                  <h4>Owner of <a href="http://zerogravityinstitute.com/" target="_blank">Zero Gravity Float Rooms</a> | <a href="https://twitter.com/ZeroGravityInst" target="_blank">@ZeroGravityInst</a></h4>
                  <p><strong>Talk Summary:</strong></p>
                  <p>The world stands at a precipice and it is brought here by the choices that we as a species have made. Most people don't realize that we are part of a much larger system than the one we see around us. Likewise, most do not understand that we have collectively agreed to be in exactly the position we are in. Because of this, each of us has a responsibility to express what we have a potential to become. By doing so, we chart a course for ourselves, our species, and our planet. This is a humbling thought. In this presentation, we will investigate how to use the floatation tank as a tool for cultivating a new kind of awareness. Work in the floatation tank is practical, non dogmatic, largely non dualistic and has no specific set of rules to follow. The practice is interactive, creative, constantly dynamic and based on what works in each session and each unique set of circumstances. By utilizing a few special techniques, we can learn to peel back the many layers of reality, see what lies beneath each one and understand more about the underlying nature of the universe. With responsible application of this new awareness, we can learn to affect and change our reality.</p>
                  <p><strong>Bio:</strong></p>
                  <p>Kevin Johnson is the founder and CEO of <a href="http://zerogravityinstitute.com/" target="_blank">Zero Gravity Institute</a> in Austin, TX. ZGI is a state of the art floatation center and private research facility. He is also the designer and manufacturer of the new, technologically advanced <a href="http://zerogravityinstitute.com/float-room-sales/" target="_blank">Zero Gravity Float Rooms.</a></p>
                  <p>Kevin has been floating since 1986, when he went to work for one of the world’s first commercial floatation centers. With a history of over 500 floats, including a recent research project titled “100 floats in 100 days”, Kevin brings a vast amount of knowledge, insight and experience to the world of floatation and the tank manufacturing industry.</p>
                  <p>In addition to his work with Zero Gravity Institute and Zero Gravity Float Rooms, Kevin is also actively consulting on over a dozen new float centers opening around the world and has recently started working on a new book called “Floating – Evolution of the Next Consciousness”. He has been featured in several magazines and periodicals, and has appeared on many popular podcasts including; “Tangentially Speaking” with Christopher Ryan Ph.D, “The Warrior Poet” with Aubrey Marcus, “Not Just Paleo” with Evan Brand, and “Fat Burning Man” with Abel James.</p>
                  </div>
                </div>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'ashkahn-and-graham'}>
              <div className="columns">
                <div className="column is-one-third has-text-centered">
                  <img className="circle" src={AshkahnJahromiImage} alt="Rise Float Conference Speaker Ashkahn Jahromi"/>
                  <br/><br/><br/><br/>
                  <img className="circle" src={GrahamTalleyImage} alt="Rise Float Conference Speakers Graham Talley"/>
                </div>
                <div className="column">
                  <div className="content">
                    <h2>Why Graham and Ashkahn are Probably Wrong About Almost Everything.</h2>
                    <h3>Ashkahn Jahromi</h3>
                    <h4>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://floatconference.com/" target="_blank">The Float Conference</a> | <a href="https://twitter.com/floathq" target="_blank">@floathq</a></h4>
                    <p>Ashkahn is one of the co-founders of <a href="https://floathq.com" target="_blank">Float On</a> in Portland, Oregon. He's been in the float scene since Float On opened it's doors in 2010 and has been loving every minute of it. Over the years Ashkahn has dealt with so many salty messes that at this point he thinks he may be more salt than man. In his off time Ashkahn enjoys practicing the kazoo, eating popcorn, and learning everything he can about octopuses (did you know they have more neurons in their tentacles than they do in their brain?). He's super excited to come out to The Big Louis (he's pretty sure people call it that).</p>
                    <h3>Graham Talley</h3>
                    <h4>Co-Founder of <a href="https://floathq.com" target="_blank">Float On</a> & <a href="http://www.floattanksolutions.com/" target="_blank">Float Tank Solutions</a></h4>
                    <p>Graham is one of the Co Founders of <a href="https://floathq.com" target="_blank">Float On</a>, Float Tank Solutions, the Float Conference, and a handful of other salty endeavors. He has been lecturing for over a decade on small business, happiness, and (most recently) float tanks. Graham's interests and areas of expertise extend from water sanitation to treasure hunts, from complex systems design to experimental theater. He is thrilled to come out to St. Louis, hang out, and exchange ideas with other members of our magical industry.</p>
                  </div>
                </div>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'gloria'}>
              <div className="columns">
                <div className="column is-one-third has-text-centered">
                  <img className="circle" src={GloriaMorrisImage} alt="Rise Float Conference Speaker Gloria Morris"/>
                </div>
                <div className="column">
                  <div className="content">
                    <h2>Zero to Sixty in Nine Months</h2>
                    <h3>Gloria Morris</h3>
                    <h4>Founder <a href="http://www.floatsixty.com/" target="_blank">Float Sixty</a>, Director at <a href="https://www.actioniq.com/" target="_blank">ActionIQ</a> | <a href="https://twitter.com/ghip" target="_blank">@ghip</a></h4>
                    <p>When technology and analytics pro Gloria Morris agreed to “try something new” in 2015, little did she know the occasion would be life-changing. Just nine months from trying float therapy she opened the doors of Float Sixty in Chicago where she is healing conditions of stress, anxiety, pain, swelling, insomnia and jet lag with notable clients from professional athletes to corporate executives.</p>
                    <p>Gloria is also active in the technology space and has been for the last 12 years. She serves as a Director for ActionIQ, a startup strongly backed by large VCs specializing in big data and consumer analytics.</p>
                    <p>Since starting her first business in 2002, Morris has helped dozens of high-profile clients in marketing, technology strategy, customer relationship management and big data analytics. Morris conferred her Masters degree from DePaul University Chicago in 2015 and studied at the DePaul Institute of Science and Technology in Kerala, India. Chat Conversation End</p>
                  </div>
                </div>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'dylan-and-amy'}>
              <div className="columns">
                <div className="column is-one-third has-text-centered">
                  <img className="circle" src={DylanCalmImage} alt="Rise Float Conference Speakers Dylan Calm"/>
                  <br/><br/><br/><br/>
                  <img className="circle" src={AmyGrimesImage} alt="Rise Float Conference Speaker Amy Grimes"/>
                </div>
                <div className="column">
                  <div className="content">
                    <h2>Art of the Float Podcast Discussion</h2>
                    <h3>Dylan Calm | <a href="https://twitter.com/artofthefloat" target="_blank">@artofthefloat</a></h3>
                    <p>Unsatisfied with the world IT and empowered by his now wife Sandra, the goal of creating a holistic wellness center with a focus around float tanks was born. On December 14th, 2011 Dylan and wife Sandra opened the a float center with 2 float tanks. Today, the <a href="http://www.floatshoppe.com/" target="_blank">Float Shoppe</a> is an integrative wellness center which encompasses a total of six modalities. Dylan began blogging about running a float center in 2013 and helped expand it into <a href="https://artofthefloat.com/podcast/" target="_target">Art of the Float Podcast</a> in 2015. Today, most of his thoughts are geared towards refining the Float Shoppe and raising float center owner awareness and education with Art of the Float. </p>
                    <h3>Amy Grimes | <a href="https://twitter.com/artofthefloat" target="_blank">@artofthefloat</a></h3>
                    <p>Amy Grimes Co-owns Float Nashville. Float Nashville is thriving and is currently in the process of expanding to multiple locations. Amy herself has spent over ten years in marketing before joining the float center owner community. Amy Joined <a href="https://artofthefloat.com/podcast/" target="_target">Art of the Float Podcast</a> as a co-host in 2015.</p>
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
