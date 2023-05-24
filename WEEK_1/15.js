// let person = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자",
// };

// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

//2. 접근하는 방법
// console.log(person.name);

//Object.key(): key를 가져오는 메소드
let person = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let keys = Object.keys(person);
// console.log("keys => ", keys);

//3-2. values
let values = Object.values(person);
// console.log("values =>", values);

//3-3. entries
let entries = Object.entries(person);
// console.log("entries =>", entries);

// 3-4. assign
// 객체 복사
let newPerson = {};
Object.assign(newPerson, person, { gender: "여자" });
// console.log("newPerson =>", newPerson);

// 3-5. 객체 비교
let person1 = {
  name: "홍길동",
  age: 30,
};

let person2 = {
  gender: "남자",
};

// console.log(person1 === person2);

// console.log(JSON.stringify(person1) === JSON.stringify(person2));

let perfectMan = { ...person1, ...person2 };
console.log(perfectMan);
