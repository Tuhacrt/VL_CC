import{d,r as s,q as v,K as w,w as h,a as f,c as x,k as C,l,u as k,j as B,g as e}from"./index-cb6d3577.js";const P=e("span",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#0d6efd",width:"14",height:"14",viewBox:"0 0 24 24"},[e("path",{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"})])],-1),V=e("span",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#0d6efd",width:"14",height:"14",viewBox:"0 0 24 24"},[e("path",{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"})])],-1),R=d({__name:"PaginationComponent",props:{pagination:null},emits:["change-page"],setup(i,{emit:p}){const c=i,g=s(""),a=v(c,"pagination"),r=w(()=>a.value.total_pages*10),n=s(1);h(a,t=>{n.value=t.current_page});const m=t=>{p("change-page",t,a.value.category)};return(t,o)=>{const u=B("vue-awesome-paginate");return f(),x("div",{ref_key:"paginationComponentRef",ref:g,class:"pagination-component"},[C(u,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=_=>n.value=_),"total-items":k(r),"item-per-page":10,"on-click":m},{"prev-button":l(()=>[P]),"next-button":l(()=>[V]),_:1},8,["modelValue","total-items"])],512)}}});export{R as _};
