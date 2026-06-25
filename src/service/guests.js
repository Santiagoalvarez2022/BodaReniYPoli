const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyUBS0S4zkHC6cPUIJtM9M5pTSW1rYooIu8dlJ9_iqtGGfCSxT3w5-nyK5Sk2yhI4cWyA/exec";

export const getGuestList = async () => {
    try {
        const response = await fetch(APPS_SCRIPT_URL, { redirect: 'follow' });
        const data = await response.json();
        return { status: response.status, data };
    } catch (error) {
        console.log('Error al hacer peticion de la lista de invitados', error.message);
        return error;
    }
};

export const confirmGuest = async (id) => {
    try {
        const response = await fetch(`${APPS_SCRIPT_URL}?action=confirm&id=${id}`, { redirect: 'follow' });
        const data = await response.json();
        return { status: response.status, data };
    } catch (error) {
        console.log('Error en la modificacion de lista de invitados', error.message);
    }
};
