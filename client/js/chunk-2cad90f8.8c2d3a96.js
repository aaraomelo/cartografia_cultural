(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cad90f8"],{"2c1c":function(t,e,s){"use strict";var i=s("bbf1"),a=s.n(i);a.a},6889:function(t,e,s){"use strict";var i=s("6a53"),a=s.n(i);a.a},"6a53":function(t,e,s){},"6b7b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-page events-page"},[s("div",{staticClass:"events-page-aside"},[s("logo-card"),t.handleResize?s("div",{staticClass:"aside-actions"},[s("div",{staticClass:"aside-filter-options"},t._l(t.options,(function(e,i){return s("div",{key:i,staticClass:"filter-options-item",on:{click:function(s){return t.filterThis(e.value)}}},[s("span",{staticClass:"body-3",class:{"selected-effect":t.filterTypeSelected===e.value},attrs:{id:"filter-item"}},[t._v(" "+t._s(e.label)+" ")])])})),0),s("div",{staticClass:"aside-filter-search"},[s("q-input",{attrs:{label:"Procurar",square:"",dense:"",color:"black"},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"bolder text-black",attrs:{name:"search",size:"xs"}})]},proxy:!0}],null,!1,2303654239),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),s("div",{staticClass:"aside-filter-create-event"},[s("base-button",{staticClass:"btn-signup",attrs:{theme:"primary"},on:{click:function(e){return t.signUp()}}},[s("span",{staticClass:"caption bolder text-white"},[t._v(" Cadastre-se! ")])])],1)]):t._e()],1),t.handleResize?s("div",{staticClass:"filter-mobile"},[s("span",{staticClass:"body-2 bolder"},[t._v(" + ")])]):t._e(),s("div",{staticClass:"content"},[t.handleResize?s("q-scroll-area",{staticClass:"scrollArea",attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[s("event-list")],1):t._e()],1)])},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-component topics-list"},[s("div",{staticClass:"content"},[s("masonry",{staticClass:"grid",attrs:{cols:{default:3,1200:3,1130:2,600:1},gutter:{default:"16px",1200:"4px",1130:"8px",600:"4px"}}},t._l(t.events,(function(t){return s("div",{key:t.id},[s("schedule-item",{staticClass:"item",attrs:{item:t}})],1)})),0)],1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"body-2 bolder"},[s("strong",[t._v("Ops!")]),t._v(" ainda não possuimos eventos.")])}],r=(s("4de4"),s("5530")),l=s("2f62"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{style:{"background-color":t.category(t.item.categoryId).color},attrs:{square:""}},[s("q-card-section",{staticClass:"card"},[s("div",{staticClass:"big-title bolder text-white",attrs:{id:"title"}},[t._v(" "+t._s(t.item.title)+" ")]),s("div",{staticClass:"caption bolder mg-top16 text-white"},[t._v(" "+t._s("Dia "+t.$store.getters["formatDate"](t.item.dateTime))+" ")]),s("div",{staticClass:"caption bolder text-white"},[t._v(" "+t._s("Às "+t.$store.getters["formatTime"](t.item.dateTime))+" ")])]),s("multicolor-line",{staticClass:"multicolor-line-top"}),s("q-card-section",{staticClass:"card col text-white"},[s("span",{staticClass:"row body-2 bolder"},[t._v(" "+t._s(t.item.description)+" ")]),s("span",{staticClass:"row caption bolder mg-top32"},[t._v(" "+t._s(t.item.street+", "+t.item.number+", "+t.item.neighborhood)+" ")]),s("span",{staticClass:"row caption bolder"},[t._v(" "+t._s("R$ "+t.moeda(t.item.ticket))+" ")])]),t.item.link?s("q-card-section",{staticClass:"mg-left16 q-pt-none text-black"},[s("q-list",[t.item.link?s("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.item.link}},[s("q-item-section",{attrs:{avatar:""}},[s("i",{staticClass:"fas fa-link"})]),s("q-item-section",[s("q-item-label",[t._v("Link")]),s("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.item.link))])],1)],1):t._e(),t.item.whatsapp?s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("i",{staticClass:"fab fa-whatsapp"})]),s("q-item-section",[s("q-item-label",[t._v("Whatsapp")]),s("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.item.whatsapp))])],1)],1):t._e(),t.item.facebook?s("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.item.facebook}},[s("q-item-section",{attrs:{avatar:""}},[s("i",{staticClass:"fab fa-facebook"})]),s("q-item-section",[s("q-item-label",[t._v("Facebook")]),s("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.item.facebook))])],1)],1):t._e(),t.item.instagram?s("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.item.instagram}},[s("q-item-section",{attrs:{avatar:""}},[s("i",{staticClass:"fab fa-instagram"})]),s("q-item-section",[s("q-item-label",[t._v("Instagram")]),s("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.item.instagram))])],1)],1):t._e()],1)],1):t._e(),s("q-carousel",{attrs:{swipeable:"",animated:"",arrows:"",navigation:"",height:"200px",fullscreen:t.fullscreen,infinite:"","transition-prev":"slide-right","transition-next":"slide-left"},on:{mouseenter:function(e){t.autoplay=!1},mouseleave:function(e){t.autoplay=!0}},scopedSlots:t._u([{key:"control",fn:function(){return[s("q-carousel-control",{attrs:{position:"bottom-right",offset:[18,18]}},[s("q-btn",{attrs:{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:t.fullscreen?"fullscreen_exit":"fullscreen"},on:{click:function(e){t.fullscreen=!t.fullscreen}}})],1)]},proxy:!0}]),model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.item.images.length,(function(e){return s("q-carousel-slide",{key:"full-"+t.item.id+"-"+e,attrs:{name:e,"img-src":""+t.$store.getters["services/getImagePath"]+t.item.images[e-1]}})})),1)],1)},u=[],d=(s("a15b"),s("baa5"),s("b680"),s("d3b7"),s("ac1f"),s("25f0"),s("466d"),s("5319"),s("1276"),{name:"ScheduleItem",props:{item:{type:Object,default:null}},data:function(){return{autoplay:!0,slide:1,fullscreen:!1}},computed:Object(r["a"])({},Object(l["d"])({category:"categories/getCategoryById"})),methods:{moeda:function(t){for(var e=(((100*t).toString().replace(".","").replace(/\D/g,"")/100).toFixed(2)+"").split("."),s=e[0].split("").reverse().join("").match(/.{1,3}/g),i=0;i<s.length;i++)s[i]=s[i].split("").reverse().join("")+".";var a=s.reverse().join("");return a.substring(0,a.lastIndexOf("."))+","+e[1]}}}),p=d,m=(s("6889"),s("2877")),f=s("fe09"),b=Object(m["a"])(p,c,u,!1,null,"1fc5a2ce",null),h=b.exports;b.options.components=Object.assign(Object.create(b.options.components||null),b.options.components||{},{QCard:f["d"],QCardSection:f["e"],QList:f["u"],QItem:f["r"],QItemSection:f["t"],QItemLabel:f["s"],QCarousel:f["f"],QCarouselSlide:f["h"],QCarouselControl:f["g"],QBtn:f["c"]});var v={components:{ScheduleItem:h},props:{filter:{type:String,default:function(){return"mostRecents"}}},data:function(){return{loading:!1,eventsLoaded:[],filterOption:[],currentFilter:"mostRecents",lastFilter:"mostRecents",streamCount:0,thumbStyle:{right:"0px",top:"16px",borderRadius:"0px",backgroundColor:"#111111",width:"9px",heigth:"8px",opacity:.75},barStyle:{right:"0px",top:"16px",borderRadius:"0px",backgroundColor:"#eeeeee",width:"9px",opacity:.2}}},computed:Object(r["a"])(Object(r["a"])({},Object(l["e"])("events",{events:function(t){return t.list}})),{},{hasAnyFilter:function(){var t=!1;return 0!==this.filter.length&&(t=!0),t}}),created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeMount:function(){},mounted:function(){this.$nextTick((function(){window.addEventListener("scroll",this.onScroll),this.onScroll()}))},beforeUnmount:function(){window.removeEventListener("scroll",this.onScroll)},unmounted:function(){window.removeEventListener("resize",this.handleResize)},methods:{changeFilter:function(t){t!==this.lastFilter?(this.currentFilter=t,this.lastFilter=t,this.streamCount=0,this.getInitialTopics(t)):console.log("filter dont changed")},getInitialTopics:function(t){var e=this;this.$store.dispatch("events/loadInitialEvents",{type:t,streamCount:0}).then((function(t){e.streamCount=1,e.eventsLoaded.push(t.data)}))["catch"]((function(t){console.log("EventList/getInitialEvents - ERROR",t.message)}))},getMoreTopics:function(){var t=this;this.$store.dispatch("events/loadMoreEvents",{type:this.currentFilter,streamCount:this.streamCount}).then((function(e){t.streamCount+=1,t.eventsLoaded.push(e.data)}))["catch"]((function(t){console.log("EventList/getMoreEvents - ERROR",t.message)}))},onScroll:function(){window.onscroll=function(){var t=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;t&&console.log("onScroll - trigger")}},handleResize:function(){var t=window.innerWidth;return!(t>600)}}},g=v,_=(s("be58"),Object(m["a"])(g,n,o,!1,null,"2a0575c9",null)),C=_.exports;_.options.components=Object.assign(Object.create(_.options.components||null),_.options.components||{},{QScrollArea:f["x"]});var k=s("82ea"),x={name:"SchedulePage",components:{EventList:C,BaseButton:k["a"]},data:function(){return{newEvent:"",filterTypeSelected:"mostRecent",search:"",options:[{label:"Mais ativos",value:"mostActive",color:"black"},{label:"Mais Comentados",value:"mostAnswed",color:"black"},{label:"Novos",value:"mostRecent",color:"black"}],thumbStyle:{right:"0px",top:"16px",borderRadius:"0px",backgroundColor:"#111111",width:"9px",heigth:"8px",opacity:.75},barStyle:{right:"0px",top:"16px",borderRadius:"0px",backgroundColor:"#eeeeee",width:"9px",opacity:.2}}},computed:{allTopics:function(){var t=this.$store.getters.eventsFiltered;return t}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},unmounted:function(){window.removeEventListener("resize",this.handleResize)},methods:{signUp:function(){this.$router.push({name:"SignUp"})},filterThis:function(t){this.filterTypeSelected=t,console.log("filterThis",t)},handleResize:function(){var t=window.innerWidth;return!(t>600)}}},y=x,w=(s("c64f"),Object(m["a"])(y,i,a,!1,null,"7b9f4d00",null));e["default"]=w.exports;w.options.components=Object.assign(Object.create(w.options.components||null),w.options.components||{},{QInput:f["q"],QIcon:f["o"],QScrollArea:f["x"]})},"82ea":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.to?s("router-link",{staticClass:"base-button",class:[t.theme,{disabled:t.disabled}],attrs:{to:t.to}},[t._t("default")],2):s("button",{staticClass:"base-button",class:[t.theme,{disabled:t.disabled}],on:{click:t.emitClick}},[t._t("default")],2)},a=[],n={props:{to:{type:Object,default:null},theme:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},emits:["click"],methods:{emitClick:function(){this.$emit("click")}}},o=n,r=(s("2c1c"),s("2877")),l=Object(r["a"])(o,i,a,!1,null,"2aaf335a",null);e["a"]=l.exports},"8c51":function(t,e,s){},9087:function(t,e,s){},baa5:function(t,e,s){var i=s("23e7"),a=s("e58c");i({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},bbf1:function(t,e,s){},be58:function(t,e,s){"use strict";var i=s("8c51"),a=s.n(i);a.a},c64f:function(t,e,s){"use strict";var i=s("9087"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-2cad90f8.8c2d3a96.js.map