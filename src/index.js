import React from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import Headroom from 'react-headroom';
import './styles/App.css';

let App = React.createClass({

  getMobileMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = [
      <a key="0" href=""><span>Schedule</span></a>,
      <a key="1" href=""><span>Speakers</span></a>,
      <a key="2" href=""><span>Details</span></a>,
      <a key="3" href=""><span>Get Tickets</span></a>,
      <br key="4"/>,
      <a key="5" href=""><span>Resources</span></a>,
      <a key="6" href=""><span>About Rise</span></a>,
      <a key="7" href=""><span>2017 Volunteers</span></a>,
      <a key="8" href=""><span>2017 Vendors & Sponsors</span></a>,
      <a key="9" href=""><span>Float STL</span></a>,
      <a key="10" href=""><span>Meet the Team</span></a>,
      <br key="11"/>,
      <a key="12" href=""><span>Connect With Us</span></a>,
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
        <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
          {items}
        </Menu>
      </MenuWrap>
    );
  },

  getInitialState() {
    return {
      currentMenu: 'slide',
      side: 'right'
    };
  },

  render() {
    return (
      <div id="outer-container" style={{height: '100%'}}>
        {this.getMobileMenu()}
        <Headroom>
          <h1>You can put anything you'd like inside the Headroom Component</h1>
        </Headroom>
        
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
