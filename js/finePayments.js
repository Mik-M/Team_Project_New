"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");




/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
buttonSubmit.addEventListener('click',payFine);

function payFine(){
    let filledFineNumber = DB.find(fine => fine.номер === fineNumber.value);
    let filledFineAmount = DB.find(fine => fine.сума === parseFloat(amount.value));
    let validationPassed = true;

    if (!filledFineNumber) {
         alert("Номер не співпадає!");
        validationPassed = false;
    }

    if (!filledFineAmount) {
         alert("Сума не співпадає!");
        validationPassed = false;
    }

    let passportPattern = /^[А-Я]{2}\d{6}$/;
    if (!passportPattern.test(passport.value)|| passport.value === "") {
         alert("Не вірний паспортний номер!");
        validationPassed = false;
    }

    let creditCardPattern = /^\d{16}$/;
    if (!creditCardPattern.test(creditCardNumber.value)) {
        return alert("Не вірна кредитна картка!");
        validationPassed = false;
    }

    let cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cvv.value)) {
         alert("Не вірний cvv!");
        validationPassed = false;
    }

    if (validationPassed) {
        const indexToRemove = DB.indexOf(filledFineNumber);
        DB.splice(indexToRemove, 1);
         alert("Оплата успішно виконана");
    return;
  }
}