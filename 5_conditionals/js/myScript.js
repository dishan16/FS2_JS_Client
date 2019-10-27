try{
    const day = new Date().getDay();
var weeks = document.getElementById("weeks");
//displays the current day in console
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("It's Tuesday");
        break;
    case 3:
        console.log("Wednesday Already");
        break;
    case 4:
        console.log("Thursdayyy");
        break;
    case 5:
        console.log("Happy Friday!");
        break;
    case 6:
        console.log("A wonderful Saturday!");
        break;
    case 7:
        console.log("It's Sunday, time to relax!");
        break;
    default:
        console.log("Something went horribly wrong...");
}

} 
 catch(error){
    console.log("error occurred");
}