import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './App.css';
import AddEvent from "./components/addEvent";
import EventsState from "./Context/Events/EventsState";
import ShowEvents from "./components/showEvents";

function App() {
  const [date, setDate] = useState(new Date());
  const [showAddPage, setShowAddPage] = useState(false);

  function changeValue(val) {
    setDate(val);
 }

  return (
   <EventsState>
   <div className="flex justify-center items-start gap-[20px]">
<div>
  <button onClick={() => setShowAddPage(true)}>Add Event</button>
<Calendar onChange = {changeValue} value = {date} />
<p>The selected date is - {date.toLocaleDateString()}</p>
</div>
<div>

<ShowEvents />
</div>
   </div>
 {showAddPage && (<AddEvent gohome= {setShowAddPage} date={date}/>)}  
 </EventsState>
  );
}

export default App;
