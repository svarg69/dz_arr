// 1. Создание объекта
// Создайте объект user, который содержит следующие свойства: name, age, и city. Присвойте им значения и выведите этот объект в консоль.

// const user = {
//     name: 'Alex',
//     age: 36,
//     city: 'Курск'
// };

// console.log(user)

// Задача 2. Доступ к свойствам
// Создайте объект car с свойствами brand, model, и year. Затем выведите значение свойства model в консоль.

// const car = {
//     brand: 'Kia',
//     model: 'Ceed',
//     year: 2018,
// }
//  console.log(car.model)

// Задача 3 Изменение свойств
// Создайте объект book с свойствами title и author. Затем измените значение свойства title и выведите обновленный объект в консоль.

// const book = {
//     title: 'Заголовок',
//     author: 'Я',
// }
// book.title = 'Другой заголовок';
// console.log(book.title)

// Задача 4 Удаление свойств
// Создайте объект person с свойствами firstName, lastName, и age. Удалите свойство age и выведите объект в консоль.

// const person = {
//     firstName: 'Alex',
//     lastName: 'Babanin',
//     age: 36
// }
// delete person.age;
// console.log(person)

// Задача 5. Проверка наличия свойства
// Создайте объект house с свойствами rooms и color. Проверьте, есть ли у объекта свойство garage, и выведите результат в консоль.

// const house = {
//     rooms: 3,
//     color: 'white',
// }
// console.log('garage' in house)

// Задача 1. Сумма элементов массива
// Напишите функцию, которая принимает массив чисел и возвращает их сумму.
// Прмер console.log(sumArray([1, 2, 3, 4])); // 10

// Вариант 1
// const array = [1, 2, 3, 4];

// function sumArray(arr) {
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sumArray(array));
 
// Вариант 2
// function sumArray(numbers) {
//     let sumArray = 0;
//     for (let number of numbers) {
//         sumArray += number;
//     }
//     return sumArray;
//   };
  
// console.log(sumArray([1, 2, 3, 4]));

// Вариант 3
// const sumArray = [1, 2, 3, 4].reduce(function (a, b) {
//     return a + b;
// });
// console.log(sumArray)

// Задача 2. Подсчет числа элементов массива 
// Напишите функцию, которая принимает массив и возвращает количество элементов в нем.

// const arr = [1, 2, 3, 4];
// function count(arr) {
//     let count = 0;
//     for (let index = 0; index < arr.length; index++) {
//         count += 1;
//     }
//     return count;
// }
// console.log(count(arr))

// Задача 3. Поиск индекса элемента
// Напишите функцию, которая принимает массив и значение, и возвращает индекс первого вхождения этого значения в массиве, или -1, если значение не найдено.

// let arr = [1, 2, 3, 1, 2];

// function find(arr, value){
//     for (i = 0; i < arr.length; i++)
//     {
//         if (value === arr[i] ) return i;
//     }
//     return -1;
// }
 
// console.log(find(arr, 2));

// Задача 4. Проверка на все четные элементы
// Напишите функцию, которая принимает массив чисел и возвращает true, если все элементы массива четные, и false в противном случае.

// const arr = [1, 2, 3, 4, 5, 6];
// const isAllEven = (arr) => arr.every((x) => x % 2 === 0);

// console.log(isAllEven(arr))

// Задача 5 Подсчет количества положительных чисел
// Напишите функцию, которая принимает массив чисел и возвращает количество положительных чисел в массиве.

// const arr = [1, 2, 3, -1, -2];

// function countPos(num) {
//     return num.filter(num => num > 0).length;
// }

// console.log(countPos(arr)); 


// Задача 6 Разделение массива на уникальные и дубликаты.
// Напишитете функцию, которая принимает массив и возвращает объект с двумя свойствами: unique — массив уникальных элементов, и duplicates — массив дублирующихся элементов.
// Пример 
// console.log(separateUniqueAndDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// // { unique: [1, 3, 5], duplicates: [2, 4] }

// function separateUniqueAndDuplicates(arr) {
//     const counts = {};
//     const unique = [];
//     const duplicates = [];

//     arr.forEach(num => {
//         counts[num] = (counts[num] || 0) + 1;
//     });

//     for (const [num, count] of Object.entries(counts)) {
//         if (count === 1) {
//             unique.push(Number(num));
//         } else {
//             duplicates.push(Number(num));
//         }
//     }

//     return {
//         unique,
//         duplicates
//     };
// }

// console.log(separateUniqueAndDuplicates([1, 2, 2, 3, 4, 4, 5]));