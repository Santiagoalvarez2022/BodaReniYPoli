import axios from 'axios'

export const getGuestList = async() =>{
    try {
    const response = await axios(`${'https://api.sheetbest.com/sheets/5154d3fa-534c-4f07-b111-75bb3a79955f'}?_raw=1`);

    return response;

    } catch (error) {
        console.log('Error al hacer peticion de la lista de invitados', {error:error.message});
        return error
    };
}


export const confirmGuest = async(id) =>{
   
    try {
        console.log(id);
        
        const data = await axios.patch(`https://api.sheetbest.com/sheets/5154d3fa-534c-4f07-b111-75bb3a79955f/${id}`,{Confirmo: 'confirmo'});

        return data
    } catch (error) {
        console.log("Error en la modificacion de lista de invitados ", {error:error.message})
    };
};
