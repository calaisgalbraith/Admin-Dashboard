import './Navbar.css';
import { FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
        <nav className="navbar bg-dark fixed-top" id="dashboardNavbar">
        <div className="container-fluid">
          <Link to='/' className='navbar-brand'>
              <FaPaw />
              <span>Paws Shelter</span>
          </Link>
            <div className="d-flex">
                Signed in as: System Admin
            </div>
        </div>
        </nav>
    </header>
  );
}

export default Navbar;