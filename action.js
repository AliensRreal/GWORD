let selected =generate();
let letters = selected.split('');
console.log(letters);
let input = document.getElementById("input");
let btn = document.getElementById("submit");
btn.addEventListener("click", function () {
    check(input.value.toLowerCase())
});
let correct = 0;
function check(input){
    let result=document.getElementById("result");
    if(input==selected){
          result.innerHTML='You got the word correct!'
          result.classList.add('scale')
          return;
    }
   let cmp = getDistinct(input).split('');
   for(let i=0; i<letters.length; i++){
    for(let y=0; y<cmp.length; y++){
        if(letters[i]===cmp[y])
            correct++;
    }
   }
   if(correct==1){
       result.innerHTML='You got '+correct+' letter correct'
   }
    else if(correct>1){
        result.innerHTML='You got '+correct+' letters correct'
    }
        else{
             result.innerHTML='You got no letter correct'
        }


   correct=0;
   
}





function getDistinct(word){
    let distinct =''
    for(let i=0;i<=word.length;i++){
        if(!distinct.includes(word.charAt(i)))
            distinct+=word.charAt(i);
    }
    return distinct;
}

function generate(){
    let dictionary = ["anmar","saleh"];
    let index = Math.floor((Math.random() * dictionary.length));
    return dictionary[index];
}

