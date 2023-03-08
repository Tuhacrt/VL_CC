import{d as T,q as j,r as V,a as n,c as i,g as t,t as d,u as e,e as v,v as z,x as B,n as F,s as S,k as f,F as $,y as P,j as D,z as I,A as N}from"./index-ab88b64b.js";import{u as q}from"./useModal-90ffcec6.js";import{U as A}from"./UserIndexIntro-72072cde.js";import{_ as E}from"./PaginationComponent.vue_vue_type_style_index_0_lang-51a51eba.js";import{u as Q}from"./cartStore-0e029e04.js";import{u as G}from"./productStore-903e0647.js";import{u as H}from"./loadingStore-011b2871.js";const J={class:"modal-dialog modal-xl",role:"document"},K={class:"modal-content border-0"},O={class:"modal-header bg-dark text-white"},W={id:"findMoreModalLabel",class:"modal-title"},X={class:"modal-body"},Y={class:"row"},Z={class:"col-sm-6"},tt=["src"],et={class:"col-sm-6"},ot={class:"badge bg-primary rounded-pill"},st={key:0,class:"h5"},nt={key:1},it={class:"h6"},dt={class:"h5"},lt={class:"input-group"},at=T({__name:"UserFindMoreModal",props:{tempProduct:null,addToCart:{type:Function}},setup(g,{expose:m}){const s=j(g,"tempProduct"),u=V(""),{showModal:y,hideModal:c}=q(u);let l=1;const b=()=>{l=1};return m({showModal:y,hideModal:c}),(k,a)=>{var _;return n(),i("div",{id:"findMoreModal",ref_key:"findMoreModalRef",ref:u,class:"modal fade",tabindex:"-1",role:"dialog","aria-labelledby":"findMoreModalLabel","aria-hidden":"true"},[t("div",J,[t("div",K,[t("div",O,[t("h5",W,[t("span",null,d(e(s).title),1)]),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close",onClick:a[0]||(a[0]=(...r)=>e(c)&&e(c)(...r))})]),t("div",X,[t("div",Y,[t("div",Z,[e(s).imagesUrl?(n(),i("img",{key:0,class:"img-fluid",src:(_=e(s))==null?void 0:_.imagesUrl[0],alt:""},null,8,tt)):v("",!0)]),t("div",et,[t("span",ot,d(e(s).category),1),t("p",null,"商品描述："+d(e(s).description),1),t("p",null,"商品內容："+d(e(s).content),1),e(s).price<e(s).origin_price?(n(),i("div",st,d(e(s).origin_price)+" 元 ",1)):(n(),i("div",nt,[t("del",it,"原價 "+d(e(s).origin_price)+" 元",1),t("div",dt,"現在只要 "+d(e(s).price)+" 元",1)])),t("div",null,[t("div",lt,[z(t("input",{"onUpdate:modelValue":a[1]||(a[1]=r=>F(l)?l.value=r:l=r),min:"1",type:"number",class:"form-control"},null,512),[[B,e(l),void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-primary",onClick:a[2]||(a[2]=r=>(g.addToCart(e(s).id,e(l)),b(),e(c)()))}," 加入購物車 ")])])])])])])])],512)}}}),rt={class:"container"},ct={class:"row mt-4"},ut={class:"col-md-4"},_t={class:"card border-0"},mt=t("div",{class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"},[t("div",{class:"d-flex justify-content-center align-items-center pe-1"},[t("h4",{class:"mb-0"},"產品類別"),t("div",{class:"border border-bottom border-primary"})])],-1),bt={class:"card-body py-0"},pt={key:0,class:"sidebar-categories list-unstyled"},ht=["onClick"],ft={class:"col-md-8"},vt={class:"table align-middle"},gt=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",null,"價格"),t("th")])],-1),yt={key:0},kt={style:{width:"200px"}},Mt={key:0},$t={class:"h6"},Ct={class:"h5"},xt={key:1,class:"h5"},wt={class:"btn-group btn-group-sm"},Ut=["disabled","onClick"],Lt=["disabled","onClick"],Rt=["disabled","onClick"],St={class:"d-flex justify-content-center"},Dt=T({__name:"UserProductsView",setup(g){const m=V(),C=H(),{isLoading:s}=S(C),u=G(),{getProductList:y,gotToProduct:c}=u,{products:l,tempProduct:b,categories:k}=S(u),a=Q(),{addToCart:_}=a,r=(x,p)=>{var h;switch(x){case"findMore":b.value={...p},(h=m.value)==null||h.showModal();break}};return(x,p)=>{var w,U,L,R;const h=D("Loading");return n(),i($,null,[f(A),t("div",rt,[t("div",ct,[t("div",ut,[t("div",_t,[mt,t("div",bt,[(w=e(k))!=null&&w.length?(n(),i("ul",pt,[(n(!0),i($,null,P(e(k),o=>(n(),i("li",{key:o,class:"categories-item"},[t("a",{href:"#",class:"py-2 d-block text-muted",onClick:I(M=>e(y)(1,`${o==="所有產品"?"":o}`),["prevent"])},d(o),9,ht)]))),128))])):v("",!0)])])]),t("div",ft,[t("table",vt,[gt,(L=(U=e(l))==null?void 0:U.products)!=null&&L.length?(n(),i("tbody",yt,[(n(!0),i($,null,P((R=e(l))==null?void 0:R.products,o=>(n(),i("tr",{key:o.id},[t("td",kt,[o.imagesUrl?(n(),i("div",{key:0,style:N([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${o==null?void 0:o.imagesUrl[0]})`}])},null,4)):v("",!0)]),t("td",null,d(o.title),1),t("td",null,[o.price<o.origin_price?(n(),i("div",Mt,[t("del",$t,"原價 "+d(o.origin_price)+" 元",1),t("div",Ct,d(o.price)+" 元",1)])):(n(),i("div",xt,d(o.origin_price)+" 元",1))]),t("td",null,[t("div",wt,[t("button",{type:"button",class:"btn btn-outline-secondary",disabled:e(s),onClick:M=>e(c)(o)}," 詳細頁面 ",8,Ut),t("button",{type:"button",class:"btn btn-outline-secondary",disabled:e(s),onClick:M=>r("findMore",o)}," 查看描述 ",8,Lt),t("button",{type:"button",class:"btn btn-outline-danger",disabled:e(s),onClick:M=>e(_)(o.id)}," 加到購物車 ",8,Rt)])])]))),128))])):v("",!0)])])]),t("div",St,[f(E,{ref:"paginationComponentRef"},null,512)])]),f(at,{ref_key:"findMoreModalRef",ref:m,"temp-product":e(b),"add-to-cart":e(_)},null,8,["temp-product","add-to-cart"]),f(h,{active:e(s),"onUpdate:active":p[0]||(p[0]=o=>F(s)?s.value=o:null),"can-cancel":!0,"is-full-page":!0},null,8,["active"])],64)}}});export{Dt as default};
