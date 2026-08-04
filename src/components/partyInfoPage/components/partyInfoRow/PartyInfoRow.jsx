

export default function PartyInfoRow({ title, description, icon, isLink=false, link=""}) {

  const classDescription = "font-baskerville text-content text-sm leading-[1.5]"

  return (
    <div className="grid grid-cols-[60px_1fr] gap-3 items-start">
      <div>
        <img src={icon} alt="icon" className="w-full p-2"/>
      </div>
      <div>
        <p className="font-tangerine font-bold text-petrol text-4xl leading-none">{title}</p>
          
         
        {isLink ? <a className={`${classDescription} underline`}  target="_blank" href={link}>{description}</a> : <p className={classDescription}>{description}</p>}
      </div>
    </div>
  );
}
