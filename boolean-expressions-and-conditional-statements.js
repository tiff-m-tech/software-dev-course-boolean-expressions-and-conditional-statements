/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

// original code
// const readline = require('readline-sync');

// const hasTorch = true;
// const hasMap = false;

// console.log("You see two paths: one leads to the mountains, the other to the village.");
// const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

// if (choice === "mountains" && hasTorch) {
//   console.log("You safely navigate through the dark mountains.");
// } else if (choice === "mountains" && !hasTorch) {
//   console.log("It's too dark to proceed. You decide to turn back.");
// } else if (choice === "village" || hasMap) {
//   console.log("You find your way to the village.");
// } else {
//   console.log("You get lost and wander aimlessly.");
// }

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

const input = require('readline-sync');

const hasTorch = true;
const hasMap = false;
let hasMoney = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = input.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  console.log("You happen upon a cave.");

  const caveChoice = input.question("Do you 'enter the cave' or 'keep walking'? ");

  if (caveChoice === "enter the cave") {
    console.log("You enter the cave and use your torch to explore. You stumble upon a treasure chest!");
  } else if (caveChoice === "keep walking" && hasMap) {
    console.log("You decide to keep walking and use your map to find your way home. END OF STORY");
  } else if (caveChoice === "keep walking" && !hasMap) {
    console.log("You decide to keep walking, but without a map you get lost, wandering the woods the rest of your life. END OF STORY");
  } else {
    console.log("That is not a valid choice.");
  }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village") {
  console.log("You find your way to the village.");
  console.log("While walking around you find a bag.");
    
    const villageChoice = input.question("Do you 'pick up the bag' or 'leave the bag'?")

    if (villageChoice === 'pick up the bag') {
      console.log("YAY, you found some money and keep walking.");
      hasMoney = true;
    } else {
      console.log("You keep walking.");
    } 
  
    console.log("You happen upon a store and decide to enter. They sell food. You decide to buy some!")

    if (hasMoney) {
      console.log("You buy some food. After a while you start feeling sick and pass out. It was poisoned! END OF GAME");
    } else {
      console.log("You realize you don't have money and can't buy anything. Leaving the store disappointed but continuing your journey.");
    }
} else {
  console.log("You get lost and wander aimlessly.");
}