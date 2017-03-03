import React from 'react';
import ConnectImage from '../../assets/connect.png';
import DiscoverImage from '../../assets/discover.png';
import Refresh from '../../assets/refresh.png';

let Schedule = React.createClass({
  render() {
    return (
      <section className="section schedule">
        <a name="schedule"></a>
        <div className="container">
          <h3 className="title is-2 has-text-centered">What to Expect</h3>
          <div className="columns">
            <div className="column">
              <div className="content has-text-centered">
                <img src={ConnectImage} alt="Rise Float Conference Speaker Stephen Johnson"/>
                <h3>Connect</h3>
                <p></p>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
              <img src={DiscoverImage} alt="Rise Float Conference Speaker Kevin Johnson"/>
                <h3>Discover</h3>
                <p></p>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <img src={Refresh} alt="Rise Float Conference Speakers Graham Talley & Ashkahn Jahromi"/>
                <h3>Refresh</h3>
                <p></p>
              </div>
            </div>
          </div>
          <div className="columns is-mobile has-text-centered is-hidden">
            <div className="column is-half is-offset-one-quarter">
              <a className="button is-large" href="/speakers/">See All Speakers</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

export default Schedule;
