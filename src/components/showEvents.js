import React, { useContext } from 'react';
import eventsContext from '../Context/Events/EventsContext';

const ShowEvents = () => {
    const { events } = useContext(eventsContext);

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
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{event.event}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{event.category}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{event.message}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">{new Date(event.date).toLocaleString()}</td>
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
