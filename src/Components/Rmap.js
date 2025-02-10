import React from 'react';
import './rmap.css';

export default function Rmap() {
  return (
    <div className="responsive-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0621960966228!2d78.32381267493642!3d17.45673698344228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930582182d4b%3A0x694f8154c8cc343!2sUniversity%20of%20Hyderabad!5e0!3m2!1sen!2sin!4v1733027155754!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
