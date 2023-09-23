const seconds = document.querySelector('.seconds');
const minuets = document.querySelector('.minuets')
const startbtn = document.querySelector('.start');
const stopbtn = document.querySelector('.stop');
const resetbtn = document.querySelector('.reset')

let a = 9;
let cont = 3;
let sec = 0;

let min = 0;

let interval;



function sece(){
    sec += 1;
    seconds.innerHTML = '0' + sec
    
}

function mine(){
    min += 1;
    minuets.innerHTML = '0' + min
    
}

startbtn.addEventListener('click' , ()=>{
   interval = setInterval(()=>{
        if(sec >= a ){
            sec += 1;
            seconds.innerHTML = sec
           

               
        }else{
            sece();
        }

        if(sec == cont){
            sec = 0;
            seconds.innerHTML = '00'
            mine();
        }
        if(min >=10){
            minuets.innerHTML = min;
        }


    },1000)
    

       
    
})

stopbtn.addEventListener('click' , ()=>{
    clearInterval(interval);
})

resetbtn.addEventListener('click' , ()=>{
    sec = 0;
    min = 0;
    seconds.innerHTML = '00';
    minuets.innerHTML = '00';
    clearInterval(interval);
})
