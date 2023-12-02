"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */


     switch (true) {
        case searchKey === "001":
            return [DB[0]];
            break;
        case searchKey === "002":
            return [DB[1]];
            break;
        case searchKey === "003":
            return [DB[2]];
            break;
        case searchKey === '004':
            return [DB[3]];
            break;
        case searchKey === "005":
            return [DB[4]];
            break;
     }
     
    // return alert ("Будь ласка введіть існуючий номер штрафу!");
    // return [
    //     {номер: '001', тип: 'Перевищення швидкості', сума: 100, дата: '2023-01-15'}
    // ];
    

    let regex1 = /Перевищення швидкості/i;
    let word1 = searchKey.match(regex1);

    let regex2 = /Невірне паркування/i;
    let word2 = searchKey.match(regex2);

    let regex3 = /Їзда у не тверезому стані/i;
    let word3 = searchKey.match(regex3);


    if (word1) {
        return DB.filter((item) => {
            return item.тип.includes("Перевищення швидкості")});
    } else if (word2) {
        return DB.filter((item) => {
            return item.тип.includes("Невірне паркування")});
    } else if (word3) {
        return DB.filter((item) => {
            return item.тип.includes("Їзда у не тверезому стані")});
    } else {
        return alert ("Будь ласка введіть існуючий номер/тип штрафу!");
    }
    
}

//////////////////////////////////////////////////

// added comments for commit
