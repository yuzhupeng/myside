webpackJsonp([65],{Et9U:function(A,g,B){"use strict";Object.defineProperty(g,"__esModule",{value:!0});var i={components:{},created:function(){var A=this;this.http.post("api/news/GetDemoPageList").then(function(g){g.data.forEach(function(g){g.createDate=(g.createDate||"").replace("T"," "),g.imgs=(g.imageUrl||"").split(","),g.type=1==g.newsType?"置顶":"快讯",1==g.newsType?A.list2[0].data.push(g):A.list2[1].data.push(g)})})},data:function(){return{header:"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/head1.jpg",errorImg:'this.src="'+B("ScXB")+'"',recommend:[],index:0,demo2:"推荐",list2:[{name:"推荐",data:[]},{name:"分享",data:[]}],active:0}},methods:{getImg:function(A){if(A)return this.base.isUrl(A)||-1==A.indexOf(".")?A:this.http.ipAddress+A},openUrl:function(A){if(!A.detailUrl||-1==A.detailUrl.indexOf(".html")||!this.base.isUrl(this.http.ipAddress+A.detailUrl))return this.$Message.error("未发布页面");window.open(this.http.ipAddress+A.detailUrl)}}},Q={render:function(){var A=this,g=A.$createElement,B=A._self._c||g;return B("div",{staticStyle:{overflow:"scroll",position:"absolute",background:"rgb(245, 245, 245)",height:"100%",width:"100%"}},[B("div",{staticClass:"com-container"},A._l(A.list2,function(g,i){return B("div",{key:i,staticClass:"list"},[B("Divider",[A._v(A._s(g.name))]),A._v(" "),B("div",{staticClass:"tab-swiper vux-center"},[B("div",A._l(g.data,function(g,i){return B("div",{key:i,staticClass:"info-item"},[B("div",{staticClass:"info-title",on:{click:function(B){A.openUrl(g)}}},[B("div",{class:{"info-text":!0,"info-img":g.imgs&&1==g.imgs.length}},[A._v(A._s(g.title))]),A._v(" "),g.imgs&&1==g.imgs.length?B("div",{staticClass:"single-img"},[B("img",{attrs:{src:A.getImg(g.imgs[0]),onerror:A.errorImg}})]):A._e()]),A._v(" "),g.imgs&&(g.imgs.length>=3||2==g.imgs.length)?B("div",{staticClass:"img-group"},A._l(g.imgs,function(g,i){return B("img",{key:i,attrs:{onerror:A.errorImg,src:A.getImg(g)}})}),0):A._e(),A._v(" "),B("div",{staticClass:"info-foot"},[B("img",{attrs:{src:A.header,onerror:A.errorImg}}),A._v(" "),B("span",{staticClass:"author"},[A._v(A._s(g.creator))]),A._v(" "),B("Tag",{attrs:{color:"cyan"}},[A._v(A._s(g.type||""))]),A._v(" "),B("span",{staticClass:"date"},[A._v(A._s(g.createDate))])],1)])}),0)])],1)}),0)])},staticRenderFns:[]};var I=B("VU/8")(i,Q,!1,function(A){B("d4pp")},"data-v-10666c3b",null);g.default=I.exports},ScXB:function(A,g){A.exports="data:image/png;base64,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"},d4pp:function(A,g){}});