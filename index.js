let oprBtn, numBtn;
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const expression = document.getElementById("expression");
  const equalbtn = document.querySelector(".equalbtn");
  function addToInput(value) {
    if (value === "C") {
      input.value = "";
      addToExpression("");
      return;
    }
    let lastChar = input.value[input.value.length - 1];
    if (
      ["+", "-", "*", "x", "/", "X"].includes(lastChar) &&
      ["+", "-", "*", "x", "/", "X"].includes(value)
    ) {
      alert("invalid expression");
      return;
    }
    if (value === "=") return;
    input.value += Number(value) ? Number(value) : value;
  }
  function addToExpression(value) {
    if (value === "") expression.innerHTML = "";
    expression.innerHTML += Number(value) ? Number(value) : value;
  }
  numBtn = document.querySelectorAll("#numBtn");
  oprBtn = document.querySelectorAll("#oprBtn");
  console.log(numBtn, oprBtn);
  numBtn.forEach((btn) => {
    btn.addEventListener("click", () => addToInput(btn.innerHTML.trim()));
  });
  oprBtn.forEach((btn) => {
    btn.addEventListener("click", () => addToInput(btn.innerHTML.trim()));
  });
  equalbtn.addEventListener("click", () => {
    if (
      ["+", "-", "*", "x", "/", "X"].includes(
        input.value[input.value.length - 1]
      )
    ) {
      alert("invalid input");
    }
    addToExpression(Number(eval(input.value)).toFixed(3));
  });
});
