
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/logins","pages/login/login-s","pages/login/login_forgetPassword","pages/login/login_login","pages/login/login_securityCode","pages/home/home1","pages/home/zhuguan","pages/home/homejishu","pages/order/sgdetailAll","pages/order/orderAll","pages/order/shDetail","pages/order/sgDetail","pages/newfrom/newfrom","pages/order/sgDetail","pages/newfrom/ArtisanTxt","pages/newfrom/fromArtisan","pages/newfrom/newDetail","pages/newfrom/fromDetail","pages/home/home","pages/order/shigongxiangqings","pages/order/shenhexiangqing","pages/order/weitongguo","pages/order/zhibaoxiangqing","pages/feedback/feedback-all","pages/feedback/fankui","pages/scheme/scheme","pages/scheme/scheme_ation","pages/after-sale/after-sale","pages/after-sale/kaigong","pages/after-sale/shouhouxiangqing","pages/after-sale/shouhouchuli","pages/after-sale/chulifankui","pages/order/chakanwenjuan","pages/order/wenjuandiaocha","pages/order/quxiao","pages/home/neworder/neworder","pages/home/neworder/ordera","pages/home/neworder/orderb","pages/home/neworder/fangan","pages/home/neworder/daiquerenxiangqing","pages/home/neworder/weitongguoxiangqing","pages/home/neworder/yiquerenxiangqing","pages/home/neworder/dingdanzhongxin","pages/home/neworder/shezhifangan","pages/home/neworder/xuanzefangan","pages/home/neworder/dyixiangqing","pages/home/neworder/dmeixiangqing","pages/home/zgorder/zgNewOrder","pages/home/zgorder/zgOrder","pages/home/zgorder/zgFangan","pages/home/zgorder/zgHeTong","pages/home/zgorder/zgSHOrder","pages/home/zgorder/zgshouhchuli","pages/home/zgorder/zgyuangong","pages/home/zgorder/zgnews","pages/home/zgorder/zgnewa","pages/home/zgorder/xuanzejishu","pages/home/zgorder/xuanzejishus","pages/home/zgorder/zgrenyuan","pages/home/zgorder/zghetongs","pages/home/zgorder/zgshouhouxiangqing","pages/home/zgorder/butongyi","pages/home/zgorder/zgfanganxiangqing","pages/home/zgorder/zgfanganquxiao","pages/home/zgorder/zgfanganNew","pages/home/zgorder/zgshigong","pages/home/zgorder/zgshigongxiangqing","pages/home/zgorder/zgshenhexiangqing","pages/home/zgorder/zgfanganxiangqings","pages/home/zgorder/zgweitongguo","pages/home/zgorder/zgkehuquerenxiangqing","pages/home/zgorder/zgzhibaoxiangqing","pages/home/zgorder/zgwanchengxiangqing","pages/home/zgorder/zgquxiao"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#F8F8F8"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"room_ manage","compilerVersion":"2.8.13","entryPagePath":"pages/login/logins","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/logins","meta":{"isQuit":true},"window":{"titleNView":false}},{"path":"/pages/login/login-s","meta":{},"window":{"titleNView":false}},{"path":"/pages/login/login_forgetPassword","meta":{},"window":{"titleNView":false}},{"path":"/pages/login/login_login","meta":{},"window":{"titleNView":false}},{"path":"/pages/login/login_securityCode","meta":{},"window":{"titleNView":false}},{"path":"/pages/home/home1","meta":{},"window":{"navigationBarTitleText":"登录选项"}},{"path":"/pages/home/zhuguan","meta":{},"window":{"titleNView":false}},{"path":"/pages/home/homejishu","meta":{},"window":{"titleNView":false}},{"path":"/pages/order/sgdetailAll","meta":{},"window":{"navigationBarTitleText":"施工详情"}},{"path":"/pages/order/orderAll","meta":{},"window":{"navigationBarTitleText":"订单中心"}},{"path":"/pages/order/shDetail","meta":{},"window":{"navigationBarTitleText":"订单中心"}},{"path":"/pages/order/sgDetail","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/newfrom/newfrom","meta":{},"window":{"navigationBarTitleText":"新订单"}},{"path":"/pages/newfrom/ArtisanTxt","meta":{},"window":{"navigationBarTitleText":"选择技术人员"}},{"path":"/pages/newfrom/fromArtisan","meta":{},"window":{"navigationBarTitleText":"选择技术人员"}},{"path":"/pages/newfrom/newDetail","meta":{},"window":{"navigationBarTitleText":"新订单"}},{"path":"/pages/newfrom/fromDetail","meta":{},"window":{"navigationBarTitleText":"新订单"}},{"path":"/pages/home/home","meta":{},"window":{"titleNView":false}},{"path":"/pages/order/shigongxiangqings","meta":{},"window":{"navigationBarTitleText":"施工详情"}},{"path":"/pages/order/shenhexiangqing","meta":{},"window":{"navigationBarTitleText":"审核详情"}},{"path":"/pages/order/weitongguo","meta":{},"window":{"navigationBarTitleText":"未通过的详情"}},{"path":"/pages/order/zhibaoxiangqing","meta":{},"window":{"navigationBarTitleText":"质保详情"}},{"path":"/pages/feedback/feedback-all","meta":{},"window":{"navigationBarTitleText":"反馈"}},{"path":"/pages/feedback/fankui","meta":{},"window":{"navigationBarTitleText":"反馈"}},{"path":"/pages/scheme/scheme","meta":{},"window":{"navigationBarTitleText":"方案"}},{"path":"/pages/scheme/scheme_ation","meta":{},"window":{"navigationBarTitleText":"方案详情"}},{"path":"/pages/after-sale/after-sale","meta":{},"window":{"navigationBarTitleText":"售后订单"}},{"path":"/pages/after-sale/kaigong","meta":{},"window":{"navigationBarTitleText":"售后开工"}},{"path":"/pages/after-sale/shouhouxiangqing","meta":{},"window":{"navigationBarTitleText":"售后订单详情"}},{"path":"/pages/after-sale/shouhouchuli","meta":{},"window":{"navigationBarTitleText":"售后处理"}},{"path":"/pages/after-sale/chulifankui","meta":{},"window":{"navigationBarTitleText":"处理反馈"}},{"path":"/pages/order/chakanwenjuan","meta":{},"window":{"navigationBarTitleText":"查看问卷"}},{"path":"/pages/order/wenjuandiaocha","meta":{},"window":{"navigationBarTitleText":"问卷调查"}},{"path":"/pages/order/quxiao","meta":{},"window":{"navigationBarTitleText":"已取消的订单详情"}},{"path":"/pages/home/neworder/neworder","meta":{},"window":{"navigationBarTitleText":"新订单"}},{"path":"/pages/home/neworder/ordera","meta":{},"window":{"navigationBarTitleText":"新订单"}},{"path":"/pages/home/neworder/orderb","meta":{},"window":{"navigationBarTitleText":"新订单"}},{"path":"/pages/home/neworder/fangan","meta":{},"window":{"navigationBarTitleText":"方案"}},{"path":"/pages/home/neworder/daiquerenxiangqing","meta":{},"window":{"navigationBarTitleText":"待确认的方案详情"}},{"path":"/pages/home/neworder/weitongguoxiangqing","meta":{},"window":{"navigationBarTitleText":"未通过的方案详情"}},{"path":"/pages/home/neworder/yiquerenxiangqing","meta":{},"window":{"navigationBarTitleText":"已确认的方案详情"}},{"path":"/pages/home/neworder/dingdanzhongxin","meta":{},"window":{"navigationBarTitleText":"已确认的方案详情"}},{"path":"/pages/home/neworder/shezhifangan","meta":{},"window":{"navigationBarTitleText":"设置方案"}},{"path":"/pages/home/neworder/xuanzefangan","meta":{},"window":{"navigationBarTitleText":"选择方案"}},{"path":"/pages/home/neworder/dyixiangqing","meta":{},"window":{"navigationBarTitleText":"已完成的订单详情"}},{"path":"/pages/home/neworder/dmeixiangqing","meta":{},"window":{"navigationBarTitleText":"已取消的订单详情"}},{"path":"/pages/home/zgorder/zgNewOrder","meta":{},"window":{"navigationBarTitleText":"新订单"}},{"path":"/pages/home/zgorder/zgOrder","meta":{},"window":{"navigationBarTitleText":"订单中心"}},{"path":"/pages/home/zgorder/zgFangan","meta":{},"window":{"navigationBarTitleText":"方案"}},{"path":"/pages/home/zgorder/zgHeTong","meta":{},"window":{"navigationBarTitleText":"合同"}},{"path":"/pages/home/zgorder/zgSHOrder","meta":{},"window":{"navigationBarTitleText":"售后订单"}},{"path":"/pages/home/zgorder/zgshouhchuli","meta":{},"window":{"navigationBarTitleText":"售后处理"}},{"path":"/pages/home/zgorder/zgyuangong","meta":{},"window":{"navigationBarTitleText":"员工"}},{"path":"/pages/home/zgorder/zgnews","meta":{},"window":{"navigationBarTitleText":"新订单"}},{"path":"/pages/home/zgorder/zgnewa","meta":{},"window":{"navigationBarTitleText":"新订单"}},{"path":"/pages/home/zgorder/xuanzejishu","meta":{},"window":{"navigationBarTitleText":"选择技术人员"}},{"path":"/pages/home/zgorder/xuanzejishus","meta":{},"window":{"navigationBarTitleText":"选择技术人员"}},{"path":"/pages/home/zgorder/zgrenyuan","meta":{},"window":{"navigationBarTitleText":"人员"}},{"path":"/pages/home/zgorder/zghetongs","meta":{},"window":{"navigationBarTitleText":"合同"}},{"path":"/pages/home/zgorder/zgshouhouxiangqing","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/home/zgorder/butongyi","meta":{},"window":{"navigationBarTitleText":"不同意"}},{"path":"/pages/home/zgorder/zgfanganxiangqing","meta":{},"window":{"navigationBarTitleText":"方案详情"}},{"path":"/pages/home/zgorder/zgfanganquxiao","meta":{},"window":{"navigationBarTitleText":"方案"}},{"path":"/pages/home/zgorder/zgfanganNew","meta":{},"window":{"navigationBarTitleText":"新订单"}},{"path":"/pages/home/zgorder/zgshigong","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/home/zgorder/zgshigongxiangqing","meta":{},"window":{"navigationBarTitleText":"施工详情"}},{"path":"/pages/home/zgorder/zgshenhexiangqing","meta":{},"window":{"navigationBarTitleText":"审核详情"}},{"path":"/pages/home/zgorder/zgfanganxiangqings","meta":{},"window":{"navigationBarTitleText":"方案详情"}},{"path":"/pages/home/zgorder/zgweitongguo","meta":{},"window":{"navigationBarTitleText":"未通过的详情"}},{"path":"/pages/home/zgorder/zgkehuquerenxiangqing","meta":{},"window":{"navigationBarTitleText":"客户确认详情"}},{"path":"/pages/home/zgorder/zgzhibaoxiangqing","meta":{},"window":{"navigationBarTitleText":"质保详情"}},{"path":"/pages/home/zgorder/zgwanchengxiangqing","meta":{},"window":{"navigationBarTitleText":"完成详情"}},{"path":"/pages/home/zgorder/zgquxiao","meta":{},"window":{"navigationBarTitleText":"已取消的订单详情"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
