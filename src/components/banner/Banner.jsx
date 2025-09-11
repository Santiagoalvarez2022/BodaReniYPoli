import img from '../../assets/coupleBanner.svg'

const Banner = () => {
  return (
   <div className='w-full'>
      <img
        src={img}
        alt="Pareja en banco"
        className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
      />
   </div>
  )
}

export default Banner