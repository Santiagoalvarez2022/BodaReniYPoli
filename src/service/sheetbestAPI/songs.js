import axios from 'axios';

const SHEETBEST_URL = 'https://api.sheetbest.com/sheets/977170df-5892-4c17-be43-632de2780aac';

export const suggestSong = async (song) => {
  try {
    const response = await axios.post(SHEETBEST_URL, { Canciones: song });
    return { status: response.status, data: response.data };
  } catch (error) {
    console.log('Error submitting song suggestion', error.message);
  }
};
