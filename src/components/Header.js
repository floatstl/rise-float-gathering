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
      <br key="4"/>,
      <a key="5" className="button is-large" href="https://rise.bazaarpass.com/products/2017" target="_blank">Get Tickets</a>,
      <br key="6"/>,
      <hr key="6"/>,
      <br key="7"/>,
      <div key="8"className="is-hidden"><span className="title is-4 bold">Resources</span>,
      <a key="9" style={{fontSize: '1.2rem'}} href="/about/"><span>About Rise</span></a>,
      <a key="10" style={{fontSize: '1.2rem'}} href="/vendors-and-sponsors/"><span>Vendors & Sponsors</span></a>,
      <a key="11" style={{fontSize: '1.2rem'}} href="https://floatinstl.com" target="_blank"><span>Float STL</span></a>,
      <a key="12" style={{fontSize: '1.2rem'}} href="https://floatingstl.com/about/" target="_blank"><span>Meet the Team</span></a>,
      <hr key="13"/></div>,
      <a key="14" href="https://www.facebook.com/events/1901297480100411/" target="_blank"><span className="title is-4 bold">Connect With Us</span></a>,
      <span key="15" className="icon"><a href="https://www.facebook.com/events/1901297480100411/" target="_blank"><i className="fa fa-facebook" style={{'color': 'white'}} aria-hidden="true"></i></a></span>,
    ]

    let MenuWrap = React.createClass({

      getInitialState() {
        return {hidden : false};
      },

      render() {
        let style;

        if (this.state.hidden) {
          style = {display: 'none'};
        }

        return (
          <div style={style} className={this.props.side}>
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
    }
  },

  handelPin: function(event) {
    this.setState({
      navPinned: true,
    });
    setTimeout(() => {
      this.setState({
        showMobileMenu: 'block',
      });
    }, 125);
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
      </div>
    );
  }
});

export default MobileMenu;
