import { useState } from 'react';
import { confirmGuest } from '../../service/guests.js';
import Loader from '../loader/Loader';
import Modal from '../formGuest/Modal';
import './confirmation.css';

export default function Confirmation({ guests = [], refreshGuests }) {
  const [input, setInput] = useState('');
  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(false);
  const [guestSelected, setGuestSelected] = useState();
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);

  const handleInput = ({ target }) => {
    const { value } = target;
    setSelected(false);
    setGuestSelected();
    setInput(value);

    if (value) {
      const list = guests.filter((guest) => guest.nombre.toLowerCase().includes(value.toLowerCase()));
      setOptions(list);
      setShowOptions(true);
    } else {
      setShowOptions(false);
      setSelected(false);
    }
  };

  const selectName = (option) => {
    setInput(option.nombre);
    setSelected(true);
    setShowOptions(false);
    setGuestSelected(option);
  };

  const confirmInvitation = async () => {
    try {
      setLoader(true);
      const response = await confirmGuest(guestSelected.id);
      setSelected(false);

      if (response.status === 200) {
        setModal(true);
        setInput('');
        setGuestSelected();
        setShowOptions(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const closeModal = () => {
    setModal(false);
    if (refreshGuests) refreshGuests();
  };

  return (
    <section className="confirmation">
      {loader && <Loader />}
      {modal && <Modal close={closeModal} />}

      <div className="confirmation-content">
        <h2 className="font-tangerine text-5xl text-sand text-center">Confirma tu asistencia</h2>
        <div className="confirmation-divider" />
        <p className="font-baskerville text-sand text-center mt-3">
          Escribí tu nombre debajo para dar el <em>sí</em>
        </p>

        <form className="confirmation-search" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Nombre y Apellido"
            className="confirmation-input font-baskerville"
          />
          <svg className="confirmation-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          {showOptions && options.length > 0 && (
            <ul className="confirmation-options">
              {options
                .filter((option) => option.confirmo?.toLowerCase() === 'no')
                .map((option, index) => (
                  <li key={index} onClick={() => selectName(option)} className="confirmation-option">
                    {option.nombre}
                  </li>
                ))}
            </ul>
          )}

          {selected && (
            <button onClick={confirmInvitation} className="confirmation-accept font-playfair">
              Confirmar
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
