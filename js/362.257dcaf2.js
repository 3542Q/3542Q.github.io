"use strict";(self["webpackChunkmy_github_page"]=self["webpackChunkmy_github_page"]||[]).push([[362],{1362:function(e,a,l){l.r(a),l.d(a,{default:function(){return h}});l(98992),l(54520),l(81454);var s=l(56768),o=l(24232),t=l(45130),i=l(90144);const n={class:"anime-image-tool"},r={class:"category-selector"},u=["value"],c={class:"masonry-grid"},v={class:"image-wrapper"},d=["src","alt"],g={class:"image-overlay"},m=["onClick"],p={key:0,class:"loading-container"};var y={__name:"AnimeImageTool",setup(e){const a=["waifu","neko","shinobu","megumin","bully","cuddle","cry","hug","awoo","kiss","lick","pat","smug","bonk","yeet","blush","smile","wave","highfive","handhold"],l=(0,i.KR)("waifu"),y=(0,i.KR)([]),k=(0,i.KR)(!1),f=(0,i.KR)(null);let h=null;const w=e=>e.charAt(0).toUpperCase()+e.slice(1),b=e=>new Promise(((a,l)=>{const s=new Image;s.onload=()=>a(e),s.onerror=()=>l(e),s.src=e})),L=async()=>{if(!k.value){k.value=!0;try{const e=Array(10).fill().map((async()=>{const e=await fetch(`https://api.waifu.pics/sfw/${l.value}`),a=await e.json();return a.url})),a=await Promise.all(e),s=await Promise.allSettled(a.map((e=>b(e)))),o=s.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).filter((e=>!y.value.includes(e))),t=o.filter((e=>!y.value.includes(e)));y.value=[...y.value,...t]}catch(e){console.error("Failed to fetch images:",e)}finally{k.value=!1,K()}}},C=()=>{y.value=[],L()},_=e=>{window.open(e,"_blank")},I=e=>{const a=e.target,l=a.closest(".masonry-item");l&&(l.style.opacity="1")},E=e=>{e.target.src="/api/placeholder/300/300",e.target.alt="图片加载错误"},K=()=>{h=new IntersectionObserver((e=>{e[0].isIntersecting&&!k.value&&L()}),{root:document.body,threshold:1,rootMargin:"200px"}),f.value&&h.observe(f.value)};return(0,s.sV)((()=>{L(),K()})),(0,s.hi)((()=>{h&&f.value&&h.unobserve(f.value)})),(e,i)=>((0,s.uX)(),(0,s.CE)("div",n,[(0,s.Lk)("div",r,[i[1]||(i[1]=(0,s.Lk)("label",{for:"category-select",class:"sr-only"},"选择动漫图片类别",-1)),i[2]||(i[2]=(0,s.eW)(" 选择动漫图片类别： ")),(0,s.bo)((0,s.Lk)("select",{id:"category-select","onUpdate:modelValue":i[0]||(i[0]=e=>l.value=e),onChange:C,class:"category-dropdown"},[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(a,(e=>(0,s.Lk)("option",{key:e,value:e},(0,o.v_)(w(e)),9,u))),64))],544),[[t.u1,l.value]])]),(0,s.Lk)("div",c,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(y.value,((e,a)=>((0,s.uX)(),(0,s.CE)("div",{key:`${e}-${a}`,class:"masonry-item"},[(0,s.Lk)("div",v,[(0,s.Lk)("img",{src:e,alt:`Anime ${l.value} ${a}`,loading:"lazy",class:"image",onError:E,onLoad:I},null,40,d),(0,s.Lk)("div",g,[(0,s.Lk)("button",{onClick:a=>_(e),class:"original-image-button"}," 打开原图 ",8,m)])])])))),128))]),k.value?((0,s.uX)(),(0,s.CE)("div",p,i[3]||(i[3]=[(0,s.Lk)("div",{class:"loading-spinner"},null,-1)]))):(0,s.Q3)("",!0),(0,s.Lk)("div",{ref_key:"loadMoreTrigger",ref:f,class:"load-more-trigger"},null,512)]))}},k=l(71241);const f=(0,k.A)(y,[["__scopeId","data-v-32514816"]]);var h=f}}]);
//# sourceMappingURL=362.257dcaf2.js.map