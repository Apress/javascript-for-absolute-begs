// Figure 1-1

"Ben & Jerry's Chocolate Fudge Brownie";

// Figure 1-2

"Ben & Jerry's" + " " + "Chocolate Fudge Brownie" + " is my favorite icecream.";
// "Ben &  Jerry's Chocolate Fudge Brownie is my favorite icecream."

// Figure 1-3

Math.round((6 * 14 + 21) / 7 * 365 * 100 / (4 * 260)) + " pints of Chocolate Fudge Brownie";
// "526 pints of Chocolate Fudge Brownie"

// Figure 1-4

Math.round((6 * 14 + 21) / 7 * 365 * 100 / (4 * 260)) + " pints of Chocolate Fudge Brownie" ===
  "526 pints of Chocolate Fudge Brownie";
// true

// Figure 1-5

var newYorkSuperFudgeChunk = 4 * 300 + " calories per pint";
newYorkSuperFudgeChunk;
// "1200 calories per pint"

// Figure 1-6

var iceCream = {
  "Chocolate Fudge Brownie": 4 * 260,
  "Half Baked": 4 * 250,
  "New York Super Fudge Chunk": 4 * 300,
  "Coffee Heath Bar Crunch": 4 * 280,
  "Cherry Garcia": 4 * 240,
  "Mud Pie": 4 * 270,
  "Milk & Cookies": 4 * 270,
  "Cinnamon Buns": 4 * 290,
  "Chocolate Chip Cookie Dough": 4 * 270,
  "Mission to Marzipan": 4 * 260
};
iceCream["Chocolate Fudge Brownie"] + " calories per pint";
// "1040 calories per pint"

// Figure 1-7

var iceCream = {
  "Chocolate Fudge Brownie": 4 * 260,
  "Half Baked": 4 * 250,
  "New York Super Fudge Chunk": 4 * 300,
  "Coffee Heath Bar Crunch": 4 * 280,
  "Cherry Garcia": 4 * 240,
  "Mud Pie": 4 * 270,
  "Milk & Cookies": 4 * 270,
  "Cinnamon Buns": 4 * 290,
  "Chocolate Chip Cookie Dough": 4 * 270,
  "Mission to Marzipan": 4 * 260
};
iceCream["Half Baked"] = 4 * 270;
iceCream["Half Baked"] + " calories per pint";
// "1080 calories per pint"

// Figure 1-8

var iceCream = {
  "Chocolate Fudge Brownie": 4 * 260,
  "Half Baked": 4 * 270,
  "New York Super Fudge Chunk": 4 * 300,
  "Coffee Heath Bar Crunch": 4 * 280,
  "Cherry Garcia": 4 * 240,
  "Mud Pie": 4 * 270,
  "Milk & Cookies": 4 * 270,
  "Cinnamon Buns": 4 * 290,
  "Chocolate Chip Cookie Dough": 4 * 270,
  "Mission to Marzipan": 4 * 260
};
iceCream["Peanut Butter Cup"] = 4 * 360;
iceCream["Peanut Butter Cup"] + " calories per pint";
// "1440 calories per pint"

// Figure 1-9

var iceCream = {
  chocolateFudgeBrownie: 4 * 260,
  halfBaked: 4 * 270,
  newYorkSuperFudgeChunk: 4 * 300,
  coffeeHeathBarCrunch: 4 * 280,
  cherryGarcia: 4 * 240,
  mudPie: 4 * 270,
  milkCookies: 4 * 270,
  cinnamonBuns: 4 * 290,
  chocolateChipCookieDough: 4 * 270,
  missionToMarzipan: 4 * 260
};
iceCream.newYorkSuperFudgeChunk + " calories per pint";
// "1200 calories per pint"

// Figure 1-10

var iceCream = {
  chocolateFudgeBrownie: 4 * 260,
  halfBaked: 4 * 270,
  newYorkSuperFudgeChunk: 4 * 300,
  coffeeHeathBarCrunch: 4 * 280,
  cherryGarcia: 4 * 240,
  mudPie: 4 * 270,
  milkCookies: 4 * 270,
  cinnamonBuns: 4 * 290,
  chocolateChipCookieDough: 4 * 270,
  missionToMarzipan: 4 * 260
};
iceCream.bostonCreamPie = 4 * 250;
iceCream.bostonCreamPie + " calories per pint";
// "1000 calories per pint"

// Figure 1-11

var iceCream = {
  chocolateFudgeBrownie: 4 * 260,
  halfBaked: 4 * 270,
  newYorkSuperFudgeChunk: 4 * 300,
  coffeeHeathBarCrunch: 4 * 280,
  cherryGarcia: 4 * 240,
  mudPie: 4 * 270,
  milkCookies: 4 * 270,
  cinnamonBuns: 4 * 290,
  chocolateChipCookieDough: 4 * 270,
  missionToMarzipan: 4 * 260
};
iceCream["newYorkSuperFudgeChunk"] + " calories per pint";
// "1200 calories per pint"

// Figure 1-12

