$(function(){
  var cards=[$(".card01"),$(".card02"),$(".card03"),$(".card04"),] ;
  var i=0;

    $(".close_icon").click(function(){
      $(cards[i]).hide();
      i++ ;
    });
});