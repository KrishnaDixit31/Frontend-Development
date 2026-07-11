const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const boy = document.getElementById("boy");
  const girl = document.getElementById("girl");

  const length1 = boy.value.length;
  const length2 = girl.value.length;
  const result = Math.pow(length1 + length2, 3) % 101;

  document.querySelector("h2").textContent = `Result: ${result}%`;
  form.reset();
});
