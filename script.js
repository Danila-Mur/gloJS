'use strict';

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: false,
  services: {},
  allServicePrices: 0,
  rollback: 50,
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getTitle();
    appData.getServicePercentPrices();
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
    console.log(appData.getRollbackMessage(appData.fullPrice));
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.services);
  },
  asking: function () {
    do {
      appData.title = prompt(
        'Введите название Вашего проекта...',
        'Калькулятор верстки'
      );
    } while (appData.isNumber(appData.title));

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt(
          'Введите типы экранов для разработки',
          'Desktop, tablet, mobile'
        );
      } while (appData.isNumber(name));
      let price = 0;

      do {
        price = prompt('Сколько будет стоить данная работа?', 15000);
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;
      let counter = 0;
      do {
        name = prompt('Какой дополнительный тип услуги нужен?');
        name += '_' + appData.randoHash(4)
      } while (appData.isNumber(name));

      do {
        price = prompt('Сколько это будет стоить?', '10000');
      } while (!appData.isNumber(price));

      appData.services[name] = +price;
    }
  },
  randoHash: function (i) {
    let rnd = '';
    while (rnd.length < i) {
      rnd += Math.random().toString(36).substring(2);
    }
    return rnd.substring(0, i);
  },
  addPrices: function () {
    appData.screenPrice = appData.screens.reduce(
      (previousValue, currentValue) => {
        return +previousValue.price + +currentValue.price;
      }
    );
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num.trim() === num;
  },
  getAllServicePrices: function () {
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLowerCase();
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice =
      appData.fullPrice - (appData.fullPrice * appData.rollback) / 100;
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
