import { useEffect } from 'react';
import discoBall from '../../../../assets/discoBall.svg';
import { PRICE_BY_TYPE } from '../../confirmationSection.constants.js';

export default function GuestConfirmationModal({ guest, isConfirming, isConfirmed, onConfirm, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/45 p-[1.5em] font-baskerville text-content"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[340px] rounded-[.2em] bg-[rgb(230,225,217)] px-[1.5em] py-[1.75em] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="text-petrol/70 text-[1.2em] leading-none"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col items-end px-4">
          <div className="flex justify-content-end w-full">
            <img src={discoBall} alt="disco ball" className="h-[3.6em] w-[4.6em] shrink-0 object-contain" />

            <div>
              <p className="pb-1 leading-none">Invitado/a:</p>
              <p className="font-tangerine text-petrol font-semibold text-[2.1em] leading-none">{guest?.fullName}</p>
            </div>
          </div>

          <div className='border-b-1 w-5/6 pt-2 border-petrol'/>

        </div>

        <div className='flex flex-col items-center'>
          <p className="text-center my-3">
            Precio de la tarjeta: {PRICE_BY_TYPE[guest?.tipo]}
          </p>

          <div className='border-b-1 w-5/6 border-petrol'/>
        </div>
        

        <p className="text-center text-[.85em] leading-[1.4] mt-3">
          Recordá abonar la tarjeta antes del <strong>15 de octubre</strong> para reservar tu lugar! Una vez abonado,
          envianos el comprobante por WhatsApp
        </p>
        <p className='text-center text-[.9em] pt-3'>alias: JoacoyMile26</p>

        <p className="text-center text-[.7em] opacity-60  ">Menores de 12 años no abonan</p>

        <div className="flex justify-center mt-5">
          {isConfirmed ? (
            <p className="font-playfair text-petrol text-[1.2em]">¡Invitación confirmada!</p>
          ) : isConfirming ? (
            <div
              className="h-[1.8em] w-[1.8em] rounded-full border-[3px] border-petrol/25 border-t-petrol animate-spin"
              aria-label="Confirmando"
            />
          ) : (
            <button
              className="font-playfair bg-petrol px-2 p-1 text-[1.3em] text-sand"
              onClick={onConfirm}
            >
              CONFIRMAR
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
