//判断数字
function isNumber(val){
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)){
        return true;
    }else{
        return false;
    }

}

// 验证中文名称
function isChinaName(name) {
    var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
    return pattern.test(name);
}

// 验证手机号
function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}

// 验证手机号并返回错误 
function isPhoneOrSendErrMsg(phone) {
    var pattern = /^1[34578]\d{9}$/;
    var bv_flag = pattern.test(phone);
    if(bv_flag ==false)
    {
      $.toast('请输入正确格式的手机号!', 'text');
      return ;
    }
    
}

// 验证身份证 
function isCardNo(card) {
    var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return pattern.test(card);
}
//获取上传文件的拓展名
function suffix(file_name){
    var result =/\.[^\.]+/.exec(file_name);
    return result;
}

// 获取当前时间
function p(s) {
    return s < 10 ? '0' + s: s;
}
function get_cur_time()
{
    var myDate = new Date();
    //获取当前年
    var year=myDate.getFullYear();
    //获取当前月
    var month=myDate.getMonth()+1;
    //获取当前日
    var date=myDate.getDate(); 
    var h=myDate.getHours();       //获取当前小时数(0-23)
    var m=myDate.getMinutes();     //获取当前分钟数(0-59)
    var s=myDate.getSeconds();  

    var now=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);
    return now;
}
/**
 * [objToStrMap 对象转为 Map]
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function objToStrMap(obj) 
{
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}
/**
 * Map 转为数组
 * @type {Map}
 */
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
[...myMap]


/**
 * 数组 转为 Map
 */
new Map([
  [true, 7],
  [{foo: 3}, ['abc']]
]);
/**
 * Map 转为对象
 * @param  {[type]} strMap [description]
 * @return {[type]}        [description]
 */
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}
/**
 * 对象转为 Map
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}
/**
 * JSON 转为 Map
 * @param  {[type]} jsonStr [description]
 * @return {[type]}         [description]
 */
function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}

function jsonToMap(jsonStr) 
{
  return new Map(JSON.parse(jsonStr));
}

function getShareBg()
{
    var html = '<div id="shareBg" style="display: block" onclick="closeShareBg()" class="shareBG ">\n' +
        '        <img src="/Public/Home/marketingTools/img/share.png" style="width: 100%;">\n' +
        '    </div>';
    $("body").append(html);
}

function closeShareBg()
{
    $("#shareBg").remove();
}




// 判断是否是图片格式
function check_Img(suffix_img)
{
  let bv_suffix_img_arr= ['.bmp','.jpeg','.gif','.psd','.png','.tiff','.tga','.eps','.jpg'];
  let bv_suffix_img = suffix_img.toLowerCase();
  
  console.log($.inArray(bv_suffix_img,bv_suffix_img_arr));

  if($.inArray(bv_suffix_img,bv_suffix_img_arr) != -1)
  {
     return true;
  }
  return false;
}
// 判断是否是视频格式
function check_video(suffix_video)
{
  let bv_suffix_video_arr= ['.rm','.rmvb','.mpeg1','.mpeg2',
                            '.mpeg3','.mpeg4', '.mov', '.mtv', 
                            '.dat', '.wmv', '.avi', '.3gp', 
                            '.amv', '.dmv', '.flv','.mp4'
                          ];
  let bv_suffix_video = suffix_video.toLowerCase();
  if($.inArray(bv_suffix_video,bv_suffix_video_arr) != -1)
  {
     return true;
  }
  return false;
}


//关注模态框开始
function getSubscribe(is_must = null,title='',pic_url='')
{

    var status = is_must == 'Y' ? '':'onclick="closeSubscribe1()"';

    //将当前的url写入数据库内
    var url = window.location.href;
    $.ajax({
        url: 'https://www.cnghjy.com/index.php/Home/Marking/insertSubscribeUrl',
        type: 'POST',
        data: {
            url: url,
            title: title,
            pic_url:pic_url
        },
        timeout: 5000,    //超时时间
        dataType: 'json',    //返回的数据格式：json/xml/html/script/jsonp/text
        success: function (data) {

            console.log(data);
            var html = '<div class="attention">\n' +
                '    <div id="attentionBG" '+status+' class="weui-form-preview-BG" style="z-index: 201">\n' +
                '        <div class="relative flexallcenter">\n' +
                '            <img src="'+data.data+'" style="position:absolute;width: 100px;height: 100px;z-index: 200;top: 118px;left: 77px;" alt="">\n' +
                '            <img id="attentionImg" onclick="closeSubscribe2()" style="width: 80%;z-index: 100;" src="/Public/Home/marketingTools/img/guanzhu.png" alt="">\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>';
            $("body").prepend(html);
        }
    })

}

function closeSubscribe1()
{
    $("#attentionBG").remove();
}

function closeSubscribe2()
{
    event.stopPropagation();
}

//关注模态框结束


