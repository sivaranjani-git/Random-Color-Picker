setInterval(function  colorPicker() {
    var b= document.getElementsByTagName("body")[0];
    var randomNumber = Math.floor();(Math.random()* 14678763).toString(16);
    console.log(randomNumber)
    b.style.background = "#" + randomNumber;
},1000);