import React from 'react';

let TicketCallout = React.createClass({
  render() {
    return (
      <section className="section ticket-callout">
        <div className="container pull-up">
          <div className="box content">
            <div className="level">
              <div className="level-item has-text-centered">
                <h2>Rise is a place to be reminded of and connect with <a href="/about/">The Heart of Floating.</a></h2>
              </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
});

export default TicketCallout;
