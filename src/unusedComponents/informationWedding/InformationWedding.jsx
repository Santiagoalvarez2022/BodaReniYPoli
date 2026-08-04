import './information-wedding.css';

const InformationWedding = () => {
  return (
    <div className="wedding-container">
      <div className="flowers"></div>

      <div className="wedding-info text-blueP">
        <h1 className="names-title font-marcellus">Renata & Pablo</h1>
        <div className='flex justify-center items-center'>
          <div className='date' />
        </div>
      </div>
    </div>
  );
};

export default InformationWedding;
