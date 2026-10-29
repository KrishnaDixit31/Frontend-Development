import "./Event.css";

export const EventPropagation = () => {
  const handleGrandparent = () => {
    console.log("Grandparent is Clicked");
  };

  const handleParent = () => {
    console.log("Parent is Clicked");
  };

  const handleChild = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("Child is Clicked");
  };

  return (
    <>
      <section className="main-div">
        <div className="grandparent-div" onClickCapture={handleGrandparent}>
          <div className="parent-div" onClickCapture={handleParent}>
            <button className="child-div" onClickCapture={handleChild}>
              Child Div
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
