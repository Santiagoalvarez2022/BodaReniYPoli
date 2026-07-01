import { useEffect, useState } from 'react';
import sheet1 from '../../assets/sheet_1.png';
import sheet2 from '../../assets/sheet_2.png';
import stamp from '../../assets/stamp.png';
import './envelope.css';

const STAMP_IN = 50;
const STAMP_OUT = 1500;
const STAMP_ANIM = 500;
const OPEN_DELAY = 2100;
const DOORS_ANIM = 1200;

export default function Envelope() {
  const [stampShown, setStampShown] = useState(false);
  const [stampHidden, setStampHidden] = useState(false);
  const [stampGone, setStampGone] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timers = [
      setTimeout(() => setStampShown(true), STAMP_IN),
      setTimeout(() => setStampHidden(true), STAMP_OUT),
      setTimeout(() => setStampGone(true), STAMP_OUT + STAMP_ANIM),
      setTimeout(() => setOpen(true), OPEN_DELAY),
      setTimeout(() => {
        setHidden(true);
        document.body.style.overflow = '';
      }, OPEN_DELAY + DOORS_ANIM + 100),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []);

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
        <div
          className={`envelope-stamp ${stampShown ? 'is-in' : ''} ${stampHidden ? 'is-out' : ''}`}
          style={{ backgroundImage: `url(${stamp})` }}
        />
      )}
    </div>
  );
}
