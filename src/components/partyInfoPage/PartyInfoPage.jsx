import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCalendar from '../shared/addToCalendar/AddToCalendar';
import PartyInfoRow from './components/partyInfoRow/PartyInfoRow';
import { useSongSuggestion } from './useSongSuggestion.js';
import mirrorBall from '../../assets/mirrorball.png';
import iconLocation from '../../assets/location.png';
import iconBed from '../../assets/bed.png';
import iconDressCode from '../../assets/dresscode.png';
import iconMusic from '../../assets/music.png';

import './partyInfoPage.css';

export default function PartyInfoPage() {
  const navigate = useNavigate();
  const { song, updateSong, isSubmitting, isSubmitted, submitSong } = useSongSuggestion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative party-info min-h-screen flex flex-col">
      <div className='absolute icon-leaft' />
      <div className='bg-petrol grid grid-cols-[1.65fr_.35fr] px-3 gap-2 pt-2 pb-4'>
        <div className='flex flex-col justify-end '>
          <button
            type="button"
            onClick={() => navigate('/')}
            aria-label="Volver"
            className="bg-[rgba(245,245,245,0.850)] mb-3 flex items-center justify-center rounded-full h-[4vh] w-[4vh] shadow"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-1/2 h-1/2 text-petrol"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <h1 className=' mt-5 font-playfair text-[2.5em] text-white text-5xl text-center pb-0'>Info de la fiesta</h1>
          <div className='flex justify-center pt-1'>
            <div className='border-b-2 border-white w-2/3'/>
          </div>
        </div>
        <div>
          <img src={mirrorBall} alt="" className="object-contain" />
        </div>
      </div>
     
      <div className="party-info-body flex-1 px-[2em] py-[2.5em] flex flex-col gap-[2.5em]">
        <PartyInfoRow icon={iconLocation} title="Ubicación" isLink={true} link={"https://maps.app.goo.gl/2nBuGpXNnerzN1t69"} description="El palenque y Exaltación de la cruz - Ciudad Autónoma de Buenos Aires" />
        <PartyInfoRow icon={iconBed} title="Hospedaje" description="El predio cuenta con habitaciones para su estadía" />
        <PartyInfoRow icon={iconDressCode} title="Dress code" description="Elegante" />
        <PartyInfoRow icon={iconMusic} title="Lista de canciones" description="¿Que canciones no pueden faltar en nuestra fiesta? ¡Escribilas abajo!"/>
       
        <form className="mt-4 flex flex-col items-center gap-3" onSubmit={(event) => event.preventDefault()}>
          <input
            placeholder="Nombre de la canción"
            className="w-full outline-none px-5 py-2 text-petrol bg-[rgba(245,245,245,0.644)] rounded-[1.5em] shadow"
            value={song}
            onChange={(event) => updateSong(event.target.value)}
            autoComplete="off"
            type="text"
          />
          {isSubmitted ? (
            <p className="font-playfair text-petrol text-[1.1em]">¡Gracias por tu sugerencia!</p>
          ) : isSubmitting ? (
            <div
              className="h-[1.6em] w-[1.6em] rounded-full border-[3px] border-petrol/25 border-t-petrol animate-spin"
              aria-label="Enviando"
            />
          ) : (
            <button
              type="button"
              onClick={submitSong}
              className="font-playfair bg-petrol px-4 p-1 text-[1.2em] text-sand"
            >
              Enviar
            </button>
          )}
        </form>
         
        <AddToCalendar
          title="Fiesta de casamiento de Milena y Joaquín"
          description="¡Te esperamos en nuestro día especial!"
          location="https://maps.app.goo.gl/2nBuGpXNnerzN1t69"
          startDate="20261113T204500-0300"
          endDate="20261114T030000-0300"
          className="bg-sand p-3 shadow"
        >
          <div className="flex flex-col items-center text-center ">
            <p className="font-baskerville text-petrol text-xl leading-none">¡Agendá la fecha!</p>
          </div>
           <p className="font-baskerville text-content text-sm mt-1">
              Viernes 13 de noviembre, 20:45hs — tocá aquí para guardarlo en tu calendario
            </p>
        </AddToCalendar>
      </div>
    </div>
  );
}
