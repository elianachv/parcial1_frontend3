import "./Card.css";
const Card = ({ name, color }) => {
  return (
    <div className="card">
      <h2>Hola! {name} </h2>
      <p>Sabemos que tu color favorito es </p>
      <button style={{ background: color }}>{color}</button>
    </div>
  );
};

export default Card;
