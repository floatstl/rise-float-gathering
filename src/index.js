import React from 'react';
import ReactDOM from 'react-dom';
import MobileMenu from './components/header/MobileMenu';
import Hero from './components/home/Hero';
import './styles/App.css';

let App = React.createClass({

  render() {
    return (
      <div id="outer-container">
        <section className="hero home">
          <MobileMenu/>
          <Hero/>
        </section>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
