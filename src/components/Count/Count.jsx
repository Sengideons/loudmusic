import React, { useState, useRef, useEffect } from 'react';
import './Count.css'

const Count = () => {

    const [timerDays, setTimerDays] = useState('155');
    const [timerHours, setTimerHours] = useState('43');
    const [timerMinutes, setTimerMinutes] = useState('28');
    const [timerSeconds, setTimerseconds] = useState('16');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('May 5, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = now - countdownDate;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerseconds(seconds);
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });


    return(
        <>

<div className='count-section'>
            <div className='count-heading'>
                <h1>HURRY UP!</h1>
            </div>

            <div className="count-wrap">

            <div className='count-labels'>
                <label>{timerDays} <span>DAYS</span></label>
                <label>{timerHours} <span>HOURS</span></label>
                <label>{timerMinutes} <span>MINS</span></label>
                <label>{timerSeconds} <span>SECS</span></label>
            </div>

            </div>

        </div>

        </>
    )
}

export default Count;