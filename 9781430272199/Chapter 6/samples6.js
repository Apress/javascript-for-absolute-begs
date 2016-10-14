// Figure 6-1

if (Object.defineProperty === undefined) {
  Object.defineProperty = function (obj, name, descriptor) {
    obj[name] = descriptor.value;
  };
}
if (Object.defineProperties === undefined) {
  Object.defineProperties = function (obj, descriptors) {
      for (descriptor in descriptors) {
        if (descriptors.hasOwnProperty(descriptor)) {
          obj[descriptor] = descriptors[descriptor].value;
        }
      }
  };
}
if (Object.create === undefined) {
  Object.create = function (parent, descriptors) {
    var Proxy = function () {},
      child;
    Proxy.prototype = parent;
    child = new Proxy();
    if (descriptors !== undefined) {
      Object.defineProperties(child, descriptors);
    }
    return child;
  };
}
console.log(Object.defineProperty.toString());
console.log(Object.defineProperties.toString());
console.log(Object.create.toString());

// Figure 6-2

if (Object.defineProperty === undefined) {
  Object.defineProperty = function (obj, name, descriptor) {
    obj[name] = descriptor.value;
  };
}
if (Object.defineProperties === undefined) {
  Object.defineProperties = function (obj, descriptors) {
      for (descriptor in descriptors) {
        if (descriptors.hasOwnProperty(descriptor)) {
          obj[descriptor] = descriptors[descriptor].value;
        }
      }
  };
}
if (Object.create === undefined) {
  Object.create = function (parent, descriptors) {
    var Proxy = function () {},
      child;
    Proxy.prototype = parent;
    child = new Proxy();
    if (descriptors !== undefined) {
      Object.defineProperties(child, descriptors);
    }
    return child;
  };
}
var extend = function (child, parent, descriptors) {
  child.prototype = Object.create(parent.prototype, descriptors);
  Object.defineProperty(child.prototype, "constructor", {
    value: child,
    writable: true
   });
  if (! parent.prototype.hasOwnProperty("constructor")) {
    Object.defineProperty(parent.prototype, "constructor", {
      value: parent,
      writable: true
     });
  }
  Object.defineProperty(child, "superclass", {
    value: parent.prototype,
    writable: true,
    configurable: true
   });
};

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
extend(CherryGarcia, Strawberry, {
    sugar: {
      value: [9/16, "cup"],
      writable: true,
      enumerable: true,
      configurable: true
    }});
var strawberry = new Strawberry();
var cherryGarcia = new CherryGarcia();
console.dir(strawberry);
console.dir(cherryGarcia);

// Figure 6-3

var clone = function (donor) {
  if (Object.create !== undefined) {
    clone = function (donor) {
      return Object.create(donor);
    };
  } else {
    clone = function (donor) {
      var Proxy = function () {};
      Proxy.prototype = donor;
      return new Proxy();
    };
  }
  return clone(donor);
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
chunkyMonkey.bittersweet = [1, "cup, coarsely grated", "Callebaut"];
console.dir(banana);
console.dir(chunkyMonkey);

// Figure 6-4

var cloneMembers = function cloneMembers (donor, donee) {
  donee = donee || {};
  for (var m in donor) {
    if (donor.hasOwnProperty(m)) {
      if (typeof donor[m] === "object" && donor[m] !== null) {
        donee[m] = typeof donor[m].pop === "function" ? [] : {};
      } else {
        donee[m] = donor[m];
      }
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

coffeeHeathBarCrunch.heavyCream = cloneMembers(vanillaHeathBarCrunch.heavyCream, 
  coffeeHeathBarCrunch.heavyCream);
coffeeHeathBarCrunch.halfHalf = cloneMembers(vanillaHeathBarCrunch.halfHalf, 
  coffeeHeathBarCrunch.halfHalf);
coffeeHeathBarCrunch.sugar = cloneMembers(vanillaHeathBarCrunch.sugar, 
  coffeeHeathBarCrunch.sugar);
coffeeHeathBarCrunch.yolks = cloneMembers(vanillaHeathBarCrunch.yolks, 
  coffeeHeathBarCrunch.yolks);
coffeeHeathBarCrunch.heathBars = cloneMembers(vanillaHeathBarCrunch.heathBars, 
  coffeeHeathBarCrunch.heathBars);
coffeeHeathBarCrunch.vanilla = cloneMembers(vanillaHeathBarCrunch.vanilla, 
  coffeeHeathBarCrunch.vanilla);
coffeeHeathBarCrunch.heavyCream = cloneMembers(vanillaHeathBarCrunch.heavyCream, 
  coffeeHeathBarCrunch.heavyCream);
coffeeHeathBarCrunch.coffee = [1/4, "cup, coarsely ground", "Starbucks Espresso"];
console.dir(vanillaHeathBarCrunch);
console.dir(coffeeHeathBarCrunch);

// Figure 6-5

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
wildMaineBlueberry.toString();
// "[object Object]"

// Figure 6-6

var WildMaineBlueberry = function(blueberries, vanilla) {
  this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
};
WildMaineBlueberry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6],
  freshLemonJuice: [2, "tsp"],
  toString: function () { return "[object WildMaineBlueberry]";}
};
var wildMaineBlueberry = new WildMaineBlueberry("Dole frozen wild blueberries", "Tahitian");
wildMaineBlueberry.toString();
// "[object WildMaineBlueberry]"

// Figure 6-7

var WildMaineBlueberry = function(blueberries, vanilla) {
  this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
};
WildMaineBlueberry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6],
  freshLemonJuice: [2, "tsp"],
  toString: function () { return "[object WildMaineBlueberry]";}
};
var wildMaineBlueberry = new WildMaineBlueberry("Dole frozen wild blueberries", "Tahitian");
wildMaineBlueberry.heavyCream.toString();
// "1,cup,Organic Valley"
WildMaineBlueberry.toString();
// "function (blueberries, vanilla) { this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"]; this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"]; }"

