import React,{useState, useContext} from 'react';
import eventsContext from '../Context/Events/EventsContext';

const AddEvent = ({gohome, date}) => {
  const[newEvent, setNewEvent] = useState({event: "", category: "", message: ""});
const eve = useContext(eventsContext);
  function handelInputChange(e) {
    const {name, value} = e.target;
    setNewEvent({...newEvent, [name]: value});
    console.log(newEvent);
  }

  function addEvent(e) {
    e.preventDefault();
    const eventtoAdd = {...newEvent, date, id: eve.events.length + 1}
    eve.setEvents([...eve.events, eventtoAdd]);
    setNewEvent({event: "", category: "", message: ""});
    console.log("added data successfully");
    gohome(false)
  }
  return (
    <div className='absolute top-0 bg-white w-[100vw] flex justify-center items-center'>
      <form className='lg:w-[50%] my-[40px]'>
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-[20px] relative ">
          <label
            htmlFor="eventName"
            className="absolute top-0 left-0 text-black text-sm font-semibold">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="event"
            placeholder="Name the Event"
            required
            onChange={handelInputChange}
            className="w-full border-b-[2px] pt-[40px] border-[#aaaaaa] text-black outline-none transition-colors duration-900 ease-in-out p-[5px] focus:border-red-500" />
        </div>

        <div className="w-full flex flex-col my-[20px] relative">
          <label
            htmlFor="selection"
            className="absolute top-0 left-0 text-black text-sm font-semibold"
          >Select a category of an Event</label>
          <select id="selection" name="category"
            onChange={handelInputChange}
            className="option-big w-full border-b-[2px] pt-[40px] border-[#aaaaaa] text-black outline-none transition-colors duration-900 ease-in-out py-[5px] focus:border-red-500">
            <option disabled selected>Choose Your Reason</option>
            <option value="business">Personal</option>
            <option value="ticket">Work</option>
            <option value="project">Family</option>
          </select>
        </div>

        <div className="w-full flex flex-col my-[20px] relative">
          <label
            htmlFor="message"
            className="absolute top-0 left-0 text-black text-sm font-semibold"
          >Describe the Event</label>
          <textarea
            onChange={handelInputChange}
            id="message"
            name="message"
            placeholder="Your Text Here..."
            required
            className="w-full border-b-[2px] pt-[40px] border-[#aaaaaa] text-black outline-none transition-colors duration-900 ease-in-out p-[5px] focus:border-red-500 resize-none" />
        </div>

        <div className='w-full flex justify-between'>
        <button 
        onClick={() => gohome(false)}
        className="py-[10px] px-[25px] bg-[#ff0043] hover:bg-[#CC0036] text-white border-none rounded-lg">Cancel Event</button>
        <button type="submit" 
        onClick = {addEvent}
        className="py-[10px] px-[25px] bg-[#ff0043] hover:bg-[#CC0036] text-white border-none rounded-lg">Add Event</button>
        </div>
      </form>
      
    </div>
  )
}

export default AddEvent;