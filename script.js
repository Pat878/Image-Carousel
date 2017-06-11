$(document).ready(function(){

//Add initial picture
  var count = 0;
  $("#carousel").html(pictures[0])
  $("#0").addClass("active")

//Logic for moving right
$(".fa-arrow-circle-right").on('click',function() {
  count++
console.log(count)
  navCirclesRight();

  $("#carousel").html(pictures[count])
  if (count == 5) {
  count = -1 }
  if (count == 6){
  $("#carousel").html(pictures[0])
  count = 0; }

  })

//Logic for moving left
$(".fa-arrow-circle-left").on('click',function() {

  if (count == 0){
  $("#carousel").html(pictures[5])
  count = 6; }
  if (count == -1){
  $("#carousel").html(pictures[5])
  count = 5; }

  count--

  navCirclesLeft();

  $("#carousel").html(pictures[count])
})

function navCirclesRight() {
  $("#"+count).addClass("active")
  $("#"+(count-1)).removeClass("active")

  if (count == 6) {
  $("#0").addClass("active")  }

  if ($("#0").hasClass("active") == true &&
  $("#5").hasClass("active") ) {
  $("#5").removeClass("active") }
}

function navCirclesLeft() {

  $("#"+count).addClass("active")
  $("#"+(count+1)).removeClass("active")

  if ($("#0").hasClass("active") == true &&
  count == 5 ) {
  $("#0").removeClass("active") }
}

$(".circle").on('click',function() {
  $("#carousel").html(pictures[this.id])
  $(".circle").removeClass("active")
  $("#"+this.id).addClass("active")
  count = this.id
})

timer = setInterval(function(){
  count++
  $("#carousel").html(pictures[count])
  $(".circle").removeClass("active")
  $("#"+count).addClass("active")

},6000)

})

var pictures = [
  "<img src='http://www.almanac.com/sites/default/files/birth_month_flowers-primary-1920x1280px_pixabay.jpg' height='200' width='100'>",
  "<img src='https://cdn.pixabay.com/photo/2016/07/04/18/16/sun-flower-1497092_960_720.jpg' height='200' width='100'>",
    "<img src='https://static.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg' height='200' width='100'>",
      "<img src='http://en.bcdn.biz/Images/2016/7/11/c86de5a5-2107-4382-a98c-184ebf681497.jpg' height='200' width='100'>",
        "<img src='https://static.pexels.com/photos/101472/pexels-photo-101472.jpeg' height='200' width='100'>",
        "<img src='http://www.hdwallpapers.in/walls/pink_cosmos_flowers-wide.jpg' height='200' width='100'>"
]
