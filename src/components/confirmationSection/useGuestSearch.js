import { useState } from 'react';
import { filterPendingGuestsByName } from './guestFilter.js';

export function useGuestSearch(guests) {
  const [query, setQuery] = useState('');
  const [selectedGuest, setSelectedGuest] = useState(null);

  const options = filterPendingGuestsByName(guests, query);
  const isOptionsOpen = query.length > 0 && selectedGuest == null;

  const handleQueryChange = ({ target }) => {
    setQuery(target.value);
    setSelectedGuest(null);
  };

  const selectGuest = (guest) => {
    setQuery(guest.fullName);
    setSelectedGuest(guest);
  };

  const clearSelection = () => {
    setQuery('');
    setSelectedGuest(null);
  };

  return {
    query,
    options,
    isOptionsOpen,
    selectedGuest,
    handleQueryChange,
    selectGuest,
    clearSelection,
  };
}
