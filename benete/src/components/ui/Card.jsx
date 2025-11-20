import './Card.css'; // Optional styling

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}


export default Card;

