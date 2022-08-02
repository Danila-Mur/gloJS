'use strict';

const title = prompt('Введите название Вашего проекта...'),
  screens = prompt('Введите типы экранов для разработки'),
  screenPrice = +prompt('Сколько будет стоить данная работа?'),
  rollback = 50,
  adaptive = confirm('Нужен ли адаптив на сайте?'),
  service1 = prompt('Какой дополнительный тип услуги нужен?'),
  servicePrice1 = +prompt('Сколько это будет стоить?'),
  service2 = prompt('Какой дополнительный тип услуги нужен?'),
  servicePrice2 = +prompt('Сколько это будет стоить?'),
  fullPrice = screenPrice + servicePrice1 + servicePrice2,
  servicePercentPrice = Math.ceil(fullPrice - rollback);

switch(true) {
  case fullPrice >= 30000:
    console.log('Скидка 10%');
    break;
  case fullPrice >= 15000: 
    console.log('Скидка 5%');
    break;
  case fullPrice >= 0:
    console.log('Скидка не предусмотрена');
    break;
  default:
    console.log('Что то пошло не так');    
}

console.log(typeof title, typeof fullPrice, typeof adaptive);
// or
console.log('title: ', typeof title);
console.log('fullPrice: ', typeof fullPrice);
console.log('adaptive: ', typeof adaptive);

console.log('screens: ', screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
console.log(screens.toLocaleLowerCase().split(', '));
