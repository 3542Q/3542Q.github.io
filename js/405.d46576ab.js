"use strict";(self["webpackChunkmy_github_page"]=self["webpackChunkmy_github_page"]||[]).push([[405],{2405:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var d=a(6768);const o={class:"home-page-layout",ref:"layout"},n={class:"main-container"},i={class:"main-content"};function s(e,t,a,s,r,l){const c=(0,d.g2)("HomeHeader"),u=(0,d.g2)("HomeSidebar"),h=(0,d.g2)("router-view"),v=(0,d.g2)("HomeFooter");return(0,d.uX)(),(0,d.CE)("div",o,[(0,d.bF)(c,{class:"header"}),(0,d.Lk)("div",n,[(0,d.bF)(u,{class:"sidebar",onSidebarWidthChange:l.updateSidebarWidth},null,8,["onSidebarWidthChange"]),(0,d.Lk)("div",i,[(0,d.bF)(h)])]),(0,d.bF)(v,{class:"footer"})],512)}function r(e,t,a,o,n,i){return(0,d.uX)(),(0,d.CE)("header",null,t[0]||(t[0]=[(0,d.Fv)('<div class="header-content" data-v-de624174><div class="logo" data-v-de624174><span class="logo-text" data-v-de624174>博客</span></div><div class="user-actions" data-v-de624174><button class="search-btn" data-v-de624174><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-de624174><circle cx="11" cy="11" r="8" data-v-de624174></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-de624174></line></svg></button><button class="theme-toggle" data-v-de624174><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-de624174><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.93 5.93m12.728 12.728 1.414 1.414M6.343 5.343 4.93 3.93m12.728 12.728 1.414 1.414" data-v-de624174></path><circle cx="12" cy="12" r="5" data-v-de624174></circle></svg></button></div></div>',1)]))}var l={name:"HomeHeader"},c=a(1241);const u=(0,c.A)(l,[["render",r],["__scopeId","data-v-de624174"]]);var h=u,v=a(4232),m=a(144),b={__name:"HomeFooter",setup(e){const t=(new Date).getFullYear();return(e,a)=>((0,d.uX)(),(0,d.CE)("footer",null,[(0,d.Lk)("p",null,"© "+(0,v.v_)((0,m.R1)(t))+" 个人主页. 保留所有权利.",1)]))}};const p=(0,c.A)(b,[["__scopeId","data-v-54e0cdc8"]]);var g=p;function w(e,t,a,o,n,i){const s=(0,d.g2)("router-link");return(0,d.uX)(),(0,d.CE)("aside",{ref:"sidebar",onMouseenter:t[0]||(t[0]=(...e)=>i.expandSidebar&&i.expandSidebar(...e)),onMouseleave:t[1]||(t[1]=(...e)=>i.collapseSidebar&&i.collapseSidebar(...e)),class:(0,v.C4)([{"sidebar-collapsed":!n.isExpanded},"sidebar-container"])},[(0,d.Lk)("nav",null,[(0,d.bF)(s,{to:"/home/blog"},{default:(0,d.k6)((()=>t[2]||(t[2]=[(0,d.eW)("博客目录")]))),_:1}),(0,d.bF)(s,{to:"/home/resource"},{default:(0,d.k6)((()=>t[3]||(t[3]=[(0,d.eW)("资源分类")]))),_:1}),(0,d.bF)(s,{to:"/home/aboutMe"},{default:(0,d.k6)((()=>t[4]||(t[4]=[(0,d.eW)("个人信息")]))),_:1}),(0,d.bF)(s,{to:"/home/test"},{default:(0,d.k6)((()=>t[5]||(t[5]=[(0,d.eW)("测试页面")]))),_:1})])],34)}var k={name:"HomeSidebar",data(){return{isExpanded:!0}},mounted(){window.addEventListener("mousemove",this.handleMouseMove),this.$nextTick((()=>{this.emitSidebarWidth()}))},beforeUnmount(){window.removeEventListener("mousemove",this.handleMouseMove)},methods:{handleMouseMove(e){e.clientX<window.innerWidth/10&&this.expandSidebar()},expandSidebar(){this.isExpanded=!0,this.emitSidebarWidth()},collapseSidebar(){this.isExpanded=!1,this.emitSidebarWidth()},emitSidebarWidth(){const e=this.isExpanded?250:0;this.$emit("sidebar-width-change",e)}}};const f=(0,c.A)(k,[["render",w],["__scopeId","data-v-5809fc88"]]);var x=f,_={name:"HomePageLayout",components:{HomeHeader:h,HomeFooter:g,HomeSidebar:x},methods:{updateSidebarWidth(e){this.$refs.layout.style.setProperty("--sidebar-width",`${e}px`)}}};const S=(0,c.A)(_,[["render",s],["__scopeId","data-v-a4d92026"]]);var H=S}}]);
//# sourceMappingURL=405.d46576ab.js.map