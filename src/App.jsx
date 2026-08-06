import { useEffect, useState } from 'react';
import WelcomeEnvelopeSection from './components/welcomeEnvelopeSection/WelcomeEnvelopeSection';
import IntroductionSection from './components/introductionSection/IntroductionSection';
import EventsDetailsSection from './components/eventsDetailsSection/EventsDetailsSection';
import { getGuestList } from './service/sheetbestAPI/guests.js';
import GiftRegistrySection from './components/giftRegistrySection/GiftRegistrySection.jsx';
import ConfirmationSection from './components/confirmationSection/ConfirmationSection.jsx';
import ClosingMessageSection from './components/closingMessageSection/ClosingMessageSection.jsx';
import './app.css';

const App = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGuests = async () => {
    try {
      const response = await getGuestList();
      if (response?.status === 200) setGuests(response.data);
    } catch (error) {
      console.log('Error loading guest list', error);
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
      <WelcomeEnvelopeSection loading={loading} />
      <IntroductionSection />
      <EventsDetailsSection />
      <GiftRegistrySection />
      <ConfirmationSection guests={guests} refreshGuests={fetchGuests} />
      <ClosingMessageSection />
    </div>
  )
}

export default App;
