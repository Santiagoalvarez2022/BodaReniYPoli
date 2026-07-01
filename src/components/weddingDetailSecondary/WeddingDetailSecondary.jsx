const WeddingDetailSecondary = ({
  event,
  date,
  address,
  logo,
  link,
  moreInfo = false
}) => {
  const seePlace = () =>  window.open(link, "_blank")

  return (
    <section className="my-8 w-full">
      <div className="grid grid-cols-[60px_1fr] gap-2 items-start">
        <div className="w-16 h-16 rounded-full flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-15 h-15 object-contain"
            />
        </div>

        <div className="flex flex-col ">
          <h3 className="text-5xl text-petrol font-tangerine leading-none">
            {event}
          </h3>
          <p className="text-sm font-baskerville text-content">{date}</p>
          <p className="text-sm font-baskerville text-content">{address}</p>
          {moreInfo && (
            <div className="mt-3">
              <button
                onClick={seePlace}
                className="bg-petrol text-[#EDE7D9] font-playfair uppercase text-sm tracking-wide px-6 py-3 rounded-md"
              >
                Click aquí para más info
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeddingDetailSecondary;
