import React from 'react';
import BurgerMenu from 'react-burger-menu';
import Headroom from 'react-headroom';
import MobileNavStyles from './MobileNavStyles';
import logo from '../assets/rise-logo-white.png';

let MobileMenu = React.createClass({

  getMobileMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = [
      <span key="0" className="title is-3 bold">General Information</span>,
      <a key="1" href="/">Home</a>,
      <a key="2" href="/speakers/">Speakers</a>,
      <a key="3"  href="/schedule/">Schedule</a>,
      <a key="10" href="/about/">About</a>,
      <br key="4"/>,
      <a key="5" className="button is-large" href="https://rise.bazaarpass.com/products/2018" target="_blank">Get Tickets</a>,
      <br key="6"/>,
      <hr key="7"/>,
      <br key="8"/>,
      <span key="9" className="title is-4 bold">Resources</span>,
      <a key="11" style={{fontSize: '1.2rem'}} href="/vendors-and-speakers/"><span>Vendors & Sponsors</span></a>,
      <a key="12" style={{fontSize: '1.2rem'}} href="https://floatingstl.com" target="_blank"><span>FLOAT STL</span></a>,
      <a key="13" style={{fontSize: '1.2rem'}} href="https://floatingstl.com/about/" target="_blank"><span>Meet the Team</span></a>,
      <hr key="14"/>,
      <a key="15" href="https://www.facebook.com/events/1901297480100411/" target="_blank"><span className="title is-4 bold">Connect With Us</span></a>,
      <span key="16" className="icon"><a href="https://www.facebook.com/events/1901297480100411/" target="_blank"><i className="fa fa-facebook" style={{'color': 'white'}} aria-hidden="true"></i></a></span>,
    ]

    let MenuWrap = React.createClass({

      getInitialState() {
        return {hidden : false};
      },

      render() {
        return (
          <div style={this.state.hidden ? {display: 'none'} : {display: 'block'}} className={this.props.side}>
            {this.props.children}
          </div>
        );
      }
    });

    return (
      <MenuWrap wait={20} side={this.state.side}>
        <Menu id={this.state.currentMenu} styles={ MobileNavStyles(this.state.showMobileMenu) } pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
          {items}
        </Menu>
      </MenuWrap>
    );
  },

  getInitialState() {
    return {
      currentMenu: 'slide',
      side: 'right',
      navColor: 'transparent',
      showMobileMenu: 'block',
      navPinned: false,
    };
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function(event) {
    if (this.props.isHome) {
      if (window.pageYOffset >= 500) {
        this.setState({
          navColor: 'solid',
        });
      } else {
        this.setState({
          navColor: 'transparent',
          showMobileMenu: 'none',
        });
      }
      if (window.pageYOffset < 5) {
        this.setState({
          showMobileMenu: 'block',
        });
      }
    }

    // if scroll is 0 show mobile nav

  },

  handelPin: function(event) {
    this.setState({
      navPinned: true,
    });
    setTimeout(() => {
      this.setState({
        showMobileMenu: 'block',
      });
    }, 100);
  },

  handelUnPin: function(event) {
    this.setState({
      navPinned: false,
      showMobileMenu: 'none',
    });
  },

  render() {
    return (
      <div>
        {this.getMobileMenu()}
        <Headroom onScroll={this.handleScroll} onPin={this.handelPin} onUnpin={this.handelUnPin} pinStart={this.props.isHome ? 500 : 0}>
          <nav className={this.state.navColor + ' nav'}>
            <div className="container">
              <div className="columns">
                <div className="column is-one-fifth logo">
                  <a href="/"><span><img src={logo} alt="Rise - A Float Community Gathering Logo White" /></span></a>
                </div>
                <div className="column is-one-fifth menu-item">
                  <a href="/speakers/">2017 Speakers</a>
                </div>
                <div className="column is-one-fifth menu-item">
                  <a href="/schedule/">2017 Schedule</a>
                </div>
                <div className="column is-one-fifth menu-item">
                  <a href="/about/">About</a>
                </div>
               <div className="column is-one-fifth menu-item">
                <a className="button is-large" href="https://rise.bazaarpass.com/products/2018" target="_blank">Buy Your Tickets</a>
              </div>
              </div>
            </div>
          </nav>
        </Headroom>
      </div>
    );
  }
});

export default MobileMenu;
