import { useState } from "react";
import "./index.css";

export const RegistrationForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter FirstName"
            required
            value={user.firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter LastName"
            required
            value={user.lastName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={user.email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={user.password}
            onChange={handleInputChange}
          />

          <label htmlFor="phoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            type="phone"
            name="phoneNumber"
            placeholder="Enter phoneNumber"
            required
            value={user.phoneNumber}
            onChange={handleInputChange}
          />

          <p className="terms">
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Term & Privacy
            </a>
          </p>

          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
      </form>
      <section className="summary">
        <p>
          Hello, my name is{" "}
          <span>
            {user.firstName} {user.lastName}
          </span>
          . My email address is <span>{user.email}</span> and my phone number is{" "}
          <span>{user.phoneNumber}</span>
        </p>
      </section>
    </>
  );
};
