// Figure 4-1

var mayfly = function () {
  var tally = 0;
  return {
    addToTally: function (km) {
      if (typeof km === "number" && isFinite(km)) {
        return tally += km;
      }
    },
    kmLeftToLive: function () {
      if (tally < 100) {
        return "Mayfly has " + (100 - tally) + " kilometers left to live.";
      }
    }
  }
}();
mayfly.addToTally(10);

// Figure 4-2

var fridge = {
  brownCow: true,
  stonyfield: false,
  fage: true,
  lifeway: false
};
var smoothie;
if (fridge.brownCow) {
  smoothie = "Brown Cow cream-top yogurt";
} else if (fridge.stonyfield) {
  smoothie = "Stonyfield cream-top yogurt";
} else if (fridge.fage) {
  smoothie = "Fage cultured cream";
} else if (fridge.lifeway) {
  smoothie = "Lifeway Greek-style kefir";
}
smoothie += ", grass-fed cream and milk, Saigon cinnamon, and wild blueberries." 
// "Brown Cow cream-top yogurt, grass-fed cream and milk, Saigon cinnamon,
// and wild blueberries."

// Figure 4-3

var fridge = {
  brownCow: false,
  stonyfield: false,
  fage: false,
  lifeway: false
};
var smoothie;
if (fridge.brownCow) {
  smoothie = "Brown Cow cream-top yogurt";
} else if (fridge.stonyfield) {
  smoothie = "Stonyfield cream-top yogurt";
} else if (fridge.fage) {
  smoothie = "Fage cultured cream";
} else if (fridge.lifeway) {
  smoothie = "Lifeway Greek-style kefir";
} else {
  smoothie = "Dannon yogurt";
}
smoothie += ", grass-fed cream and milk, Saigon cinnamon, and wild blueberries." 
// "Dannon yogurt, grass-fed cream and milk, Saigon cinnamon, and wild blueberries."

// Figure 4-4

var fridge = {
  brownCow: true,
  stonyfield: false,
  fage: true,
  lifeway: false
};
var smoothie = fridge.brownCow ? "Brown Cow cream-top yogurt" : 
(fridge.stonyfield ? "Stonyfield cream-top yogurt" : 
(fridge.fage ? "Fage cultured cream" : 
(fridge.lifeway ? "Lifeway Greek-style kefir" : "Dannon yogurt")));
smoothie += ", grass-fed cream and milk, Saigon cinnamon, and wild blueberries." 
// "Brown Cow cream-top yogurt, grass-fed cream and milk, Saigon cinnamon,
// and wild blueberries."

// Figure 4-5

var jersey = 34, name = "";
switch (jersey) {
  case 7:
    name = "Roethlisberger";
    break;
  case 10:
    name = "Holmes";
    break;
  case 17:
    name = "Wallace";
    break;
  case 34:
    name = "Mendenhall";
    break;
  case 43:
    name = "Polamalu";
    break;
  case 83:
    name = "Miller";
    break;
  case 86:
    name = "Ward";
    break;
  case 92:
    name = "Harrison";
    break;
  case 94:
    name = "Timmons";
    break;
  case 96:
    name = "Hood";
    break;
  default:
    name = "not worn by any Steeler";
    break;
}
"Number " + jersey + " is " + name + "."; 
// "Number 34 is Mendenhall."

// Figure 4-6

var jersey = 92, name = "";
switch (jersey) {
  case 7:
    name = "Roethlisberger";
    break;
  case 10:
    name = "Holmes";
    break;
  case 17:
    name = "Wallace";
    break;
  case 34:
    name = "Mendenhall";
    break;
  case 43:
    name = "Polamalu";
    break;
  case 83:
    name = "Miller";
    break;
  case 86:
    name = "Ward";
    break;
  case 92:
  case 97:
    name = "Harrison";
    break;
  case 94:
    name = "Timmons";
    break;
  case 96:
    name = "Hood";
    break;
  default:
    name = "not worn by any Steeler";
    break;
}
"Number " + jersey + " is " + name + "."; 
// "Number 92 is Harrison."

// Figure 4-7

var jersey = 7, name = "";
function identifyPlayer() {
  switch (jersey) {
    case 7:
      return "Roethlisberger";
    case 10:
      return "Holmes";
    case 17:
      return "Wallace";
    case 34:
      return "Mendenhall";
    case 43:
      return "Polamalu";
    case 83:
      return "Miller";
    case 86:
      return "Ward";
    case 92:
      return "Harrison";
    case 94:
      return "Timmons";
    case 96:
      return "Hood";
    default:
      return "not worn by any Steeler";
  }
}
"Number " + jersey + " is " + identifyPlayer() + "."; 
// "Number 7 is Roethlisberger."

// Figure 4-8

