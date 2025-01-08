import{d as G,D as pe,l as ve,u as be,r as v,s as ge,o as he,z as B,a as r,c as d,b as e,A as m,f as A,h as y,x as R,g as K,E as F,F as C,q as L,a3 as fe,a4 as ke,w as b,v as $,i as ye,p as E,C as N,Q as we}from"./index.130d352d.js";import{I as xe,_ as Ve}from"./Editor.12c17c74.js";/* empty css                   */import{a as Ue}from"./task.869bc814.js";import{a as Te}from"./task-tags.a2bb4060.js";const ae=h=>({"image/png":"png","image/jpg":"jpeg","image/jpeg":"jpeg"})[h],Ce=h=>new Promise((p,w)=>{const g=new FileReader;g.readAsArrayBuffer(h),g.onload=I=>{const{result:S}=I.target;p(S)},g.onerror=w}),Le={name:"ImageUploader",module:xe,options:{upload(h){return new Promise((p,w)=>{const{type:g,size:I}=h;if(!ae(g)){postMessage("danger","\u5716\u7247\u683C\u5F0F\u932F\u8AA4","\u50C5\u9650\u4E0A\u50B3 png\u3001jpg \u8207 jpeg \u6A94\u6848\u683C\u5F0F"),w(new Error("\u50C5\u9650\u4E0A\u50B3 png\u3001jpg \u8207 jpeg \u6A94\u6848\u683C\u5F0F"));return}const S=1024*1024*3;if(I>=S){postMessage("danger","\u5716\u7247\u904E\u5927","\u5716\u7247\u5927\u5C0F\u4E0D\u5F97\u8D85\u904E 3MB\u3002"),w(new Error("\u5716\u7247\u5927\u5C0F\u4E0D\u5F97\u8D85\u904E 3MB\u3002"));return}const O=`/v1/common/upload/image/${ae(g)}`;(async()=>{try{const x=await Ce(h),{data:V}=await G.get(O),P=V.image_url,j=V.upload_url,U={transformRequest(a,M){return delete M.common.Authorization,a},headers:{"Content-Type":g},withCredentials:!1};await G.put(j,x,U),p(P)}catch{postMessage("danger","\u5716\u7247\u4E0A\u50B3\u5931\u6557","\u5716\u7247\u4E0A\u50B3\u5931\u6557\uFF0C\u8ACB\u91CD\u65B0\u4E0A\u50B3\u3002"),w(new Error("\u5716\u7247\u4E0A\u50B3\u5931\u6557\u3002"))}})()})}}};const $e={class:"about task-detail px-4 mt-4"},Ie={class:"border-bottom border-light pb-2 mb-4"},Se={"aria-label":"breadcrumb"},Me={class:"breadcrumb"},Be={class:"breadcrumb-item"},Fe={class:"breadcrumb-item active","aria-current":"page"},je={class:"fs-4 mb-3"},qe={class:"my-3"},Ae={class:"row"},Re={class:"col-md-6"},Ee={class:"mb-3"},Ne=e("label",{class:"form-label",for:"name"},"\u4EFB\u52D9\u540D\u7A31",-1),Ge={class:"col-md-6"},Oe={class:"mb-3"},Pe=e("label",{class:"form-label",for:"taskGroupName"},"\u6240\u5C6C\u7FA4\u7D44",-1),ze={class:"position-relative"},De=["value"],Je=["required"],He={class:"col-md-6"},Qe={class:"mb-3"},Ke=e("label",{class:"form-label",for:"image_url"},"\u4EFB\u52D9\u5716\u7247 (1200 x 628)",-1),We={class:"mt-2"},Xe=["src"],Ye={key:1,class:"preview-block"},Ze={class:"col-md-6"},et={class:"mb-3"},tt=e("label",{class:"form-label",for:"taskPoint"},"\u4EFB\u52D9\u7A4D\u5206",-1),st={class:"mb-3"},at=e("label",{class:"form-label",for:"abstract"},"\u6458\u8981",-1),ot={class:"mb-3"},lt=e("label",{class:"form-label",for:"description"},"\u4EFB\u52D9\u5167\u5BB9\u8AAA\u660E",-1),nt={class:"mt-3 position-relative"},it={class:"card shadow-sm rounded-4 overflow-hidden mb-4"},rt={class:"card-header bg-white py-3"},dt={key:0},ct={class:"card-body card-body-height"},ut={class:"list list-unstyled"},_t={class:"form-check"},mt=["id","value"],pt=["for"],vt=e("hr",null,null,-1),bt={class:"row"},gt={class:"col-md-6"},ht={class:"card shadow-sm rounded-4 overflow-hidden mb-4"},ft=e("div",{class:"card-header bg-white py-3"},"\u4EFB\u52D9\u5B8C\u6210\u5F8C\u6703\u7372\u5F97\u7684\u6280\u80FD",-1),kt={class:"card-body card-body-height"},yt={class:"mb-3"},wt=e("label",{class:"form-label d-block h5",for:"summary"},null,-1),xt=["onUpdate:modelValue"],Vt=["onClick"],Ut={class:"col-md-6"},Tt={class:"card shadow-sm rounded-4 overflow-hidden mb-4"},Ct=e("div",{class:"card-header bg-white py-3"},"\u4EFB\u52D9\u5B8C\u6210\u689D\u4EF6",-1),Lt={class:"card-body card-body-height"},$t={class:"mb-3"},It=["onUpdate:modelValue"],St=["onClick"],Mt=e("hr",null,null,-1),Bt=e("h5",null,"\u662F\u5426\u5305\u542B\u7B49\u7D1A",-1),Ft={class:"form-check mb-3"},jt=e("label",{class:"form-check-label",for:"task-has-level"}," \u986F\u793A\u4EFB\u52D9\u5206\u968E\u7B49\u7D1A ",-1),qt={key:0,class:"my-3"},At=["onUpdate:modelValue"],Rt=["onClick"],Et=e("hr",null,null,-1),Nt=e("h5",null,"\u662F\u5426\u9700\u8981\u524D\u7F6E\u4EFB\u52D9",-1),Gt={class:"form-check mb-3"},Ot=e("label",{class:"form-check-label",for:"beforeStart"}," \u662F\u5426\u9700\u8981\u524D\u7F6E\u4EFB\u52D9 ",-1),Pt={key:1,class:"mb-3"},zt=e("label",{class:"form-label",for:"predecessor_task_id"},"\u524D\u7F6E\u4EFB\u52D9",-1),Dt=["value"],Jt=e("hr",null,null,-1),Ht={class:"row"},Qt={class:"col-md-6"},Kt={class:"mb-3"},Wt=e("label",{class:"form-label",for:"task_start_at"},"\u958B\u59CB\u6642\u9593",-1),Xt={class:"col-md-6"},Yt={class:"mb-3"},Zt=e("label",{class:"form-label",for:"task_expired_at"},"\u5230\u671F\u6642\u9593",-1),es={class:"form-check mb-3"},ts=e("label",{class:"form-check-label",for:"enable"}," \u662F\u5426\u555F\u7528\u4EFB\u52D9 ",-1),ss={class:"d-flex justify-content-end"},as={class:"d-flex flex-column align-items-end"},os=["disabled"],ls=e("i",{class:"fas fa-save"},null,-1),ns={key:0,class:"mb-0 mt-2 text-danger"},ps={__name:"TaskDetail",props:{type:{type:String}},setup(h){const p=h,{apiGetTasks:w,apiGetTaskGroupsList:g,apiGetTaskById:I,apiPostTask:S,apiPutTaskById:O}=Ue,{apiGetTaskTags:W}=Te,x=pe.useLoading(),V=ve(),P=be(),j=v(null),U=v(!1),a=v({name:"",task_group_id:"",image_url:"",tag_ids:[],rewarded_skills:[{content:""}],completion_criteria:[{content:""}],level:[]}),M=n=>{a.value[n].push({content:""})},z=(n,t)=>{a.value[n].splice(t,1)},q=v(""),D=v([]),J=v([]),H=v({current_page:1,total_page:1,total:0}),oe=async()=>{const n=x.show(),{task_groups:t}=await g({page:1,count:150}),{task_tags:o,pagination:i}=await W({page:1,count:150});D.value=t,J.value=o,H.value=i,n.hide()},T=v(!1),X=v([]),le=async n=>{const t=x.show(),{tasks:o}=await w({count:100,page:1,scoped:n});X.value=o.filter(i=>i.id!==q.value),t.hide()};ge(()=>T.value,n=>{if(n){const t=a.value.task_group_id;if(!t)R("danger","\u8ACB\u5148\u9078\u64C7\u4EFB\u52D9\u7FA4\u7D44","\u56E0\u524D\u7F6E\u4EFB\u52D9\u8981\u548C\u6B64\u4EFB\u52D9\u5728\u540C\u4E00\u500B\u7FA4\u7D44\u4E0B\uFF0C\u8ACB\u5148\u9078\u64C7\u4EFB\u52D9\u7FA4\u7D44");else{const o=`&filter=task_group&task_group_id=${t}`;le(o)}}});const Y=async n=>{var i,l,f,k;const t=x.show(),{task:o}=await I(n);a.value={name:o.name,task_group_id:(i=o==null?void 0:o.task_group)==null?void 0:i.id,predecessor_task_id:(l=o==null?void 0:o.predecessor_task)==null?void 0:l.id,tag_ids:o.tags.map(c=>c.id),rewarded_point:o.rewarded_point,abstract:o.abstract,description:o.description,rewarded_skills:o.rewarded_skills.map(c=>({content:c})),completion_criteria:o.completion_criteria.map(c=>({content:c})),level:o.level?o.level.map(c=>({content:c})):[],start_at:o.start_at?new Date(o.start_at).toLocaleDateString("sv-SE"):null,expired_at:o.expired_at?new Date(o.expired_at).toLocaleDateString("sv-SE"):null,enable:o.enable,image_url:o.image_url},(o==null?void 0:o.level)&&((f=o.level)==null?void 0:f.length)>0&&(U.value=!0),(o==null?void 0:o.predecessor_task)&&((k=o.predecessor_task)==null?void 0:k.id)&&(T.value=!0),t.hide()};he(async()=>{const{id:n}=V.params,{task_copy_id:t}=V.query;oe(),q.value=n,q.value&&Y(n),t&&!n&&Y(t)});const ne=async()=>{var i;a.value.description=j.value.editorContent,T.value||delete a.value.predecessor_task_id;const n=JSON.parse(JSON.stringify(a.value.completion_criteria.filter(l=>l.content!=="")));a.value.completion_criteria=n.map(l=>l.content);const t=JSON.parse(JSON.stringify(a.value.rewarded_skills.filter(l=>l.content!=="")));a.value.rewarded_skills=t==null?void 0:t.map(l=>l.content),((i=a.value.level)==null?void 0:i.length)===0?delete a.value.level:a.value.level=a.value.level?a.value.level.map(l=>l.content):[];const o=p.type==="create"?"\u65B0\u589E":"\u7DE8\u8F2F";try{Object.keys(a.value).forEach(l=>{a.value[l]===null&&delete a.value[l]}),p.type==="create"&&await S(a.value),p.type==="edit"&&await O(q.value,a.value),R("success",`${o}\u6210\u529F`,`${o}\u4EFB\u52D9\u6210\u529F`),P.push({name:"TaskList",query:V.query})}catch(l){R("danger",`${o}\u5931\u6557`,`${l.response.data.statusCode}:${l.response.data.message}`)}},Z=v(!1),ee=v(null),ie=n=>new Promise((t,o)=>{const i=new FileReader;i.readAsArrayBuffer(n),i.onload=l=>{const{result:f}=l.target;t(f)},i.onerror=o}),Q=(n,t)=>{Z.value=!1,n.target.value="",R("danger","\u5716\u7247\u4E0A\u50B3\u5931\u6557",`${t}`)},re=n=>{const t=x.show({container:ee.value,width:30,height:30}),o=n.target.files[0],i=3*1024*1024;if(o.size>i){Q(n,"\u5716\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u904E 3MB");return}if(o){const l=new FileReader;l.onload=f=>{const k=new Image;k.onload=()=>{const{width:c,height:s}=k;if(c===1200&&s===628){const _=`/v1/common/upload/image/${o.type.split("/")[1]}`;(async()=>{try{const te=await ie(o),{data:se}=await G.get(_),de=se.image_url,ce=se.upload_url,ue={transformRequest(_e,me){return delete me.common.Authorization,_e},headers:{"Content-Type":o.type},withCredentials:!1};await G.put(ce,te,ue),a.value.image_url=de,t.hide()}catch{Q(n,"\u5716\u7247\u4E0A\u50B3\u5931\u6557\uFF0C\u8ACB\u91CD\u65B0\u4E0A\u50B3\u3002")}})()}else Q(n,"\u5716\u7247\u5BEC\u9AD8\u9700\u7B26\u5408 1200 x 628")},k.src=f.target.result},l.readAsDataURL(o)}};return(n,t)=>{const o=B("router-link"),i=B("Field"),l=B("ErrorMessage"),f=B("v-select"),k=B("VForm");return r(),d("div",$e,[e("header",Ie,[e("nav",Se,[e("ol",Me,[e("li",Be,[m(o,{to:"/admin/task/list"},{default:A(()=>[K(" \u4EFB\u52D9\u5217\u8868 ")]),_:1})]),e("li",Fe,y(p.type==="create"?"\u65B0\u589E\u4EFB\u52D9":"\u7DE8\u8F2F\u4EFB\u52D9"),1)])])]),e("h1",je,y(p.type==="create"?"\u65B0\u589E\u4EFB\u52D9":"\u7DE8\u8F2F\u4EFB\u52D9"),1),e("div",qe,[m(k,{ref:"myForm",onSubmit:ne},{default:A(({errors:c})=>[e("div",Ae,[e("div",Re,[e("div",Ee,[Ne,m(i,{id:"name",modelValue:a.value.name,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value.name=s),name:"name",label:"\u4EFB\u52D9\u540D\u7A31",type:"text",class:F(["form-control",{"is-invalid":c.name}]),rules:{required:!0}},null,8,["modelValue","class"]),m(l,{name:"name",class:"invalid-feedback"})])]),e("div",Ge,[e("div",Oe,[Pe,e("div",ze,[m(i,{as:"select",id:"taskGroupName",modelValue:a.value.task_group_id,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value.task_group_id=s),name:"task_group_id",class:F(["form-select",{"is-invalid":c.task_group_id}]),label:"\u6240\u5C6C\u7FA4\u7D44",rules:{required:!0}},{default:A(()=>[(r(!0),d(C,null,L(D.value,s=>(r(),d("option",{key:s.id,value:s.id},y(s.name),9,De))),128))]),_:2},1032,["modelValue","class"]),m(f,{options:D.value,label:"name",class:"form-select position-absolute",modelValue:a.value.task_group_id,"onUpdate:modelValue":t[2]||(t[2]=s=>a.value.task_group_id=s),clearable:!1,reduce:s=>s.id,style:{border:"0",padding:"0",background:"white",width:"calc(100% - 2px)",left:"1px",top:"1px"}},{search:A(({attributes:s,events:u})=>[e("input",fe({class:"vs__search",required:!a.value.task_group_id},s,ke(u,!0)),null,16,Je)]),_:1},8,["options","modelValue","reduce"])]),m(l,{name:"task_group_id",class:"invalid-feedback"}),e("span",{class:F(["invalid-feedback",{"d-block":c.task_group_id}])},"\u6240\u5C6C\u7FA4\u7D44 \u70BA\u5FC5\u586B",2)])]),e("div",He,[e("div",Qe,[Ke,e("div",{class:"position-relative",ref_key:"imageLoadingRef",ref:ee},[e("input",{ref:"uploadTaskImageRef",type:"file",class:"form-control mb-2",accept:".png,.jpg,.jpeg",onChange:re},null,544)],512),m(i,{id:"image_url",modelValue:a.value.image_url,"onUpdate:modelValue":t[3]||(t[3]=s=>a.value.image_url=s),name:"image_url",label:"\u4EFB\u52D9\u5716\u7247",type:"text",disabled:Z.value,class:F(["form-control",{"is-invalid":c.image_url}]),rules:{required:!0}},null,8,["modelValue","disabled","class"]),m(l,{name:"image_url",class:"invalid-feedback"}),e("div",We,[a.value.image_url?(r(),d("img",{key:0,src:a.value.image_url,alt:"\u4EFB\u52D9\u5716\u7247",width:"300"},null,8,Xe)):(r(),d("div",Ye))])])]),e("div",Ze,[e("div",et,[tt,m(i,{id:"taskPoint",modelValue:a.value.rewarded_point,"onUpdate:modelValue":t[4]||(t[4]=s=>a.value.rewarded_point=s),modelModifiers:{number:!0},name:"rewarded_point",label:"\u4EFB\u52D9\u7A4D\u5206",type:"number",class:F(["form-control",{"is-invalid":c.rewarded_point}]),rules:{required:!0,min_value:10}},null,8,["modelValue","class"]),m(l,{name:"rewarded_point",class:"invalid-feedback"})])])]),e("div",st,[at,b(e("textarea",{class:"form-control",id:"abstract",placeholder:"","onUpdate:modelValue":t[5]||(t[5]=s=>a.value.abstract=s)},null,512),[[$,a.value.abstract]])]),e("div",ot,[lt,m(Ve,{ref_key:"editorRef",ref:j,content:a.value.description,modules:ye(Le)},null,8,["content","modules"])]),e("div",nt,[e("div",it,[e("div",rt,[K("\u4EFB\u52D9\u6A19\u7C64 "),H.value.total>0?(r(),d("small",dt," \uFF5C\u5DF2\u8F09\u5165 "+y(J.value.length)+" \u500B / \u5171 "+y(H.value.total)+" \u500B",1)):E("",!0)]),e("div",ct,[e("ul",ut,[(r(!0),d(C,null,L(J.value,(s,u)=>(r(),d("li",{key:`group-${u}`,class:"list-item"},[e("div",_t,[b(e("input",{"onUpdate:modelValue":t[6]||(t[6]=_=>a.value.tag_ids=_),name:"tag_ids",id:s.id,class:"form-check-input",type:"checkbox",value:s.id},null,8,mt),[[N,a.value.tag_ids]]),e("label",{class:"form-check-label",for:s.id},y(s.name),9,pt)]),vt]))),128))])])])]),e("div",bt,[e("div",gt,[e("div",ht,[ft,e("div",kt,[e("div",yt,[wt,(r(!0),d(C,null,L(a.value.rewarded_skills,(s,u)=>(r(),d("div",{class:"input-group mb-3",key:`skill_${u}`},[b(e("input",{type:"text",class:"form-control","onUpdate:modelValue":_=>s.content=_,placeholder:"\u6280\u80FD\u63CF\u8FF0","aria-label":"\u6280\u80FD\u63CF\u8FF0","aria-describedby":"button-addon2"},null,8,xt),[[$,s.content]]),e("button",{class:"btn btn-outline-danger",type:"button",id:"button-addon2",onClick:_=>z("rewarded_skills",u)}," \u522A\u9664 ",8,Vt)]))),128)),e("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:t[7]||(t[7]=s=>M("rewarded_skills"))}," \u65B0\u589E\u4E00\u5217 ")])])])]),e("div",Ut,[e("div",Tt,[Ct,e("div",Lt,[e("div",$t,[(r(!0),d(C,null,L(a.value.completion_criteria,(s,u)=>(r(),d("div",{class:"input-group mb-3",key:`complete_${u}`},[b(e("input",{type:"text",class:"form-control",placeholder:"\u5B8C\u6210\u689D\u4EF6","aria-label":"\u5B8C\u6210\u689D\u4EF6","onUpdate:modelValue":_=>s.content=_,"aria-describedby":"button-addon2"},null,8,It),[[$,s.content]]),e("button",{class:"btn btn-outline-danger",type:"button",id:"button-addon2",onClick:_=>z("completion_criteria",u)}," \u522A\u9664 ",8,St)]))),128)),e("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:t[8]||(t[8]=s=>M("completion_criteria"))}," \u65B0\u589E\u4E00\u5217 ")])])])])]),Mt,Bt,e("div",Ft,[b(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=s=>U.value=s),id:"task-has-level","true-value":!0,"false-value":!1},null,512),[[N,U.value]]),jt]),U.value?(r(),d("div",qt,[(r(!0),d(C,null,L(a.value.level,(s,u)=>(r(),d("div",{class:"input-group mb-3",key:`level_${u}`},[b(e("input",{type:"text",class:"form-control",placeholder:"\u7B49\u7D1A\u5167\u5BB9","aria-label":"\u7B49\u7D1A\u5167\u5BB9","onUpdate:modelValue":_=>s.content=_,"aria-describedby":"button-addon2"},null,8,At),[[$,s.content]]),e("button",{class:"btn btn-outline-danger",type:"button",id:"button-addon2",onClick:_=>z("level",u)}," \u522A\u9664 ",8,Rt)]))),128)),e("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:t[10]||(t[10]=s=>M("level"))}," \u65B0\u589E\u4E00\u5217 ")])):E("",!0),Et,Nt,e("div",Gt,[b(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[11]||(t[11]=s=>T.value=s),id:"beforeStart","true-value":!0,"false-value":!1},null,512),[[N,T.value]]),Ot]),T.value?(r(),d("div",Pt,[zt,b(e("select",{class:"form-select",id:"predecessor_task_id","onUpdate:modelValue":t[12]||(t[12]=s=>a.value.predecessor_task_id=s),"aria-label":"Floating label select example"},[(r(!0),d(C,null,L(X.value,s=>(r(),d("option",{value:s.id,key:s.id},y(s.name),9,Dt))),128))],512),[[we,a.value.predecessor_task_id]])])):E("",!0),Jt,e("div",Ht,[e("div",Qt,[e("div",Kt,[Wt,b(e("input",{type:"date",class:"form-control",id:"task_start_at","onUpdate:modelValue":t[13]||(t[13]=s=>a.value.start_at=s),placeholder:""},null,512),[[$,a.value.start_at]])])]),e("div",Xt,[e("div",Yt,[Zt,b(e("input",{type:"date",class:"form-control",id:"task_expired_at","onUpdate:modelValue":t[14]||(t[14]=s=>a.value.expired_at=s),placeholder:""},null,512),[[$,a.value.expired_at]])])])]),e("div",es,[b(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[15]||(t[15]=s=>a.value.enable=s),id:"enable","true-value":!0,"false-value":!1},null,512),[[N,a.value.enable]]),ts]),e("div",ss,[e("div",as,[e("button",{type:"submit",class:"btn btn-lg btn-primary mt-2",disabled:Object.keys(c).length>0},[ls,K(" "+y(p.type==="create"?"\u5EFA\u7ACB\u4EFB\u52D9":"\u5132\u5B58\u66F4\u65B0"),1)],8,os),Object.keys(c).length>0?(r(),d("p",ns," \u8ACB\u78BA\u8A8D\u4EFB\u52D9\u5FC5\u586B\u9805\u76EE\u662F\u5426\u586B\u5BEB\u5B8C\u6574\u3002 ")):E("",!0)])])]),_:1},512)])])}}};export{ps as default};