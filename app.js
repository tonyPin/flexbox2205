



// function checkDriverAge(age){
//     if (Number(age) < 18) {
//         alert("Sorry, you are too young to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }



const checkDriverAge2 = function(){
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else  if(Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
checkDriverAge2()
