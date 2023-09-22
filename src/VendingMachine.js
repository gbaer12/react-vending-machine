import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvtNd8CGzq_saVjJfpOMuif9kFWY6wBuuCQ&usqp=CAU"
          alt="vending machine"
        />
        <div>
          <h1>Welcome to the Snackporeum</h1>
        </div>
        <div>
          <Link to="/chips">Chips</Link>
          <Link to="/soda">Soda</Link>
          <Link to="/candy">Candy</Link>
        </div>
      </div>
    </>
  );
};

export default VendingMachine;
