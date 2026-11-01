import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (error.status === 404) {
    return (
      <section className="error-section">
        <div className="error-content">
          <h1>{error.status}</h1>
          <p>
            Oops! The page you were looking for could not be found.
            {error.data && <span> ({error.data})</span>}
          </p>
          <button className="btn-error" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </section>
    );
  }
  return <h1>You are hitting the wrong URL</h1>;
};
