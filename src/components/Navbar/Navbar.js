import './Navbar.css';
import { FaPaw } from "react-icons/fa";

function Navbar({ changeFunc }) {
  return (
    <header>
        <nav className="navbar bg-dark fixed-top" id="dashboardNavbar">
        <div className="container-fluid">
          <div className='navbar-brand'>
              <FaPaw />
              <span>Paws Shelter</span>
          </div>
            <div className="d-flex">
                Signed in as: System Admin
            </div>
        </div>
        </nav>
    </header>
  );
}

export default Navbar;