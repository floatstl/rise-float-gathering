import React from 'react';

let GeneralInfo = React.createClass({
  render() {
    return (
      <section className="section info">
        <div className="container">

          <div className="columns">
            <div className="column is-one-third">
              <h3 className="title is-2 has-text-centered">St. Louis, MO</h3>
              <p>Rise is conveniently and centrally located in St. Louis, Missouri.</p>
              <aside class="menu">
                <h4 class="menu-label">
                  General Information
                </h4>
                <ul class="menu-list">
                  <li><a>How to get here</a></li>
                  <li><a>Where to stay</a></li>
                  <li><a>Parking and transportation</a></li>
                </ul>
              </aside>
            </div>
            <div className="column">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.535268516148!2d-90.2551716846573!3d38.63657097961171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc47be817433de887!2sCIC+St.+Louis!5e0!3m2!1sen!2sus!4v1488257116756" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

export default GeneralInfo;
