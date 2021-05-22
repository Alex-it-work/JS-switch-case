// 1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// const generatedInt = generateRandomIntMinMax(1, 4);
// let result = "It's not a winter, spring, summer or autumn";
// switch (generatedInt) {
//   case 1:
//     result = "winter";
//     break;
//   case 2:
//     result = "spring";
//     break;
//   case 3:
//     result = "summer";
//     break;
//   case 4:
//     result = "autumn";
//     break;
//   default:
//     console.log("wrong number");
//     break;
// }
// console.log("result :>> ", result);

// 2) В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// const month = generateRandomIntMinMax(1, 12);
// switch (true) {
//   case month === 12 && month <= 2:
//     console.log("winter");
//     break;
//   case month <= 5:
//     console.log("spring");
//     break;
//   case month <= 8:
//     console.log("summer");
//     break;
//   case month <= 11:
//     console.log("autumn");
//     break;
//   default:
//     console.log("Incorrect month");
//     break;
// }

// 3) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)

// const enteredCount = Number(prompt("Enter integer from 1 to 7 pls"));
// switch (enteredCount) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Incorrect count");
// }

// 4) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// const day = generateRandomIntMinMax(1, 31);
// switch (true) {
//   case day <= 10 && day > 0:
//     console.log(`${day} is 1 dec of month`);
//     break;
//   case day <= 20:
//     console.log(`${day} is 2 dec of month`);
//     break;
//   case day <= 31:
//     console.log(`${day} is 3 dec of month`);
//     break;
//   default:
//     console.log("Incorrect day");
// }

///////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number} int from interval min - max
 */
function generateRandomIntMinMax(min, max) {
  return Math.round(min + Math.random() * (max - min));
}
