import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <div>
      <h1>Let's pop some bottles!!!</h1>
      <img
        src="https://media4.giphy.com/media/dRYBjtthrSEEg/giphy.gif"
        alt="soda bottles"
      />

      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Soda;
