'use strict';

let title,
  screenPrice,
  screens,
  adaptive,
  service1,
  servicePrice1,
  service2,
  servicePrice2;
const rollback = 50;

const isNumber = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num) && num.trim() === num;
};

const asking = () => {
  title = prompt('Введите название Вашего проекта...', 'Калькулятор верстки');
  screens = prompt(
    'Введите типы экранов для разработки',
    'Desktop, tablet, mobile'
  );

  do {
    screenPrice = prompt('Сколько будет стоить данная работа?', 15000);
  } while (!isNumber(screenPrice));

  adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function () {
  let sum = 0;
  let price;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }

    do {
      price = prompt('Сколько это будет стоить?', '10000');
    } while (!isNumber(price));
    sum += +price;
  }

  return sum;
};

function getFullPrice(screenPrice, allServicePrices) {
  return +screenPrice + allServicePrices;
}

const getTitle = (str) => {
  const title = str.trim().toLowerCase();
  return title[0].toUpperCase() + title.substr(1);
};

const getServicePercentPrices = (fullPrice, rollback) => {
  return fullPrice - (fullPrice * rollback) / 100;
};

const getRollbackMessage = (price) => {
  if (price >= 30000) {
    return 'Скидка 10%';
  } else if (price >= 15000) {
    return 'Скидка 5%';
  } else if (price >= 0) {
    return 'Скидка не предусмотрена';
  } else {
    return 'Что то пошло не так';
  }
};

const showTypeOf = (variable) => {
  console.log(variable, typeof variable);
};

asking();
const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice(screenPrice, allServicePrices);
title = getTitle(title);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('screenPrice:', screenPrice);

console.log(title);
console.log(screens.toLocaleLowerCase().split(', '));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
