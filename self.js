(function($){
  $(document).ready(function() {

    // BLUECELL 올릴 시, 설명문 나오게 그리기
    $('#li1').hover(function(){
    //map1에 마우스 가져갈시 check 클래스 추가 & 땔시 삭제
    $('#li1').addClass('li_2');},
                    function(){
    $('#li1').removeClass('li_2');
    });

    $('#li2').hover(function(){
    //map1에 마우스 가져갈시 check 클래스 추가 & 땔시 삭제
    $('#li2').addClass('li_2');},
                    function(){
    $('#li2').removeClass('li_2');
    });

    $('#li3').hover(function(){
    //map1에 마우스 가져갈시 check 클래스 추가 & 땔시 삭제
    $('#li3').addClass('li_2');},
                    function(){
    $('#li3').removeClass('li_2');
    });

    $('#li4').hover(function(){
    //map1에 마우스 가져갈시 check 클래스 추가 & 땔시 삭제
    $('#li4').addClass('li_2');},
                    function(){
    $('#li4').removeClass('li_2');
    });

    $('#dream-title').hover(function(){
    //map1에 마우스 가져갈시 check 클래스 추가 & 땔시 삭제
    $('#dream-title').addClass('dream-title2');},
                    function(){
    $('#dream-title').removeClass('dream-title2');
    });

    $('#goal-title').hover(function(){
    //map1에 마우스 가져갈시 check 클래스 추가 & 땔시 삭제
    $('#goal-title').addClass('goal-title2');},
                    function(){
    $('#goal-title').removeClass('goal-title2');
    });
  });
})(jQuery);
