webpackJsonp([52],{IdC3:function(t,e){},QCBU:function(t,e){},aWHs:function(t,e){},j4RO:function(t,e){},jQ1H:function(t,e){},lmfZ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{loading:!1,codeImgSrc:"",userInfo:{userName:"",passWord:"",verificationCode:""}}},directives:{focus:{inserted:function(t){t.focus()}}},created:function(){this.getVierificationCode()},methods:{getVierificationCode:function(){var t=this;this.http.get("/api/User/getVierificationCode").then(function(e){t.codeImgSrc="data:image/png;base64,"+e.img,t.userInfo.UUID=e.uuid})},toGitHub:function(){window.open("https://github.com/yuzhupeng")},loginPress:function(t){13==event.keyCode&&this.login()},login:function(){var t=this;return""==this.userInfo.userName||""==this.userInfo.userName.trim()?this.$Message.error("请输入用户名"):""==this.userInfo.passWord||""==this.userInfo.passWord.trim()?this.$Message.error("请输入密码"):""==this.userInfo.verificationCode||""==this.userInfo.verificationCode.trim()?this.$Message.error("请输入验证码"):(this.loading=!0,void this.http.post("/api/user/login",this.userInfo,"正在登陆....").then(function(e){if(!e.status)return t.loading=!1,t.getVierificationCode(),t.$Message.error(e.message);t.$Message.info("登陆成功,正在跳转!"),t.$store.commit("setUserInfo",e.data),t.$router.push({path:"/"})}))}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg",staticStyle:{height:"100%",width:"100%"}},[s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("div",{staticClass:"login"},[s("div",{staticClass:"login-contianer"},[s("div",{staticClass:"login-form"},[s("h2",{staticStyle:{padding:"20px 0px","font-weight":"500"}},[t._v("帐号登陆")]),t._v(" "),s("div",{staticClass:"form-user",on:{keypress:t.loginPress}},[s("div",{staticClass:"item"},[t._m(1),t._v(" "),s("div",{staticClass:"f-input"},[s("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.userInfo.userName,expression:"userInfo.userName"}],attrs:{type:"text",placeholder:"输入用户"},domProps:{value:t.userInfo.userName},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"userName",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"f-remove",on:{click:function(e){t.userInfo.userName=""}}})]),t._v(" "),s("div",{staticClass:"item"},[t._m(2),t._v(" "),s("div",{staticClass:"f-input"},[s("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.userInfo.passWord,expression:"userInfo.passWord"}],attrs:{type:"password",placeholder:"输入密码"},domProps:{value:t.userInfo.passWord},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"passWord",e.target.value)}}})]),t._v(" "),s("div",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"f-remove",on:{click:function(e){t.userInfo.passWord=""}}},[s("Icon",{attrs:{type:"ios-close-circle"}})],1)]),t._v(" "),s("div",{staticClass:"item"},[t._m(3),t._v(" "),s("div",{staticClass:"f-input"},[s("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.userInfo.verificationCode,expression:"userInfo.verificationCode"}],attrs:{type:"text",placeholder:"输入验证码"},domProps:{value:t.userInfo.verificationCode},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"verificationCode",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"code",on:{click:function(){t.getVierificationCode()}}},[s("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.codeImgSrc,expression:"codeImgSrc != ''"}],attrs:{src:t.codeImgSrc}})])])]),t._v(" "),s("div",{staticStyle:{}},[s("Button",{attrs:{size:"large",loading:t.loading,type:"info",long:""},on:{click:t.login}},[t.loading?s("span",[t._v("正在登陆...")]):s("span",[t._v("登陆")])])],1),t._v(" "),s("div",{staticClass:"action"})])])])]),t._v(" "),s("div",{staticClass:"l-bg"}),t._v(" "),s("div",{staticClass:"r-bg"}),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"l-left"},[s("div",{staticClass:"desc"},[s("div",{staticClass:"title"},[t._v("Welcome!")]),t._v(" "),s("p",[t._v("前后端分离框架")]),t._v(" "),s("p",[t._v(".NetCore、EntityFrameWorkCore、Dapper、Redis、JWT")]),t._v(" "),s("p",[t._v("MySql、Sqlserver、Linux")]),t._v(" "),s("p",[t._v("Vue2、Promise、Vuex、IView、Element-UI、axios")]),t._v(" "),s("p",[t._v("webpack、npm、git")]),t._v(" "),s("p",{staticStyle:{"text-decoration":"none",color:"red"}},[t._v(" 测试帐号：admin666  密码:123456")]),t._v(" "),s("p",{staticStyle:{"text-decoration":"none",color:"green"}},[t._v(" 测试帐号：admin111  密码:123456")]),t._v(" "),s("p",{staticStyle:{"text-decoration":"none",color:"yellow"}},[t._v(" 测试帐号：treetest1  密码:123456")]),t._v(" "),s("div",{staticStyle:{"margin-top":"30px"}},[s("a",{staticClass:"index-btn ivu-btn ivu-btn-primary ivu-btn-circle ivu-btn-ghost",staticStyle:{color:"#ffff",border:"1px solid #ffff",width:"80px","margin-right":"5px"},attrs:{href:"https://github.com/yuzhupeng",target:"_blank"}},[s("span",[t._v("GitHub")])]),t._v(" "),s("a",{staticClass:"index-btn ivu-btn ivu-btn-primary ivu-btn-circle ivu-btn-ghost",staticStyle:{color:"#ffff",border:"1px solid #ffff",width:"80px","margin-right":"5px"},attrs:{href:"https://www.cnblogs.com/YzpJason/",target:"_blank"}},[s("span",[t._v("cnblogs")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"f-text"},[e("label",[this._v("\n                   用户名：\n                 ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"f-text"},[e("label",[this._v("\n                   密   码：\n                 ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"f-text"},[e("label",[this._v("\n                   验证码：\n                 ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-footer"},[e("a",[this._v("Powered by .NET Core 3.1 On Linux 2CPU 2G 1M  ©2022 yuzhupengs  ")]),this._v(" "),e("a",[this._v("粤ICP备2022013353号")])])}]};var o=s("VU/8")(i,n,!1,function(t){s("j4RO"),s("jQ1H"),s("aWHs"),s("IdC3"),s("QCBU")},"data-v-bf8b8c84",null);e.default=o.exports}});