"use strict";(self["webpackChunkmy_github_page"]=self["webpackChunkmy_github_page"]||[]).push([[49],{32049:function(e,t,a){a.r(t),a.d(t,{default:function(){return F}});var o=a(56768);const d={class:"home-page-layout",ref:"layout"},i={class:"main-container"},n={class:"main-content"};function s(e,t,a,s,r,l){const b=(0,o.g2)("HomeHeader"),u=(0,o.g2)("HomeSidebar"),c=(0,o.g2)("router-view"),h=(0,o.g2)("HomeFooter");return(0,o.uX)(),(0,o.CE)("div",d,[(0,o.bF)(b,{class:"header"}),(0,o.Lk)("div",i,[(0,o.bF)(u,{class:"sidebar",onSidebarWidthChange:l.updateSidebarWidth},null,8,["onSidebarWidthChange"]),(0,o.Lk)("div",n,[(0,o.bF)(c)])]),(0,o.bF)(h,{class:"footer"})],512)}function r(e,t,a,d,i,n){return(0,o.uX)(),(0,o.CE)("header",null,t[0]||(t[0]=[(0,o.Fv)('<div class="header-content" data-v-34bf8b3f><div class="logo" data-v-34bf8b3f><span class="logo-text" data-v-34bf8b3f>博客</span></div><div class="user-actions" data-v-34bf8b3f><button class="theme-toggle" data-v-34bf8b3f><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-34bf8b3f><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.93 5.93m12.728 12.728 1.414 1.414M6.343 5.343 4.93 3.93m12.728 12.728 1.414 1.414" data-v-34bf8b3f></path><circle cx="12" cy="12" r="5" data-v-34bf8b3f></circle></svg></button></div></div>',1)]))}var l={name:"HomeHeader"},b=a(71241);const u=(0,b.A)(l,[["render",r],["__scopeId","data-v-34bf8b3f"]]);var c=u,h=a(24232),v=a(90144),m={__name:"HomeFooter",setup(e){const t=(new Date).getFullYear();return(e,a)=>((0,o.uX)(),(0,o.CE)("footer",null,[(0,o.Lk)("p",null,"© "+(0,h.v_)((0,v.R1)(t))+" 个人主页. 保留所有权利.",1)]))}};const f=(0,b.A)(m,[["__scopeId","data-v-54e0cdc8"]]);var p=f;function g(e,t,a,d,i,n){const s=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("aside",{ref:"sidebar",onMouseenter:t[0]||(t[0]=(...e)=>n.expandSidebar&&n.expandSidebar(...e)),onMouseleave:t[1]||(t[1]=(...e)=>n.collapseSidebar&&n.collapseSidebar(...e)),class:(0,h.C4)([{"sidebar-collapsed":!i.isExpanded},"sidebar-container"])},[(0,o.Lk)("nav",null,[(0,o.bF)(s,{to:"/home/article"},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("文章")]))),_:1}),(0,o.bF)(s,{to:"/home/resource"},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)("资源")]))),_:1}),(0,o.bF)(s,{to:"/home/tool"},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.eW)("工具")]))),_:1}),(0,o.bF)(s,{to:"/home/video"},{default:(0,o.k6)((()=>t[5]||(t[5]=[(0,o.eW)("视频")]))),_:1}),(0,o.bF)(s,{to:"/home/aboutMe"},{default:(0,o.k6)((()=>t[6]||(t[6]=[(0,o.eW)("关于我")]))),_:1}),(0,o.bF)(s,{to:"/home/test"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("测试页面")]))),_:1})])],34)}var _={name:"HomeSidebar",data(){return{isExpanded:!0}},mounted(){window.addEventListener("mousemove",this.handleMouseMove),this.$nextTick((()=>{this.emitSidebarWidth()}))},beforeUnmount(){window.removeEventListener("mousemove",this.handleMouseMove)},methods:{handleMouseMove(e){e.clientX<window.innerWidth/10&&this.expandSidebar()},expandSidebar(){this.isExpanded=!0,this.emitSidebarWidth()},collapseSidebar(){this.isExpanded=!1,this.emitSidebarWidth()},emitSidebarWidth(){const e=this.isExpanded?250:0;this.$emit("sidebar-width-change",e)}}};const k=(0,b.A)(_,[["render",g],["__scopeId","data-v-52c17b27"]]);var w=k,S={name:"HomePageLayout",components:{HomeHeader:c,HomeFooter:p,HomeSidebar:w},methods:{updateSidebarWidth(e){this.$refs.layout.style.setProperty("--sidebar-width",`${e}px`)}}};const x=(0,b.A)(S,[["render",s],["__scopeId","data-v-a4d92026"]]);var F=x}}]);
//# sourceMappingURL=49.5179cf3a.js.map