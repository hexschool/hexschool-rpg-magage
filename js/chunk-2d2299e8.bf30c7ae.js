(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2299e8"],{dde7:function(e,t,c){"use strict";c.r(t);var i=c("7a23"),n={class:"container"},a={class:"row justify-content-center"},o={class:"col-md-6"},s={class:"card shadow-sm rounded-4 overflow-hidden mt-5"},d=Object(i["i"])("div",{class:"card-header bg-white d-flex justify-content-between align-items-center py-3"},[Object(i["i"])("h5",{class:"mb-0"},"登入驗證")],-1),r={class:"card-body display-12 fw-normal"},l={class:"mb-3"},u=Object(i["i"])("label",{for:"add_mail",class:"form-label"},"驗證碼",-1),b={class:"d-flex justify-content-end"};function f(e,t,c,f,v,j){return Object(i["u"])(),Object(i["e"])("div",n,[Object(i["i"])("div",a,[Object(i["i"])("div",o,[Object(i["i"])("div",s,[d,Object(i["i"])("div",r,[Object(i["i"])("div",l,[u,Object(i["O"])(Object(i["i"])("input",{type:"email",class:"form-control",id:"add_mail","onUpdate:modelValue":t[1]||(t[1]=function(e){return f.verifyCode=e})},null,512),[[i["J"],f.verifyCode]])]),Object(i["i"])("div",b,[Object(i["i"])("button",{class:"btn btn-primary",onClick:t[2]||(t[2]=function(){return f.verify&&f.verify.apply(f,arguments)})},"驗證")])])])])])])}var v=c("6c02"),j={name:"LoginVertify",setup:function(){var e=Object(i["k"])(),t=e.proxy,c=Object(i["x"])(""),n=Object(i["x"])(""),a=Object(v["d"])();function o(){t.axios.put("/v1/user/login/verify",{account:c.value,verify_code:n.value}).then((function(e){"成功"===e.data.message&&(document.cookie="h_MqhC49RxFRI6pR3Z_token=".concat(e.data.access_token,";"),a.push("/admin/users"))}))}return Object(i["s"])((function(){c.value=window.sessionStorage.getItem("H_temp_mail_store")})),{verifyCode:n,verify:o}}};j.render=f;t["default"]=j}}]);
//# sourceMappingURL=chunk-2d2299e8.bf30c7ae.js.map