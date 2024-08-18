import React, { useState, useContext, useEffect } from 'react';
import eventsContext from '../Context/Events/EventsContext';

const AddEvent = ({ gohome, date, eventToEdit }) => {
  const [newEvent, setNewEvent] = useState({ event: "", category: "", message: "" });
  const eve = useContext(eventsContext);

  useEffect(() => {
    if (eventToEdit) {
      setNewEvent({
        event: eventToEdit.event,
        category: eventToEdit.category,
        message: eventToEdit.message,
      });
    }
  }, [eventToEdit]);

  function handelInputChange(e) {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (eventToEdit) {
      const updatedEvents = eve.events.map((ev) => 
        ev.id === eventToEdit.id ? { ...newEvent, date, id: eventToEdit.id } : ev
      );
      eve.setEvents(updatedEvents);
    } else {
      const eventToAdd = { ...newEvent, date, id: eve.events.length + 1 };
      eve.setEvents([...eve.events, eventToAdd]);
    }

    setNewEvent({ event: "", category: "", message: "" });
    gohome(false);
  }

  return (
    <div className='fixed top-0 left-0 bg-white w-full h-full flex justify-center items-center z-50'>
      <form className='w-[80%] lg:w-[50%] my-[40px] mx-4' onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-[20px] relative">
          <label
            htmlFor="eventName"
            className="absolute top-0 left-0 text-black text-sm font-semibold">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="event"
            placeholder="Name the Event"
            required
            value={newEvent.event}
            onChange={handelInputChange}
            className="w-full border-b-[2px] pt-[40px] border-[#aaaaaa] text-black outline-none transition-colors duration-900 ease-in-out p-[5px] focus:border-red-500"
          />
        </div>

        <div className="w-full flex flex-col my-[20px] relative">
          <label
            htmlFor="selection"
            className="absolute top-0 left-0 text-black text-sm font-semibold">Select a category of an Event</label>
          <select
            id="selection"
            name="category"
            value={newEvent.category}
            onChange={handelInputChange}
            className="w-full border-b-[2px] pt-[40px] border-[#aaaaaa] text-black outline-none transition-colors duration-900 ease-in-out py-[5px] focus:border-red-500 bg-white"
          >
            <option disabled value="">Choose Your Category</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="family">Family</option>
          </select>
        </div>

        <div className="w-full flex flex-col my-[20px] relative">
          <label
            htmlFor="message"
            className="absolute top-0 left-0 text-black text-sm font-semibold">Describe the Event</label>
          <textarea
            onChange={handelInputChange}
            id="message"
            name="message"
            placeholder="Your Text Here..."
            required
            value={newEvent.message}
            className="w-full border-b-[2px] pt-[40px] border-[#aaaaaa] text-black outline-none transition-colors duration-900 ease-in-out p-[5px] focus:border-red-500 resize-none"
          />
        </div>

        <div className='w-full flex justify-between'>
          <button 
            onClick={() => gohome(false)}
            className="py-[10px] px-[25px] bg-[#ff0043] hover:bg-[#CC0036] text-white border-none rounded-lg">Cancel Event</button>
          <button type="submit" 
            className="py-[10px] px-[25px] bg-[#ff0043] hover:bg-[#CC0036] text-white border-none rounded-lg">
            {eventToEdit ? "Update Event" : "Add Event"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddEvent;
