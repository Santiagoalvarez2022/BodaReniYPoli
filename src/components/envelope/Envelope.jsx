import { useEffect, useState } from 'react';
import sheet1 from '../../assets/sheet_1.png';
import sheet2 from '../../assets/sheet_2.png';
import Stamp from '../stamp/Stamp';
import './envelope.css';

const STAMP_IN = 50;
const SETTLE_DELAY = 400;
const STAMP_ANIM = 500;
const DOORS_DELAY_AFTER_SETTLE = 600;
const DOORS_ANIM = 1200;

export default function Envelope({ loading }) {
  const [stampShown, setStampShown] = useState(false);
  const [stampHidden, setStampHidden] = useState(false);
  const [stampGone, setStampGone] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => setStampShown(true), STAMP_IN);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const timers = [
      setTimeout(() => setStampHidden(true), SETTLE_DELAY),
      setTimeout(() => setStampGone(true), SETTLE_DELAY + STAMP_ANIM),
      setTimeout(() => setOpen(true), SETTLE_DELAY + DOORS_DELAY_AFTER_SETTLE),
      setTimeout(() => {
        setHidden(true);
        document.body.style.overflow = '';
      }, SETTLE_DELAY + DOORS_DELAY_AFTER_SETTLE + DOORS_ANIM + 100),
    ];

    return () => timers.forEach(clearTimeout);
  }, [loading]);

  if (hidden) return null;

  return (
    <div className={`envelope ${open ? 'envelope-open' : ''}`} aria-hidden="true">
      <div
        className="envelope-door envelope-door-left"
        style={{ backgroundImage: `url(${sheet1})` }}
      />
      <div
        className="envelope-door envelope-door-right"
        style={{ backgroundImage: `url(${sheet2})` }}
      />

      {!stampGone && (
        <Stamp
          className={`envelope-stamp ${stampShown ? 'is-in' : ''} ${stampShown && loading ? 'is-pulsing' : ''} ${stampHidden ? 'is-out' : ''}`}
        />
      )}
    </div>
  );
}
