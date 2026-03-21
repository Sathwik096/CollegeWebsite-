import React, {useRef} from 'react';

export default function Notification(props) {

  const marqueeRef = useRef(null);
  
    const notificationStyle={
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        color: 'hsl(240, 70%, 35%)',
        margin: '20px',
        // display: 'inline',
    }
  return (
    <div style={notificationStyle} onMouseOver={() => marqueeRef.current.stop()} onMouseOut={() => marqueeRef.current.start()}>
      <marquee behavior="scroll" direction="left" ref={marqueeRef}><b>{props.notificationText}</b></marquee>
    </div>
  )
}
