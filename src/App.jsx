import { InformationWedding, PrincipalPhoto,CountDown } from './components';
import WeddingDetail from './components/weddingDetail/WeddingDetail';
import Banner from './components/banner/Banner';
import Label from './components/label/Label';
import FormGuest from './components/formGuest/FormGuest';
import flowersDetail from './assets/FlowersDetailWedding.svg'
import flowersCornerUp from './assets/flowersCornerUp.svg'
import flowersCornerDown from './assets/flowersCornerDown.svg'
import copaFiesta from './assets/copas.png'
import rings from './assets/rings.png'
import video from './assets/video.mp4'
import temple from './assets/temple.png'
import './App.css';

const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <PrincipalPhoto />
      <div className='shadow-white'/>
      <InformationWedding />
      <CountDown />
      <span className='font-Obaby msg  '>Te esperamos para celebrar juntos...</span>
      <div className="relative px-4">
        <img
          src={flowersDetail}
          alt="flores"
          className="absolute bottom-0 right-0 w-25  pointer-events-none mr-2 mb-3"
        />

        <div className="relative z-10">
          <WeddingDetail
            event={"Civil"}
            date={"Viernes 28 de Noviembre - 11hs"}
            address={"Beruti 3325, CABA"}
            link={"https://maps.app.goo.gl/RhYPcV6mKZykStrt8"}
            logo={rings}
          />

          <WeddingDetail
            event={"Fiesta"}
            date={"Viernes 28 de Noviembre - 19:45hs"}
            address={"El concerro, entre El Palenque y Exaltacion de la Cruz, Buenos Aires"}
            link={"https://maps.app.goo.gl/2nBuGpXNnerzN1t69"}
            logo={copaFiesta}

          />

          <WeddingDetail
            event={"Templo"}
            date={"Sabado 29 de Noviembre - 15hs"}
            address={"Autopista Riccheri 4955, Ciudad Evita"}
            link={"https://maps.app.goo.gl/rrmCoHoJWRzqEA9r5"}
            logo={temple}
          />
        </div>
      </div>

      <Banner />

      <div className="relative text-center my-14 px-2">
        {/* Flores arriba izquierda */}
        <img
          src={flowersCornerUp}
          alt="flores"
          className="absolute top-0 left-0 w-40 pointer-events-none -z-10"
        />
        <img
          src={flowersCornerDown}
          alt="flores"
          className="absolute bottom-0 right-0 w-40 pointer-events-none -z-10"
        />

        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center w-90 my-18">
            <p className="font-Inria text-base text-center mx-4  w-70 paragraph">
              Nos encantaría contar con su presencia en este día tan especial. 
              Por favor, confirmen su asistencia antes del 10 de Noviembre
            </p>
            <FormGuest />
            <br />
            <p className="font-Inria text-base text-center mx-4  paragraph">
              Tu presencia es nuestro mayor regalo, pero si querés acompañarnos 
              también con un detalle, aquí están nuestros datos.
            </p>

            <Label text="ALIAS: RENATAYPABLO.BODA" />
            <br />
            <Label text="CBU: 4530000800015182024100" />
          </div>
        </div>
        </div>
        {/* <div className='flex justify-center mb-12'>
           <video loop>
              <source
                src={video}
                type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
          </video>
        </div> */}
    </div>
  )
}

export default App;
