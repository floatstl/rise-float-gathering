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
          <section className="section schedule-details">
            <div className="container has-text-centered">
              <h3 className="title is-2 has-text-centered">Schedule</h3><br/>
              <BigCalendar
                 {...this.props}
                 style={{'height':'668px'}}
                 defaultView={'agenda'}
                 defaultDate={new Date(2017, 3, 28)}
                 min={ new Date(2017, 3, 28, 8, 0, 0)}
                 max={new Date(2017, 3, 28, 22,0,0)}
                 views={['agenda']}
                 toolbar={false}
                 events={[
                  {
                    'title': 'Rise Welcome Event - Baiku @ Hotel Ignacio - http://baikustl.com | 3419 Olive',
                    'start': new Date(2017, 3, 28, 18, 30, 0),
                    'end': new Date(2017, 3, 28, 21, 0, 0)
                  },
                  {
                    'title': 'Event Registration @4240 - http://www.at4240.com/ | 4240 Duncan',
                    'start': new Date(2017, 3, 29, 8, 15, 0),
                    'end': new Date(2017, 3, 29, 8, 45, 0)
                  },
                  {
                    'title': 'Opening Remarks',
                    'start': new Date(2017, 3, 29, 9, 15, 0),
                    'end': new Date(2017, 3, 29, 9, 30, 0)
                  },
                  {
                    'title': 'Floating and the Broadening of Empathy, Altruism, and Love | Stephen Johnson',
                    'start': new Date(2017, 3, 29, 9, 30, 0),
                    'end': new Date(2017, 3, 29, 10, 0, 0)
                  },
                  {
                    'title': 'In the Province of My Mind | Lee Perry',
                    'start': new Date(2017, 3, 29, 10, 0, 0),
                    'end': new Date(2017, 3, 29, 10, 35, 0)
                  },
                  {
                    'title': 'Break',
                    'start': new Date(2017, 3, 29, 10, 35, 0),
                    'end': new Date(2017, 3, 29, 11, 0, 0)
                  },
                  {
                    'title': 'Why Graham and Ashkahn are Probably Wrong About Almost Everything | Graham Talley and Ashkahn Jahromi',
                    'start': new Date(2017, 3, 29, 11, 0, 0),
                    'end': new Date(2017, 3, 29, 11, 45, 0)
                  },
                  {
                    'title': 'Healing Power of Epsom Salt',
                    'start': new Date(2017, 3, 29, 11, 45, 0),
                    'end': new Date(2017, 3, 29, 12, 30, 0)
                  },
                  {
                    'title': 'Lunch sponsored by At Peace Float Spas provided by Seoul Taco',
                    'start': new Date(2017, 3, 29, 12, 30, 0),
                    'end': new Date(2017, 3, 29, 14, 15, 0)
                  },
                  {
                    'title': 'Movement/Sound',
                    'start': new Date(2017, 3, 29, 14, 15, 0),
                    'end': new Date(2017, 3, 29, 14, 30, 0)
                  },
                  {
                    'title': 'Seeing in the Dark | Kevin Johnson',
                    'start': new Date(2017, 3, 29, 14, 30, 0),
                    'end': new Date(2017, 3, 29, 15, 15, 0)
                  },
                  {
                    'title': 'Floating to Enlightenment | Richard Bonk',
                    'start': new Date(2017, 3, 29, 15, 15, 0),
                    'end': new Date(2017, 3, 29, 16, 0, 0)
                  },
                  {
                    'title': 'My Journey | Gloria Morris',
                    'start': new Date(2017, 3, 29, 16, 0, 0),
                    'end': new Date(2017, 3, 29, 16, 30, 0)
                  },
                  {
                    'title': 'Happy Hour - Venture Cafe at @4240',
                    'start': new Date(2017, 3, 29, 16, 30, 0),
                    'end': new Date(2017, 3, 29, 18, 30, 0)
                  },
                  {
                    'title': 'Morning Yoga',
                    'start': new Date(2017, 3, 30, 7, 30, 0),
                    'end': new Date(2017, 3, 30, 8, 30, 0)
                  },
                  {
                    'title': 'Breakfast on site from Comet Coffee - http://cometcoffeestl.com/',
                    'start': new Date(2017, 3, 30, 8, 0, 0),
                    'end': new Date(2017, 3, 30, 9, 0, 0),
                    'desc': 'Pre-meeting meeting, to prepare for the meeting'
                  },
                  {
                    'title': 'Movement',
                    'start': new Date(2017, 3, 30, 9, 0, 0),
                    'end': new Date(2017, 3, 30, 9, 30, 0)
                  },
                  {
                    'title': 'Art of the Float Podcast - Discussion w Dylan Calm and Amy Grimes',
                    'start': new Date(2017, 3, 30, 9, 30, 0),
                    'end': new Date(2017, 3, 30, 10, 15, 0)
                  },
                  {
                    'title': 'Ambassador Panel',
                    'start': new Date(2017, 3, 30, 10, 45, 0),
                    'end': new Date(2017, 3, 30, 11, 30, 0)
                  },
                  {
                    'title': 'Closing Remarks',
                    'start': new Date(2017, 3, 30, 11, 30, 0),
                    'end': new Date(2017, 3, 30, 12, 0, 0)
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
                  <h4 className="title is-3">Saturday Lunch Sponsored By:</h4>
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
          <section className="section schedule-page">
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
        <Footer/>
      </div>
      );
    }
});

export default Schedule;
