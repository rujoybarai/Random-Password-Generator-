const passBox = document.getElementById("Password");
const generateBtn =document.querySelector(".btn");
const lenght = 12 ;

let Uppercase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let Lowercase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let Numbers=['0','1','2','3','4','5','6','7','8','9'];
let Symbols=['!','@','#','$','%','^','&','*','(',')','-','=','+'];

const allChars= Uppercase+Lowercase+Numbers+Symbols;
generateBtn.addEventListener("click",()=>{
  let password="";
  password+=Uppercase[Math.floor(Math.random()*Uppercase.length)];
  password+=Lowercase[Math.floor(Math.random()*Lowercase.length)];
  password+=Numbers[Math.floor(Math.random()*Numbers.length)];
  password+=Symbols[Math.floor(Math.random()*Symbols.length)];

while(lenght>password.length){
   password+=allChars[Math.floor(Math.random()*allChars.length)];
}

  
 passBox.value=password;
  



})


function copyPass(){

  passBox.select();
  document.execCommand("copy");
}