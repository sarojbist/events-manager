import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './App.css';
import AddEvent from "./components/addEvent";
import EventsState from "./Context/Events/EventsState";
import eventsContext from "./Context/Events/EventsContext";

function App() {
  const [date, setDate] = useState(new Date());
  const [showAddPage, setShowAddPage] = useState(false);

  const context = useContext(eventsContext);
  if (!context) {
    // Handle the case where context is not available
    return <div>Error: Events context is not available</div>;
  }
  function changeValue(val) {
    setDate(val);
 }

  return (
   <EventsState>
   <div>
<div>
  <button onClick={() => setShowAddPage(true)}>Add Event</button>
<Calendar onChange = {changeValue}   value = {date} />
<p>The selected date is - {date.toLocaleDateString()}</p>
</div>
<div>
{/* <h2>{events.length > 0 && events[0].event}</h2> */}
</div>
   </div>
 {showAddPage && (<AddEvent gohome= {setShowAddPage} date={date}/>)}  
 </EventsState>
  );
}

export default App;
