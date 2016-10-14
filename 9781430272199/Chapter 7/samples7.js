// Figure 7-1

document.body.nodeName;
// "BODY"
document.documentElement.nodeName;
// "HTML"
var yogurt = "Brown Cow";
document.defaultView.yogurt;
// "Brown Cow"
window.yogurt;
// "Brown Cow"
yogurt = "Stonyfield";
document.defaultView.yogurt;
// "Stonyfield"

// Figure 7-2

document.
  childNodes[1].
  childNodes[1].
  childNodes[1].
  childNodes[3].
  childNodes[5].
  childNodes[0].
  childNodes[0].
  nodeValue;
// "Flickr"

// Figure 7-3

document.
  childNodes[1].
  childNodes[1].
  childNodes[1].
  childNodes[3].
  childNodes[7].
  childNodes[0].
  childNodes[0].
  data = "Linked In";
document.
  childNodes[1].
  childNodes[1].
  childNodes[1].
  childNodes[3].
  childNodes[7].
  childNodes[0].
  childNodes[0].
  nodeValue;
// "Linked In";

// Figure 7-5

var myText = document.
  childNodes[1].
  childNodes[1].
  childNodes[1].
  childNodes[3].
  childNodes[5].
  childNodes[0].
  childNodes[0];
myText.parentNode.
  parentNode.
  parentNode.
  parentNode.
  parentNode.
  parentNode;
// <html xmlns="http://www.w3.org/1999/xhtml">

// Figure 7-6

var myLI = document.
  childNodes[1].
  childNodes[1].
  childNodes[1].
  childNodes[3].
  childNodes[1];
myLI.nextSibling.
  nextSibling.
  nextSibling.
  nextSibling.
  nextSibling.
  nextSibling;
// <li id="linkedin" class="sprite">

// Figure 7-7

var myUL = document.
  childNodes[1].
  childNodes[1].
  childNodes[1].
  childNodes[3];
myUL.lastChild.previousSibling;
// <li id="linkedin" class="sprite">
var myUL = document.
  childNodes[1].
  childNodes[1].
  childNodes[1].
  childNodes[3];
myUL.firstChild.nextSibling;
// <li id="twitter" class="sprite">

// Figure 7-8

var myArray = document.
  childNodes[1].
  childNodes[1].
  childNodes[1].
  childNodes[3].
  childNodes;
myArray = Array.prototype.slice.call(myArray, 0);
var i = 0;
while (i < myArray.length) {
  if (myArray[i].nodeType !== 1) {
    myArray.splice(i, 1);
    continue;
  }
  i ++;
}
myArray;
// [li#twitter.sprite, li#facebook.sprite, li#flickr.sprite, li#linkedin.sprite]
myArray.length;
// 4
var myUL = document.
  childNodes[1].
  childNodes[1].
  childNodes[1].
  childNodes[3];
myUL.childNodes.length;
// 9

// Figure 7-9

 var myArray, i, j, myNodeList = document.
  childNodes[1].
  childNodes[1].
  childNodes[1].
  childNodes[3].
  childNodes;
try {
  myArray = Array.prototype.slice.call(myNodeList, 0);
} catch (errorObject) {
  myArray = [];
  for (i = 0, j = myNodeList.length; i < j; i += 1) {
    myArray[i] = myNodeList[i];
  }
}
myArray instanceof Array;
// true

// Figure 7-10

function traverseTree(node, func) {
  func(node);
  node = node.firstChild;
  while (node !== null) {
    arguments.callee(node, func);
    node = node.nextSibling;
  }
}
var root = document.
  childNodes[1].
  childNodes[1].
  childNodes[1].
  childNodes[3];
traverseTree(root, function(node) {
  if (node.nodeType === 3) {
    node.data = node.data.toLowerCase();
  }
});

// Figure 7-11

var myLI = null;
myLI = document.getElementById("facebook");
// <li id="facebook" class="sprite">
myLI.firstChild.firstChild.data = "Bebo";
myLI.firstChild.href = "http://www.bebo.com";
myLI.id = "bebo";

// Figure 7-12

var myElements = document.getElementsByTagName("a");
myElements;
// [a www.twitter.com, a www.facebook.com, a www.flickr.com, a www.linkedin.com]
myElements = document.getElementById("twitter").getElementsByTagName("a");
// [a www.twitter.com]

// Figure 7-13

function traverseTree(node, func) {
  func(node);
  node = node.firstChild;
  while (node !== null) {
    arguments.callee(node, func);
    node = node.nextSibling;
  }
}
function findClass(name, root) {
  var found = [];
  root = root || document.body;
  traverseTree(root, function(node) {
    if (!! node.className) {
      for (var names = node.className.split(/\s+/), i = names.length; i --; ) {
        if (names[i] === name) {
          found.push(node);
        }
      }
    }
  });
  return found;
}
findClass("sprite");
// [li#twitter.sprite, li#facebook.sprite, li#flickr.sprite, li#linkedin.sprite]

