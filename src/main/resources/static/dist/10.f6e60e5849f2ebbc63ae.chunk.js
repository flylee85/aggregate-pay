webpackJsonp([10],{619:function(t,e,n){"use strict";function a(t){d||n(736)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(651),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var l=n(738),s=n.n(l),d=!1,u=n(24),c=a,p=u(o.a,s.a,!1,c,null,null);p.options.__file="src\\views\\mer\\merinfo\\main.vue",e.default=p.exports},625:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(104),r=function(t){return t&&t.__esModule?t:{default:t}}(a),o={};o.devLocation="development"==r.default?"http://localhost:8082":"https://pac.mybank.cc",o.env="development"==r.default?"/api":"/",o.dataUrl="development"==r.default?"../":"",o.imgUploadUrl=("development"==r.default?"/api":"")+"/cmn/act01",o.editBtn=function(t,e,n){return e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.edit(n.row)}}},"编辑")},o.viewBtn=function(t,e,n){return e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.view(n.row.id)}}},"查看")},o.delBtn=function(t,e,n){return e("Poptip",{props:{confirm:"",title:"您确定要删除这条数据吗？"},style:{marginRight:"5px"},on:{"on-ok":function(){t.del(n.row.id)}}},[e("Button",{props:{type:"error",size:"small"}},"删除")])},o.stopBtn=function(t,e,n){return e("Poptip",{props:{confirm:"",title:"您确定要禁用这条数据吗？"},style:{marginRight:"5px"},on:{"on-ok":function(){t.stop(n.row.id)}}},[e("Button",{props:{type:"error",size:"small"}},"禁用")])},o.actBtn=function(t,e,n){return e("Poptip",{props:{confirm:"",title:"您确定要激活这条数据吗？"},style:{marginRight:"5px"},on:{"on-ok":function(){t.active(n.row.id)}}},[e("Button",{props:{type:"success",size:"small"}},"激活")])},o.status=[{value:"0",label:"正常"},{value:"1",label:"禁用"}],o.yon=[{value:"0",label:"是"},{value:"1",label:"否"}],o.checkStatus=[{value:"00",label:"审核通过"},{value:"01",label:"等待审核"},{value:"02",label:"审核未通过"}],e.default=o},651:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(233),o=a(r),i=n(103),l=n(625),s=a(l);e.default={computed:(0,o.default)({},(0,i.mapState)({merList:function(t){return t.merInfo.merList},totalPage:function(t){return t.merInfo.totalPage},pageNumber:function(t){return t.merInfo.pageNumber},pageSize:function(t){return t.merInfo.pageSize},total:function(t){return t.merInfo.totalRow},merInfo:function(t){return t.merInfo.merInfo}})),methods:{search:function(t){this.$store.dispatch("merInfo_list",{search:this.searchKey,pageNumber:t,channelCode:"10000000"})},queryMerStatus:function(){var t=this;this.$store.dispatch("merInfo_queryStatus",{merNo:this.merNo}).then(function(e){if(console.log(e),"fail"==e.respCode)t.merStatusTxt=e.respMsg;else{var n=e.status;"SHZ"===n&&(t.merStatusTxt="审核中"),"SHTG"===n&&(t.merStatusTxt="审核通过"),"DDSH"===n&&(t.merStatusTxt="等待审核"),"SHJJ"===n&&(t.merStatusTxt="审核未通过")}}).catch(function(t){console.log(error)})},refresh:function(){this.$store.dispatch("merInfo_list",{search:this.searchKey})},handleBeforeUpload:function(t,e){this.modalLoading=!0},handleSuccessCard:function(t,e){this.merInfo.cardImg=t.resData,this.urlCard=s.default.devLocation+"/cmn/act04?picid="+this.merInfo.cardImg,this.showImgCard=!0,this.modalLoading=!1},handleSuccessCardZ:function(t,e){this.merInfo.cardZ=t.resData,this.urlCardZ=s.default.devLocation+"/cmn/act04?picid="+this.merInfo.cardZ,this.showImgCardZ=!0,this.modalLoading=!1},handleSuccessCardF:function(t,e){this.merInfo.cardF=t.resData,this.urlCardF=s.default.devLocation+"/cmn/act04?picid="+this.merInfo.cardF,this.showImgCardF=!0,this.modalLoading=!1},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请上传 jpg 或 png 格式的图片。"})},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 4M。"})}},mounted:function(){this.$store.dispatch("merInfo_list",{channelCode:"10000000"})},data:function(){return{merNo:"",merName:"",merFee:{},merFeeTitle:"手续费管理",merFeeModal:!1,feeModalLoading:!1,showImgCard:!1,showImgCardZ:!1,showImgCardF:!1,urlCard:"",urlCardZ:"",urlCardF:"",self:this,searchKey:"",merInfoModal:!1,isAdd:!0,isEditMerType:!1,modalTitle:"新增用户",uploadAction:s.default.env+"/cmn/act03",modalLoading:!1,merFeeAddTitle:"手续费续存",merFeeAddModal:!1,merFeeAmount:{},amountModal:!1,upAmount:"",merStatusTxt:"",tableColums:[{title:"商户名称",key:"mercName",align:"center"},{title:"商户编号",key:"mercNum",align:"center"},{title:"法人",key:"legalPerson",align:"center"},{title:"法人手机号",key:"legalPhone",align:"center"},{title:"状态",key:"status",width:180,align:"center",render:function(t,e){return t("Tag",{props:{type:"dot",color:"blue"}},e.row.status)}}]}}}},736:function(t,e,n){var a=n(737);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(61)("16e07d1c",a,!1,{})},737:function(t,e,n){e=t.exports=n(60)(!1),e.push([t.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.feeList {\n  font-size: 12px;\n  line-height: 30px;\n}\n",""])},738:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",[n("Col",{attrs:{span:"24"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"help-buoy"}}),t._v("\n                    商户列表\n                ")],1),t._v(" "),n("Row",{staticClass:"margin-top-10"},[n("Table",{attrs:{context:t.self,border:"",data:t.merList,columns:t.tableColums,stripe:""}})],1),t._v(" "),n("Row",{staticClass:"margin-top-10"},[n("Col",{attrs:{span:"24",align:"right"}},[n("Page",{attrs:{total:t.total,current:t.pageNumber,"page-size":t.pageSize,"show-total":"","show-elevator":""},on:{"on-change":t.search}})],1)],1)],1)],1)],1)],1)},r=[];a._withStripped=!0;var o={render:a,staticRenderFns:r};e.default=o}});