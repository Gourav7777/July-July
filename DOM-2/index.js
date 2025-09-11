// let p = document.querySelector("#pp")


// p.classList.add("a","b","c")

// p.classList.remove("a")




// let li = document.querySelector("#ll")

// console.log(li);
// console.log(li.parentElement);
// console.log(li.parentElement.parentElement);

// console.log(li.parentElement.parentElement.nextElementSibling);


// console.log(li.parentElement.parentElement.nextElementSibling.children);

// let el = li.parentElement.parentElement.nextElementSibling.children[0];


// el.style.backgroundColor="red" 

// console.log(el)


// let h2 = document.createElement("h2")
// h2.innerHTML = "Js created h2"


// let h3 = document.createElement("h3")
// h3.innerHTML = "Js created h3"

//    let sec = document.querySelector("section")

//    sec.appendChild(h2,h3)

//   sec.append(h2,h3)

// sec.prepend(h2)

// sec.prepend(h2,h3)

// sec.removeChild(h2)

// sec.remove()
// console.log(h2);

// let lii = document.querySelector("#l")


// lii.nextElementSibling.remove()
// lii.remove()
// lii.firstElementChild.remove()
// lii.firstElementChild.remove()
// lii.remove()



// let btn = document.querySelector("button")
// // btn.onclick = handleClick
// // btn.onclick = iceCream


// function handleClick(){
//     console.log("i am clicked");
    
// }


// function iceCream(){
//     console.log("ice cream")
// }

// btn.addEventListener("click", ()=>{
//     handleClick()
//     iceCream()
// })

// let body = document.querySelector("body")
// let red = document.querySelector("#red")
// let yellow = document.querySelector("#yellow")
// let green = document.querySelector("#green")

// function addColor(color){
//      body.style.backgroundColor = color
// }


// red.addEventListener("click",()=>{

//    addColor("red")
// })

// yellow.addEventListener("click",()=>{

//    addColor("yellow")
// })

// green.addEventListener("click",()=>{

//    addColor("green")
// })


let inp = document.querySelector("input")



inp.addEventListener("keypress",(event)=>{

    if(event.key=="Enter"){
        console.log(event);

    }
    
})