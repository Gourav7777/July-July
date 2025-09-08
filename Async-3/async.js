
// fetch('https://dummyjson.com/products')
// .then((res)=>{

//     console.log(res)
//    return  res.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{


//     console.log(err)
// })


// async function fetchData(){
//     let res = await fetch ('https://dummyjson.com/products')

//     let data = await res.json()

//     console.log(data);
    
// }


// fetchData()


axios('https://dummyjson.com/products')
.then((res)=>{

    console.log(res.data.products)

})

.catch((err)=>{


    console.log(err)
})