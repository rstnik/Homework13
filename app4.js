function removeChars(str, charsToRemove) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!charsToRemove.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

let str = prompt("Enter the string:");
let charsToRemove = prompt("Enter the characters to be deleted separated by commas:").split(',');
let result = removeChars(str, charsToRemove);
console.log(result);
