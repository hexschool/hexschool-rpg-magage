import{t as I,r as m,o as $,B as L,j as R,a as U,e as q,f as w,b as e,h as _,i as p,w as F,v as j,M as N,D as S,l as z,u as O,z as V,c as G,A as o,x as v,g as P,E as k}from"./index.130d352d.js";import{a as H}from"./assistant.fec5cb3b.js";const J={class:"mb-4"},K={for:"title"},Q=["disabled"],W={__name:"DangerActionsModal",props:{body:{type:Object,default(){return{userId:String,type:String}}}},emits:["danger-user-method"],setup(A,{expose:x,emit:T}){const d=I(A,"body"),r=m(""),b=m(null),t=m(null);$(()=>{b.value=new L(t.value.hModal),t.value.hModal.addEventListener("hidden.bs.modal",()=>{r.value=""})});const i=R(()=>{const{type:c}=d.value;return c==="deleteTitle"?{title:"\u662F\u5426\u522A\u9664\u4EE5\u4E0B\u52A9\u6559\u7A31\u865F\uFF1F",body:{label:"\u8ACB\u518D\u6B21\u8F38\u5165\u52A9\u6559\u7A31\u865F",btn:"\u522A\u9664"}}:{body:{}}}),f=()=>{b.value.show()},h=()=>{b.value.hide()},D=()=>{const{type:c,userId:u}=d.value;T("danger-user-method",{userId:u,type:c})};return x({openModal:f,hideModal:h}),(c,u)=>(U(),q(N,{id:"userDangerActions",ref_key:"myModal",ref:t,"has-footer":!0,title:p(i).title},{body:w(()=>[e("p",J,_(p(d).name),1),e("label",K,_(p(i).body.label),1),F(e("input",{id:"title","onUpdate:modelValue":u[0]||(u[0]=l=>r.value=l),type:"text",class:"form-control"},null,512),[[j,r.value]])]),footer:w(()=>[e("button",{type:"button",class:"btn btn-primary",onClick:h},"\u53D6\u6D88"),e("button",{disabled:r.value!==p(d).name,type:"button",class:"btn btn-danger",onClick:D},_(p(i).body.btn),9,Q)]),_:1},8,["title"]))}},X={class:"about px-4 mt-4"},Y={"aria-label":"breadcrumb"},Z={class:"breadcrumb"},ee={class:"breadcrumb-item"},te=e("li",{class:"breadcrumb-item active","aria-current":"page"}," \u7DE8\u8F2F\u52A9\u6559\u7A31\u865F ",-1),se=e("h1",{class:"fs-4 mb-0"},"\u7DE8\u8F2F\u52A9\u6559\u7A31\u865F",-1),ae=e("hr",null,null,-1),oe={class:"card shadow-sm rounded-4 overflow-hidden mb-4"},le={class:"card-header bg-white py-3"},ne={class:"fs-6 mb-0 lh-base"},de={class:"mb-0"},ie={class:"card-body"},re={class:"mb-3"},ce=e("label",{for:"name",class:"form-label"},"\u7A31\u865F",-1),ue={class:"mb-3"},me=e("label",{for:"level",class:"form-label"},"\u7B49\u7D1A",-1),be={class:"mb-3"},pe=e("label",{for:"colorCode",class:"form-label"},"\u4EE3\u8868\u8272",-1),ve={class:"mb-3"},_e=e("label",{for:"description",class:"form-label"},"\u63CF\u8FF0",-1),fe={class:"card-footer bg-white py-3 d-flex justify-content-between"},he=["disabled"],Me={__name:"TitleDetail",setup(A){const{apiGetAssistantTitleDetail:x,apiPutAssistantTitleDetail:T,apiDeleteAssistantTitle:C}=H,d=S.useLoading(),r=z(),b=O(),t=m({}),i=m(null),f=m({}),h=({type:l,name:s})=>{i.value.openModal(),f.value={type:l,name:s}},D=async({type:l})=>{try{l==="deleteTitle"&&await C(t.value.id),v("success","\u5371\u96AA\u64CD\u4F5C\u6210\u529F\uFF0C3 \u79D2\u5F8C\u8DF3\u56DE\u52A9\u6559\u7A31\u865F, \u52A9\u6559\u7A31\u865F\u5DF2\u7D93\u88AB\u522A\u9664\u3002"),setTimeout(()=>{b.push("/admin/assistants/title")},3e3)}catch(s){v("danger","\u5371\u96AA\u64CD\u4F5C\u5931\u6557\uFF0C\u8ACB\u91CD\u65B0\u64CD\u4F5C",s)}finally{i.value.hideModal()}},c=async l=>{const s=d.show();try{const a={name:t.value.name,level:t.value.level,color_code:t.value.color_code,description:t.value.description};await T(l,a),v("success","\u66F4\u65B0\u6210\u529F","\u5DF2\u6210\u529F\u66F4\u65B0\u52A9\u6559\u7A31\u865F")}catch(a){v("danger","\u64CD\u4F5C\u5931\u6557",`${a.response.data.statusCode}:${a.response.data.message}`)}finally{s.hide()}},u=async l=>{const s=d.show();try{const{assistant_title_info:a}=await x(l);t.value=a}catch(a){v("danger","\u53D6\u5F97\u52A9\u6559\u7A31\u865F\u5931\u6557",`${a.response.data.statusCode}:${a.response.data.message}`)}finally{s.hide()}};return $(()=>{u(r.params.id)}),(l,s)=>{const a=V("router-link"),y=V("Field"),g=V("ErrorMessage"),B=V("VForm");return U(),G("div",X,[e("header",null,[e("nav",Y,[e("ol",Z,[e("li",ee,[o(a,{to:"/admin/assistants/title"},{default:w(()=>[P(" \u52A9\u6559\u7A31\u865F ")]),_:1})]),te])]),se,ae]),o(B,{ref:"refs"},{default:w(({errors:M,meta:E})=>[e("div",oe,[e("div",le,[e("h2",ne,_(t.value.name),1),e("p",de,[e("small",null,"\u76EE\u524D\u5171\u6709 "+_(t.value.apply_count)+" \u4EBA\u5957\u7528\u6B64\u7A31\u865F",1)])]),e("div",ie,[e("div",re,[ce,o(y,{id:"name",modelValue:t.value.name,"onUpdate:modelValue":s[0]||(s[0]=n=>t.value.name=n),name:"\u7A31\u865F",type:"text",class:k(["form-control",{"is-invalid":M.\u7A31\u865F}]),rules:"required"},null,8,["modelValue","class"]),o(g,{name:"\u7A31\u865F",class:"invalid-feedback"})]),e("div",ue,[me,o(y,{id:"level",modelValue:t.value.level,"onUpdate:modelValue":s[1]||(s[1]=n=>t.value.level=n),name:"\u7B49\u7D1A",type:"text",class:k(["form-control",{"is-invalid":M.\u7B49\u7D1A}]),rules:"required|numeric"},null,8,["modelValue","class"]),o(g,{name:"\u7B49\u7D1A",class:"invalid-feedback"})]),e("div",be,[pe,o(y,{id:"colorCode",modelValue:t.value.color_code,"onUpdate:modelValue":s[2]||(s[2]=n=>t.value.color_code=n),name:"\u4EE3\u8868\u8272",type:"color",class:k(["form-control form-control-color",{"is-invalid":M.\u4EE3\u8868\u8272}]),rules:"required"},null,8,["modelValue","class"]),o(g,{name:"\u4EE3\u8868\u8272",class:"invalid-feedback"})]),e("div",ve,[_e,o(y,{id:"description",modelValue:t.value.description,"onUpdate:modelValue":s[3]||(s[3]=n=>t.value.description=n),as:"textarea",name:"\u63CF\u8FF0",type:"text",class:k(["form-control",{"is-invalid":M.\u63CF\u8FF0}]),rules:"required"},null,8,["modelValue","class"]),o(g,{name:"\u63CF\u8FF0",class:"invalid-feedback"})])]),e("div",fe,[e("button",{type:"button",class:"btn btn-outline-danger",onClick:s[4]||(s[4]=n=>h({type:"deleteTitle",name:t.value.name}))}," \u522A\u9664 "),e("button",{type:"button",disabled:!E.valid,class:"btn btn-primary",onClick:s[5]||(s[5]=n=>c(t.value.id))}," \u66F4\u65B0 ",8,he)])])]),_:1},512),o(W,{ref_key:"dangerActionsModalRef",ref:i,body:f.value,onDangerUserMethod:D},null,8,["body"])])}}};export{Me as default};
