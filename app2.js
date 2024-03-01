function getValueFromUser(messageToUser, errorMessage, isOperation) {
  let value;
  const operations = ["+", "-", "*", "/", "%", "^"];
  do {
    if (value !== undefined) {
      alert(errorMessage);
    }
    value = prompt(messageToUser);
  } while (isOperation ? !operations.includes(value) : isNaN(parseInt(value)));
  if (!isNaN(parseInt(value))) {
    value = parseInt(value);
  }
  return value;
}
function doMath(x, y, znak) {
  switch (znak) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return y !== 0 ? x / y : "Error, division by zero";
    case "%":
      return (y / 100) * x;
    case "^":
      return Math.pow(x, y);
    default:
      return;
  }
}

let x = getValueFromUser("Enter the number", "Enter the correct number", false);
let znak = getValueFromUser(
  "Enter operation (+, -, *, /, %, ^)",
  "Enter the correct operation",
  true
);
let y = getValueFromUser("Enter the number", "Enter the correct number", false);
let result = doMath(x, y, znak);
document.write(`${x} ${znak} ${y} = ${result}`);
