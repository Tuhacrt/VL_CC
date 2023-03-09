import{d as h,B as k,s as y,o as U,a as c,c as d,g as t,u as o,e as x,t as n,v as C,x as S,k as _,n as L,F as P,j as V}from"./index-cb6d3577.js";import{u as w}from"./cartStore-693fbbfa.js";import{u as B}from"./useMoney-3d143ec2.js";import{U as M}from"./UserMayLike-6d3cc65a.js";import{u as N}from"./loadingStore-e744f77d.js";const R={class:"container-fluid bg-background"},T={class:"container py-5"},q={class:"about"},D={class:"modal-body"},F={class:"row"},$={class:"col-sm-6"},j=["src"],E={class:"col-sm-6"},z={class:"badge bg-primary rounded-pill"},A={key:0,class:"h5"},G={key:1},H={class:"h6 text-muted"},I={class:"h5"},J={class:"input-group"},K=h({__name:"UserProductComponent",setup(b){const l=k(),i=w(),{addToCart:m}=i,a=B(),{getProduct:u}=a,{tempProduct:s}=y(a),p=1;return U(()=>{var e,r;const{id:v}=s.value;v!==((e=l.params)==null?void 0:e.id)&&u((r=l.params)==null?void 0:r.id)}),(v,e)=>{var r,g;return c(),d("div",R,[t("div",T,[t("div",q,[t("div",D,[t("div",F,[t("div",$,[(r=o(s))!=null&&r.imagesUrl?(c(),d("img",{key:0,class:"img-fluid",src:(g=o(s))==null?void 0:g.imagesUrl[0],alt:""},null,8,j)):x("",!0)]),t("div",E,[t("h1",null,n(o(s).title),1),t("span",z,n(o(s).category),1),t("p",null,"商品描述："+n(o(s).description),1),t("p",null,"商品內容："+n(o(s).content),1),o(s).price?(c(),d("div",G,[t("del",H,"原價 "+n(o(s).origin_price)+" 元",1),t("div",I,"現在只要 "+n(o(s).price)+" 元",1)])):(c(),d("div",A,n(o(s).origin_price)+" 元",1)),t("div",null,[t("div",J,[C(t("input",{"onUpdate:modelValue":e[0]||(e[0]=f=>p=f),"aria-label":"quantity-input",min:"1",type:"number",class:"form-control"},null,512),[[S,p,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-primary text-white",onClick:e[1]||(e[1]=f=>o(m)(o(s).id,p))}," 加入購物車 ")])])])])])])])])}}}),Z=h({__name:"UserProductView",setup(b){const l=N(),{isLoading:i}=y(l);return(m,a)=>{const u=V("Loading");return c(),d(P,null,[_(K),_(M),_(u,{active:o(i),"onUpdate:active":a[0]||(a[0]=s=>L(i)?i.value=s:null),"can-cancel":!0,"is-full-page":!0},null,8,["active"])],64)}}});export{Z as default};
