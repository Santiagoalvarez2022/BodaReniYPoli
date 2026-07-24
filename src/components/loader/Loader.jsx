import sheet1 from '../../assets/sheet_1.png';
import sheet2 from '../../assets/sheet_2.png';
import Stamp from '../stamp/Stamp';
import './loader.css'

export default function Loader() {

  return (
    <div className="loader-envelope" aria-hidden="true">
      <div
        className="loader-envelope-door loader-envelope-door-left"
        style={{ backgroundImage: `url(${sheet1})` }}
      />
      <div
        className="loader-envelope-door loader-envelope-door-right"
        style={{ backgroundImage: `url(${sheet2})` }}
      />
      <div className="container-loader">
        <Stamp className="loader-stamp" />
      </div>
    </div>
  );
};