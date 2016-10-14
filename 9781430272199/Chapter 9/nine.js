(function() {

var addListener = document.addEventListener ?
  function(node, type, listener, phase) {
    node.addEventListener(type, listener, !! phase);
  } :
  function(node, type, listener) {
    node.attachEvent("on" + type, listener);
  } ;

var removeListener = document.removeEventListener ?
  function(node, type, listener, phase) {
    node.removeEventListener(type, listener, !! phase);
  } :
  function(node, type, listener) {
    node.detachEvent("on" + type, listener);
  } ;
  
function thwart(e) {
  if (e.preventDefault) {
    thwart = function(e) {
      e.preventDefault();
    };
  } else {
    thwart = function(e) {
      e.returnValue = false;
    };
  }
  thwart(e);
}

function burst(e) {
  if (e.stopPropagation) {
    burst = function(e) {
      e.stopPropagation();
    };
  } else {
    burst = function(e) {
      e.cancelBubble = true;
    };
  }
  burst(e);
}

var traverseTree = document.documentElement.firstElementChild ?
  function traverseTree (node, func) {
    func(node);
    node = node.firstElementChild;
    while (node !== null) {
      traverseTree(node, func);
      node = node.nextElementSibling;
    }
  } :
  function traverseTree (node, func) {
    func(node);
    node = node.firstChild;
    while (node !== null) {
      traverseTree(node, func);
      node = node.nextSibling;
    }
  } ;

var findClass;

if (document.getElementsByClassName) {
  findClass = function (name, root) {
    root = root || document.documentElement;
    return root.getElementsByClassName(name);
  };
} else if (document.querySelectorAll) {
  findClass = function (name, root) {
    root = root || document.documentElement;
    return root.querySelectorAll("." + name);
  };
} else {
  findClass = function (name, root) {
    var found = [];
    root = root || document.documentElement;
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
  };
}

var queryCascade = window.getComputedStyle ?
  function(element, property) {
    return getComputedStyle(element, null)[property];
  } :
  function(element, property) {
    return element.currentStyle[property];
  } ;

var doZ = function() {
  var z = 400;
  return function() {
    return z ++;
  };
}();

// sprite swaps

var prepSprites = window.getComputedStyle ?
  function () {
    var elements = findClass("sprite"), sprites = {};
    for (var i = elements.length, offsets = null; i --; ) {
      sprites[elements[i].id] = [];
      sprites[elements[i].id][0] = queryCascade(elements[i], "backgroundPosition");
      offsets = sprites[elements[i].id][0].split(/\s+/);
      sprites[elements[i].id][1] = 1 - parseInt(queryCascade(elements[i], "width")) + 
        "px " + offsets[1];
      addListener(elements[i], "mouseover", slideSprite);
      addListener(elements[i], "mouseout", slideSprite);
    }
    function slideSprite(e) {
      if (e.type == "mouseover") {
        e.target.style.backgroundPosition = sprites[e.target.id][1];
      } else {
        e.target.style.backgroundPosition = sprites[e.target.id][0];
      }
    }
  } :
  function () {
    var elements = findClass("sprite"), sprites = {};
    for (var i = elements.length, offsets = null; i --; ) {
      sprites[elements[i].id] = [];
      offsets = [queryCascade(elements[i], "backgroundPositionX"), 
        queryCascade(elements[i], "backgroundPositionY")];
      sprites[elements[i].id][0] = offsets.join(" ");
      sprites[elements[i].id][1] = 1 - parseInt(queryCascade(elements[i], "width")) +
        "px " + offsets[1];
      addListener(elements[i], "mouseover", slideSprite);
      addListener(elements[i], "mouseout", slideSprite);
    }
    function slideSprite() {
      var e = window.event;
      if (e.type == "mouseover") {
        e.srcElement.style.backgroundPosition = sprites[e.srcElement.id][1];
      } else {
        e.srcElement.style.backgroundPosition = sprites[e.srcElement.id][0];
      }
    }
  } ;

// drag and drop

function drag(e) {
  if (!e) e = window.event;
  if (!e.target) e.target = e.srcElement;
  var wrapper = e.target.parentNode;
  var left = parseInt(queryCascade(wrapper, "left"));
  var top = parseInt(queryCascade(wrapper, "top"));
  var clientX = e.clientX;
  var clientY = e.clientY;
  wrapper.style.zIndex = doZ();
  addListener(document, "mousemove", move, true);
  addListener(document, "mouseup", drop, true);
  burst(e);
  thwart(e);
  
  function move(e) {
    if (!e) e = window.event;
    wrapper.style.left = left + e.clientX - clientX + "px";
    wrapper.style.top = top + e.clientY - clientY + "px";
    burst(e);
  }
  
  function drop(e) {
    if (!e) e = window.event;
    removeListener(document, "mousemove", move, true);
    removeListener(document, "mouseup", drop, true);
    if (parseInt(wrapper.style.left) < 0) wrapper.style.left = "0px";
    if (parseInt(wrapper.style.top) < 0) wrapper.style.top = "0px";
    burst(e);
    thwart(e);
  }
}

function prepDrag() {
  var elements = findClass("drag");
  for (var i = elements.length; i --; ) {
    addListener(elements[i], "mousedown", drag);
  }
}

// swap skins by key

function prepSkinKeys() {
  var   sheet = document.getElementById("skin");
  function swapSkinByKey(e) {
    if (!e) e = window.event;
    if (!e.target) e.target = e.srcElement;
    if (e.target.nodeName.toLowerCase() === "input" || 
      e.target.nodeName.toLowerCase() === "textarea") return;
    e.letter = String.fromCharCode(e.charCode || e.keyCode).toLowerCase();
    if (e.letter === "f") {
      sheet.href = "fuchsia.css";
    } else if (e.letter === "g") {
      sheet.href = "green.css";
    } else if (e.letter === "b") {
      sheet.href = "blue.css";
    } else {
      return;
    }
  }
  addListener(document, "keypress", swapSkinByKey, true);
}

// load behaviors when the DOM tree is fully available

addListener(window, "load", function() {
    prepSprites();
    prepDrag();
    prepSkinKeys();
  });

}());
