let inputMoney = +prompt('Enter amount: ');
let rate = +prompt('Enter the rate: ');
let year = +prompt('Enter the year: ');

let total = inputMoney * (rate / 100);
let totalAmount = total * year + (inputMoney);

document.write("Total amount is: " + totalAmount);