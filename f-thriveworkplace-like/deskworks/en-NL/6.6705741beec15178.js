"use strict";(self.webpackChunkdeskworks=self.webpackChunkdeskworks||[]).push([[6],{1006:(W,I,e)=>{e.r(I),e.d(I,{SignInModule:()=>U});var E=e(1343),a=e(6304),d=e(4753),f=e(423),N=e(5043),n=e(3556),T=e(5130),u=e(3701),R=e(3547),S=e(9133),p=e(5106),M=e(6019),m=e(1076),C=e(1847),h=e(7792),A=e(358),c=e(3512),G=e(3733),F=e(8329),O=e(8021);function P(_,g){1&_&&(n.TgZ(0,"ff-header"),n.SDv(1,18),n.qZA())}function Z(_,g){1&_&&(n.TgZ(0,"ff-header"),n.SDv(1,19),n.qZA())}function v(_,g){if(1&_&&(n.TgZ(0,"ff-header",20),n._uU(1),n.qZA()),2&_){const i=n.oxw();n.xp6(1),n.Oqu(i.signInError)}}const D=[{path:"",component:(()=>{class _{constructor(i,o,t,s,r){this.router=i,this.route=o,this.auth=t,this.alerts=s,this.h=r,this.faCheck=N.LEp,this.login="",this.password="",this.rememberMe=!0,this.signingIn=!1,this.signInError=null}onSignIn(){this.h.checkInvalid("dw-sign-in")||(this.signingIn=!0,this.signInError=null,this.auth.login(this.login,this.password,this.rememberMe).pipe((0,d.U)(()=>this.router.navigate([this.route.snapshot.paramMap.get("redirect")||"/"]))).pipe((0,f.x)(()=>this.signingIn=!1)).subscribe({error:i=>{var o;this.signInError=(null===(o=i.error)||void 0===o?void 0:o.error)||i.message}}))}}return _.\u0275fac=function(i){return new(i||_)(n.Y36(a.F0),n.Y36(a.gz),n.Y36(T.e),n.Y36(u.m),n.Y36(R.W))},_.\u0275cmp=n.Xpm({type:_,selectors:[["dw-sign-in"]],decls:22,vars:9,consts:function(){let g,i,o,t,s,r;return g="Sign In",i="Login",o="Password",t="Sign In " + "\ufffd#21\ufffd" + "" + "\ufffd/#21\ufffd" + "",s="Please enter your login details",r="Signing in...",[[3,"ngSubmit"],["signInForm","ngForm"],[1,"page-title"],g,[1,"ff-gv"],[1,"ff-board"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"ff-row"],["flex","0 0 80px"],i,["name","login","required","",3,"ngModel","ngModelChange"],o,["name","password","required","",3,"ngModel","ngModelChange"],[3,"disabled"],["type","submit",1,"success",3,"disabled","spin"],t,[3,"icon"],s,r,[1,"text-danger"]]},template:function(i,o){if(1&i&&(n.TgZ(0,"form",0,1),n.NdJ("ngSubmit",function(){return o.onSignIn()}),n.TgZ(2,"h1",2),n.SDv(3,3),n.qZA(),n.TgZ(4,"div",4),n.TgZ(5,"div",5),n.TgZ(6,"ff-panel"),n.YNc(7,P,2,0,"ff-header",6),n.YNc(8,Z,2,0,"ff-header",6),n.YNc(9,v,2,1,"ff-header",7),n.TgZ(10,"label",8),n.TgZ(11,"ff-label",9),n.SDv(12,10),n.qZA(),n.TgZ(13,"ff-text",11),n.NdJ("ngModelChange",function(s){return o.login=s}),n.qZA(),n.qZA(),n.TgZ(14,"label",8),n.TgZ(15,"ff-label",9),n.SDv(16,12),n.qZA(),n.TgZ(17,"ff-password",13),n.NdJ("ngModelChange",function(s){return o.password=s}),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(18,"ff-btn-group",14),n.TgZ(19,"ff-btn",15),n.tHW(20,16),n._UZ(21,"fa-icon",17),n.N_p(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&i){const t=n.MAs(1);n.xp6(7),n.Q6J("ngIf",!o.signInError&&!o.signingIn),n.xp6(1),n.Q6J("ngIf",o.signingIn),n.xp6(1),n.Q6J("ngIf",o.signInError&&!o.signingIn),n.xp6(4),n.Q6J("ngModel",o.login),n.xp6(4),n.Q6J("ngModel",o.password),n.xp6(1),n.Q6J("disabled",o.signingIn),n.xp6(1),n.Q6J("disabled",!t.dirty)("spin",o.signingIn),n.xp6(2),n.Q6J("icon",o.faCheck)}},directives:[S._Y,S.JL,S.F,p.y,M.O5,m._,C.O,h.T,S.Q7,S.JJ,S.On,A.I,c.P,G.H,F.BN,O.G],styles:[".page-title[_ngcontent-%COMP%]{text-align:center}.ff-board[_ngcontent-%COMP%]{max-width:360px}@media (min-width: 360px){.ff-board[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}}ff-btn-group[_ngcontent-%COMP%]{max-width:330px;margin:auto}"]}),_})()}];let $=(()=>{class _{}return _.\u0275fac=function(i){return new(i||_)},_.\u0275mod=n.oAB({type:_}),_.\u0275inj=n.cJS({imports:[[a.Bz.forChild(D)],a.Bz]}),_})(),U=(()=>{class _{}return _.\u0275fac=function(i){return new(i||_)},_.\u0275mod=n.oAB({type:_}),_.\u0275inj=n.cJS({imports:[[E.m,$]]}),_})()}}]);