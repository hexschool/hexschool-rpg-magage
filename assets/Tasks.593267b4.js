import{D as lt,m as ct,r as w,X as V,s as it,o as dt,j as I,a as i,c as r,b as c,A as N,e as rt,p as C,F as k,q as F,i as D,x as p,Z as x,d as ut,h as v,g as _,T as pt}from"./index.130d352d.js";import{a as yt}from"./statistics.c6f92bea.js";import{a as vt}from"./task.869bc814.js";import{_ as ht,a as mt,b as gt}from"./FavoriteModal.f0059fe0.js";import{b as O}from"./date.204675eb.js";const wt={class:"container-fluid px-4 pt-4 pb-6"},kt=c("h1",{class:"fs-4 mb-5"},"\u4EFB\u52D9\u67E5\u8A62",-1),ft={key:1,class:"d-flex justify-content-end"},_t={class:"table-responsive"},bt={key:0,class:"table table-striped"},Tt=c("th",{style:{"white-space":"nowrap"}},"\u65E5\u671F",-1),$t={style:{"white-space":"nowrap"}},Ft={"data-bs-toggle":"tooltip",title:"\u7E3D\u6578"},St={"data-bs-toggle":"tooltip",title:"\u65B0\u589E"},Gt={"data-bs-toggle":"tooltip",title:"\u56DE\u8986"},Lt=c("td",{style:{"white-space":"nowrap"}},"\u7E3D\u8A08",-1),qt={__name:"Tasks",setup(Ct){const{apiGetStatsTasks:U,apiGetStatsTasksSelector:X,apiGetStatsTasksFavorite:Z,apiPostStatsTasksFavorite:z,apiDeleteStatsTasksFavorite:H}=yt,{apiGetTaskGroupsList:J}=vt,h=lt.useLoading(),f=ct({list:[],type:[],range:[]}),b=w({name:"",type:"",taskGroupIds:"",range:"",from:O(new Date),to:O(new Date)}),u=w({}),S=w(null),K=async({type:s,taskGroupIds:n,range:a,from:o,to:l})=>(await U({type:s,taskGroupIds:n,range:a,from:o,to:l})).result,E=w(0),Q=w({total:0,count:0,current_page:0,total_page:0}),j=async s=>{var a,o,l,e;const n=h.show();try{E.value+=s;const t=await J({count:100,page:E.value}),d=t.task_groups.map(g=>({id:g.id,name:g.name}));Q.value=t.pagination,f.list=[...f.list,...d]}catch(t){p("danger","\u53D6\u5F97\u5931\u6557",`${(o=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:o.statusCode}:${(e=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:e.message}`)}finally{n.hide()}},W=async()=>{const s=await X(),{result:n}=s;return n},m=w([]),G=()=>{m.value.forEach(n=>n.dispose()),m.value=[],[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(n=>{const a=new pt(n);m.value.push(a)})};V(()=>{m.value.forEach(s=>s.dispose()),m.value=[]}),it(()=>u.value,async()=>{await x(),G()});const Y=async s=>{var a,o,l,e;const n=h.show();try{const t=await K({type:s.type,taskGroupIds:s.taskGroupIds.join(","),range:s.range,from:s.from,to:s.to});u.value=t,await x(),G()}catch(t){p("danger","\u67E5\u8A62\u5931\u6557",`${(o=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:o.statusCode}:${(e=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:e.message}`)}finally{n.hide()}},B=w([]),L=async()=>{var n,a,o,l;const s=h.show();try{const{result:e}=await Z();B.value=e}catch(e){p("danger","\u53D6\u5F97\u5931\u6557",`${(a=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:a.statusCode}:${(l=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:l.message}`)}finally{s.hide()}};dt(async()=>{var n,a,o,l;const s=h.show();try{await j(1);const{range:e,type:t}=await W();f.range=e,f.type=t,await L(),await x(),G()}catch(e){p("danger","\u5931\u6557",`${(a=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:a.statusCode}:${(l=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:l.message}`)}finally{s.hide()}});const tt=I(()=>{const s=u.value.date||[],n=u.value.stats||{};return s.map((a,o)=>{const l={date:a,tasks:{}};return Object.keys(n).forEach(e=>{var d,g,T,$,y,q,A,P,R;const t=n[e];l.tasks[e]={name:t.name,total:(T=(g=(d=t.total)==null?void 0:d.data)==null?void 0:g[o])!=null?T:0,newTask:(q=(y=($=t.new)==null?void 0:$.data)==null?void 0:y[o])!=null?q:0,reply:(R=(P=(A=t.reply)==null?void 0:A.data)==null?void 0:P[o])!=null?R:0}}),l})}),M=I(()=>{const s={};return Object.keys(u.value.stats).forEach(n=>{var o,l,e;const a=u.value.stats[n];s[n]={name:a.name,total:(((o=a.total)==null?void 0:o.data)||[]).reduce((t,d)=>t+d,0),newTask:(((l=a.new)==null?void 0:l.data)||[]).reduce((t,d)=>t+d,0),reply:(((e=a.reply)==null?void 0:e.data)||[]).reduce((t,d)=>t+d,0)}}),s});V(()=>{m.value.forEach(s=>s.dispose()),m.value=[]});const at=async s=>{var a,o,l,e;const n=h.show();try{const t=await ut.get(`/v1/stats/task/${s}/csv`,{responseType:"blob"}),d=new FileReader;d.onload=g=>{const T=new Blob([g.target.result],{type:"text/csv;charset=utf-8;"}),$=window.URL.createObjectURL(T),y=document.createElement("a");y.href=$,y.setAttribute("download",`task-${s}.csv`),document.body.appendChild(y),y.click(),y.remove()},d.readAsText(t.data,"utf-8")}catch(t){p("danger","\u4E0B\u8F09\u5931\u6557",`${(o=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:o.statusCode}:${(e=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:e.message}`)}finally{n.hide()}},st=s=>{b.value=s,S.value.show()},et=async s=>{var a,o,l,e;const n=h.show();try{await z({...s,taskGroupIds:s.taskGroupIds.join(",")}),p("success","\u5132\u5B58\u6210\u529F","\u5DF2\u6210\u529F\u5132\u5B58\u5E38\u7528\u8A2D\u5B9A"),await L()}catch(t){p("danger","\u5132\u5B58\u5931\u6557",`${(o=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:o.statusCode}:${(e=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:e.message}`)}finally{n.hide()}},ot=async s=>{b.value={...s,taskGroupIds:s.taskGroupIds.split(",").map(n=>n)},S.value.hide()},nt=async s=>{var a,o,l,e;const n=h.show();try{await H(s),p("success","\u522A\u9664\u6210\u529F","\u5DF2\u6210\u529F\u522A\u9664\u5E38\u7528\u8A2D\u5B9A"),await L()}catch(t){p("danger","\u522A\u9664\u5931\u6557",`${(o=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:o.statusCode}:${(e=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:e.message}`)}finally{n.hide()}};return(s,n)=>(i(),r(k,null,[c("div",wt,[kt,N(ht,{status:"task",data:f,onGetData:j,onSubmit:Y,openFavoriteModal:st,queryParams:b.value},null,8,["data","queryParams"]),u.value.id?(i(),rt(mt,{key:0,data:u.value},null,8,["data"])):C("",!0),u.value.id?(i(),r("div",ft,[c("button",{onClick:n[0]||(n[0]=a=>at(u.value.id)),type:"button",class:"btn btn-primary"}," \u532F\u51FA ")])):C("",!0),c("div",_t,[u.value.id?(i(),r("table",bt,[c("thead",null,[c("tr",null,[Tt,(i(!0),r(k,null,F(D(M),(a,o)=>(i(),r("th",{key:o,style:{"white-space":"nowrap"}},v(a.name),1))),128))])]),c("tbody",null,[(i(!0),r(k,null,F(D(tt),a=>(i(),r("tr",{key:a.date},[c("td",$t,v(a.date),1),(i(!0),r(k,null,F(a.tasks,(o,l)=>(i(),r("td",{key:l,style:{"white-space":"nowrap"}},[o?(i(),r(k,{key:0},[c("span",Ft,v(o.total),1),_(" / "),c("span",St,v(o.newTask),1),_(" / "),c("span",Gt,v(o.reply),1)],64)):(i(),r(k,{key:1},[_("-")],64))]))),128))]))),128))]),c("tfoot",null,[c("tr",null,[Lt,(i(!0),r(k,null,F(D(M),(a,o)=>(i(),r("td",{key:o,style:{"white-space":"nowrap"}},[c("span",null,v(a.total),1),_(" / "),c("span",null,v(a.newTask),1),_(" / "),c("span",null,v(a.reply),1)]))),128))])])])):C("",!0)])]),N(gt,{ref_key:"FavoriteModalRef",ref:S,status:"task",data:f,options:b.value,favoriteList:B.value,onSaveFavorite:et,onApplyFavorite:ot,onDeleteFavorite:nt},null,8,["data","options","favoriteList"])],64))}};export{qt as default};