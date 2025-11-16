import axios from 'axios'

export const getGuestList = async() =>{
    try {
    const response = await axios(`${'https://api.sheetbest.com/sheets/f3774f3e-827d-4486-975b-64558874ab28'}?_raw=1`);

    return response;

    } catch (error) {
        console.log('Error al hacer peticion de la lista de invitados', {error:error.message});
        return error
    };
}


export const confirmGuest = async(id) =>{
   
    try {
        console.log(id);
        
        const data = await axios.patch(`https://api.sheetbest.com/sheets/f3774f3e-827d-4486-975b-64558874ab28/${id}`,{Confirmo: 'confirmo'});

        return data
    } catch (error) {
        console.log("Error en la modificacion de lista de invitados ", {error:error.message})
    };
};
