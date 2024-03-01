function getArray() {
  let size;
  let arr = [];

  do {
    if (size !== undefined) {
      alert("Enter the correct number");
    }
    size = parseInt(prompt("Enter the number of elements in the array"));
  } while (isNaN(size) || size <= 0);

  for (let i = 0; i < size; i++) {
    let content = prompt("Enter content for element #" + (i + 1));
    arr.push(content);
  }

  return arr;
}

function getAvarage(array, maxValue) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < maxValue; i++) {
    if (!isNaN(parseInt(array[i]))) {
      array[i] = parseInt(array[i]);
      sum += array[i];
      count++;
    }
  }
  let avarage = sum / count;
  if (count === 0) {
    avarage = "All elements in the array are not numbers";
  }
  return avarage;
}

let array = getArray();
console.log(`Avarage is: ${getAvarage(array, array.length)}`);