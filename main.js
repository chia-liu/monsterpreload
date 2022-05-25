var percent = 0 
function eatCount(){
  $('.monsterText').html("We are<br> SQUARE<br>MONSTER!")
}

var timer = setInterval(function(){
  $(".bar").css("width",percent+"%")
  percent+=1
  if(percent>=101){
    $(".pageLoading").addClass("complete")
    clearInterval(timer)
    setTimeout(eatCount,3000)
  }
},30)