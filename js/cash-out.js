
document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();

    let mainBalanceInput = document.getElementById('balance-start').innerText;
    let mainBalance = parseFloat(mainBalanceInput);

    let cashOutInput = document.getElementById('amount-out').value;
    let cashOut = parseFloat(cashOutInput);

    let pin = document.getElementById('out-pin').value;

    if (pin === '1111') {
        let mainBalanceInput = document.getElementById('balance-start').innerText;
        let mainBalance = parseFloat(mainBalanceInput);

        let cashOutInput = document.getElementById('amount-out').value;
        let cashOut = parseFloat(cashOutInput);
        document.getElementById('balance-start').innerText = mainBalance - cashOut;
    }
    else {
        alert('Failed to Cash Out! Try Again.')
    }
})