import React from 'react';

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
                <a href="">Meet Stephen</a>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
              <img src="http://bulma.io/images/placeholders/1280x960.png" alt=""/>
                <h3>Kevin Johnson</h3>
                <p>Title, Company, @twitter</p>
                <a href="">Meet Kevin</a>
              </div>
            </div>
            <div className="column">
              <div className="content has-text-centered">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt=""/>
                <h3>Graham & Oshkahn</h3>
                <p>Title, Company, @twitter</p>
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
