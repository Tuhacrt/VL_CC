import{d as T,q as B,r as k,a,c as n,g as e,t as d,u as t,e as $,v as D,x as F,n as V,s as S,o as N,C as q,y as z,k as y,F as C,z as L,j as A,A as E,B as x,p as Q,f as W,_ as G}from"./index-7e42d8a6.js";import{u as H}from"./useModal-6ee7e59a.js";import{U as J}from"./UserIndexIntro-264f8a90.js";import{P as K}from"./PaginationComponent-850408c8.js";import{u as X}from"./cartStore-6db9650e.js";import{u as Y,n as Z}from"./useMoney-d1148b13.js";import{u as ee}from"./loadingStore-63e8a6b6.js";const te={class:"modal-dialog modal-xl",role:"document"},se={class:"modal-content border-0"},oe={class:"modal-header bg-dark text-white"},ae={id:"findMoreModalLabel",class:"modal-title text-white"},ne={class:"modal-body"},ie={class:"row"},de={class:"col-sm-6"},le=["src"],re={class:"col-sm-6"},ce={class:"badge bg-primary rounded-pill"},_e={key:0,class:"h5"},pe={key:1},ue={class:"h6"},me={class:"h5"},he={class:"input-group"},fe=T({__name:"UserFindMoreModal",props:{tempProduct:null,addToCart:{type:Function}},setup(r,{expose:f}){const o=B(r,"tempProduct"),v=k(""),{showModal:p,hideModal:c}=H(v);let i=1;const M=()=>{i=1};return f({showModal:p,hideModal:c}),(u,l)=>{var m;return a(),n("div",{id:"findMoreModal",ref_key:"findMoreModalRef",ref:v,class:"modal fade",tabindex:"-1",role:"dialog","aria-labelledby":"findMoreModalLabel","aria-hidden":"true"},[e("div",te,[e("div",se,[e("div",oe,[e("h5",ae,[e("span",null,d(t(o).title),1)]),e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close",onClick:l[0]||(l[0]=(..._)=>t(c)&&t(c)(..._))})]),e("div",ne,[e("div",ie,[e("div",de,[t(o).imagesUrl?(a(),n("img",{key:0,class:"img-fluid",src:(m=t(o))==null?void 0:m.imagesUrl[0],alt:""},null,8,le)):$("",!0)]),e("div",re,[e("span",ce,d(t(o).category),1),e("p",null,"商品描述："+d(t(o).description),1),e("p",null,"商品內容："+d(t(o).content),1),t(o).price<t(o).origin_price?(a(),n("div",_e,d(t(o).origin_price)+" 元 ",1)):(a(),n("div",pe,[e("del",ue,"原價 "+d(t(o).origin_price)+" 元",1),e("div",me,"現在只要 "+d(t(o).price)+" 元",1)])),e("div",null,[e("div",he,[D(e("input",{"onUpdate:modelValue":l[1]||(l[1]=_=>V(i)?i.value=_:i=_),min:"1",type:"number",class:"form-control"},null,512),[[F,t(i),void 0,{number:!0}]]),e("button",{type:"button",class:"btn btn-primary text-white",onClick:l[2]||(l[2]=_=>(r.addToCart(t(o).id,t(i)),M(),t(c)()))}," 加入購物車 ")])])])])])])])],512)}}}),ve=r=>(Q("data-v-d4f0e511"),r=r(),W(),r),be={class:"container"},ge={class:"row mt-5"},ye={class:"category-list col-md-3 mb-4"},ke={id:"#cardOne",class:"card border-0"},we=ve(()=>e("div",{id:"headingOne",class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},[e("div",{class:"d-flex justify-content-center align-items-center pe-1"},[e("h4",{class:"mb-0"},"產品類別")])],-1)),Me={class:"card-body py-0"},Ce={key:0,class:"sidebar-categories list-unstyled"},xe=["onClick"],$e={class:"col-md-8"},Pe={key:0,class:"product-list row"},Ue={class:"card rounded-0 mb-4"},Re={class:"card-body text-start rounded-0 p-2"},Se={class:"card-img-wrapper position-relative mb-2"},Le=["onClick"],Te=["src","alt"],Ve={class:"card-text row"},Ie={class:"card-title col-12"},Oe={class:"col-12 d-flex justify-content-between"},je={class:"card-text fs-6 pt-1 mb-0"},Be=["disabled","onClick"],De={class:"d-flex justify-content-center"},Fe=T({__name:"UserProductsView",setup(r){const f=k(),w=k(""),o=k(null),v=ee(),{isLoading:p}=S(v),c=Y(),{getProductList:i,gotToProduct:M}=c,{products:u,tempProduct:l,categories:m}=S(c),_=X(),{addToCart:I}=_;N(()=>{let h=!0;window.innerWidth<767&&(h=!1),o.value=new q(w.value,{toggle:h})}),z(()=>{i()});const O=()=>{window.scrollTo({top:300,behavior:"smooth"})},j=(h,b)=>{var g;switch(h){case"findMore":l.value={...b},(g=f.value)==null||g.showModal();break}};return(h,b)=>{var P,U;const g=A("Loading");return a(),n(C,null,[y(J),e("div",be,[e("div",ge,[e("div",ye,[e("div",ke,[we,e("div",{id:"collapseOne",ref_key:"collapseRef",ref:w,class:"collapse","aria-labelledby":"headingOne","data-bs-parent":"#cardOne"},[e("div",Me,[(P=t(m))!=null&&P.length?(a(),n("ul",Ce,[(a(!0),n(C,null,L(t(m),s=>(a(),n("li",{key:s,class:"categories-item"},[e("a",{href:"#",class:E(["py-2 d-block text-muted",{active:s==="所有產品"?t(u).pagination.category==="":s===t(u).pagination.category}]),onClick:x(R=>{t(i)(1,`${s}`),O()},["prevent"])},d(s),11,xe)]))),128))])):$("",!0)])],512)])]),e("div",$e,[t(u).products.length?(a(),n("div",Pe,[(a(!0),n(C,null,L(t(u).products,s=>(a(),n("div",{key:s.id,class:"col-md-6"},[e("div",Ue,[e("div",Re,[e("div",Se,[e("a",{href:"#",class:"stretched-link",onClick:x(R=>t(M)(s),["prevent"])},[e("img",{class:"card-img rounded-0",src:s==null?void 0:s.imagesUrl[0],alt:s.title},null,8,Te)],8,Le)]),e("div",Ve,[e("h6",Ie,d(s.title),1),e("div",Oe,[e("p",je,d(t(Z)(s==null?void 0:s.price)),1),e("button",{type:"button",class:"btn btn-find-more btn-sm btn-primary text-white",disabled:t(p),onClick:x(R=>j("findMore",s),["prevent"])}," 加入購物車 ",8,Be)])])])])]))),128))])):$("",!0),e("div",De,[y(K,{ref:"paginationComponentRef",pagination:(U=t(u))==null?void 0:U.pagination,onChangePage:t(i)},null,8,["pagination","onChangePage"])])])])]),y(fe,{ref_key:"findMoreModalRef",ref:f,"temp-product":t(l),"add-to-cart":t(I)},null,8,["temp-product","add-to-cart"]),y(g,{active:t(p),"onUpdate:active":b[0]||(b[0]=s=>V(p)?p.value=s:null),"can-cancel":!0,"is-full-page":!0},null,8,["active"])],64)}}});const Ge=G(Fe,[["__scopeId","data-v-d4f0e511"]]);export{Ge as default};