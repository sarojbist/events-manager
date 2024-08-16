import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './App.css';
import AddEvent from "./components/addEvent";

function App() {
  const [date, setDate] = useState(new Date());
  const [showAddPage, setShowAddPage] = useState(false);

  
  function changeValue(val) {
    setDate(val);
 }

  return (
   <>
   <div>
<div>
  <button onClick={() => setShowAddPage(true)}>Add Event</button>
<Calendar onChange = {changeValue}   value = {date} />
<p>The selected date is - {date.toLocaleDateString()}</p>
</div>
<div>
  {/* I'm creating a form here so I can add events to the selected date */}
</div>
   </div>
 {showAddPage && (<AddEvent gohome= {setShowAddPage}/>)}  
   </>
  );
}

export default App;
