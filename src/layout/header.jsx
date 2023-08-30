import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/test">Test</Link>
      </button>
    </>
  );
};

export default Header;
