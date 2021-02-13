'use strict';
function welCome() {
  alert('Welcome to about me page ');
}
welCome();
let userName=prompt('enter your name');
alert('hello '+ userName+','+ 'my name is Ayman');
let wRite='hello '+ userName+','+'how are you?';
let age=prompt('what is your age ?');
alert ('your age is'+age);
document.write(wRite);


let score=0;

let question1 = prompt('Do I like football?  (Y OR N)');

while (question1.toUpperCase() !== 'Y' && question1.toUpperCase() !== 'N') {
  question1 = prompt('Do I like football?(Y OR N)');
}


if (question1.toUpperCase()==='Y') {score=score+1;}

alert('yes I like football');

console.log(question1);


let question2 = prompt('do I like travilling  (Y OR N)');
while (question2.toUpperCase() !== 'Y' && question2.toUpperCase() !== 'N')
{question2 = prompt('do I like travilling  (Y OR N)');
}

if (question2.toUpperCase()==='Y') {score=score+1;}

alert('Yes i like travilling');
console.log(question2);

let question3 = prompt('do i like programming  (Y OR N)');
while (question3.toUpperCase() !== 'Y' && question3.toUpperCase() !== 'N') {
  question3 = prompt('do i like programming  (Y OR N)');
}

if (question3.toUpperCase()==='Y') {score=score+1;}

alert('yes i do like programming');
console.log(question3);

let question4 = prompt('did i study at university (Y OR N)');
while (question4.toUpperCase() !== 'Y' && question4.toUpperCase() !== 'N') {
  question4 = prompt('did i study at university (Y OR N)');
}


if (question4.toUpperCase()==='Y') {score=score+1;}

alert('yes i studied at university');
console.log(question3);

let question5 = prompt('do i love swimming');

while (question5.toUpperCase() !== 'Y' && question5.toUpperCase() !== 'N') {
  question5 = prompt('do i love swimming');
}
if (question5.toUpperCase()==='Y') {score=score+1;}

alert('yes i love swimming');
console.log(question5);

let i;
for(i=4;i>-1;i--){
  let question6=prompt(' Guess my birthday month number?');
  if (question6==='11'){
    alert('correct! i was born in november');
    score=score+1;
    break;
  }
  else if (question6>12){
    alert('Too High you have '+i+' itration');

  } else if (question6<9) {
    alert('Too Low you have '+i+' itration');
  }
}
if(i===-1){
  alert('the right answer is 11');
}


let countryArray=['Germany','Turky','Italy','England'];
console.log(countryArray);
console.log(countryArray.length);
let a;
let t;
for(t=6;t>-1;t--){
  let question7=prompt('what is my favorit country?');
  for(a=0;a<=3;a++){
    if(question7===countryArray[a])
    {
      alert('correct !');
      score=score+1;
      break;
    }
  }
  if (a===4) {
    alert('Wrong Answer ,you still have '+t+ 'time');
  }else{break;}

}

alert('you got '+ score+' point out of 7');


