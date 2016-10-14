// Figure 2-1

"Bat" + "man";
// "Batman"
"Bat".concat("man");
// "Batman"

// Figure 2-2

var name = "Super";
name.concat("man");
// "Superman"
name;
// "Super"

// Figure 2-3

var pre = "Bat";
var post = pre.concat("man");
pre;
// "Bat"
post;
// "Batman";

// Figure 2-4

var hero = "Superman";
hero.toLowerCase() === "superman";
// true

// Figure 2-5

"Batman"[3];
// "m"
"Batman"[0];
// "B"

// Figure 2-6

var parrFamily = "Mr. Incredible, Elastigirl, Violet, Dash, Jack-Jack";
parrFamily.charAt(7);
// "r"
parrFamily.charAt(parrFamily.length - 1);
// "k"

// Figure 2-7

var id = "Dr. Otto G" + String.fromCharCode(252) + "nther Octavius";
id;
// "Dr. Otto Günther Octavius"

// Figure 2-8

var id = "Dr. Otto G" + String.fromCharCode(252) + "nther Octavius";
id.charCodeAt(10) === 252;
// true
id.charAt(10) === "ü";
// true

// Figure 2-9

"Pow! Bam! Zonk!".toUpperCase();
// "POW! BAM! ZONK!"
"PSST...ZZZZ".toLowerCase();
// "psst...zzzz"

// Figure 2-10

"Iron Monger, Titanium Man, Madame Masque, Ghost, Mandarin".indexOf("Ghost");
// 42
var villains = "Iron Monger, Titanium Man, Madame Masque, Ghost, Mandarin";
villains.indexOf("Mandarin");
// 49
villains.indexOf("Green Goblin");
// -1

// Figure 2-11

var villains = "Iron Monger, Titanium Man, Madame Masque, Ghost, Mandarin";
villains.indexOf("Man");
// 22
villains.indexOf("Man", villains.indexOf("Man") + 1);
// 49

// Figure 2-12

var heroes = "Superman, Batman, Spider-Man, Iron Man";
heroes.slice(30);
// "Iron Man"
heroes.slice(30, heroes.length);
// "Iron Man"
heroes.slice(10, -22);
// "Batman"

// Figure 2-13

"Batman".replace("Bat", "Super");
// "Superman"
"Batman and Batgirl".replace("Bat", "Super");
// "Superman and Batgirl"
"Batman and Batgirl".replace(/Bat/g, "Super");
// "Superman and Supergirl"

// Figure 2-14

var titleCase = function(m) {
  return m.slice(0,1).toUpperCase() + m.slice(1);
};
"batman, spider-man, iron man".replace(/\b\w+\b/g, titleCase);
// "Batman, Spider-Man, Iron Man"

// Figure 2-15

var villains = "Green Goblin, Doctor Octopus, Venom, Hobgoblin, Sandman";
villains.split(", ");
// ["Green Goblin", "Doctor Octopus", "Venom", "Hobgoblin", "Sandman"]

// Figure 2-16

var villains = "Green Goblin, Doctor Octopus, Venom, Hobgoblin, and Sandman";
villains.split(/, (?:and )?/g);
// ["Green Goblin", "Doctor Octopus", "Venom", "Hobgoblin", "Sandman"]

// Figure 2-17

var villains = "Green Goblin, Doctor Octopus, Venom, Hobgoblin, and Sandman";
villains.split(/, (?:and )?/g)[3];
// "Hobgoblin"
var villains = "Green Goblin, Doctor Octopus, Venom, Hobgoblin, and Sandman";
villains.split(/, (?:and )?/g)[3];
// "Hobgoblin"
villains;
// "Green Goblin, Doctor Octopus, Venom, Hobgoblin, and Sandman"

// Figure 2-18

var villains = "Green Goblin, Doctor Octopus, Venom, Hobgoblin, and Sandman";
villains = villains.split(/, (?:and )?/g);
villains[1];
// "Doctor Octopus"

// Figure 2-19

var villains = "Green Goblin, Doctor Octopus, Venom, Hobgoblin, and Sandman";
villains.match(/[Gg]oblin/g);
// ["Goblin", "goblin"]

// Figure 2-20

var pre = new String("Hob");
var post = pre.concat("goblin");
pre = pre.valueOf();
pre;
// "Hob"
post;
// "Hobgoblin"

// Figure 2-21

Boolean(undefined);
// false
Boolean(null);
// false
Boolean(false);
// false
Boolean("");
// false
Boolean(0);
// false
Boolean(NaN);
// false

// Figure 2-22

var nothing, zilch = null;
nothing * 4;
// NaN
zilch * 4;
// 0

// Figure 2-23

Number("4");
// 4
Number("");
// 0
Number("Mr. Incredible");
// NaN

// Figure 2-24

Number(["Green Goblin", "Doctor Octopus", "Sandman"]);
// NaN
Number({hero: "Batman", archenemy: "Joker"});
// NaN
Number(String.fromCharCode);
// NaN

// Figure 2-25

String(["Green Goblin", "Doctor Octopus", "Sandman"]);
// "Green Goblin,Doctor Octopus,Sandman"
["Green Goblin", "Doctor Octopus", "Sandman"].toString();
// "Green Goblin,Doctor Octopus,Sandman"
({"Bob Parr": "Mr. Incredible", "Helen Parr": "Elastigirl"}).toString();
// "[object Object]"
String({"Bob Parr": "Mr. Incredible", "Helen Parr": "Elastigirl"});
// "[object Object]"

// Figure 2-26

(299792458).toExponential(2);
// "3.00e+8"
(299792458).toExponential();
// "2.99792458e+8"

// Figure 2-27

(299792458 / 1000).toFixed(3);
// "299792.458"
(299792458 / 1000).toFixed();
//"299792"

// Figure 2-28

(299792458).toPrecision(2);
// "3.0e+8"
(299792458).toPrecision(12);
// "299792458.000"
(299792458).toPrecision();
// "299792458"
(299792458).toString();
// "299792458"

// Figure 2-29

var incredibles = "Mr. Incredible, Elastigirl, Violet, Dash, Jack-Jack";
incredibles.match("Jack");
// ["Jack"]
incredibles.search("Jack");
// 42

// Figure 2-30

var incredibles = "Mr. Incredible, Elastigirl, Violet, Dash, Jack-Jack";
incredibles.match(new RegExp("Jack"));
// ["Jack"]
incredibles.search(new RegExp("Jack"));
// 42

// Figure 2-31

var incredibles = "Mr. Incredible, Elastigirl, Violet, Dash, Jack-Jack";
incredibles.match(/jack/ig);
// ["Jack", "Jack"]
incredibles.match("jack");
// null
