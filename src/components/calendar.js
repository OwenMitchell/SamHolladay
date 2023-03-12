import React from 'react';

export default function Calendar(){
  return (
    <div class="App-calendar">
      <h3>Dates</h3>
      <img class="calendar-bracket" src={require('../images/bracket_open_down_white_on_black.jpg')}/>
      <Event venue="Horseshoe" date="Mar 3"></Event>
      <Event venue="Horseshoe" date="Mar 3"></Event>
      <Event venue="Horseshoe" date="Mar 3"></Event>
      <Event venue="Horseshoe" date="Mar 3"></Event>
      <img class="calendar-bracket" src={require('../images/bracket_open_up_white_on_black.jpg')} />
    </div>
  );
}

function Event(props){
  return (
    <div class="App-calendar-event">
      <div class="App-calendar-event-venue">{props.venue}</div>
      <div class="App-calendar-event-date">{props.date}</div>
    </div>
  );
}