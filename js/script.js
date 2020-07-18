let firstNumber;
let secondNumber;
let sumOfNumbers = 0;

firstNumber = parseInt(prompt('Введіть перше ЦІЛЕ число.', ''));

while (firstNumber === '' || isNaN(firstNumber)) {
    alert('Було введено невірне число, попробуйте ще раз');
    firstNumber = parseInt(prompt('Введіть перше ЦІЛЕ число.', ''));
}

secondNumber = parseInt(prompt('Введіть друге ЦІЛЕ число. (більше, ніж перше)', ''));

while (secondNumber === '' || isNaN(secondNumber) || (secondNumber < firstNumber) ) {
    alert('Було введено невірне число, попробуйте ще раз');
    secondNumber = parseInt(prompt('Введіть друге ЦІЛЕ число. (більше, ніж перше)', ''));
}

let skipEven = confirm("Чи пропускатимемо парні числа? (OK - Так, Cancel - Ні)");

if (skipEven) {
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i % 2 !== 0) {
            sumOfNumbers += i;
        }
    }
} else {
    for (let i = firstNumber; i <= secondNumber; i++) {
        sumOfNumbers += i;
    }
} 

alert(sumOfNumbers);
document.writeln(`<p>Ваш результат: ${sumOfNumbers}</p>`);