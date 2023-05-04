// function fakeBin(x) {
   
//     return x < 5 ? '0' :'1'
//     }
      
    
//   console.log(fakeBin(4));

//   let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30,
//     isAdmin : "likes birds",
    
//   };
//   // let key = "likes birds";
//   // user[key] = true;
//   console.log(user.name)
//   console.log(user.age)
 
//   let key = prompt("Что вы хотите узнать о пользователе?", "name");

// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")


//     function makeUser(name, age) {
//       return {
//         name, // то же самое, что и name: name
//         age   // то же самое, что и age: age
//         // ...
//       };
    
//      };


// let user = makeUser("John", 30);
// console.log(user.name  + user.age); 
// // for проверки существования свойства в объекте
// console.log( "age" in user ); 


// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let key in user) {
//   // ключи
//   console.log( key );  // name, age, isAdmin
//   // значения ключей
//   console.log( user[key] ); // John, 30, true
// }


// OBJECTS
// const object = {
//   name: 'Jonh',
//   age: 40,
//   passData: {
//     number: 1111,
//     idNumber: '7654fff'
//   }
// }
// object.height = 178
// object.name = 'MMM'



// const newKey = 'laptop';
// const newValue = 'MacBook'
// const nameProperty = 'name'
// const getNameProperty = () => newKey
// object[getNameProperty()] = newValue
// console.log(object)
// object[newKey] = newValue
// console.log(object[nameProperty])

// for (let property in object) {
//   // console.log(property)
//   console.log(object[property])
// }

//   // console.log(property)
  //   console.log(object[property])
  // }

// ЦИКЛ В ЦИКЛЕ
// for (let key in object) {
//   if(typeof object[key] === 'object') {
//     for(let nestedKey in object[key]) {
//       console.log(nestedKey);
//     }
//   }
//   console.log(key)
// }

// ADD OBJECT+OBJECT2
  
// const object2 = {
//   name: 'Nick',
//   age: 30,
//   passData: {
//     number: 2222,
//     idNumber: '0000fff'
//   }
// }

// const resultObject = {
// }
  
// for (let key in object) {
//       if(object2[key]) {
//         resultObject[key] = object[key] + object2[key] 
//           }
//       }
//       console.log(resultObject)
  

// МАССИВЫ  FOR EACH
// const array = [23, 'string', true, {name: 'Fiou' }]
// console.log(array)
// console.log(array[1])

// const pupilOne = {
//   name: 'Vasya',
//   angGrade: 4
// }
// const pupilTwo = {
//   name: 'Peter',
//   angGrade: 5
// }

// const pupilThree = {
//   name: 'Jonn',
//   angGrade: 5
// }
// const pupils = [pupilOne, pupilTwo]

// pupils.push(pupilThree)
// console.log(pupils)

// pupils.pop()
// console.log(pupils)

// const pupilOne = {
//     name: 'Vasya',
//     avgGrade: 4
//   }
//   const pupilTwo = {
//     name: 'Peter',
//     avgGrade: 5
//   }
  
//   const pupilThree = {
//     name: 'Ann',
//     avgGrade: 5
//   }
//   const malePupils = [pupilOne, pupilTwo]
//   const femalePupils = [pupilThree]
//   const allPupils = [...malePupils, ...femalePupils]
//  allPupils.forEach((value, index, arr) => {
//   // console.log(value, index, arr)
//  });

//  const gradeTenPupils = [];
// allPupils.forEach((value) => {
//   gradeTenPupils.push({
//     ...value,
//     avgGrade: value.avgGrade * 2
//   })
// });
// console.log(allPupils, gradeTenPupils)
  

// MAP
  // const pupilOne = {
  //     name: 'Vasya',
  //     avgGrade: 4
  //   }
  //   const pupilTwo = {
  //     name: 'Peter',
  //     avgGrade: 5
  //   }
    
  //   const pupilThree = {
  //     name: 'Ann',
  //     avgGrade: 5
  //   }
  //   const malePupils = [pupilOne, pupilTwo]
  //   const femalePupils = [pupilThree]
  //   const allPupils = [...malePupils, ...femalePupils]
   
  //  const gradeTenPupils = allPupils.map((value) => {
  //   return {
  //     ...value,
  //     avgGrade: value.avgGrade * 2
  //   }
  //  });
  
  // console.log(allPupils, gradeTenPupils)


