"use strict";(self.webpackChunkfinsweet_project=self.webpackChunkfinsweet_project||[]).push([[135],{9135:(p,r,a)=>{a.r(r),a.d(r,{ContactUsAdmComponent:()=>o});var c=a(5195),i=a(9947),d=a(6814),t=a(5879),u=a(6427);function n(s,g){if(1&s&&(t.TgZ(0,"mat-card")(1,"mat-card-content")(2,"div")(3,"span"),t._uU(4,"Country"),t.qZA(),t.TgZ(5,"span"),t._uU(6),t.qZA()(),t.TgZ(7,"div")(8,"span"),t._uU(9,"Email"),t.qZA(),t.TgZ(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"div")(13,"span"),t._uU(14,"First Name"),t.qZA(),t.TgZ(15,"span"),t._uU(16),t.qZA()(),t.TgZ(17,"div")(18,"span"),t._uU(19,"Message"),t.qZA(),t.TgZ(20,"span"),t._uU(21),t.qZA()()()()),2&s){const e=g.$implicit;t.xp6(6),t.Oqu(e.county),t.xp6(5),t.Oqu(e.email),t.xp6(5),t.Oqu(e.f_name),t.xp6(5),t.Oqu(e.message)}}let o=(()=>{class s{constructor(e){this.reqServ=e}ngOnInit(){this.reqServ.getData(i.N.contactUs.get).subscribe(e=>{this.dataContact=e})}static#t=this.\u0275fac=function(_){return new(_||s)(t.Y36(u.s))};static#n=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-contact-us-adm"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(_,m){1&_&&t.YNc(0,n,22,4,"mat-card",0),2&_&&t.Q6J("ngForOf",m.dataContact)},dependencies:[c.QW,c.a8,c.dn,d.sg],styles:["mat-card[_ngcontent-%COMP%]{margin-bottom:20px}div[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{margin-top:10px}div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#313131;font-weight:bolder;width:90px;display:inline-block}div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{color:#494949;font-weight:500;margin-left:30px;width:87%}"]})}return s})()},6427:(p,r,a)=>{a.d(r,{s:()=>d});var c=a(9862),i=a(5879);let d=(()=>{class t{constructor(n){this.http=n}getData(n){let o=localStorage.getItem("token"),s=new c.WM({Authorization:"Bearer "+o});return this.http.get(n,{headers:s})}addData(n,o){return this.http.post(n,o)}deleteData(n){return this.http.delete(n)}editData(n,o){return this.http.put(n,o)}static#t=this.\u0275fac=function(o){return new(o||t)(i.LFG(c.eN))};static#n=this.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()}}]);