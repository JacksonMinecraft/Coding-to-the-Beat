function roseDropdown() {
  var r = document.getElementById("rose");
  if (r.className.indexOf("w3-show") == -1) {
    r.className += " w3-show";

    var c = document.getElementById("clock");
    if (c.className.indexOf("w3-show") == 62) {
      c.className = c.className.replace(" w3-show", "");
    }

    var m = document.getElementById("metaball");
    if (m.className.indexOf("w3-show") == 62) {
      m.className = m.className.replace(" w3-show", "");
    }
  } else {
    r.className = r.className.replace(" w3-show", "");
  }
}

function clockDropdown() {
  var c = document.getElementById("clock");
  if (c.className.indexOf("w3-show") == -1) {
    c.className += " w3-show";

    var r = document.getElementById("rose");
    if (r.className.indexOf("w3-show") == 62) {
      r.className = r.className.replace(" w3-show", "");
    }

    var m = document.getElementById("metaball");
    if (m.className.indexOf("w3-show") == 62) {
      m.className = m.className.replace(" w3-show", "");
    }
  } else {
    c.className = c.className.replace(" w3-show", "");
  }
}

function metaballDropdown() {
  var m = document.getElementById("metaball");
  if (m.className.indexOf("w3-show") == -1) {
    m.className += " w3-show";

    var r = document.getElementById("rose");
    if (r.className.indexOf("w3-show") == 62) {
      r.className = r.className.replace(" w3-show", "");
    }

    var c = document.getElementById("clock");
    if (c.className.indexOf("w3-show") == 62) {
      c.className = c.className.replace(" w3-show", "");
    }
  } else {
    m.className = m.className.replace(" w3-show", "");
  }
}
