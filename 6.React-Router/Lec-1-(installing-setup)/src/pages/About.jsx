export const About = () => {
  return (
    <main>
      <section className="section-about">
        <div className="container">
          <h1 className="common-heading">About Us</h1>
          <p className="about-subheading">Dedicated to excellence in web development and user experience.</p>
        </div>

        <div className="container grid grid-two--cols about-content">
          <div className="about-image">
            <figure>
              <img
                src="/about_illustration.png"
                alt="about illustration"
                className="about-img"
              />
            </figure>
          </div>

          <div className="about-details">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To empower developers and businesses with the tools they need to
                build fast, scalable, and beautiful web applications. We believe
                in the power of open source and modern routing.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                To become the leading platform for learning and implementing
                advanced web technologies, making complex concepts accessible to
                everyone.
              </p>
            </div>

            <div className="about-card">
              <h3>Why Choose Us?</h3>
              <ul>
                <li>Modern Tech Stack (React Router 6, Glassmorphism)</li>
                <li>Performance Optimized Architecture</li>
                <li>Responsive and Scalable Design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};