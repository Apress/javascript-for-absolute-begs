// Figure 5-1

var WildMaineBlueberry = function(blueberries, vanilla) {
  this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
};
WildMaineBlueberry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6],
  freshLemonJuice: [2, "tsp"]
};
var wildMaineBlueberry = new WildMaineBlueberry();
console.dir(wildMaineBlueberry);

// Figure 5-2

var WildMaineBlueberry = function(blueberries, vanilla) {
  this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
};
WildMaineBlueberry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6],
  freshLemonJuice: [2, "tsp"]
};
var wildMaineBlueberry = new WildMaineBlueberry("Dole frozen wild blueberries", "Tahitian");
console.dir(wildMaineBlueberry);

// Figure 5-3

var WildMaineBlueberry = function(blueberries, vanilla) {
  this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
};
WildMaineBlueberry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6],
  freshLemonJuice: [2, "tsp"]
};
var wildMaineBlueberry = WildMaineBlueberry();
typeof wildMaineBlueberry;
// "undefined"
blueberries;
// [2, "cup", "fresh wild Maine blueberries"]
vanilla;
// [1, "bean", "Madagascar Bourbon"]

// Figure 5-4

var VanillaBean = function(vanilla, cinnamon) {
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
  cinnamon && (this.cinnamon = [1, "stick", "Saigon"]);
};
VanillaBean.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var vanilla = new VanillaBean("Tahitian", true);
console.dir(vanilla);

// Figure 5-5

var VanillaBean = function(vanilla, cinnamon) {
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
  cinnamon && (this.cinnamon = [1, "stick", "Saigon"]);
};
VanillaBean.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var Coffee = function(coffee) {
  this.coffee = coffee || [1/4, "cup, coarsely ground", "Starbucks Espresso"];
};
Coffee.prototype = new VanillaBean();
var coffee = new Coffee();
console.dir(coffee);

// Figure 5-6

var VanillaBean = function(vanilla, cinnamon) {
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
  cinnamon && (this.cinnamon = [1, "stick", "Saigon"]);
};
VanillaBean.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var Coffee = function(coffee) {
  this.coffee = coffee || [1/4, "cup, coarsely ground", "Starbucks Espresso"];
};
Coffee.prototype = new VanillaBean();

var Chocolate = function(cocoa, bittersweet) {
  this.cocoa = cocoa || [3/16, "cup", "Callebaut"];
  this.bittersweet = bittersweet || [1 + 1/2, "cup", "Callebaut"];
};
Chocolate.prototype = new VanillaBean();
Chocolate.prototype.yolks = [4];
var chocolate = new Chocolate([1/4, "cup", "Bensdorp"]);
console.dir(chocolate);

// Figure 5-7

var VanillaBean = function(vanilla, cinnamon) {
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
  cinnamon && (this.cinnamon = [1, "stick", "Saigon"]);
};
VanillaBean.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var Coffee = function(coffee) {
  this.coffee = coffee || [1/4, "cup, coarsely ground", "Starbucks Espresso"];
};
Coffee.prototype = new VanillaBean();
var Chocolate = function(cocoa, bittersweet) {
  this.cocoa = cocoa || [3/16, "cup", "Callebaut"];
  this.bittersweet = bittersweet || [1 + 1/2, "cup", "Callebaut"];
};
Chocolate.prototype = new VanillaBean();
Chocolate.prototype.yolks = [4];

var MintChocolateChunk = function(mint) {
  this.mint = mint || [1, "cup", "fresh mint leaves"];
};
MintChocolateChunk.prototype = new Chocolate();
MintChocolateChunk.prototype.vanilla = [1/3, "bean", "Madagascar Bourbon"];
MintChocolateChunk.prototype.bittersweet[0] = 1;
delete MintChocolateChunk.prototype.cocoa;
var mintChocolateChunk = new MintChocolateChunk();
console.dir(mintChocolateChunk);

// Figure 5-8

