function task311() {
    var response = confirm("Вы выбираете JavaScript? - Нажмите OK. А если нет - Cancel."); // а как еще здесь можно применить оператор var
    alert('Сейчас вы получите ответ на основе вашего выбора')
    if (response == true) {
        alert("Отличный выбор!")
    }
    else {
        alert("Может подумаете? Просмотрите конспект на сайте КМТИ.")
    }
}
function task312() {
    var x = 0
    do {
        ++x
        alert(x)
    }
    while (x < 5)
}
function task313() {
    var x = -1;
    do {
        if (x>3) break
        x++;
        sometext = prompt("Введите текст", "Впечатайте любой текст");
    }
    while ((sometext == "Впечатайте любой текст" || sometext == "" || sometext == null) && x<2)
    console.log(x)
    if (x > 3) { alert("Если это задание 3.5.3, то вы забыли выполнить его условие."); }
    alert(sometext);
}
function task314() {
    var x = 0
    while (x < 5) {
        ++x
        alert(x)
    }
}
function task315() {
    var myarray = []
    for (i = 9; i >= 0; i--)
      {
        myarray[9-i] = i
      }
    alert(myarray)
    if (i != 0) {alert("Если это задание 3.5.5, то вы забыли выполнить его условие")}
    
}   

