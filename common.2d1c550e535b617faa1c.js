(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"4ugQ":function(t,a,e){"use strict";e.d(a,"a",function(){return o});var r=e("LPYB"),s=e("fXoL"),n=e("vlGe");let o=(()=>{class t{constructor(t){this.fs=t,this.pieChartOptions={responsive:!0},this.pieChartLabels=[],this.pieChartData=[],this.pieChartType="pie",this.pieChartLegend=!0,this.pieChartPlugins=[],this.pieChartColors=[{backgroundColor:["rgb(40, 158, 89)","rgb(190, 118, 10)","rgb(48, 139, 86)","rgb(0, 154, 63)","rgb(243, 146, 0)","rgb(241, 174, 74)","rgb(20, 218, 69)","rgb(241, 149, 74)"]}],Object(r.d)(),Object(r.c)()}ngOnInit(){this.data$=this.fs.getData(),this.data$.subscribe(t=>{const a=t.map(t=>t.motivo),e=[...new Set(a)];this.pieChartLabels=e,e.forEach(t=>{this.pieChartData.push(a.filter(a=>a===t).length)})})}}return t.\u0275fac=function(a){return new(a||t)(s.Ob(n.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-chart"]],decls:2,vars:7,consts:[[2,"display","block"],["baseChart","",3,"data","labels","chartType","options","plugins","legend","colors"]],template:function(t,a){1&t&&(s.Ub(0,"div",0),s.Pb(1,"canvas",1),s.Tb()),2&t&&(s.Db(1),s.kc("data",a.pieChartData)("labels",a.pieChartLabels)("chartType",a.pieChartType)("options",a.pieChartOptions)("plugins",a.pieChartPlugins)("legend",a.pieChartLegend)("colors",a.pieChartColors))},directives:[r.a],styles:[""]}),t})()},CgUx:function(t,a,e){"use strict";e.d(a,"a",function(){return n});var r=e("fXoL"),s=e("I/3d");let n=(()=>{class t{constructor(t){this.firestore=t}getAllSanctions(){return this.collection=this.firestore.collection("sanciones"),this.allSanctions=this.collection.valueChanges(),this.allSanctions}}return t.\u0275fac=function(a){return new(a||t)(r.Yb(s.a))},t.\u0275prov=r.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"FPf/":function(t,a,e){"use strict";e.d(a,"a",function(){return o});var r=e("fXoL"),s=e("vlGe"),n=e("LPYB");let o=(()=>{class t{constructor(t){this.fs=t,this.polarAreaChartLabels=[],this.polarAreaChartData=[],this.polarAreaLegend=!0,this.polarChartColors=[{backgroundColor:["rgb(0, 154, 63)","rgb(243, 146, 0)","rgb(20, 218, 69)","rgb(241, 149, 74)"]}],this.polarAreaChartType="polarArea"}ngOnInit(){this.data$=this.fs.getData(),this.data$.subscribe(t=>{const a=t.map(t=>t.estado),e=[...new Set(a)];this.polarAreaChartLabels=e,e.forEach(t=>{this.polarAreaChartData.push(a.filter(a=>a===t).length)})})}chartClicked({event:t,active:a}){console.log(t,a)}chartHovered({event:t,active:a}){console.log(t,a)}}return t.\u0275fac=function(a){return new(a||t)(r.Ob(s.a))},t.\u0275cmp=r.Ib({type:t,selectors:[["app-chart2"]],decls:2,vars:5,consts:[[2,"display","block"],["baseChart","",3,"data","labels","legend","chartType","colors"]],template:function(t,a){1&t&&(r.Ub(0,"div",0),r.Pb(1,"canvas",1),r.Tb()),2&t&&(r.Db(1),r.kc("data",a.polarAreaChartData)("labels",a.polarAreaChartLabels)("legend",a.polarAreaLegend)("chartType",a.polarAreaChartType)("colors",a.polarChartColors))},directives:[n.a],styles:[""]}),t})()},mrSG:function(t,a,e){"use strict";function r(t,a,e,r){return new(e||(e=Promise))(function(s,n){function o(t){try{c(r.next(t))}catch(a){n(a)}}function i(t){try{c(r.throw(t))}catch(a){n(a)}}function c(t){var a;t.done?s(t.value):(a=t.value,a instanceof e?a:new e(function(t){t(a)})).then(o,i)}c((r=r.apply(t,a||[])).next())})}e.d(a,"a",function(){return r})},vlGe:function(t,a,e){"use strict";e.d(a,"a",function(){return n});var r=e("fXoL"),s=e("I/3d");let n=(()=>{class t{constructor(t){this.fs=t,this.data$=this.fs.collection("sanciones").valueChanges()}getData(){return this.data$}}return t.\u0275fac=function(a){return new(a||t)(r.Yb(s.a))},t.\u0275prov=r.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);