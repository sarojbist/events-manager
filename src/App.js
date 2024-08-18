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
      <div className="flex flex-col lg:flex-row justify-center items-start gap-[40px] py-[20px] w-[100vw]">
        <div>
          <div className="mx-auto flex justify-center items-center w-full px-[16px]">
            <Calendar onChange={changeValue} value={date} />
          </div>
          <p className="text-lg px-[16px]"> <button
            onClick={() => setShowAddPage(true)}
            className="py-2 px-4 my-[20px] bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4"
          >
            Add Event
          </button> on the date of <span className="text-pink-700"> {date.toLocaleDateString()}</span></p>
        </div>
        <div>
          <ShowEvents />
        </div>
      </div>
      {showAddPage && (<AddEvent gohome={setShowAddPage} date={date} />)}
    </EventsState>
  );
}

export default App;
