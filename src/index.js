import React from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import Headroom from 'react-headroom';
import './styles/App.css';
import logo from './assets/rise-logo-white.png';

let App = React.createClass({

  getMobileMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = [
      <span key="0" className="title is-3 bold">General Information</span>,
      <a key="1" href="/schedule">Schedule</a>,
      <a key="2" href="/speakers">Speakers</a>,
      <a key="3" href="/details">Details</a>,
      <br key="4"/>,
      <a key="5" className="button is-large" href="https://rise.bazaarpass.com/products/2017">Get Tickets</a>,
      <br key="6"/>,
      <hr key="6"/>,
      <br key="7"/>,
      <span key="8" className="title is-4 bold">Resources</span>,
      <a key="9" style={{fontSize: '1.2rem'}} href=""><span>About Rise</span></a>,
      <a key="10" style={{fontSize: '1.2rem'}} href=""><span>Volunteers</span></a>,
      <a key="11" style={{fontSize: '1.2rem'}} href=""><span>Vendors & Sponsors</span></a>,
      <a key="12" style={{fontSize: '1.2rem'}} href=""><span>Float STL</span></a>,
      <a key="13" style={{fontSize: '1.2rem'}} href=""><span>Meet the Team</span></a>,
      <hr key="6"/>,
      <a key="15" href="/"><span className="title is-4 bold">Connect With Us</span></a>,
      <span key="18" className="icon"><i className="fa fa-facebook" aria-hidden="true"></i></span>,
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
        top: '40px',
        zIndex: '999',
      },
      bmBurgerBars: {
        background: this.state.mobileNavColor
      },
      bmCrossButton: {
        height: '44px',
        width: '44px'
      },
      bmCross: {
        background: 'white'
      },
      bmMenu: {
        background: 'rgba(244,187,69,1)',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: 'white'
      },
      bmItemList: {
        color: 'white',
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
        mobileNavColor: 'rgba(244,187,69,1)',
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
      <div id="outer-container">
        {this.getMobileMenu()}
        <section className="hero home">
        <Headroom onScroll={this.handleScroll} onPin={this.handelPin} onUnpin={this.handelUnPin}>
          <nav className={this.state.navColor + ' nav'}>
            <div className="container">
              <div className="columns">
                <div className="column is-one-fourth logo">
                  <a href="/"><img src={logo} alt="Rise - A Float Community Gathering Logo White" /></a>
                </div>
                <div className="column is-one-fourth menu-item">
                  <a href="/schedule/">Schedule</a>
                </div>
                <div className="column is-one-fourth menu-item">
                  <a href="/speakers/">Speakers</a>
                </div>
               <div className="column is-one-fourth menu-item">
                <a className="button is-large" href="https://rise.bazaarpass.com/products/2017">Buy Your Tickets</a>
              </div>
              </div>
            </div>
          </nav>
        </Headroom>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Hero title
              </h1>
              <h2 className="subtitle">
                Hero subtitle
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
        <div className="container">
          <div className="content">
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
            <h2>Second level</h2>
            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
            <ul>
              <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
              <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
              <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
              <li>Ut non enim metus.</li>
            </ul>
            <h3>Third level</h3>
            <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
            <ol>
              <li>Donec blandit a lorem id convallis.</li>
              <li>Cras gravida arcu at diam gravida gravida.</li>
              <li>Integer in volutpat libero.</li>
              <li>Donec a diam tellus.</li>
              <li>Aenean nec tortor orci.</li>
              <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
              <li>Vivamus maximus ultricies pulvinar.</li>
            </ol>
            <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
            <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
            <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
            <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
            <h4>Fourth level</h4>
            <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
            <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
            <table>
              <thead>
                <tr>
                  <th>One</th>
                  <th>Two</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Three</td>
                  <td>Four</td>
                </tr>
                <tr>
                  <td>Five</td>
                  <td>Six</td>
                </tr>
                <tr>
                  <td>Seven</td>
                  <td>Eight</td>
                </tr>
                <tr>
                  <td>Nine</td>
                  <td>Ten</td>
                </tr>
                <tr>
                  <td>Eleven</td>
                  <td>Twelve</td>
                </tr>
              </tbody>
            </table>
            <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
            <h5>Fifth level</h5>
            <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
            <h6>Sixth level</h6>
            <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
            <h2>Second level</h2>
            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
            <ul>
              <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
              <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
              <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
              <li>Ut non enim metus.</li>
            </ul>
            <h3>Third level</h3>
            <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
            <ol>
              <li>Donec blandit a lorem id convallis.</li>
              <li>Cras gravida arcu at diam gravida gravida.</li>
              <li>Integer in volutpat libero.</li>
              <li>Donec a diam tellus.</li>
              <li>Aenean nec tortor orci.</li>
              <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
              <li>Vivamus maximus ultricies pulvinar.</li>
            </ol>
            <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
            <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
            <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
            <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
            <h4>Fourth level</h4>
            <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
            <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
            <table>
              <thead>
                <tr>
                  <th>One</th>
                  <th>Two</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Three</td>
                  <td>Four</td>
                </tr>
                <tr>
                  <td>Five</td>
                  <td>Six</td>
                </tr>
                <tr>
                  <td>Seven</td>
                  <td>Eight</td>
                </tr>
                <tr>
                  <td>Nine</td>
                  <td>Ten</td>
                </tr>
                <tr>
                  <td>Eleven</td>
                  <td>Twelve</td>
                </tr>
              </tbody>
            </table>
            <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
            <h5>Fifth level</h5>
            <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
            <h6>Sixth level</h6>
            <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
            <h2>Second level</h2>
            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
            <ul>
              <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
              <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
              <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
              <li>Ut non enim metus.</li>
            </ul>
            <h3>Third level</h3>
            <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
            <ol>
              <li>Donec blandit a lorem id convallis.</li>
              <li>Cras gravida arcu at diam gravida gravida.</li>
              <li>Integer in volutpat libero.</li>
              <li>Donec a diam tellus.</li>
              <li>Aenean nec tortor orci.</li>
              <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
              <li>Vivamus maximus ultricies pulvinar.</li>
            </ol>
            <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
            <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
            <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
            <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
            <h4>Fourth level</h4>
            <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
            <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
            <table>
              <thead>
                <tr>
                  <th>One</th>
                  <th>Two</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Three</td>
                  <td>Four</td>
                </tr>
                <tr>
                  <td>Five</td>
                  <td>Six</td>
                </tr>
                <tr>
                  <td>Seven</td>
                  <td>Eight</td>
                </tr>
                <tr>
                  <td>Nine</td>
                  <td>Ten</td>
                </tr>
                <tr>
                  <td>Eleven</td>
                  <td>Twelve</td>
                </tr>
              </tbody>
            </table>
            <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
            <h5>Fifth level</h5>
            <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
            <h6>Sixth level</h6>
            <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>

          </div>
        </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
              </p>
              <p>
                <a className="icon" href="https://github.com/jgthms/bulma">
                  <i className="fa fa-github"></i>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
