"use strict";
(function () {

var addListener = document.addEventListener ?
  function (node, type, listener, phase) {
    node.addEventListener(type, listener, !! phase);
  } :
  function (node, type, listener) {
    node.attachEvent("on" + type, listener);
  } ;

var removeListener = document.removeEventListener ?
  function (node, type, listener, phase) {
    node.removeEventListener(type, listener, !! phase);
  } :
  function (node, type, listener) {
    node.detachEvent("on" + type, listener);
  } ;
  
var thwart = function (e) {
  if (e.preventDefault) {
    thwart = function (e) {
      e.preventDefault();
    };
  } else {
    thwart = function (e) {
      e.returnValue = false;
    };
  }
  thwart(e);
};

var burst = function (e) {
  if (e.stopPropagation) {
    burst = function (e) {
      e.stopPropagation();
    };
  } else {
    burst = function (e) {
      e.cancelBubble = true;
    };
  }
  burst(e);
};

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

var findClass = document.getElementsByClassName ?
  function (name, root) {
    root = root || document.documentElement;
    return root.getElementsByClassName(name);
  } : 
  document.querySelectorAll ?
  function (name, root) {
    root = root || document.documentElement;
    return root.querySelectorAll("." + name);
  } :
  function (name, root) {
    var found = [];
    root = root || document.documentElement;
    traverseTree(root, function (node) {
      if (!! node.className) {
        for (var names = node.className.split(/\s+/), i = names.length; i --; ) {
          if (names[i] === name) {
            found.push(node);
          }
        }
      }
    });
    return found;
  } ;

var queryCascade = window.getComputedStyle ?
  function (element, property) {
    return getComputedStyle(element, null)[property];
  } :
  function (element, property) {
    return element.currentStyle[property];
  } ;

var doZ = function () {
  var z = 400;
  return function () {
    return z ++;
  };
}();

var getCookie = function (name) {
  var batch = document.cookie, i, firstCut, secondCut;
  i = batch.indexOf(name + "=");
  if (i !== -1) {
    firstCut = i + name.length + 1;
    secondCut = batch.indexOf(";", firstCut);
    if (secondCut === -1) secondCut = batch.length;
    return decodeURIComponent(batch.substring(firstCut, secondCut));
  } else {
    return false;
  }
};

var createElem = function (name, members, children) {
  var elem = document.createElement(name), m;
  if (members instanceof Object) {
    for (m in members) {
      elem[m] = members[m];
    }
  }
  if (children instanceof Array) {
    for (i = 0; i < children.length; i ++ ) {
      elem.appendChild(typeof children[i] === "object" ? 
        children[i] : document.createTextNode(children[i]));
    }
  }
  return elem;
};

var createXHR = typeof XMLHttpRequest !== "undefined" ?
  function () {
    return new XMLHttpRequest();
  } :
  typeof ActiveXObject !== "undefined" ?
  function () {
    var versions = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", 
      "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
    for (var i = 0, j = versions.length, version = ""; i < j; i ++) {
      try {
        new ActiveXObject(versions[i]);
        version = versions[i];
        break;
      }
      catch(e) {
      }
    }
    if (version !== "") {
      return function () {
        return new ActiveXObject(version);
      };
    } else {
      return null;
    }
  }() :
  null ;

var getData = function (url, callback) {
  if (createXHR !== null) {
    var req = createXHR();
    req.onreadystatechange = function () {
      if (req.readyState === 4) {
        callback(req);
      }
    }
    req.open("GET", url, true);
    req.send(null);
  }
};

var prepSprites = window.getComputedStyle ?
  function () {
    var elements = findClass("sprite"), sprites = {};
    var slideSprite = function (e) {
      if (e.type == "mouseover") {
        e.target.style.backgroundPosition = 
          sprites[e.target.id || e.target.className][1];
      } else {
        e.target.style.backgroundPosition = 
          sprites[e.target.id || e.target.className][0];
      }
    };
    for (var i = elements.length, offsets = null, member; i --; ) {
      member = elements[i].id || elements[i].className;
      if (! sprites[member]) {
        sprites[member] = [];
        sprites[member][0] = queryCascade(elements[i], "backgroundPosition");
        offsets = sprites[member][0].split(/\s+/);
        sprites[member][1] = 1 - parseInt(queryCascade(elements[i], "width")) +
          "px " + offsets[1];
      }
      addListener(elements[i], "mouseover", slideSprite);
      addListener(elements[i], "mouseout", slideSprite);
    }
  } :
  function () {
    var elements = findClass("sprite"), sprites = {};
    var slideSprite = function () {
      var e = window.event;
      if (e.type == "mouseover") {
        e.srcElement.style.backgroundPosition = 
          sprites[e.srcElement.id || e.srcElement.className][1];
      } else {
        e.srcElement.style.backgroundPosition = 
          sprites[e.srcElement.id || e.srcElement.className][0];
      }
    };
    for (var i = elements.length, offsets = null, member; i --; ) {
      member = elements[i].id || elements[i].className;
      if (! sprites[member]) {
        sprites[member] = [];
        offsets = [queryCascade(elements[i], "backgroundPositionX"), 
          queryCascade(elements[i], "backgroundPositionY")];
        sprites[member][0] = offsets.join(" ");
        sprites[member][1] = 1 - parseInt(queryCascade(elements[i], "width")) + 
          "px " + offsets[1];
      }
      addListener(elements[i], "mouseover", slideSprite);
      addListener(elements[i], "mouseout", slideSprite);
    }
  } ;

var drag = function (e) {
  if (!e) e = window.event;
  if (!e.target) e.target = e.srcElement;
  var wrapper = e.target.parentNode;
  var left = parseInt(queryCascade(wrapper, "left"));
  var top = parseInt(queryCascade(wrapper, "top"));
  var clientX = e.clientX;
  var clientY = e.clientY;
  wrapper.style.zIndex = doZ();
  var move = function (e) {
    if (!e) e = window.event;
    wrapper.style.left = left + e.clientX - clientX + "px";
    wrapper.style.top = top + e.clientY - clientY + "px";
    burst(e);
  };
  var drop = function (e) {
    if (!e) e = window.event;
    removeListener(document, "mousemove", move, true);
    removeListener(document, "mouseup", drop, true);
    if (parseInt(wrapper.style.left) < 0) wrapper.style.left = "0px";
    if (parseInt(wrapper.style.top) < 0) wrapper.style.top = "0px";
    burst(e);
    thwart(e);
  };
  addListener(document, "mousemove", move, true);
  addListener(document, "mouseup", drop, true);
  burst(e);
  thwart(e);
};

var prepDrag = function () {
  var elements = findClass("drag");
  for (var i = elements.length; i --; ) {
    addListener(elements[i], "mousedown", drag);
  }
};

var presetSkin = function () {
  var pref = getCookie("skin");
  if (pref !== false) {
    document.getElementById("skin").href = pref + ".css";
  }
};

var prepSkinKeys = function () {
  var sheet = document.getElementById("skin");
  var swapSkinByKey = function (e) {
    if (!e) e = window.event;
    if (!e.target) e.target = e.srcElement;
    if (e.target.nodeName.toLowerCase() === "input" || 
      e.target.nodeName.toLowerCase() === "textarea") return;
    e.letter = String.fromCharCode(e.charCode || 
      e.keyCode).toLowerCase();
    var pref;
    if (e.letter === "f") {
      pref = "fuchsia";
    } else if (e.letter === "g") {
      pref = "green";
    } else if (e.letter === "b") {
      pref = "blue";
    } else {
      return;
    }
    sheet.href = pref + ".css";
    document.cookie = "skin=" + pref + "; max-age=" + (60*60*24*30);
  };
  addListener(document, "keypress", swapSkinByKey, true);
};

var prepScrollers = function () {
  var elements = findClass("scroller");
  for (var i = elements.length; i --; ) {
    (function (scroller) {
      var wrapper = findClass("wrapper", scroller)[0];
      var slide = findClass("slide", scroller)[0];
      var w1 = parseInt(queryCascade(wrapper, "width"));
      var w2 = parseInt(queryCascade(slide, "width"));
      var timer = null;
      slide.style.left = queryCascade(slide, "left");
      
      var press = function (e) {
        if (!e) e = window.event;
        if (!e.target) e.target = e.srcElement;
        var jump = e.target.jump;
      
        var animate = function animate () {
          var x = parseInt(slide.style.left) + jump;
          if (x >= w1 - w2 && x <= 0) {
            slide.style.left = x + "px";
            timer = setTimeout(animate, 15);
          } else if (x < w1 - w2) {
            slide.style.left = w1 - w2 + "px";
          } else {
            slide.style.left = "0px";
          }
        };
      
        var release = function (e) {
          clearTimeout(timer);
          removeListener(document, "mouseup", release, true);
          removeListener(document, "mouseout", release, true);
        };
        addListener(document, "mouseup", release, true);
        addListener(document, "mouseout", release, true);
        animate();
        burst(e);
        thwart(e);
      };
      for (var arrows = findClass("arrow", scroller), 
        i = arrows.length, re = /\bright\b/; i --; ) {
          addListener(arrows[i], "mousedown", press);
          arrows[i].jump = (re.test(arrows[i].className)) ? -10 : 10;
      }
    })(elements[i]);
  }
};

var parseHTML = function (req) {
  if (req.status === 200 || req.status === 304) {
    var div = createElem("div", {className: "scroller", id: "s2"}, [
      createElem("div", {className: "wrapper"}),
      createElem("div", {className: "left arrow sprite"}),
      createElem("div", {className: "right arrow sprite"})]);
    div.firstChild.innerHTML = req.responseText;
    document.body.appendChild(div);
  }
  getData("data/s3.xml", parseXML);
};

var parseXML = function (req) {
  if (req.status === 200 || req.status === 304) {
    var domTree = req.responseXML,
      m = "getElementsByTagName";
    var elements = domTree[m]("shoe");
    var div, ul = createElem("ul", {className: "slide"}), li;
    for (var i = 0, j = elements.length; i < j; i ++) {
      li = createElem("li", null, [
        createElem("a", {href: elements[i][m]("href")[0].firstChild.data}, [
        createElem("img", {src: elements[i][m]("src")[0].firstChild.data, 
        alt: elements[i][m]("alt")[0].firstChild.data})])]);
      ul.appendChild(li);
    }
    div = createElem("div", {className: "scroller", id: "s3"}, [
      createElem("div", {className: "wrapper"}, [ul]),
      createElem("div", {className: "left arrow sprite"}),
      createElem("div", {className: "right arrow sprite"})]);
    document.body.appendChild(div);
  }
  getData("data/s4.xml", parseSimpleXML);
};

var parseSimpleXML = function (req) {
  if (req.status === 200 || req.status === 304) {
    var domTree = req.responseXML;
    var elements = domTree.getElementsByTagName("shoe");
    var div, ul = createElem("ul", {className: "slide"}), li;
    for (var i = 0, j = elements.length; i < j; i ++) {
      li = createElem("li", null, [
        createElem("a", {href: elements[i].getAttribute("href")}, [
        createElem("img", {src: elements[i].getAttribute("src"), 
        alt: elements[i].getAttribute("alt")})])]);
      ul.appendChild(li);
    }
    div = createElem("div", {className: "scroller", id: "s4"}, [
      createElem("div", {className: "wrapper"}, [ul]),
      createElem("div", {className: "left arrow sprite"}),
      createElem("div", {className: "right arrow sprite"})]);
    document.body.appendChild(div);
  }
  getData("data/s5.js", parseJSON);
};

var parseJSON = function (req) {
  if (req.status === 200 || req.status === 304) {
    var data = JSON.parse(req.responseText);
    var div, ul = createElem("ul", {className: "slide"}), li;
    for (var i = 0, j = data.length; i < j; i ++) {
      li = createElem("li", null, [
        createElem("a", {href: data[i].href}, [
        createElem("img", {src: data[i].src, alt: data[i].alt})])]);
      ul.appendChild(li);
    }
    div = createElem("div", {className: "scroller", id: "s5"}, [
      createElem("div", {className: "wrapper"}, [ul]),
      createElem("div", {className: "left arrow sprite"}),
      createElem("div", {className: "right arrow sprite"})]);
    document.body.appendChild(div);
  }
  parseJSONP();
};

var parseJSONP = function parseJSONP (data) {
  if (typeof data === "undefined") {
    var f = parseJSONP;
    window.padJSON = function (d) {
        f(d);
      };
    var script = document.createElement("script");
    script.src = "data/s6.js";
    document.getElementsByTagName("head")[0].appendChild(script);
    return;
  }
  var div, ul = createElem("ul", {className: "slide"}), li;
  for (var i = 0, j = data.length; i < j; i ++) {
    li = createElem("li", null, [
      createElem("a", {href: data[i].href}, [
      createElem("img", {src: data[i].src, alt: data[i].alt})])]);
    ul.appendChild(li);
  }
  div = createElem("div", {className: "scroller", id: "s6"}, [
    createElem("div", {className: "wrapper"}, [ul]),
    createElem("div", {className: "left arrow sprite"}),
    createElem("div", {className: "right arrow sprite"})]);
  document.body.appendChild(div);
  prep();
};

var prep = function () {
  var mojo = [prepSprites, prepDrag, prepSkinKeys, prepScrollers];
  setTimeout(function yield () {
    (mojo.shift())();
    if (mojo.length !== 0) {
      setTimeout(yield, 30);
    }
  }, 30);
};

addListener(window, "load", function (e) {
    presetSkin();
    getData("data/s2.html", parseHTML);
  });

}());
