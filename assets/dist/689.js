"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[689],{689:(e,s,o)=>{o.r(s),o.d(s,{salla_offer_modal:()=>r});var t=o(5570),a=o(3863);const r=class{constructor(e){var s,o;(0,t.r)(this,e),this.offer=null,this.offer_expires_in=salla.lang.get("pages.products.offer_expires_in"),this.remember_my_choice=salla.lang.get("commone.remember_my_choice"),a.H.setHost(this.host),salla.event.on("languages::translations.loaded",(()=>{this.offer_expires_in=salla.lang.get("pages.products.offer_expires_in"),this.remember_my_choice=salla.lang.get("common.remember_my_choice")})),this.categorySlot=(null===(s=a.H.getElement('[slot="category"]'))||void 0===s?void 0:s.innerHTML)||'<i class="s-offer-modal-badge-icon sicon-tag"></i><span class="s-offer-modal-badge-text">{name}</span>',this.productSlot=(null===(o=a.H.getElement('[slot="product"]'))||void 0===o?void 0:o.innerHTML)||this.defaultProductSlot(),salla.offer.event.onExisted((e=>{salla.storage.get("remember-offer-"+e.id)?salla.log("User selected to don't show this offer again."):this.show(e.product_id)}))}async show(e){return salla.api.offer.details(e).then((e=>this.showOffer(e.data[0])))}async showOffer(e){return this.offer=e,this.offer_name=e.name,this.offer_message=e.message,this.modal.show()}rememberMe(e){salla.storage.set("remember-offer-"+this.offer.id,e.target.checked)}addItem(){return this.load(),salla.cart.api.quickAdd(this.dataset.id).finally((()=>this.stop()))}defaultProductSlot(){return'<a href={url} class="s-offer-modal-product-image-wrap"><img class="s-offer-modal-product-image" src="{image}" /></a><div class="s-offer-modal-product-info">   <a href={url} class="s-offer-modal-product-name">{name}</a>   <div class="s-offer-modal-product-price">{price}</div></div>'}render(){var e,s;return(0,t.h)("salla-modal",{id:"salla-offer-modal","sub-title-first":!0,icon:"sicon-special-discount",title:"عروض رائعة في انتظارك، ماذا نتنظر!","sub-title":this.offer_message,ref:e=>this.modal=e,"is-loading":null===this.offer},null!==this.offer?[(0,t.h)("div",{class:"s-offer-modal-scrolled-slider-wrap"},(0,t.h)("div",{class:"s-offer-modal-body s-offer-modal-scrolled-slider"},(null===(e=this.offer.get.categories)||void 0===e?void 0:e.length)>0?this.offer.get.categories.map((e=>(0,t.h)("a",{href:e.urls.customer,class:"s-offer-modal-badge s-offer-modal-slider-item",innerHTML:this.categorySlot.replace(/\{name\}/g,e.name).replace(/\{url\}/g,e.urls.customer)}))):null===(s=this.offer.get.products)||void 0===s?void 0:s.map((e=>(0,t.h)("div",{class:"s-offer-modal-product s-offer-modal-slider-item",id:"product_"+e.id,innerHTML:this.productSlot.replace(/\{name\}/g,e.name).replace(/\{url\}/g,e.url).replace(/\{image\}/g,e.thumbnail).replace(/\{price\}/g,e.has_special_price?salla.money(e.price)+'<span class="s-offer-modal-product-old-price">'+salla.money(e.regular_price)+"</span>":salla.money(e.price))},(0,t.h)("div",{class:"s-offer-modal-btn-wrap"},(0,t.h)("salla-button",{wide:!0,"btn-style":"outline-primary","data-id":e.id,"loader-position":"center",onClick:this.addItem},salla.lang.get("pages.cart.add_to_cart"))))))),(0,t.h)("div",{class:"s-offer-modal-slider-nav"},(0,t.h)("button",{class:"s-offer-modal-nav-btn s-offer-modal-prev-btn"},(0,t.h)("span",{class:"s-offer-modal-nav-btn-icon sicon-keyboard_arrow_right"})),(0,t.h)("button",{class:"s-offer-modal-nav-btn s-offer-modal-next-btn"},(0,t.h)("span",{class:"s-offer-modal-nav-btn-icon sicon-keyboard_arrow_left"})))),(0,t.h)("div",{class:"s-offer-modal-footer",slot:"footer"},this.offer.expiry_date?(0,t.h)("p",{class:"s-offer-modal-expiry"},this.offer_expires_in," ",this.offer.expiry_date):"",(0,t.h)("label",{class:"s-offer-modal-remember-label"},(0,t.h)("input",{type:"checkbox",onChange:e=>this.rememberMe(e),class:"s-offer-modal-remember-input"}),"  ",this.remember_my_choice))]:"")}componentDidRender(){if(this.modal.querySelectorAll("[hidden]").forEach((e=>e.removeAttribute("hidden"))),this.offer&&window.screen.width>639){let e=this.host.querySelector(".s-offer-modal-scrolled-slider-wrap"),s=this.host.querySelector(".s-offer-modal-scrolled-slider"),o=this.host.querySelectorAll(".s-offer-modal-nav-btn"),t=this.host.querySelector(".s-offer-modal-next-btn"),a=this.host.querySelector(".s-offer-modal-prev-btn"),r=this.host.querySelectorAll(".s-offer-modal-slider-item"),l=20,i=0,f=3,d=r[0].offsetWidth,n=r.length*d,c=e.offsetWidth,m=n-c,h=!!document.body.classList.contains("rtl");m>l&&t.classList.add("s-offer-modal-btn-is-active"),window.onresize=function(){c=e.offsetWidth,m=n-c},s.addEventListener("scroll",(function(){let e=Math.abs(s.scrollLeft),o=m-l;e<=l?(t.classList.add("s-offer-modal-btn-is-active"),a.classList.remove("s-offer-modal-btn-is-active")):e<o?(t.classList.add("s-offer-modal-btn-is-active"),a.classList.add("s-offer-modal-btn-is-active")):e>=o&&(t.classList.remove("s-offer-modal-btn-is-active"),a.classList.add("s-offer-modal-btn-is-active"))})),o.forEach((e=>{e.addEventListener("click",(function(){e.classList.contains("s-offer-modal-next-btn")?i++:i--,s.scrollTo({top:0,left:d*f*i*(h?-1:1),behavior:"smooth"})}))}))}}get host(){return(0,t.g)(this)}};r.style="#salla-offer-modal .s-offer-modal-body{-webkit-overflow-scrolling:touch}#salla-offer-modal .s-offer-modal-body::-webkit-scrollbar{display:none}#salla-offer-modal .s-offer-modal-next-btn{background:linear-gradient(90deg, #fff 25%, rgba(255, 255, 255, 0.4) 80%, rgba(255, 255, 255, 0) 100%)}#salla-offer-modal .s-offer-modal-prev-btn{background:linear-gradient(-90deg, #fff 25%, rgba(255, 255, 255, 0.4) 80%, rgba(255, 255, 255, 0) 100%)}"},3863:(e,s,o)=>{o.d(s,{H:()=>a}),salla.event.setMaxListeners(20);class t extends salla.AppHelpers{setHost(e){this.host=e}getElement(e){return this.host.querySelector(e)}getAttribute(e,s){var o;return null===(o=this.getElement(e))||void 0===o?void 0:o.getAttribute(s)}val(e){return this.getAttribute(e,"value")}isUser(){return"user"===salla.config.get("user.type")}}const a=new t}}]);