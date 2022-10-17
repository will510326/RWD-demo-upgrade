$(function(){
    // 按下gotop時的事件
    $('#gotop').click(function(){
        // 返回最頂上
        $('html,body').animate({screenTop: 0}, 'slow'); 
        // 預設載入時狀態為fadeOut
        return false; 
    });
    // 偵測捲動時，往下滑動超過400px就讓gotop出現
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400){
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
    });
});