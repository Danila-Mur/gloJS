'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: false,
  service1: '',
  servicePrice1: 0,
  service2: '',
  servicePrice2: 0,
  rollback: 50,
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.title = appData.getTitle();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.logger();
  },
  logger: function () {
    for (let key in appData) {
      if (typeof appData[key] === 'function') {
        console.log('key: ', key);
      } else {
        console.log('key: ', key + ' appData: ', appData[key]);
      }
    }
    console.log(appData.title);
    console.log(appData.screens.toLocaleLowerCase().split(', '));
    console.log(appData.getRollbackMessage(appData.fullPrice));
    console.log(appData.servicePercentPrice);
  },
  asking: function () {
    appData.title = prompt(
      'Введите название Вашего проекта...',
      'Калькулятор верстки'
    );
    appData.screens = prompt(
      'Введите типы экранов для разработки',
      'Desktop, tablet, mobile'
    );

    do {
      appData.screenPrice = prompt(
        'Сколько будет стоить данная работа?',
        15000
      );
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num.trim() === num;
  },
  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let price = 0;

      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
      }

      do {
        price = prompt('Сколько это будет стоить?', '10000');
      } while (!appData.isNumber(price));
      sum += +price;
    }

    return sum;
  },
  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    return (
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLowerCase()
    );
  },
  getServicePercentPrices: function () {
    return appData.fullPrice - (appData.fullPrice * appData.rollback) / 100;
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return 'Скидка 10%';
    } else if (price >= 15000) {
      return 'Скидка 5%';
    } else if (price >= 0) {
      return 'Скидка не предусмотрена';
    } else {
      return 'Что то пошло не так';
    }
  },
};

appData.start();
