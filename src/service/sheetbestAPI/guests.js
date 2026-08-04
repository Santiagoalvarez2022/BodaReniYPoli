import axios from 'axios';

const SHEETBEST_URL = 'https://api.sheetbest.com/sheets/fbcae772-75e9-4fd1-a706-43c097de8ab7';
const CONFIRMED_STATUS = 'SI';

const mapGuest = (row) => ({
  id: row.id,
  fullName: row['Nombre y Apellido'],
  confirmo: row.Confirmo,
  pago: row.Pago,
  tipo: row.Tipo,
});

export const getGuestList = async () => {
  try {
    const response = await axios.get(`${SHEETBEST_URL}?_raw=1`);
    const pendingGuests = response.data
      .map(mapGuest)
      .filter((guest) => guest.confirmo?.toUpperCase() !== CONFIRMED_STATUS);

    return { status: response.status, data: pendingGuests };
  } catch (error) {
    console.log('Error fetching guest list', error.message);
    return error;
  }
};

export const confirmGuest = async (id) => {
  try {
    const rowIndex = id - 1;
    const response = await axios.patch(`${SHEETBEST_URL}/${rowIndex}`, { Confirmo: CONFIRMED_STATUS });
    return { status: response.status, data: response.data };
  } catch (error) {
    console.log('Error updating guest', error.message);
  }
};
