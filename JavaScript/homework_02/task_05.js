var name = prompt('Введите ваш логин:', 'user');

var text = (name == 'admin') ? 'Hi' : 
  (name == 'manager') ? 'Hello' : 
    (name === '') ? 'No login' : '';
alert(text);