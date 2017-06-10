window.onload=function(){
  var pic = "http://www.almanac.com/sites/default/files/birth_month_flowers-primary-1920x1280px_pixabay.jpg"
var elem = document.createElement("img");
elem.setAttribute("src", pic);
elem.setAttribute("height", "200");
elem.setAttribute("width", "200");
//elem.setAttribute("alt", "Flower");
document.getElementById("carousel").appendChild(elem);
}