// Figure 7-14

var myElement = document.getElementById("twitter");
myElement.setAttribute("class", "sprout");
myElement.getAttribute("class");
// "sprout"
var myElement = document.getElementById("twitter");
myElement.setAttribute("verb", "tweet");
myElement.getAttribute("verb");
// "tweet"
typeof myElement.verb;
// "undefined"
myElement.getAttribute("verb");
// "tweet"
myElement.slogan = "What's happening?";
myElement.getAttribute("slogan");
// null

// Figure 7-15

var arrayOfAttrNodes = document.getElementById("twitter").attributes;
arrayOfAttrNodes.id.value;
// "twitter"
var arrayOfAttrNodes = document.getElementById("twitter").attributes;
arrayOfAttrNodes["class"].value;
// "sprite"

// Figure 7-16

function filterDefaultAttrNodes(elem) {
  var filtered = [];
  for (var i = 0, j = elem.attributes.length; i < j; i ++) {
    if (elem.attributes[i].specified) {
      filtered.push(elem.attributes[i]);
    }
  }
  return filtered;
}
filterDefaultAttrNodes(document.getElementById("twitter"));
// [Attr, Attr]

// Figure 7-17

var myLI = document.createElement("li"),
  myA = document.createElement("a"),
  myText = document.createTextNode("Bebo"),
  myUL = document.getElementsByTagName("ul")[0];
myLI.id = "bebo";
myLI.className = "sprite";
myA.href = "http://www.bebo.com";
myA.appendChild(myText);
myLI.insertBefore(myA, null);
myUL.replaceChild(myLI, document.getElementById("facebook"));
// <li id="facebook" class="sprite">

// Figure 7-18

var myLI = document.createElement("li"),
  myA = document.createElement("a"),
  myText = document.createTextNode("Bebo"),
  myUL = document.getElementsByTagName("ul")[0];
myLI.id = "bebo";
myLI.className = "sprite";
myA.href = "http://www.bebo.com";
myA.appendChild(myText);
myLI.insertBefore(myA, null);
myUL.appendChild(myUL.replaceChild(myLI, document.getElementById("facebook")));
// <li id="facebook" class="sprite">

// Figure 7-19

var myLI = document.getElementById("facebook");
myLI.parentNode.insertBefore(myLI.parentNode.removeChild(document.getElementById("flickr")),
  myLI);

// Figure 7-20

function createElem(name, members, children) {
  var elem = document.createElement(name), m;
  if (members instanceof Object) {
    for (m in members) {
      elem[m] = members[m];
    }
  }
  if (children instanceof Array) {
    for (i = 0; i < children.length; i ++ ) {
      elem.appendChild(
        typeof children[i] === "object" ? children[i] : document.createTextNode(children[i])
      );
    }
  }
  return elem;
}
var child = createElem(
  "li", 
  {id: "bebo", className: "sprite"}, 
  [createElem("a", {href: "http://www.bebo.com"}, ["Bebo"])]
);
document.getElementsByTagName("ul")[0].appendChild(child);

// Figure 7-21

var myElements = document.getElementsByTagName("ul");
function orderUL(root) {
  var nodeList = root.getElementsByTagName("li"), helperArray = [], i;
  for (i = 0; i < nodeList.length; i ++) {
    helperArray.push(nodeList[i]);
  }
  helperArray.sort(function(li1, li2) {
      var txt1 = li1.getElementsByTagName("a")[0].firstChild.nodeValue.toLowerCase();
      var txt2 = li2.getElementsByTagName("a")[0].firstChild.nodeValue.toLowerCase();
      if (txt1 < txt2) {
        return -1;
      } else if (txt1 > txt2) {
        return 1;
      } else {
        return 0;
      }
    });
  for (i = 0; i < helperArray.length; i ++) {
    helperArray[i].parentNode.appendChild(helperArray[i]);
  }
}
orderUL(myElements[0]);

// Figure 7-22

var myElements = document.getElementsByTagName("ul");
function orderUL(root) {
  var nodeList = root.getElementsByTagName("li"), helperArray = [], i;
  for (i = 0; i < nodeList.length; i ++) {
    helperArray.push(nodeList[i]);
  }
  helperArray.sort(function(li1, li2) {
      var txt1 = li1.getElementsByTagName("a")[0].firstChild.nodeValue.toLowerCase();
      var txt2 = li2.getElementsByTagName("a")[0].firstChild.nodeValue.toLowerCase();
      if (txt1 < txt2) {
        return -1;
      } else if (txt1 > txt2) {
        return 1;
      } else {
        return 0;
      }
    });
  for (i = 0; i < helperArray.length; i ++) {
    helperArray[i].parentNode.appendChild(helperArray[i]);
  }
}
orderUL(myElements[0]);
myElements[0].normalize();
myElements[1].removeChild(myElements[1].firstChild);
myElements[1].childNodes;
// [li, li, li, li, li, li, li, li, li, li, li, li, li, li, li]

