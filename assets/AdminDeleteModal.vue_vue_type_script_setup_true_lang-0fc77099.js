import{u as y}from"./useModal-a2fd0851.js";import{b as g,r as M,o as a,c as n,f as e,q as s,l as m,n as u,s as b}from"./index-2c81f593.js";const k={class:"modal-dialog"},p={class:"modal-content border-0"},v={class:"modal-header bg-danger text-white"},x=e("h5",{id:"delProductModalLabel",class:"modal-title"},[e("span",null,"刪除產品")],-1),C={class:"modal-body"},I={key:0,class:"text-danger"},P={key:1,class:"text-danger"},w={class:"modal-footer"},D=g({__name:"AdminDeleteModal",props:{deleteItem:null},emits:["delete-item"],setup(d,{expose:f,emit:B}){const i=M(""),{showModal:_,hideModal:o}=y(i);return f({showModal:_,hideModal:o}),(h,t)=>{var r,c;return a(),n("div",{id:"deleteProductModal",ref_key:"deleteProductModalRef",ref:i,class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},[e("div",k,[e("div",p,[e("div",v,[x,e("button",{type:"button",class:"btn-close btn-close-white","aria-label":"Close",onClick:t[0]||(t[0]=(...l)=>s(o)&&s(o)(...l))})]),e("div",C,[m(" 是否刪除 "),"title"in d.deleteItem?(a(),n("strong",I,u((r=d.deleteItem)==null?void 0:r.title),1)):b("",!0),"user"in d.deleteItem?(a(),n("strong",P,u((c=d.deleteItem)==null?void 0:c.user.email),1)):b("",!0),m(" (刪除後將無法恢復)。 ")]),e("div",w,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[1]||(t[1]=(...l)=>s(o)&&s(o)(...l))},"取消"),e("button",{type:"button",class:"btn btn-danger",onClick:t[2]||(t[2]=l=>h.$emit("delete-item"))}," 確認刪除 ")])])])],512)}}});export{D as _};