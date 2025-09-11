

let cells = document.querySelectorAll(".cell")


console.log(cells);
let circleTurn = true

for(let cell of cells){

    cell.addEventListener("click", handleClick,{once:true})
}


function handleClick(event){
    let clickedCell = event.target

    // console.log(clickedCell);

    let turn = circleTurn?"❤️":"💔"

    clickedCell.innerHTML = turn
    
     

       if(checkWin(turn)){

        document.querySelector(".winner").classList.add("show")
        document.querySelector(".winner-message").innerHTML = `${turn} won the game`
       }

       else if(checkDraw()){
           document.querySelector(".winner").classList.add("show")
          document.querySelector(".winner-message").innerHTML = `Game Draw`
       }

       else{
           circleTurn = !circleTurn

       }
    

    
}


let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


function checkWin(turn){


       return win.some((el)=>{

          return el.every((index)=>{


               return cells[index].innerHTML ==  turn


              
                
          })
           
       })
}


let arr =[]


for(let item of cells){
    arr.push(item)
}

console.log(arr);


function checkDraw(){



      return arr.every((el)=>{


        return el.innerHTML == "x" || el.innerHTML == "o"
      })

}


let btn = document.getElementById("restart")


btn.addEventListener("click",()=>{

    window.location.reload()
})