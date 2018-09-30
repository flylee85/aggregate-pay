webpackJsonp([7],{624:function(t,e,a){"use strict";function n(t){d||a(759)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(658),o=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);var l=a(761),s=a.n(l),d=!1,c=a(24),p=n,u=c(o.a,s.a,!1,p,null,null);u.options.__file="src\\views\\trade\\log\\main.vue",e.default=u.exports},625:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(104),r=function(t){return t&&t.__esModule?t:{default:t}}(n),o={};o.devLocation="development"==r.default?"http://localhost:8082":"https://pac.mybank.cc",o.env="development"==r.default?"/api":"/",o.dataUrl="development"==r.default?"../":"",o.imgUploadUrl=("development"==r.default?"/api":"")+"/cmn/act01",o.editBtn=function(t,e,a){return e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.edit(a.row)}}},"编辑")},o.viewBtn=function(t,e,a){return e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.view(a.row.id)}}},"查看")},o.delBtn=function(t,e,a){return e("Poptip",{props:{confirm:"",title:"您确定要删除这条数据吗？"},style:{marginRight:"5px"},on:{"on-ok":function(){t.del(a.row.id)}}},[e("Button",{props:{type:"error",size:"small"}},"删除")])},o.stopBtn=function(t,e,a){return e("Poptip",{props:{confirm:"",title:"您确定要禁用这条数据吗？"},style:{marginRight:"5px"},on:{"on-ok":function(){t.stop(a.row.id)}}},[e("Button",{props:{type:"error",size:"small"}},"禁用")])},o.actBtn=function(t,e,a){return e("Poptip",{props:{confirm:"",title:"您确定要激活这条数据吗？"},style:{marginRight:"5px"},on:{"on-ok":function(){t.active(a.row.id)}}},[e("Button",{props:{type:"success",size:"small"}},"激活")])},o.status=[{value:"0",label:"正常"},{value:"1",label:"禁用"}],o.yon=[{value:"0",label:"是"},{value:"1",label:"否"}],o.checkStatus=[{value:"00",label:"审核通过"},{value:"01",label:"等待审核"},{value:"02",label:"审核未通过"}],e.default=o},658:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(233),o=n(r),i=a(103),l=a(625),s=n(l),d=function(t,e,a){return e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px",marginTop:"2px",marginBottom:"2px"},on:{click:function(){t.uploadTradeImg(a.row)}}},"修改交易结果")};e.default={computed:(0,o.default)({},(0,i.mapState)({tradeLogList:function(t){return t.tradeLog.tradeLogList},totalPage:function(t){return t.tradeLog.totalPage},pageNumber:function(t){return t.tradeLog.pageNumber},pageSize:function(t){return t.tradeLog.pageSize},total:function(t){return t.tradeLog.totalRow},tradeLog:function(t){return t.tradeLog.tradeLog}})),methods:{uploadTradeImg:function(t){this.modalTitle="更正交易结果",this.isAdd=!1;var e=this;e.$store.commit("tradeLog_reset",t),e.uploadModal=!0},saveTrade:function(){var t=this,e=this;this.modalLoading=!0,this.$refs.formValidate.validate(function(a){a?t.$store.dispatch("tradeLog_saveTrade").then(function(a){a&&"success"==a?(e.uploadModal=!1,e.search()):t.modalLoading=!1}):t.modalLoading=!1})},vChange:function(t){t||(this.$refs.formValidate.resetFields(),this.modalLoading=!1,this.showTradeImg=!1,this.urlTradeImg="")},search:function(t){this.$store.dispatch("tradeLog_list",{search:this.searchKey,searchDate:this.searchDate,searchWxAcct:this.searchWxAcct,searchAmount:this.searchAmount,pn:t})},setSearchDate:function(t){this.searchDate=t},handleSuccessCard:function(t,e){this.tradeLog.tradeImgName=t.tradeImgName,this.urlTradeImg=s.default.devLocation+"/cmn/act07?tradeImgName="+t.tradeImgName,this.showTradeImg=!0,this.modalLoading=!1},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请上传 jpg 或 png 格式的图片。"})},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 4M。"})}},mounted:function(){this.$store.dispatch("tradeLog_list")},data:function(){var t=this;return{self:this,searchKey:"",searchDate:[],searchWxAcct:"",searchAmount:"",isAdd:!0,urlTradeImg:"",showTradeImg:!1,modalLoading:!1,uploadModal:!1,modalTitle:"",updateAction:s.default.env+"/tt00/upTradeImg",ruleValidate:{tradeImgName:[{required:!0,message:"交易凭证不能为空",trigger:"blur"}]},tableColums:[{title:"交易流水号",key:"tradeNo",align:"center"},{title:"商户编号",key:"tradeMerNo",align:"center"},{title:"商户名称",key:"tradeMerName",align:"center"},{title:"交易金额",key:"tradeAmount",align:"center"},{title:"实付金额",key:"tradeRealAmount",align:"center"},{title:"收款微信账号",key:"tradeWxAcct",align:"center"},{title:"交易时间",key:"tradeTimeTxt",align:"center",width:150},{title:"交易状态",key:"tradeStatus",width:160,align:"center",render:function(t,e){return"0"==e.row.tradeStatus?t("Tag",{props:{type:"dot",color:"green"}},e.row.tradeStatusTxt):"1"==e.row.tradeStatus?t("Tag",{props:{type:"dot",color:"blue"}},e.row.tradeStatusTxt):"2"==e.row.tradeStatus?t("Tag",{props:{type:"dot",color:"red"}},e.row.tradeStatusTxt):void 0}},{title:"操作",key:"action",width:150,align:"center",render:function(e,a){if("1"==a.row.tradeStatus)return e("div",[d(t,e,a)])}}]}}}},759:function(t,e,a){var n=a(760);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(61)("4e1ea7a2",n,!1,{})},760:function(t,e,a){e=t.exports=a(60)(!1),e.push([t.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n",""])},761:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("Col",{attrs:{span:"24"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"help-buoy"}}),t._v("\n                    交易列表\n                ")],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"24",align:"right"}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入交易流水号\\商户编号"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),t._v(" "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入微信收款账号"},model:{value:t.searchWxAcct,callback:function(e){t.searchWxAcct=e},expression:"searchWxAcct"}}),t._v(" "),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入实付金额"},model:{value:t.searchAmount,callback:function(e){t.searchAmount=e},expression:"searchAmount"}}),t._v(" "),a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"daterange",placement:"bottom-end",placeholder:"请选择时间范围"},on:{"on-change":t.setSearchDate}}),t._v(" "),a("span",{on:{click:t.search}},[a("Button",{attrs:{type:"primary",icon:"search"}},[t._v("搜索")])],1)],1)],1),t._v(" "),a("Row",{staticClass:"margin-top-10"},[a("Table",{attrs:{context:t.self,border:"",data:t.tradeLogList,columns:t.tableColums,stripe:""}})],1),t._v(" "),a("Row",{staticClass:"margin-top-10"},[a("Col",{attrs:{span:"24",align:"right"}},[a("Page",{attrs:{total:t.total,current:t.pageNumber,"page-size":t.pageSize,"show-total":"","show-elevator":""},on:{"on-change":t.search}})],1)],1)],1)],1)],1),t._v(" "),a("Modal",{attrs:{"mask-closable":!1},on:{"on-visible-change":t.vChange},model:{value:t.uploadModal,callback:function(e){t.uploadModal=e},expression:"uploadModal"}},[a("p",{attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"information-circled"}}),t._v(" "),a("span",[t._v(t._s(t.modalTitle))])],1),t._v(" "),a("Form",{ref:"formValidate",attrs:{"label-width":150,model:t.tradeLog,rules:t.ruleValidate}},[a("FormItem",{attrs:{label:"交易成功凭证",prop:"tradeImgName"}},[a("Upload",{ref:"upload",staticStyle:{width:"300px","line-height":"0px"},attrs:{"show-upload-list":!1,"on-success":t.handleSuccessCard,format:["jpg","jpeg","png"],"max-size":4096,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,type:"drag",action:t.updateAction,data:{tradeNo:t.tradeLog.tradeNo}}},[a("div",{staticStyle:{"line-height":"32px"}},[t._v("点击交易成功凭证")]),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:t.showTradeImg,expression:"showTradeImg"}],attrs:{src:t.urlTradeImg,width:"300"}})])],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"success",loading:t.modalLoading},on:{click:t.saveTrade}},[t._v("更正")]),t._v(" "),a("Button",{attrs:{type:"error"},on:{click:function(e){t.uploadModal=!1}}},[t._v("关闭")])],1)],1)],1)},r=[];n._withStripped=!0;var o={render:n,staticRenderFns:r};e.default=o}});