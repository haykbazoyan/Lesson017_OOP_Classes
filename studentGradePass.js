class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get gender() {
    return this._gender;
  }

  set age(value) {
    if (value !== "number") {
      throw new Error("Invalid age value!!!");
    }
    this._age = value;
  }

  toString() {
    return `${this._firstName} ${this._lastName}, ${this._age} years old`;
  }
}

class Student extends Person {
  constructor(name, year, fee, program) {
    super(name);
    this._year = year;
    this._fee = fee;
    this.program = program;
  }

  get year() {
    return this._year;
  }

  passExam(progName, gradeValue) {
    for (const i of this.program) {
      if (i.programName === progName) {
        i.grade = gradeValue;
      }
    }
    let checkGrade = this.program.every((el) => el.grade >= 50);
    if (checkGrade) {
      this._year += 1;
    }
  }

  isAllPassed() {
    for (const i of this.program) {
      if (i.grade === undefined) {
        return `Not all programs does passed`;
      }
    }
    return `All programs passed`;
  }

  toString() {}
}

let user1 = new Person("Elen", "Silent", "female", 23);
console.log(user1.toString()); // Elen Silent, 23 years old.

let prog = [
  { programName: "math", grade: 10 },
  { programName: "english", grade: undefined },
];

let studentUser1 = new Student("user1", 2012, 240000, prog);

console.log("before:: ", studentUser1.program);
studentUser1.passExam("math", 50);
console.log("after Math:: ", studentUser1.program);
console.log(studentUser1.isAllPassed());
studentUser1.passExam("english", 60);
console.log(studentUser1.isAllPassed());
console.log("in the end:: ", studentUser1.program);
console.log("in the end:: ", studentUser1.year);
