(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2e69a6c"],{"539d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottom-text"},[a("p",[e._v("\n    "+e._s(e.question)+"\n    "),a("a",{attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.linkText))])])])},i=[],s={props:{link:{type:String,default:""},linkText:{type:String,default:""},question:{type:String,default:""}},data:function(){return{}}},o=s,r=(a("cf2f"),a("2877")),c=Object(r["a"])(o,n,i,!1,null,"dd4083a8",null);c.options.__file="InterfaceBottomText.vue";var l=c.exports;a.d(t,"a",function(){return l})},"669f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"initial-state-ens"},[a("form",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h4",[e._v(e._s(e.$t("interface.registerEns")))]),a("p",[e._v(e._s(e.$t("interface.registerEnsDesc")))])])]),a("div",{staticClass:"the-form domain-name"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.localDomainName,expression:"localDomainName"}],class:[e.domainNameErr?"errored":""],attrs:{placeholder:e.$t("dapps.registerEnsPlaceholder"),type:"text",name:""},domProps:{value:e.localDomainName},on:{input:function(t){t.target.composing||(e.localDomainName=t.target.value)}}}),a("span",[e._v(".eth")])]),a("div",{staticClass:"error-message-container"},[a("p",{directives:[{name:"show",rawName:"v-show",value:!1===e.contractInitiated,expression:"contractInitiated === false"}],staticClass:"contract-loading-warning"},[e._v("\n        "+e._s(e.$t("dapps.registerEnsContractNotReady"))+"\n      ")]),a("p",{directives:[{name:"show",rawName:"v-show",value:e.domainNameErr,expression:"domainNameErr"}],staticClass:"erroredMsg"},[e.localDomainName.length<7&&""!==e.localDomainName?a("span",[e._v("\n          "+e._s(e.$t("dapps.registerEnsWarn1"))+"\n        ")]):a("span",[e._v(" "+e._s(e.$t("dapps.registerEnsWarn2"))+" ")])])]),a("div",{staticClass:"submit-button-container"},[a("button",{class:[e.domainNameErr||""===e.localDomainName?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:function(t){return t.preventDefault(),e.checkDomain(t)}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[e._v(" "+e._s(e.$t("interface.checkDomain"))+" ")]),a("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),a("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},i=[],s=a("539d"),o={components:{"interface-bottom-text":s["a"]},props:{checkDomain:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},contractInitiated:{type:Boolean,default:!1},domainName:{type:String,default:""},domainNameErr:{type:Boolean,default:!1}},data:function(){return{localDomainName:this.domainName}},watch:{localDomainName:function(e){this.$emit("domainNameChange",e)},domainName:function(e){this.localDomainName=e}},methods:{expendDomainCheckForm:function(){this.$refs["checkForm"].classList.toggle("hidden"),this.$refs["domainList"].classList.add("hidden")},domainAvailabilityCheck:function(){this.$refs["domainList"].classList.add("hidden")}}},r=o,c=(a("9af9"),a("2877")),l=Object(c["a"])(r,n,i,!1,null,"2821fc7e",null);l.options.__file="InitialENSStateContainer.vue";var d=l.exports;a.d(t,"default",function(){return d})},"9af9":function(e,t,a){"use strict";var n=a("ca52"),i=a.n(n);i.a},ca52:function(e,t,a){},cf2f:function(e,t,a){"use strict";var n=a("e32f"),i=a.n(n);i.a},e32f:function(e,t,a){}}]);
//# sourceMappingURL=chunk-e2e69a6c.2d0a1c29.js.map