import { Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavBar = (props) => {
  //   const location = useLocation();
  const navigate = useNavigate();
  //   const search = `Search in ${section} `;

  return (
    <Navbar collapseOnSelect expand="lg" width="100" className="mr-2">
      <Navbar.Brand onClick={() => navigate("/")}>
        <i className="fas fa-cloud-sun logo"></i>
        <span className="text-light">Weather-app</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Link to="/">
            <div
              className="nav-link"
              //   id={location.pathname === "/movies" ? "active" : ""}
            >
              Something
            </div>
          </Link>
          <Link to="/">
            <div
              className="nav-link"
              //   id={location.pathname === "/TV-Shows" ? "active" : ""}
            >
              Something
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
