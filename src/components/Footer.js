import React from 'react';
import BrushLogo from '../assets/rise-brush-logo.png';

let TicketInfo = React.createClass({
  render() {
    return (
      <div style={{'marginTop': '-22px'}}>
        <section className="section ticket-info">
          <div className="container has-text-centered">
            <h3 className="title is-2">Join Us</h3>
            <div className="columns is-mobile">
              <div className="column is-half is-offset-one-quarter content">
                <p>Gather with us this April to experience Rise.</p>
                <p>Early Bird tickets are on sale now through March 15.</p><br/>
                <a className="button is-large" href="https://rise.bazaarpass.com/products/2017" target="_blank">Buy Tickets</a>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <img src={BrushLogo} alt=""/>
              <h3 className="title is-2 has-text-centered">FLOAT COMMUNITY GATHERING</h3>
              <h2>APRIL 28TH - 30TH, 2017 | ST. LOUIS, MO </h2>
              <div className="email-signup">
                <div className="columns">
                  <div className="column">
                    <div id="mc_embed_signup">
                      <form action="//risefloatgathering.us15.list-manage.com/subscribe/post?u=b2175eac47195372ee8ed9a29&amp;id=77ea33e941" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                          <div id="mc_embed_signup_scroll">
                        <h3>Sign Up for Updates</h3>
                      <div className="mc-field-group">
                        <input type="email" placeholder="Email Address" name="EMAIL" className="required email input" id="mce-EMAIL" />
                      </div>
                        <div id="mce-responses" className="clear">
                          <div className="response" id="mce-error-response" style={{'display':'none'}}></div>
                          <div className="response" id="mce-success-response" style={{'display':'none'}}></div>
                        </div>
                          <div style={{'position': 'absolute', 'left': '-5000px'}}><input type="text" name="b_b2175eac47195372ee8ed9a29_77ea33e941" tabIndex="-1" value=""/></div>
                          <div className="clear is-hidden"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                          </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns footer-links is-hidden">
                <div className="column">
                  <a href="/about/">About Rise</a>
                </div>
                <div className="column">
                  <a href="/vendors-and-speakers/">Vendors & Sponsors</a>
                </div>
                <div className="column">
                  <a href="https://floatingstl.com/" target="_blank">FLOAT STL</a>
                </div>
                <div className="column">
                  <a href="https://floatingstl.com/about/" target="_blank">Meet the Team</a>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <p>Connect With Us</p>
                  <span className="icon">
                    <a href="https://www.facebook.com/events/1901297480100411/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
});

export default TicketInfo;
