"use strict";(self["webpackChunkmy_github_page"]=self["webpackChunkmy_github_page"]||[]).push([[343],{1343:function(e,t,a){a.r(t),a.d(t,{default:function(){return X}});var s=a(56768),l=a(24232);const i={class:"video-container"},o={key:0,class:"video-list"},c=["onClick"],n=["src","alt"],d={class:"video-title"},r={key:1,class:"video-detail"},u={key:0,class:"video-description"},v={class:"video-parts"},k=["onClick"],p={key:1,class:"video-player"},C=["src"];function y(e,t,a,y,h,m){return(0,s.uX)(),(0,s.CE)("div",i,[y.selectedVideo?((0,s.uX)(),(0,s.CE)("div",r,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=e=>y.selectedVideo=null),class:"back-button"},"返回列表"),(0,s.Lk)("h2",null,(0,l.v_)(y.selectedVideo.title),1),y.videoContent?((0,s.uX)(),(0,s.CE)("div",u,(0,l.v_)(y.videoContent),1)):(0,s.Q3)("",!0),(0,s.Lk)("div",v,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(y.videoParts,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.partName,class:"video-part",onClick:t=>y.selectPart(e)},(0,l.v_)(e.partName),9,k)))),128))]),y.selectedPart?((0,s.uX)(),(0,s.CE)("div",p,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(y.selectedPartFiles,(e=>((0,s.uX)(),(0,s.CE)("video",{controls:"",key:e.id},[(0,s.Lk)("source",{src:e.url,type:"video/mp4"},null,8,C),t[1]||(t[1]=(0,s.eW)(" 您的浏览器不支持视频播放 "))])))),128))])):(0,s.Q3)("",!0)])):((0,s.uX)(),(0,s.CE)("div",o,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(y.videos,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"video-item",onClick:t=>y.selectVideo(e)},[(0,s.Lk)("img",{src:e.titleImageURL,alt:e.title,class:"video-thumbnail"},null,8,n),(0,s.Lk)("div",d,(0,l.v_)(e.title),1)],8,c)))),128))]))])}var h=a(90144),m=a(94373),R={name:"VideoView",setup(){const e=(0,h.KR)([]),t=(0,h.KR)(null),a=(0,h.KR)(""),l=(0,h.KR)([]),i=(0,h.KR)(null),o=(0,h.KR)([]),c=(0,h.KR)("https://raw.githubusercontent.com/3542Q/JSONRepository/main"),n=async()=>{try{const t=await m.A.get(`${c.value}/videos/videos.json`);e.value=t.data}catch(t){console.error("获取视频列表失败",t)}},d=async e=>{t.value=e;try{const t=await m.A.get(e.contentURL);a.value=t.data;const s=await m.A.get(e.partsURL);l.value=s.data}catch(s){console.error("获取视频详情失败",s)}},r=async e=>{i.value=e;try{const t=await m.A.get(e.partFilesURL);o.value=t.data}catch(t){console.error("获取分P文件失败",t)}};return(0,s.sV)(n),{videos:e,selectedVideo:t,videoContent:a,videoParts:l,selectedPart:i,selectedPartFiles:o,selectVideo:d,selectPart:r}}},g=a(71241);const E=(0,g.A)(R,[["render",y],["__scopeId","data-v-a191fb26"]]);var X=E}}]);
//# sourceMappingURL=343.53a153db.js.map