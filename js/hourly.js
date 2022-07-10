const inputHour = document.getElementById('hour');
const inputHourSum = document.getElementById('hourSum');
const inputPrize = document.getElementById('prize');
const inputOvertime = document.getElementById('overtime');
const btn = document.getElementById('btn');
const elemMonth = document.createElement('div');
const elemPrize = document.createElement('div');
const elemOvertime = document.createElement('div');
const elemResidue = document.createElement('div');



function myFunc() {
    //Присвоение элементам значения полей ввода
    let hour = Number(inputHour.value);
    console.log(hour);

    let hourSum = Number(inputHourSum.value);
    console.log(hourSum);

    let prize = Number(inputPrize.value);
    console.log(prize);

    let overtime = Number(inputOvertime.value);
    console.log(overtime);



    //Расчеты
    let month = hourSum * hour;
    console.log(`Начислено по норме часов: ${Math.round(month)}`);

    let prizeSum = month * prize / 100;
    console.log(`Начисленно премии: ${Math.round(prizeSum)}`);

    let overTimeSum = overtime * hour;

    if(overtime > 30 && overtime <= 50) {
        overTimeSum *= 1.5;
    }else if(overtime > 50){
        overTimeSum *= 2;
    }

    console.log(`Начислено за сверхурочные(Оверы): ${Math.round(overTimeSum)}`);

    let sum = month + prizeSum + overTimeSum;
    console.log(`Начислено до вычета ндфл: ${Math.round(sum)}`);

    let residue = sum - sum * 13 / 100;
    console.log(`Чистая сумма начислений: ${Math.round(residue)}`);



    //добавление элементов на страницу
    elemMonth.innerHTML = `Начислено по норме часов: ${Math.round(month)}`;
    elemMonth.classList.add('bet');
    btn.after(elemMonth);

    elemPrize.innerHTML = `Начисленно премии: ${Math.round(prizeSum)}`;
    elemPrize.classList.add('bet');
    elemMonth.after(elemPrize);

    elemOvertime.innerHTML = `Начислено за сверхурочные(Оверы): ${Math.round(overTimeSum)}`;
    elemOvertime.classList.add('bet');
    elemPrize.after(elemOvertime);

    elemResidue.innerHTML = `Чистая сумма начислений: ${Math.round(residue)}`;
    elemResidue.classList.add('bet');
    elemOvertime.after(elemResidue);
}


btn.onclick = myFunc;