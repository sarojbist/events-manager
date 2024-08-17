import React, { useContext } from 'react';
import eventsContext from '../Context/Events/EventsContext';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ShowEvents = () => {
    const { events, setEvents } = useContext(eventsContext);

    const handelDeleteEvent = (id) => {
        const updatedEvents = events
            .filter((event) => event.id !== id)
            .map((event, index) => ({
                ...event,
                id: index + 1
            }));
        setEvents(updatedEvents);
    };

    return (
        <div className="overflow-x-auto">
            {events && events.length > 0 ? (
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-700">Event</th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-700">Category</th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-700">Message</th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-700">Date</th>
                            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-700">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <tr key={event.id} className="hover:bg-gray-100">
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{event.event}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{event.category}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{event.message}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{new Date(event.date).toLocaleString()}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                                    <div className="flex items-center space-x-4">
                                        <button>
                                            <FaEdit className="text-blue-500 hover:text-blue-700" />
                                        </button>
                                        <button onClick={() => handelDeleteEvent(event.id)}>
                                            <FaTrashAlt className="text-red-500 hover:text-red-700" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-500">No events to display</p>
            )}
        </div>
    );
}

export default ShowEvents;