var VanillaBean = function(vanilla, cinnamon) {
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
  cinnamon && (this.cinnamon = [1, "stick", "Saigon"]);
};
VanillaBean.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var Coffee = function(coffee) {
  this.coffee = coffee || [1/4, "cup, coarsely ground", "Starbucks Espresso"];
};
Coffee.prototype = new VanillaBean();
var Chocolate = function(cocoa, bittersweet) {
  this.cocoa = cocoa || [3/16, "cup", "Callebaut"];
  this.bittersweet = bittersweet || [1 + 1/2, "cup", "Callebaut"];
};
Chocolate.prototype = new VanillaBean();
Chocolate.prototype.yolks = [4];
var MintChocolateChunk = function(mint) {
  this.mint = mint || [1, "cup", "fresh mint leaves"];
};
MintChocolateChunk.prototype = new Chocolate();
MintChocolateChunk.prototype.vanilla = [1/3, "bean", "Madagascar Bourbon"];
MintChocolateChunk.prototype.bittersweet[0] = 1;
delete MintChocolateChunk.prototype.cocoa;
var mintChocolateChunk = new MintChocolateChunk();
mintChocolateChunk instanceof MintChocolateChunk;
// true
mintChocolateChunk instanceof Chocolate;
// true
mintChocolateChunk instanceof Coffee;
// false
mintChocolateChunk instanceof VanillaBean;
// true
mintChocolateChunk instanceof Object;
// true

// Figure 5-9

var VanillaBean = function(vanilla, cinnamon) {
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
  cinnamon && (this.cinnamon = [1, "stick", "Saigon"]);
};
VanillaBean.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var Coffee = function(coffee) {
  this.coffee = coffee || [1/4, "cup, coarsely ground", "Starbucks Espresso"];
};
Coffee.prototype = new VanillaBean();
var Chocolate = function(cocoa, bittersweet) {
  this.cocoa = cocoa || [3/16, "cup", "Callebaut"];
  this.bittersweet = bittersweet || [1 + 1/2, "cup", "Callebaut"];
};
Chocolate.prototype = new VanillaBean();
Chocolate.prototype.yolks = [4];
var MintChocolateChunk = function(mint) {
  this.mint = mint || [1, "cup", "fresh mint leaves"];
};
MintChocolateChunk.prototype = new Chocolate();
MintChocolateChunk.prototype.vanilla = [1/3, "bean", "Madagascar Bourbon"];
MintChocolateChunk.prototype.bittersweet[0] = 1;
delete MintChocolateChunk.prototype.cocoa;
var vanilla = new VanillaBean("Tahitian", true);
var coffee = new Coffee();
var chocolate = new Chocolate([1/4, "cup", "Bensdorp"]);
var mintChocolateChunk = new MintChocolateChunk();
vanilla.heavyCream === coffee.heavyCream &&
  vanilla.heavyCream === chocolate.heavyCream &&
  vanilla.heavyCream === mintChocolateChunk.heavyCream &&
  mintChocolateChunk.heavyCream === coffee.heavyCream &&
  coffee.heavyCream === chocolate.heavyCream &&
  mintChocolateChunk.heavyCream === chocolate.heavyCream;
// true

// Figure 5-10

var VanillaBean = function(vanilla, cinnamon) {
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
  cinnamon && (this.cinnamon = [1, "stick", "Saigon"]);
};
VanillaBean.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var Coffee = function(coffee) {
  this.coffee = coffee || [1/4, "cup, coarsely ground", "Starbucks Espresso"];
};
Coffee.prototype = new VanillaBean();
var Chocolate = function(cocoa, bittersweet) {
  this.cocoa = cocoa || [3/16, "cup", "Callebaut"];
  this.bittersweet = bittersweet || [1 + 1/2, "cup", "Callebaut"];
};
Chocolate.prototype = new VanillaBean();
Chocolate.prototype.yolks = [4];
var MintChocolateChunk = function(mint) {
  this.mint = mint || [1, "cup", "fresh mint leaves"];
};
MintChocolateChunk.prototype = new Chocolate();
MintChocolateChunk.prototype.vanilla = [1/3, "bean", "Madagascar Bourbon"];
MintChocolateChunk.prototype.bittersweet[0] = 1;
delete MintChocolateChunk.prototype.cocoa;
var mintChocolateChunk = new MintChocolateChunk();
console.dir(mintChocolateChunk);
MintChocolateChunk.prototype.bittersweet[2] = "Lindt";
console.dir(mintChocolateChunk);

// Figure 5-11

