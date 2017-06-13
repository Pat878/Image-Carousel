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
  "<img src='http://www.almanac.com/sites/default/files/birth_month_flowers-primary-1920x1280px_pixabay.jpg' height='200' width='100'>",
  "<img src='https://cdn.pixabay.com/photo/2016/07/04/18/16/sun-flower-1497092_960_720.jpg' height='200' width='100'>",
    "<img src='https://static.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg' height='200' width='100'>",
      "<img src='http://en.bcdn.biz/Images/2016/7/11/c86de5a5-2107-4382-a98c-184ebf681497.jpg' height='200' width='100'>",
        "<img src='https://s-media-cache-ak0.pinimg.com/736x/42/57/74/425774f7602fb65cd57596d51a560dd5.jpg' height='200' width='100'>",
        "<img src='https://s-media-cache-ak0.pinimg.com/736x/0b/3a/63/0b3a635dc6ced12752f49c67d8ce1855.jpg' height='200' width='100'>"
]
