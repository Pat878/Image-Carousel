$(document).ready(function(){

$("button").on('click',function() {
  $("#carousel").append(pictures.pic1)
})

})

var pictures = {
  pic1: "<img src='http://www.almanac.com/sites/default/files/birth_month_flowers-primary-1920x1280px_pixabay.jpg' height='200' width='100'>",
  pic2: "<img src='https://cdn.pixabay.com/photo/2016/07/04/18/16/sun-flower-1497092_960_720.jpg' height='200' width='100'>",


}
