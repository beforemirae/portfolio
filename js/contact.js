    //contact 모달팝업창 열기
     $("#contact a").click(function(){
        $(".design").show();
        $("#contact a").removeClass("on");
        $(this).addClass("on");
        return false;

    });
     //contact팝업창 닫기
     $(".blind").click(function(){
        $(".blind,.tied").hide();
        $("#contact a").removeClass("on");
    });

    //이름란에 유효성 검사
    $("#user_name,#subject").keyup(function(){
        var name = $(this).val().length;
        if(name >= 3) {     //정상입력
            $(this).next().fadeIn();
            $(this).removeClass("alert")
        } else {           //미입력
            $(this).addClass("alert");
            $(this).next().fadeOut();
        }
    });

    //메세지란에 유효성 검사
    $("#msg").keyup(function(){
        var name = $(this).val().length;
        if(name >= 5) {     //정상입력
            $(this).next().next().fadeIn();
            $(this).removeClass("alert")
        } else {           //미입력
            $(this).addClass("alert");
            // $(this).next().fadeIn();
            $(this).next().next().fadeOut();
        }
    });
    //number to reply에 유효성 검사
    $("#number").keyup(function(){
        var name = $(this).val().length;
        if(name >= 11) {     //정상입력
            $(this).next().fadeIn();
            $(this).removeClass("alert")
        } else {           //미입력
            $(this).addClass("alert");
            $(this).next().fadeOut();
        }
    });

    //보내기버튼 유효성 검사(내가 설정해놓은 제한 항목이 충족되었을 때 메일 보내라)
    $("#send_bt").click(function(){
        var name = $("#user_name").val().length;
        var subject = $("#subject").val().length;
        var msg = $("#msg").val().length;
        if(name < 3) {
            $("#user_name").addClass("alert").focus();
        }else if (subject < 2) {
            $("#subject").addClass("alert").focus();} else if(msg < 5) {
            $("#msg").addClass("alert").focus();
        } else {
            email();
        }

        // $(".blind,.tied").hide();
        // $("#contact a").removeClass("on");
        return false
    });
    
        function email() {
        var param = {
            title:$("#subject").val(),
            name: $("#user_name").val(),
            answer: $("input[name=answer]").val(),
            content: $("#msg").val()
        }
        //alert(param);
        console.log(param);

        $.ajax({
            url:"fmail.php",
            type: "post", //get방식은 255자까지임
            async: true,//비동기(이 페이지를 떠나지 않는)식으로 실행하겠다. 비동기식으로 쓰기 위해 에이젝스를 썼으므로 보통 트루
            data: param, //param은 지어준 변수명. {name: 땡땡, title:""} <-json 데이터타입
            dataType : "JSON",
            success: function(data) {
                if(data){
                    alert("메일 전송이 완료되었습니다.")
                }
                console.log(data);
            }

            
        });

        $(".blind,.tied").hide();

    }


    //slogan 마우스에 따라 움직이기
    var speed=0.05;
    $(document).mousemove(function(e){
        var x = (e.clientX - $(this).width()/15)*speed;
        var y = (e.clientY - $(this).height()/15)*speed;
        // 서클자체가 움직일때
        $(".backslog").css("transform","translate("+x+"px,"+y+"px)");
        // 그림자가 움직일 때
       // $(".circle").css("box-shadow",x+"px "+y+"px 3px 3px #333");

    });

    //nav 클릭
    $('.open').on('click',function() {
                    $('.mobile_nav').addClass('on');
                    $('.dim').show();
                    // $('header i').addClass('off');
                });

                $('.close').on('click',function() {
                    $('.mobile_nav').removeClass("on");
                    $('.dim').hide();
                    // $('header i').removeClass('off');
                });

                $('.mobile_nav nav ul li a').on('click',function() {
                    $('.mobile_nav').removeClass('on');
                    $('.dim').hide();
                });

                $('.dim').on('click',function() {
                    $('.mobile_nav').removeClass('on');
                    $('.dim').hide();

                });

    //상단바 클릭
    $('header i').click(function(){
        $('header i').addClass('off');
        $()
    });


            
    