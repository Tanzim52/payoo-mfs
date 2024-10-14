

document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let number = document.getElementById('number').value;
    let pin = document.getElementById('pin').value;
    let ogNumber = 98666420;
    let ogPin = 1111;
    let amountAdd = document.getElementById('amount-added').value;

    if (number == ogNumber && pin == ogPin && amountAdd > 0) {
        let mainBalanceInput = document.getElementById('balance-start').innerText;
        let addedBalanceInput = document.getElementById('amount-added').value;
        let mainBalance = parseFloat(mainBalanceInput);
        let addedBalance = parseFloat(addedBalanceInput);

        document.getElementById('balance-start').innerText = mainBalance + addedBalance;

    }
    else {
        alert('Failed to Add Money! Try again.')
    }
})