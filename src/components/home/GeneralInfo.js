import React from 'react';

let GeneralInfo = React.createClass({
  render() {
    return (
      <section className="section info">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h3 className="title is-2">Hello St. Louis!</h3>
              <p>Rise is conveniently and centrally located in St. Louis, Missouri.</p>
              <br/>
              <p><strong><a href="https://www.danforthcenter.org/" target="_blank">Donald Danforth Plant Science Center</a></strong></p>
              <p>975 North Warson Road</p>
              <p>Saint Louis, MO 63132</p>
              <br/>
              <p><small>See our <a href="https://www.facebook.com/events/1901297480100411/?active_tab=discussion" target="_blank">Facebook page</a> for discount details</small></p>
            </div>
            <div className="column">
              <div className="map-container">
                <a href="https://goo.gl/maps/NRvrHVMCoSv" target="_blank">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.892742517457!2d-90.39937798465623!3d38.674332979605474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df3315189b7c3b%3A0xef76974979f2f04e!2sDonald+Danforth+Plant+Science+Center!5e0!3m2!1sen!2sus!4v1514051250751" width="400" height="400" frameborder="0" allowfullscreen></iframe>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

export default GeneralInfo;
