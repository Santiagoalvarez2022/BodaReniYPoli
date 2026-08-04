import stampImg from '../../../assets/stamp.png';
import './stamp.css';

export default function Stamp({ className = '' }) {
  return (
    <div
      className={`stamp ${className}`}
      style={{ backgroundImage: `url(${stampImg})` }}
    />
  );
}
