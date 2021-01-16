// add class color in the local storge
document.body.classList.add(localStorage.getItem("pageColor")||"red");

// get the list 
var el = document.querySelectorAll('.container li'),
 //container to push the new class 
    colorList = [];
    //loop on all the datacolor in the list
 for ( i = 0 ;i < el.length ; i++){
     //push the class name in the container
    colorList.push(el[i].getAttribute("data-color"));
    // click event and run funcation to add the new class in the body 
    el[i].addEventListener('click',function(){
        //remove the old class
        document.body.classList.remove(...colorList)
        // add the new class 
        document.body.classList.add(this.getAttribute('data-color'))
        // add the previous color in the local storge 
        localStorage.setItem("pageColor",this.getAttribute('data-color'))
    })
 }

 


/// function to captilze the string
function textConvert(string){
    //convert the string to opject
    var oldArray= string.split(' ');
    //container for output loop 
    var newArray = [];
    //loop on the string 
    for (i = 0 ; i< oldArray.length; i++){
        //pust the loop resulat in the array and concatenat the opject 
        newArray.push(oldArray[i].charAt(0).toUpperCase()+ oldArray[i].slice(1));
    }
    // return the funcation 
    return newArray.join(" ")
}
console.log(textConvert("i love javascript and pyhton"));


// funcation to site number of letters in textarea 

//declare the  variables  
// declare count variable 
var $count = document.getElementById('count'),
    //declare textarea 
    $textArea = document.getElementById('text'),
    // declare maxlegnth 
    $maxLength = $textArea.getAttribute('maxLength')

// text input function 
$textArea.oninput = function(){
    // count the nubmer of text in the text area 
    $count.innerHTML = $maxLength - this.value.length
    // style the count number 
    if($count.innerHTML <=10 ){
        $count.classList.remove("sct")
        $count.classList.add('st')
    }else{

        $count.classList.add('sct')
    }
}

