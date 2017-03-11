import React from 'react';
import Headroom from 'react-headroom';
import logo from '../../assets/rise-logo-white.png';

let DesktopMenu = React.createClass({
  render() {
    return (
        <Headroom onScroll={this.handleScroll} onPin={this.handelPin} onUnpin={this.handelUnPin} pinStart={this.props.isHome ? 500 : 0}>
          <nav className={this.props.navColor + ' nav'}>
            <div className="container">
              <div className="columns">
                <div className="column is-one-fourth logo">
                  <a href="/"><span><img src={logo} alt="Rise - A Float Community Gathering Logo White" /></span></a>
                </div>
                <div className="column is-one-fourth menu-item">
                  <a href="/speakers/">Speakers</a>
                </div>
                <div className="column is-one-fourth menu-item">
                  <a href="#schedule">Schedule</a>
                </div>
               <div className="column is-one-fourth menu-item">
                <a className="button is-large" href="https://rise.bazaarpass.com/products/2017" target="_blank">Buy Your Tickets</a>
              </div>
              </div>
            </div>
          </nav>
        </Headroom>
    );
  }
});

export default DesktopMenu;
