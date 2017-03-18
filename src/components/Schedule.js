import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import Header from './Header';
import Footer from './Footer';

import ConnectImage from '../assets/connect.png';
import DiscoverImage from '../assets/discover.png';
import Refresh from '../assets/refresh.png';
import AtPeaceFloatSpa from '../assets/atpeacefloatspa.png';
import SeoulTaco from '../assets/seoultacologo.png';

import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let Schedule = React.createClass({
    render() {
      return (
        <div id="outer-container">
          <Header/>
          <section className="section schedule">
            <div className="container">
              <h3 className="title is-2 has-text-centered">What to Expect</h3>
              <p className="has-text-centered">Throughout the weekend, you’ll meet with industry leaders and be inspired by the innovation and passion that surrounds you.</p>
              <div className="columns">
                <div className="column">
                  <div className="content has-text-centered">
                    <img className="circle" src={ConnectImage} alt="Rise Float Conference Speaker Stephen Johnson"/>
                    <h3>Connect</h3>
                    <p>On Friday, we’ll meet up for a networking happy hour at <a href="http://www.hotelignaciostl.com/" target="_blank">Hotel Ignacio</a>. You’ll meet industry leaders and passionate float center leaders.</p>
                  </div>
                </div>
                <div className="column">
                  <div className="content has-text-centered">
                  <img className="circle" src={DiscoverImage} alt="Rise Float Conference Speaker Kevin Johnson"/>
                    <h3>Discover</h3>
                    <p>Saturday will include informational float and wellness sessions, the opportunity to learn about community development, and keynotes from six inspiring industry leaders.</p>
                  </div>
                </div>
                <div className="column">
                  <div className="content has-text-centered">
                    <img className="circle" src={Refresh} alt="Rise Float Conference Speakers Graham Talley & Ashkahn Jahromi"/>
                    <h3>Refresh</h3>
                    <p>On Sunday, we’ll have the chance to sit back, relax and reflect. Take a moment to enjoy the community before heading back to daily life.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section schedule-details">
            <div className="container has-text-centered">
              <h3 className="title is-2 has-text-centered">Schedule</h3><br/>
              <BigCalendar
                 {...this.props}
                 style={{'height':'800px', 'overflow':'hidden'}}
                 defaultView={'agenda'}
                 defaultDate={new Date(2017, 3, 28)}
                 min={ new Date(2017, 3, 28, 8, 0, 0)}
                 max={new Date(2017, 3, 28, 22,0,0)}
                 events={[
                  {
                    'title': 'Rise Welcome Event at Triumph',
                    'start': new Date(2017, 3, 28, 18, 30, 0),
                    'end': new Date(2017, 3, 28, 21, 0, 0)
                  },

                  {
                    'title': 'Event Registration',
                    'start': new Date(2017, 3, 29, 8, 0, 0),
                    'end': new Date(2017, 3, 29, 9, 0, 0)
                  },

                  {
                    'title': 'Rise Event Day 1',
                    'start': new Date(2017, 3, 29, 9, 0, 0),
                    'end': new Date(2017, 3, 29, 17, 0, 0)
                  },

                  {
                    'title': 'Rise Happy Hour',
                    'start': new Date(2017, 3, 29, 17, 0, 0),
                    'end': new Date(2017, 3, 29, 19, 30, 0)
                  },
                  {
                    'title': 'Rise Breakfast and Connect',
                    'start': new Date(2017, 3, 30, 8, 30, 0),
                    'end': new Date(2017, 3, 30, 9, 30, 0, 0),
                    desc: 'Pre-meeting meeting, to prepare for the meeting'
                  },
                  {
                    'title': 'Rise Event Day 2',
                    'start': new Date(2017, 3, 30, 9, 30, 0),
                    'end': new Date(2017, 3, 30, 12, 0, 0, 0),
                    desc: 'Power lunch'
                  },
                ]}
               />
               <br/><br/><br/>
              <AddToCalendar
                event={{
                  title: 'Rise: Float Community Gathering',
                  description: 'Rise is a gathering of float industry enthusiasts and professionals to connect, discover and relax. Learn more and purchase tickets at http://riserfloatgathering.com',
                  location: '4240 Duncan Ave St. Louis, MO 63110',
                  startTime: '2017-04-28T19:00:00-04:00',
                  endTime: '2017-04-30T19:00:00-04:00'
                }}
                buttonTemplate={{ 'calendar-plus-o': 'left' }}
                className="has-text-centered"/><br/><br/><br/>
                <div className="container has-text-centered">
                  <h4 className="title is-2">Saturday Lunch Sponsored By:</h4>
                  <div className="columns">
                    <div className="column">
                      <a href="http://atpeacefloatationspa.com/" target="_blank"><img style={{'height':'200px'}} src={AtPeaceFloatSpa} alt="At Peace Float Cabins"/></a>
                    </div>
                    <div className="column">
                      <div className="content">
                        <a href="http://www.seoultaco.com/" target="_blank"><img style={{'height':'300px'}} src={SeoulTaco} alt="Seoul Taco"/></a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </section>
        <Footer/>
      </div>
      );
    }
});

export default Schedule;