var looseLeafTea = [
  "Ghillidary",
  "Kenilworth",
  "Milima",
  "Keemun",
  "Boisahabi",
  "Manohari",
  "Borpatra",
  "Lukwah",
  "Khongea"
];
var mood = "glum";
var i = 0;
while (i < looseLeafTea.length) {
  if (looseLeafTea[i] === "Borpatra") {
    mood = "cheery";
    break;
  }
  i ++;
}
"I feel " + mood + "!"; 
// "I feel cheery!"

// Figure 4-9

var looseLeafTea = [
  "Ghillidary",
  "",
  "Kenilworth",
  "Milima",
  ,
  "Keemun",
  "Boisahabi",
  "Manohari",
  "Borpatra",
  "Lukwah",
  "Khongea"
];
var mood = "glum";
var i = 0;
while (i < looseLeafTea.length) {
  if (looseLeafTea[i] === "Borpatra") {
    mood = "cheery";
    break;
  } else if (! looseLeafTea[i]) {
    looseLeafTea.splice(i, 1);
    continue;
  } else {
    i ++;
  }
}
"I feel " + mood + "!"; 
// "I feel cheery!"
looseLeafTea; 
// ["Ghillidary", "Kenilworth", "Milima", "Keemun", "Boisahabi", "Manohari",
// "Borpatra", "Lukwah", "Khongea"]

// Figure 4-10

var looseLeafTea = [
  "Ghillidary",
  "Kenilworth",
  "Milima",
  "Keemun",
  "Boisahabi",
  "Manohari",
  "Borpatra",
  "Lukwah",
  "Khongea"
];
function findTea(tea) {
  var i = 0;
  while (i < looseLeafTea.length) {
    if (looseLeafTea[i] === tea) {
      return "cheery";
    } else if (! looseLeafTea[i]) {
      looseLeafTea.splice(i, 1);
      continue;
    } else {
      i ++;
    }
  }
  return "glum";
}
"I feel " + findTea("Kenilworth") + "!"; 
// "I feel cheery!"

// Figure 4-11

var spices = [
  "cinnamon",
  "ginger",
  "nutmeg",
  "cloves",
  "sesame seed",
  "pepper",
  "rosemary",
  "tarragon",
  "basil",
  "mace",
  "poppy seed",
  "lemon peel",
  "vanilla",
  "oregano",
  "allspice",
  "thyme"
];
var putTheKaiboshOn = true;
var i = 0;
do {
  if (spices[i] === "lemon peel") {
    putTheKaiboshOn = false;
    break;
  }
  i ++;
} while (i < spices.length);
(putTheKaiboshOn) ? "No can do!" : "Go right ahead!"; 
// "Go right ahead!"

// Figure 4-12

var spices = [
  "cinnamon",
  "ginger",
  "nutmeg",
  "cloves",
  "sesame seed",
  "pepper",
  "rosemary",
  "tarragon",
  "basil",
  "mace",
  "poppy seed",
  "lemon peel",
  "vanilla",
  "oregano",
  "allspice",
  "thyme"
];
var putTheKaiboshOn = true;
var i = 0;
if (spices[i] === "lemon peel") {
  putTheKaiboshOn = false;
} else {
  i ++;
  while (i < spices.length) {
    if (spices[i] === "lemon peel") {
      putTheKaiboshOn = false;
      break;
    }
    i ++;
  }
}
(putTheKaiboshOn) ? "No can do!" : "Go right ahead!"; 
// "Go right ahead!"

// Figure 4-13

var theFall = [
  "Chasing Pirates",
  "Even Though",
  "Light as a Feather",
  "Young Blood",
  "I Wouldn't Need You",
  "Waiting",
  "It's Gonna Be",
  "You've Ruined Me",
  "Back to Manhattan",
  "Stuck",
  "December",
  "Tell Yer Mama",
  "Man of the Hour"
];
var song = "Back to Manhattan";
for (var i = 0, j = 0; i < theFall.length; i ++) {
  if (theFall[i] === song) {
    j = i + 1;
    break;
  }
}
song + (j > 0 ? " is track " + j : " is not") + " on The Fall.";
// "Back to Manhattan is track 9 on The Fall."

// Figure 4-14

var shoes = {
  "LunaRacer": 6.6,
  "Air Max": 13,
  "LunarGlide": 10.2,
  "Zoom Streak XC": 7,
  "Free": 8.6,
  "Mayfly": 4,
  "Zoom Vomero": 11.6,
  "LunarElite": 9.7
}
var myOptions = [];
for (var shoe in shoes) {
  if (shoes[shoe] >= 10) {
    myOptions.push(shoe);
  }
}
myOptions; 
// ["Air Max", "LunarGlide", "Zoom Vomero"]

// Figure 4-15

