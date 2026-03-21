// EventManagement.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import EventModal from './EventModal';

const EventManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setModalOpen(true); // Open the modal when a date is clicked
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
  
      if (!response.ok) {
        throw new Error(`Error fetching events: ${response.statusText}`);
      }
  
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('Invalid content type. Expected JSON.');
        return; // Don't proceed further if the content type is not JSON.
      }
  
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Invalid response format: expected an array');
      }
  
      setEvents(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  

  const handleEventSave = async (eventName, eventDescription) => {
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: selectedDate.toDateString(),
          eventName,
          eventDescription,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error saving event: ${response.statusText}`);
      }

      console.log('Event saved successfully!');
      setModalOpen(false);
      fetchEvents();
    } catch (error) {
      console.error('Error saving event:', error.message);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Error deleting event: ${response.statusText}`);
      }

      console.log('Event deleted successfully!');
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error.message);
    }
  };

  const tileContent = ({ date }) => {
    const eventsForDate = events.filter((event) => event.date === date.toDateString());

    if (eventsForDate.length > 0) {
      return <p className="event-date">{eventsForDate.length}</p>;
    }

    return null;
  };

  return (
    <div className="admin-calendar-container">
      <Calendar
        onClickDay={handleDateClick} // Pass handleDateClick function to onClickDay prop
        value={selectedDate}
        tileContent={tileContent}
        className="admin-calendar"
      />
      {isModalOpen && (
        <EventModal
          date={selectedDate}
          existingEvent={events.find((event) => event.date === selectedDate.toDateString())}
          closeModal={() => setModalOpen(false)}
          handleEventSave={(eventName, eventDescription) =>
            handleEventSave(eventName, eventDescription)
          }
          handleDeleteEvent={(eventId) => handleDeleteEvent(eventId)}
        />
      )}
    </div>
  );
};

export default EventManagement;
