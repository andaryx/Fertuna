document.querySelectorAll(".button-container").forEach(container => {
  let count = 0;

  const counter = container.querySelector(".counter");
  const plus = container.querySelector(".plus");
  const minus = container.querySelector(".minus");

  plus.addEventListener("click", () => {
    count++;
    counter.textContent = count;
  });

  minus.addEventListener("click", () => {
    count--;
    counter.textContent = count;
  });
});


minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
});
