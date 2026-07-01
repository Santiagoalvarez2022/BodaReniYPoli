import { useState, useEffect } from 'react';
import "./count-down.css";

const CountDown = () => {
    const targetDate = new Date('2025-11-28T11:00:00Z').getTime();

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
        <section className="countdown-page pt-8 pb-2">
            <div className="chorometer font-inria font-light">
                <div className='container-count'>
                    <p className="count">{formatNumber(timeLeft.days)}</p>
                    <span className='label'>Dias</span>
                </div>
                <div className='container-count'>
                    <span className="count">{formatNumber(timeLeft.hours)}</span>
                    <span className='label'>Hrs</span>
                </div>
                <div className='container-count'>
                    <span className="count">{formatNumber(timeLeft.minutes)}</span>
                    <span className='label'>min</span>
                </div>
            </div>
        </section>
    );
}

export default CountDown;
