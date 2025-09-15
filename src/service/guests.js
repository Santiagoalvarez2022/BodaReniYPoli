import axios from 'axios'

export const getGuestList = async() =>{
    try {
    const response = await axios(`${'https://api.sheetbest.com/sheets/e8905961-df11-4373-aecb-b8811ebff100'}?_raw=1`);

    return response;

    } catch (error) {
        console.log('Error al hacer peticion de la lista de invitados', {error:error.message});
        return error
    };
}


export const confirmGuest = async(id) =>{
   
    try {
        const data = await axios.patch(`https://api.sheetbest.com/sheets/e8905961-df11-4373-aecb-b8811ebff100/${id}`,{Confirmo: 'confirmo'});

        return data
    } catch (error) {
        console.log("Error en la modificacion de lista de invitados ", {error:error.message})
    };
};