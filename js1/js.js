// 图层点击
$(".talk_img").click(function(){
    if($(".talk").css("display")=="none"){
        $(".talk").removeClass("hidden");
        $(".talk_img").attr("src", "images/closeBarrage.png"); 
    }
    else{
        $(".talk").addClass("hidden");
        $(".talk_img").attr("src", "images/openBarrage.png"); 
    }
});
$(".clt_left").click(function(){
    if($(".catch_img").css("display")=="none"){
        $(".clt_left").addClass("catch_active");
        $(".clt_left").removeClass("catch_active");
        $(".catch_list_li").addClass("hidden");
        $(".catch_img").removeClass("hidden");
    }
});
$(".clt_right").click(function(){
    if($(".catch_list_li").css("display")=="none"){
        $(".clt_left").removeClass("catch_active");
        $(".clt_right").addClass("catch_active");
        $(".catch_list_li").removeClass("hidden");
        $(".catch_img").addClass("hidden");
    }
});
$(".begin_button").click(function(){
    $(".menu_ready").removeClass("hidden");
    $(".catch_list,.menu_in").addClass("hidden");
});
// 弹出框
$(".money").click(function(){
    $(".black_overlay_1,.catch_failed").removeClass("hidden");
    $("body").height($(window).height()).css({"overflow-y": "hidden"})
    $('.black_overlay_1,.catch_failed').bind("touchmove",function(e){
        e.preventDefault();
        });
});
$(".leftkey").click(function(){
    $(".black_overlay_2,.catch_success").removeClass("hidden");
    $("body").height($(window).height()).css({"overflow-y": "hidden"})
    $('.black_overlay_2,.catch_success').bind("touchmove",function(e){
        e.preventDefault();
        });
});
$(".rightkey").click(function(){
    $(".black_overlay_3,.nomoney").removeClass("hidden");
    $("body").height($(window).height()).css({"overflow-y": "hidden"})
    $('.black_overlay_3,.nomoney').bind("touchmove",function(e){
        e.preventDefault();
        });
});

$(".catch_failed .overlay_button_1").click(function(){
    $(".black_overlay_1,.catch_failed").addClass("hidden");
    $("body").height($(window).height()).css({"overflow-y": "visible"})
});
$(".catch_success .overlay_button_1").click(function(){
    $(".black_overlay_2,.catch_success").addClass("hidden");
    $("body").height($(window).height()).css({"overflow-y": "visible"})
});
$(".nomoney .nomoney_left").click(function(){
    $(".black_overlay_3,.nomoney").addClass("hidden");
    $("body").height($(window).height()).css({"overflow-y": "visible"})
});

