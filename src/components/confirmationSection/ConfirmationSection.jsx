import GuestConfirmationModal from './components/guestConfirmationModal/GuestConfirmationModal';
import { useGuestSearch } from './useGuestSearch.js';
import { useConfirmGuest } from './useConfirmGuest.js';
import { SEARCH_PLACEHOLDER } from './confirmationSection.constants.js';
import './confirmationSection.css';

export default function ConfirmationSection({ guests, refreshGuests }) {
  const { query, options, isOptionsOpen, selectedGuest, handleQueryChange, selectGuest, clearSelection } =
    useGuestSearch(guests);

  const { isConfirming, isConfirmed, confirmGuest, resetConfirmation } = useConfirmGuest({
    onSuccess: refreshGuests,
  });

  const closeModal = () => {
    clearSelection();
    resetConfirmation();
  };

  return (
    <section className="confirmation relative w-full min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat">
      {selectedGuest && (
        <GuestConfirmationModal
          guest={selectedGuest}
          isConfirming={isConfirming}
          isConfirmed={isConfirmed}
          onConfirm={() => confirmGuest(selectedGuest)}
          onClose={closeModal}
        />
      )}

      <div className="relative z-[1] w-full box-border p-[2em] flex flex-col">
        <h2 className="font-tangerine text-5xl text-white test-start opacity-80">Confirma tu asistencia</h2>
        <div className="w-[65%] h-[1.5px] bg-white mt-[.5em] mb-[1em] opacity-80" />
        <p className="font-baskerville text-sand text-center">
          Escribí tu nombre debajo para dar el <em>sí</em>
        </p>

        <form className={`w-full max-w-[360px] mt-[1em]  ${isOptionsOpen && options.length ? 'bg-[rgba(245,245,245,0.644)] rounded-[1.5em] shadow' : 'bg-none' }`} onSubmit={(e) => e.preventDefault()}>
          <div className={`input-container px-2 py-1 ${isOptionsOpen && options.length ? 'bg-none border-petrol border-b pb-0' : 'bg-[rgba(245,245,245,0.644)] rounded-[1.5em] shadow' }`}>
            <input
              placeholder={SEARCH_PLACEHOLDER}
              className="outline-none py-2 pl-5 text-petrol "
              value={query}
              onChange={handleQueryChange}
              autoFocus={false}
              autoComplete="off"
              type="text"
            />
            <div className='input-icon-search flex justify-center items-center'>
              <svg
                className="w-[1.3em] h-[1.3em]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
          <ul className='options-container-guests '>
            {isOptionsOpen && options.length > 0 && (
              options.map((option) => (
                <li
                  key={option.id}
                  onClick={() => selectGuest(option)}
                  className="text-petrol font-baskerville cursor-pointer"
                >
                  {option.fullName}
                </li>
              ))
            )}
          </ul>
        </form>
      </div>
    </section>
  );
}
