import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { confirmGuest } from '../../service/guests.js';
import Modal from './Modal.jsx';
import Loader from '../loader/Loader.jsx';
import './FormGuest.css';

// La lista de invitados se carga en App y llega por props (guests).
// refreshGuests vuelve a pedirla a la API tras confirmar una asistencia.
export default function FormGuest({ guests = [], refreshGuests }) {
    const navigate = useNavigate();
    const [options,setOptions] = useState([]);
    const [input,setInput] = useState('');
    // estados para mostrar options
    const [showOptions, setShhowOptions] = useState(false);
    //estado para enviar solo cuando le nombre este elegido y sea correcto
    const [selected,setSelected] = useState(false);
    //informacion del invitado seleccionado
    const [loader,setLoader] = useState(false);
    const [guestSelected, setGuest] = useState();
    const [modal, setModal] = useState(false);

    const handlerInput = ({target}) =>{
      let {value} = target;
      setSelected(false)
      setGuest()
      setInput(value);
      if(value){
        let list_options = guests.filter((guest)=> guest.nombre.toLowerCase().includes(value.toLowerCase()));
        setOptions(list_options)
        setShhowOptions(true)
      }
      else {
        setShhowOptions(false)
        setSelected(false)
      }
    };

    const selecteName = (option) =>{
      const findName = guests.findIndex(o=> o.nombre === option.nombre)
      if (findName !== -1) {
        setInput(option.nombre);
        setSelected(true);
        setShhowOptions(false);
        setGuest(option);
      }
    };

    const confirmInvitation = async() =>{
      try {
        const response = await confirmGuest(guestSelected.id);

        setLoader(true);
        setSelected(false);

        if (response.status === 200) {
          setModal(true);
          setInput("");
          setGuest();
          setShhowOptions(false);
          setLoader(false);
        }

      } catch (error) {
        navigate('/error')
        console.log(error);
      }
    };

    const closeModal = () =>{
      setModal(false);
      if (refreshGuests) refreshGuests();
    };

    return (
    <>
      {
        loader
          && <Loader />
      }

      {
        modal
          && <Modal
          close={closeModal}
        />
      }

      <form className="guestForm" onSubmit={(e)=>e.preventDefault()}>
          <input
            placeholder='Nombre y Apellido'
            className='inptGuest bg-[#B6D9E8] text-base text-black px-4 py-1 rounded-xl font-Inria shadow-md '
            value={input}
            onChange={handlerInput}
            autoFocus={false}
            type="text"
          />

          <ul className="optionsContainer">
            {
              showOptions
                && options.length > 0
                && (
                options.map((option,index)=>{
                if (option.confirmo.toLocaleLowerCase() === "no") {
                  return <li
                    className="optionNames"
                    key={index}
                    onClick={() => selecteName(option)}
                  >
                  {option.nombre}
                </li>
                }}))
            }

          {
            selected
            && <p className="guestSelected mb-2">Invitado seleccionado <br /> "{input}"</p>
          }

          {
            selected
            && <button
            onClick={confirmInvitation}
            className="acptInvitation"
            > Confirmar </button>
          }

          </ul>
      </form>
  </>)
};