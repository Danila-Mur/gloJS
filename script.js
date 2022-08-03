'use strict';

let title = prompt('Введите название Вашего проекта...');
const screens = prompt('Введите типы экранов для разработки'),
  screenPrice = +prompt('Сколько будет стоить данная работа?'),
  rollback = 50,
  adaptive = confirm('Нужен ли адаптив на сайте?'),
  service1 = prompt('Какой дополнительный тип услуги нужен?'),
  servicePrice1 = +prompt('Сколько это будет стоить?'),
  service2 = prompt('Какой дополнительный тип услуги нужен?'),
  servicePrice2 = +prompt('Сколько это будет стоить?');

// 1
const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
};

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

// 2
function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}

const fullPrice = getFullPrice(screenPrice, allServicePrices);

// 3
const getTitle = (str) => {
  const title = str.trim().toLowerCase();
  return title[0].toUpperCase() + title.substr(1);
};

title = getTitle(title);

// 4
const getServicePercentPrices = (fullPrice, rollback) => {
  return fullPrice - (fullPrice * rollback) / 100;
};

const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

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

// 5
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(title);
console.log(screens.toLocaleLowerCase().split(', '));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
