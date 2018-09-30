webpackJsonp([2],{623:function(t,e,n){"use strict";function o(t){c||(n(749),n(751))}Object.defineProperty(e,"__esModule",{value:!0});var i=n(655),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var a=n(758),l=n.n(a),c=!1,u=n(24),d=o,p=u(r.a,l.a,!1,d,null,null);p.options.__file="src\\views\\qrcode\\wx\\manager.vue",e.default=p.exports},625:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(104),i=function(t){return t&&t.__esModule?t:{default:t}}(o),r={};r.devLocation="development"==i.default?"http://localhost:8082":"https://pac.mybank.cc",r.env="development"==i.default?"/api":"",r.dataUrl="development"==i.default?"../":"",r.imgUploadUrl=("development"==i.default?"/api":"")+"/cmn/act01",r.editBtn=function(t,e,n){return e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.edit(n.row)}}},"编辑")},r.viewBtn=function(t,e,n){return e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.view(n.row.id)}}},"查看")},r.delBtn=function(t,e,n){return e("Poptip",{props:{confirm:"",title:"您确定要删除这条数据吗？"},style:{marginRight:"5px"},on:{"on-ok":function(){t.del(n.row.id)}}},[e("Button",{props:{type:"error",size:"small"}},"删除")])},r.stopBtn=function(t,e,n){return e("Poptip",{props:{confirm:"",title:"您确定要禁用这条数据吗？"},style:{marginRight:"5px"},on:{"on-ok":function(){t.stop(n.row.id)}}},[e("Button",{props:{type:"error",size:"small"}},"禁用")])},r.actBtn=function(t,e,n){return e("Poptip",{props:{confirm:"",title:"您确定要激活这条数据吗？"},style:{marginRight:"5px"},on:{"on-ok":function(){t.active(n.row.id)}}},[e("Button",{props:{type:"success",size:"small"}},"激活")])},r.status=[{value:"0",label:"正常"},{value:"1",label:"禁用"}],r.yon=[{value:"0",label:"是"},{value:"1",label:"否"}],r.checkStatus=[{value:"00",label:"审核通过"},{value:"01",label:"等待审核"},{value:"02",label:"审核未通过"}],e.default=r},626:function(t,e,n){"use strict";e.__esModule=!0;var o=n(627),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(t,e,n){return e in t?(0,i.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},627:function(t,e,n){t.exports={default:n(628),__esModule:!0}},628:function(t,e,n){n(629);var o=n(19).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},629:function(t,e,n){var o=n(43);o(o.S+o.F*!n(44),"Object",{defineProperty:n(39).f})},630:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){for(var n=0;n<e.length;n++)if(t===e[n])return!0;return!1}function r(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function s(t){if($)return 0;if(t||void 0===q){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var n=document.createElement("div"),o=n.style;o.position="absolute",o.top=0,o.left=0,o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",n.appendChild(e),document.body.appendChild(n);var i=e.offsetWidth;n.style.overflow="scroll";var r=e.offsetWidth;i===r&&(r=n.clientWidth),document.body.removeChild(n),q=i-r}return q}function a(t){return t.replace(z,function(t,e,n,o){return o?n.toUpperCase():n}).replace(I,"Moz$1")}function l(t,e){if(!t||!e)return null;"float"===(e=a(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}function c(t){return t.toString()[0].toUpperCase()+t.toString().slice(1)}function u(t,e,n,o){n=c(n),o=c(o),console.error("[iView warn]: Invalid prop: type check failed for prop "+e+". Expected "+n+", got "+o+". (found in component: "+t+")")}function d(t){var e=Object.prototype.toString;return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[e.call(t)]}function p(t){var e=d(t),n=void 0;if("array"===e)n=[];else{if("object"!==e)return t;n={}}if("array"===e)for(var o=0;o<t.length;o++)n.push(p(t[o]));else if("object"===e)for(var i in t)n[i]=p(t[i]);return n}function f(t){function e(n,o,i){if(n!==o){var r=n+i>o?o:n+i;n>o&&(r=n-i<o?o:n-i),t===window?window.scrollTo(r,r):t.scrollTop=r,window.requestAnimationFrame(function(){return e(r,o,i)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var r=Math.abs(n-o);e(n,o,Math.ceil(r/i*50))}function h(t,e,n){n="string"==typeof e?[e]:e;for(var o=t.$parent,i=o.$options.name;o&&(!i||n.indexOf(i)<0);)(o=o.$parent)&&(i=o.$options.name);return o}function g(t,e){var n=t.$children,o=null;if(n.length){var i=!0,r=!1,s=void 0;try{for(var a,l=(0,S.default)(n);!(i=(a=l.next()).done);i=!0){var c=a.value;if(c.$options.name===e){o=c;break}if(o=g(c,e))break}}catch(t){r=!0,s=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw s}}}return o}function m(t,e){return t.$children.reduce(function(t,n){n.$options.name===e&&t.push(n);var o=m(n,e);return t.concat(o)},[])}function v(t,e){var n=[],o=t.$parent;return o?(o.$options.name===e&&n.push(o),n.concat(v(o,e))):[]}function w(t,e){var n=t.$parent.$children.filter(function(t){return t.$options.name===e}),o=n.indexOf(t);return n.splice(o,1),n}function x(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}function _(t,e){if(t){for(var n=t.className,o=(e||"").split(" "),i=0,r=o.length;i<r;i++){var s=o[i];s&&(t.classList?t.classList.add(s):x(t,s)||(n+=" "+s))}t.classList||(t.className=n)}}function y(t,e){if(t&&e){for(var n=e.split(" "),o=" "+t.className+" ",i=0,r=n.length;i<r;i++){var s=n[i];s&&(t.classList?t.classList.remove(s):x(t,s)&&(o=o.replace(" "+s+" "," ")))}t.classList||(t.className=O(o))}}function b(){if("undefined"!=typeof window){var t=function(t){return{media:t,matches:!1,on:function(){},off:function(){}}};window.matchMedia=window.matchMedia||t}}Object.defineProperty(e,"__esModule",{value:!0}),e.dimensionMap=e.findComponentUpward=e.deepCopy=e.firstUpperCase=e.MutationObserver=void 0;var M=n(234),S=o(M);e.oneOf=i,e.camelcaseToHyphen=r,e.getScrollBarSize=s,e.getStyle=l,e.warnProp=u,e.scrollTop=f,e.findComponentDownward=g,e.findComponentsDownward=m,e.findComponentsUpward=v,e.findBrothersComponents=w,e.hasClass=x,e.addClass=_,e.removeClass=y,e.setMatchMedia=b;var R=n(45),C=o(R),$=C.default.prototype.$isServer,q=void 0,z=(e.MutationObserver=!$&&(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver||!1),/([\:\-\_]+(.))/g),I=/^moz([A-Z])/;e.firstUpperCase=c,e.deepCopy=p,e.findComponentUpward=h;var O=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")};e.dimensionMap={xs:"480px",sm:"768px",md:"992px",lg:"1200px",xl:"1600px"}},655:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(233),r=o(i),s=n(103),a=n(625),l=o(a),c=n(753),u=o(c);e.default={components:{Button:u.default},computed:(0,r.default)({},(0,s.mapState)({qrcodeWx:function(t){return t.qrcodeWx.qrcodeWx},loginBtnShow:function(t){return t.qrcodeWx.loginBtnShow},loginInfoShow:function(t){return t.qrcodeWx.loginInfoShow},qrCount:function(t){return t.qrcodeWx.qrCount}})),methods:{del:function(t){var e=this;this.$store.dispatch("qrcodeWx_del",{id:t}).then(function(t){e.ret()})},ret:function(){this.$router.push({path:"/qrcode/wx"})},login:function(){var t=this,e=this;this.$store.dispatch("qrcodeWx_login",{wxAcct:e.qrcodeWx.wxAcct}).then(function(n){e.$store.commit("wxManager_updateIsLoginShow",!1),e.cTime=setInterval(function(){t.getLoginImg()},1e3)})},logout:function(){var t=this;this.$store.dispatch("qrcodeWx_logout",{wxAcct:t.qrcodeWx.wxAcct}).then(function(e){e.resCode&&"success"==e.resCode&&(console.info("微信退出成功"),t.$store.commit("wxManager_set",{id:t.wxID}))})},getLoginImg:function(){var t=this;console.info("执行轮询图片");var e=this;e.queryLoginStatus()||this.$store.dispatch("qrcodeWx_getLoginImg",{wxAcct:e.qrcodeWx.wxAcct}).then(function(n){""!==n.imgData&&(e.imgData="data:image/gif;base64,"+n.imgData,e.loginImgShow=!0,clearInterval(e.cTime),e.dTime=setInterval(function(){t.queryLoginStatus()},1e3))})},queryLoginStatus:function(){var t=this;console.info("查询状态");var e=this;this.$store.dispatch("qrcodeWx_queryLoginStatus",{wxID:e.qrcodeWx.id}).then(function(n){return"0"===n.isLogin&&(clearInterval(e.dTime),t.$store.commit("wxManager_set",{id:e.qrcodeWx.id}),e.loginImgShow=!1,e.imgData="",!0)})},handleBeforeUpload:function(t,e){this.modalLoading=!0,this.isResMsg=!1,this.spinShow=!0},handleSuccessZip:function(t,e){this.isResMsgType="success",this.uploadResMsgTitle="文件处理成功",this.uploadResMsg="文件 "+e.name+" 已处理，共记录 "+t.fileCount+" 个文件。",this.isResMsg=!0,this.spinShow=!1},handleErrorZip:function(t,e){this.isResMsgType="error",this.uploadResMsgTitle="文件处理失败",this.uploadResMsg="共处理 "+t.fileCount+" 个文件。",this.isResMsg=!0,this.spinShow=!1},handleFormatError:function(t){this.isResMsgType="error",this.uploadResMsgTitle="文件格式不正确",this.uploadResMsg="文件 "+t.name+" 格式不正确，请上传 zip 格式的压缩包。",this.isResMsg=!0,this.spinShow=!1},handleMaxSize:function(t){this.isResMsgType="error",this.uploadResMsgTitle="超出文件大小限制",this.uploadResMsg="文件 "+t.name+" 太大，不能超过 20M。",this.isResMsg=!0,this.spinShow=!1}},mounted:function(){this.uploadResMsg="",this.wxID=this.$route.params.id,this.$store.commit("wxManager_set",{id:this.$route.params.id})},data:function(){return{cTime:{},dTime:{},loginImgShow:!1,imgData:"",uploadResMsg:"",uploadResMsgTitle:"",isResMsg:!1,isResMsgType:"error",wxID:"",uploadAction:l.default.env+"/qr00/upQrZip",spinShow:!1}}}},656:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(626),r=o(i),s=n(754),a=o(s),l=n(630);e.default={name:"Button",components:{Icon:a.default},props:{type:{validator:function(t){return(0,l.oneOf)(t,["primary","ghost","dashed","text","info","success","warning","error","default"])}},shape:{validator:function(t){return(0,l.oneOf)(t,["circle","circle-outline"])}},size:{validator:function(t){return(0,l.oneOf)(t,["small","large","default"])}},loading:Boolean,disabled:Boolean,htmlType:{default:"button",validator:function(t){return(0,l.oneOf)(t,["button","submit","reset"])}},icon:String,long:{type:Boolean,default:!1}},data:function(){return{showSlot:!0}},computed:{classes:function(){var t;return["ivu-btn",(t={},(0,r.default)(t,"ivu-btn-"+this.type,!!this.type),(0,r.default)(t,"ivu-btn-long",this.long),(0,r.default)(t,"ivu-btn-"+this.shape,!!this.shape),(0,r.default)(t,"ivu-btn-"+this.size,!!this.size),(0,r.default)(t,"ivu-btn-loading",null!=this.loading&&this.loading),(0,r.default)(t,"ivu-btn-icon-only",!this.showSlot&&(!!this.icon||this.loading)),t)]}},methods:{handleClick:function(t){this.$emit("click",t)}},mounted:function(){this.showSlot=void 0!==this.$slots.default}}},657:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"Icon",props:{type:String,size:[Number,String],color:String},computed:{classes:function(){return"ivu-icon ivu-icon-"+this.type},styles:function(){var t={};return this.size&&(t["font-size"]=this.size+"px"),this.color&&(t.color=this.color),t}}}},749:function(t,e,n){var o=n(750);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(61)("08b93f7d",o,!1,{})},750:function(t,e,n){e=t.exports=n(60)(!1),e.push([t.i,"\n.demo-spin-icon-load {\n    animation: ani-demo-spin 1s linear infinite;\n}\n@keyframes ani-demo-spin {\nfrom {\n        transform: rotate(0deg);\n}\n50% {\n        transform: rotate(180deg);\n}\nto {\n        transform: rotate(360deg);\n}\n}\n.demo-spin-col {\n    height: 300px;\n    position: relative;\n    padding: 20px;\n}\n",""])},751:function(t,e,n){var o=n(752);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(61)("f3d26c54",o,!1,{})},752:function(t,e,n){e=t.exports=n(60)(!1),e.push([t.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n",""])},753:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(656),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var s=n(757),a=n.n(s),l=n(24),c=l(i.a,a.a,!1,null,null,null);c.options.__file="node_modules\\iview\\src\\components\\button\\button.vue",e.default=c.exports},754:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(755),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=i.default},755:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(657),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var s=n(756),a=n.n(s),l=n(24),c=l(i.a,a.a,!1,null,null,null);c.options.__file="node_modules\\iview\\src\\components\\icon\\icon.vue",e.default=c.exports},756:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{class:t.classes,style:t.styles})},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.default=r},757:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.classes,attrs:{type:t.htmlType,disabled:t.disabled},on:{click:t.handleClick}},[t.loading?n("Icon",{staticClass:"ivu-load-loop",attrs:{type:"load-c"}}):t._e(),t._v(" "),t.icon&&!t.loading?n("Icon",{attrs:{type:t.icon}}):t._e(),t._v(" "),t.showSlot?n("span",{ref:"slot"},[t._t("default")],2):t._e()],1)},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.default=r},758:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",[n("Col",{attrs:{span:"24"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"help-buoy"}}),t._v("\n                    微信账号管理页面\n                ")],1),t._v(" "),n("Row",{staticStyle:{padding:"10px 20px 20px 20px"}},[n("Col",{attrs:{span:"24"}},[n("span",{staticStyle:{"font-size":"24px","vertical-align":"middle","padding-right":"50px"}},[t._v(" 微信账号："+t._s(t.qrcodeWx.wxAcct))]),t._v(" "),n("span",{staticStyle:{"font-size":"15px","vertical-align":"bottom","padding-right":"50px"}},[t._v(" 登录状态："+t._s(t.qrcodeWx.isLoginTxt))]),t._v(" "),n("Poptip",{attrs:{confirm:"",placement:"bottom",title:"删除微信账号，将删除所有该账号二维码图片，确认删除吗?"},on:{"on-ok":function(e){t.del(t.wxID)}}},[n("Button",{attrs:{type:"error",icon:"ios-trash",size:"large"},on:{click:function(t){}}},[t._v("删除账号")])],1),t._v(" "),n("Button",{attrs:{type:"success",icon:"refresh",size:"large"},on:{click:t.ret}},[t._v("返回")])],1)],1),t._v(" "),n("Row",[n("Col",{attrs:{span:"12"}},[n("Card",{staticStyle:{"margin-right":"5px",height:"400px"}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("上传支付二维码图片 "),n("span",{staticStyle:{"font-size":"14px !important","font-weight":"normal !important"}},[t._v(" （已有二维码图片数量："+t._s(t.qrCount)+"）")])]),t._v(" "),n("div",{staticClass:"demo-spin-col"},[n("p",{attrs:{align:"center"}},[n("Upload",{attrs:{"on-success":t.handleSuccessZip,"on-error":t.handleErrorZip,format:["zip"],"max-size":20480,"show-upload-list":!1,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,action:t.uploadAction,data:{id:t.wxID}}},[n("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("点击图片文件压缩包（.zip）")])],1),t._v(" "),t.spinShow?n("Spin",{attrs:{fix:""}},[n("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"load-c",size:"30"}}),t._v(" "),n("div",{staticStyle:{"font-size":"14px"}},[t._v("文件正在处理，请耐心等待...")])],1):t._e(),t._v(" "),t.isResMsg?n("Alert",{staticStyle:{width:"400px","margin-top":"20px"},attrs:{type:t.isResMsgType,"show-icon":""}},[n("div",{attrs:{align:"left"}},[t._v(" "+t._s(t.uploadResMsgTitle))]),t._v(" "),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v(t._s(t.uploadResMsg))])]):t._e()],1)])])],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Card",{staticStyle:{"margin-left":"5px",height:"400px"}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("微信登陆")]),t._v(" "),n("p",{attrs:{align:"center"}},[t.loginBtnShow?n("Button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",icon:"person",size:"large"},on:{click:t.login}},[t._v("微信登录")]):t._e(),t._v(" "),t.loginInfoShow?n("Button",{staticStyle:{"margin-top":"20px"},attrs:{type:"error",icon:"person",size:"large"},on:{click:t.logout}},[t._v("微信状态重置（非异常状况不可使用此功能）")]):t._e()],1),t._v(" "),n("p",{attrs:{align:"center"}},[t.loginImgShow?n("span",{staticStyle:{"margin-top":"30px"}},[t._v("扫描下方二维码登录微信")]):t._e(),t._v(" "),n("br"),t._v(" "),t.loginImgShow?n("img",{staticStyle:{"margin-top":"10px"},attrs:{id:"images",src:t.imgData,width:"200px"}}):t._e(),t._v(" "),t.loginInfoShow?n("Alert",{staticStyle:{width:"400px","margin-top":"20px"},attrs:{type:"success","show-icon":""}},[n("div",{attrs:{align:"left"}},[t._v(" 微信已登录")]),t._v(" "),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("此微信已登录，可以正常使用。")])]):t._e()],1)])],1)],1)],1)],1)],1),t._v(" "),n("Row",[n("Col",{attrs:{span:"24"}})],1)],1)},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.default=r}});