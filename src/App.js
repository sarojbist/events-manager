import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());

  
  function changeValue(val) {
    setDate(val);
 }
  return (
   <>
   <div>
<div>
  <
<Calendar onChange = {changeValue}   value = {date} />
<p>The selected date is - {date.toLocaleDateString()}</p>
</div>
<div>
  {/* I'm creating a form here so I can add events to the selected date */}
</div>
   </div>
   
   </>
  );
}

export default App;
