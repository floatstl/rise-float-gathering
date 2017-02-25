import React from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import Headroom from 'react-headroom';
import './styles/App.css';
import logo from './assets/rise-float-community-gathering-logo-white.png';

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

    var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: 'initial',
        right: '36px',
        top: '36px',
        zIndex: '999',
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmCrossButton: {
        height: '44px',
        width: '44px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0)'
      }
    }
    return (
      <MenuWrap wait={20} side={this.state.side}>
        <Menu id={this.state.currentMenu} styles={ styles } pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
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
      <div id="outer-container">
        {this.getMobileMenu()}
        <Headroom>
          <nav className="nav">
            <div className="container">
              <div className="columns">
                <div className="column is-one-fifth">
                  <a href="/"><img src={logo} alt="Rise - A Float Community Gathering Logo White" /></a>
                </div>
                <div className="column is-one-fifth">
                  <a href="/schedule/">Schedule</a>
               </div>
               <div className="column is-one-fifth">
                <a href="/speakers/">Speakers</a>
              </div>
              <div className="column is-one-fifth">
               <a href="/details/">Details</a>
             </div>
             <div className="column is-one-fifth">
              <a href="https://rise.bazaarpass.com/products/2017">Buy Your Tickes</a>
            </div>
              </div>
            </div>
          </nav>
        </Headroom>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
