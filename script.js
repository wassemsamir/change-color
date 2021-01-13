/*var myStraing ="i love javascript and python",
    myArray = myStraing.split(" ");
    console.log(myArray);
// make straing text and convert to array 

for ( i = 0 ; i < myArray.length ; i=i+1){
    console.log(myArray[i])
}
// create loop in the array 
*/

//  Math.ceil
//  Math.floor
//  Math.round
//  Math.max
//  Math.min
//  Math.random
 
// Regular Experssion 
// /pattern/ attributes 
// search | Replace | Match | Split | Test

// Attributes List 
// [i] => case insensitive
// [g] => global search 
// [m] => multi line search 
// brackets 
// [   ]all character
// [^  ]not all character
// [a-e]small range 
// [A-E]capital range
// [1-9] numbers 

//---------------------

document.body.classList.add(localStorage.getItem("pageColor")|| "red");
var li = document.querySelectorAll(".container li");
var classesList= [];
//loop on elment
for ( var i = 0 ; i <li.length ;i++){

    classesList.push(li[i].getAttribute("data-color"));

    li[i].addEventListener('click', function(){
        document.body.classList.remove(...classesList);

        document.body.classList.add(this.getAttribute('data-color'));
        localStorage.setItem("pageColor",this.getAttribute("data-color"));
    },
    false
);
}

console.log(localStorage.getItem('pageColor'));
