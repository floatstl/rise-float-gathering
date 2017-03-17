import React from 'react';
import Particles from 'react-particles-js';
import ParticleParams from './../particles.json';

import Header from './Header';
import Footer from './Footer';

let About = React.createClass({
  render() {
    return (
      <div id="outer-container">
        <section className="hero home">
          <Header isHome={true}/>
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 has-text-centered">About Rise</h1><br/>
              <p>The float is sacred. The float is powerful. The float is deep. Throughout the many recognized benefits of a floating practice, there is an underlying current of complexity and spirituality. Our early experiences with floating helped us to connect with this sense of clarity, wonder, peace, and stillness. <a href="https://www.floatingstl.com" target="_blank">FLOAT STL</a> has been our creative pursuit to develop an environment and an experience that guides, supports, and enhances the practice of floating. This process has been informed through the many hours and experiences of our professions as mental health counselors, traveling along this path with many in pain, in need. We placed value and emphasis on qualities of presence, non-judgement, attunement, openness, tenderness, vulnerability, and safety. The goal of which was to carefully guide someone through a journey of exploration, reflection, honesty, forgiveness, acceptance, and release. From this foundation we conceptualize our service, our offering. Sincere acts of support and attendance to those who arrive in our centers are at the center of who we are.</p>
              <br/>
              <p>For us, this is The Heart of Floating. The journey, the exploration, the discovery. And along these travels we form relationships and communities. We share experiences, we connect, we learn, we teach. We care.</p>
              <br/>
              <p>Rise: Float Community Gathering is a place to be reminded of and connect with The Heart of Floating. Rise is an outgrowth of desire to create, grow, maintain, and strengthen those bonds; a place to meet, gather, and celebrate. We have learned that sharing experiences and coming together in a shared space helps to develop and strengthen community. The purpose of Rise is to hold space for highlighting these deeply held values while supporting a process of community integration. Looking forward, the healthy growth of this industry can only be had when we collectively honor and feed the roots.</p>
              <br/>
              <p>We are just getting started, always in the beginning, and our goal for this first event was to invite and welcome individuals who have played an impactful role in our journey. We hold deep gratitude and respect for their contributions and are honored to have them here in Saint Louis for this float community event.</p>
              <br/><br/><div className="title is-1 has-text-centered"><span className="icon"><a href="https://www.facebook.com/events/1901297480100411/" target="_blank"><i className="fa fa-facebook" style={{'color': 'white'}} aria-hidden="true"></i></a></span></div>
            </div>
          </div>
        </section>
        <Particles params={ParticleParams} height={1200} style={{'marginTop': '-1200px'}}/>
        <Footer/>
      </div>
    );
  }
});

export default About;
