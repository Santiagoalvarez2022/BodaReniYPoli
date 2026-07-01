import header from '../../assets/principalPhotoHeader.png';
import footer from '../../assets/principalPhotoFooter.png';
import './cover.css';

export default function Cover() {
  return (
    <section className="cover">
      <img src={header} alt="" className="cover-header" />

      <div className="cover-photo"></div>

      <div className="cover-footer" style={{ backgroundImage: `url(${footer})` }}>
        <div className="cover-text">
          <p>
            La distancia quiso ponernos a prueba, pero terminó
            convirtiéndose en parte de nuestra historia.
            Porque detrás de cada kilómetro, hubo un
            ‘casi pierdo el cole’,
            ‘el cole no llega más’,
            ‘no sé qué llevar’,
            ‘¿este finde viajás vos?’.
          </p>
          <p>
            Y entre tantas idas y vueltas, HOY queremos
            celebrar con vos este recorrido que nos trajo hasta acá
          </p>
        </div>
      </div>
    </section>
  );
}
