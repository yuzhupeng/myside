webpackJsonp([55],{WBHA:function(t,e,a){var i;i=function(){return function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var i=a(4)(a(1),a(5),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(a);)a=a.replace(n,"$1"+this.separator+"$2");return this.prefix+a+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(a(0));e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,n="webkit moz ms o".split(" "),s=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=s=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=s=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,l=0;l<n.length&&(!s||!r);l++)o=n[l],e.requestAnimationFrame=s=s||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];s&&r||(e.requestAnimationFrame=s=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-i)),n=window.setTimeout(function(){t(e+a)},a);return i=e+a,n},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=s,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,a,i){var n,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(n=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),i){var l=Object.create(o.computed||null);Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}}),o.computed=l}return{esModule:n,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},t.exports=i()},Yay3:function(t,e){},blPB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("WBHA"),n={components:{"count-to":a.n(i).a},data:function(){return{beginDate:"",endDate:"",n:90,topColor:[{name:"订单数",desc:"#205",background:"rgb(25, 190, 107)",icon:"ios-cart",qty:6e3,key:"total"},{name:"已付款",desc:"#412",background:"rgb(45, 183, 245)",icon:"ios-cash",qty:7100,key:"total"},{name:"待发货",desc:"#412",background:"rgb(255, 153, 0)",icon:"md-bus",qty:500,key:"hasPay"},{name:"配送中",desc:"#412",background:" rgb(84, 110, 122)",icon:"md-pin",qty:800,key:"notShip"},{name:"已完成",desc:"#412",background:"rgb(45, 183, 245)",icon:"logo-android",qty:1880,key:"completed"},{name:"退货订单",desc:"#12",background:"rgb(237, 64, 20)",icon:"ios-navigate",qty:2290,key:"refund"}],totalRange:[{name:"订单数",desc:"#205",background:"rgb(25, 190, 107)",icon:"ios-cart",qty:1290,key:"total"},{name:"已付款",desc:"#412",background:"rgb(45, 183, 245)",icon:"ios-cash",qty:3450,key:"total"},{name:"待发货",desc:"#412",background:"rgb(255, 153, 0)",icon:"md-bus",qty:200,key:"hasPay"},{name:"配送中",desc:"#412",background:" rgb(84, 110, 122)",icon:"md-pin",qty:7e3,key:"notShip"},{name:"交易完成",desc:"#412",background:"rgb(45, 183, 245)",icon:"ios-help-buoy",qty:8900,key:"completed"},{name:"退货订单",desc:"#12",background:"rgb(237, 64, 20)",icon:"ios-navigate",qty:2450,key:"refund"}],value1:"1",titleLeft:"",dateNow:""}},methods:{getDate:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();t.getHours(),t.getMinutes(),t.getSeconds();this.beginDate=e+"-"+(a<10?"0"+a:a)+"-"+(i<10?"0"+i:i),this.endDate=this.beginDate,this.dateNow=this.beginDate},search:function(){this.dateNow==this.beginDate&&this.dateNow==this.endDate?this.titleLeft="今日":this.titleLeft="当期"}},created:function(){this.getDate()},mounted:function(){}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-contianer"},[a("div",[t._m(0),t._v(" "),a("div",{staticClass:"ivu-row",staticStyle:{padding:"15px",background:"white"},attrs:{"data-v-542f4644":""}},t._l(t.topColor,function(e){return a("div",{key:e.name,staticClass:"ivu-col ivu-col-span-6",staticStyle:{"padding-left":"8px","padding-right":"8px"}},[a("div",{staticClass:"ivu-card",style:{background:e.background},attrs:{"data-v-542f4644":""}},[a("div",{staticClass:"icon-left"},[a("Icon",{attrs:{type:e.icon}})],1),t._v(" "),a("div",{staticClass:"ivu-card-body"},[a("div",{staticClass:"demo-color-name"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"demo-color-desc"},[t._v("#"+t._s(e.qty))])])])])}),0),t._v(" "),a("div",{staticClass:"numbers"},t._l(8,function(e){return a("div",{key:e,staticClass:"item"},[a("div",{staticClass:"number"},[a("count-to",{attrs:{startVal:0,endVal:1e3*e,duration:3e3}})],1),t._v(" "),a("div",[t._v("Order total")])])}),0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"jn-day-total"},[t._m(2),t._v(" "),a("div",{staticClass:"date"},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:t.beginDate,type:"date","show-week-numbers":"",placeholder:"Select date"},on:{"on-change":function(e){return t.beginDate=e,e}}})],1),t._v(" "),a("div",{staticClass:"date"},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:t.endDate,type:"date","show-week-numbers":"",placeholder:"Select date"},on:{"on-change":function(e){return t.endDate=e,e}}})],1),t._v(" "),a("div",{staticClass:"btn"},[a("Button",{attrs:{type:"success"},on:{click:function(e){t.search()}}},[a("Icon",{attrs:{type:"ios-search"}}),t._v("查询\n        ")],1)],1)]),t._v(" "),a("div",{staticClass:"order-range"},t._l(t.totalRange,function(e,i){return a("div",{key:i,staticClass:"order-item"},[a("div",{staticClass:"total"},[a("div",{staticClass:"number"},[a("count-to",{attrs:{startVal:0,endVal:e.qty,duration:3e3}})],1)]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.titleLeft+e.name))]),t._v(" "),a("div",{staticClass:"date"},[t._v("\n          "+t._s(t.beginDate.replace(/-/g,"."))+" --\n          "+t._s(t.endDate.replace(/-/g,"."))+"\n        ")])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"order-title"},[e("h2",[this._v("订单统计")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"order-title"},[e("h2",[this._v("订单查询")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"date-text"},[e("label",[this._v("选择日期：")])])}]};var r=a("VU/8")(n,s,!1,function(t){a("pPml"),a("Yay3"),a("nG3M")},"data-v-3e5cab89",null);e.default=r.exports},nG3M:function(t,e){},pPml:function(t,e){}});