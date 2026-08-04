import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmGuest as confirmGuestRequest } from '../../service/sheetbestAPI/guests.js';

export function useConfirmGuest({ onSuccess }) {
  const navigate = useNavigate();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const confirmGuest = async (guest) => {
    if (!guest?.id) return;

    try {
      setIsConfirming(true);
      const response = await confirmGuestRequest(guest.id);

      if (response?.status === 200) {
        setIsConfirmed(true);
        onSuccess?.();
      }
    } catch (error) {
      navigate('/error');
      console.log(error);
    } finally {
      setIsConfirming(false);
    }
  };

  const resetConfirmation = () => setIsConfirmed(false);

  return { isConfirming, isConfirmed, confirmGuest, resetConfirmation };
}
