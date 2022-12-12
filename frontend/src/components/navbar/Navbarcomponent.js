// import "./../../styles/Nav.css";
import { Link } from "react-router-dom";
import { useHomeContext } from "../context/useHomeContext";

const logout = () => {
  localStorage.clear();
};

const Navbarcomponent = () => {
  const { onloging, onsessionout } = useHomeContext();
  return (
    <div className="nav flex-grow-0 flex-shrink-1 flex-basis-auto">
      <h3>
        <b>
          <i>SUICURA</i>
        </b>
      </h3>
      <Link to="/">
        <button
          onClick={() => {
            logout();
            onloging(1);
            onsessionout();
          }}
        >
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </Link>
    </div>
  );
};

export default Navbarcomponent;
