//音乐开启
var musicI = 0;
function music(e){
    if(musicI == 0){
$(e).attr('src','../icon/musicOff@3x.png');
musicI++;

}
else if(musicI ==1){
    $(e).attr('src','../icon/musicOn@3x.png'); 
    musicI=0;
}
console.log(musicI);
}

//日历初始化

$("#beginTime").calendar();
$("#endTime").calendar();
//WeUi日历弹出
$("#beginTime").on("click", function () {
    window.scrollTo(0, 250);
    $("#beginTime").calendar("open");
})

var i = 0;
$("#endTime").change(function () {
    if (i == 0) {
        i++;
    }
    if ($("#beginTime").val() != "" && i != 0) {
        if ($("#beginTime").val() > $("#endTime").val()) {

            var a = $("#beginTime").val();
            $("#beginTime").val($("#endTime").val());
            $("#endTime").val(a);
            $.toast("结束日期必须大于开始日期！", "forbidden")
        }
    }
})



//奖品信息 上传图片
$('#uploaderInput').change(function () {
    $(".giftsImg>.delete").css("display", "block");
    var objUrl = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
    if (objUrl) {
        $("#inputImg").attr("src", objUrl); //将图片路径存入src中，显示出图片
    }

})
//上传图片2.0
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}



//  *** 机构介绍 上传图片
function orgAddImg(input, containerId, e, _this) {
    //拿到文件
    var docObj = _this;
    //获取到预览框的文件的父级容器
    var containerId = $("#" + containerId);
    var filePath = $(_this).val(); //读取图片路径  
    if (filePath.indexOf("jpg") != -1 || filePath.indexOf("JPG") != -1 || filePath.indexOf("PNG") != -1 || filePath.indexOf("png") != -1) {} else {
        alert("格式错误")
        return false;
    }
    if (docObj.files && docObj.files[0]) {
        containerId.append('<div class="editAdpPic exchangeItem"><div class="borderStyle bordermargin" type="text"><img src="' + window.URL.createObjectURL(docObj.files[0]) + '" alt=""><div class="iconList"> <img class="moveup" data-index="' + exIndex + '" onclick="exUp(this)"  alt=""><img class="movedown" onclick="exDown(this)"  data-index="' + exIndex + '"alt=""><img class="delete" src="../icon/delete@3x.png" alt="" onclick="exDel(this)"></div></div></div>');
        exIndex++;
    }
    return true;
}




//礼物图片删除
function del(whitch) {
    $(whitch).siblings("#inputImg").attr("src", "../img/addImg.png");
    $(whitch).css("display", "none");
    $(whitch).siblings("#uploaderInput").val('');

}
//添加奖品
$("#addGift").on("click", function () {
    var gift = document.getElementsByClassName("gift");
    var num = gift.length + 1;
    $(".giftOthers").append(` <div class="gift flexStart">
    <div class="contentTitle giftName">
        <span>奖品</span>
        <img onclick="delGift(this)" id="deleGift" src="../icon/delete@3x.png" alt="">
    </div>
    <div class="contentTitle">
        <span>活动时间内抢到</span>
        <input type="text" class="yuanbao borderStyle" placeholder="100">
        <span>个元宝</span>
    </div>

    <div class="contentTitle lesstop">
        <span>即可</span>
        <input type="text" class="borderStyle huode" placeholder="免费获得新东方英语6节课">
    </div>

    <div class="giftsAdd">
        <div class="giftsImg borderStyle">
            <img id="inputImg" class="inputImg" src="../img/addImg.png" alt="">
            <img class="delete" src="../icon/delete@3x.png" onclick="del(this)">
            <input id="uploaderInput" class="uploaderInput" type="file" multiple="">
            <span>（请点击+号，上传一张图片）</span>
        </div>
    </div>

    <div class="giftItem">
        <input class="borderStyle" placeholder="新东方英语6节课" style="width:60%">
        <label for="">共</label>
        <input class="borderStyle" placeholder="10" style="width:30px">
        <label for="">份</label>
    </div>

    <div class="border"></div>
</div>`)

})

//删除奖品
function delGift(whitch) {
    $(whitch).parent(".giftName").parent(".gift").remove();
}

//添加 信息收集
$("#addMessage").on('click', function () {
    $(".messageWraper").append(`<div class="contentInput">
         <img src="../icon/lock@3x.png" alt="" class="hidden">
     <input type="text" class="borderStyle bordermargin" placeholder="请输入信息">
     <span onclick="must(this);">
         <i></i>
         必须填</span>
 </div>`)
})

