import { Link } from "react-router-dom";
import SignedinLinks from "./SignedinLinks";
import SignedOutLinks from "./SignedOutLinks";
function Navbar() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Plan
        </Link>
        <SignedinLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
}

export default Navbar;
