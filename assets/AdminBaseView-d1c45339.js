import{d as m,D as g,i as k,r as E,j as n,a as f,c as T,k as e,l as t,b as c,B as V,P as A,Q as w,p as I,f as b,g as N,_ as B,N as C}from"./index-7e42d8a6.js";const R=a=>(I("data-v-7866feba"),a=a(),b(),a),L=R(()=>N("div",{class:"logo"},null,-1)),P=m({__name:"AdminNavbar",setup(a){const{VITE_URL:l,VITE_TOKEN:u}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"tuhacrt",VITE_TOKEN:"loginToken",VITE_TEXT:"Environment is in production build",BASE_URL:"/VL_CC/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},i=g(),d=k(),s=E([i.path]),y=async()=>{var r;const p=`${l}/logout`;try{const o=await A.post(p);o.data.success&&(alert(o.data.message),document.cookie=`${u}=; expires=${new Date(0)};`,d.push("/"))}catch(o){o instanceof w&&alert((r=o.response)==null?void 0:r.data.message)}};return(p,r)=>{const o=n("router-link"),_=n("a-menu-item"),h=n("a-menu"),v=n("a-layout-sider");return f(),T("nav",null,[e(v,{style:{overflow:"auto",height:"100vh",position:"fixed",left:0,top:0,bottom:0}},{default:t(()=>[L,e(h,{selectedKeys:s.value,"onUpdate:selectedKeys":r[0]||(r[0]=x=>s.value=x),theme:"dark",mode:"inline",style:{"padding-top":"40px"}},{default:t(()=>[e(_,{key:"/admin/products"},{default:t(()=>[e(o,{to:"/admin/products",style:{"text-decoration":"none",color:"inherit"}},{default:t(()=>[c(" Admin Products ")]),_:1})]),_:1}),e(_,{key:"/admin/orders"},{default:t(()=>[e(o,{to:"/admin/orders",style:{"text-decoration":"none",color:"inherit"}},{default:t(()=>[c(" Admin Orders ")]),_:1})]),_:1}),e(_,{key:"/admin/coupons"},{default:t(()=>[e(o,{to:"/admin/coupons",style:{"text-decoration":"none",color:"inherit"}},{default:t(()=>[c(" Admin Coupons ")]),_:1})]),_:1}),e(_,{key:"/"},{default:t(()=>[e(o,{to:"/",style:{"text-decoration":"none",color:"inherit"}},{default:t(()=>[c("Front Page")]),_:1})]),_:1}),e(_,{key:"/logout"},{default:t(()=>[e(o,{to:"/",style:{"text-decoration":"none",color:"inherit"},onClick:V(y,["prevent"])},{default:t(()=>[c("Logout")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["selectedKeys"])]),_:1})])}}});const S=B(P,[["__scopeId","data-v-7866feba"]]),K=m({__name:"AdminBaseView",setup(a){return(l,u)=>{const i=n("router-view"),d=n("a-layout-content"),s=n("a-layout");return f(),C(s,{"has-sider":""},{default:t(()=>[e(S),e(s,{style:{marginLeft:"200px"}},{default:t(()=>[e(d,{"data-theme":"light"},{default:t(()=>[e(i)]),_:1})]),_:1})]),_:1})}}});export{K as default};