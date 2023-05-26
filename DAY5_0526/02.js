//클래스라는 설계도

class Person {
  //우리는 사람이기 때문에 필수요소
  //name, age
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //메서드 형태의 동사 표현
  sayHello() {
    console.log(`${this.name}님 안녕하세요!`);
  }

  //내 나이는 ~살이에요! 라고 출력하는 메서드를 만들기
  sayAge() {
    console.log(`${this.name} 나이는 ${this.age}살 입니다.`);
  }
}

//설계도를 통해 인스턴스(실제 사물) 만들어보기
//이름은 홍길동이고 나이는 30살인 사람 하나를 만들어줘 (설계도에 근거해서)
const person1 = new Person("홍길동", "30");
const person2 = new Person("홍길순", "25");

// person1.sayHello();
// person2.sayHello();
person1.sayAge();
person2.sayAge();
