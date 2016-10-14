// Figure 3-1

var dough = {
  pastryFlour: [1 + 3/4, "cup"],
  almondFlour: [1/3, "cup"],
  saigonCinnamon: [1, "tsp"],
  mincedLemonZest: [2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  pourableVanillaYogurt: [1, "cup"],
  egg: [1],
  wildBlueberries: [1 + 1/4, "cup"]
};
dough.pastryFlour[0] *= 3;
dough.almondFlour[0] *= 3;
dough.saigonCinnamon[0] *= 3;
dough.mincedLemonZest[0] *= 3;
dough.seaSalt[0] *= 3;
dough.soda[0] *= 3;
dough.tartar[0] *= 3;
dough.pourableVanillaYogurt[0] *= 3;
dough.egg[0] *= 3;
dough.wildBlueberries[0] *= 3;
dough.pastryFlour[0];
// 5.25
dough.pourableVanillaYogurt[0];
// 3

// Figure 3-2

var dough = {
  pastryFlour: [1 + 3/4, "cup"],
  almondFlour: [1/3, "cup"],
  saigonCinnamon: [1, "tsp"],
  mincedLemonZest: [2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  pourableVanillaYogurt: [1, "cup"],
  egg: [1],
  wildBlueberries: [1 + 1/4, "cup"]
};
dough.pastryFlour[0] = dough.pastryFlour[0] * 3;
dough.almondFlour[0] = dough.almondFlour[0] * 3;
dough.saigonCinnamon[0] = dough.saigonCinnamon[0] * 3;
dough.mincedLemonZest[0] = dough.mincedLemonZest[0] * 3;
dough.seaSalt[0] = dough.seaSalt[0] * 3;
dough.soda[0] = dough.soda[0] * 3;
dough.tartar[0] = dough.tartar[0] * 3;
dough.pourableVanillaYogurt[0] = dough.pourableVanillaYogurt[0] * 3;
dough.wildBlueberries[0] = dough.wildBlueberries[0] * 3;
dough.pastryFlour[0];
// 5.25
dough.pourableVanillaYogurt[0];
// 3

// Figure 3-3

var dough = {
  pastryFlour: [1 + 3/4, "cup"],
  almondFlour: [1/3, "cup"],
  saigonCinnamon: [1, "tsp"],
  mincedLemonZest: [2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  pourableVanillaYogurt: [1, "cup"],
  egg: [1],
  wildBlueberries: [1 + 1/4, "cup"]
};
dough.pourableVanillaYogurt[0] += "1";
dough.pourableVanillaYogurt[0];
// "11"

// Figure 3-4

var dough = {
  pastryFlour: [1 + 3/4, "cup"],
  almondFlour: [1/3, "cup"],
  saigonCinnamon: [1, "tsp"],
  mincedLemonZest: [2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  pourableVanillaYogurt: [1, "cup"],
  egg: [1],
  wildBlueberries: [1 + 1/4, "cup"]
};
dough.wildBlueberries *= 3;
dough.wildBlueberries;
// NaN

// Figure 3-5

var dough = {
  pastryFlour: [1 + 3/4, "cup"],
  almondFlour: [1/3, "cup"],
  saigonCinnamon: [1, "tsp"],
  mincedLemonZest: [2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  pourableVanillaYogurt: [1, "cup"],
  egg: [1],
  wildBlueberries: [1 + 1/4, "cup"]
};
dough.wildBlueberries *= 3;
"There are " + dough.wildBlueberries[0] + " cups of wild blueberries in the dough.";
// "There are undefined cups of wild blueberries in the dough."

// Figure 3-6

var dough = {
  pastryFlour: [1 + 3/4, "cup"],
  almondFlour: [1/3, "cup"],
  saigonCinnamon: [1, "tsp"],
  mincedLemonZest: [2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  pourableVanillaYogurt: [1, "cup"],
  egg: [1],
  wildBlueberries: [1 + 1/4, "cup"]
};
dough.saigonCinnamon[0] ++;
dough.mincedLemonZest[0] --;
dough.saigonCinnamon[0];
// 2
dough.mincedLemonZest[0];
// 1

// Figure 3-7

var dough = {
  pastryFlour: [1 + 3/4, "cup"],
  almondFlour: [1/3, "cup"],
  saigonCinnamon: [1, "tsp"],
  mincedLemonZest: [2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  pourableVanillaYogurt: [1, "cup"],
  egg: [1],
  wildBlueberries: [1 + 1/4, "cup"]
};
dough.saigonCinnamon[0] ++;
// 1
++ dough.mincedLemonZest[0];
// 3
dough.wildBlueberries[0] --;
// 1.25
-- dough.pastryFlour[0];
// .75
dough.saigonCinnamon[0];
// 2
dough.mincedLemonZest[0];
// 3
dough.wildBlueberries[0];
// .25
dough.pastryFlour[0];
// .75

// Figure 3-8

var dough = {
  pastryFlour: [1 + 2/3, "cup"],
  hazelnutFlour: [1/3, "cup"],
  butter: [3, "tbs"],
  sugar: [2, "tbs"],
  seaSalt: [1/4, "tsp"],
  soda: [1/2, "tsp"],
  tartar: [1, "tsp"],
  heavyWhippingCream: [1, "cup"],
  currants: [1/3, "cup"]
};
dough.heavyWhippingCream[0] === 2/3;
// false
dough.currants[0] === dough.hazelnutFlour[0];
// true
dough.hazelnutFlour[0] * 5 === dough.pastryFlour[0];
// true
dough.soda[0] / dough.tartar[0] === 1;
// false

// Figure 3-9

var dough = {
  pastryFlour: [1 + 2/3, "cup"],
  hazelnutFlour: [1/3, "cup"],
  butter: [3, "tbs"],
  sugar: [2, "tbs"],
  seaSalt: [1/4, "tsp"],
  soda: [1/2, "tsp"],
  tartar: [1, "tsp"],
  heavyWhippingCream: [1, "cup"],
  currants: [1/3, "cup"]
};
! (dough.heavyWhippingCream[0] === 2/3);
// true
! (dough.currants[0] === dough.hazelnutFlour[0]);
// false
! (dough.hazelnutFlour[0] * 5 === dough.pastryFlour[0]);
// false
! (dough.soda[0] / dough.tartar[0] === 1);
// true

// Figure 3-10

var dough = {
  pastryFlour: [1 + 2/3, "cup"],
  hazelnutFlour: [1/3, "cup"],
  butter: [3, "tbs"],
  sugar: [2, "tbs"],
  seaSalt: [1/4, "tsp"],
  soda: [1/2, "tsp"],
  tartar: [1, "tsp"],
  heavyWhippingCream: [1, "cup"],
  currants: [1/3, "cup"]
};
dough.heavyWhippingCream[0] !== 2/3;
// true
dough.currants[0] !== dough.hazelnutFlour[0];
// false
dough.hazelnutFlour[0] * 5 !== dough.pastryFlour[0];
// false
dough.soda[0] / dough.tartar[0] !== 1;
// true

// Figure 3-11

var dough = {
  pastryFlour: [1 + 2/3, "cup"],
  hazelnutFlour: [1/3, "cup"],
  butter: [3, "tbs"],
  sugar: [2, "tbs"],
  seaSalt: [1/4, "tsp"],
  soda: [1/2, "tsp"],
  tartar: [1, "tsp"],
  heavyWhippingCream: [1, "cup"],
  currants: [1/3, "cup"]
};
dough.pastryFlour === [1 + 2/3, "cup"];
// false
dough.currants !== [1/3, "cup"];
// true

// Figure 3-12

var dough = {
  pastryFlour: [1 + 2/3, "cup"],
  hazelnutFlour: [1/3, "cup"],
  butter: [3, "tbs"],
  sugar: [2, "tbs"],
  seaSalt: [1/4, "tsp"],
  soda: [1/2, "tsp"],
  tartar: [1, "tsp"],
  heavyWhippingCream: [1, "cup"],
  currants: [1/3, "cup"]
};
dough === {
  pastryFlour: [1 + 2/3, "cup"],
  hazelnutFlour: [1/3, "cup"],
  butter: [3, "tbs"],
  sugar: [2, "tbs"],
  seaSalt: [1/4, "tsp"],
  soda: [1/2, "tsp"],
  tartar: [1, "tsp"],
  heavyWhippingCream: [1, "cup"],
  currants: [1/3, "cup"]
};
// false
dough === dough;
// true
dough.pastryFlour === [1 + 2/3, "cup"];
// false
dough.pastryFlour === dough.pastryFlour;
// true

// Figure 3-13

var cake = {
  dough: {
    organicPastryFlour: [1 + 1/2, "cup"],
    freshlyGroundNutmeg: [1/4, "tsp"],
    saigonCinnamon: [1/2, "tsp"],
    soda: [1, "tsp"],
    tartar: [1, "tsp"],
    egg: [2],
    yogurtCheese: [2/3, "cup"],
    pureMapleSyrup: [1/3, "cup"],
    shreddedGrannySmith: [1 + 2/3, "cup"],
    choppedPecans: [1/2, "cup"]
  },
  icing: {
    yogurtCheese: [2/3, "cup"],
    pureMapleSyrup: [1 + 1/3, "tbs"],
    groundPecans: [2, "tsp"]
  }
};
cake.dough.organicPastryFlour[0] > cake.dough.shreddedGrannySmith[0];
// false
cake.dough.choppedPecans[0] > cake.dough.pureMapleSyrup[0];
// true
cake.dough.freshlyGroundNutmeg[0] > cake.dough.saigonCinnamon[0];
// false
cake.icing.yogurtCheese[0] > cake.dough.yogurtCheese[0];
// false

// Figure 3-14

var cake = {
  dough: {
    organicPastryFlour: [1 + 1/2, "cup"],
    freshlyGroundNutmeg: [1/4, "tsp"],
    saigonCinnamon: [1/2, "tsp"],
    soda: [1, "tsp"],
    tartar: [1, "tsp"],
    egg: [2],
    yogurtCheese: [2/3, "cup"],
    pureMapleSyrup: [1/3, "cup"],
    shreddedGrannySmith: [1 + 2/3, "cup"],
    choppedPecans: [1/2, "cup"]
  },
  icing: {
    yogurtCheese: [2/3, "cup"],
    pureMapleSyrup: [1 + 1/3, "tbs"],
    groundPecans: [2, "tsp"]
  }
};
cake.dough.organicPastryFlour[0] < cake.dough.shreddedGrannySmith[0];
// true
cake.dough.choppedPecans[0] < cake.dough.pureMapleSyrup[0];
// false
cake.dough.freshlyGroundNutmeg[0] < cake.dough.saigonCinnamon[0];
// true
cake.icing.yogurtCheese[0] < cake.dough.yogurtCheese[0];
// false

// Figure 3-15

var cake = {
  dough: {
    organicPastryFlour: [1 + 1/2, "cup"],
    freshlyGroundNutmeg: [1/4, "tsp"],
    saigonCinnamon: [1/2, "tsp"],
    soda: [1, "tsp"],
    tartar: [1, "tsp"],
    egg: [2],
    yogurtCheese: [2/3, "cup"],
    pureMapleSyrup: [1/3, "cup"],
    shreddedGrannySmith: [1 + 2/3, "cup"],
    choppedPecans: [1/2, "cup"]
  },
  icing: {
    yogurtCheese: [2/3, "cup"],
    pureMapleSyrup: [1 + 1/3, "tbs"],
    groundPecans: [2, "tsp"]
  }
};
! (cake.icing.yogurtCheese[0] > cake.dough.yogurtCheese[0]);
// true
! (cake.icing.yogurtCheese[0] < cake.dough.yogurtCheese[0]);
// true

// Figure 3-16

var cake = {
  dough: {
    organicPastryFlour: [1 + 1/2, "cup"],
    freshlyGroundNutmeg: [1/4, "tsp"],
    saigonCinnamon: [1/2, "tsp"],
    soda: [1, "tsp"],
    tartar: [1, "tsp"],
    egg: [2],
    yogurtCheese: [2/3, "cup"],
    pureMapleSyrup: [1/3, "cup"],
    shreddedGrannySmith: [1 + 2/3, "cup"],
    choppedPecans: [1/2, "cup"]
  },
  icing: {
    yogurtCheese: [2/3, "cup"],
    pureMapleSyrup: [1 + 1/3, "tbs"],
    groundPecans: [2, "tsp"]
  }
};
cake.icing.yogurtCheese[0] <= cake.dough.yogurtCheese[0];
// true
cake.icing.yogurtCheese[0] >= cake.dough.yogurtCheese[0];
// true
cake.dough.organicPastryFlour[0] <= cake.dough.shreddedGrannySmith[0];
// true
cake.dough.choppedPecans[0] >= cake.dough.pureMapleSyrup[0];
// true

// Figure 3-17

var muffin = {
  oatFlour: [1/3, "cup"],
  barleyFlour: [1/3, "cup"],
  pastryFlour: [1 + 1/3, "cup"],
  freshlyGroundNutmeg: [1/4, "tsp"],
  saigonCinnamon: [1/2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  mapleBrownCow: [1 + 1/2, "cup"],
  boysenberries: [2, "cup"],
  choppedPecans: [1/3, "cup"]
};
muffin.mapleBrownCow[0] > muffin.boysenberries[0] ||
  muffin.oatFlour[0] === muffin.barleyFlour[0];
// true
muffin.oatFlour[0] === muffin.barleyFlour[0] ||
  muffin.mapleBrownCow[0] > muffin.boysenberries[0];
// true
muffin.boysenberries[0] > muffin.choppedPecans[0] ||
  muffin.pastryFlour[0] > muffin.barleyFlour[0];
// true
muffin.boysenberries[0] < muffin.choppedPecans[0] ||
  muffin.pastryFlour[0] < muffin.barleyFlour[0];
// false

// Figure 3-18

var muffin = {
  oatFlour: [1/3, "cup"],
  barleyFlour: [1/3, "cup"],
  pastryFlour: [1 + 1/3, "cup"],
  freshlyGroundNutmeg: [1/4, "tsp"],
  saigonCinnamon: [1/2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  mapleBrownCow: [1 + 1/2, "cup"],
  boysenberries: [2, "cup"],
  choppedPecans: [1/3, "cup"]
};
muffin.mapleBrownCow[0] > muffin.boysenberries[0] &&
  muffin.oatFlour[0] === muffin.barleyFlour[0];
// false
muffin.oatFlour[0] === muffin.barleyFlour[0] &&
  muffin.mapleBrownCow[0] > muffin.boysenberries[0];
// false
muffin.boysenberries[0] > muffin.choppedPecans[0] &&
  muffin.pastryFlour[0] > muffin.barleyFlour[0];
// true
muffin.boysenberries[0] < muffin.choppedPecans[0] &&
  muffin.pastryFlour[0] < muffin.barleyFlour[0];
// false

// Figure 3-19

var muffin = {
  oatFlour: [1/3, "cup"],
  barleyFlour: [1/3, "cup"],
  pastryFlour: [1 + 1/3, "cup"],
  freshlyGroundNutmeg: [1/4, "tsp"],
  saigonCinnamon: [1/2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  mapleBrownCow: [1 + 1/2, "cup"],
  boysenberries: [2, "cup"],
  choppedPecans: [1/3, "cup"]
};
muffin.mapleBrownCow[0] > muffin.boysenberries[0] ||
  muffin.oatFlour[0] !== muffin.barleyFlour[0] ||
  muffin.pastryFlour[0] < muffin.barleyFlour[0];
// true

// Figure 3-20

var muffin = {
  oatFlour: [1/3, "cup"],
  barleyFlour: [1/3, "cup"],
  pastryFlour: [1 + 1/3, "cup"],
  freshlyGroundNutmeg: [1/4, "tsp"],
  saigonCinnamon: [1/2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  mapleBrownCow: [1 + 1/2, "cup"],
  boysenberries: [2, "cup"],
  choppedPecans: [1/3, "cup"]
};
muffin.mapleBrownCow[0] > muffin.boysenberries[0] ||
  muffin.oatFlour[0] !== muffin.barleyFlour[0] ||
  muffin.freshlyGroundNutmeg[0] >= muffin.saigonCinnamon[0] ||
  muffin.choppedPecans[0] <= muffin.mapleBrownCow[0] ||
  muffin.pastryFlour[0] === muffin.barleyFlour[0];
// true

// Figure 3-21

var muffin = {
  oatFlour: [1/3, "cup"],
  barleyFlour: [1/3, "cup"],
  pastryFlour: [1 + 1/3, "cup"],
  freshlyGroundNutmeg: [1/4, "tsp"],
  saigonCinnamon: [1/2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  mapleBrownCow: [1 + 1/2, "cup"],
  boysenberries: [2, "cup"],
  choppedPecans: [1/3, "cup"]
};
muffin.mapleBrownCow[0] < muffin.boysenberries[0] &&
  muffin.oatFlour[0] === muffin.barleyFlour[0] &&
  muffin.freshlyGroundNutmeg[0] >= muffin.saigonCinnamon[0] &&
  muffin.choppedPecans[0] <= muffin.mapleBrownCow[0] &&
  muffin.pastryFlour[0] > muffin.barleyFlour[0];
// false

// Figure 3-22

var muffin = {
  oatFlour: [1/3, "cup"],
  barleyFlour: [1/3, "cup"],
  pastryFlour: [1 + 1/3, "cup"],
  freshlyGroundNutmeg: [1/4, "tsp"],
  saigonCinnamon: [1/2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  mapleBrownCow: [1 + 1/2, "cup"],
  boysenberries: [2, "cup"],
  choppedPecans: [1/3, "cup"]
};
muffin.mapleBrownCow[0] < muffin.boysenberries[0] &&
  muffin.oatFlour[0] === muffin.barleyFlour[0] &&
  muffin.freshlyGroundNutmeg[0] < muffin.saigonCinnamon[0] &&
  muffin.choppedPecans[0] <= muffin.mapleBrownCow[0] &&
  muffin.pastryFlour[0] > muffin.barleyFlour[0];
// true

// Figure 3-23

var muffin = {
  oatFlour: [1/3, "cup"],
  barleyFlour: [1/3, "cup"],
  pastryFlour: [1 + 1/3, "cup"],
  freshlyGroundNutmeg: [1/4, "tsp"],
  saigonCinnamon: [1/2, "tsp"],
  seaSalt: [1/4, "tsp"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  mapleBrownCow: [1 + 1/2, "cup"],
  boysenberries: [2, "cup"],
  choppedPecans: [1/3, "cup"]
};
muffin.mapleBrownCow[0] < muffin.boysenberries[0] &&
  muffin.oatFlour[0] === muffin.barleyFlour[0] ||
  muffin.freshlyGroundNutmeg[0] < muffin.saigonCinnamon[0] &&
  muffin.choppedPecans[0] <= muffin.mapleBrownCow[0] ||
  muffin.pastryFlour[0] < muffin.barleyFlour[0];
// true
false || true ||  muffin.pastryFlour[0]< muffin.barleyFlour[0];
// true

// Figure 3-24

var fridge = {
  buttermilk: [1/3, "cup"],
  kefir: [1 + 1/2, "cup"],
  yogurt: [4, "cup"],
};
var dough = {
  hardWhiteWholeWheatFlour: [2, "cup"],
  sugar: [1/3, "cup"],
  madagascarVanilla: [1, "tsp"],
  orangeZest: [1, "tbs"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  orangeJuice: [1/2, "cup"],
  culturedMilk: [1/2, "cup"],
  egg: [1],
  cranberries: [2/3, "cup"]
};
dough.culturedMilk[0] = fridge.buttermilk[0] < 1/2 && fridge.kefir[0] >= 9/16 ? 9/16 :
  fridge.yogurt[0] >= 10/16 ? 10/16 :
  alert("No cranberry bread for you!");
dough.culturedMilk;
// [0.5625, "cup"]

// Figure 3-25

var fridge = {
  buttermilk: [1/3, "cup"],
  kefir: [1 + 1/2, "cup"],
  yogurt: [4, "cup"],
};
var dough = {
  hardWhiteWholeWheatFlour: [2, "cup"],
  sugar: [1/3, "cup"],
  madagascarVanilla: [1, "tsp"],
  orangeZest: [1, "tbs"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  orangeJuice: [1/2, "cup"],
  culturedMilk: [1/2, "cup"],
  egg: [1],
  cranberries: [2/3, "cup"]
};
dough.culturedMilk[0] = fridge.buttermilk[0] >= 1/2 ? (fridge.buttermilk[0] -= 1/2, 1/2) :
  fridge.kefir[0] >= 9/16 ? (fridge.kefir[0] -= 9/16, 9/16) :
  fridge.yogurt[0] >= 10/16 ? (fridge.yogurt[0] -= 10/16, 10/16) :
  alert("No cranberry bread for you!");
dough.culturedMilk;
// [0.5625, "cup"]
fridge.kefir;
// [0.9375, "cup"]

// Figure 3-26

var dough = {
  hardWhiteWholeWheatFlour: [2, "cup"],
  sugar: [1/3, "cup"],
  madagascarVanilla: [1, "tsp"],
  orangeZest: [1, "tbs"],
  soda: [1, "tsp"],
  tartar: [1, "tsp"],
  orangeJuice: [1/2, "cup"],
  culturedMilk: [1/2, "cup"],
  egg: [1],
  cranberries: [2/3, "cup"]
};
delete dough.culturedMilk, dough.orangeJuice[0] *= 2, dough.orangeJuice;
// [1, "cup"]
typeof dough.culturedMilk;
// "undefined"
"culturedMilk" in dough;
// false
"orangeJuice" in dough;
// true
