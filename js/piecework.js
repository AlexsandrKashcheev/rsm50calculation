const inputHour = document.getElementById('hour'); //получение ставки за час
const inputPeople = document.getElementById('people'); // количество людей в бригаде
const inputBs = document.getElementById('bs'); // количество бс
const inputPlan = document.getElementById('plan'); //план на месяц
const inputLag = document.getElementById('lag'); //отставание
const inputOvertime = document.getElementById('overtime'); //количество сверхурочных
const btn = document.getElementById('btn'); // кнопка расчета
const elemMonth = document.createElement('div'); //элемент "начислено по сделке"
const elemOvertime = document.createElement('div'); // начисленно за сверхурочные
const elemBetPrize = document.createElement('div'); //премия в процентах
const elemPrize = document.createElement('div'); //начисленно премии
const elemResidue = document.createElement('div'); //чистая сумма начислений

let countHour = 8; //Продолжительность смены
let price = 2500; //Приблизительная цена одной машины

function myFunc() {
    //присвоение переменным значения полей ввода
    let hour = Number(inputHour.value);
    let numberOfPeople = Number(inputPeople.value);
    let bs = Number(inputBs.value);
    let plan = Number(inputPlan.value);
    let lag = Number(inputLag.value);
    let overtime = Number(inputOvertime.value);

    //Расчеты
   let month = plan * price / numberOfPeople - lag * price / numberOfPeople;
   console.log(`Начисленно по сделке: ${Math.round(month)}`);

   let prize = (lag / plan) * 100; // расчет суммы удержания в процентах
   let betPrize = (30 - 30 * prize / 100) + 20; 
  
   console.log(`Премия составила: ${Math.round(betPrize)}%`);
   let prizeSum = month * betPrize / 100; //расчет премии за выполненую работу
   console.log(`Начисленно премии: ${Math.round(prizeSum)}`);

   let retention = month - (bs * hour); //вычет за отпуск без сохранения зп
   console.log(`Сумма после вычета бс: ${Math.round(retention)}`);

   month = retention;
   console.log(`Начислено за месяц после вычета бс: ${Math.round(month)}`);

   let overTimeSum = (overtime * hour) * 2 / 3;
   console.log(`Начисленно за сверхурочные: ${Math.round(overTimeSum)}`);

   let sum = month + prizeSum + overTimeSum;
   console.log(`Начисленно до вычета ндфл: ${Math.round(sum)}`);

   let residue = sum - sum * 13 / 100;
   console.log(`Чистая сумма начислений: ${Math.round(residue)}`);


    //Добавление элементов на страницу
    let arrElem = [elemMonth, elemBetPrize, elemPrize, elemOvertime, elemResidue];
    let arrMeaning = ['Начисленно по сделке', 'Премия составила', 'Начисленно премии', 'Начислено за сверхурочные', 'Чистая сумма начислений'];
    let arrAria = [month, betPrize, prizeSum, overTimeSum, residue];
    let arrElemWhere = [btn, elemMonth, elemBetPrize, elemPrize, elemOvertime, elemResidue]; 

    for(let i = 0; i < arrElem.length; i++){
        if(arrElem[i] == elemBetPrize && arrMeaning[i] == 'Премия составила'){
            arrElem[i].innerHTML = `${arrMeaning[i]}: ${Math.round(arrAria[i])}%`;
        }else{
            arrElem[i].innerHTML = `${arrMeaning[i]}: ${Math.round(arrAria[i])}`;
        }
        
        arrElem[i].classList.add('bet');
        arrElemWhere[i].after(arrElem[i]);
    }

}

btn.onclick = myFunc;
