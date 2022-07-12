const inputOklad = document.getElementById('oklad');
const inputPrize = document.getElementById('prize');
const inputOvertime = document.getElementById('overtime');
const inputDouble = document.getElementById('double');
const inputCheck = document.getElementById('work_day');
const btn = document.getElementById('btn');
const elemBet = document.createElement('div');
const elemBetHour = document.createElement('div');
const elemOvertime = document.createElement('div');
const elemResidue = document.createElement('div');
const elemPrize = document.createElement('div');
const elemDouble = document.createElement('div');


function myFunc() { //основная функция всей программы

    //присвоение переменным значения полей ввода
    let hourDay;
    
    if(inputCheck.checked){
        hourDay = 12;
    }else{
        hourDay = 8;
    }


    let oklad = Number(inputOklad.value);
    console.log(oklad);

    let prize = Number(inputPrize.value);

    let overtime = Number(inputOvertime.value);
    console.log(overtime);

    let double = Number(inputDouble.value);
    console.log(double);


    //Расчеты
    let bet = +oklad / 23; //расчет ставки за день
    console.log(`Ставка за смену: ${Math.round(bet)}`);

    let betHour = bet / hourDay; //расчет ставки за час работы
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
    addendum(elemBet, "Ставка за смену", bet, btn);

    addendum(elemBetHour, "Ставка за час", betHour, elemBet);

    addendum(elemOvertime, "Начисленно за сверхурочные", overtimeSum, elemBetHour);

    addendum(elemDouble, 'Начислено за двойные', doubleBet, elemOvertime);

    addendum(elemPrize, 'Начисленно премии', prizeSum, elemDouble);

    addendum(elemResidue, "Чистая сумма начислений", residue, elemPrize);
}

btn.onclick = myFunc; //запуск функции при клике на кнопку

function addendum(object, meaning, varia, where) {
    object.innerHTML = `${meaning}: ${Math.round(varia)}`; //наполнение нового элемента содержимым
    object.classList.add('bet'); //добавление класса новому элементу
    where.after(object); //добавление элемента на страницу
}


