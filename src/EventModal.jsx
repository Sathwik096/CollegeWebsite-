// EventModal.jsx
import React, { useState, useEffect } from 'react';

const EventModal = ({ date, existingEvent, closeModal, handleEventSave, handleDeleteEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  useEffect(() => {
    if (existingEvent) {
      setEventName(existingEvent.eventName);
      setEventDescription(existingEvent.eventDescription);
    } else {
      setEventName('');
      setEventDescription('');
    }
  }, [date, existingEvent]);

  const handleSaveEvent = () => {
    handleEventSave(eventName, eventDescription);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h3>{existingEvent ? 'Edit Event' : 'Add Event'} for {date.toDateString()}</h3>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Enter event name"
        />
        <textarea
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          placeholder="Enter event description"
        />
        <button onClick={handleSaveEvent}>
          {existingEvent ? 'Update Event' : 'Save Event'}
        </button>
        {existingEvent && (
          <div>
            <button onClick={() => handleDeleteEvent(existingEvent._id)} className="delete-event-btn">
              Delete Event
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventModal;
