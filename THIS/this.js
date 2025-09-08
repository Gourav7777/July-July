

// console.log(this)

// function abc(){


    
// console.log(this)
// }


// abc()


// let obj ={
//     a:10,
//     abc:function(){
//         console.log(this)

//         function def(){
//             console.log(this)
//         }

//         def()
//     }
// }


// obj.abc()


// let obj ={
//     a:10,


//     fun:{

//         y:20,
//         xyz:function(){

//                console.log(this);
               
//         }
//     }
// }


// // obj.abc()
// let x = obj.fun.xyz
//    x()




// function Person(name){

//       this.name = name
// }

// let p1 = new Person("Harry")


// function abc(){
//     console.log("hello");
    
// }

// abc()


// let xyz = (n)=>{
//     return "hello"+n;
    
// }

// xyz("harry")

// let xyz = (n)=> "hello"+n;


// console.log(xyz("hary"))


// console.log(xyz("hary"))

// var xyz = n=> "hello"+n;


// console.log(xyz("hary"))





// let obj = {


//     a:10,

//     fun:()=>{
//         console.log(this);

        
        
//     }
// }

// obj.fun()

   
    

// let obj = {


//     a:10,

//     fun:()=>{
//         console.log(this);

//         function def(){
//             console.log(this)
//         }
//         def()
//     }
// }

// obj.fun()



// let obj = {


//     a:10,

//     fun:()=>{
//         console.log(this);

//       let z= ()=>{
//             console.log(this)
//         }
        
//         z()
//     }
// }

// obj.fun()



// let obj = {


//     a:10,

//     fun:function(){
//         console.log(this);

//       let z= ()=>{
//             console.log(this)
//         }
        
//         z()
//     }
// }

// obj.fun()


// let obj1={
//     a:10,

//     print:function(str,str2){
//         console.log(this.a + str + str2);
        
//     }
// }


// let obj2={
//     a:70
// }
// obj1.print()

// obj1.print.call(obj2,"hello")

// obj1.print.apply(obj2,["hello","hii"])

// let value =   obj1.print.bind(obj2,"hello")

// value()







// function Person(name){

//       this.name = name
// }

// let p1 = new Person("Harry")

// let p2 = new Person("Garry")


// let p3 = new Person("Jarry")

// console.log(p1,p2,p3);



// let obj = {


//     a:10,

//     fun:function(){
//         // console.log(this);

//       let z= ()=>{
//             console.log(this)
//         }
        
//         z()
//     }
// }

// obj.fun()\



// let obj ={
//     a:10,


//     fun:{

//         y:20,
//         xyz:function(){

//                console.log(this);
               
//         }
//     }
// }


// // obj.abc()
// obj.fun.xyz()
// let x = obj.fun.xyz
//    x()


// const obj = {
//   value: 42,
//   arrowFn: () => console.log(this.value),
//   normalFn: function() {
//     console.log(this.value);
//   }
// };
// obj.arrowFn();
// obj.normalFn();


// let str = prompt("Enter the name")

// str = Number(str)
// console.log(str, typeof(str))
//   let obj = {

//   }

//   for (let i=0; i<str.length; i++){



//        str= str.toLowerCase()
//     if(obj[str[i]]  ){
//         obj[str[i]]++
//     }

//     else{
//         obj[str[i]]=1
//     }
//   }

//   console.log(obj)


const person = { name: "Karan" };
function sayHello(greeting) {
  console.log(greeting + ", " + this.name);
}
sayHello.call(person, "Hello");
sayHello.apply(person, ["Hi"]);
const boundFn = sayHello.bind(person, "Hey");
boundFn();