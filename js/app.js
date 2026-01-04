// Každý strike má vlastný counter
const strikes = [];

document.querySelectorAll(".button-container").forEach((container, index) => {
  let count = 0;

  const counter = container.querySelector(".counter");
  const plus = container.querySelector(".plus");
  const minus = container.querySelector(".minus");

  strikes[index] = () => count;

  plus.addEventListener("click", () => {
    count++;
    counter.textContent = count;
  });

  minus.addEventListener("click", () => {
    if (count > 0) {
      count--;
      counter.textContent = count;
    }
  });
});

// Stavka button
const stakeBtn = document.querySelector(".btn-12");

stakeBtn.addEventListener("click", () => {
  const values = strikes.map(fn => fn());

  const winningCombination = [3, 10, 20];

  const isWin = values.every((val, i) => val === winningCombination[i]);

  if (isWin) {
    alert("Vyhral si. Kombinácia sedí.");
  } else {
    alert(
      `Prehral si. Tvoje čísla: ${values.join(", ")} | Správne: ${winningCombination.join(", ")}`
    );
  }
});

