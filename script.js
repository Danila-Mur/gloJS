let title = 'Glo JS';
let screens = 'Desktop, Tablet, Mobile';
let screenPrice = 300;
const rollback = 50; 
let fullPrice = 80000;
let adaptive = true;

console.log(typeof title, typeof fullPrice, typeof adaptive);
// or
console.log('title: ', typeof title);
console.log('fullPrice: ', typeof fullPrice);
console.log('adaptive: ', typeof adaptive);

console.log('screens: ', screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
console.log(screens.toLocaleLowerCase().split(', '));
console.log(fullPrice * rollback / 100);

