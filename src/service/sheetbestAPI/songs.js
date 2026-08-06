import axios from 'axios';

const SONGS_API_URL = '/api/songs';

export const suggestSong = async (song) => {
  try {
    const response = await axios.post(SONGS_API_URL, { Canciones: song });
    return { status: response.status, data: response.data };
  } catch (error) {
    console.log('Error submitting song suggestion', error.message);
  }
};
