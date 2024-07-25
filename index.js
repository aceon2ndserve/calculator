const display = document.querySelector(".display");

const addToDisplay = (digit) => {
  display.value += digit;
  console.log(display.value);
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error, hit C";
  }
};

const clearDisplay = () => {
  display.value = "";
};

document.addEventListener("keydown", (e) => {
  e.preventDefault();

  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
    "Enter",
    "Backspace",
    "Escape",
  ];

  if (!allowedKeys.includes(e.key)) {
    return;
  }

  if (e.key === "Escape") {
    return clearDisplay();
  }

  if (e.key === "Enter") {
    return calculate();
  }

  if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else {
    addToDisplay(e.key);
  }
});
