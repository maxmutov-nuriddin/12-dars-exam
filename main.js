// 5 , 7, 9
// Char lani chunmadim 7 ishlomadim

//exam test 1

function getSum(n) {
  let sumN = 0
  for (let index = 1; index <= n; index++) {
    if (index % 2 === 0) {
      sumN += index ** 2
    } else {
      sumN += index ** (index % 2)
    }
  }
  return sumN
}
console.log(getSum(5));

//exam test 2

function getLongestWord(arr) {
  let wordL = 0
  let maxW = 0
  let minW = 0
  for (const i of arr) {
    console.log(i);
    wordL = i.length
    console.log(wordL);
    if (wordL > maxW) {
      maxW = wordL
      minW = i
      console.log(minW);
    }
  }
  return minW;
}
let arr = ['Abdulaziz', 'Murod', 'Yulduz', 'Abdugaffor', 'Jamila'];
console.log(getLongestWord(arr));

//exam test 3

function getDividers(arr, n) {
  let newArr = []
  for (const i of arr) {
    console.log(i);
    console.log(n);
    if (i % n === 0) {
      newArr.push(i)
    }
  }
  return newArr
}
let numBers = [2, 5, 7, 10, 0, 18, 15]
let n = 5;
console.log(getDividers(numBers, n));

//exam test 4

function checkWordCapitalize(str) {
  let strW = str.split(' ');
  for (let index = 0; index < strW.length; index++) {
    if (strW[index][0] === strW[index][0].toUpperCase()) {
      return true;
    }
  }
  return false;
}
let str = 'Abdulaziz Programmer Is FullStack Developer'
console.log(checkWordCapitalize(str));

//exam test 5

// -------------------------------

//exam test 6

function changeObjToString(obj) {
  console.log(obj);
  let str = ''
  for (const key in obj) {
    str += key + obj[key]
  }
  return str
}
let obj = {
  a: 1,
  b: 2,
  c: 3
}
console.log(changeObjToString(obj));

//exam test 7

// -------------------------------

//exam test 8

function increaseProductPrice(product, a, b) {
  for (const key of product) {
    if (key.id === a) {
      key.price += (key.price * b) / 100
    }
  }
  return product
}

const product = [
  { id: 1, name: 'Bike', price: 100 },
  { id: 2, name: 'TV', price: 400 },
  { id: 3, name: 'Album', price: 800 },
  { id: 4, name: 'Book', price: 600 },
  { id: 5, name: 'Phone', price: 500 },
  { id: 6, name: 'Computer', price: 1000 },
  { id: 7, name: 'Skate', price: 300 },
  { id: 8, name: 'Keyboard', price: 200 },
  { id: 9, name: 'Bottle', price: 700 },
];
console.log(increaseProductPrice(product, 7, 20));

//exam test 9

// -------------------------------

//exam test 10

function Employee(firstName, lastName, workPlace, salary, percent, isFullTime) {
  this.firstName = firstName
  this.lastName = lastName
  this.workPlace = workPlace
  this.salary = salary
  this.percent = percent
  this.isFullTime = isFullTime
  this.getInfo = function () {
    let total = this.salary + this.salary * this.percent / 100
    let emp = this.isFullTime ? 'full-time' : 'part-time'
    return `${this.firstName} ${this.lastName} ${this.workPlace} ${total}$ oylik evaziga ${emp} ishlaydi`
  }
}
let emp1 = new Employee("Abdulaziz", "Programmer", "Najot ta'lim", 10000, 20, false);
let emp2 = new Employee("Abdulaziz", "Programmer", "Najot ta'lim", 5000, 40, true);
console.log(emp1.getInfo());
console.log(emp2.getInfo());