function namePirate(jersey) {
  var name;
  switch(jersey) {
    case 77:
      name = "D.J. Carrasco";
      break;
    case 53:
      name = "Brendan Donnelly";
      break;
    case 29:
      name = "Octavio Dotel";
      break;
    case 57:
      name = "Zach Duke";
      break;
    case 48:
      name = "Javier Lopez";
      break;
    case 28:
      name = "Paul Maholm";
      break;
    case 34:
      name = "Daniel McCutchen";
      break;
    case 47:
      name = "Evan Meek";
      break;
    case 37:
      name = "Charlie Morton";
      break;
    case 49:
      name = "Ross Ohlendorf";
      break;
    case 62:
      name = "Hayden Penn";
      break;
    case 43:
      name = "Jack Taschner";
      break;
    case 41:
      name = "Ryan Doumit";
      break;
    case 35:
      name = "Jason Jaramillo";
      break;
    case 13:
      name = "Ronny Cedeno";
      break;
    case 6:
      name = "Jeff Clement";
      break;
    case 2:
      name = "Bobby Crosby";
      break;
    case 3:
      name = "Akinori Iwamura";
      break;
    case 15:
      name = "Andy LaRoche";
      break;
    case 19:
      name = "Ryan Church";
      break;
    case 46:
      name = "Garrett Jones";
      break;
    case 22:
      name = "Andrew McCutchen";
      break;
    case 85:
      name = "Lastings Milledge";
      break;
    case 58:
      name = "John Raynor";
      break;
    case 24:
      name = "Delwyn Young";
      break;
    default:
      name = "not worn by any Pirate";
  }
  return jersey + " is " + name + ".";
}
namePirate(46); 
// "46 is Garrett Jones."

// Figure 4-16

var pirates = {
  "77": "D.J. Carrasco",
  "53": "Brendan Donnelly",
  "29": "Octavio Dotel",
  "57": "Zach Duke",
  "48": "Javier Lopez",
  "28": "Paul Maholm",
  "34": "Daniel McCutchen",
  "47": "Evan Meek",
  "37": "Charlie Morton",
  "49": "Ross Ohlendorf",
  "62": "Hayden Penn",
  "43": "Jack Taschner",
  "41": "Ryan Doumit",
  "35": "Jason Jaramillo",
  "13": "Ronny Cedeno",
  "6": "Jeff Clement",
  "2": "Bobby Crosby",
  "3": "Akinori Iwamura",
  "15": "Andy LaRoche",
  "19": "Ryan Church",
  "46": "Garrett Jones",
  "22": "Andrew McCutchen",
  "85": "Lastings Milledge",
  "58": "John Raynor",
  "24": "Delwyn Young"
};
function namePirate(jersey) {
  return jersey + " is " + (pirates[jersey] ? pirates[jersey] : "not worn by a Pirate") + ".";
}
namePirate(3); 
// "3 is Akinori Iwamura."

// Figure 4-17

var topTwenty = {
  "Crosby": 49,
  "Ovechkin": 48,
  "Stamkos": 48,
  "Marleau": 43,
  "Gaborik": 41,
  "Kovalchuk": 40,
  "Heatley": 39,
  "Semin": 39,
  "Parise": 37,
  "Burrows": 35,
  "Kopitar": 34,
  "Ryan": 34,
  "Carter": 33,
  "Nash": 33,
  "Iginla": 32,
  "Penner": 32,
  "Backstrom": 31,
  "Hornqvist": 30,
  "Jokinen": 30,
  "Kane": 30
};
var rocketRichard = ["Ovechkin", "Crosby", "Marleau", "Stamkos"], note = "";
rocketRichard.sort(function(p1, p2) {
  var d = topTwenty[p2] - topTwenty[p1];
  if (d !== 0) {
    return d;
  } else {
    return (p1 < p2) ? -1 : 1;
  }
});
for (var i = 0; i < rocketRichard.length; i ++) {
  note = note + rocketRichard[i] + ": " + topTwenty[rocketRichard[i]] + ", ";
}
note.slice(0, -2);
// "Crosby: 49, Ovechkin: 48, Stamkos: 48, Marleau: 43"

// Figure 4-18

var topTwenty = {
  "Crosby": 49,
  "Ovechkin": 48,
  "Stamkos": 48,
  "Marleau": 43,
  "Gaborik": 41,
  "Kovalchuk": 40,
  "Heatley": 39,
  "Semin": 39,
  "Parise": 37,
  "Burrows": 35,
  "Kopitar": 34,
  "Ryan": 34,
  "Carter": 33,
  "Nash": 33,
  "Iginla": 32,
  "Penner": 32,
  "Backstrom": 31,
  "Hornqvist": 30,
  "Jokinen": 30,
  "Kane": 30
}
var rocketRichard = ["Ovechkin", "Crosby", "Marleau", "Stamkos"], note = "";
rocketRichard.sort(function(p1, p2) {
  var d = topTwenty[p1] - topTwenty[p2];
  if (d !== 0) {
    return d;
  } else {
    return (p2 < p1) ? -1 : 1;
  }
});
for (var i = rocketRichard.length; i --; ) {
  note = note + rocketRichard[i] + ": " + topTwenty[rocketRichard[i]] + ", ";
}
note.slice(0, -2);
// "Crosby: 49, Ovechkin: 48, Stamkos: 48, Marleau: 43"
