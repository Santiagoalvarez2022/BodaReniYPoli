import { useEffect, useState } from 'react';
import { InformationWedding, PrincipalPhoto,CountDown } from './components';
import WeddingDetail from './components/weddingDetail/WeddingDetail';
import Banner from './components/banner/Banner';
import Label from './components/label/Label';
import FormGuest from './components/formGuest/FormGuest';
import Envelope from './components/envelope/Envelope';
import Loader from './components/loader/Loader';
import Cover from './components/cover/Cover';
import SecondSection from './components/secondSection/SecondSection';
import { getGuestList } from './service/guests.js';
import './app.css';

const App = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEnvelope, setShowEnvelope] = useState(false);

  const fetchGuests = async () => {
    try {
      const response = await getGuestList();
      if (response?.status === 200) setGuests(response.data);
    } catch (error) {
      console.log('Error al cargar la lista de invitados', error);
    }
  };

  useEffect(() => {
    const init = async () => {
      await fetchGuests();
      setLoading(false);
      setShowEnvelope(true);
    };
    init();
  }, []);

  return (
    <div className='flex flex-col items-center'>
      {/* {loading && <Loader />}
      {showEnvelope && <Envelope />} */}
      <Cover />
      <SecondSection />
    </div>
  )
}

export default App;
