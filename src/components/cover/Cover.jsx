import './cover.css';

export default function Cover() {
  return (
    <section className="cover">
      <div className="img-couple-cover"></div>
      <div className="leaves-phrase-container ">

        <div className='leaves-container'>
          <div className='leaves-icon'></div>
        </div>

        <div className='font-tangerine w-50 phrase-container color-petrol;'>
          <p className='mt-10 '>
            La distancia quiso ponernos a prueba, pero terminó
            convirtiéndose en parte de nuestra historia.
            Porque detrás de cada kilómetro, hubo un
          </p>
          <p>‘casi pierdo el cole’,</p>
          <p>‘el cole no llega más’,</p>
          <p>‘no sé qué llevar’,</p>
          <p>‘¿este finde viajás vos?’.</p>
          <br />
          <p>
            Y entre tantas idas y vueltas, HOY queremos
            celebrar con vos este recorrido que nos trajo hasta acá
          </p>
        </div>

        <div className='leaves-container'>
          <div className='leaves-icon'></div>
        </div>
      </div>
    </section>
  );
}
