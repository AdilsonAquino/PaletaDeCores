function estadoFundo(valor) {
    if (valor === 0) {
        document.getElementById("frase").style.backgroundColor = "#F44336";
    } else if (valor === 1) {
        document.getElementById("frase").style.backgroundColor = "#E91E63";
    } else if (valor === 2) {
        document.getElementById("frase").style.backgroundColor = "#9C27B0";
    } else if (valor === 3) {
        document.getElementById("frase").style.backgroundColor = "#673AB7";
    } else if (valor === 4) {
        document.getElementById("frase").style.backgroundColor = "#3F51B5";
    } else if (valor === 5) {
        document.getElementById("frase").style.backgroundColor = "#2196F3";
    } else if (valor === 6) {
        document.getElementById("frase").style.backgroundColor = "#03A9F4";
    } else if (valor === 7) {
        document.getElementById("frase").style.backgroundColor = "#00BCD4";
    } else if (valor === 8) {
        document.getElementById("frase").style.backgroundColor = "#009688";
    } else if (valor === 9) {
        document.getElementById("frase").style.backgroundColor = "#FF5722";
    }
}
function estadoLetra(valor) {
    if (valor === 0) {
        document.getElementById("frase").style.color = "#F44336";
    } else if (valor === 1) {
        document.getElementById("frase").style.color = "#E91E63";
    } else if (valor === 2) {
        document.getElementById("frase").style.color = "#9C27B0";
    } else if (valor === 3) {
        document.getElementById("frase").style.color = "#673AB7";
    } else if (valor === 4) {
        document.getElementById("frase").style.color = "#3F51B5";
    } else if (valor === 5) {
        document.getElementById("frase").style.color = "#2196F3";
    } else if (valor === 6) {
        document.getElementById("frase").style.color = "#03A9F4";
    } else if (valor === 7) {
        document.getElementById("frase").style.color = "#00BCD4";
    } else if (valor === 8) {
        document.getElementById("frase").style.color = "#009688";
    } else if (valor === 9) {
        document.getElementById("frase").style.color = "#FF5722";
    }
}
function estadoBorda(valor) {
    if (valor === 0) {
        document.getElementById("frase").style.borderColor = "#F44336";
    } else if (valor === 1) {
        document.getElementById("frase").style.borderColor = "#E91E63";
    } else if (valor === 2) {
        document.getElementById("frase").style.borderColor = "#9C27B0";
    } else if (valor === 3) {
        document.getElementById("frase").style.borderColor = "#673AB7";
    } else if (valor === 4) {
        document.getElementById("frase").style.borderColor = "#3F51B5";
    } else if (valor === 5) {
        document.getElementById("frase").style.borderColor = "#2196F3";
    } else if (valor === 6) {
        document.getElementById("frase").style.borderColor = "#03A9F4";
    } else if (valor === 7) {
        document.getElementById("frase").style.borderColor = "#00BCD4";
    } else if (valor === 8) {
        document.getElementById("frase").style.borderColor = "#009688";
    } else if (valor === 9) {
        document.getElementById("frase").style.borderColor = "#FF5722";
    }
}
function botaoReset(valor) {
    if (valor === 1) {
        document.getElementById("frase").style.color = "#000000";
        document.getElementById("frase").style.backgroundColor = "#cccccc";
        document.getElementById("frase").style.borderColor = "#000000";
    } else {
        document.getElementById("frase").style.backgroundColor = "#cccccc";
        document.getElementById("frase").style.color = "#000000";
        document.getElementById("frase").style.borderColor = "#000000";
    }
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function getRandomColor2() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function getRandomColor3() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomColor() {
  document.getElementById("frase").style.backgroundColor = getRandomColor();
  document.getElementById("frase").style.color = getRandomColor2();
  document.getElementById("frase").style.borderColor = getRandomColor3();
}
