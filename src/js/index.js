//практика урок 5

//1

let textContent = "";
const browser = "safari";
switch (browser) {
    case "Edge":
        textContent = "You`ve got the Edge!";
        break;
        case "Chrome": 
        case "Firefox":
        case "Safari":
        case "Opera":
            textContent = "Ми підтримуємо ці браузери";
            break;
            default:
                textContent = "Маємо надію, що ця сторінка виглядає добре!";
}
console.log(textContent);

//2

const a = Number(prompt("Введіть ціле число (1 - 3) :"));
let userResult;
switch (a) {
    case 0:
        result = 0;
        break;
    case 1:
        result = 1;
        break;
    case 2:
    case 3:
        result = "2, 3";
        break;
    default:
        userResult = "Ви ввели невірне значення цілого числа";
}
console.log(userResult);

//4

const number = Number(prompt("Введіть ціле число"));
if (number >= 55 && number <= 99){
    console.log("Число потрапляє в діапазон");
} else {
    console.log("Число не потрапляє в діапазон");
}
console.log(typeof number);

//5

const age = 55;
if (age >= 0 && age <= 16) {
    console.log("Діти");
} else if (age >= 17 && age <= 60) {
    console.log("Дорослиші");
} else if (age >= 61 && age <= 100) {
    console.log("Старі")
}

//6

const userName = prompt("Як вас звати?");
const userSurname = prompt("Ваше призвище");
if (userName.length > 4 && userSurname.length > 5) {
    const fullNameLength = userName.length + userSurname.length;
    alert(fullNameLength);
} else{
    alert("УПС");
}

//7 

