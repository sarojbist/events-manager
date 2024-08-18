import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShowEvents from './showEvents';
import eventsContext from '../Context/Events/EventsContext';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

// Mock the context and its methods
const mockEvents = [
    { id: 1, event: 'Meeting', category: 'work', message: 'Work meeting', date: new Date() },
    { id: 2, event: 'Birthday', category: 'personal', message: 'John’s birthday', date: new Date() }
];

const mockSetEvents = jest.fn();

const renderWithContext = (component) => {
    return render(
        <eventsContext.Provider value={{ events: mockEvents, setEvents: mockSetEvents }}>
            {component}
        </eventsContext.Provider>
    );
};

test('renders the ShowEvents component with initial events', () => {
    renderWithContext(<ShowEvents />);
    expect(screen.getByText(/Event/i)).toBeInTheDocument();
    expect(screen.getByText(/Category/i)).toBeInTheDocument();
    expect(screen.getByText(/Message/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Options/i)).toBeInTheDocument();
});

test('filters events by selected category', () => {
    renderWithContext(<ShowEvents />);

    // Initially show all events
    expect(screen.getByText('Meeting')).toBeInTheDocument();
    expect(screen.getByText('Birthday')).toBeInTheDocument();

    // Click to filter by 'personal'
    fireEvent.click(screen.getByText('Personal'));
    expect(screen.queryByText('Meeting')).not.toBeInTheDocument();
    expect(screen.getByText('Birthday')).toBeInTheDocument();

    // Click to filter by 'work'
    fireEvent.click(screen.getByText('Work'));
    expect(screen.getByText('Meeting')).toBeInTheDocument();
    expect(screen.queryByText('Birthday')).not.toBeInTheDocument();
});

test('opens AddEvent component for editing an event', () => {
    renderWithContext(<ShowEvents />);

    // Trigger edit for the first event
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));

    // Check if AddEvent is rendered (you may need to adjust this based on how AddEvent is rendered)
    expect(screen.getByText('AddEvent')).toBeInTheDocument(); // Adjust this based on AddEvent component rendering
});

test('deletes an event and updates the event list', () => {
    renderWithContext(<ShowEvents />);

    // Initial count of events
    expect(screen.getByText('Meeting')).toBeInTheDocument();
    expect(screen.getByText('Birthday')).toBeInTheDocument();

    // Trigger delete for the first event
    fireEvent.click(screen.getByRole('button', { name: /trash/i }));

    // Check if the event has been removed
    expect(screen.queryByText('Meeting')).not.toBeInTheDocument();
    // Verify if mockSetEvents was called with the correct updated events
    expect(mockSetEvents).toHaveBeenCalled();
    expect(mockSetEvents).toHaveBeenCalledWith([
        { id: 1, event: 'Birthday', category: 'personal', message: 'John’s birthday', date: new Date() }
    ]);
});
