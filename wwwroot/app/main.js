!function(t){function e(e){for(var s,n,l=e[0],o=e[1],c=e[2],u=0,v=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&v.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);for(d&&d(e);v.length;)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={0:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/app/";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;i.push([66,1]),a()}({41:function(t,e,a){var s=a(42),r=a(43);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},n=(s(r,i),r.locals?r.locals:{});t.exports=n},43:function(t,e,a){},66:function(t,e,a){"use strict";a.r(e);a(41),a(44);var s=a(17),r=a(40),i=a(29),n=a.n(i),l=a(39),o=a.n(l),c=(a(25),a(26)),d=a.n(c),u={props:{chartId:String,chartData:Array,provinces:Array},data:()=>({chart:null}),async mounted(){this.get()},beforeUpdate:function(){const t=this;t.$nextTick((function(){t.chartData&&t.chartData.length&&t.get()}))},methods:{getScales:t=>"bar"==t?{xAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:"Date"}}],yAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:"Count"}}]}:"line"==t?{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Date"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Count"}}]}:void 0,setChart(t){this.chart.config.type=t,this.chart.config.options.scales=this.getScales(t),this.chart.update(),localStorage.setItem("per-day-chart-type",t)},async get(){const t=this;let e=t.chartData,a=[];e.map(t=>{const e=t.attributes.confirmed,s=d()(e);if(s.isValid()){const t=s.format("MM-DD");a.includes(t)||a.push(t)}}),a.sort();let s=[];t.provinces.forEach((e,r)=>{const i=t.getRandomColor();let n={label:e,borderColor:i,backgroundColor:i,data:[a.length],fill:!1};s.push(n)}),e.forEach(t=>{let e=s.find(e=>e.label==t.province);if(null==e)return;const r=t.attributes.confirmed,i=d()(r);if(i.isValid()){const t=i.format("MM-DD");var n=a.indexOf(t);isNaN(e.data[n])?e.data[n]=1:e.data[n]++}});let r=document.getElementById(t.chartId),i=a;var n=localStorage.getItem("per-day-chart-type")||"line";null==t.chart?t.chart=new Chart(r,{type:n,data:{labels:i,datasets:s},options:{spanGaps:!0,responsive:!0,maintainAspectRatio:!1,scales:t.getScales(n)}}):(t.chart.data.labels=i,t.chart.data.datasets=s,t.chart.update())},getRandomColor(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}}},v=a(21),f=Object(v.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.chartData?a("div",{},[a("div",{staticClass:"d-flex flex-row justify-content-between"},[t._m(0),t._v(" "),a("div",[a("button",{staticClass:"btn btn-sm btn-outline-info",on:{click:function(e){return t.setChart("line")}}},[a("span",{staticClass:"fas fa-fw fa-chart-line"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-outline-info ml-",on:{click:function(e){return t.setChart("bar")}}},[a("span",{staticClass:"fas fa-fw fa-chart-bar"})])])]),t._v(" "),a("div",{staticStyle:{position:"relative",height:"45vh"}},[a("canvas",{attrs:{id:t.chartId}})])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h5",{staticClass:"ml-2 mb-0 text-primary font-weight-bold"},[this._v("Cases")])])}],!1,null,null,null).exports,p={props:{chartId:String,chartData:Array,provinces:Array},data:()=>({chart:null}),async mounted(){this.get()},beforeUpdate:function(){const t=this;t.$nextTick((function(){t.chartData&&t.chartData.length&&t.get()}))},methods:{async get(){const t=this;let e=t.chartData,a=[];e.forEach(t=>{const e=t.attributes.edad;!isNaN(e)&&e>0&&!a.includes(e)&&a.push(e)}),a.sort();let s=[],r={label:"Male",borderColor:"rgba(0,0,255,1)",backgroundColor:"rgba(0,0,255,0.5)",data:Array(a.length)};for(var i=0;i<r.data.length;i++)r.data[i]=0;s.push(r);let n={label:"Female",borderColor:"rgba(200,0,0,1)",backgroundColor:"rgba(200,0,0,0.5)",data:Array(a.length)};for(i=0;i<n.data.length;i++)n.data[i]=0;s.push(n),e.forEach(t=>{let e=null;e="male"==t.attributes.kasarian.toLowerCase()?r:n;const s=t.attributes.edad;if(!isNaN(s)){var i=a.indexOf(s);isNaN(e.data[i])?e.data[i]=1:e.data[i]++}});let l=document.getElementById(t.chartId);null==t.chart?t.chart=new Chart(l,{type:"horizontalBar",data:{datasets:s,labels:a},options:{responsive:!0,maintainAspectRatio:!1,elements:{rectangle:{borderWidth:2}},legend:{position:"right"},scales:{xAxes:[{ticks:{stepSize:1}}]}}}):(t.chart.data.labels=a,t.chart.data.datasets=s,t.chart.update())},getRandomColor(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}}},m=Object(v.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return this.chartData?e("div",{},[this._m(0),this._v(" "),e("div",{staticStyle:{position:"relative",height:"45vh"}},[e("canvas",{attrs:{id:this.chartId}})])]):this._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex flex-row justify-content-between"},[e("div",[e("h5",{staticClass:"ml-2 mb-0 text-primary font-weight-bold"},[this._v("Age")])])])}],!1,null,null,null).exports;const h=o.a.create();h.interceptors.request.use(t=>(n.a.start(),t)),h.interceptors.response.use(t=>(n.a.done(),t),t=>{throw n.a.done(),t});var g={components:{LineConfirmedPerDay:f,PieAge:m},data:()=>({baseArcgisUrl:"https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/PH_masterlist/FeatureServer/0/query?f=json&returnDistinctValues=true&returnGeometry=false&spatialRel=esriSpatialRelIntersects&cacheHint=false",resultRecordCount:2e3,busy:!1,items:[],selectedItem:null,selectedProvince:"",selectedProvinces:[],provinces:[],pageIndex:1,pageSize:15,filter:{ph:"",age:null,nationality:"",residence:"",confirmed:""}}),computed:{filteredProvinces(){const t=this;return t.provinces.filter(e=>!t.selectedProvinces.includes(e))},filteredItems(){const t=this;return t.items.filter(e=>{var a=e.attributes.PH_masterl.toLowerCase().includes(t.filter.ph.toLowerCase()),s=e.attributes.residence.toLowerCase().includes(t.filter.residence.toLowerCase()),r=e.attributes.confirmed.toLowerCase().includes(t.filter.confirmed);return a&&s&&r})},paginated(){const t=this;return t.filteredItems.slice((t.pageIndex-1)*t.pageSize,t.pageIndex*t.pageSize)},totalPages(){return Math.ceil(this.filteredItems.length/this.pageSize)}},async created(){const t=this;let e=JSON.parse(localStorage.getItem("selectedProvinces"))||[];e.length?t.selectedProvinces=e:t.selectedProvinces=["Cavite","Laguna","Batangas","Rizal","Quezon"],await t.getProvinces(),await t.get()},methods:{resetFilter(){this.filter={ph:"",age:null,nationality:"",residence:"",confirmed:""}},movePrevious(){this.pageIndex>1&&this.pageIndex--},moveNext(){this.pageIndex<this.totalPages&&this.pageIndex++},async getProvinces(){const t=this;let e=!1,a=0,s=[];do{const r=["&where=",encodeURIComponent("1=1"),"&outFields=","residence","&resultOffset=",a,"&resultRecordCount=",t.resultRecordCount].join("");let i=t.baseArcgisUrl+r;try{await h.get(i).then(t=>{const a=t.data;s=s.concat(a.features),e=a.exceededTransferLimit})}catch(t){alert(t)}a+=t.resultRecordCount}while(e);t.provinces=[],s.forEach(e=>{let a=t.getProvince(e.attributes.residence);a&&!t.provinces.includes(a)&&t.provinces.push(a)}),t.provinces.sort(),t.selectedProvince=t.filteredProvinces[0]},async get(){const t=this;let e=0,a=!1,s=[];if(t.items=[],!t.busy)if(t.selectedProvinces.length)try{t.busy=!0,t.pageIndex=1;do{let r=encodeURIComponent("1=1");t.selectedProvince.length>0&&(r="",t.selectedProvinces.forEach((t,e)=>{r+=encodeURIComponent(`${0==e?"":"OR"} residence LIKE '%${t}' `)}));const i=["&where=",r,"&outFields=","FID,PH_masterl,kasarian,nationalit,residence,edad,confirmed","&resultOffset=",e,"&resultRecordCount=",t.resultRecordCount].join("");let n=t.baseArcgisUrl+i;await h.get(n).then(e=>{const r=e.data;r.features.forEach(e=>{e.province=t.getProvince(e.attributes.residence)}),s=s.concat(r.features),a=r.exceededTransferLimit}),e+=t.resultRecordCount}while(a);t.items=s,t.saveSelectedProvinces()}catch(t){alert(t),localStorage.removeItem("selectedProvinces")}finally{t.busy=!1}else localStorage.removeItem("selectedProvinces")},async getItem(t){const e=this;let a=!1,s=0,r=[];if(!e.busy&&e.selectedProvinces.length)try{do{const i=["&where=",encodeURIComponent(`FID = ${t}`),"&outFields=","*","&resultOffset=",s,"&resultRecordCount=",e.resultRecordCount].join("");let n=e.baseArcgisUrl+i;await h.get(n).then(t=>{const e=t.data;e.features.map(t=>{const e=t.attributes;e.symptoms=e.symptoms.trim(),e.travel_hx=e.travel_hx.trim()}),r=r.concat(e.features),a=e.exceededTransferLimit}),s+=e.resultRecordCount}while(a);return r}catch(t){alert(t)}},addProvince(){const t=this;if(!t.selectedProvinces.includes(t.selectedProvince)){let e=t.filteredProvinces.indexOf(t.selectedProvince);t.selectedProvinces.push(t.selectedProvince),e<t.filteredProvinces.length-1&&(t.selectedProvince=t.filteredProvinces[e])}},removeProvince(t){this.selectedProvinces.splice(t,1)},saveSelectedProvinces(){localStorage.setItem("selectedProvinces",JSON.stringify(this.selectedProvinces))},async onProviceChanged(){this.selectedProvince&&await this.get()},parseAddress(t){let e=t.split(",");return 2==e.length?e:["",t]},getProvince(t){let e=this.parseAddress(t);return e.length>0?e[e.length-1].trim():t},async viewPatient(t){var e=await this.getItem(t.FID);this.$bvModal.show("modal"),this.selectedItem=e[0].attributes}}},b=Object(v.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"card shadow-sm p-2"},[a("div",{staticClass:"row flex-column-reverse flex-md-row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"mr-auto"},[a("div",{staticClass:"form-group mb-0 align-self-end"},[a("label",{staticClass:"font-weight-bold text-primary"},[t._v("\n                            Selected Province(s)\n                            "),a("span",{staticClass:"px-1 rounded border border-danger text-danger",on:{click:function(e){t.selectedProvinces=[]}}},[a("span",{staticClass:"fas fa-fw fa-eraser mr-1"}),t._v("Clear\n                            ")])]),t._v(" "),a("div",{staticClass:"d-flex align-content-center flex-wrap "},t._l(t.selectedProvinces,(function(e,s){return a("span",{staticClass:"px-1 mr-1 mb-1 rounded border border-success",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.removeProvince(s)}}},[a("span",[t._v("\n                                    "+t._s(e)+"\n                                ")]),t._v(" "),a("span",{staticClass:"fas fa-fw text-danger fa-eraser"})])})),0)])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"d-flex flex-lg-row"},[a("div",{staticClass:"form-group mb-0 ml-md-auto"},[a("label",{staticClass:"font-weight-bold text-primary"},[t._v("Available Provinces")]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-primary",on:{click:t.addProvince}},[a("span",{staticClass:"fas fa-fw fa-plus"})])]),t._v(" "),a("b-select",{attrs:{options:t.filteredProvinces},scopedSlots:t._u([{key:"first",fn:function(){},proxy:!0}]),model:{value:t.selectedProvince,callback:function(e){t.selectedProvince=e},expression:"selectedProvince"}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",on:{click:t.get}},[a("span",{staticClass:"fas fa-fw fa-sync"})])])],1)])])])])])]),t._v(" "),a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"card shadow-sm p-1"},[a("b-overlay",{attrs:{show:t.busy}},[t.items?a("line-confirmed-per-day",{attrs:{"chart-id":"c1","chart-data":t.items,provinces:t.selectedProvinces}}):t._e()],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"card shadow-sm p-1 mt-lg-0 mt-2"},[a("b-overlay",{attrs:{show:t.busy}},[t.items?a("pie-age",{attrs:{"chart-id":"c2","chart-data":t.items,provinces:t.selectedProvinces}}):t._e()],1)],1)])]),t._v(" "),a("div",{staticClass:"card shadow mt-2"},[a("div",{staticClass:"card-header d-flex flex-row justify-content-between"},[a("h6",{staticClass:"font-weight-bold mb-0 text-primary"},[t._v(" Confirmed Cases")]),t._v(" "),a("h6",{staticClass:"font-weight-bold mb-0 text-primary"},[t._v(" Total: "+t._s(t.items.length)+" "),t.items.length!==t.filteredItems.length?a("span",[t._v(", Filtered: "+t._s(t.filteredItems.length))]):t._e()])]),a("b-overlay",{attrs:{show:t.busy}},[a("div",{staticClass:"table-responsive mb-0"},[a("table",{staticClass:"table table-bordered table-sm"},[a("thead",[a("tr",[a("td",{staticClass:"text-center align-middle"},[t._v("#")]),t._v(" "),a("td",[t._v("PH")]),t._v(" "),a("td",[t._v("Age")]),t._v(" "),a("td",[t._v("Nationality")]),t._v(" "),a("td",[t._v("Residence")]),t._v(" "),a("td",[t._v("Date Confirmed")])]),t._v(" "),a("tr",{staticClass:"bg-secondary"},[a("td",{staticClass:"text-center align-middle"},[a("button",{staticClass:"btn btn-sm btn-primary",on:{click:t.resetFilter}},[t._v("\n                                    Reset\n                                ")])]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.ph,expression:"filter.ph"}],staticClass:"form-control form-control-sm text-center",attrs:{type:"text"},domProps:{value:t.filter.ph},on:{input:function(e){e.target.composing||t.$set(t.filter,"ph",e.target.value)}}})]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.residence,expression:"filter.residence"}],staticClass:"form-control form-control-sm text-center",attrs:{type:"text"},domProps:{value:t.filter.residence},on:{input:function(e){e.target.composing||t.$set(t.filter,"residence",e.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.confirmed,expression:"filter.confirmed"}],staticClass:"form-control form-control-sm text-center",attrs:{type:"text"},domProps:{value:t.filter.confirmed},on:{input:function(e){e.target.composing||t.$set(t.filter,"confirmed",e.target.value)}}})])])]),t._v(" "),a("tbody",t._l(t.paginated,(function(e,s){return a("tr",[a("td",{staticClass:"text-center align-middle"},[t._v(t._s((t.pageIndex-1)*t.pageSize+(s+1)))]),t._v(" "),a("td",[a("span",{staticClass:"text-primary",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.viewPatient(e.attributes)}}},[t._v("\n                                    "+t._s(e.attributes.PH_masterl)+"\n                                ")])]),t._v(" "),a("td",[a("div",{staticClass:"d-flex flex-row"},[a("div",[a("span",{staticClass:"fas fa-fw",class:{"fa-male":"Male"==e.attributes.kasarian,"fa-female":"Female"==e.attributes.kasarian}})]),t._v(" "),a("div",{domProps:{textContent:t._s(e.attributes.edad)}})])]),t._v(" "),a("td",[t._v(t._s(e.attributes.nationalit))]),t._v(" "),a("td",[t._v(t._s(e.attributes.residence))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(e.attributes.confirmed))])])})),0)])])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("b-overlay",{attrs:{show:t.busy}},[a("div",{staticClass:"d-flex flex-row justify-content-between"},[a("div",{staticClass:"text-left align-middle d-flex flex-row"},[a("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.pageIndex=1}}},[a("span",{staticClass:"fas fa-fw fa-angle-double-left"})]),t._v(" "),a("button",{staticClass:"btn btn-outline-primary ml-1",on:{click:t.movePrevious}},[a("span",{staticClass:"fas fa-fw fa-angle-left"})])]),t._v(" "),a("div",{staticClass:"d-flex flex-row justify-content-center"},[a("div",[t._v("\n                            "+t._s(t.pageIndex)+"/"+t._s(t.totalPages)+" Page(s)\n                        ")])]),t._v(" "),a("div",{staticClass:"text-right align-middle d-flex flex-row"},[a("button",{staticClass:"btn btn-outline-primary",on:{click:t.moveNext}},[a("span",{staticClass:"fas fa-fw fa-angle-right"})]),t._v(" "),a("button",{staticClass:"btn btn-outline-primary ml-1",on:{click:function(e){t.pageIndex=t.totalPages}}},[a("span",{staticClass:"fas fa-fw fa-angle-double-right"})])])])])],1)],1),t._v(" "),a("b-modal",{class:"rounded-0",attrs:{id:"modal","header-class":"bg-gradient-dark rounded-0 p-3","footer-class":"bg-secondary rounded-0 p-2"},scopedSlots:t._u([{key:"modal-header",fn:function(){return[a("h3",{staticClass:"font-weight-bold mb-0 text-white"},[t._v("\n                "+t._s(t.selectedItem.PH_masterl)+"\n            ")])]},proxy:!0},{key:"modal-footer",fn:function(){return[a("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.$bvModal.hide("modal")}}},[t._v("Close")])]},proxy:!0},{key:"default",fn:function(){return[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 text-right text-black-50 col-form-label"},[t._v("Age")]),t._v(" "),a("div",{staticClass:"col"},[a("span",{staticClass:"form-control-plaintext"},[t._v("\n                        "+t._s(t.selectedItem.edad)+"\n                    ")])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 text-right text-black-50 col-form-label"},[t._v("Gender")]),t._v(" "),a("div",{staticClass:"col"},[a("span",{staticClass:"form-control-plaintext"},[t._v("\n                        "+t._s(t.selectedItem.kasarian)+"\n                    ")])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 text-right text-black-50 col-form-label"},[t._v("Nationality")]),t._v(" "),a("div",{staticClass:"col"},[a("span",{staticClass:"form-control-plaintext"},[t._v("\n                        "+t._s(t.selectedItem.nationalit)+"\n                    ")])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 text-right text-black-50 col-form-label"},[t._v("Residence")]),t._v(" "),a("div",{staticClass:"col"},[a("span",{staticClass:"form-control-plaintext"},[t._v("\n                        "+t._s(t.selectedItem.residence)+"\n                    ")])])]),t._v(" "),t.selectedItem.travel_hx?a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 text-right text-black-50 col-form-label"},[t._v("Travel History")]),t._v(" "),a("div",{staticClass:"col"},[a("span",{staticClass:"form-control-plaintext"},[t._v("\n                        "+t._s(t.selectedItem.travel_hx)+"\n                    ")])])]):t._e(),t._v(" "),t.selectedItem.symptoms?a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 text-right text-black-50 col-form-label"},[t._v("Symptoms")]),t._v(" "),a("div",{staticClass:"col"},[a("span",{staticClass:"form-control-plaintext"},[t._v("\n                        "+t._s(t.selectedItem.symptoms)+"\n                    ")])])]):t._e(),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 text-right text-black-50 col-form-label"},[t._v("Date Confirmed")]),t._v(" "),a("div",{staticClass:"col"},[a("span",{staticClass:"form-control-plaintext"},[t._v("\n                        "+t._s(t.selectedItem.confirmed)+"\n                    ")])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 text-right text-black-50 col-form-label"},[t._v("Facility")]),t._v(" "),a("div",{staticClass:"col"},[a("span",{staticClass:"form-control-plaintext"},[t._v("\n                        "+t._s(t.selectedItem.facility)+"\n                    ")])])])]},proxy:!0}])})],1)}),[],!1,null,null,null).exports,_=a(69),C=a(71),y=a(70),x=a(68);s.a.use(_.a),s.a.use(C.a),s.a.use(y.a),s.a.use(x.a),s.a.component("line-chart",{extends:r.a.Line,mounted(){this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[40,39,10,40,39,80,40]}]},{responsive:!0,maintainAspectRatio:!1})}}),new s.a({el:"#app",components:{App:b}})}});