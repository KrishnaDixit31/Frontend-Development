import "./Event.css";

export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hay ${user}`);
  };

  const handleHover = () => {
    alert(`Hay Thanks for Hovering Me`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("Krishna")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log(`Hay User, Welcome`);
    props.onClick();
  };

  return (
    <>
      <button onClick={props.onClick}>Click</button>
      <br />
      <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
      <br />
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};
