// function Student(age){

//     this.age=age

//     this.printdetail = function(){

//            console.log(`Age is ${this.age}`)
//     }
// }

// let s1 = new Student(20)

// s1.printdetail()
// console.log(s1)

// function checkPrime(n) {
//   if (n <= 1) {
//     console.log("Not Prime");
//     return;
//   }

//   if (n == 2) {
//     console.log("Prime");
//     return;
//   }

//   if (n % 2 == 0) {
//     console.log("Not Prime");
//     return;
//   }

//   for (let i = 3; i < n; i += 2) {
//     if (n % i == 0 && i!=3) {
//       console.log("Not Prime");
//       return;
//     }
//   }

//   console.log("Prime");
//   return;
// }

// checkPrime(3);
// checkPrime(17);




// function vowelString(str){


//         let count =0

//         let vowels = ['a','e','i','o','u','A','E','I','O','U']

//         for(let i=0; i<str.length; i++){
//             if( vowels.includes(str[i])){

//                  count++
//             }
           
//         }

//         console.log(count)
// }


// vowelString("HeLlo hI")




  function COunter(){


      let count=0
      
    return {

          inc:function(){
            count++
             return count
          },

          dec:function(){
            return --count
          }
    }


  }


  let returnedBValue = COunter()

    console.log(returnedBValue.inc())
      console.log(returnedBValue.dec())
//   console.log(returnedBValue);
  