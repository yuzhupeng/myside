webpackJsonp([84],{Ad00:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Gu7T"),r=n.n(o),i={components:{VolTree:{name:"VolTree",template:'<div>\n           <div  class="com-menu" v-for="(subItem,subIndex) in treeData">\n            <MenuItem v-if="!subItem.children":to="subItem.to||\'\'" :name="subItem.id">{{subItem.name}}</MenuItem>\n            <Submenu v-else :name="subItem.id">\n              <template slot="title">\n                <Icon :type="subItem.icon||\'ios-aperture\'"/>{{subItem.name}}\n              </template>\n                <vol-tree :treeData="subItem.children" ></vol-tree>\n            </Submenu>\n           </div>\n           </div>',props:["treeData"]}},props:{trees:{type:Array,default:[]},onSelect:{type:Function,default:function(e){console.log(e)}},onOpenChange:{type:Function,default:function(e){console.log(e)}},theme:{type:String,default:"light"}},render:function(e){console.log(e)},data:function(){return{activeId:0}},methods:{menuOpenChange:function(e){0!=e.length&&(this.activeId=-999999,this.onOpenChange(e))},menuSelect:function(e){this.onSelect(e)}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Menu",{attrs:{accordion:!0,"active-name":this.activeId,theme:this.theme,"open-names":[0]},on:{"on-open-change":this.menuOpenChange,"on-select":this.menuSelect}},[t("vol-tree",{attrs:{treeData:this.trees}})],1)},staticRenderFns:[]},s={components:{VolItemMenu:n("VU/8")(i,u,!1,null,null,null).exports},props:{options:{type:Array,default:[]},onSelect:{type:Function,default:function(e){console.log(e)}},onOpenChange:{type:Function,default:function(e){console.log(e)}},theme:{type:String,default:"light"}},methods:{convertTree:function(e,t){var n,o=this,i=t.filter(function(t){return t.parentId==e.id});i.length>0&&(e.children=[],(n=e.children).push.apply(n,r()(i)),e.children.forEach(function(e){o.convertTree(e,t)}))},arrayToTree:function(){var e=this,t=this.options.filter(function(e){return 0==e.parentId});return t.forEach(function(t){return e.convertTree(t,e.options)}),t}},data:function(){return{}}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"menu-list"},[t("vol-item-menu",{attrs:{onOpenChange:this.onOpenChange,onSelect:this.onSelect,trees:this.arrayToTree(),theme:this.theme}})],1)},staticRenderFns:[]},l=n("VU/8")(s,a,!1,null,null,null);t.default=l.exports}});