// let allH2 = document.getElementsByTagName("h2")

// allH2[0].style.backgroundColor = "blue"
// allH2[0].style.color = "white"
// allH2[0].style.fontSize = "30px"
// console.log(allH2);

// let allId = document.getElementById("h")

// console.log(allId)

// let allClasses = document.getElementsByClassName("c")
// console.log(allClasses)

//  allId.style.backgroundColor = "blue"
//  allId.style.color = "white"
//  allH2[0].style.fontSize = "30px"

//  allId.style.cssText = `

//  background-color: orange;
//  color:white;
//  font-size:30px;
//  padding:5px

//  `

//  allClasses[0].style.cssText = `

//  background-color: orange;
//  color:white;
//  font-size:30px;
//  padding:5px

//  `

//  allClasses[1].style.cssText = `

//  background-color: orange;
//  color:white;
//  font-size:30px;
//  padding:5px

//  `

//  for(let item of allClasses){
//     item.style.cssText = `

//  background-color: orange;
//  color:white;
//  font-size:30px;
//  padding:5px

//  `
//  }

// let allId = document.querySelectorAll(".c")

// console.log(allId);

// let p = document.querySelector("#p")

// console.log(p.textContent, "Text-Content")

// p.innerHTML = "<span> <strong>i am nested span </strong></span>"

// console.log(p.innerHTML, )

// console.log(document.querySelector("a").getAttribute("href"))

// document.querySelector("a").setAttribute("href","https://github.com")

let imgArray = [
  "https://media.istockphoto.com/id/121199853/photo/closeup-of-guy-working-on-a-laptop-indoor.webp?a=1&b=1&s=612x612&w=0&k=20&c=1cFqSPIjH981E69lJFNrRiqUDDsOqHfRdpW2CKu9sSc=",
  "https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.webp?a=1&b=1&s=612x612&w=0&k=20&c=tStWgNSFBAGPyu4gfJfDEjqMPDnvgqWUkIPyZYGS090=",
  "https://media.istockphoto.com/id/184103864/photo/clouds-on-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rns43dSWPSYJG75Ya-fdWj2NoY1yIE5NxzTSl1JDmfM=",
];

const img = document.querySelector("img");
let i = 0;

let idd = setInterval(() => {
  img.setAttribute("src", imgArray[i]);
  if (i == imgArray.length - 1) {
    i = 0;
  } else {
    i++;
  }
}, 2000);

setTimeout(() => {
  clearInterval(idd);
}, 10000);
