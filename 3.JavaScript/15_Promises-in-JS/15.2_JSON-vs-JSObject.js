// Convert to JSON :-
const user = {
  name: "Krishna",
  age: 30,
  address: "Dewas",
};

const jsonformate = JSON.stringify(user);
console.log(jsonformate);

// Convert to JS Object :-
const jsonFormat = `{
    "name":"Rohit",
    "age": 30,
    "address": "dwarka"
}`;

const JsObject = JSON.parse(jsonFormat);
console.log(JsObject);
