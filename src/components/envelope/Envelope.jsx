import { useEffect, useState } from 'react';
import sheet1 from '../../assets/sheet_1.png';
import sheet2 from '../../assets/sheet_2.png';
import stamp from '../../assets/stamp.png';
import './Envelope.css';

// Tiempos (ms) — secuencia: stamp aparece -> stamp desaparece -> se abren las puertas
const STAMP_IN = 50;       // micro-delay para disparar la animacion de entrada del stamp
const STAMP_OUT = 1500;    // momento en que el stamp empieza a desaparecer
const STAMP_ANIM = 500;    // duracion del fade del stamp (coincide con la transition CSS)
const OPEN_DELAY = 2100;   // las puertas abren recien cuando el stamp ya se fue
const DOORS_ANIM = 1200;   // debe coincidir con la transition del CSS

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
    <div className={`envelope ${open ? 'envelope--open' : ''}`} aria-hidden="true">
      {/* Hoja izquierda */}
      <div
        className="envelope__door envelope__door--left"
        style={{ backgroundImage: `url(${sheet1})` }}
      />
      {/* Hoja derecha */}
      <div
        className="envelope__door envelope__door--right"
        style={{ backgroundImage: `url(${sheet2})` }}
      />

      {/* Stamp: elemento independiente sobre la juntura del sobre */}
      {!stampGone && (
        <div
          className={`envelope__stamp ${stampShown ? 'is-in' : ''} ${stampHidden ? 'is-out' : ''}`}
          style={{ backgroundImage: `url(${stamp})` }}
        />
      )}
    </div>
  );
}
