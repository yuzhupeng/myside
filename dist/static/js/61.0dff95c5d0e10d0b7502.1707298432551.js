webpackJsonp([61],{B1WE:function(s,t){},L6md:function(s,t,e){"use strict";var c={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"question-container"},[e("div",{staticClass:"best-user"},[s._m(0),s._v(" "),e("div",{staticClass:"user-list"},s._l(s.userList,function(t,c){return e("div",{key:c,staticClass:"user"},[e("div",{staticClass:"header"},[e("img",{attrs:{src:t.header}})]),s._v(" "),e("div",{staticClass:"user-info"},[e("div",{class:"user-line"+(c+1)},[e("span",{staticClass:"user-index"},[s._v(s._s(c+1))]),s._v(" "),e("span",{staticClass:"user-name"},[s._v(s._s(t.userName))])]),s._v(" "),e("span",{staticClass:"user-text"},[s._v("回答数："+s._s(t.replyQty))]),s._v(" "),e("br"),s._v(" "),e("span",{staticClass:"user-text"},[s._v("提问数："+s._s(t.askQty))]),s._v(" "),e("br")])])}),0)]),s._v(" "),e("div",{staticClass:"ask-split-title"},[s._v("最新提问")]),s._v(" "),s._l(s.questionList,function(t,c){return e("div",{key:c,staticClass:"question-group",on:{click:function(e){s.link(t)}}},[e("div",{staticClass:"title"},[s._v(s._s(t.title))]),s._v(" "),e("div",{staticClass:"q-imgs"},s._l(t.imgs,function(s,t){return e("img",{key:t,attrs:{src:s}})}),0),s._v(" "),e("div",{staticClass:"q-user-info"},[e("img",{attrs:{src:t.header}}),s._v(" "),e("span",{staticClass:"q-user-name"},[s._v(s._s(t.userName))]),s._v(" "),e("span",{staticClass:"q-date"},[s._v(s._s(t.date))]),s._v(" "),e("span",{staticClass:"q-reply"},[s._v("回复"+s._s(t.replyQty))])])])})],2)},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"title"},[t("span",[this._v("| 社区牛人排行榜")])])}]};var a=e("VU/8")({data:function(){return{questionList:[{title:"为什么别人媳妇看着比自己的漂亮?",header:"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/u%3D3040702465%2C3389653397%26fm%3D26%26gp%3D0.jpg",imgs:["https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/05.jpg","https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/u%3D3441742992%2C2765570575%26fm%3D26%26gp%3D0.jpg","https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/u%3D3040702465%2C3389653397%26fm%3D26%26gp%3D0.jpg"],userName:"八戒",date:"2019-01-03 21:12",replyQty:28},{title:"为什么坐下来就喜欢抖腿?",header:"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x3.jpg",imgs:["https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x3.jpg","https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/xx.jpg","https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x3.jpg"],userName:"如果没有如果",date:"2019-01-03 21:12",replyQty:28},{title:"为什么微信抢不到红包?",header:"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/05.jpg",imgs:[],userName:"如果没有如果",date:"2019-01-03 21:12",replyQty:28},{title:"番茄为什么又叫西红柿?",header:"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/08.jpg",imgs:["https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/06.jpg","https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/07.jpg","https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/08.jpg"],userName:"如果没有如果",date:"2019-01-03 21:12",replyQty:28}],userList:[{userName:"#浪里个浪",header:"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/head1.jpg",replyQty:999,askQty:780},{userName:"犀利哥",header:"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/head2.jpg",replyQty:888,askQty:323},{userName:"和尚用飘柔",header:"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/head3.jpg",replyQty:666,askQty:520}]}},methods:{link:function(s){this.$message.error(s.title)}}},c,!1,function(s){e("B1WE")},"data-v-7c57af51",null);t.a=a.exports},SOGK:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c={components:{Topic:e("L6md").a},data:function(){return{}}},a={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("div",{staticClass:"head"},[t("Icon",{attrs:{type:"ios-arrow-back"}}),this._v("话题")],1),this._v(" "),t("div",{staticClass:"content"},[t("Topic")],1)])},staticRenderFns:[]};var i=e("VU/8")(c,a,!1,function(s){e("YA+H")},"data-v-0940e89a",null);t.default=i.exports},"YA+H":function(s,t){}});