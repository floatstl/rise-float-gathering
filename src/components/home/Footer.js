import React from 'react';
import BrushLogo from '../../assets/rise-brush-logo.png';

let TicketInfo = React.createClass({
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <img src={BrushLogo} alt=""/>
            <h3 className="title is-2 has-text-centered">FLOAT COMMUNITY GATHERING</h3>
            <h2>APRIL 28TH - 30TH, 2017 | ST. LOUIS, MO </h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <label className="label">Sign up for updates</label>
              <p className="control has-icon has-icon-right">
                <input className="input is-danger" type="text" placeholder="Email input" value="hello@"/>
                <span className="icon is-small">
                  <i className="fa fa-warning"></i>
                </span>
                <span className="help is-danger">This email is invalid</span>
              </p>
          </div>
        </div>
      </footer>
    );
  }
});

export default TicketInfo;
