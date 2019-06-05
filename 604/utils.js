/**
 * 获取指定查询字
 */
function getQueryString(name) {
    var reg = new RegExp('(^|&)'+ name +'=([^&]*)(&|$)');
        r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  decodeURI(r[2]); 
    return null;
}

function fen2yuan(fen){
   return Number.parseFloat(Number(fen)/100).toFixed(2);
}

/// 获取值小于max，长度为num的的随机数集合
function getRandoms(max, num){ 
   var set = new Set();
   while(set.size<num){ 
     set.add(Math.floor(Math.random()*Math.floor(max)));
   }
   return set; 
}
// 给<img 加上alt属性（紧跟在图片后，在 [[alt描述]] 符号内的文字作为alt属性）
function addAlt2Img(html){
      let regex = new RegExp('<img.*?>\\s*\\[{2}(.+?)\\]{2}','g')
      let regex2=new RegExp('<img(\\s+alt=".*?")?\\s+','g')
      let regex3=new RegExp('\\s+|<br>+','g')
      var newHtml = html;
      window.html = html;
      while ((group= regex.exec(html)) !== null) {
        if(group[1].trim().length) {
          console.log(group[0])
          let str = group[0].replace(regex2, '<img alt="'+group[1].replace(regex3,'')+'" ');
          str = str.substring(0, str.indexOf('[['))
          newHtml=newHtml.replace(group[0], str);
        }
      }
      return newHtml;
    }

/**
 * 查询字转json对象字符串
 * @param queryString
 */
function queryString2jsonString(queryString){
  var arr = queryString.split('&'),
      obj ={};
  for(var i=0;i<arr.length;i++){
    var f = arr[i].split('=');
    obj[f[0]]=f[1];
  }
  return JSON.stringify(obj);
}

/**
 * 是电话吗？
 * @param phone
 * @returns {boolean}
 */
function isPhone(phone) {
  return new RegExp(/^1[34578][0-9]-?[0-9]{4}-?[0-9]{4}$/g).test(phone)
  ||new RegExp(/^(\(?0[0-9]{2,3}\)?-?)?[0-9]{7,8}$/g).test(phone);
}

/**
 * 移动设备信息
 */
function devInfo(){
  let userAgent = global.navigator.userAgent;
  var t = {};
  t.inAndroid = /Android/i.test(userAgent);
  t.inIOS = /iPhone|iPad|iPod/i.test(userAgent);
  t.inMicroMessenger = /MicroMessenger/i.test(userAgent);
  t.inWindowsWechat = /WindowsWechat/i.test(userAgent);
  t.isWIFI = /WIFI/i.test(userAgent);
  return t;
}
// 转自：千絮泠泉 https://1971161579.iteye.com/blog/2430264