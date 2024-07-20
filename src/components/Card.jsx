
const Card = ({ title, description }) => {
  return (
    <div className="z-10 border-2 border-red-500 size-40 bg-white">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}   

export default Card;