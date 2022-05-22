// concat

// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const taskOneArrayOne = [1, 2, 3];
const taskOneArrayTwo = [4, 5, 6];
console.log(taskOneArrayOne.concat(taskOneArrayTwo));

// reverse

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const taskTwoArray = [1, 2, 3];
console.log(taskTwoArray.reverse());

// push, unshift

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const taskThreeArray = [1, 2, 3];
taskThreeArray.push(4, 5, 6);
console.log(taskThreeArray);
// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const taskFourArray = [1, 2, 3];
taskFourArray.unshift(4, 5, 6);
console.log(taskFourArray);

// shift, pop
// 5. Дан массив ['js';, 'css';, ‘html';]. Выведите на экран первый элемент и удалите
// его.
const taskFiveArray = ["js", "css", "html"];
console.log(taskFiveArray.shift());
console.log(taskFiveArray);
// 6. Дан массив ['js';, 'css';, ‘html';]. Выведите на экран последний элемент и
// удалите его.
const taskSixArray = ["js", "css", "html"];
console.log(taskSixArray.pop());
console.log(taskSixArray);

// slice

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// элементы [1, 2, 3].
const taskSevenArray = [1, 2, 3, 4, 5];
const newTaskSevenArray = taskSevenArray.slice(0, 3);
console.log(newTaskSevenArray);
// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// элементы [4, 5].
const taskEightArray = [1, 2, 3, 4, 5];
const newTaskEightArray = taskEightArray.slice(3, 5);
console.log(newTaskEightArray);

// splice

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив
// в [1, 4, 5].
const taskNineArray = [1, 2, 3, 4, 5];
taskNineArray.splice(1, 2);
console.log(taskNineArray);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый
// массив элементы [2, 3, 4].
const taskTenArray = [1, 2, 3, 4, 5];
const newTaskTenArray = taskTenArray.splice(1, 3);
console.log(newTaskTenArray);
// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, 2, 3, "a", "b", "c", 4, 5].
const taskElevenArray = [1, 2, 3, 4, 5];
taskElevenArray.splice(2, 0, "a", "b", "c");
console.log(taskElevenArray);
// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, "a", "b", 2, 3, 4, "c", 5, "e"].
const taskTwelveArray = [1, 2, 3, 4, 5];
taskTwelveArray.splice(1, 0, "a", "b") &&
  taskTwelveArray.splice(5, 0, "c") &&
  taskTwelveArray.splice(7, 0, "e");
console.log(taskTwelveArray);

// sort
// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const taskThirtheenArray = [3, 4, 1, 2, 7];
taskThirtheenArray.sort();
console.log(taskThirtheenArray);

// 1. Необходимо создать функцию hasElem, которая параметрами будет
// принимать массив и строку, и возвращать true, если строка есть в
// массиве, и false - если нет
function hasElem(Array, String) {
  return console.log(Array.includes(String));
}
const testArrayOneTaskOne = [1, 2, 3];
const testArrayTwoTaskOne = [1, "ASD", 3];
const testArrayThreeTaskOne = [1, "AS", 3];
hasElem(testArrayOneTaskOne, "ASD");
hasElem(testArrayTwoTaskOne, "ASD");
hasElem(testArrayThreeTaskOne, "ASD");

// 2. Дан массив с числами. Проверьте, что в этом массиве есть указанное
// число. Если есть - вернуть true, а если нет - вернуть false.
function hasNumber(Array, Number) {
  return console.log(Array.includes(Number));
}
const testArrayOneTaskTwo = [1, 2, 3];
const testArrayTwoTaskTwo = [4, 5, 6];
hasNumber(testArrayOneTaskTwo, 1);
hasNumber(testArrayTwoTaskTwo, 1);

// 3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа
// подряд. Если есть - вернуть true[2,2,1], а если нет - вернуть false[1,2,1]
const testArrayOneTaskThree = [2, 2, 1];
const testArrayTwoTaskThree = [1, 2, 1];
function hasTwoSameNumbersRightEachOther(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i++; j < array.length; j++)
      if (array[i] === array[j]) {
        return true;
      } else {
        return false;
      }
  }
}
console.log(hasTwoSameNumbersRightEachOther(testArrayTwoTaskThree));
console.log(hasTwoSameNumbersRightEachOther(testArrayOneTaskThree));

// 4. Функция, которая возвращает массив заполненный 10 случайными
// числами в интервале от 5 до 33. Math.random()

function returnRandomArray() {
  const arrayRandom = new Array(10);
  for (let i = 0; i < arrayRandom.length; i++) {
    arrayRandom[i] = Math.random() * (33 - 5) + 5;
  }
  console.log(arrayRandom);
}
returnRandomArray();

// 5. Дан массив arr. Найдите среднее арифметическое его элементов.
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
const arr = [12, 15, 20, 25, 59, 79];

function integer(arr) {
  const sumWithInitial = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return console.log(sumWithInitial / arr.length);
}
integer(arr);
