const count = document.getElementById("display")
const increment = document.getElementById("inc")
const decrement = document.getElementById("dec")
const  reset = document.getElementById("rest")

count.innerHTML = '00';


increment.addEventListener("click", add)
function add(){
  
    if(count.innerHTML == 100){
        return 100
    }else{
        count.innerHTML++
    }
    if(count.innerHTML < 10){
     count.innerHTML= ("0" + count.innerHTML).slice(-2)
        
    }
}

decrement.addEventListener("click", subtract)
function subtract(){
    if(count.innerHTML == 0){
        return 0;
    }
    count.innerHTML --
if(count.innerHTML < 10){
    count.innerHTML= ("0" + count.innerHTML).slice(-2)
       
   }
}

reset.addEventListener("click", refresh)
function refresh(){
    count.innerHTML = '00';
}