//   FILTER
//   const pupilOne = {
//     name: 'Vasya',
//     avgGrade: 4
//   }
//   const pupilTwo = {
//     name: 'Peter',
//     avgGrade: 5
//   }
  
//   const pupilThree = {
//     name: 'Ann',
//     avgGrade: 5
//   }
//   const malePupils = [pupilOne, pupilTwo]
//   const femalePupils = [pupilThree]
//   const allPupils = [...malePupils, ...femalePupils]
 
//  const gradeTenPupils = allPupils.filter((value) => {
//   return false
//      });

// console.log(allPupils, gradeTenPupils)
    
// RED DIPLOMA
//   const pupilOne = {
//     name: 'Vasya',
//     avgGrade: 4
//   }
//   const pupilTwo = {
//     name: 'Peter',
//     avgGrade: 5
//   }
  
//   const pupilThree = {
//     name: 'Ann',
//     avgGrade: 5
//   }
//   const malePupils = [pupilOne, pupilTwo]
//   const femalePupils = [pupilThree]
//   const allPupils = [...malePupils, ...femalePupils]
//  const redDiplomaPupils = allPupils.filter((value) => {
//  if (value.avgGrade < 5) {
//   return false
//  }
 
//  return true
//      });
 

// console.log(allPupils, redDiplomaPupils)

  //  INCLUDES
// const numbers =[1, 2, 3] 
//    console.log(numbers.includes(5))

//  ARRAY REDUCE
// const pupilOne = {
//       name: 'Vasya',
//       avgGrade: 4
//     }
//     const pupilTwo = {
//       name: 'Peter',
//       avgGrade: 5
//     }
    
//     const pupilThree = {
//       name: 'Ann',
//       avgGrade: 5
//     }
//     const malePupils = [pupilOne, pupilTwo]
//     const femalePupils = [pupilThree]
//     const allPupils = [...malePupils, ...femalePupils]
   
//    const gradeTenPupils = allPupils.map((value) => {
//     return {
//       ...value,
//       avgGrade: value.avgGrade * 2
//     }
//    });
  
//   // console.log(allPupils)
//   const ourSchool = allPupils.reduce((acc, value) => {
//     const newGrades = [...acc.pupilsGrade, value.avgGrade]
//     return {
//       pupils: [...acc.pupils, value.name],
//       pupilsGrade: newGrades,
//     }
//   }, {
//     pupils: [],
//     pupilsGrade: [],
//   })

//   console.log(ourSchool)

// for each
// const pupilOne = {
//   name: 'Vasya',
//   avgGrade: 4
// }
// const pupilTwo = {
//   name: 'Peter',
//   avgGrade: 5
// }

// const pupilThree = {
//   name: 'Ann',
//   avgGrade: 5
// }
// const malePupils = [pupilOne, pupilTwo]
// const femalePupils = [pupilThree]
// const allPupils = [...malePupils, ...femalePupils]

// const ourSchool = {
//   pupils: [],
// pupilsGrade: [],
// };

// allPupils.forEach((value) => {
//   ourSchool.pupils = [...ourSchool.pupils, value.name]
//   ourSchool.pupilsGrade = [...ourSchool.pupilsGrade, value.avgGrade]
// })

// console.log(ourSchool)

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// // const numbersSum = numbers.reduce((acc, value) => {
// //   return acc + value
// // }, 0)
// // return acc + value
// // }, '')
// const numbersSum = numbers.reduce((acc, value, index) => {
//   if(index < 3) {
//   return acc;
// }
// return acc + value
// }, 0)

// console.log(numbersSum)

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// WORK IN CW
// function fakeBin(x) {
//   x = x.split('');
//   let newArr = x => {
//     if (x < 5) return 0;
//     if (x >= 5) return 1;
//   }
//   return x.map(newArr).join('')
// };
// console.log(fakeBin('67429'))

// DON'T WORK IN CW
// let arr = [6, 5, 2, 9];
// let newArr = arr.map(function fakeBin(x) {
//   if (x < 5) return 0;
//   if (x >= 5) return 1;
// });

// console.log(newArr)
// let str = newArr.join('');
// console.log(str)

// function fakeBin(x) {
//   let arr = '';

//   for(let i = 0; i < x.length; i++) {
// if (x[i] < 5) {

//   arr += '0'
//   } else {
//   arr += '1'
//   }
//  } return arr;
// }
console.log(fakeBin('76395'))

function fakeBin(x){
  return [...x].map(n => n<5?'0':'1').join('');
}