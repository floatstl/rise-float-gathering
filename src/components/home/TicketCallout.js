import React from 'react';

let TicketCallout = React.createClass({
  render() {
    return (
      <section className="section ticket-callout">
        <div className="container pull-up">
          <div className="box content">
            <div className="level">
              <div className="level-item has-text-centered">
                <h2>Early bird tickets on sale through March 15th!</h2>
                <a className="button is-large is-pulled-right buy-now" href="https://rise.bazaarpass.com/products/2017" target="_blank">Buy Now</a>
              </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
});

export default TicketCallout;
