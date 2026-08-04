import { useState } from 'react';
import { suggestSong as suggestSongRequest } from '../../service/sheetbestAPI/songs.js';

export function useSongSuggestion() {
  const [song, setSong] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateSong = (value) => {
    setSong(value);
    setIsSubmitted(false);
  };

  const submitSong = async () => {
    if (!song.trim()) return;

    try {
      setIsSubmitting(true);
      const response = await suggestSongRequest(song.trim());
      if (response?.status === 200) {
        setSong('');
        setIsSubmitted(true);
      }
    } catch (error) {
      console.log('Error submitting song suggestion', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { song, updateSong, isSubmitting, isSubmitted, submitSong };
}