//信息收集
function must(whitch) {
    $(whitch).children("i").toggleClass("selected");
    $(whitch).siblings("img").toggleClass("hidden");
    $(whitch).toggleClass("active");
}



//添加机构文本信息
$("#addContent").on('click', function () {


    $(".editOrg>.contentInput").append(` <div class="editAddContent exchangeItem">

            <div class="borderStyle" contenteditable="true"></div>
            <div>
            <div class="iconList">
                <img class="moveup" data-index="` + exIndex + `"  onclick="exUp(this)"  alt="">
                <img class="movedown" data-index="` + exIndex + `" onclick="exDown(this)"  alt="">
                <img class="delete" src="../icon/delete@3x.png" alt="" onclick="exDel(this)">
            </div>
            </div>
            </div>`);
    exIndex++;
})


//添加机构图片
$("#orgPicInput").on('change', function (e) {
    // addImg("orgPicInput","newImg");
    // ***
    var _this = this;
    orgAddImg("orgPicInput", "orgIntroduce", e, _this);
})

//第一个div和最后div更改图标
// $(".editOrg>.contentInput").children(":first>.iconList>.unmoveup").attr('src','../icon/moveup@3x.png');
//$(".editOrg>.contentInput").children(":first").children(".borderStyle").children(".iconList").children(":first").attr('src', '../icon/unmoveup@3x.png');
//$(".editOrg>.contentInput").children(":last").children(".borderStyle").children(".iconList").children(".movedown").attr('src', '../icon/unmovedown@3x.png');



//点击选择校区
$("#addSchool").on("click", function () {
    $(".schoolList>li>i").prop("class", "");
    $("#selectAll>span").text("全选");
    $("body").css("overflow", "hidden");
    $(".chooseSchoolBg").css("display", "block");
})


$(".schoolList>li").on('click', function () {
    $(this).children("i").toggleClass("selected");
})

//校区全选，反选
schoolI = 0;
$("#selectAll").on('click', function () {

    if (schoolI == 0) {
        $(".schoolList>li>i").prop("class", "selected");
        $("#selectAll>span").text("全不选");
        schoolI++;
        return;
    }
    if (schoolI == 1) {
        $(".schoolList>li>i").prop("class", "");
        $("#selectAll>span").text("全选");
        schoolI = 0;
        return;
    }

})

//确定选择校区

$("#chooseSchoolOver").on('click', function (evt) {
    $("body").css("overflow", "scroll");
    $(".chooseSchoolBg").css("display", "none");
})


//取消选择校区
$(".chooseTitle>.delete").on('click', function () {
    $("body").css("overflow", "scroll");
    $(".chooseSchoolBg").css("display", "none");
})

//删除校区
function delSchool(e){
    console.log("aaa");
    $(e).parent(".content").remove();
}

//点击抢元宝
$("#qiangyuanbao").on('click', function () {
    $(".actionEnrollBG").css('display', 'block');
})

//提交活动报名
$("#subAction").on('click', function () {
    $(".actionEnrollBG").css('display', 'none');
})

//取消报名
$(".actionEnrollTitle>#delete").on('click', function () {
    $(".actionEnrollBG").css('display', 'none');
})

// 自定义索引
var exIndex = $(".exchangeItem").length;

// 上下移动切换
exchange();

function exchange() {
    var exItem = $(".exchangeItem");
    exItem.eq(1).html()
    //    console.log(exItem.eq(1).prop("outerHTML"))
}
// 上移 此方法不支持生效于动态生成的代码，索引无法衍生，只能自定义索引
// $(".moveup11111").click(function (e) {
//     // 获取索引
//     var index = $(".moveup").index(this)
//     if (index == 0) {
//           return
//     }
//     // 获取组列对象
//     var exItem = $(".exchangeItem");
//     var ex = exItem.eq(index - 1).prop("outerHTML");
//     exItem.eq(index - 1).prop("outerHTML", exItem.eq(index).prop("outerHTML"))
//     exItem.eq(index).prop("outerHTML", ex)

// })
// 下移 此方法不支持生效于动态生成的代码，索引无法衍生，只能自定义索引
// $(".movedown11111").click(function (e) {
//     // 获取索引
//     var index = $(".movedown").index(this)
//     if (index >= $(".movedown").length) {
        
