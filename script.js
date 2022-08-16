document.getElementById("btn-login").addEventListener('click', function() {
    const emailField = document.getElementById('email');
    const passField = document.getElementById("pass");

    if (emailField.value == 'mamun@gmail.com' && passField.value == 'mamun') {
        window.location.href = "bankInside.html";

    } else {
        alert("Wrong email or password!!");
        passField.value = '';
    }
});