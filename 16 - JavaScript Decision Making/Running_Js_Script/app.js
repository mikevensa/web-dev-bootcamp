// let random = Math.random();
// if (random < .5) {
//     console.log("Your Number is Less Than .5!");
// } else {
//     console.log("Your number is greater (or equal to) 0.5")
// }
// console.log(random);



// const dayOfWeek = prompt('Enter a day').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGGHH I hate Mondays!")
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yay I love weekends!")
// } else if (dayOfWeek === 'friday') {
//     console.log("Yay the weekend!")
// } else {
//     console.log("Meh")
// }


// const age = 75;

// if (age < 5) {
//     console.log("Toddler Admission is free!")
// } else if (age < 10) {
//     console.log("Child admision is $10")
// } else if (age < 65) {
//     console.log("Adult admission is $20")
// } else {
//     console.log("Senior admission is $10")
// }


// 0-5 free
// 5-10 Child $10
// 10-65 Adult $20
// 65+ Senior $10

// let phrase = prompt('Enter an action').toLocaleLowerCase();

// if (phrase === 'stop') {
//     console.log("red")
// } else if (phrase === 'slow') {
//     console.log("yellow")
// } else if (phrase === 'go') {
//     console.log("green")
// } else {
//     console.log("purple")
// }


// const password = prompt("Please enter a new password");



// //Password must be 6+ characters
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password")
//     }
//     else {
//         console.log("Password cannot contain spaces.")
//     }
// }
// else {
//     console.log("Password is too short. Must be at least 6 characters long.")
// }
// //Password cannot include space


// // Change the value of num, so that "YOU GOT ME!" prints out
// const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// // DO NOT TOUCH ANYTHING BELOW (please)
// if (num <= 100) {
//     if (num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if (num % 2 === 0) {
//             console.log("YOU GOT ME!");
//         }
//     }
// }





// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password")
// } else {
//     console.log("Invalid Password")
// }

// const mystery = 'Pizza7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// // LEAVE THIS CODE ALONE! (pretty please)
// if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
//     console.log("YOU GOT IT!!!");
// }




// 0-5 free
// 5-10 Child $10
// 10-65 Adult $20
// 65+ Senior free

// const age = 10;

// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("Free Admission")
// } else if (age >= 5 && age < 10) {
//     console.log("$10 Admission")
// } else if (age >= 10 && age < 65) {
//     console.log("$20 Admission")
// } else {
//     console.log("Invalid Age")
// }

// const firstName = prompt("Enter your first name");

// if (!firstName) {
//     firstName = prompt("Try Again");

// }

const day = ;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Invalid input");
}