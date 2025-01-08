import{_ as ee,D as te,r as d,o as G,z as E,a as T,e as ae,f as x,A as l,M as ne,b as e,E as q,c as S,p as ge,B as se,x as y,R as oe,S as le,d as Y,h as B,u as ve,w as fe,v as he,O as ye,g as k,F as J,q as Z,i as be,G as M,P as we}from"./index.130d352d.js";/* empty css                   */import{a as Q}from"./training.364160a1.js";const L=v=>(oe("data-v-d6efec27"),v=v(),le(),v),$e={class:"row"},xe={class:"col-md-6"},ke={class:"mb-3"},Me=L(()=>e("label",{for:"name",class:"form-label text-dark"},"\u57F9\u8A13\u73ED\u540D\u7A31",-1)),Te={class:"row"},Le={class:"col-md-6"},Ve={class:"mb-3"},De=L(()=>e("label",{for:"start_at",class:"form-label text-dark"},"\u57F9\u8A13\u73ED\u958B\u59CB\u6642\u9593",-1)),Ie={class:"col-md-6"},Ce={class:"mb-3"},Re=L(()=>e("label",{for:"end_at",class:"form-label text-dark"},"\u57F9\u8A13\u73ED\u7D50\u675F\u6642\u9593",-1)),Se={class:"row"},Be={class:"col-md-6"},Ue={class:"mb-3"},ze=L(()=>e("label",{for:"training-img",class:"form-label text-dark"},"\u4E0A\u50B3\u5C01\u9762",-1)),Fe={class:"mb-2"},je=L(()=>e("small",{class:"text-primary"},"\u9650\u5236\u5716\u7247\u5C3A\u5BF8 1200*628",-1)),Ae={class:"col-md-6 d-flex justify-content-center align-items-center"},Ee=["src"],Ne={class:"row"},Pe={class:"col-md-6"},qe={class:"mb-3"},Ge=L(()=>e("label",{for:"discord_role",class:"form-label text-dark"},"\u5C0D\u61C9 Discord \u8EAB\u4EFD\u7D44",-1)),Ke=L(()=>e("hr",{class:"my-4"},null,-1)),Oe={class:"d-flex justify-content-end"},He=L(()=>e("button",{type:"button",class:"btn btn-outline-secondary me-2","data-bs-dismiss":"modal"}," \u53D6\u6D88 ",-1)),Je=["disabled"],Qe={__name:"TrainingModal",emits:["getTrainingList"],setup(v,{expose:z,emit:F}){const V=te.useLoading(),{apiPostTraining:j,apiGetDiscordRoles:g}=Q,s=d({name:"",start_at:"",end_at:"",cover_url:"",discord_role:""}),w=d(null),I=d(null),b=d(null);G(()=>{b.value=new se(I.value.hModal)});const C=()=>{b.value.show()},f=()=>{b.value.hide()},D=d(!1),R=d(""),N=o=>{o.complete&&(o.width===1200&&o.height===628?D.value=!0:(D.value=!1,R.value=`${o.width}x${o.height}`,y("danger","\u5716\u7247\u5C3A\u5BF8\u932F\u8AA4",`\u76EE\u524D\u5716\u7247\u5C3A\u5BF8\u70BA\uFF1A${R.value}`)))},K=o=>{const n=new Image;n.src=o,n.onload=()=>N(n),n.onerror=()=>{D.value=!1,y("danger","\u5716\u7247\u5C3A\u5BF8\u932F\u8AA4","\u5716\u7247\u7DB2\u5740\u932F\u8AA4")}},O=async()=>{var o,n,r,_;try{D.value?(await j(s.value),y("success","\u65B0\u589E\u57F9\u8A13\u73ED\u6210\u529F",`\u6210\u529F\u65B0\u589E ${s.value.name}`),F("getTrainingList")):y("danger","\u65B0\u589E\u57F9\u8A13\u73ED\u5931\u6557","\u5716\u7247\u5C3A\u5BF8\u932F\u8AA4")}catch(h){y("danger","\u65B0\u589E\u57F9\u8A13\u73ED\u5931\u6557",`${(n=(o=h==null?void 0:h.response)==null?void 0:o.data)==null?void 0:n.statusCode} : ${(_=(r=h==null?void 0:h.response)==null?void 0:r.data)==null?void 0:_.message}`)}s.value={name:"",start_at:"",end_at:"",cover_url:"",discord_role:""},f()},p=d(!1),t=d(null),m=o=>new Promise((n,r)=>{const _=new FileReader;_.readAsArrayBuffer(o),_.onload=h=>{const{result:A}=h.target;n(A)},_.onerror=r}),a=(o,n)=>{p.value=!1,o.target.value="",y("danger","\u5716\u7247\u4E0A\u50B3\u5931\u6557",`${n}`)},i=d([]);G(async()=>{try{const{discord_roles:o}=await g();i.value=o}catch{y("danger","\u53D6\u5F97 Discord \u8EAB\u4EFD\u7D44\u5931\u6557","\u53D6\u5F97 Discord \u8EAB\u4EFD\u7D44\u5931\u6557")}});const ie=o=>{p.value=!0;const n=V.show({container:t.value,width:30,height:30}),r=o.target.files[0],_=3*1024*1024;if(r.size>_){a(o,"\u5716\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u904E 3MB"),n.hide();return}if(r){const A=`/v1/common/upload/image/${r.type.split("/")[1]}`,u=new FileReader;u.onload=H=>{const c=new Image;c.onload=()=>{const{width:de,height:re}=c;de===1200&&re===628?(async()=>{try{const W=await m(r),{data:X}=await Y.get(A),ce=X.image_url,ue=X.upload_url,me={transformRequest(pe,_e){return delete _e.common.Authorization,pe},headers:{"Content-Type":r.type},withCredentials:!1};await Y.put(ue,W,me),s.value.cover_url=ce,p.value=!1,n.hide()}catch{a(o,"\u5716\u7247\u4E0A\u50B3\u5931\u6557\uFF0C\u8ACB\u91CD\u65B0\u4E0A\u50B3\u3002"),n.hide()}})():(a(o,"\u5716\u7247\u5BEC\u9AD8\u9700\u7B26\u5408 1200 x 628"),n.hide())},c.src=H.target.result},u.readAsDataURL(r)}};return z({openModal:C,hideModal:f}),(o,n)=>{const r=E("Field"),_=E("ErrorMessage"),h=E("v-select"),A=E("VForm");return T(),ae(A,{ref_key:"formRef",ref:w,onSubmit:O},{default:x(({errors:u,meta:H})=>[l(ne,{id:"createTrainingModal",ref_key:"modalRef",ref:I,title:"\u65B0\u589E\u57F9\u8A13\u73ED",modalSize:"modal-lg","has-footer":!1},{body:x(()=>[e("div",$e,[e("div",xe,[e("div",ke,[Me,l(r,{modelValue:s.value.name,"onUpdate:modelValue":n[0]||(n[0]=c=>s.value.name=c),id:"name",name:"name",label:"\u57F9\u8A13\u73ED\u540D\u7A31",type:"text",class:q([{"is-invalid":u==null?void 0:u.name},"form-control"]),placeholder:"ex: Vue \u76F4\u64AD\u73ED 2022 \u6625\u5B63\u73ED",rules:"required"},null,8,["modelValue","class"]),l(_,{name:"name",class:"invalid-feedback"})])])]),e("div",Te,[e("div",Le,[e("div",Ve,[De,l(r,{modelValue:s.value.start_at,"onUpdate:modelValue":n[1]||(n[1]=c=>s.value.start_at=c),id:"start_at",name:"start_at",label:"\u958B\u59CB\u6642\u9593",type:"date",class:q([{"is-invalid":u==null?void 0:u.start_at},"form-control"]),placeholder:"ex: Vue \u76F4\u64AD\u73ED 2022 \u6625\u5B63\u73ED",rules:"required","format-value":"yyyy-MM-dd"},null,8,["modelValue","class"]),l(_,{name:"start_at",class:"invalid-feedback"})])]),e("div",Ie,[e("div",Ce,[Re,l(r,{modelValue:s.value.end_at,"onUpdate:modelValue":n[2]||(n[2]=c=>s.value.end_at=c),id:"end_at",name:"end_at",label:"\u7D50\u675F\u6642\u9593",type:"date",class:q([{"is-invalid":u==null?void 0:u.end_at},"form-control"]),rules:"required","format-value":"yyyy-MM-dd"},null,8,["modelValue","class"]),l(_,{name:"end_at",class:"invalid-feedback"})])])]),e("div",Se,[e("div",Be,[e("div",Ue,[ze,e("div",Fe,[l(r,{modelValue:s.value.cover_url,"onUpdate:modelValue":n[3]||(n[3]=c=>s.value.cover_url=c),id:"cover_url",name:"cover_url",label:"\u5C01\u9762\u7DB2\u5740",placeholder:"\u5716\u7247\u7DB2\u5740",type:"url",class:q([{"is-invalid":u==null?void 0:u.cover_url},"form-control"]),disabled:p.value,onInput:n[4]||(n[4]=c=>K(s.value.cover_url)),rules:{required:!0,url:!0}},null,8,["modelValue","class","disabled"]),l(_,{name:"cover_url",class:"invalid-feedback"})]),e("div",{class:"position-relative",ref_key:"coverImageLoadingRef",ref:t},[e("input",{type:"file",class:"inputFile form-control",accept:".png,.jpg,.jpeg",id:"training-img",placeholder:"ex: \u76F4\u64AD\u73ED\u5C01\u9762\u5716",onChange:ie},null,32),je],512)])]),e("div",Ae,[s.value.cover_url?(T(),S("img",{key:0,class:"img-fluid",src:s.value.cover_url,style:{height:"200px"}},null,8,Ee)):ge("",!0)])]),e("div",Ne,[e("div",Pe,[e("div",qe,[Ge,l(h,{label:"Discord role",modelValue:s.value.discord_role,"onUpdate:modelValue":n[5]||(n[5]=c=>s.value.discord_role=c),options:i.value.map(c=>c.name),clearable:!1},null,8,["modelValue","options"])])])]),Ke,e("div",Oe,[He,e("button",{type:"submit",class:"btn btn-primary",disabled:!H.valid}," \u78BA\u8A8D\u65B0\u589E ",8,Je)])]),_:2},1536)]),_:1},512)}}},We=ee(Qe,[["__scopeId","data-v-d6efec27"]]),Xe={class:"h4 text-dark mb-3 fw-bold"},Ye=e("p",{class:"text-danger mb-2"},"\u8ACB\u6CE8\u610F\uFF01\u522A\u9664\u5F8C\u5C07\u7121\u6CD5\u5FA9\u539F",-1),Ze={class:"d-flex justify-content-end"},et=e("button",{type:"button",class:"btn btn-primary me-2","data-bs-dismiss":"modal"}," \u53D6\u6D88 ",-1),tt={__name:"DeleteTrainingModal",props:{trainingName:{type:String,default:""},trainingId:{type:String,default:""}},emits:["getTrainingList"],setup(v,{expose:z,emit:F}){const V=v,{apiDeleteTraining:j}=Q,g=d(null),s=d(null);G(()=>{s.value=new se(g.value.hModal)});const I=()=>{s.value.show()},b=()=>{s.value.hide()},$=async C=>{try{await j(C),y("success","\u6210\u529F\u522A\u9664\u57F9\u8A13\u73ED","\u6210\u529F\u522A\u9664\u57F9\u8A13\u73ED")}catch(f){y("danger","\u522A\u9664\u57F9\u8A13\u73ED\u5931\u6557",`${f.response.data.statusCode}:${f.response.data.message}`)}F("getTrainingList"),b()};return z({openModal:I,hideModal:b}),(C,f)=>(T(),ae(ne,{id:"deleteTrainingModal",ref_key:"modalRef",ref:g,title:"\u662F\u5426\u522A\u9664\u6B64\u76F4\u64AD\u73ED\uFF1F",modalSize:" modal-dialog-centered","has-footer":!1},{body:x(()=>[e("h5",Xe,B(V.trainingName),1),Ye,e("div",Ze,[et,e("button",{type:"submit",class:"btn btn-danger",onClick:f[0]||(f[0]=D=>$(V.trainingId))}," \u522A\u9664\u76F4\u64AD\u73ED ")])]),_:1},512))}};const U=v=>(oe("data-v-4073a28b"),v=v(),le(),v),at={class:"container-fluid px-4 pt-4 pb-6"},nt=U(()=>e("h1",{class:"fs-4 mb-5"},"\u57F9\u8A13\u73ED\u5217\u8868",-1)),st={class:"mb-3"},ot=U(()=>e("span",{class:"material-icons align-middle"}," add ",-1)),lt={class:"mb-5"},it={class:"table mb-0 text-nowrap align-middle",style:{"font-size":"14px"}},dt=U(()=>e("thead",{class:"bg-soft"},[e("tr",null,[e("th",{class:"ps-3 py-2 text-muted border-0 w-25"},"\u540D\u7A31"),e("th",{class:"py-2 text-muted border-0",width:"200"},"\u4E0A\u8AB2\u6642\u9593"),e("th",{class:"py-2 text-muted border-0",width:"150"},"\u5831\u540D\u4EBA\u6578"),e("th",{class:"py-2 text-muted border-0 w-50"},"\u4F7F\u7528\u8005\u7FA4\u7D44"),e("th",{class:"py-2 text-muted border-0"})])],-1)),rt={class:"ps-3"},ct={class:""},ut=U(()=>e("br",null,null,-1)),mt={class:""},pt={class:"scrollbar"},_t={class:"badge text-dark"},gt={class:"pe-3"},vt={class:"dropdown"},ft=U(()=>e("a",{class:"btn btn-outline-primary dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," \u64CD\u4F5C ",-1)),ht={class:"dropdown-menu dropdown-menu-start py-0 overflow-hidden"},yt=U(()=>e("li",null,[e("hr",{class:"dropdown-divider"})],-1)),bt=["onClick"],wt=["onClick"],$t={class:"d-flex flex-wrap justify-content-center"},xt={__name:"TrainingList",setup(v){const{apiGetTrainingList:z,apiPostTrainingDuplicate:F}=Q,V=te.useLoading(),j=ve(),g=d({trainingClassesList:[],pagination:{total:10,count:10,total_page:10,current_page:1}}),s=d(""),w=async(p=1)=>{var m,a;const t=V.show();try{const{training_classes:i,pagination:P}=await z({page:p,name:s.value});g.value.trainingClassesList=i,g.value.pagination=P}catch(i){y("danger","\u53D6\u5F97\u57F9\u8A13\u73ED\u5217\u8868\u5931\u6557",`${(m=i.response)==null?void 0:m.data.statusCode}:${(a=i.response)==null?void 0:a.data.message}`)}finally{t.hide()}};G(w);const I=p=>{w(p)},b=d(!1),$=d(""),C=()=>{$.value?($.value=$.value.trim(),s.value=`&name=${$.value}`):s.value="",w()},f=d(null),D=()=>{f.value.openModal()},R=d({}),N=d(null),K=p=>{R.value={...p},N.value.openModal()},O=async p=>{var m,a;const t=V.show();try{const i={training_class_id:p},{training_class:P}=await F(i);await w(),j.push(`/admin/training/${P.id}`)}catch(i){y("danger","\u8907\u88FD\u57F9\u8A13\u73ED\u5931\u6557",`${(m=i.response)==null?void 0:m.data.statusCode}:${(a=i.response)==null?void 0:a.data.message}`)}finally{t.hide()}};return(p,t)=>{const m=E("router-link");return T(),S(J,null,[e("div",at,[nt,e("div",st,[fe(e("input",{id:"search",onCompositionstart:t[0]||(t[0]=a=>b.value=!0),onCompositionend:t[1]||(t[1]=a=>b.value=!1),"onUpdate:modelValue":t[2]||(t[2]=a=>$.value=a),onKeydown:t[3]||(t[3]=ye(M(()=>{b.value||C()},["prevent"]),["enter"])),type:"text",placeholder:"\u641C\u5C0B\u57F9\u8A13\u73ED\u540D\u7A31",class:"form-control w-25"},null,544),[[he,$.value]])]),e("div",{class:"d-flex justify-content-end mb-3"},[e("button",{id:"addTraining",type:"button",class:"btn btn-primary",onClick:D},[ot,k(" \u65B0\u589E\u57F9\u8A13\u73ED ")])]),e("div",lt,[e("table",it,[dt,e("tbody",null,[(T(!0),S(J,null,Z(g.value.trainingClassesList,a=>(T(),S("tr",{key:a.id},[e("td",rt,B(a.name),1),e("td",ct,[k(B(new Date(a.start_at).toLocaleDateString("sv-SE")),1),ut,k(B(new Date(a.end_at).toLocaleDateString("sv-SE")),1)]),e("td",mt,B(a.enrollments)+" \u4EBA",1),e("td",pt,[(T(!0),S(J,null,Z(a.user_groups,i=>(T(),S("div",{class:"mb-1",key:i.id},[l(m,{to:`/admin/users/groups/${i.id}`,onClick:t[4]||(t[4]=M(()=>{},["prevent"])),class:"d-inline-block text-decoration-none me-2"},{default:x(()=>[e("span",_t,B(i.name),1)]),_:2},1032,["to"])]))),128))]),e("td",gt,[e("div",vt,[ft,e("ul",ht,[e("li",null,[l(m,{to:`/admin/training/${a.id}?menuId=1`,onClick:t[5]||(t[5]=M(()=>{},["prevent"])),class:"dropdown-item py-2"},{default:x(()=>[k(" \u4F7F\u7528\u8005\u7FA4\u7D44\u8A2D\u5B9A ")]),_:2},1032,["to"])]),e("li",null,[l(m,{to:`/admin/training/${a.id}?menuId=2`,onClick:t[6]||(t[6]=M(()=>{},["prevent"])),class:"dropdown-item py-2"},{default:x(()=>[k(" \u884C\u4E8B\u66C6\u8A2D\u5B9A ")]),_:2},1032,["to"])]),e("li",null,[l(m,{to:`/admin/training/${a.id}?menuId=3`,onClick:t[7]||(t[7]=M(()=>{},["prevent"])),class:"dropdown-item py-2"},{default:x(()=>[k(" \u9801\u9762\u9078\u55AE\u8A2D\u5B9A ")]),_:2},1032,["to"])]),e("li",null,[l(m,{to:`/admin/training/${a.id}?menuId=4`,onClick:t[8]||(t[8]=M(()=>{},["prevent"])),class:"dropdown-item py-2"},{default:x(()=>[k(" \u8B49\u66F8\u8A2D\u5B9A ")]),_:2},1032,["to"])]),yt,e("li",null,[l(m,{to:`/admin/training/${a.id}`,onClick:t[9]||(t[9]=M(()=>{},["prevent"])),class:"dropdown-item py-2"},{default:x(()=>[k(" \u7DE8\u8F2F ")]),_:2},1032,["to"]),e("button",{id:"copy",type:"button",class:"dropdown-item text-success py-2",onClick:M(i=>O(a.id),["prevent"])}," \u8907\u88FD ",8,bt),e("button",{id:"delete",type:"button",class:"dropdown-item text-danger py-2",onClick:i=>K(a)}," \u522A\u9664 ",8,wt)])])])])]))),128))])])]),e("div",$t,[l(be(we),{modelValue:g.value.pagination.current_page,"onUpdate:modelValue":t[10]||(t[10]=a=>g.value.pagination.current_page=a),records:g.value.pagination.total,"per-page":g.value.pagination.count,options:{chunk:6},onPaginate:I},null,8,["modelValue","records","per-page"])])]),l(We,{ref_key:"TrainingModalComponentRef",ref:f,onGetTrainingList:w},null,512),l(tt,{ref_key:"DeleteTrainingModalComponentRef",ref:N,onGetTrainingList:w,"training-name":R.value.name,"training-id":R.value.id},null,8,["training-name","training-id"])],64)}}},Vt=ee(xt,[["__scopeId","data-v-4073a28b"]]);export{Vt as default};
