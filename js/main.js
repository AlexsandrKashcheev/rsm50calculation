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
    let arrElem = [elemBet, elemBetHour, elemOvertime, elemDouble, elemPrize, elemResidue];
    let arrMeaning = ['Ставка за смену', 'Ставка за час', 'Начислено за сверхурочные', 'Начислено за двойные', 'Начисленно премии', 'Чистая сумма начислений'];
    let arrAria = [bet, betHour, overtimeSum, doubleBet, prizeSum, residue];
    let arrElemWhere = [btn, elemBet, elemBetHour, elemOvertime, elemDouble, elemPrize];

    for(let i = 0; i < arrElem.length; i++){
        arrElem[i].innerHTML = `${arrMeaning[i]}: ${Math.round(arrAria[i])}`;
        arrElem[i].classList.add('bet');
        arrElemWhere[i].after(arrElem[i]);
    }

}

btn.onclick = myFunc; //запуск функции при клике на кнопку

