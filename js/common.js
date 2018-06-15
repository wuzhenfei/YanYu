var baseUrl = 'http://47.92.104.89:8081'; //定义api接口地址
// 手机号验证
function isPhoneNo(phone) {
    var pattern = /^1[345678]\d{9}$/;
    return pattern.test(phone);
};

// 解析url地址参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

// 下载app，判断手机设备类型
function downloadApp() { 
    var u = navigator.userAgent; 
    var ua = navigator.userAgent.toLowerCase(); 
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端   
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
    if (ua.match(/MicroMessenger/i) == "micromessenger") { //微信内置浏览器
        alert('微信内置浏览器')
        // window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=应用名 '
    } else {  
        if (isiOS) {         
            alert('isiOS');
        } else if (isAndroid) {   
            alert('isAndroid')
        } else {   
            alert(111) 
        }  
    }      
}

// rem适配不同尺寸页面
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            /*docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';*/
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);