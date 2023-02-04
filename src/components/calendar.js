export default function Calendar(){
  return (
    <div class="App-calendar">
      <span>Dates</span>
      <Event venue="Horseshoe" date="Mar 3"></Event>
      <Event venue="Horseshoe" date="Mar 3"></Event>
      <Event venue="Horseshoe" date="Mar 3"></Event>
      <Event venue="Horseshoe" date="Mar 3"></Event>
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