var VanillaBean = function(vanilla, cinnamon) {
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
  cinnamon && (this.cinnamon = [1, "stick", "Saigon"]);
};
VanillaBean.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var Coffee = function(coffee) {
  this.coffee = coffee || [1/4, "cup, coarsely ground", "Starbucks Espresso"];
};
Coffee.prototype = new VanillaBean();
var Chocolate = function(cocoa, bittersweet) {
  this.cocoa = cocoa || [3/16, "cup", "Callebaut"];
  this.bittersweet = bittersweet || [1 + 1/2, "cup", "Callebaut"];
};
Chocolate.prototype = new VanillaBean();
Chocolate.prototype.yolks = [4];
var MintChocolateChunk = function(mint) {
  this.mint = mint || [1, "cup", "fresh mint leaves"];
};
MintChocolateChunk.prototype = new Chocolate();
MintChocolateChunk.prototype.vanilla = [1/3, "bean", "Madagascar Bourbon"];
MintChocolateChunk.prototype.bittersweet[0] = 1;
delete MintChocolateChunk.prototype.cocoa;
var vanilla = new VanillaBean();
var coffee = new Coffee();
var chocolate = new Chocolate();
var mintChocolateChunk = new MintChocolateChunk();
VanillaBean.prototype.heathBars = [4, "Heath Bars, chopped in chunks"];
console.dir(vanilla);
console.dir(coffee);
console.dir(chocolate);
console.dir(mintChocolateChunk);

// Figure 5-12

var Berry = function() {}
Berry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [3],
  vanilla: [1, "bean", "Madagascar Bourbon"]
};
var Blueberry = function(blueberry, lemon) {
  this.blueberry = [2, "cup", blueberry ? blueberry : "Maine wild blueberries"];
  this.freshLemonJuice = [2, "tsp", lemon ? lemon : "Meyer"];
};
Blueberry.prototype = Berry.prototype;
var Strawberry = function(strawberry) {
  this.strawberry = [2, "cup", strawberry ? strawberry : "fraises des bois"];
};
Strawberry.prototype = Berry.prototype;
var blueberry = new Blueberry();
var strawberry = new Strawberry();
console.dir(blueberry);
console.dir(strawberry);

// Figure 5-13

var Blueberry = function(blueberry, lemon) {
  this.blueberry = [2, "cup", blueberry ? blueberry : "Maine wild blueberries"];
  this.freshLemonJuice = [2, "tsp", lemon ? lemon : "Meyer"];
};
Blueberry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [3],
  vanilla: [1, "bean", "Madagascar Bourbon"]
};
var Strawberry = function(strawberry) {
  this.strawberry = [2, "cup", strawberry ? strawberry : "fraises des bois"];
};
Strawberry.prototype = new Blueberry();
delete Strawberry.prototype.blueberry;
delete Strawberry.prototype.freshLemonJuice;
var blueberry = new Blueberry();
var strawberry = new Strawberry();
console.dir(blueberry);
console.dir(strawberry);

// Figure 5-14

var Berry = function() {}
Berry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [3],
  vanilla: [1, "bean", "Madagascar Bourbon"]
};
var Blueberry = function(blueberry, lemon) {
  this.blueberry = [2, "cup", blueberry ? blueberry : "Maine wild blueberries"];
  this.freshLemonJuice = [2, "tsp", lemon ? lemon : "Meyer"];
};
Blueberry.prototype = Berry.prototype;
var Strawberry = function(strawberry) {
  this.strawberry = [2, "cup", strawberry ? strawberry : "fraises des bois"];
};
Strawberry.prototype = Berry.prototype;
var blueberry = new Blueberry();
var strawberry = new Strawberry();
Blueberry.prototype.cinnamon = [1, "stick", "Saigon"];
console.dir(blueberry);
console.dir(strawberry);

// Figure 5-15

var extend = (function () {
  var Proxy = function () {};
  return function (child, parent) {
    Proxy.prototype = parent.prototype;
    child.prototype = new Proxy();
    child.prototype.constructor = child;
    child.donor = parent.prototype;
  }
}());
var Strawberry = function(strawberry) {
  this.strawberry = [2, "cup", strawberry ? strawberry : "fraises des bois"];
};
Strawberry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [3],
  vanilla: [1, "bean", "Madagascar Bourbon"]
};
var CherryGarcia = function(cherry, bittersweet) {
  this.cherries = [2, "cup, pitted and halved", cherry ? cherry : "Bing"];
  this.bittersweet = [1, "cup, coarsely chopped", bittersweet ? bittersweet : "Callebaut"];
};
extend(CherryGarcia, Strawberry);
CherryGarcia.prototype.sugar = [9/16, "cup"];
var strawberry = new Strawberry();
var cherryGarcia = new CherryGarcia();
console.dir(strawberry);
console.dir(cherryGarcia);

// Figure 5-16

