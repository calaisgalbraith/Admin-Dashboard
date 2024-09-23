import './Navbar.css';
function Navbar() {
  return (
    <>
        <nav className="navbar bg-dark" id="dashboardNavbar">
        <div className="container-fluid">
            <a class="navbar-brand">Paws Shelter</a>
            <div className="d-flex">
                Signed in as: System Admin
            </div>
        </div>
        </nav>
    </>
  );
}

export default Navbar;