// import "./../../styles/Nav.css";
import { Link, useNavigate } from 'react-router-dom'

const logout = () => {
  localStorage.clear()
}

const Navbarcomponent = () => {
  return (
    <div className='nav flex-grow-0 flex-shrink-1 flex-basis-auto'>
      <h3>
        <b>
          <i>SUICURA</i>
        </b>
      </h3>
      <Link to='/'>
        <button onClick={() => logout()}>
          <i class='fa-solid fa-right-from-bracket'></i>
        </button>
      </Link>
    </div>
  )
}

export default Navbarcomponent
