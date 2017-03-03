import React from 'react';
import BurgerMenu from 'react-burger-menu';
import DesktopMenu from './DesktopMenu';
import MobileNavStyles from './MobileNavStyles'

let MobileMenu = React.createClass({

  getMobileMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = [
      <span key="0" className="title is-3 bold">General Information</span>,
      <a key="1" href="#">Schedule</a>,
      <a key="2" href="#">Speakers</a>,
      <a key="3" href="#">Details</a>,
      <br key="4"/>,
      <a key="5" className="button is-large" href="https://rise.bazaarpass.com/products/2017">Get Tickets</a>,
      <br key="6"/>,
      <hr key="6"/>,
      <br key="7"/>,
      <span key="8" className="title is-4 bold">Resources</span>,
      <a key="9" style={{fontSize: '1.2rem'}} href="#"><span>About Rise</span></a>,
      <a key="10" style={{fontSize: '1.2rem'}} href="#"><span>Vendors & Sponsors</span></a>,
      <a key="11" style={{fontSize: '1.2rem'}} href="#"><span>Float STL</span></a>,
      <a key="12" style={{fontSize: '1.2rem'}} href="#"><span>Meet the Team</span></a>,
      <hr key="13"/>,
      <a key="14" href="/"><span className="title is-4 bold">Connect With Us</span></a>,
      <span key="15" className="icon"><a href="https://www.facebook.com/events/1901297480100411/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></span>,
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
        <Menu id={this.state.currentMenu} styles={ MobileNavStyles(this.state.mobileNavColor) } pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
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
      mobileNavColor: 'white',
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
    if (window.pageYOffset >= 500) {
      this.setState({
        navColor: 'solid',
        mobileNavColor: 'rgba(0,157,180,1)',
      });
    } else {
      this.setState({
        navColor: 'transparent',
        mobileNavColor: 'white',
      });
    }
    if (this.state.navPinned && window.pageYOffset >= 500) {
      this.setState({
        mobileNavColor: 'white',
      });
    }
  },

  handelPin: function(event) {
    this.setState({
      navPinned: true,
    });
  },

  handelUnPin: function(event) {
    this.setState({
      navPinned: false,
    });
  },

  render() {
    return (
      <div>
        {/*this.getMobileMenu()*/}
        <DesktopMenu navColor={this.state.navColor}/>
      </div>
    );
  }
});

export default MobileMenu;
