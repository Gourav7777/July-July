//
// class Person{
//     constructor(name,age){

//        this.naam =  name
//        this.age= age

//     }

//     detail(){
//         console.log("hello")
//     }
// }

// let p1  = new Person("Abhinav",30)

// let p2 = new Person("Harsh" , 22)

// console.log(p1,p2);

// let obj ={
//     a:10,
//     fun:function(){
//         console.log("helo");

//     }
// }

// console.log(obj.a);

// console.log(obj.b);

// obj.fun()

// console.log(  obj.toString())

// console.log(obj);

// let arr = [1,2,3,4,5]

// console.log(arr)

// let a = 10

// console.log(a.__proto__)

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  detail() {
    console.log("hello");
  }
}

class Student extends Person{
  constructor(name,age,roll) {
    super(name,age)


    this.roll = roll;
  }
}

let p1 = new Person("Abhinav", 30);
let p2 = new Student("Harsh", 22,420);

console.log(p1.__proto__);
