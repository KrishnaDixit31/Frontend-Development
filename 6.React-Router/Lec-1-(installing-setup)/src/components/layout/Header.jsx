import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="section-header">
      <section className="section-navbar">
        <div>
          <div>
            <p>Welcome To My Website.</p>
          </div>
          <div>
            <NavLink to="#">SIGN IN </NavLink>
            <NavLink to="#">SIGN UP </NavLink>
          </div>
        </div>
      </section>
      <div className="container">
        <div>
          <NavLink to="#">
            <p>SKTech</p>
          </NavLink>
        </div>
        <nav>
          <div>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/movie">Movie</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
