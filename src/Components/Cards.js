import React from 'react';
import './cards.css';

export default function Cards() {
  return (
    <div>
        <div>
            <h1 className=" p-4 " style={{textAlign:"center"}}>Our Services</h1>
        </div>
        <div className="services">
            <div className='card'>
                <div className='icon'>
                    <i className='fas fa-calendar'></i>
                </div>
                <h3 style={{color:"#c94f4f", marginBottom:"20px"}}>Planning</h3>
                <p>
                    Financial management is the business function concerned with profitability expenses cash and credit
                </p>
                {/* <a href=" " class="button">Know More</a> */}

            </div>
            <div className='card'>
                <div className='icon'>
                    <i className='fas fa-wrench'></i>
                </div>
                <h3 style={{color:"#c94f4f", marginBottom:"20px"}}>Renovation</h3>
                <p>
                    Financial management is the business function concerned with profitability expenses cash and credit
                </p>
                {/* <a href=" " class="button">Know More</a> */}

            </div>
            <div className='card'>
                <div className='icon'>
                    <i className='fas fa-handshake'></i>
                </div>
                <h3 style={{color:"#c94f4f", marginBottom:"20px"}}>Support</h3>
                <p>
                    Financial management is the business function concerned with profitability expenses cash and credit
                </p>
                {/* <a href=" " class="button">Know More</a> */}

            </div>
        </div>
    </div>
  )
}