// Figure 6-8

var WildMaineBlueberry = function(blueberries, vanilla) {
  this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
};
WildMaineBlueberry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6],
  freshLemonJuice: [2, "tsp"],
  toString: function () { return "[object WildMaineBlueberry]";}
};
var wildMaineBlueberry = new WildMaineBlueberry("Dole frozen wild blueberries", "Tahitian");

Object.prototype.toString.apply(wildMaineBlueberry.halfHalf);
// "[object Array]"
Object.prototype.toString.call(wildMaineBlueberry.freshLemonJuice);
// "[object Array]"
({}).toString.apply(wildMaineBlueberry.blueberries);
// "[object Array]"
({}).toString.call(wildMaineBlueberry.vanilla);
// "[object Array]"

// Figure 6-9

if (Array.isArray === undefined) {
  Array.isArray = function(v) {
    return {}.toString.apply(v) === "[object Array]";
  };
}
var WildMaineBlueberry = function(blueberries, vanilla) {
  this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
};
WildMaineBlueberry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6],
  freshLemonJuice: [2, "tsp"],
  toString: function () { return "[object WildMaineBlueberry]";}
};
var wildMaineBlueberry = new WildMaineBlueberry("Dole frozen wild blueberries", "Tahitian");

Array.isArray(wildMaineBlueberry.halfHalf);
// true
Array.isArray(wildMaineBlueberry.halfHalf[2]);
// false

// Figure 6-10