//         return
//     }
//     // 获取组列对象
//     var exItem = $(".exchangeItem");
//     var ex = exItem.eq(index + 1).prop("outerHTML");
//     exItem.eq(index + 1).prop("outerHTML", exItem.eq(index).prop("outerHTML"))
//     exItem.eq(index).prop("outerHTML", ex)
// })


// // *** 上移 自定义索引
// function exUp(e) {
//     // 获取索引
//     var index = parseInt(e.getAttribute('data-index'))
//     if (index == 0) {
//         return
//     }
//     e.setAttribute('data-index', parseInt(index) - 1)
//     $(".moveup").eq(parseInt(index) - 1).attr("data-index", index)
//     $(".movedown").eq(parseInt(index) - 1).attr("data-index", index)
//     $(".movedown").eq(parseInt(index)).attr("data-index", index - 1)
//     var exItem = $(".exchangeItem");
//     var ex = exItem.eq(index - 1).prop("outerHTML");
//     exItem.eq(index - 1).prop("outerHTML", exItem.eq(index).prop("outerHTML"))
//     exItem.eq(index).prop("outerHTML", ex)
// }
// // 下移 自定义索引
// function exDown(e) {
//     // 获取索引
//     var index = parseInt(e.getAttribute('data-index'))
//     console.log(index)
//     console.log($(".movedown").length - 1)
//     if (index >= $(".movedown").length -1) {
//         return
//     }
//     e.setAttribute('data-index', parseInt(index) + 1)
//     $(".movedown").eq(parseInt(index) + 1).attr("data-index", index)
//     $(".moveup").eq(parseInt(index) + 1).attr("data-index", index)
//     $(".moveup").eq(parseInt(index)).attr("data-index", index + 1)
//     var exItem = $(".exchangeItem");
//     var ex = exItem.eq(index + 1).prop("outerHTML");
//     exItem.eq(index + 1).prop("outerHTML", exItem.eq(index).prop("outerHTML"))
//     exItem.eq(index).prop("outerHTML", ex)
// }
//删除 索引-1
// *** 上移 自定义索引
function exUp(e){
    // 获取索引
    // var index=parseInt(e.getAttribute('data-index'))
    // if(index==0){return}
    // e.setAttribute('data-index',parseInt(index)-1)
    // $(".moveup").eq(parseInt(index)-1).attr("data-index",index)
    // $(".movedown").eq(parseInt(index)-1).attr("data-index",index)
    // $(".movedown").eq(parseInt(index)).attr("data-index",index-1)
    // var exItem=$(".exchangeItem");
    // var ex=exItem.eq(index-1).prop("outerHTML");
    // exItem.eq(index-1).prop("outerHTML",exItem.eq(index).prop("outerHTML"))
    // exItem.eq(index).prop("outerHTML",ex)
    
    // 新版
    if($(e).parent().parent().parent().prev().prop("outerHTML")==undefined){return}
    var ex=$(e).parent().parent().parent().prop("outerHTML");
    var ex1=$(e).parent().parent().parent().prev().prop("outerHTML");
    $(e).parent().parent().parent().prev().prop("outerHTML",ex);
    $(e).parent().parent().parent().prop("outerHTML",ex1);
    
    }
    // 下移 自定义索引
    function exDown(e){
    // 获取索引
    // var index=parseInt(e.getAttribute('data-index'))
    // console.log(index)
    // console.log($(".movedown").length-1)
    // if(index>=$(".movedown").length-1){return}
    // e.setAttribute('data-index',parseInt(index)+1)
    // $(".movedown").eq(parseInt(index)+1).attr("data-index",index)
    // $(".moveup").eq(parseInt(index)+1).attr("data-index",index)
    // $(".moveup").eq(parseInt(index)).attr("data-index",index+1)
    // var exItem=$(".exchangeItem");
    // var ex=exItem.eq(index+1).prop("outerHTML");
    // exItem.eq(index+1).prop("outerHTML",exItem.eq(index).prop("outerHTML"))
    // exItem.eq(index).prop("outerHTML",ex)
    
    // 新版
    if($(e).parent().parent().parent().next().prop("outerHTML")==undefined){return}
    var ex=$(e).parent().parent().parent().prop("outerHTML");
    var ex1=$(e).parent().parent().parent().next().prop("outerHTML");
    $(e).parent().parent().parent().next().prop("outerHTML",ex);
    $(e).parent().parent().parent().prop("outerHTML",ex1);
    }
    // 删除
    function exDel(e){
    $(e).parent().parent().parent().prop("outerHTML","")
    }