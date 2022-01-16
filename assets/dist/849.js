(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[849],{602:(e,t,s)=>{"use strict";s.d(t,{H:()=>r});class i extends salla.AppHelpers{setHost(e){this.host=e}getElement(e){return this.host.querySelector(e)}getAttribute(e,t){var s;return null===(s=this.getElement(e))||void 0===s?void 0:s.getAttribute(t)}val(e){return this.getAttribute(e,"value")}}const r=new i},849:(e,t,s)=>{"use strict";s.r(t),s.d(t,{multi_warehouse:()=>c,salla_login:()=>r,salla_modal:()=>h});var i=s(531);const r=class{constructor(e){(0,i.r)(this,e)}render(){return(0,i.h)("salla-modal",{id:"salla-login",title:"سجل دخول إلى الموقع"},(0,i.h)("div",{id:"showLoginMethods"},(0,i.h)("p",{class:"text-sm text-gray-text mb-5"},"اختر الوسيلة المناسبة"),(0,i.h)("div",{id:"openEmailLogin",class:"mb-2.5 box-content relative rounded-md border border-border-color bg-white py-5 pe-4 ps-5 flex items-center space-s-3 hover:border-gray-200"},(0,i.h)("div",{class:"flex-shrink-0"},(0,i.h)("div",{class:"bg-primary w-12 h-12 text-lg text-white rounded-icon"},(0,i.h)("i",{class:"sicon-mail"}))),(0,i.h)("div",{class:"flex-1 min-w-0"},(0,i.h)("a",{href:"#",class:"focus:outline-none flex justify-between items-center"},(0,i.h)("div",{class:"flex-1"},(0,i.h)("span",{class:"absolute inset-0","aria-hidden":"true"}),(0,i.h)("p",{class:"text-sm text-gray-text"},"سجل دخول"),(0,i.h)("h6",{class:"font-boldf"},"البريد الإلكتروني")),(0,i.h)("i",{class:"sicon-keyboard_arrow_left text-primary text-xl"})))),(0,i.h)("div",{class:"box-content relative rounded-md border border-border-color bg-white py-5 pe-4 ps-5 flex items-center space-s-3 hover:border-gray-200"},(0,i.h)("div",{class:"flex-shrink-0"},(0,i.h)("div",{class:"bg-primary w-12 h-12 text-lg text-white rounded-icon"},(0,i.h)("i",{class:"sicon-phone"}))),(0,i.h)("div",{class:"flex-1 min-w-0"},(0,i.h)("a",{href:"#",class:"focus:outline-none flex justify-between items-center"},(0,i.h)("div",{class:"flex-1"},(0,i.h)("span",{class:"absolute inset-0","aria-hidden":"true"}),(0,i.h)("p",{class:"text-sm text-gray-text"},"سجل دخول"),(0,i.h)("h6",{class:"font-boldf"},"الهاتف")),(0,i.h)("i",{class:"sicon-keyboard_arrow_left text-primary text-xl"}))))))}};var n=s(602);let a=s(195),o=s(855),l=a.createStore(o);const c=class{constructor(e){(0,i.r)(this,e),this.open=!1,this.isOpenedBefore=l.get("multi-warehouse-opened-before"),this.displayAs="default",this.browseProductsFrom="all",this.branches=[{id:1,name:"فرع الرياض",open:!0,available:!0,limited:!1,tag:"متوفر"},{id:2,name:"فرع جدة",open:!1,available:!1,limited:!1,tag:"غير متوفر"},{id:3,name:"فرع مكة",open:!0,available:!0,limited:!1,tag:"متوفر"},{id:4,name:"فرع المدينة",open:!0,available:!0,limited:!1,tag:"متوفر"},{id:5,name:"فرع جازان",open:!0,available:!0,limited:!0,tag:"الكمية محدودة"}],this.current=1,this.currentBranch=e=>this.branches.filter((e=>e.id==this.current))[0][e],this.statusColor=(e=null)=>e?e.limited?"text-red-400":e.available?"text-green-500":"text-gray-400":this.currentBranch("limited")?"text-red-400":this.currentBranch("available")?"text-green-500":"text-gray-400",this.isChoiceable=()=>"all"!==this.browseProductsFrom&&"single"==this.position||"header"==this.position,this.formTitle=()=>this.isChoiceable()?"توفر المنتج في الفروع الآخرى":"التسوق من فرع آخر",salla.event.on("branches::show",(()=>this.show()))}async show(){return this.modal.show()}async hide(){return this.modal.hide()}handelChange(e){this.selected=e.target.value}handleSubmit(){l.set("multi-warehouse-opened-before",!0),this.show(),setTimeout((()=>{this.current=this.selected}),300)}render(){return(0,i.h)("salla-modal",{"is-closable":this.isOpenedBefore||"popup"!=this.displayAs?"true":"false",ref:e=>this.modal=e,"modal-width":"w-116",id:"multi-warehouse-modal",class:"hidden"},(0,i.h)("slot",{name:"header"},(0,i.h)("div",{slot:"header"})),(0,i.h)("div",null,(0,i.h)("div",{class:"text-right"},(0,i.h)("div",{class:"flex items-center mb-8"},(0,i.h)("div",{class:"flex-shrink-0 sm:mb-0 me-4"},(0,i.h)("div",{class:"h-16 w-16 border border-gray-200 bg-white text-primary rounded-full flex justify-center items-center"},(0,i.h)("span",{class:"sicon-store-alt"}))),(0,i.h)("div",null,(0,i.h)("p",{class:"mt-1 text-xs text-gray-400"},"أنت الآن تتصفح المتجر من"),(0,i.h)("h4",{class:"text-base"},"فرع الرياض"))),(0,i.h)("fieldset",{class:"mt-4"},(0,i.h)("h4",{class:"text-sm text-gray-600 mb-6"},this.formTitle()),(0,i.h)("legend",{class:"sr-only"},this.formTitle()),this.branches.length<=5?(0,i.h)("div",{class:"space-y-5"},this.branches.map((e=>(0,i.h)("div",{class:"flex items-center"},(0,i.h)("input",{id:this.position+"_branch_"+e.id,disabled:!e.open&&this.isChoiceable(),name:"lang",type:"radio",value:e.id,onChange:e=>this.handelChange(e),class:{"me-3 focus:ring-primary h-4 w-4 text-primary border-gray-300":!0,"opacity-50":!e.open,hidden:!this.isChoiceable()},checked:this.current==e.id}),(0,i.h)("label",{htmlFor:this.position+"_branch_"+e.id,class:{"flex items-center justify-between text-sm font-medium text-gray-700 flex-grow":!0,"cursor-pointer":this.isChoiceable()}},(0,i.h)("span",{class:{"opacity-50":!e.open}},e.name),this.isChoiceable()?(0,i.h)("small",{class:"text-red-400"},e.open?"":"مُغلق"):(0,i.h)("span",{class:this.statusColor(e)},e.tag)))))):(0,i.h)("select",{class:"w-full h-10 transition-colors duration-300 focus:ring-transparent focus:border-primary sm:text-sm border-gray-200 rounded-md appearance-none visibility_condition px-4",onInput:e=>this.handelChange(e)},this.branches.map((e=>(0,i.h)("option",{value:e.id,disabled:!e.open,selected:this.selected==e.id},e.name," ",e.open?"":"- مُغلق"))))))),this.isChoiceable()?(0,i.h)("p",{slot:"footer"},(0,i.h)("slot",{name:"footer"},(0,i.h)("button",{type:"button",class:"mt-8 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white transition-colors hover:bg-primary-d focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:col-start-2 sm:text-sm",onClick:()=>this.handleSubmit()},salla.lang.get("common.elements.ok")))):"")}componentDidRender(){}get host(){return(0,i.g)(this)}},h=class{constructor(e){(0,i.r)(this,e),this.ready=(0,i.c)(this,"ready",7),this.close=(0,i.c)(this,"close",7),this.error=!1,this.success=!1,this.isClosable=!0,this.modalWidth="w-96",this.visible=!1,this.subTitle="",this.icon="sicon-cancel",salla.event.on("modal::open",(e=>e.dataset.target==this.host.id&&this.show())),salla.event.on("modal::close",(e=>e.dataset.target==this.host.id&&this.hide()))}handleVisible(e){if(!e)return this.toggleModal(!1),void this.close.emit();this.host.classList.remove("hidden"),setTimeout((()=>this.toggleModal(!0))),this.ready.emit()}async show(){return this.host.setAttribute("visible",""),this.host}async hide(){return this.host.removeAttribute("visible"),this.host}toggleModal(e){n.H.toggleElement(this.host.querySelector(".s-modal-overlay"),"ease-out duration-300 opacity-100","opacity-0",(()=>e)).toggleElement(this.host.querySelector(".s-modal-body"),"ease-out duration-300 opacity-100 translate-y-0 sm:scale-100","opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",(()=>e)).toggleElement(document.body,"modal-is-open","modal-is-closed",(()=>e)),e||setTimeout((()=>this.host.classList.add("hidden")),350)}closeModal(){this.isClosable&&this.host.removeAttribute("visible")}render(){return this.host.id=this.host.id||"salla-modal",(0,i.h)(i.H,{class:"s-modal-container hidden","aria-modal":"true",role:"dialog"},(0,i.h)("div",{class:"s-modal-wrapper"},(0,i.h)("div",{class:"s-modal-overlay",onClick:()=>this.closeModal()}),(0,i.h)("span",{class:"s-modal-spacer"},"​"),(0,i.h)("div",{class:"s-modal-body "+this.modalWidth},(0,i.h)("slot",{name:"header"},(0,i.h)("div",{class:"s-modal-header"},this.isClosable?(0,i.h)("button",{class:"s-modal-close cursor-pointer",onClick:()=>this.closeModal(),type:"button"},(0,i.h)("span",{class:"sicon-cancel"})):"",this.error||this.success?(0,i.h)("div",{class:{"s-modal-icon":!0,"s-modal-bg-error":this.error,"s-modal-bg-success":this.success}},(0,i.h)("i",{class:{[this.icon]:!0,"s-modal-text-error":this.error,"s-modal-text-success":this.success}})):"",(0,i.h)("div",{class:"s-modal-title",innerHTML:this.host.title}),(0,i.h)("p",{class:"s-modal-sub-title",innerHTML:this.subTitle}))),(0,i.h)("slot",null),(0,i.h)("slot",{name:"footer"}))))}get host(){return(0,i.g)(this)}static get watchers(){return{visible:["handleVisible"]}}}},195:(e,t,s)=>{var i=s(78),r=i.slice,n=i.pluck,a=i.each,o=i.bind,l=i.create,c=i.isList,h=i.isFunction,d=i.isObject;e.exports={createStore:m};var u={version:"2.0.12",enabled:!1,get:function(e,t){var s=this.storage.read(this._namespacePrefix+e);return this._deserialize(s,t)},set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each((function(s,i){e.call(t,t._deserialize(s),(i||"").replace(t._namespaceRegexp,""))}))},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return m.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return m(this.storage,this.plugins,e)}};function m(e,t,s){s||(s=""),e&&!c(e)&&(e=[e]),t&&!c(t)&&(t=[t]);var i=s?"__storejs_"+s+"_":"",m=s?new RegExp("^"+i):null;if(!/^[a-zA-Z0-9_\-]*$/.test(s))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var p={_namespacePrefix:i,_namespaceRegexp:m,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var s=e.read(t)===t;return e.remove(t),s}catch(e){return!1}},_assignPluginFnProp:function(e,t){var s=this[t];this[t]=function(){var t=r(arguments,0),i=this;function n(){if(s)return a(arguments,(function(e,s){t[s]=e})),s.apply(i,t)}var o=[n].concat(t);return e.apply(i,o)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var s="";try{s=JSON.parse(e)}catch(t){s=e}return void 0!==s?s:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(c(e))a(e,(function(e){t._addPlugin(e)}));else if(!n(this.plugins,(function(t){return e===t}))){if(this.plugins.push(e),!h(e))throw new Error("Plugins must be function values that return objects");var s=e.call(this);if(!d(s))throw new Error("Plugins must return an object of function properties");a(s,(function(s,i){if(!h(s))throw new Error("Bad plugin property: "+i+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(s,i)}))}},addStorage:function(e){!function(){var e="undefined"==typeof console?null:console;e&&(e.warn?e.warn:e.log).apply(e,arguments)}("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(e)}},f=l(p,u,{plugins:[]});return f.raw={},a(f,(function(e,t){h(e)&&(f.raw[t]=o(f,e))})),a(e,(function(e){f._addStorage(e)})),a(t,(function(e){f._addPlugin(e)})),f}},78:(e,t,s)=>{var i=Object.assign?Object.assign:function(e,t,s,i){for(var r=1;r<arguments.length;r++)l(Object(arguments[r]),(function(t,s){e[s]=t}));return e},r=function(){if(Object.create)return function(e,t,s,r){var n=o(arguments,1);return i.apply(this,[Object.create(e)].concat(n))};{function e(){}return function(t,s,r,n){var a=o(arguments,1);return e.prototype=t,i.apply(this,[new e].concat(a))}}}(),n=String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},a="undefined"!=typeof window?window:s.g;function o(e,t){return Array.prototype.slice.call(e,t||0)}function l(e,t){c(e,(function(e,s){return t(e,s),!1}))}function c(e,t){if(h(e)){for(var s=0;s<e.length;s++)if(t(e[s],s))return e[s]}else for(var i in e)if(e.hasOwnProperty(i)&&t(e[i],i))return e[i]}function h(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}e.exports={assign:i,create:r,trim:n,bind:function(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}},slice:o,each:l,map:function(e,t){var s=h(e)?[]:{};return c(e,(function(e,i){return s[i]=t(e,i),!1})),s},pluck:c,isList:h,isFunction:function(e){return e&&"[object Function]"==={}.toString.call(e)},isObject:function(e){return e&&"[object Object]"==={}.toString.call(e)},Global:a}},855:(e,t,s)=>{var i=s(78).Global;function r(){return i.sessionStorage}function n(e){return r().getItem(e)}e.exports={name:"sessionStorage",read:n,write:function(e,t){return r().setItem(e,t)},each:function(e){for(var t=r().length-1;t>=0;t--){var s=r().key(t);e(n(s),s)}},remove:function(e){return r().removeItem(e)},clearAll:function(){return r().clear()}}}}]);