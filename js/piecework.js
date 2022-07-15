const inputHour = document.getElementById('hour'); //получение ставки за час
const inputDay = document.getElementById('day'); //Дней в месяце
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
    console.log(hour);

    let day = Number(inputDay.value);
    console.log(day);

    let numberOfPeople = Number(inputPeople.value);
    console.log(numberOfPeople);

    let bs = Number(inputBs.value);
    console.log(bs);

    let plan = Number(inputPlan.value);
    console.log(plan);

    let lag = Number(inputLag.value);
    console.log(lag);

    let overtime = Number(inputOvertime.value);
    console.log(overtime);


    //Расчеты
   let month = plan * price / numberOfPeople;
   console.log(`Начисленно по сделке: ${Math.round(month)}`);

   let prize = (lag / plan) * 100; // расчет суммы удержания в процентах
   let betPrize = 50 - prize; 
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
    let arrElem = [elemMonth, elemPrize, elemOvertime, elemResidue];
    let arrMeaning = ['Начисленно по сделке', 'Начисленно премии', 'Начислено за сверхурочные', 'Чистая сумма начислений'];
    let arrAria = [month, prizeSum, overTimeSum, residue];
    let arrElemWhere = [btn, elemMonth, elemPrize, elemOvertime, elemResidue]; 

    for(let i = 0; i < arrElem.length; i++){
        addendum(arrElem[i], arrMeaning[i], arrAria[i], arrElemWhere[i]);
    }

}

btn.onclick = myFunc;

function addendum(object, meaning, varia, where) {
    object.innerHTML = `${meaning}: ${Math.round(varia)}`; //наполнение нового элемента содержимым
    object.classList.add('bet'); //добавление класса новому элементу
    where.after(object); //добавление элемента на страницу
}