var iceCream = {
  "chocolateFudgeBrownie": 4 * 260,
  "halfBaked": 4 * 270,
  "newYorkSuperFudgeChunk": 4 * 300,
  "coffeeHeathBarCrunch": 4 * 280,
  "cherryGarcia": 4 * 240,
  "mudPie": 4 * 270,
  "milkCookies": 4 * 270,
  "cinnamonBuns": 4 * 290,
  "chocolateChipCookieDough": 4 * 270,
  "missionToMarzipan": 4 * 260
};
iceCream.chocolateChipCookieDough + " calories per pint";
// "1080 calories per pint"

// Figure 1-13

var iceCream = [
  "Chocolate Fudge Brownie",
  "Half Baked",
  "New York Super Fudge Chunk",
  "Coffee Heath Bar Crunch",
  "Cherry Garcia",
  "Mud Pie",
  "Milk & Cookies",
  "Cinnamon Buns",
  "Chocolate Chip Cookie Dough",
  "Mission to Marzipan"
];
iceCream[0];
// "Chocolate Fudge Brownie"
iceCream[3];
// "Coffee Heath Bar Crunch"
iceCream[6];
// "Milk & Cookies"

// Figure 1-14

var iceCream = [
  "Chocolate Fudge Brownie",
  "Half Baked",
  "New York Super Fudge Chunk",
  "Coffee Heath Bar Crunch",
  "Cherry Garcia",
  "Mud Pie",
  "Milk & Cookies",
  "Cinnamon Buns",
  "Chocolate Chip Cookie Dough",
  "Mission to Marzipan"
];
iceCream[9] = "Boston Cream Pie";
iceCream[9];
// "Boston Cream Pie"

// Figure 1-15

var iceCream = [
  "Chocolate Fudge Brownie",
  "Half Baked",
  "New York Super Fudge Chunk",
  "Coffee Heath Bar Crunch",
  "Cherry Garcia",
  "Mud Pie",
  "Milk & Cookies",
  "Cinnamon Buns",
  "Chocolate Chip Cookie Dough",
  "Mission to Marzipan"
];
iceCream["7"];
// "Cinnamon Buns"

// Figure 1-16

var iceCream = {
  "0": "Chocolate Fudge Brownie",
  "1": "Half Baked",
  "2": "New York Super Fudge Chunk",
  "3": "Coffee Heath Bar Crunch",
  "4": "Cherry Garcia",
  "5": "Mud Pie",
  "6": "Milk & Cookies",
  "7": "Cinnamon Buns",
  "8": "Chocolate Chip Cookie Dough",
  "9": "Mission to Marzipan"
};
iceCream[5];
// "Mud Pie"

// Figure 1-17

var iceCream = [
  "Chocolate Fudge Brownie",
  "Half Baked",
  "New York Super Fudge Chunk",
  "Coffee Heath Bar Crunch",
  "Cherry Garcia",
  "Mud Pie",
  "Milk & Cookies",
  "Cinnamon Buns",
  "Chocolate Chip Cookie Dough",
  "Mission to Marzipan"
];
"Cinnamon Buns" === iceCream[0];
// false
"Cinnamon Buns" === iceCream[1];
// false
"Cinnamon Buns" === iceCream[2];
// false
"Cinnamon Buns" === iceCream[3];
// false
"Cinnamon Buns" === iceCream[4];
// false
"Cinnamon Buns" === iceCream[5];
// false
"Cinnamon Buns" === iceCream[6];
// false
"Cinnamon Buns" === iceCream[7];
// true

// Figure 1-18

var iceCream = [
  "Chocolate Fudge Brownie",
  "Half Baked",
  "New York Super Fudge Chunk",
  "Coffee Heath Bar Crunch",
  "Cherry Garcia",
  "Mud Pie",
  "Milk & Cookies",
  "Cinnamon Buns",
  "Chocolate Chip Cookie Dough",
  "Mission to Marzipan"
];
var rankFlavor = function(flavor) {
  for (var i = iceCream.length; i --; ) {
    if (iceCream[i] === flavor) {
        return flavor + " is number " + (i + 1) + ".";
    }
  }
  return flavor + " is not among my top 10.";
};
rankFlavor("Coffee Heath Bar Crunch");
// "Coffee Heath Bar Crunch is number 4."
rankFlavor("Dublin Mudslide");
// "Dublin Mudslide is not among my top 10."

// Figure 1-19

var rankFlavor = function(flavor) {
  for (var i = rankFlavor.len; i --; ) {
    if (rankFlavor[i] === flavor) {
        return flavor + " is number " + (i + 1) + ".";
    }
  }
  return flavor + " is not among my top 10.";
};
rankFlavor[0] = "Chocolate Fudge Brownie";
rankFlavor[1] = "Half Baked";
rankFlavor[2] = "New York Super Fudge Chunk";
rankFlavor[3] = "Coffee Heath Bar Crunch";
rankFlavor[4] = "Cherry Garcia";
rankFlavor[5] = "Mud Pie";
rankFlavor[6] = "Milk & Cookies";
rankFlavor[7] = "Cinnamon Buns";
rankFlavor[8] = "Chocolate Chip Cookie Dough";
rankFlavor[9] = "Mission to Marzipan";
rankFlavor.len = 10;
rankFlavor("New York Super Fudge Chunk");
// "New York Super Fudge Chunk is number 3."
rankFlavor("Peanut Brittle");
// "Peanut Brittle is not among my top 10."
