let button1=document.querySelector(".btn1");
let button2=document.querySelector(".btn2");
let con=document.querySelector(".mess");
const text=function(){
  let number=Math.floor(Math.random()*100);
  con.innerHTML=`I am on my work to generate random number.${number}`;
}
let start1;
const start=function(){
  start1=setInterval(text,1000);
}
button1.addEventListener('click',start);
button2.addEventListener('click',()=>{
  clearInterval(start1);
})