let div=document.querySelectorAll("div");
let cut=document.querySelector(".cut");
let photo=document.querySelector(".forimages");
let daba=document.querySelectorAll(".cb1-img");
let dab1=document.querySelector(".cb2-img");
let dab4=document.querySelector(".cb2-img2");
let dab2=document.querySelectorAll(".cb3-img");
let dab3=document.querySelectorAll(".cb4-img");
let pop=document.querySelector(".photu");
let pop1=document.querySelector(".photu1");
let pop2=document.querySelector(".photu2");
let pop3=document.querySelector(".photu3");
let pop4=document.querySelector(".photu4");
let poplist=[pop,pop1,pop2,pop3,pop4];

//cut
cut.onclick=()=>{
    console.log("cut");
    photo.style.zIndex="-1";
    for(let i=0;i<=4;i++){
        poplist[i].style.zIndex="-1";
    }
}

//1st click
daba[0].onclick=()=>{
    console.log("here we go");
    photo.style.zIndex="1";
    pop.style.zIndex="2";
    
}
daba[1].onclick=()=>{
    console.log("here we go");
    photo.style.zIndex="1"; 
    pop.style.zIndex="1";
}

//2nd click
dab1.onclick=()=>{
    console.log("here we go");
    photo.style.zIndex="1";
    pop1.style.zIndex="1";
}
//polo click
dab4.onclick=()=>{
    console.log("here we go");
    photo.style.zIndex="1";
    pop4.style.zIndex="1";
}
//3rd click
dab2[0].onclick=()=>{
    console.log("here we go");
    photo.style.zIndex="1";
    pop2.style.zIndex="1";
}
dab2[1].onclick=()=>{
    console.log("here we go");
    photo.style.zIndex="1";
    pop2.style.zIndex="1";
}
// 4th click 
dab3[0].onclick=()=>{
    console.log("here we go");
    photo.style.zIndex="1";
    pop3.style.zIndex="1";
}
dab3[1].onclick=()=>{
    console.log("here we go");
    photo.style.zIndex="1";
    pop3.style.zIndex="1";
}