import './form-guest.css'

export default function Modal({close}) {
  const addEventToCalendar = () => {
    const title = "Casamiento de Renata y Pablo";
    const startDate = "20251128T110000-0300";
    const endDate   = "20251129T110000-0300";

    const details = "¡Te invitamos a nuestro casamiento! Esperamos que puedas guardar ese día para que puedas participar";
    const location = "https://maps.app.goo.gl/2nBuGpXNnerzN1t69";

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

    window.open(url, "_blank");
    close();
  };

  return (
    <div className="modal-container">
        <div className="modal shadow-2xl">
            <div className="icon-modal"></div>
            <p className="msg">¡Confirmacíon enviada con exito!</p>
            <div className="btn-container">
                <button  className="btn-modal shadow-xl bg-[#7b9af0] text-black text-white" onClick={addEventToCalendar}>Agendar Fecha</button>
                <button  className="btn-modal shadow-md" onClick={close}>Volver atras</button>
            </div>
            <div className="icon-modal"></div>
        </div>
    </div>
  )
};