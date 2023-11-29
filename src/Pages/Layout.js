import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
        </ul>
      </nav> */}

      <nav className="navbar navbar-expand-md fixed-top  bg-secondary  navbar-dark">
  <Link className="navbar-brand" to="/">
     <h4 className="ml-5   ">Earth</h4>
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#collapsibleNavbar"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item mm">
        <Link className="nav-link " to="/">
          HOME
        </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/About">
          ABOUT
        </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/Services">
          SERVICES
        </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/Contact">
          CONTACT
        </Link>
      </li>
    </ul>
  </div>
</nav>


      <Outlet />
    </>
  )
};

export default Layout;