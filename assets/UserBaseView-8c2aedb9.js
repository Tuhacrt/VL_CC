import{d as n,r,o as c,c as l,a as e,b as t,w as s,e as o,F as p}from"./index-f073120f.js";const u={class:"navbar container-fluid sticky-top navbar-expand-sm",style:{"background-color":"#fafafa"}},v={class:"container d-flex py-1 py-2-sm"},b={id:"navbar-logo"},f=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar-router","aria-controls":"navbar-router","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),m={id:"navbar-router",class:"navbar-text justify-content-end collapse navbar-collapse"},g={class:"navbar-nav"},h=n({__name:"UserNavbar",setup(_){return(d,i)=>{const a=r("router-link");return c(),l("nav",u,[e("div",v,[e("div",b,[t(a,{to:"/",class:"navbar-brand",style:{color:"#2c3e50"}},{default:s(()=>[o(" VL & CC ")]),_:1})]),f,e("div",m,[e("ul",g,[t(a,{to:"/",class:"ps-5"},{default:s(()=>[o(" 最新消息 ")]),_:1}),t(a,{to:"/products",class:"ps-5"},{default:s(()=>[o(" 所有產品 ")]),_:1}),t(a,{to:"/cart",class:"ps-5"},{default:s(()=>[o(" 購物車 ")]),_:1}),t(a,{to:"/admin/products",class:"ps-5"},{default:s(()=>[o(" 後檯介面 ")]),_:1})])])])])}}}),x={class:"container mx-auto"},k=n({__name:"UserBaseView",setup(_){return(d,i)=>{const a=r("router-view");return c(),l(p,null,[t(h),e("div",x,[t(a)])],64)}}});export{k as default};
