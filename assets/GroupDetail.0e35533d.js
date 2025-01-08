import{_ as le,l as ne,D as ie,r,s as re,o as ce,z as D,a as _,c as v,b as e,A as m,f as z,x as k,g as j,E as T,F as S,q as $,w as h,C as N,h as F,v as M,Q as de,R as ue,S as pe,y as _e}from"./index.130d352d.js";import{a as ve}from"./task.869bc814.js";import{a as he}from"./task-tags.a2bb4060.js";const i=y=>(ue("data-v-1ed1d075"),y=y(),pe(),y),me={class:"taskGroupDetail px-4 mt-4"},fe={class:"border-bottom border-light pb-2 mb-3"},ge={"aria-label":"breadcrumb"},be={class:"breadcrumb"},ke={class:"breadcrumb-item"},ye=i(()=>e("li",{class:"breadcrumb-item active","aria-current":"page"}," \u7DE8\u8F2F\u4EFB\u52D9\u7FA4\u7D44 ",-1)),Ge=i(()=>e("h1",{class:"fs-4"},"\u7DE8\u8F2F\u4EFB\u52D9\u7FA4\u7D44",-1)),Le={class:"row"},we={class:"col-md-6"},xe={class:"mb-3"},De=i(()=>e("label",{for:"taskGroupInfoName",class:"form-label"},"\u4EFB\u52D9\u7FA4\u7D44\u540D\u7A31",-1)),Ce={class:"col-md-6"},Ee={class:"mb-3"},Ve=i(()=>e("label",{for:"taskGroupInfoKeyword",class:"form-label"},"\u82F1\u6587\u540D\u7A31",-1)),Ue={class:"card shadow-sm rounded-4 overflow-hidden mb-3"},Ie=i(()=>e("div",{class:"card-header bg-white py-3"}," \u5206\u985E\u6A19\u7C64 ",-1)),Te={class:"list-unstyled mb-0"},Se={class:"form-check"},$e=["value","id","checked"],Ne=["for"],Fe=i(()=>e("hr",null,null,-1)),Me={class:"mb-3"},Re=i(()=>e("label",{for:"taskGroupDescription",class:"form-label"},"\u63CF\u8FF0",-1)),Ke={class:"row"},He={class:"col-md-6"},qe={class:"mb-3"},Ae=i(()=>e("label",{class:"form-label",for:"groupEnd"},"\u5230\u671F\u65E5",-1)),Be={class:"form-check mb-3"},Oe=["checked"],Pe=i(()=>e("label",{class:"form-check-label",for:"showCheck"}," \u662F\u5426\u986F\u793A ",-1)),ze=i(()=>e("hr",null,null,-1)),je={class:"my-3"},Qe=i(()=>e("label",{class:"form-label",for:"userGroup"},"\u5C0D\u61C9\u4F7F\u7528\u8005\u7FA4\u7D44",-1)),Je=i(()=>e("option",{value:"choose"},"\u9078\u64C7\u4F7F\u7528\u8005\u7FA4\u7D44",-1)),We=i(()=>e("option",{value:""},"\u4E0D\u8A2D\u5B9A",-1)),Xe=[Je,We],Ye={class:"card-header bg-white py-3"},Ze={class:"row align-items-center justify-content-between"},es={class:"col"},ss=i(()=>e("p",{class:"mb-sm-0"},"\u4F7F\u7528\u8005\u7FA4\u7D44\u5217\u8868",-1)),as={class:"small my-1"},os={class:"col-sm-6"},ts={class:"input-group"},ls={class:"list-unstyled mb-0"},ns={class:"form-check"},is=["value","id","checked"],rs=["for"],cs=i(()=>e("hr",null,null,-1)),ds=i(()=>e("button",{type:"submit",class:"btn btn-primary d-block ms-auto"}," \u78BA\u8A8D\u66F4\u65B0 ",-1)),us={__name:"GroupDetail",setup(y){const{apiGetTaskGroupDetail:Q,apiPutTaskGroupDetail:J}=ve,{apiGetUserGroups:W}=_e,{apiGetTaskTags:X}=he,Y=ne(),C=ie.useLoading(),u=r(""),p=r([]),t=r({}),R=async a=>{var c,n;const s=C.show();try{const{task_group:l}=await Q(a);t.value={...l},t.value.expired_at=new Date(t.value.expired_at).toLocaleDateString("sv-SE"),t.value.user_groups.length!==0&&(u.value="choose",t.value.user_groups.forEach(d=>{p.value.push(d.id)}))}catch(l){k("danger","\u53D6\u5F97\u4EFB\u52D9\u7FA4\u7D44\u5931\u6557",`${(c=l.response)==null?void 0:c.data.statusCode}:${(n=l.response)==null?void 0:n.data.message}`)}finally{s.hide()}},Z=()=>{u.value===""&&(p.value=[])},f=r([]),ee=()=>{f.value.forEach(a=>{t.value.user_groups.forEach(s=>{a.id===s.id&&(a.isChecked=!0,p.value.includes(a.id)||p.value.push(a.id))})})},G=r({userGroupsList:[],pagination:{total:100,count:10,total_page:10,current_page:1}}),K=r(1),E=r(!1),L=r(""),V=async({page:a=1,keyword:s=""}={})=>{const c=C.show();E.value=!0;try{const{groups:n,pagination:l}=await W({page:a,keyword:s});n.forEach(d=>{d.isChecked=!1}),G.value.userGroupsList=n,G.value.pagination=l,K.value=l.current_page,a===1?f.value=n:f.value=[...f.value,...n],ee()}catch(n){k("danger","\u53D6\u5F97\u4F7F\u7528\u8005\u7FA4\u7D44\u5217\u8868\u5931\u6557",`${n.response.data.statusCode}:${n.response.data.message}`)}finally{c.hide(),E.value=!1}},H=r(null),q=()=>{const a=H.value;a.addEventListener("scroll",s=>{if(s.target.clientHeight+s.target.scrollTop>=a.scrollHeight){if(E.value||G.value.pagination.current_page===G.value.pagination.total_page)return;V({page:K.value+1,keyword:L.value})}})};re(u,a=>{a==="choose"&&q()});const g=r([]),w=r([]),se=()=>{w.value.forEach(a=>{t.value.tags.forEach(s=>{a.name===s&&g.value.indexOf(a.id)===-1&&(a.isChecked=!0,g.value.push(a.id))})})},x=r({tagsList:[],pagination:{total:100,count:10,total_page:10,current_page:1}}),A=r(1),U=r(!1),B=async(a=1)=>{var c,n;const s=C.show();U.value=!0;try{const{task_tags:l,pagination:d}=await X({page:a});l.forEach(b=>{b.isChecked=!1}),x.value.tagsList=l,x.value.pagination=d,A.value=d.current_page,w.value=[...w.value,...l],se()}catch(l){k("danger","\u53D6\u5F97\u5206\u985E\u6A19\u7C64\u5217\u8868\u5931\u6557",`${(c=l.response)==null?void 0:c.data.statusCode}:${(n=l.response)==null?void 0:n.data.message}`)}finally{s.hide(),U.value=!1}},O=r(null),ae=()=>{const a=O.value;a.addEventListener("scroll",s=>{if(s.target.clientHeight+s.target.scrollTop>=a.scrollHeight){if(U.value||x.value.pagination.current_page===x.value.pagination.total_page)return;B(A.value+1)}})},oe=async a=>{try{const s={name:t.value.name,tag_ids:[...g.value],description:t.value.description,expired_at:new Date(t.value.expired_at).toISOString(),user_group_ids:[...p.value],enable:!!t.value.enable};await J(a,s),k("success","\u66F4\u65B0\u4EFB\u52D9\u7FA4\u7D44\u6210\u529F","\u5DF2\u6210\u529F\u7DE8\u8F2F\u4EFB\u52D9\u7FA4\u7D44"),R(a)}catch(s){k("danger","\u66F4\u65B0\u4EFB\u52D9\u7FA4\u7D44\u5931\u6557",`${s.response.data.statusCode}:${s.response.data.message}`)}},te=()=>{V({page:1,keyword:L.value})};return ce(async()=>{const{id:a}=Y.params;await R(a),V(),B(),u.value==="choose"&&q(),ae()}),(a,s)=>{const c=D("router-link"),n=D("Field"),l=D("ErrorMessage"),d=D("VForm");return _(),v("div",me,[e("header",fe,[e("nav",ge,[e("ol",be,[e("li",ke,[m(c,{to:"/admin/task/group"},{default:z(()=>[j(" \u4EFB\u52D9\u7FA4\u7D44 ")]),_:1})]),ye])]),Ge]),m(d,{ref:"taskGroupForm",onSubmit:s[9]||(s[9]=b=>oe(t.value.id))},{default:z(({errors:b})=>{var P;return[e("div",Le,[e("div",we,[e("div",xe,[De,m(n,{id:"taskGroupInfoName",modelValue:t.value.name,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value.name=o),name:"\u4EFB\u52D9\u7FA4\u7D44\u540D\u7A31",type:"text",class:T(["form-control",{"is-invalid":b.taskGroupInfoName}]),rules:"required"},null,8,["modelValue","class"]),m(l,{name:"taskGroupInfoName",class:"invalid-feedback"})])]),e("div",Ce,[e("div",Ee,[Ve,m(n,{disabled:"",id:"taskGroupInfoKeyword",modelValue:t.value.keyword,"onUpdate:modelValue":s[1]||(s[1]=o=>t.value.keyword=o),name:"taskGroupInfoKeyword",label:"\u82F1\u6587\u540D\u7A31",type:"text",class:T(["form-control",{"is-invalid":b.taskGroupInfoKeyword}]),rules:{required:!0}},null,8,["modelValue","class"]),m(l,{name:"taskGroupInfoKeyword",class:"invalid-feedback"})])])]),e("div",Ue,[Ie,e("div",{class:"card-body",ref_key:"tagListRef",ref:O},[e("ul",Te,[(_(!0),v(S,null,$(w.value,o=>(_(),v("li",{key:o.id},[e("div",Se,[h(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[2]||(s[2]=I=>g.value=I),value:o.id,id:o.id,checked:o.isChecked},null,8,$e),[[N,g.value]]),e("label",{class:"form-check-label",for:o.id},F(o.name),9,Ne)]),Fe]))),128))])],512)]),e("div",Me,[Re,h(e("textarea",{class:"form-control",id:"taskGroupDescription","onUpdate:modelValue":s[3]||(s[3]=o=>t.value.description=o),placeholder:"\u4EFB\u52D9\u7FA4\u7D44\u63CF\u8FF0"},null,512),[[M,t.value.description]])]),e("div",Ke,[e("div",He,[e("div",qe,[Ae,h(e("input",{type:"date",class:"form-control",id:"groupEnd","onUpdate:modelValue":s[4]||(s[4]=o=>t.value.expired_at=o)},null,512),[[M,t.value.expired_at]])])])]),e("div",Be,[h(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[5]||(s[5]=o=>t.value.enable=o),checked:t.value.enable,id:"showCheck"},null,8,Oe),[[N,t.value.enable]]),Pe]),ze,e("div",je,[Qe,h(e("select",{class:"form-select",id:"userGroup",onChange:Z,"onUpdate:modelValue":s[6]||(s[6]=o=>u.value=o)},Xe,544),[[de,u.value]])]),e("div",{class:T(["card shadow-sm rounded-4 overflow-hidden mb-4",u.value?"d-block":"d-none"])},[e("div",Ye,[e("div",Ze,[e("div",es,[ss,e("p",as,[j(" \u5DF2\u9078\u64C7\u7684\u7FA4\u7D44\uFF1A "),(_(!0),v(S,null,$((P=t.value)==null?void 0:P.user_groups,o=>(_(),v("span",{key:o.id,class:"badge rounded-pill bg-dark mx-1"},F(o.name),1))),128))])]),e("div",os,[e("div",ts,[h(e("input",{type:"text",class:"form-control",placeholder:"\u641C\u5C0B\u4F7F\u7528\u8005\u7FA4\u7D44","onUpdate:modelValue":s[7]||(s[7]=o=>L.value=o)},null,512),[[M,L.value]]),e("button",{class:"btn btn-secondary",type:"button",onClick:te},"\u641C\u5C0B")])])])]),e("div",{class:"card-body",ref_key:"userGroupsListRef",ref:H},[e("ul",ls,[(_(!0),v(S,null,$(f.value,o=>(_(),v("li",{key:o.id},[e("div",ns,[h(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[8]||(s[8]=I=>p.value=I),value:o.id,id:o.id,checked:o.isChecked},null,8,is),[[N,p.value]]),e("label",{class:"form-check-label",for:o.id},F(o.name),9,rs)]),cs]))),128))])],512)],2),ds]}),_:1},512)])}}},ms=le(us,[["__scopeId","data-v-1ed1d075"]]);export{ms as default};