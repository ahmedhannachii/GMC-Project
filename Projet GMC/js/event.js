$(document).ready(function(){

  $(".img").mouseenter(function(){
    $(this).css("opacity", "0.5");
    $(this).find("button").show();
})})

$(document).ready(function(){

  $(".img").mouseleave(function(){
    $(this).css("opacity", "1");
    //$(this).children("button").hide();
    $(this).find("button").hide();

})})
