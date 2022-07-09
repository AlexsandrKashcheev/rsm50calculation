const inputOklad = document.getElementById('oklad');
const inputPrize = document.getElementById('prize');
const inputOvertime = document.getElementById('overtime');
const inputDouble = document.getElementById('double');
const btn = document.getElementById('btn');
const elemBet = document.createElement('div');
const elemBetHour = document.createElement('div');
const elemOvertime = document.createElement('div');
const elemResidue = document.createElement('div');

let oklad;

function myFunc() { //основная функция всей программы

    //присвоение переменным значения полей ввода
    oklad = inputOklad.value; //присвоение переменной значения поля ввода
    console.log(+oklad);

    let prize = inputPrize.value;

    let overtime = inputOvertime.value;
    console.log(+overtime);

    let double = inputDouble.value;
    console.log(+double);


    //Расчеты
    let bet = +oklad / 23; //расчет ставки за день
    console.log(`Ставка за смену: ${Math.round(bet)}`);

    let betHour = bet / 8; //расчет ставки за час работы
    console.log(`Ставка за час работы: ${Math.round(betHour)}`);

    let overtimeSum = betHour * overtime;
    console.log(`Сумма оплаты за сверхурочные: ${Math.round(overtimeSum)}`);

    let doubleBet = (bet * 2) * double;
    console.log(`Сумма оплаты за двойные: ${Math.round(doubleBet)}`);

    let prizeSum = +oklad * +prize / 100;
    console.log(`Премия: ${Math.round(prizeSum)}`);

    let sum = +oklad + overtimeSum + doubleBet + prizeSum;
    console.log(`Начисления до вычета: ${Math.round(sum)}`);

    let residue = sum - sum * 13 / 100;
    console.log(`Чистая сумма начислений: ${Math.round(residue)}`);


    //добавление элементов на страницу
    elemBet.innerHTML = `Ставка за смену: ${Math.round(bet)}`; //наполнение нового элемента содержимым
    elemBet.classList.add('bet'); //добавление класса новому элементу
    btn.after(elemBet); //добавление элемента на страницу

    elemBetHour.innerHTML = `Ставка за час работы: ${Math.round(betHour)}`;
    elemBetHour.classList.add('bet');
    elemBet.after(elemBetHour);

    elemOvertime.innerHTML = `Сумма оплаты за сверхурочные: ${Math.round(overtimeSum)}`;
    elemOvertime.classList.add('bet');
    elemBetHour.after(elemOvertime);

    elemResidue.innerHTML = `Чистая сумма начислений: ${Math.round(residue)}`;
    elemResidue.classList.add('bet');
    elemOvertime.after(elemResidue);
}

btn.onclick = myFunc; //запуск функции при клике на кнопку



