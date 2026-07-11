//? Callback Hell :-

const orderDetail = {
  orderId: 123123,
  food: ["Pizza", "biryani", "coke"],
  cost: 620,
  customer_name: "Rohit",
  customer_location: "Dwarka",
  restaurant_location: "Delhi",
};

function placedOrder(orderDetail, Callback) {
  console.log(`Processing the payment of ${orderDetail.cost}`);

  setTimeout(() => {
    console.log("Payment completed and Order is placed");
    orderDetail.paymetStatus = true; // Add new data
    Callback(orderDetail); // Pass to next step
  }, 3000);
}

function preparingOrder(orderDetail, Callback) {
  console.log(`Your Order is getting Prepared ${orderDetail.food}`);

  setTimeout(() => {
    console.log("Your Order is prepared");
    orderDetail.token = "10";
    Callback(orderDetail);
  }, 3000);
}

function pickupOrder(orderDetail, Callback) {
  console.log(
    `Delivery partner is on the way to pickup the order from ${orderDetail.restaurant_location}`
  );

  setTimeout(() => {
    console.log("I have picked up the order");
    orderDetail.received = true;
    Callback(orderDetail);
  }, 3000);
}

function deliverOrder(orderDetail) {
  console.log(
    `I am on my way to deliver order ${orderDetail.customer_location}`
  );

  setTimeout(() => {
    console.log("Order delivered succesfully");
    orderDetail.delivery = true;
  }, 3000);
}

placedOrder(orderDetail, (orderDetail) => {
  preparingOrder(orderDetail, (orderDetail) => {
    pickupOrder(orderDetail, (orderDetail) => {
      deliverOrder(orderDetail);
    });
  });
});

setTimeout(() => {
  console.log(orderDetail);
}, 13000);
