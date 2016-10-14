// Figure 8-2

var myStyle = document.getElementById("nike").style;
myStyle.backgroundPosition;
// ""
myStyle.backgroundImage;
// ""
myStyle.left;
// ""
myStyle.top;
// ""

// Figure 8-3

var myStyle = document.getElementById("nike").style;
myStyle.backgroundPosition = "-99px -108px";
myStyle.backgroundImage = "url(images/fuchsia.gif)";
myStyle.left = "200px";
myStyle.top = "30px";

// Figure 8-4

var myStyle = document.getElementById("nike").style;
myStyle.backgroundPosition = "-99px -108px";
myStyle.backgroundImage = "url(images/fuchsia.gif)";
myStyle.left = "200px";
myStyle.top = "30px";
myStyle.cssText;
// "background-position: -99px -108px; background-image: url("images/fuchsia.gif"); left: 200px; top: 30px;"

// Figure 8-5

var myStyle = document.getElementById("brooks").style;
myStyle.cssText = "background-image:url(images/fuchsia.gif);left:210px;top:0;padding-left:99px;height:55px";
myStyle.cssText = "background-image:url(images/fuchsia.gif)";

// Figure 8-6

document.getElementsByTagName("ul")[0].className = "fuchsia";

// Figure 8-7

function swapClass(element, oldClass, newClass) {
  var re = new RegExp("\\b" + oldClass + "\\b", "g");
  element.className = element.className.replace(re, newClass);
}
swapClass(document.getElementsByTagName("ul")[0], "blue", "fuchsia");

// Figure 8-8

var myStyleSheet = document.getElementsByTagName("link")[0];
myStyleSheet = myStyleSheet.sheet || myStyleSheet.styleSheet;
var myRules = myStyleSheet.cssRules || myStyleSheet.rules;
for (var i = myRules.length - 1; i > -1; i --) {
  if (myRules[i].selectorText && myRules[i].selectorText.toLowerCase() === "ul.blue a") {
    myRules[i].style.backgroundImage = "url(images/fuchsia.gif)";
    break;
  }
}

// Figure 8-9

function findRule(element, selector) {
  var sheet = element.sheet || element.styleSheet;
  var rules = sheet.cssRules || sheet.rules;
  selector = selector.toLowerCase()
  for (var i = rules.length - 1; i > -1; i --) {
    if (rules[i].selectorText && rules[i].selectorText.toLowerCase() === selector) {
      return rules[i];
    }
  }
  return null;
}
var myRule = findRule(document.getElementsByTagName("link")[0], "ul.blue a");
if (myRule !== null) {
  myRule.style.backgroundImage = "url(images/fuchsia.gif)";
}

// Figure 8-10

function findIndex(element, selector) {
  var sheet = element.sheet || element.styleSheet;
  var rules = sheet.cssRules || sheet.rules;
  selector = selector.toLowerCase()
  for (var i = rules.length - 1; i > -1; i --) {
    if (rules[i].selectorText && rules[i].selectorText.toLowerCase() === selector) {
      return i;
    }
  }
}
findIndex(document.getElementById("spriteStyles"), "a#adidas");
// 9

// Figure 8-11

function insertRule(element, selector, declarations, index) {
  var sheet = element.sheet || element.styleSheet;
  var rules = sheet.cssRules || sheet.rules;
  if (typeof index === "string") {
    index = findIndex(element, index);
  }
  if (typeof index !== "number") {
    index = rules.length;
  }
  if (sheet.insertRule) {
    sheet.insertRule(selector + "{" + declarations + "}", index);
  } else if (sheet.addRule) {
    sheet.addRule(selector, declarations, index);
  }
}
insertRule(document.getElementById("spriteStyles"), "ul.blue a",
  "background-image:url(images/fuchsia.gif)", "ul.fuchsia a");

// Figure 8-12

function deleteRule(element, selector) {
  var sheet = element.sheet || element.styleSheet;
  var index = findIndex(element, selector);
  if (typeof index !== "number") {
    return;
  }
  if (sheet.deleteRule) {
    sheet.deleteRule(index);
  } else if (sheet.removeRule) {
    sheet.removeRule(index);
  }
}
deleteRule(document.getElementById("spriteStyles"), "ul.blue a");

// Figure 8-13

function queryCascade(element, property) {
  if (typeof getComputedStyle === "function") {
    return getComputedStyle(element, null)[property];
  } else if (element.currentStyle) {
    return element.currentStyle[property];
  }
}
var myDIV = document.getElementById("running");
myDIV.style.left = parseInt(queryCascade(myDIV, "left")) + 10 + "px";

// Figure 8-14

function toggleSheet(element) {
  var sheet = element.sheet || element.styleSheet;
  sheet.disabled = ! sheet.disabled;
}
toggleSheet(document.getElementById("spriteStyles"));

// Figure 8-15

function addSheet(tag, url) {
  var element = document.createElement(tag);
  element.type = "text/css";
  document.getElementsByTagName("head")[0].appendChild(element);
  if (tag === "link") {
    element.rel = "stylesheet";
    element.href = url;
  } else if (tag === "style") {
    try {
      element.sheet.insertRule("@import url(" + url + ")", 0);
    } catch (whyNot) {
      element.styleSheet.addImport(url);
    }
  }
}
document.getElementsByTagName("head")[0].
  removeChild(document.getElementsByTagName("link")[0]);

// Figure 8-16

function addSheet(tag, url) {
  var element = document.createElement(tag);
  element.type = "text/css";
  document.getElementsByTagName("head")[0].appendChild(element);
  if (tag === "link") {
    element.rel = "stylesheet";
    element.href = url;
  } else if (tag === "style") {
    try {
      element.sheet.insertRule("@import url(" + url + ")", 0);
    } catch (whyNot) {
      element.styleSheet.addImport(url);
    }
  }
}
addSheet("link", "eight.css");

// Figure 8-17

function embedSheet(text) {
  var element = document.createElement("style");
  element.type = "text/css";
  document.getElementsByTagName("head")[0].appendChild(element);
  text = document.createTextNode(text);
  try {
    element.appendChild(text);
  } catch (whyNot) {
    element.styleSheet.cssText = text.data;
  }
}
embedSheet("ul.blue a {background-image:url(images/fuchsia.gif);} div#running {left:500px;}");
