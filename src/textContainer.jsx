import React, {useRef} from 'react';

export default function TextContainer(props) {
  const textStyle={
  border: `10px solid ${props.BorderColor || 'green'}`,
  height:'330px'
  }

  const marqueeRef = useRef(null);

  const imageContainer={
    position: 'absolute',
    transform: 'translateX(-50%)',  /* Center horizontally */
    width: "12vh" /* Adjust the size of the circular image */,
    height: "12vh",
    borderRadius: "50%" /* Creates a circular clipping mask */,
    top:'-40px',
  }

  return (
    <div className='textContainer' style={textStyle} onMouseOver={() => marqueeRef.current.stop()} onMouseOut={() => marqueeRef.current.start()}>
      <img src={props.ContainerImage} alt="titleImage" style={imageContainer} />
      <h4 style={{color:'black',textAlign:'center',fontFamily:'times new roman',fontWeight:'bold',marginTop:'8px'}}>{props.title}</h4>
      <marquee direction="up" ref={marqueeRef} scrollamount="1.8"><b>{props.ContainerData}</b></marquee>
    </div>
  )
}
