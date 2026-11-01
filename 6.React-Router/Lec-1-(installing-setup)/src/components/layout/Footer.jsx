import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="container">
        <div className="info">
          <NavLink to="#">
            <p>SKTech</p>
          </NavLink>
          <p>
            Welcome to SKTech. your ultimate destination for cult classic
            movies.
          </p>
        </div>
        <div className="section-footer--2">
          <p>Quick Links</p>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movie">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="section-footer--3">
          <p>SUPPORT</p>
          <ul>
            <li>
              <NavLink to="#">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="#">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="#">Privacy Policy</NavLink>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <p>Be part of us</p>
          <input type="email" placeholder="Your Email" />
        </div>
      </div>
    </footer>
  );
};
