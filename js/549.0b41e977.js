"use strict";(self["webpackChunkmy_github_page"]=self["webpackChunkmy_github_page"]||[]).push([[549],{54549:function(o,n,t){t.r(n),t.d(n,{default:function(){return L}});var e=t(56768),l=t(24232);const c={class:"tools-container"},i={class:"tools-grid"},s=["onClick"],a={class:"tool-icon"},u={class:"tool-title"},r={class:"tool-description"},d={key:1,class:"tool-container-with-back"},k={class:"tool-content"};function p(o,n,t,p,v,m){return(0,e.uX)(),(0,e.CE)("div",c,[p.currentTool?((0,e.uX)(),(0,e.CE)("div",d,[(0,e.Lk)("button",{onClick:n[0]||(n[0]=(...o)=>p.backToToolList&&p.backToToolList(...o)),class:"back-button"},"← 返回"),(0,e.Lk)("div",k,[(0,e.Lk)("h2",null,(0,l.v_)(p.currentTool.name),1),((0,e.uX)(),(0,e.Wv)((0,e.$y)(p.currentTool.component)))])])):((0,e.uX)(),(0,e.CE)(e.FK,{key:0},[n[1]||(n[1]=(0,e.Lk)("h1",null,"工具箱",-1)),(0,e.Lk)("div",i,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(p.tools,(o=>((0,e.uX)(),(0,e.CE)("div",{key:o.id,class:"tool-card",onClick:n=>p.selectTool(o)},[(0,e.Lk)("div",a,(0,l.v_)(o.icon),1),(0,e.Lk)("div",u,(0,l.v_)(o.name),1),(0,e.Lk)("div",r,(0,l.v_)(o.description),1)],8,s)))),128))])],64))])}var v=t(90144),m={name:"ToolView",setup(){const o=[{id:"ip-lookup",name:"IP地址查询",description:"获取您的公网IP地址",icon:"🌐",component:()=>Promise.all([t.e(218),t.e(373),t.e(353)]).then(t.bind(t,3382))},{id:"anime-image-tool",name:"动漫图片",description:"获取动漫图片",icon:"🍱",component:()=>t.e(898).then(t.bind(t,54898))}],n=(0,v.KR)(null),e=async o=>{const t=await o.component();n.value={...o,component:(0,v.IG)(t.default)}},l=()=>{n.value=null};return{tools:o,currentTool:n,selectTool:e,backToToolList:l}}},b=t(71241);const T=(0,b.A)(m,[["render",p],["__scopeId","data-v-408d32e6"]]);var L=T}}]);
//# sourceMappingURL=549.0b41e977.js.map