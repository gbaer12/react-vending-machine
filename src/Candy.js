import { Link } from "react-router-dom";

const Candy = () => {
  return (
    <div>
      <h1>Sweet Tooth Time!!!!</h1>
      <img
        src="https://media4.giphy.com/media/l04LqI4vxMb0Fj6lTd/giphy-downsized-large.gif?cid=6c09b952bydxmz9rs05kn33v28yw3g6jnczylj6k01bryuqi&ep=v1_internal_gif_by_id&rid=giphy-downsized-large.gif&ct=g"
        alt="candy"
      />
      <h3>Yummmmmmmmmmmmm!!!</h3>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Candy;
