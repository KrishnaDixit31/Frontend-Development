import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <section className="section-hero">
        <div className="container grid grid-two--cols">
          <div className="section-hero--content">
            <p className="hero-subheading">Explore the World with React Router 6</p>
            <h1 className="hero-heading">Build Faster, Scalable Web Apps Today</h1>
            <p className="hero-para">
              Welcome to our modern web platform. We provide the tools and
              knowledge you need to create amazing user experiences using the
              latest web technologies.
            </p>
            <div className="hero-btn-group">
              <NavLink to="/movie" className="btn btn-hero">
                Get Started
              </NavLink>
              <NavLink to="/contact" className="btn btn-hero-secondary">
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="section-hero--image">
            <figure>
              <img
                src="/hero_illustration.png"
                alt="hero illustration"
                className="hero-image"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};

