//? JSX :-

// 1. Define the JSX element.
const element1 = <h1 id="title">Hello</h1>;

// 2. Get the root DOM element.
const rootElement = document.getElementById("root");

// 3. Create a React root.
const root = ReactDOM.createRoot(rootElement);

// 4. Render the React element into the root.
root.render(element1);

//* Multiline JSX :- use () always.

// const element2 = (
//     <div>
//         <h1>Title</h1>
//         <p>Paragraph</p>
//     </div>
// );

// we also use Fragments :-
const element2 = (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);
root.render(element2);

//* JS expression in JSX :- use {}.

const name = "Krishna";
const element3 = <h1 className="first">Hello {name}</h1>;
root.render(element3);

//* style attributes = Object :-

const element4 = (
  <h1 style={{ color: "blue", fontSize: "20px", backgroundColor: "aqua" }}>
    Hello World
  </h1>
);
root.render(element4);

//* boolean,null,undefined not render but present/working.
const element5 = <h1 className="first">Hello Coders {true}</h1>;
root.render(element5);

//? Components :- functions

function Greeting() {
  return <h1>Hello World</h1>;
}

// root.render(Greeting());
root.render(<Greeting />);

//* props :-
function UserCard(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </>
  );
}
root.render(<UserCard name="Krishna" age="21" />);
