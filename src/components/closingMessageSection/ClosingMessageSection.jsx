import BorderTopPaper from '../../assets/borderTopPaper.png'
import WhiteHeartIcon from '../../assets/white_heart_icon.png'
import Stamp from '../shared/stamp/Stamp';
import './closingMessageSection.css';

const ClosingMessageSection = () => {
  return (
    <section className=" w-full overflow-hidden bg-petrol">

      <img src={BorderTopPaper} alt="paper top" className="w-full h-auto" />
      <br />
      <div className="px-[2em] mt-5 text-center">
        <h2 className="font-tangerine text-white text-[5em] leading-none">¡Los esperamos!</h2>
        <div className="w-[55%] h-[1.5px] bg-white opacity-80 mt-[.4em] mx-auto mb-[1.2em]" />
        <p className="font-baskerville text-sand text-[1.1em] leading-[1.6] ">
          y recuerden…<br />
          Mientras uno está vivo,<br />
          uno debe amar<br />
          lo mas que pueda
        </p>
      </div>

      <br />
      <br />

      <div className='grid grid-cols-[1.5fr_.5fr] px-4 '>
        <div className='relative'>
          <div className='polaroid-3  rotate-[-12deg]' />
          <Stamp className='absolute -bottom-[-1.5em] -right-[4.5em]' />
        </div>
        <div>
          <img src={WhiteHeartIcon} className='icon-white-heart'/>
        </div>
      </div>
      <div className='h-30'/>
    </section>
  );
};

export default ClosingMessageSection;
