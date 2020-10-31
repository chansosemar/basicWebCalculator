let history;

function dis(val) 
{ 
    document.getElementById("result").value+=val 
} 
 function solve() 
{   history = document.getElementById("result").value
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
}  

 function clr() 
{ 
    document.getElementById("result").value = "" 
} 

function maksimal(){
    let angka = history.match(/\d+/g);
    console.log(angka);
    document.getElementById("result").value = Math.max(... angka);
    }
    function minimal(){
    let angka = history.match(/\d+/g);
    document.getElementById("result").value = Math.min(... angka);
    } 

