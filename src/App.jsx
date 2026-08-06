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
  const [debugError, setDebugError] = useState(null);

  const fetchGuests = async () => {
    try {
      const response = await getGuestList();
      if (response?.status === 200) {
        setGuests(response.data);
        setDebugError(null);
      } else {
        setDebugError(response);
      }
    } catch (error) {
      setDebugError({ error: error.message });
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
      {debugError && (
        <div className='fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-xs p-2 break-words'>
          status: {String(debugError.status)} | code: {String(debugError.code)} | error: {String(debugError.error)}
        </div>
      )}
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
