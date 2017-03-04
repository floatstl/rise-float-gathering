import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ConnectImage from '../../assets/connect.png';
import DiscoverImage from '../../assets/discover.png';
import Refresh from '../../assets/refresh.png';

let Schedule = React.createClass({
  render() {
    return (
      <section className="section schedule">
        <ScrollableAnchor id={'schedule'}>
          <div className="container">
            <h3 className="title is-2 has-text-centered">What to Expect</h3>
            <div className="columns">
              <div className="column">
                <div className="content has-text-centered">
                  <img className="circle" src={ConnectImage} alt="Rise Float Conference Speaker Stephen Johnson"/>
                  <h3>Connect</h3>
                  <p>On Friday, we’ll meet up for a networking happy hour. You’ll meet industry leaders and passionate  oat center leaders.</p>
                </div>
              </div>
              <div className="column">
                <div className="content has-text-centered">
                <img className="circle" src={DiscoverImage} alt="Rise Float Conference Speaker Kevin Johnson"/>
                  <h3>Discover</h3>
                  <p>Saturday will include informational  oat and wellness sessions, the opportunity to learn about community development, and keynotes from six inspiring industry leaders.</p>
                </div>
              </div>
              <div className="column">
                <div className="content has-text-centered">
                  <img className="circle" src={Refresh} alt="Rise Float Conference Speakers Graham Talley & Ashkahn Jahromi"/>
                  <h3>Refresh</h3>
                  <p>On Sunday, we’ll have the chance to sit back, relax and re ect. Take a moment to enjoy the community before heading back to daily life.</p>
                </div>
              </div>
            </div>
            <div className="columns is-mobile has-text-centered is-hidden">
              <div className="column is-half is-offset-one-quarter">
                <a className="button is-large" href="/speakers/">See All Speakers</a>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      </section>
    );
  }
});

export default Schedule;
