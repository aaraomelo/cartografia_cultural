(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25adff37"],{"22c3":function(t,e,n){"use strict";var o=n("6565"),i=n.n(o);i.a},6565:function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-page home-page"},[n("header",{staticClass:"aside"},[n("logo-card",{attrs:{inverted:""}}),n("my-menu",{on:{callFilter:function(e){return t.filterThis(e)}}})],1),n("div",{staticClass:"button-area"},[t.$store.getters["getAuth"]?t._e():n("q-btn",{staticClass:"btn-custom",attrs:{flat:"",to:"/signIn"}},[n("span",{staticClass:"body-3 bolder",attrs:{to:"/singIn"}},[t._v("Participar")])]),t.$store.getters["getAuth"]?n("q-btn",{staticClass:"btn-custom",attrs:{flat:"",to:"/profile"}},[t.$store.getters["getAuth"]?n("span",{staticClass:"subheading-2 bolder",attrs:{to:"/profile"}},[t._v("Perfil")]):t._e()]):t._e(),n("q-btn",{staticClass:"btn-custom",attrs:{flat:""},on:{click:function(e){return t.$router.push("/documentation")}}},[n("span",{staticClass:"subheading-2 bolder",attrs:{to:"/documentation"}},[t._v("Documentation")])])],1),n("main",{staticClass:"map-container"},[n("l-map",{staticStyle:{width:"100%, height: 100%"},attrs:{zoom:t.zoom,center:[t.center.lat,t.center.lng],options:t.options,"min-zoom":t.minZoom,"max-zoom":t.maxZoom},on:{"update:zoom":function(e){t.zoom=e},"update:center":function(e){t.center=e},"update:bounds":function(e){t.bounds=e}}},[n("l-tile-layer",{attrs:{url:t.layers.carto.url,attribution:t.attribution}}),t.handleResize()?n("l-control-zoom",{attrs:{position:"bottomright"}}):t._e(),n("div",{staticClass:"my-markes"},t._l(t.markers,(function(e){return n("l-marker",{key:e.id,staticClass:"marker-item",attrs:{"lat-lng":e.coordinates},on:{ready:function(n){return t.openDefaultMarker(n,e)}}},[n("l-icon",{staticClass:"icon-marker",attrs:{"icon-size":t.iconSet.iconSize,"icon-anchor":t.iconSet.iconAnchor}},[n("img",{staticClass:"img-icon",attrs:{id:"img-icon#"+e.id,src:e.image,height:t.iconSet.iconSize[0],width:t.iconSet.iconSize[1]}})]),n("l-popup",{attrs:{options:t.popupOptions}},[n("pin-view",{attrs:{"pin-view":t.getPinById(e.id)}})],1)],1)})),1)],1)],1)])},i=[],a=(n("7db0"),n("4160"),n("caad"),n("c975"),n("a434"),n("d3b7"),n("25f0"),n("2532"),n("159b"),n("5530")),s=n("2699"),r=n("a40a"),c=n("4e2b6"),l=n("c8b6"),u=n("f60f"),p=n("fbba"),d=n("2f62"),m=n("cffa"),f=n("a5cf"),h=n("5935"),g=n("58f1"),b=n("fb62"),z=Object(h["a"])({getterType:"maps/getField",mutationType:"maps/updateField"}),v=z.mapFields;m["b"].registerPlugin(m["a"],f["a"]);var y={name:"HomePage",title:"Cartografia da Cultura de Campo Grande",components:{LMap:s["a"],LTileLayer:r["a"],LMarker:c["a"],LControlZoom:l["a"],LPopup:u["a"],LIcon:p["a"],PinView:g["a"],MyMenu:b["a"]},data:function(){return{opemNav:!1,layers:{standard:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"},stadia:{name:"alidade-smooth",url:"https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"},carto:{url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"}},iconSet:{iconSize:[24,24],iconAnchor:[15,-8]},popupOptions:{autoPan:!1},filterSelections:[]}},computed:Object(a["a"])(Object(a["a"])({},v({center:"mapOptions.center",bounds:"mapOptions.bounds",attribution:"mapOptions.attribution",zoom:"zoomSet.zoom",minZoom:"zoomSet.minZoom",maxZoom:"zoomSet.maxZoom",options:"zoomSet.options"})),Object(d["d"])({pins:"pins/loadPinsFiltered",markers:"pins/getMarkers"})),created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},mounted:function(){},unmounted:function(){window.removeEventListener("resize",this.handleResize)},methods:{openDefaultMarker:function(t,e){e.id===this.$store.getters["pins/getSelectedPinId"]&&(t.openPopup(),this.$store.commit("pins/SET_SELECTED_PIN_ID",null))},filterThis:function(t){if(this.filterSelections.includes(t)){var e=this.filterSelections.indexOf(t.toString());this.filterSelections.splice(e,1)}else this.filterSelections.push(t.toString())},opem:function(){this.opemNav=!this.opemNav},setCoordinates:function(){var t=this;this.pins.forEach((function(e){return t.markers.push({id:e.id,categoryId:e.categoryId,coordinates:[e.lat,e["long"]]})}))},getPinById:function(t){var e=this.pins.find((function(e){return e.id===t}));return e},homeTransition:function(){var t=this.$refs,e=t.overlay,n=t.presentation;m["a"].to(n,2,{opacity:0,y:-60,ease:f["a"].easeInOut}),m["a"].to(e,2,{delay:1,top:"-100%",ease:f["a"].easeInOut})},handleResize:function(){var t=window.innerWidth;return!(t<1200)}}},S=y,C=(n("22c3"),n("2877")),w=n("fe09"),k=Object(C["a"])(S,o,i,!1,null,"4c6d6813",null);e["default"]=k.exports;k.options.components=Object.assign(Object.create(k.options.components||null),k.options.components||{},{QBtn:w["c"]})}}]);
//# sourceMappingURL=chunk-25adff37.5f77b3f8.js.map