var extend = (function () {
  var Proxy = function () {};
  return function (child, parent) {
    Proxy.prototype = parent.prototype;
    child.prototype = new Proxy();
    child.prototype.constructor = child;
    child.donor = parent.prototype;
  }
}());
var Cherry = function(cherry) {
  this.cherries = [2, "cup, pitted and halved", cherry ? cherry : "Bing"];
};
Cherry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [9/16, "cup"],
  yolks: [3],
  vanilla: [1, "bean", "Madagascar Bourbon"]
};
var CherryGarcia = function(cherry, bittersweet) {
  Cherry.apply(this, [cherry]);
  this.bittersweet = [1, "cup, coarsely chopped", bittersweet ? bittersweet : "Callebaut"];
};
extend(CherryGarcia, Cherry);
var cherry = new Cherry();
var cherryGarcia = new CherryGarcia();
console.dir(cherry);
console.dir(cherryGarcia);

// Figure 5-17

var clone = function (donor) {
  var Proxy = function () {};
  Proxy.prototype = donor;
  return new Proxy();
};
var banana = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [9/16, "cup"],
  yolks: [3],
  banana: [1 + 1/2, "cup, puréed"],
  coconutMilk: [1/4, "cup"],
  lemon: [2, "tsp", "freshly juiced Meyer lemon"],
  vanilla: [1, "bean", "Madagascar Bourbon"]
};
var chunkyMonkey = clone(banana);
chunkyMonkey.walnuts = [3/4, "cup, coarsely chopped"];
chunkyMonkey.bittersweet = [1, "cup, coarsely chopped", "Callebaut"];
console.dir(banana);
console.dir(chunkyMonkey);

// Figure 5-18

var emulate = function (donor, more) {
  var Proxy = function () {}, child, m;
  Proxy.prototype = donor;
  child = new Proxy();
  for (var m in more) {
    child[m] = more[m];
  }
  return child;
};
var chocolate = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6],
  cocoa: [3/8, "cup", "Callebaut, Dutch process"],
  vanilla: [1, "bean", "Madagascar Bourbon"]
};
var newYorkSuperFudgeChunk = emulate(chocolate, {
  pecans: [1/4, "cup, coarsely chopped"],
  walnuts: [1/4, "cup, coarsely chopped"],
  almonds: [1/4, "cup, coarsely chopped"],
  whiteChocolate: [1/3, "cup, coarsely chopped", "Callebaut"],
  bittersweetChocolate: [1/3, "cup, coarsely chopped", "Callebaut"]
});
console.dir(chocolate);
console.dir(newYorkSuperFudgeChunk);

// Figure 5-19

var cloneMembers = function (donor, donee) {
  donee = donee || {};
  for (var m in donor) {
    if (typeof donor[m] === "object" && donor[m] !== null) {
      donee[m] = typeof donor[m].pop === "function" ? [] : {};
      cloneMembers(donor[m], donee[m]);
    } else {
      donee[m] = donor[m];
    }
  }
  return donee;
};
var vanillaHeathBarCrunch = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6],
  heathBars: [4, "bars, coarsely chopped"],
  vanilla: [1, "bean", "Madagascar Bourbon"]
};
var coffeeHeathBarCrunch = cloneMembers(vanillaHeathBarCrunch);
coffeeHeathBarCrunch.coffee = [1/4, "cup, coarsely ground", "Starbucks Espresso"];
console.dir(vanillaHeathBarCrunch);
console.dir(coffeeHeathBarCrunch);

// Figure 5-20

var cloneMembers = function (donor, donee) {
  donee = donee || {};
  for (var m in donor) {
    if (typeof donor[m] === "object" && donor[m] !== null) {
      donee[m] = typeof donor[m].pop === "function" ? [] : {};
      cloneMembers(donor[m], donee[m]);
    } else {
      donee[m] = donor[m];
    }
  }
  return donee;
};
var merge = function (mixins, donee) {
  var i, j, donee = donee || {};
  for (i = 0, j = mixins.length; i < j; i ++) {
    cloneMembers(mixins[i], donee);
  }
  return donee;
};
var french = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var philly = {
  heavyCream: [2, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"]
};
var gelato = {
  halfHalf: [3, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var vanilla = {
  vanilla: [1, "bean", "Madagascar Bourbon"]
};
var heathBar = {
  heathBars: [4, "bars, coarsely chopped"]
};
var coffee = {
  coffee: [1/4, "cup, coarsely ground", "Starbucks Espresso"]
};

var coffeeHeathBarCrunch = merge([gelato, vanilla, coffee, heathBar]);
console.dir(coffeeHeathBarCrunch);
var coffee = merge([philly, vanilla, coffee]);
console.dir(coffee);
var vanillaHeathBarCrunch = merge([french, vanilla, heathBar]);
console.dir(vanillaHeathBarCrunch);
