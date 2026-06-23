// PASSCODE

const correctPasscode = "2806";
let enteredCode = "";

const keypad = document.getElementById("keypad");

if(keypad){

const keys = [
1,2,3,
4,5,6,
7,8,9,
"❤",0,"⌫"
];

keys.forEach(key=>{

const btn=document.createElement("button");

btn.className="key";

btn.innerHTML=key;

btn.onclick=()=>handleKey(key);

keypad.appendChild(btn);

});

}

function handleKey(key){

if(key==="⌫"){

enteredCode=enteredCode.slice(0,-1);

updateDots();

return;

}

if(key==="❤"){
return;
}

if(enteredCode.length<4){

enteredCode+=key;

updateDots();

}

if(enteredCode.length===4){

setTimeout(()=>{

if(enteredCode===correctPasscode){

showPage(2);

}else{

alert("Wrong Passcode ❤️");

enteredCode="";
updateDots();

}

},300);

}

}

function updateDots(){

for(let i=1;i<=4;i++){

const dot=document.getElementById("d"+i);

if(dot){

dot.classList.remove("filled");

if(i<=enteredCode.length){

dot.classList.add("filled");

}

}

}

}

// PAGE SWITCH

function showPage(pageNumber){

document.querySelectorAll(".page")
.forEach(page=>page.classList.remove("active"));

document
.getElementById("page"+pageNumber)
.classList.add("active");

}

// BALLOONS

let popped=0;

document.querySelectorAll(".balloon")
.forEach(balloon=>{

balloon.addEventListener("click",()=>{

balloon.classList.add("pop");

popped++;

if(popped===4){

setTimeout(()=>{

showPage(3);

},700);

}

});

});

// CAKE

function blowCandles(){

const flames=document.getElementById("flames");

flames.innerHTML="💨";

setTimeout(()=>{

showPage(4);

},1200);

}

// GIFT BOX

const gift=document.getElementById("gift-box");

if(gift){

gift.addEventListener("click",()=>{

gift.innerHTML="💖";

gift.style.transform="scale(1.3)";

createBurst();

setTimeout(()=>{

showPage(7);

},1500);

});

}

// FLOATING HEARTS

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(Math.random()*20+15)+"px";

heart.style.animationDuration=
(Math.random()*4+4)+"s";

document
.getElementById("hearts-container")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,400);

// HEART BURST

function createBurst(){

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left="50%";

heart.style.top="50%";

heart.style.position="fixed";

heart.style.fontSize=
(Math.random()*30+15)+"px";

heart.style.transform=
`translate(
${Math.random()*600-300}px,
${Math.random()*600-300}px
)`;

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},3000);

}

}
