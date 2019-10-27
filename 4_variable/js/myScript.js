try{
var num = [1, 2, 3, 4, 5];
var words = ['hey', 'hello', 'bye', 'morning', 'evening'];
var newArr = JSON.stringify(num.concat(words));

var value = document.getElementById('display');
var ptag = document.createElement('p');
ptag.innerHTML = newArr;
value.appendChild(ptag);
} catch(err){
    console.log("error occurred");
}