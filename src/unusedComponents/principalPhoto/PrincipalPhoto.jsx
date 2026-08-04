import coupleImg from "../assets/coupleWebp.webp";

const PrincipalPhoto = () => {
  return (
    <div className="w-full flex justify-center">
      <img
        src={coupleImg}
        alt="Couple photo"
        className="w-full max-w-[600px] aspect-[3/4] object-cover"
        />
    </div>
  );
};

export default PrincipalPhoto;
