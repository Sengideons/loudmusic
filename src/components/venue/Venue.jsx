import React from 'react';
import './Venue.css';

const Venue = () => {
    return(
        <div className="venue-section">

            <div className='venue-heading'>
                <h1>VENUE LOCATION</h1>
            </div>

            <div className='location-layout'>
                <div className='map-section'>
                <div className='gmap-frame'><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Tema,%20Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
                </div>
                <div className='fallbrook-section'>
                    <div className='venueSub-heading'>
                        <h1><span>Fallbrook Art Center</span></h1>
                        <h3><i className="fa fa-calendar"></i>&nbsp;&nbsp;&nbsp;17 November - 22 November</h3>
                        <h4> 8:00 am - 10:00 pm </h4>

                        <h3 className='ven-h'><i className="fa fa-location-dot"></i>&nbsp;&nbsp;&nbsp;Fallbrook Carlifornia 92028, USA</h3>
                        <h4 className='address'> Event Address </h4>

                        <h3 className='phone-n'><i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;541057923</h3>
                        <h4 className='phone'> Phone Number </h4>
                    </div>
                </div>
            </div>

            

        </div>
    )
}

export default Venue;