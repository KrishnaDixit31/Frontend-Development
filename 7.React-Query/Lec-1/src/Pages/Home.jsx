import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <main className="hero-section">
      <h1 className="hero-title">Welcome To React Query</h1>
      <p className="hero-para">
        React Query simplifies data fetching and caching in React applications
        by managing server state, automatic refetching, and error handling so
        developers can focus on building UI without boilerplate.
      </p>
      <NavLink to="/rq">
        <button>Explore more</button>
      </NavLink>
    </main>
  );
};
