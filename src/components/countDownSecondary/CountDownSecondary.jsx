import { useState, useEffect } from 'react';
import timer_pic_1 from '../../assets/timer_pic_1.svg';
import timer_pic_2 from '../../assets/timer_pic_2.svg';
import timer_pic_3 from '../../assets/timer_pic_3.svg';

import "./count-down-secondary.css";

const CountDownSecondary = () => {
    const targetDate = new Date('2026-11-28T11:30:00Z').getTime();

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
          const now = new Date().getTime();
          const distance = targetDate - now;
          if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            setTimeLeft({ days, hours, minutes });
          } else {
            setTimeLeft({ days: 0, hours: 0, minutes: 0 });
          }
        };

        calculateTimeLeft();
        const intervalId = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(intervalId);
      }, [targetDate]);

    const formatNumber = (number) => {
        return String(number).padStart(2, '0');
    };

    return (
        <section className="countdown-secondary-page pb-2">
            <div className="countdown-secondary-meter font-baskerville">
                <div className='countdown-secondary-item '>
                    <div className="countdown-secondary-count shadow-xl" style={{ backgroundImage: `url(${timer_pic_1})` }}>
                        <span className="countdown-secondary-number">{formatNumber(timeLeft.days)}</span>
                    </div>
                    {/* <span className='countdown-secondary-label'>Días</span> */}
                </div>
                <div className='countdown-secondary-item'>
                    <div className="countdown-secondary-count shadow-xl" style={{ backgroundImage: `url(${timer_pic_2})` }}>
                        <span className="countdown-secondary-number">{formatNumber(timeLeft.hours)}</span>
                    </div>
                    {/* <span className='countdown-secondary-label'>Hrs</span> */}
                </div>
                <div className='countdown-secondary-item'>
                    <div className="countdown-secondary-count shadow-xl" style={{ backgroundImage: `url(${timer_pic_3})` }}>
                        <span className="countdown-secondary-number">{formatNumber(timeLeft.minutes)}</span>
                    </div>
                    {/* <span className='countdown-secondary-label'>Min</span> */}
                </div>
            </div>
           <div className="w-1/2 mx-auto border-t-2 border-petrol"></div>
        </section>
    );
}

export default CountDownSecondary;
