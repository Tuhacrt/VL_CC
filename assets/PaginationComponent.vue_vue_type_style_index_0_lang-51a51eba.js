import{d,s as v,r as p,K as w,w as f,a as h,c as x,k as C,l,u as k,j as P,g as t}from"./index-ab88b64b.js";import{u as B}from"./productStore-903e0647.js";const V=t("span",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#0d6efd",width:"14",height:"14",viewBox:"0 0 24 24"},[t("path",{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"})])],-1),y=t("span",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#0d6efd",width:"14",height:"14",viewBox:"0 0 24 24"},[t("path",{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"})])],-1),M=d({__name:"PaginationComponent",setup(R){var i;const s=B(),{getProductList:r}=s,{products:n}=v(s),c=p(""),u=w(()=>{var e;return(((e=n.value)==null?void 0:e.pagination.total_pages)||1)*10}),a=p(((i=n.value)==null?void 0:i.pagination.current_page)||1);f(n,e=>{a.value=e.pagination.current_page});const g=e=>{var o;r(e,((o=n.value)==null?void 0:o.pagination.category)||"")};return(e,o)=>{const m=P("vue-awesome-paginate");return h(),x("div",{ref_key:"paginationComponentRef",ref:c,class:"pagination-component"},[C(m,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=_=>a.value=_),"total-items":k(u),"item-per-page":10,"on-click":g},{"prev-button":l(()=>[V]),"next-button":l(()=>[y]),_:1},8,["modelValue","total-items"])],512)}}});export{M as _};