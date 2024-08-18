// I have no experience with testing. I'm using ChatGPT for testing my components.

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddEvent from './addEvent'; 
import eventsContext from '../Context/Events/EventsContext';

const mockEventsContext = {
  events: [],
  setEvents: jest.fn(),
};

describe('AddEvent Component', () => {
  const mockGohome = jest.fn();
  const date = '2023-08-20';

  test('renders the form with initial empty fields', () => {
    render(
      <eventsContext.Provider value={mockEventsContext}>
        <AddEvent gohome={mockGohome} date={date} />
      </eventsContext.Provider>
    );

    // Check if the form fields are rendered with initial empty values
    expect(screen.getByLabelText(/Event Name/i)).toHaveValue('');
    expect(screen.getByLabelText(/Select a category/i)).toHaveValue('');
    expect(screen.getByLabelText(/Describe the Event/i)).toHaveValue('');
  });

  test('handles input changes', () => {
    render(
      <eventsContext.Provider value={mockEventsContext}>
        <AddEvent gohome={mockGohome} date={date} />
      </eventsContext.Provider>
    );

    // Simulate user typing into the Event Name input
    const eventNameInput = screen.getByLabelText(/Event Name/i);
    fireEvent.change(eventNameInput, { target: { value: 'New Event' } });
    expect(eventNameInput).toHaveValue('New Event');

    // Simulate user selecting a category
    const categorySelect = screen.getByLabelText(/Select a category/i);
    fireEvent.change(categorySelect, { target: { value: 'work' } });
    expect(categorySelect).toHaveValue('work');

    // Simulate user typing into the Describe the Event textarea
    const messageTextarea = screen.getByLabelText(/Describe the Event/i);
    fireEvent.change(messageTextarea, { target: { value: 'This is a test event' } });
    expect(messageTextarea).toHaveValue('This is a test event');
  });

  test('submits the form and adds a new event', () => {
    render(
      <eventsContext.Provider value={mockEventsContext}>
        <AddEvent gohome={mockGohome} date={date} />
      </eventsContext.Provider>
    );

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/Event Name/i), { target: { value: 'New Event' } });
    fireEvent.change(screen.getByLabelText(/Select a category/i), { target: { value: 'work' } });
    fireEvent.change(screen.getByLabelText(/Describe the Event/i), { target: { value: 'This is a test event' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Add Event/i));

    // Check that the setEvents function was called once
    expect(mockEventsContext.setEvents).toHaveBeenCalledTimes(1);

    // Check that gohome was called with false to navigate back home
    expect(mockGohome).toHaveBeenCalledWith(false);
  });
});
