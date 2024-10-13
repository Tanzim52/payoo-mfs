


document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let number = document.getElementById('number').value;
    let pin = document.getElementById('pin').value;
    let ogNumber =01744842814;
    let ogPin = 1111;
    if (number == ogNumber && pin == ogPin) {
        window.location.href='/homepage.html';
    }
    else{
        alert('Wrong num or pin')
    }

})