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
        if (x > 3) break
        x++;
        sometext = prompt("Введите текст", "Впечатайте любой текст");
    }
    while ((sometext == "Впечатайте любой текст" || sometext == "" || sometext == null) && x < 2)
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
    for (i = 10; i > 0; i--) {
        myarray[10 - i] = i - 1
    }
    alert(myarray)
    if (i != 0) { alert("Если это задание 3.5.5, то вы забыли выполнить его условие") }
}
function task316() {
    var myarray = new Array("", "", "", "", "", "", "", "", "", "");
    var y = -1, ys = "", extent1 = ".gif", extent2 = ".jpg";  //вставьте в extent2 расширение для формата JPEG
    for (x in myarray) {
        y++;
        ys = y;
        myarray[x] = "\n<a href=\"../image1/" + x + ".jpg\"" + ">рис." + ys + "</a>";
    }
    alert("Ссылки на мои картинки gif-формата:" + myarray);
    console.log(myarray)
    if (extent2 != ".jpg") { alert("Если это задание 356, то Вы, забыли про фото в формате jpeg"); }
}
function task317() {
    var x = 0;
    while (x < 10) {
        x++;
        if (x % 2 !== 0) {
            continue;
        }
        alert(x);
    }
}
function task318() {
    let breakat = prompt("Введите число для прерывания цикла от 1 до 10-ти ", "");
    for (let i = 0; i < 10; i++) {
        if (i == breakat) {
            break;
        }
        alert(i);
    }
}
function task319() {
    var yourchoice;
    yourchoice = prompt("Введите a/b/c/d или что-то другоеы", "a, b, c, d или e")
    switch (yourchoice) {
        case "a":
            alert("Вы ввели букву а");
            break;
        case "b":
            alert("Вы ввели букву b");
            break;
        case "c":
            alert("Вы ввели букву c");
            break;
        case "d":
            alert("Вы ввели букву d");
            break;
        case "e":
            alert("Вы ввели букву e");
            break;    
        default: //эта метка и соответствующие ей операторы предусмотрены для выполнения по умолчанию
            alert("Вы ввели что-то непонятное");
            break;
    }
}
function task3110() {

}
