webpackJsonp([82],{OXm5:function(t,e){},mRGL:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:{lazy:{type:Boolean,default:!1},icon:{type:String,default:"ios-information-circle-outline"},title:{type:String,default:"基本信息"},model:{type:Boolean,default:!1},height:{type:Number,default:200},width:{type:Number,default:650},padding:{type:Number,default:16},hideMask:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},mask:{type:Boolean,default:!0},onModelClose:{type:Function,default:function(t){return!0}}},data:function(){return{inited:!0,footer:!0,vModel:this.model}},watch:{model:function(){this.model&&!this.inited&&(this.inited=!0),this.vModel=this.model}},mounted:function(){},created:function(){this.lazy&&(this.inited=!1),this.$slots.footer&&(this.footer=!1)},methods:{viewModelCancel:function(t){this.vModel=!1;var e=this.onModelClose("boolean"==typeof t);(void 0===e||e)&&this.$emit("update:model",!1)}}},l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Modal",{attrs:{"mask-closable":!1,closable:!1,mask:t.mask,title:"Title",width:t.width+"px","class-name":"vertical-center-modal"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[o("a",{staticClass:"ivu-modal-close",on:{click:function(){t.viewModelCancel(!0)}}},[o("i",{staticClass:"ivu-icon ivu-icon-ios-close"})]),t._v(" "),o("p",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[o("Icon",{attrs:{type:t.icon}}),t._v(" "),o("span",[t._v(t._s(t.title))])],1),t._v(" "),o("div",{staticClass:"view-model-content",style:{height:t.height+"px"}},[o("el-scrollbar",{staticStyle:{height:"100%"}},[t.inited?o("div",{staticClass:"srcoll-content",style:{padding:t.padding+"px"}},[t._t("content"),t._v(" "),t._t("default")],2):t._e()])],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[t._t("footer"),t._v(" "),t.footer?o("Button",{attrs:{type:"info"},on:{click:t.viewModelCancel}},[t._v("关闭")]):t._e()],2)])},staticRenderFns:[]};var a=o("VU/8")(i,l,!1,function(t){o("qLHL"),o("OXm5")},"data-v-f95c9282",null);e.default=a.exports},qLHL:function(t,e){}});