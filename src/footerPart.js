import React from 'react'
import './footerPart.css'

export default function footerPart() {
  return (
    <footer>
    <div className='footerPart'>
        <h2 className="Contact-details">Contact Info</h2>
            <span>
                <i className="fa-solid fa-location-dot"></i> &nbsp; <b>Government Polytechnic Hyderabad, Masabtank, Asif Nagar-500028, Telangana</b>
            </span> <br/>
            <span>
                <i className="fa fa-phone"></i> &nbsp; <b>+91-020-25559200,020-25559201(Principal)</b>
            </span> <br/>
            <span>
                <i className="fa fa-envelope"></i> &nbsp; <b>principal@gptmasb.ac.in</b>
            </span>
            <div className="bottom-footer">
            <tt>
                <small>&copy; Copyright 2024. Designed and Developed by <b>QuantumMinds Alliance</b></small>
            </tt>
            </div>
    </div>
    </footer>
  )
}


