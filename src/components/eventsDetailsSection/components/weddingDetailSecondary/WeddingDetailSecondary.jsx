const WeddingDetailSecondary = ({
  event,
  date,
  address,
  logo,
  link,
  connector = true,
  connectorGap = false,
  moreInfo = false,
}) => {
  const line = connector
    ? `before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:w-px before:h-8 before:bg-petrol ${connectorGap ? 'before:mt-[10px]' : ''}`
    : "";

  return (
    <section className="w-full my-9">
      <div className="grid grid-cols-[60px_1fr] gap-2 items-start">
        <div className={`relative w-16 h-16 rounded-full flex items-center justify-center ${line}`}>
          <img
            src={logo}
            alt="Logo"
            className="w-15 h-15 object-contain"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <p className="text-4xl font-bold text-petrol font-tangerine leading-none">
              {event}
            </p>
            {moreInfo && (
              <button
                onClick={() => window.open(link, "_blank")}
                className="bg-petrol text-sand font-playfair text-xs tracking-wide rounded-full p-1 px-2 shadow"
              >
                Mas info
              </button>
            )}
          </div>
          <p className="text-sm font-baskerville text-content ps-1">{date}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-baskerville text-content ps-1 underline decoration-content"
          >
            {address}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetailSecondary;
