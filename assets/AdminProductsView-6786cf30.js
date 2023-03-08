import{d as L,q as E,r as V,a as r,c,g as t,t as b,u as s,F as C,y as T,v as p,x as m,S as R,h as N,o as I,e as A,k as y,M as x,N as M,j as D,O as B}from"./index-ab88b64b.js";import{u as S}from"./useModal-90ffcec6.js";import{_ as O}from"./AdminDeleteModal.vue_vue_type_script_setup_true_lang-afd301bd.js";import{_ as j}from"./PaginationComponent.vue_vue_type_style_index_0_lang-51a51eba.js";import"./productStore-903e0647.js";import"./loadingStore-011b2871.js";const q={class:"modal-dialog modal-xl"},z={class:"modal-content"},F={class:"modal-header bg-dark text-white"},H={id:"productModalLabel",class:"modal-title"},X={class:"modal-body"},K={class:"row"},G={key:0,class:"col-sm-4"},J={class:"mb-3"},Q=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),W=["onUpdate:modelValue"],Y=["src","alt"],Z={key:0},tt={key:1},et={key:1},ot={class:"col-sm-8"},st={class:"mb-3"},lt=t("label",{for:"title",class:"form-label"},"標題",-1),nt={class:"row"},at={class:"mb-3 col-md-6"},it=t("label",{for:"category",class:"form-label"},"分類",-1),dt={class:"mb-3 col-md-6"},rt=t("label",{for:"price",class:"form-label"},"單位",-1),ct={class:"row"},ut={class:"mb-3 col-md-6"},pt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),mt={class:"mb-3 col-md-6"},_t=t("label",{for:"price",class:"form-label"},"售價",-1),bt=t("hr",null,null,-1),ft={class:"mb-3"},ht=t("label",{for:"description",class:"form-label"},"產品描述",-1),gt={class:"mb-3"},vt=t("label",{for:"content",class:"form-label"},"說明內容",-1),yt={class:"mb-3"},wt={class:"form-check"},$t=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),kt={class:"modal-footer"},Ut=L({__name:"AdminProductModal",props:{tempProduct:null,isNew:{type:Boolean}},emits:["update-product"],setup(w,{expose:h,emit:v}){const e=E(w,"tempProduct"),_=V(""),{showModal:g,hideModal:u}=S(_),$=()=>{e.value.imagesUrl=[""]};return h({showModal:g,hideModal:u}),(k,n)=>{var f,d,a,i;return r(),c("div",{id:"productModal",ref_key:"productModalRef",ref:_,class:"modal fade border-0",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},[t("div",q,[t("div",z,[t("div",F,[t("h5",H,[t("span",null,b(w.isNew?"新增產品":"編輯產品"),1)]),t("button",{type:"button",class:"btn-close btn-close-white","aria-label":"Close",onClick:n[0]||(n[0]=(...o)=>s(u)&&s(u)(...o))})]),t("div",X,[t("div",K,[Array.isArray((f=s(e))==null?void 0:f.imagesUrl)?(r(),c("div",G,[(r(!0),c(C,null,T((d=s(e))==null?void 0:d.imagesUrl,(o,l)=>(r(),c("div",{key:l},[t("div",J,[Q,p(t("input",{"onUpdate:modelValue":U=>s(e).imagesUrl[l]=U,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,W),[[m,s(e).imagesUrl[l]]])]),t("img",{class:"img-fluid mb-2",src:o,alt:`${o}:${l}`},null,8,Y)]))),128)),((i=s(e))==null?void 0:i.imagesUrl[((a=s(e))==null?void 0:a.imagesUrl.length)-1])!==""?(r(),c("div",Z,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:n[1]||(n[1]=o=>{var l;return(l=s(e))==null?void 0:l.imagesUrl.push("")})}," 新增圖片 ")])):(r(),c("div",tt,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100",onClick:n[2]||(n[2]=o=>{var l;return(l=s(e))==null?void 0:l.imagesUrl.pop()})}," 刪除圖片 ")]))])):(r(),c("div",et,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:$}," 新增圖片 ")])),t("div",ot,[t("div",st,[lt,p(t("input",{id:"title","onUpdate:modelValue":n[3]||(n[3]=o=>s(e).title=o),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[m,s(e).title]])]),t("div",nt,[t("div",at,[it,p(t("input",{id:"category","onUpdate:modelValue":n[4]||(n[4]=o=>s(e).category=o),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[m,s(e).category]])]),t("div",dt,[rt,p(t("input",{id:"unit","onUpdate:modelValue":n[5]||(n[5]=o=>s(e).unit=o),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[m,s(e).unit]])])]),t("div",ct,[t("div",ut,[pt,p(t("input",{id:"origin_price","onUpdate:modelValue":n[6]||(n[6]=o=>s(e).origin_price=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[m,s(e).origin_price,void 0,{number:!0}]])]),t("div",mt,[_t,p(t("input",{id:"price","onUpdate:modelValue":n[7]||(n[7]=o=>s(e).price=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[m,s(e).price,void 0,{number:!0}]])])]),bt,t("div",ft,[ht,p(t("textarea",{id:"description","onUpdate:modelValue":n[8]||(n[8]=o=>s(e).description=o),type:"text",class:"form-control",placeholder:"請輸入產品描述"},null,512),[[m,s(e).description]])]),t("div",gt,[vt,p(t("textarea",{id:"description","onUpdate:modelValue":n[9]||(n[9]=o=>s(e).content=o),type:"text",class:"form-control",placeholder:"請輸入說明內容"},null,512),[[m,s(e).content]])]),t("div",yt,[t("div",wt,[p(t("input",{id:"is_enabled","onUpdate:modelValue":n[10]||(n[10]=o=>s(e).is_enabled=o),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[R,s(e).is_enabled]]),$t])])])])]),t("div",kt,[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:n[11]||(n[11]=(...o)=>s(u)&&s(u)(...o))},"取消"),t("button",{type:"button",class:"btn btn-primary",onClick:n[12]||(n[12]=o=>k.$emit("update-product",s(e)))}," 確認 ")])])])],512)}}}),xt={class:"container"},Mt={class:"text-end mt-4"},Vt={class:"table mt-4"},Ct=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),Pt={key:0},Lt={class:"text-end"},Tt={class:"text-end"},Et={class:"btn-group"},Rt=["onClick"],Nt=["onClick"],It={class:"d-flex justify-content-center"},At={class:"text-center"},zt=L({__name:"AdminProductsView",setup(w){const{VITE_URL:h,VITE_PATH:v,VITE_TEXT:P}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"tuhacrt",VITE_TOKEN:"loginToken",VITE_TEXT:"Environment is in production build",BASE_URL:"/VL_CC/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},e=N({products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}),_=V(),g=V(),u=async(d=e.pagination.current_page||1)=>{var i;const a=`${h}/api/${v}/admin/products/?page=${d}`;e.isLoading=!0;try{const o=await x.get(a);e.isLoading=!1,e.products=o.data.products,e.pagination=o.data.pagination}catch(o){e.isLoading=!1,o instanceof M&&alert((i=o.response)==null?void 0:i.data.message)}};I(()=>{u()});const $=()=>{const d=`${h}/api/${v}/admin/product`,a=e.isNew?d:`${d}/${e.tempProduct.id}`;return{method:e.isNew?"post":"put",url:a}},k=async()=>{var i,o;const{method:d,url:a}=$();e.isLoading=!0;try{await x[d](a,{data:e.tempProduct}),(i=_.value)==null||i.hideModal(),u()}catch(l){l instanceof M&&alert((o=l.response)==null?void 0:o.data.message)}},n=async()=>{var a,i;const d=`${h}/api/${v}/admin/product/${e.tempProduct.id}`;e.isLoading=!0;try{await x.delete(d),(a=g.value)==null||a.hideModal(),u()}catch(o){e.isLoading=!1,o instanceof M&&alert((i=o.response)==null?void 0:i.data.message)}},f=(d,a={})=>{var i,o,l;switch(d){case"new":e.tempProduct={imagesUrl:[]},e.isNew=!0,(i=_.value)==null||i.showModal();break;case"edit":e.tempProduct={...a},e.isNew=!1,(o=_.value)==null||o.showModal();break;case"delete":e.tempProduct={...a},(l=g.value)==null||l.showModal();break}};return(d,a)=>{var o;const i=D("Loading");return r(),c(C,null,[t("div",xt,[t("div",Mt,[t("button",{type:"button",class:"btn btn-primary",onClick:a[0]||(a[0]=l=>f("new"))},"建立新的產品")]),t("table",Vt,[Ct,(o=e.products)!=null&&o.length?(r(),c("tbody",Pt,[(r(!0),c(C,null,T(e.products,l=>(r(),c("tr",{key:l.id},[t("td",null,b(l.category),1),t("td",null,b(l.title),1),t("td",Lt,b(l.origin_price),1),t("td",Tt,b(l.price),1),t("td",null,[t("span",{class:B({"text-success":l.is_enabled})},b(l.is_enabled?"啟用":"未啟用"),3)]),t("td",null,[t("div",Et,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:U=>f("edit",l)}," 編輯 ",8,Rt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:U=>f("delete",l)}," 刪除 ",8,Nt)])])]))),128))])):A("",!0)]),t("div",It,[y(j,{ref:"paginationComponentRef",pagination:e.pagination,onChangePage:u},null,8,["pagination"])]),t("div",At,[t("p",null,b(s(P)),1)])]),y(Ut,{ref_key:"productModalRef",ref:_,"temp-product":e.tempProduct,"is-new":e.isNew,onUpdateProduct:k},null,8,["temp-product","is-new"]),y(O,{ref_key:"deleteModalRef",ref:g,"delete-item":e.tempProduct,onDeleteItem:n},null,8,["delete-item"]),y(i,{active:e.isLoading,"onUpdate:active":a[1]||(a[1]=l=>e.isLoading=l),"can-cancel":!0,"is-full-page":!0},null,8,["active"])],64)}}});export{zt as default};
