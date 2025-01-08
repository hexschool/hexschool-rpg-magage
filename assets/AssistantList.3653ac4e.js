import{_ as w,D as k,r as b,o as L,z as A,a as t,c as e,b as s,F as p,q as u,x as g,h as r,G as C,A as $,f as B,g as I,R as S,S as D}from"./index.130d352d.js";import{a as G}from"./assistant.fec5cb3b.js";const _=i=>(S("data-v-07e438cb"),i=i(),D(),i),M={class:"about px-4 mt-4 position-relative"},N=_(()=>s("header",{class:"d-flex align-items-center justify-content-between border-bottom border-light pb-2 mb-4"},[s("h1",{class:"fs-4 mb-0"}," \u52A9\u6559\u7BA1\u7406 ")],-1)),V={class:"card shadow-sm rounded-4 overflow-hidden mb-4"},z={class:"card-body p-0"},F={class:"table-responsive"},j={class:"table table-hover mb-0 text-nowrap",style:{"font-size":"14px"}},q=_(()=>s("thead",{class:"bg-light"},[s("tr",null,[s("th",{scope:"col",class:"ps-4 py-3 text-muted border-0"}," \u66B1\u7A31 "),s("th",{scope:"col",class:"py-3 text-muted border-0"}," \u6279\u6539\u5217\u8868 "),s("th",{scope:"col",class:"py-3 text-muted border-0"}," \u52A9\u6559\u7A31\u865F "),s("th",{scope:"col",class:"py-3 text-muted pe-3 border-0"}," \u7DE8\u8F2F ")])],-1)),E={class:"text-nowrap"},O={scope:"row",class:"ps-4"},R={class:"fs-6 mb-0"},T={class:"mb-0 text-muted"},H={class:"dropdown"},J=["onClick"],K={class:"dropdown-menu","aria-labelledby":"dropdownCourseButton"},P={key:1,class:"p-1"},Q=_(()=>s("small",null,"\u9084\u6C92\u6709\u52A0\u5165\u8AB2\u7A0B\u5594\uFF01",-1)),U=[Q],W={style:{"max-width":"100px"}},X={class:"d-flex flex-wrap"},Y={class:"pe-3"},Z=_(()=>s("span",{class:"material-icons align-middle fs-6"}," edit ",-1)),ss={__name:"AssistantList",setup(i){const{apiGetAssistantList:v,apiGetAssistantDetail:y}=G,h=k.useLoading(),m=b([]);L(async()=>{const l=h.show();try{const{assistants:o}=await v();m.value=o}catch(o){g("danger","\u53D6\u5F97\u52A9\u6559\u5217\u8868\u5931\u6557",`${o.response.data.statusCode}:${o.response.data.message}`)}finally{l.hide()}});const c=b([]),f=async l=>{const o=h.show();try{c.value={};const{video_courses:a}=await y(l);c.value=a}catch(a){g("danger","\u53D6\u5F97\u52A9\u6559\u8CC7\u8A0A\u5931\u6557",`${a.response.data.statusCode}:${a.response.data.message}`)}finally{o.hide()}};return(l,o)=>{const a=A("router-link");return t(),e("div",M,[N,s("div",V,[s("div",z,[s("div",F,[s("table",j,[q,s("tbody",E,[(t(!0),e(p,null,u(m.value,n=>(t(),e("tr",{key:n.user_id,class:"align-middle"},[s("td",O,[s("h5",R,r(n.nickname),1),s("p",T,r(n.email),1)]),s("td",null,[s("div",H,[s("a",{id:"dropdownCourseButton",href:"#","data-bs-toggle":"dropdown",onClick:C(d=>f(n.user_id),["prevent"])}," \u5C55\u958B\u5217\u8868 ",8,J),s("ul",K,[c.value.length?(t(!0),e(p,{key:0},u(c.value,d=>(t(),e("li",{key:d.id,class:"p-1"},[s("small",null,r(d.name),1)]))),128)):(t(),e("li",P,U))])])]),s("td",W,[s("div",X,[(t(!0),e(p,null,u(n.assistant_titles,(d,x)=>(t(),e("span",{key:x,class:"badge bg-light text-dark me-1 mb-1"},r(d),1))),128))])]),s("td",Y,[$(a,{to:`/admin/assistants/list/${n.user_id}`,class:"btn btn-sm btn-outline-gray"},{default:B(()=>[Z,I(" \u7DE8\u8F2F ")]),_:2},1032,["to"])])]))),128))])])])])])])}}},as=w(ss,[["__scopeId","data-v-07e438cb"]]);export{as as default};