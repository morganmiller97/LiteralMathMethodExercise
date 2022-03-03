//LiteralMathMethodExercise
// 1a
let warmhugs = "Hi, I'm Olaf and i like warm hugs";

// 1b
console.long(warmHugs.toUpperCase());

// 1c
console.long(warmHugs.replace("like, love"));

warmHugs = warmHugs.replace("like, love");

// 2a
let beenImpaled = " Oh, look at that. I've been impaled.";

// 2b
beenImpaled = beenImpaled.slice(17,34);
beenImpaled =beenImpaled.slice(-18);

// 3a
let dotDotDot = "...";

// 3b
let skullBones = "I don't have a skull ${dotDotDot} or bones.";
console.log(skullBones);
// 4
console.log(Math.PI);

// 5 
let randomNumber = Math.random(); //0 through 0.99999
randomNumber *= 3; //0 to 2.9999
randomNumber = Math.floor(randomNumber); //gets rid of decimal 
randomNumber++;
console.log(randomNumber);


// BONUS
// 6 
console.log(" Let It Go!".toUpperCase().repeat(3).slice(-21));
console.log(" Let It Go!".toUpperCase().repeat(2).trim());


// 7a
let reindeers = "Reindeers are better than people.";

//7b
console.log(reindeers.replace("Reindeers are better than people.",
"Reindeers_are_better_than_people."))

// 8 
let squareRoot = Math.sqrt(2);
console.log(squareRoot);

// 9 
 let newRandomNumber = Math.ceil((Math.random()*17)+ 6);
 console.log(newRandomNumber);

