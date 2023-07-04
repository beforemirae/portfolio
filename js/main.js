  //인디케이터
  $(".indicator ul li").eq(0).addClass("on");
  let wheel_count = 0;

  let offset =[];
  for(let i = 0; i < 6; i++){
      offset.push($(".section").eq(i).offset().top)
      console.log(offset)
  }

  //페이지업다운
  $(window).keydown(function(e){
    let Code = e.keyCode;
    console.log(Code)
    if(Code == 33){
        wheel_count--;
        if(wheel_count <0){
            wheel_count = 0;
        }
        $("html, body").stop().animate({
            scrollTop: $(".section").height()*wheel_count,
        },1000)

        $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on") 

    }else if(Code == 34){
        wheel_count++;
        if(wheel_count > $(".section").length -1){
            wheel_count = $(".section").length -1   
        }
        $("html, body").stop().animate({
            scrollTop: $(".section").height()*wheel_count,
        },1000)

        $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on") 
    }        
})

 // 터치스와이프
 $(".indicator ul li, .side ul li").click(function(){
    wheel_count =$(this).index();

    $("html, body").stop().animate({
        scrollTop: $(".section").height()*wheel_count
    },1000)
    $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on")
})

// 네비
$(".nav .hamburger a, .side").click(function(e){
    e.preventDefault()
 })
$(".nav .hamburger a").click(function(){
    $(".side").toggleClass("on")
    $(".nav .hamburger a").toggleClass("on")
})