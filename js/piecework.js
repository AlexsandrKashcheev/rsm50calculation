const inputHour = document.getElementById('hour');
const inputDay = document.getElementById('day');
const inputBs = document.getElementById('bs');
const inputPrize = document.getElementById('prize');
const inputOvertime = document.getElementById('overtime');
const btn = document.getElementById('btn');
const elemMonth = document.createElement('div');
const elemOvertime = document.createElement('div');
const elemPrize = document.createElement('div');
const elemResidue = document.createElement('div');

let countHour = 8;


function myFunc() {
    //присвоение переменным значения полей ввода
    let hour = Number(inputHour.value);
    console.log(hour);

    let day = Number(inputDay.value);
    console.log(day)

    let bs = Number(inputBs.value);
    console.log(bs);

    let prize = Number(inputPrize.value);
    console.log(prize);

    let overtime = Number(inputOvertime.value);
    console.log(overtime);



    //Расчеты
    let bet = hour * countHour; //расчет ставки за смену
    console.log(`Ставка за смену: ${Math.round(bet)}`);

    let monthHour = countHour * day - bs;
    console.log(monthHour);

    let month = monthHour * hour; //расчет начисление за отработтаные дни
    console.log(`начислено за отработаные дни: ${Math.round(month)}`);

    let prizeSum = month * prize / 100; //расчет премии
    console.log(`начисленно премии: ${Math.round(prizeSum)}`);

    let overTimeSum = overtime * hour; //расчет сверхурочных
    console.log(`Начисленно за сверхурочные: ${Math.round(overTimeSum)}`);

    let sum = month + prizeSum + overTimeSum; //расчет начислений до вычета ндфл
    console.log(`Начисленно за месяц: ${Math.round(sum)}`);

    let residue = sum - sum * 13 / 100; //Вычет ндфл
    console.log(`Чистая сумма начислений: ${Math.round(residue)}`);




    //Добавление элементов на страницу
    elemMonth.innerHTML = `Начислено за фонд времени: ${Math.round(month)}`; //наполнение нового элемента
    elemMonth.classList.add('bet'); //добавление класса элементу
    btn.after(elemMonth); //добавление элемента на страницу

    elemOvertime.innerHTML = `Начисленно за сверхурочные: ${Math.round(overTimeSum)}`;
    elemOvertime.classList.add('bet');
    elemMonth.after(elemOvertime);

    elemPrize.innerHTML = `Начисленно премии: ${Math.round(prizeSum)}`;
    elemPrize.classList.add('bet');
    elemOvertime.after(elemPrize);

    elemResidue.innerHTML = `Чистая сумма начислений: ${Math.round(residue)}`;
    elemResidue.classList.add('bet');
    elemPrize.after(elemResidue);
}

btn.onclick = myFunc;