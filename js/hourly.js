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

    let sum = month + prizeSum + overTimeSum;
    console.log(`Начислено до вычета ндфл: ${Math.round(sum)}`);

    let residue = sum - sum * 13 / 100;
    console.log(`Чистая сумма начислений: ${Math.round(residue)}`);

    
    //добавление элементов на страницу
    let arrElem = [elemMonth, elemPrize, elemOvertime, elemResidue];
    let arrMeaning = ['Начисленно по норме часов', 'Начисленно премии', 'Начислено за сверхурочные', 'Чистая сумма начислений'];
    let arrAria = [month, prizeSum, overTimeSum, residue];
    let arrElemWhere = [btn, elemMonth, elemPrize, elemOvertime, elemResidue];  

    for(let i = 0; i < arrElem.length; i++){
        arrElem[i].innerHTML = `${arrMeaning[i]}: ${Math.round(arrAria[i])}`;
        arrElem[i].classList.add('bet');
        arrElemWhere[i].after(arrElem[i]);
        //addendum(arrElem[i], arrMeaning[i], arrAria[i], arrElemWhere[i]);
    }

}

btn.onclick = myFunc;

function addendum(object, meaning, varia, where) {
    object.innerHTML = `${meaning}: ${Math.round(varia)}`; //наполнение нового элемента содержимым
    object.classList.add('bet'); //добавление класса новому элементу
    where.after(object); //добавление элемента на страницу
}