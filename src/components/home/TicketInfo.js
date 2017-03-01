import React from 'react';

let TicketInfo = React.createClass({
  render() {
    return (
      <section className="section ticket-info">
        <div className="container has-text-centered">
          <h3 className="title is-2">Buy Tickets</h3>
          <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter content">
              <p>Gather with us this April to experience Rise. Early Bird tickets are on sale now through March 15.</p><br/>
              <a className="button is-large" href="https://rise.bazaarpass.com/products/2017" target="_blank">Buy Tickets</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

export default TicketInfo;
