import { Link } from "react-router-dom";

const Chips = () => {
  return (
    <div>
      <h1>Chips! Chips! Chips!</h1>
      <img
        src="https://media4.giphy.com/media/Av9Fhfy6QavG8l4K1C/giphy.gif"
        alt="chips"
      />
      <h3>Nom! Nom! Nom!</h3>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Chips;
