$(function(){
    $(window).scroll(function(e) {
        //若滚动条离顶部大于100元素
        if($(window).scrollTop()>100)
            // $("#back-to-top").show();//以1秒的间隔渐显id=gotop的元素
            $("#back-to-top").css("display", "block");//以1秒的间隔渐显id=gotop的元素
        else
            $("#back-to-top").hide();//以1秒的间隔渐隐id=gotop的元素
    });

    //点击回到顶部的元素
    $("#back-to-top").click(function(e) {
        //以1秒的间隔返回顶部
        $('body,html').animate({scrollTop:0},500);
    });
    // goTop();//实现回到顶部元素的渐显与渐隐
});