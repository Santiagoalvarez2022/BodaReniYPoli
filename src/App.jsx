import { useEffect, useState } from 'react';
import { InformationWedding, PrincipalPhoto,CountDown } from './components';
import WeddingDetail from './components/weddingDetail/WeddingDetail';
import Banner from './components/banner/Banner';
import Label from './components/label/Label';
import FormGuest from './components/formGuest/FormGuest';
import Envelope from './components/envelope/Envelope';
import Cover from './components/cover/Cover';
import SecondSection from './components/secondSection/SecondSection';
import { getGuestList } from './service/guests.js';
import './app.css';
import ThirdSection from './components/thirdSection/ThirdSection.jsx';

const App = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

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
    };
    init();
  }, []);

  return (
    <div className='app-background flex flex-col items-center'>
      <Envelope loading={loading} />
      <Cover />
      <SecondSection />
      <ThirdSection />
      {console.log(guests)}
    </div>
  )
}

export default App;
