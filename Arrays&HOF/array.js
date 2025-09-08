// let arr = [11,12,13,14,15,16]


// // console.log(arr[2])

// let sum = 0

// for(let i=0; i<arr.length; i++){


//        sum = sum+arr[i]

// }


// for( let  x of arr){


//     sum = sum+x

// }


//  console.log(sum)


// let arr2 = [
//     [11,12],
//     [13,14],
//     [15,16]
// ]

// let addition = 0
//   for(let i=0; i<arr2.length; i++){



//        for(let j =0; j<arr2[i].length; j++){




//         addition = addition+ arr2[i][j]
        
//     }
// }
// console.log(addition)




function login(a,b){



    console.log("i am looged in")

    a()

    
}


function profilePicture(){
    console.log("profiles is visible")
}


login(profilePicture,10)