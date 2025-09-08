const fruits = [1,1,2,3,3];
// const arr = [1,2,3,4]

//   let obj ={
//       name:"harry",
//       age:20
//   }

//     // console.log(obj["name"])


// let sum = fruits.reduce(function(accumulator,currentt){
    
   
//          if(accumulator.currentt){
//              accumulator.currentt++
//          }
//          else{
//              accumulator.currentt = 1
//          }
         
//          return accumulator
// },{})


//  console.log(sum)



let arr = [1,2,3,4,5,6,7,8]


   let result = arr.filter(function(el){

         return el%2 == 0
   }).map(function(el){

        return el*2
   })
   .reduce(function(acc,curr){

       return acc+= curr
   },0)


   console.log(result)