var login = prompt('Введите ваш логин:', 'user'), password;

if (login === 'admin') {
    password = prompt('Введите ваш пароль:');
    if (password === 'passw0rd') {
        alert('Welcome home!');
    } else if (password === '' || password == null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (login === '' || login == null) {
    alert('Canceled');
} else {
    alert('Access denied');
}