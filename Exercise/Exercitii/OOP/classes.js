// Task 3
// Create a class called Student
// It should have the following properties:
// - name (string)
// - age (number)
// - grades (array of numbers)
// - isActive (boolean)

// It should have the following methods:
// - addGrade(grade): adds a new grade to the grades array
// - calculateAverage(): returns the average of all grades
// - getStatus(): returns "Active" if isActive is true, "Inactive" otherwise
// - canPass(): returns true if the average grade is greater than 5, false otherwise

// class Student {
//   constructor(name, age, grades, isActive) {
//     this.name = name;
//     this.age = age;
//     this.grades = grades;
//     this.isActive = isActive;
//   }

//   // - addGrade(grade): adds a new grade to the grades array
//   addGrade(grade) {
//     this.grades.push(grade);
//   }

//   // - calculateAverage(): returns the average of all grades
//   calculateAverage() {
//     let total = 0;
//     for (let i = 0; i < this.grades.length; i++) {
//       total += this.grades[i];
//     }

//     return total / this.grades.length;
//   }

//   getStatus() {
//     if (this.isActive) {
//       return "Active";
//     } else {
//       return "Inactive";
//     }
//   }

//   canPass() {
//     if (this.calculateAverage() > 5) {
//       return "Can pass";
//     } else {
//       return "Can not pass";
//     }
//   }
// }

// const student1 = new Student("George", 20, [2, 10, 7, 8], true);
// const student2 = new Student("Maria", 22, [5, 6, 7, 8], false);
// const student3 = new Student("Ion", 19, [10, 9, 8, 7], true);
// const student4 = new Student("Ana", 21, [4, 5, 6, 7], false);
// const student5 = new Student("Elena", 23, [10, 10, 10, 10], true);
// const student6 = new Student("Mimi", 24, [3, 4, 5, 6], false);
// const student7 = new Student("Andrei", 25, [8, 9, 10, 10], true);
// const student8 = new Student("Iona", 26, [2, 3, 4, 5], false);
// const student9 = new Student("Cristina", 27, [6, 7, 8, 9], true);

// const studentList = [
//   student1,
//   student2,
//   student3,
//   student4,
//   student5,
//   student6,
//   student7,
//   student8,
//   student9,
// ];

// class Catalog {
//   constructor() {
//     this.students = [];
//   }
//   addStudent(student) {
//     this.students.push(student);
//   }
//   addAttendanceForAll() {
//     for (const student of this.students) {
//       this.students.addAttendance();
//     }
//   }
// }

// const catalog = new Catalog();

// const biologyCatalog = new Catalog();

// console.log(catalog);

// class Person {
//   static GENDER = {
//     MALE: "male",
//     FEMALE: "female",
//     OTHER: "combinatie",
//   };
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//   getOlder() {
//     this.age++;
//   }
// }

// class Employee extends Person {
//   constructor(name, age, gender, salary, position, department) {
//     super(name, age, gender);
//     this.salary = salary;
//     this.position = position;
//     this.department = department;
//   }
// }

// class Manager extends Employee {
//   constructor(name, age, gender, salary, position, department, team = []) {
//     super(name, age, gender, position, department);
//     this.team = team;
//   }

//   addTeamMember(coworker) {
//     this.team.push(coworker);
//   }
// }

// const angajat1 = new Employee(
//   "Fabi",
//   21,
//   Person.GENDER.MALE,
//   4000,
//   "summerpractice",
//   "Dev"
// );
// const angajat2 = new Employee(
//   "Maria",
//   2333,
//   Person.GENDER.FEMALE,
//   2355,
//   "summerpractice",
//   "Embedded"
// );
// const sefu = new Manager(
//   "Sefu",
//   40,
//   Person.GENDER.MALE,
//   12000,
//   "sefechipa",
//   "it"
// );

// sefu.addTeamMember(angajat1);
// sefu.addTeamMember(angajat2);
// sefu.getOlder();
// console.log(sefu);