if (Array.isArray === undefined) {
  Array.isArray = function(v) {
    return {}.toString.apply(v) === "[object Array]";
  };
}
var cloneMembers = function (donor, donee) {
  donee = donee || {};
  for (var m in donor) {
    if (donor.hasOwnProperty(m)) {
      if (typeof donor[m] === "object" && donor[m] !== null) {
        donee[m] = Array.isArray(donor[m]) ? [] : {};
        cloneMembers(donor[m], donee[m]);
      } else {
        donee[m] = donor[m];
      }
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

// Figure 6-11

if (Object.defineProperties === undefined) {
  Object.defineProperties = function (obj, descriptors) {
      for (descriptor in descriptors) {
        if (descriptors.hasOwnProperty(descriptor)) {
          obj[descriptor] = descriptors[descriptor].value;
        }
      }
  };
}
if (Object.create === undefined) {
  Object.create = function (parent, descriptors) {
    var Proxy = function () {},
      child;
    Proxy.prototype = parent;
    child = new Proxy();
    if (descriptors !== undefined) {
      Object.defineProperties(child, descriptors);
    }
    return child;
  };
}
Function.prototype.bind = Function.prototype.bind ||
  function (obj) {
    var that = this,
      ossify = [].slice.call(arguments, 1),
      fn = function () {
        return that.apply(this instanceof that ? this : obj, ossify.concat([].slice.call(arguments, 0)));
      };
      fn.prototype = Object.create(that.prototype);
      return fn;
  };

var WildMaineBlueberry = function(blueberries, lemon, vanilla) {
  this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
  this.freshLemonJuice = [2, "tsp", lemon ? lemon : "Meyer"];
  this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
};
WildMaineBlueberry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var WinterWildMaineBlueberry = WildMaineBlueberry.bind(null, "Dole frozen wild blueberries", "Eureka");
var iceCream = new WinterWildMaineBlueberry("Tahitian");
console.dir(iceCream);

// Figure 6-12

if (Object.defineProperties === undefined) {
  Object.defineProperties = function (obj, descriptors) {
      for (descriptor in descriptors) {
        if (descriptors.hasOwnProperty(descriptor)) {
          obj[descriptor] = descriptors[descriptor].value;
        }
      }
  };
}
if (Object.create === undefined) {
  Object.create = function (parent, descriptors) {
    var Proxy = function () {},
      child;
    Proxy.prototype = parent;
    child = new Proxy();
    if (descriptors !== undefined) {
      Object.defineProperties(child, descriptors);
    }
    return child;
  };
}
var churn = {};
churn._french = function (heavyCream, halfHalf, sugar, yolks) {
  this.heavyCream = [1, "cup", heavyCream || "Organic Valley"],
  this.halfHalf = [1, "cup", halfHalf || "Organic Valley"],
  this.sugar = [sugar || 5/8, "cup"],
  this.yolks = [yolks || 6]
};
churn._vanilla = function (vanilla) {
  this.vanilla = [1, "bean", vanilla || "Madagascar Bourbon"];
};
churn._coffee = function (coffee) {
  this.coffee = [1/4, "cup, coarsely ground", coffee || "Starbucks Espresso"];
};
churn._print = function () {
  var copy = {};
  for (var m in this) {
    this.hasOwnProperty(m) && (copy[m] = this[m]);
  }
  console.dir(copy);
};
var iceCream = Object.create(churn);
iceCream._french();
iceCream._vanilla();
iceCream._coffee();
iceCream._print();

// Figure 6-13

var clone = typeof Object.create === "function" ?
  Object.create :
  function (donor) {
    var Proxy = function () {};
    Proxy.prototype = donor;
    return new Proxy();
  };
var churn = {};
churn._vanilla = function (vanilla) {
  this.vanilla = [1, "bean", vanilla || "Madagascar Bourbon"];
  return this;
};
churn._coffee = function (coffee) {
  this.coffee = [1/4, "cup, coarsely ground", coffee || "Starbucks Espresso"];
  return this;
};
churn._french = function (heavyCream, halfHalf, sugar, yolks) {
  this.heavyCream = [1, "cup", heavyCream || "Organic Valley"],
  this.halfHalf = [1, "cup", halfHalf || "Organic Valley"],
  this.sugar = [sugar || 5/8, "cup"],
  this.yolks = [yolks || 6]
  return this;
};
churn._coffee = function (coffee) {
  this.coffee = [1/4, "cup, coarsely ground", coffee || "Starbucks Espresso"];
  return this;
};
churn._print = function () {
  var copy = {};
  for (var m in this) {
    this.hasOwnProperty(m) && (copy[m] = this[m]);
  }
  console.dir(copy);
};
var iceCream = clone(churn);
iceCream._french()._vanilla()._coffee()._print();

// Figure 6-14

var ChocolateChocolate = function () {
  var _bittersweet = "Ghirardelli",
    _cocoa = "Callebaut",
    _vanilla = "Madagascar Bourbon";
  return function (bittersweet, cocoa, vanilla) {
    this.bittersweet = [1, "cup", bittersweet || _bittersweet];
    this.cocoa = [3, "tbs", cocoa || _cocoa];
    this.vanilla = [1, "bean", vanilla || _vanilla];
  };
}();
ChocolateChocolate.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var chocolateChocolate = new ChocolateChocolate("Lindt");
console.dir(chocolateChocolate);
ChocolateChocolate.toString();

// Figure 6-15

var ChocolateChocolate = function (_bittersweet, _cocoa, _vanilla) {
  return function (bittersweet, cocoa, vanilla) {
    this.bittersweet = [1, "cup", bittersweet || _bittersweet];
    this.cocoa = [3, "tbs", cocoa || _cocoa];
    this.vanilla = [1, "bean", vanilla || _vanilla];
  };
}("Ghirardelli", "Callebaut", "Madagascar Bourbon");
ChocolateChocolate.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var chocolateChocolate = new ChocolateChocolate("Lindt");
console.dir(chocolateChocolate);
ChocolateChocolate.toString();

// Figure 6-16

var ChocolateChocolate = null;
(function (_bittersweet, _cocoa, _vanilla) {
  ChocolateChocolate = function (bittersweet, cocoa, vanilla) {
    this.bittersweet = [1, "cup", bittersweet || _bittersweet];
    this.cocoa = [3, "tbs", cocoa || _cocoa];
    this.vanilla = [1, "bean", vanilla || _vanilla];
  };
}("Ghirardelli", "Callebaut", "Madagascar Bourbon"));
ChocolateChocolate.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var chocolateChocolate = new ChocolateChocolate("Lindt");
console.dir(chocolateChocolate);
ChocolateChocolate.toString();

// Figure 6-17

var ChocolateChocolate = null;
(function () {
  var _bittersweet = "Ghirardelli",
    _cocoa = "Callebaut",
    _vanilla = "Madagascar Bourbon";
  ChocolateChocolate = function (bittersweet, cocoa, vanilla) {
    this.bittersweet = [1, "cup", bittersweet || _bittersweet];
    this.cocoa = [3, "tbs", cocoa || _cocoa];
    this.vanilla = [1, "bean", vanilla || _vanilla];
  };
}());
ChocolateChocolate.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var chocolateChocolate = new ChocolateChocolate("Lindt");
console.dir(chocolateChocolate);
ChocolateChocolate.toString();

// Figure 6-18

var ChocolateChocolate = null;
(function (_bittersweet, _cocoa, _vanilla) {
  ChocolateChocolate = function (bittersweet, cocoa, vanilla) {
    this.bittersweet = [1, "cup", bittersweet || _bittersweet];
    this.cocoa = [3, "tbs", cocoa || _cocoa];
    this.vanilla = [1, "bean", vanilla || _vanilla];
  };
})("Ghirardelli", "Callebaut", "Madagascar Bourbon");
ChocolateChocolate.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var chocolateChocolate = new ChocolateChocolate("Lindt");
console.dir(chocolateChocolate);
ChocolateChocolate.toString();

// Figure 6-19

var ChocolateChocolate = function () {
  var _bittersweet = "Ghirardelli",
    _cocoa = "Callebaut",
    _vanilla = "Madagascar Bourbon";
  return function (pref) {
    pref || (pref = {});
    this.bittersweet = [1, "cup", pref.bittersweet || _bittersweet];
    this.cocoa = [3, "tbs", pref.cocoa || _cocoa];
    this.vanilla = [1, "bean", pref.vanilla || _vanilla];
  };
}();
ChocolateChocolate.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var chocolateChocolate = new ChocolateChocolate({vanilla: "Tahitian"});
console.dir(chocolateChocolate);

// Figure 6-20

var clone = typeof Object.create === "function" ?
  function (donor) {
    return typeof donor !== "function" ?
      Object.create(donor) :
      Object.create(new donor());
  } :
  function (donor) {
    var Proxy = function () {};
    Proxy.prototype = typeof donor !== "function" ?
      donor :
      new donor();
    return new Proxy();
  };
      
var SweetCream = function () {};
SweetCream.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var sweetCream = clone(SweetCream);
console.dir(sweetCream);
var sweetCream2 = clone(SweetCream.prototype);
console.dir(sweetCream2);

// Figure 6-21

var ChocolateChocolate = function () {
  var memo = {};
  return function (bittersweet, cocoa, vanilla) {
    var m = bittersweet + "_" + cocoa + "_" + vanilla;
    if (typeof memo[m] === "object") {
      return memo[m];
    }
    this.bittersweet = [1, "cup", bittersweet || "Callebaut"];
    this.cocoa = [3, "tbs", cocoa || "Callebaut"];
    this.vanilla = [1, "bean", vanilla || "Madagascar Bourbon"];
    memo[m] = this;
    console.dir(memo);
  };
}();
ChocolateChocolate.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
var chocolateChocolate = new ChocolateChocolate("Lindt");
console.dir(chocolateChocolate);
var chocolateChocolate2 = new ChocolateChocolate("Lindt");
console.dir(chocolateChocolate);
chocolateChocolate === chocolateChocolate2;

// Figure 6-22

(function () {
var clone = typeof Object.create === "function" ?
  function (donor) {
    return typeof donor !== "function" ?
      Object.create(donor) :
      Object.create(new donor());
  } :
  function (donor) {
    var Proxy = function () {};
    Proxy.prototype = typeof donor !== "function" ?
      donor :
      new donor();
    return new Proxy();
  };
      
var SweetCream = function () {};
SweetCream.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
console.dir(clone(SweetCream));
}());

// Figure 6-23

(function () {
var clone = typeof Object.create === "function" ?
  function (donor) {
    return typeof donor !== "function" ?
      Object.create(donor) :
      Object.create(new donor());
  } :
  function (donor) {
    var Proxy = function () {};
    Proxy.prototype = typeof donor !== "function" ?
      donor :
      new donor();
    return new Proxy();
  };
      
var SweetCream = function () {};
SweetCream.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};
}());
console.dir(clone(SweetCream));

// Figure 6-24

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
console.dir(pirates.shift());

// Figure 6-25

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
pirates.shift(),
  pirates.shift(),
  pirates.shift(),
  console.dir(pirates);

// Figure 6-26

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
console.dir(pirates.pop()),
  console.dir(pirates.pop()),
  console.dir(pirates.pop());

// Figure 6-27

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
pirates.pop(),
  pirates.pop(),
  pirates.pop(),
  console.dir(pirates);

// Figure 6-28

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
pirates.unshift([2011, 72, 90]),
console.dir(pirates);

// Figure 6-29

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
pirates.push([1992, 96, 66]),
  pirates.push([1991, 98, 64]),
  pirates.push([1990, 95, 67]);
console.dir(pirates);

// Figure 6-30

var pirates1 = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89]];
var pirates2 = [[2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
var pirates = pirates1.concat(pirates2);
console.dir(pirates[0]);
console.dir(pirates[pirates.length - 1]);

// Figure 6-31

var pirates1 = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89]];
var pirates2 = [[2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
var pirates = pirates1.concat(pirates2);
console.dir(pirates1[pirates.length - 1]);
console.dir(pirates2[0]);

// Figure 6-32

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
console.dir(pirates[0]);
pirates.reverse();
console.dir(pirates[0]);

// Figure 6-33

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
var sortByLosses = function (e1, e2) {
  if (e1[2] === e2[2]) {
    return e1[0] > e2[0] ? -1 : 1;
  } else {
    return e1[2] > e2[2] ? -1 : 1;
  }
};
console.dir(pirates.sort(sortByLosses));

// Figure 6-34

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
var sortByWins = function (e1, e2) {
  if (e1[1] === e2[1]) {
    return e1[0] > e2[0] ? -1 : 1;
  } else {
    return e1[1] > e2[1] ? -1 : 1;
  }
};
console.dir(pirates.sort(sortByWins));

// Figure 6-35

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
pirates.join("\n");

// Figure 6-36

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
console.dir(pirates.slice(0, 5));
pirates.length;
// 18

// Figure 6-37

var argumentsToArray = function () {
  return Array.prototype.slice.call(arguments);
};
var pirates = argumentsToArray([2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]);
console.dir(pirates);

// Figure 6-38

var argumentsToArray = function () {
  return [].slice.call(arguments);
}
var pirates = argumentsToArray([2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]);
console.dir(pirates);

// Figure 6-39

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 89, 72],
  [2002, 89, 72],
  [2001, 100, 62],
  [2000, 93, 69],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
pirates.splice(8, 4, [2002, 72, 89], [2001, 62, 100], [2000, 69, 93]);
console.dir(pirates);

// Figure 6-40

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87]];
pirates.splice(8, 0, [2002, 72, 89], [2001, 62, 100], [2000, 69, 93]);
console.dir(pirates);

// Figure 6-41

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87],
  [1992, 96, 66],
  [1991, 98, 64],
  [1990, 95, 67]];
pirates.splice(18, 3);
console.dir(pirates);

// Figure 6-42

var pirates = [[2010, 57, 105],
  [2009, 62, 99],
  [2008, 67, 95],
  [2007, 68, 94],
  [2006, 67, 95],
  [2005, 67, 95],
  [2004, 72, 89],
  [2003, 75, 87],
  [2002, 72, 89],
  [2001, 62, 100],
  [2000, 69, 93],
  [1999, 78, 83],
  [1998, 69, 93],
  [1997, 79, 83],
  [1996, 73, 89],
  [1995, 58, 86],
  [1994, 53, 61],
  [1993, 75, 87],
  [1992, 96, 66],
  [1991, 98, 64],
  [1990, 95, 67]];
pirates.splice(18);
console.dir(pirates);

// Figure 6-3


// Figure 6-3


// Figure 6-3


// Figure 6-3


// Figure 6-3


