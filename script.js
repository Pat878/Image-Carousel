$(document).ready(function(){

//Add initial picture
  var count = 0;
  $("#carousel").html(pictures[0])
  $("#0").addClass("active")

  $(".fa-arrow-circle-right").hover(function(){
    $(".test").html( $(pictures[count+1])).toggle();
  })

  $(".fa-arrow-circle-left").hover(function(){
    if (count == 0) {
      $(".test1").html( $(pictures[5])).toggle(); }
    else if (count == -1) {
      $(".test1").html( $(pictures[4])).toggle(); }
    else {
    $(".test1").html( $(pictures[count-1])).toggle();}
  })

  timer = setInterval(function(){

    count++
    $("#carousel").html($(pictures[count]).fadeIn())
    $(".circle").removeClass("active")
    $("#"+count).addClass("active")
    if (count > 4){
      count = -1
    }
    },6000)

//Logic for moving right
$(".fa-arrow-circle-right").on('click',function() {
  count++
  navCircles();

  $("#carousel").html($(pictures[count]).fadeIn())
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
  navCircles();
  $("#carousel").html($(pictures[count]).fadeIn())
})

function navCircles() {
  $(".circle").removeClass("active")
  $("#"+count).addClass("active")
}

$(".circle").on('click',function() {
  $("#carousel").html(pictures[this.id])
  $(".circle").removeClass("active")
  $("#"+this.id).addClass("active")
  count = this.id;
})

})

var pictures = [
  "<img src='http://www.patmellon.com/img/pup/Elsie-Pic-1-compressor.jpg' height='200' width='80'>",
  "<img src='http://www.patmellon.com/img/pup/Elsie-Pic-2-compressor.jpg' height='200' width='80'>",
    "<img src='http://www.patmellon.com/img/pup/Elsie-Pic-3-compressor.jpg' height='200' width='80'>",
      "<img src='http://www.patmellon.com/img/pup/Elsie-Pic-4-compressor.jpg' height='200' width='80'>",
        "<img src='http://www.patmellon.com/img/pup/Elsie-Pic-5-compressor.jpg' height='200' width='80'>",
        "<img src='http://www.patmellon.com/img/pup/Elsie-Pic-6-compressor.jpg' height='200' width='80'>"
]
