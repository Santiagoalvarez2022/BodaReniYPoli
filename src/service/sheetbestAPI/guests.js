import axios from 'axios';

const GUESTS_API_URL = '/api/guests';
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
    const response = await axios.get(GUESTS_API_URL, { timeout: 20000 });
    const pendingGuests = response.data
      .map(mapGuest)
      .filter((guest) => guest.confirmo?.toUpperCase() !== CONFIRMED_STATUS);

    return { status: response.status, data: pendingGuests };
  } catch (error) {
    console.log('Error fetching guest list', error.message);
    return { status: error.response?.status ?? null, data: [] };
  }
};

export const confirmGuest = async (id) => {
  try {
    const rowIndex = id - 1;
    const response = await axios.patch(`${GUESTS_API_URL}/${rowIndex}`, { Confirmo: CONFIRMED_STATUS });
    return { status: response.status, data: response.data };
  } catch (error) {
    console.log('Error updating guest', error.message);
  }
};
