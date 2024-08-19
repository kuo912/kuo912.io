$(function() {
    $('#fullpage').fullpage({
        menu: "#menu",
        anchors: ["section0", "section1", "section2", "section3", "section4"],
        responsiveWidth: 1025, // 1025 이하 해상도에서는 풀페이지 깨짐
        onLeave: function(index, nextIndex, direction) {
            $('.menu li').removeClass('menuon');
            $('.menu li').eq(nextIndex - 1).addClass('menuon');
        }
    });

    // 메뉴 클릭 시 'menuon' 클래스 추가
    $('.menu>li>a').on('click', function() {
        $(this).parent().addClass('menuon').siblings().removeClass('menuon');
    });

    $('.c_coding1>img').click(function(){
        $('.clone_glass>h1').addClass('off');

        setTimeout(function(){
            $('.clone_glass>p').addClass('off');
        }, 200);

        setTimeout(function(){
            $('.kakao_more>h1').addClass('on');
        }, 800);
        
        setTimeout(function(){
            $('.kakao_more>.clone_info').addClass('on');
        }, 1000);

        setTimeout(function(){
            $('.kakao_more>p').addClass('on');
        }, 1200);

        setTimeout(function(){
            $('.kakao_more>.clone_button').addClass('on');
        }, 1400);
    });







});
