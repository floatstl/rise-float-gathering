import React from 'react';
import Collapsible from 'react-collapsible';

let Speakers = React.createClass({
  render() {
    return (
      <section className="section speakers">
        <div className="container">
          <h3 className="title is-2 has-text-centered">Speakers</h3>
          <div className="columns">
            <div className="column">
              <div className="content has-text-centered">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt=""/>
                <h3>Stephen Johnson</h3>
                <p>Title, Company, @twitter</p>
                <Collapsible trigger="Meet Stephen">
                 <p>This is the collapsible content. It can be any element or React component you like.</p>
                 <p>It can even be another Collapsible component. Check out the next section!</p>
               </Collapsible>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
              <img src="http://bulma.io/images/placeholders/1280x960.png" alt=""/>
                <h3>Kevin Johnson</h3>
                <p>Company, @twitter</p>
                <a href="">Meet Kevin</a>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt=""/>
                <h3>Graham & Oshkahn</h3>
                <p>Company, @twitter</p>
                <a href="">Meet Graham & Oshkahn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

export default Speakers;
