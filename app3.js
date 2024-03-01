function getArray2D() {
    let mainArraySize = parseInt(prompt("Enter the length of the main array:"));
    let subArraySize = parseInt(prompt("Enter the length of the internal arrays:"));
    
    let mainArray = [];

    for (let i = 0; i < mainArraySize; i++) {
        let subArray = [];
        for (let j = 0; j < subArraySize; j++) {
            let userInput = prompt(`Enter a value for the array #${i+1}, element #${j+1}`);
            subArray.push(userInput);
        }
        mainArray.push(subArray);
    }

    return mainArray;
}
let array = getArray2D();
console.log(array);
