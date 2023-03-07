import{d as f,h as v,o as E,a as c,c as d,g as t,F as u,D as T,e as k,k as p,t as o,u as L,M as w,N as C,j as V,Q as x}from"./index-415fa7e0.js";import{_ as y}from"./PaginationComponent.vue_vue_type_style_index_0_lang-ce9771b3.js";const N={class:"container"},P={class:"text-end mt-4"},I={class:"table mt-4"},$=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),A={key:0},R={class:"text-end"},D={class:"text-end"},U={class:"btn-group"},B=["onClick"],M=["onClick"],S={class:"d-flex justify-content-center"},O={class:"text-center"},X=f({__name:"AdminArticlesView",setup(j){const{VITE_URL:g,VITE_PATH:m,VITE_TEXT:h}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"tuhacrt",VITE_TOKEN:"loginToken",VITE_TEXT:"Environment is in production build",BASE_URL:"/VL_CC/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},e=v({products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}),_=async(i=e.pagination.current_page||1)=>{var l;const s=`${g}/api/${m}/admin/products/?page=${i}`;e.isLoading=!0;try{const a=await w.get(s);e.isLoading=!1,e.products=a.data.products,e.pagination=a.data.pagination}catch(a){e.isLoading=!1,a instanceof C&&alert((l=a.response)==null?void 0:l.data.message)}};E(()=>{_()});const r=(i,s={})=>{switch(i){case"new":e.tempProduct={imagesUrl:[]},e.isNew=!0;break;case"edit":e.tempProduct={...s},e.isNew=!1;break;case"delete":e.tempProduct={...s};break}};return(i,s)=>{var a;const l=V("Loading");return c(),d(u,null,[t("div",N,[t("div",P,[t("button",{class:"btn btn-primary",onClick:s[0]||(s[0]=n=>r("new"))},"建立新的產品")]),t("table",I,[$,(a=e.products)!=null&&a.length?(c(),d("tbody",A,[(c(!0),d(u,null,T(e.products,n=>(c(),d("tr",{key:n.id},[t("td",null,o(n.category),1),t("td",null,o(n.title),1),t("td",R,o(n.origin_price),1),t("td",D,o(n.price),1),t("td",null,[t("span",{class:x({"text-success":n.is_enabled})},o(n.is_enabled?"啟用":"未啟用"),3)]),t("td",null,[t("div",U,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:b=>r("edit",n)}," 編輯 ",8,B),t("button",{class:"btn btn-outline-danger btn-sm",onClick:b=>r("delete",n)}," 刪除 ",8,M)])])]))),128))])):k("",!0)]),t("div",S,[p(y,{ref:"paginationComponentRef",pagination:e.pagination,onChangePage:_},null,8,["pagination"])]),t("div",O,[t("p",null,o(L(h)),1)])]),p(l,{active:e.isLoading,"onUpdate:active":s[1]||(s[1]=n=>e.isLoading=n),"can-cancel":!0,"is-full-page":!0},null,8,["active"])],64)}}});export{X as default};
