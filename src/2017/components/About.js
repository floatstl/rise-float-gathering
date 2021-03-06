import React from 'react';
import Particles from 'react-particles-js';
import ParticleParams from './../particles.json';

import Header from './Header';
import Footer from './Footer';

import FloatLogo from '../assets/floatstl.png';
import FloatSTL from '../assets/kevin-jake-marcio-float-stl.jpg';
import ArtOfFloat from '../assets/art-of-float.png';

let About = React.createClass({
  render() {
    return (
      <div id="outer-container">
        <section className="hero home about-page">
          <Header isHome={true}/>
          <div className="hero-body">
            <div className="container content">
              <div className="has-text-centered"><img src={FloatLogo} alt="Float STL Logo"/></div><br/>
              <h1 className="title is-1 has-text-centered">About Rise</h1><br/>
              <p>The float is sacred. The float is powerful. The float is joyful. Throughout the many recognized benefits of a floating practice, there is an underlying current of complexity and spirituality. Our early experiences with floating helped us to connect with this sense of clarity, wonder, peace, and stillness.</p>
              <br/>
              <p><a href="https://www.floatingstl.com" target="_blank">FLOAT STL</a> is our creative pursuit to develop an environment and experience that guides, supports, and enhances the practice of floating. This process is informed by our professional experiences as mental health counselors, in which we traveled alongside many who were in pain and in need. We value and emphasize presence, non-judgement, attunement, openness, tenderness, vulnerability, and safety. <a href="https://www.floatingstl.com" target="_blank">FLOAT STL</a>’s goal is to carefully guide someone on their journey of reflection, honesty, forgiveness, acceptance, and release. This goal is the foundation upon which we conceptualize our service: to offer sincere acts of support and attendance to those who arrive in our centers. This commitment is at the center of who we are. For us, this is The Heart of Floating.</p>
              <br/><br/>
              <div className="has-text-centered">
                <a href="https://www.floatingstl.com/about" target="_blank">
                  <img src={FloatSTL} style={{'height':'400px'}} alt="Kevin, Jake, Marcio of Floating STL"/><br/><br/>
                  <blockquote>Kevin, Jake and Marcio - Founders of FLOAT STL</blockquote>
                </a>
              </div>
              <br/>
              <br/>
              <p>When we commit to The Heart of Floating, we form relationships and communities. We share experiences, we connect, we learn, we teach. We care.</p>
              <br/>
              <p>Rise: Float Community Gathering is a place to connect to The Heart of Floating. Rise is an outgrowth of our desire to create, grow, maintain, and strengthen those bonds. It is a place to meet, gather, and celebrate. We have learned that sharing experiences and coming together in a shared space helps to develop and strengthen community. The purpose of Rise is to highlight these deeply held values and hold space for community integration. Looking forward, the healthy growth of this industry can only occur if we collectively honor and feed its roots.</p>
              <br/>
              <p>We are just getting started. This is just the beginning. Our goal for this first event is to invite and welcome individuals who have played an impactful role in our journey. We hold deep gratitude and respect for their contributions and are honored to have them here in Saint Louis for this float community event.</p>
              <br/>
              <br/>
              <div className="podcast has-text-centered">
                <a href="http://artofthefloat.com/2017/03/rise-float-gathering/?source=risefloatgathering.com" target="_blank">
                  <img src={ArtOfFloat} alt="Art of the Float Podcast Featuring Kevin, Jake and Marcio from Rise"/><br/><br/>
                  <blockquote><p>Check out our podcast with Art of the Float where Jake, Marcio and Kevin share their vision for Rise and The Heart of Floating</p></blockquote>
                </a>
                <br/><br/>
                <a className="button is-large" href="http://artofthefloat.com/2017/03/rise-float-gathering/?source=risefloatgathering.com" target="_blank">Listen Now</a>
              </div>
            </div>
          </div>
        </section>
        <Particles params={ParticleParams} height={2900} style={{'marginTop': '-2900px'}}/>
        <Footer/>
      </div>
    );
  }
});

export default About;
