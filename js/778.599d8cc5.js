"use strict";(self["webpackChunkmy_github_page"]=self["webpackChunkmy_github_page"]||[]).push([[778],{6778:function(t,e,n){n.r(e),n.d(e,{default:function(){return r}});var o=n(56768);function s(t,e,n,s,a,c){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>c.testFunc&&c.testFunc(...t))}," 点我 ")])}var a={name:"TestPage",data(){},mounted(){this.testFunc()},methods:{async testFunc(){try{const t=await fetch("https://raw.githubusercontent.com/3542Q/JSONRepository/main/HelloJS.js"),e=await t.text();console.log(e);const n=new Function(e+"; return { sayHello }")();n.sayHello()}catch(t){console.error("Failed to load script:",t)}}}},c=n(71241);const u=(0,c.A)(a,[["render",s]]);var r=u}}]);
//# sourceMappingURL=778.599d8cc5.js.map