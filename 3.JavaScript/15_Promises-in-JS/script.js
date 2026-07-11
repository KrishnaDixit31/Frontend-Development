//? Promises in Js :-

const p1 = fetch("https://api.github.com/users");
console.log(p1);

// p1.then((data) => {
//   console.log(data);
// });

// p1.catch((error) => {
//   console.log(error);
// });

// 1. way - promise:pending
// p1.then((response) => {
//   console.log(response.json());
// });

// 2. way
// p1.then((response) => {
//   return response.json();
// });
// p1.then((data) => {
//   console.log(data);
// });

// 3. way
// const p2 = p1.then((response) => {
//   return response.json();
// });

// p2.then((data) => {
//   console.log(data);
// });

//* Custom Promise :-
const p = new Promise((resolve, reject) => {
  resolve({
    name: "Krishna",
    age: 20,
  });
});

p.then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});

// Eg:-
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random();

      if (success > 0.5) {
        resolve({
          data: `name: "Krishna",
    age: 20`,
        });
      } else {
        reject("Network error");
      }
    }, 1000);
  });
}

// Consuming the promise:
fetchData()
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Request completed");
  });

//* creating HTML new element :-
// fetch("https://api.github.com/users")
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error("Data is not present in server");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const parent = document.getElementById("first");

//     for (let i = 0; i < data.length; i++) {
//       const image = document.createElement("img");
//       image.src = data[i].avatar_url;
//       image.style.height = "200px";
//       image.style.width = "200px";
//       parent.append(image);
//     }
//   })
//   .catch((error) => {
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
//   });

//* Old Question of callback hell :-
const orderDetail = {
  orderId: 123123,
  food: ["Pizza", "biryani", "coke"],
  cost: 620,
  customer_name: "Rohit",
  customer_location: "Dwarka",
  restaurant_location: "Delhi",
};

function placedOrder(orderDetail) {
  console.log(`${orderDetail.cost} Payment is in progress`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        console.log("Payment is received and order get placed");
        orderDetail.status = true;
        resolve(orderDetail);
      } else {
        reject("Payment is failed");
      }
    }, 3000);
  });
}

function preparingOrder(orderDetail) {
  console.log(`Your food preparation started of ${orderDetail.food}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.05) {
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        resolve(orderDetail);
      } else {
        reject("Food item is not persent at restaurant");
      }
    }, 3000);
  });
}

function pickupOrder(orderDetail) {
  console.log(
    `Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.05) {
        console.log("I have picked up the order");
        orderDetail.received = true;
        resolve(orderDetail);
      } else {
        reject("Delivery boy Unable to reach restaurant");
      }
    }, 3000);
  });
}

function deliverOrder(orderDetail) {
  console.log(
    `I am on my way to deliver order ${orderDetail.customer_location}`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order delivered successfully");
      orderDetail.delivery = true;
      resolve(orderDetail);
    }, 3000);
  });
}

// Promise Chaining :-
placedOrder(orderDetail)
  .then((orderDetail) => preparingOrder(orderDetail))
  .then((orderDetail) => pickupOrder(orderDetail))
  .then((orderDetail) => deliverOrder(orderDetail))
  .then((orderDetail) => {
    console.log(orderDetail);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("I am doing cleanup");
  });
