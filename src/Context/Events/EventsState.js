import eventsContext from "./EventsContext";
import { useState } from "react";

const EventsState = (props) => {
    const[events, setEvents] = useState([]);

    return (
        <eventsContext.Provider value={{events, setEvents}}>
            {props.children}
        </eventsContext.Provider>
    )
}
export default EventsState;