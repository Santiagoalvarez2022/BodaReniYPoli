const WeddingDetail = ({
  event,
  date,
  address,
  logo,
  link
}) => {
  const seePlace = () =>  window.open(link, "_blank")

  return (
    <section className="my-8 w-full font-inria">
      <div className="grid grid-cols-[60px_1fr] gap-2 items-start">
        <div className="w-16 h-16 rounded-full flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-15 h-15 object-contain"
            />
        </div>

        <div className="flex flex-col ">
          <h3 className="text-3xl text-blueP uppercase">
            {event}
          </h3>
          <p className="text-xs">{date}</p>
          <p className="text-xs">{address}</p>
          <div>
            <button onClick={seePlace} className="bg-[#B6D9E8] text-xs text-white px-4 py-1 rounded-xl">
              Como llegar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetail;
