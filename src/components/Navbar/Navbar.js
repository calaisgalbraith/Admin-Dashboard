import './Navbar.css';
function Navbar() {
  return (
    <header>
        <nav className="navbar bg-dark fixed-top" id="dashboardNavbar">
        <div className="container-fluid">
            <a className="navbar-brand">Paws Shelter</a>
            <div className="d-flex">
                Signed in as: System Admin
            </div>
        </div>
        </nav>
    </header>
  );
}

export default Navbar;