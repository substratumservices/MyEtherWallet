(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-552137b6"],{"000f":function(e,t,n){},1336:function(e,t,n){"use strict";var a=n("7919"),s=n.n(a);s.a},"572c":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"back-container",on:{click:function(t){return t.preventDefault(),e.back(t)}}},[n("div",{staticClass:"content-title"},[e._m(0),n("p",[e._v(e._s(e.$t("common.back")))])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"back-icon-container"},[n("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}})])}],i=(n("a481"),n("28a5"),n("6762"),n("2fdb"),{methods:{back:function(){if(this.$router.history.current.path.includes("interface")){var e=this.$router.history.current.path.split("/");this.$router.replace("/".concat(e[1],"/").concat(e[2]))}else this.$router.go(-1)}}}),r=i,o=(n("d0b4"),n("2877")),u=Object(o["a"])(r,a,s,!1,null,"78314125",null);u.options.__file="BackButton.vue";var c=u.exports;n.d(t,"a",function(){return c})},7919:function(e,t,n){},d0b4:function(e,t,n){"use strict";var a=n("000f"),s=n.n(a);s.a},d494:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register-domain-container"},[n("back-button"),n("router-view",{attrs:{"contract-initiated":e.contractInitiated,"check-domain":e.checkDomain,"bid-amount":e.bidAmount,"bid-mask":e.bidMask,"secret-phrase":e.secretPhrase,"start-auction-and-bid":e.startAuctionAndBid,"domain-name":e.domainName,"auction-date-end":e.auctionDateEnd,loading:e.loading,"name-hash":e.nameHash,"label-hash":e.labelHash,owner:e.owner,"resolver-address":e.resolverAddress,"deed-owner":e.deedOwner,"highest-bidder":e.highestBid,raw:e.raw,step:e.step,"send-bid":e.sendBid,"reveal-bid":e.revealBid,"domain-name-err":e.domainNameErr,"generate-key-phrase":e.generateKeyPhrase,finalize:e.finalize,"update-resolver":e.updateResolver,"transfer-domain":e.transferDomain},on:{updateSecretPhrase:e.updateSecretPhrase,updateBidAmount:e.updateBidAmount,updateBidMask:e.updateBidMask,domainNameChange:e.updateDomainName,updateStep:e.updateStep}})],1)},s=[],i=(n("6b54"),n("ac6a"),n("7514"),n("96cf"),n("3b8d")),r=n("cebc"),o=n("572c"),u=[{constant:!1,inputs:[{name:"_hash",type:"bytes32"}],name:"releaseDeed",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_hash",type:"bytes32"}],name:"getAllowedTime",outputs:[{name:"timestamp",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"unhashedName",type:"string"}],name:"invalidateName",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"hash",type:"bytes32"},{name:"owner",type:"address"},{name:"value",type:"uint256"},{name:"salt",type:"bytes32"}],name:"shaBid",outputs:[{name:"sealedBid",type:"bytes32"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"bidder",type:"address"},{name:"seal",type:"bytes32"}],name:"cancelBid",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_hash",type:"bytes32"}],name:"entries",outputs:[{name:"",type:"uint8"},{name:"",type:"address"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"ens",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_hash",type:"bytes32"},{name:"_value",type:"uint256"},{name:"_salt",type:"bytes32"}],name:"unsealBid",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_hash",type:"bytes32"}],name:"transferRegistrars",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"bytes32"}],name:"sealedBids",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_hash",type:"bytes32"}],name:"state",outputs:[{name:"",type:"uint8"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_hash",type:"bytes32"},{name:"newOwner",type:"address"}],name:"transfer",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_hash",type:"bytes32"},{name:"_timestamp",type:"uint256"}],name:"isAllowed",outputs:[{name:"allowed",type:"bool"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_hash",type:"bytes32"}],name:"finalizeAuction",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"registryStarted",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"launchLength",outputs:[{name:"",type:"uint32"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"sealedBid",type:"bytes32"}],name:"newBid",outputs:[],payable:!0,type:"function"},{constant:!1,inputs:[{name:"labels",type:"bytes32[]"}],name:"eraseNode",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_hashes",type:"bytes32[]"}],name:"startAuctions",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"hash",type:"bytes32"},{name:"deed",type:"address"},{name:"registrationDate",type:"uint256"}],name:"acceptRegistrarTransfer",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_hash",type:"bytes32"}],name:"startAuction",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"rootNode",outputs:[{name:"",type:"bytes32"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"hashes",type:"bytes32[]"},{name:"sealedBid",type:"bytes32"}],name:"startAuctionsAndBid",outputs:[],payable:!0,type:"function"},{inputs:[{name:"_ens",type:"address"},{name:"_rootNode",type:"bytes32"},{name:"_startDate",type:"uint256"}],payable:!1,type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"hash",type:"bytes32"},{indexed:!1,name:"registrationDate",type:"uint256"}],name:"AuctionStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"hash",type:"bytes32"},{indexed:!0,name:"bidder",type:"address"},{indexed:!1,name:"deposit",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"hash",type:"bytes32"},{indexed:!0,name:"owner",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"status",type:"uint8"}],name:"BidRevealed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"hash",type:"bytes32"},{indexed:!0,name:"owner",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"registrationDate",type:"uint256"}],name:"HashRegistered",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"hash",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"HashReleased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"hash",type:"bytes32"},{indexed:!0,name:"name",type:"string"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"registrationDate",type:"uint256"}],name:"HashInvalidated",type:"event"}],c=u,d=[{constant:!0,inputs:[],name:"creationDate",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[],name:"destroyDeed",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"setOwner",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"registrar",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"refundRatio",type:"uint256"}],name:"closeDeed",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"newRegistrar",type:"address"}],name:"setRegistrar",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"newValue",type:"uint256"}],name:"setBalance",outputs:[],payable:!0,type:"function"},{inputs:[],type:"constructor"},{payable:!0,type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"newOwner",type:"address"}],name:"OwnerChanged",type:"event"},{anonymous:!1,inputs:[],name:"DeedClosed",type:"event"}],p=d,h=n("00a5"),m=n.n(h),y=n("70c1"),l=n("2c0b"),b=n("7856"),f=n("2f62"),g=".eth",w={components:{"back-button":o["a"]},data:function(){return{domainName:"",loading:!1,bidAmount:.01,bidMask:.02,nameHash:"",labelHash:"",owner:"",resolverAddress:"",deedOwner:"",secretPhrase:"",registrarAddress:"",auctionDateEnd:0,auctionRegistrarContract:function(){},raw:{},highestBid:"",contractInitiated:!1,step:1,domainNameErr:!1,ensRegistry:function(){},ensRegistryContract:function(){}}},computed:Object(r["a"])({},Object(f["b"])({web3:"web3",network:"network",account:"account",ens:"ens"})),created:function(){this.setup()},methods:{setup:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.web3,this.domainName="",this.loading=!1,this.bidAmount=.01,this.bidMask=.02,this.nameHash="",this.labelHash="",this.owner="",this.resolverAddress="",this.deedOwner="",this.secretPhrase="",this.registrarAddress="",this.auctionDateEnd=0,this.auctionRegistrarContract=function(){},this.raw={},this.highestBid="",this.contractInitiated=!1,this.step=1,this.contractInitiated=!1,e.next=21,this.getRegistrarAddress();case 21:this.registrarAddress=e.sent,this.auctionRegistrarContract=new t.eth.Contract(c,this.registrarAddress),this.contractInitiated=!0,this.domainNameErr=!1,this.ensRegistry=this.network.type.contracts.find(function(e){return t.utils.toChecksumAddress(e.address)===t.utils.toChecksumAddress("0x314159265dD8dbb310642f98f50C066173C1259b")}),this.ensRegistryContract=new t.eth.Contract(this.ensRegistry.abi,this.ensRegistry.address);case 27:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),transferDomain:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.ensRegistryContract.methods.setOwner(this.nameHash,t).encodeABI();case 2:n=e.sent,a={from:this.account.address,to:this.ensRegistry.address,data:n,value:0},this.web3.eth.sendTransaction(a);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),updateResolver:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,a,s,i,r,o,u,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=this.web3,a=this.account.address,e.next=4,this.ens.resolver("resolver.eth");case 4:return s=e.sent,e.next=7,s.addr();case 7:i=e.sent,r=this.network.type.contracts.find(function(e){return n.utils.toChecksumAddress(e.address)===n.utils.toChecksumAddress(i)}),o=new n.eth.Contract(r.abi,i),u={to:this.ensRegistry.address,from:a,data:this.ensRegistryContract.methods.setResolver(this.nameHash,i).encodeABI(),value:0},c={to:i,from:a,data:o.methods.setAddr(this.nameHash,t).encodeABI(),value:0},n.mew.sendBatchTransactions([u,c]);case 13:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),finalize:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,a,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.account.address,n=this.web3,a=n.utils.sha3(this.domainName),e.next=5,this.auctionRegistrarContract.methods.finalizeAuction(a).encodeABI();case 5:s=e.sent,i={from:t,value:0,to:this.registrarAddress,data:s},n.eth.sendTransaction(i);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getRegistrarAddress:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.ens.owner(g.replace(".",""));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),checkDomain:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.web3,this.loading=!0,this.labelHash=t.utils.sha3(this.domainName),e.prev=3,e.next=6,this.auctionRegistrarContract.methods.entries(this.labelHash).call();case 6:n=e.sent,this.processResult(n),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),this.loading=!1;case 13:case"end":return e.stop()}},e,this,[[3,10]])}));function t(){return e.apply(this,arguments)}return t}(),updateStep:function(e){this.step=e},processResult:function(e){switch(this.auctionDateEnd=1e3*e[2],e[0]){case"0":this.generateKeyPhrase(),this.$router.push({path:"register-domain/auction"}),this.loading=!1;break;case"1":this.generateKeyPhrase(),this.loading=!1,this.$router.push({path:"register-domain/bid"});break;case"2":this.getMoreInfo(e[1]);break;case"3":this.loading=!1,this.$router.push({path:"register-domain/forbidden"});break;case"4":this.loading=!1,this.highestBid=y["fromWei"](e[4],"ether").toString(),this.$router.push({path:"register-domain/reveal"});break}},updateDomainName:function(e){"0x"===e.substr(0,2)||e.length<7||-1!==e.indexOf(".")?this.domainNameErr=!0:this.domainNameErr=!1;try{Object(b["a"])(e)}catch(t){return void(this.domainNameErr=!0)}this.domainName=Object(b["a"])(e)},getMoreInfo:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,a,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=new this.web3.eth.Contract(p,t),e.next=3,n.methods.owner().call();case 3:return a=e.sent,e.prev=4,e.next=7,this.ens.owner(this.domainName+g);case 7:s=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](4),s="0x";case 13:return e.prev=13,e.next=16,this.ens.resolver(this.domainName+g).addr();case 16:i=e.sent,e.next=22;break;case 19:e.prev=19,e.t1=e["catch"](13),i="0x";case 22:this.nameHash=l["hash"](this.domainName+g),this.resolverAddress=i,this.deedOwner=a,this.owner=s,this.$router.push({path:"register-domain/owned"}),this.loading=!1;case 28:case"end":return e.stop()}},e,this,[[4,10],[13,19]])}));function t(t){return e.apply(this,arguments)}return t}(),createTransaction:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,a,s,i,r,o,u,c,d;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,n=this.account.address,a=this.web3.utils,s=a.sha3(this.domainName),e.next=6,this.auctionRegistrarContract.methods.shaBid(s,n,a.toWei(this.bidAmount.toString(),"ether"),a.sha3(this.secretPhrase)).call();case 6:i=e.sent,"start"===t?r=this.auctionRegistrarContract.methods.startAuctionsAndBid([s],i):"bid"===t?r=this.auctionRegistrarContract.methods.newBid(i):"reveal"===t&&(r=this.auctionRegistrarContract.methods.unsealBid(s,a.toWei(this.bidAmount.toString(),"ether"),a.sha3(this.secretPhrase))),o=new Date,u=o.setDate(o.getDate()+5),c=o.setDate(o.getDate()-2),d={from:n,value:"reveal"===t?0:y["toWei"](this.bidMask,"ether").toString(),to:this.registrarAddress,data:r.encodeABI(),name:this.domainName,nameSHA3:a.sha3(this.domainName),bidAmount:this.bidAmount,bidMask:this.bidMask,secretPhrase:this.secretPhrase,secretPhraseSHA3:a.sha3(this.secretPhrase),auctionDateEnd:new Date(u),revealDate:new Date(c)},this.raw=d,this.loading=!1,this.step=2;case 15:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),startAuctionAndBid:function(){this.createTransaction("start")},sendBid:function(){this.createTransaction("bid")},revealBid:function(){this.createTransaction("reveal")},updateSecretPhrase:function(e){this.secretPhrase=e},updateBidAmount:function(e){this.bidAmount=e},updateBidMask:function(e){this.bidMask=e},generateKeyPhrase:function(){for(var e=[],t=0,n=m.a.wordlists.EN.length,a=0;a<3;a++)e.push(m.a.wordlists.EN[Math.floor(Math.random()*(n-t+1))+t]);this.secretPhrase=e.join(" ")}}},v=w,k=(n("1336"),n("2877")),R=Object(k["a"])(v,a,s,!1,null,"ed2f50b6",null);R.options.__file="RegisterDomain.vue";t["default"]=R.exports}}]);
//# sourceMappingURL=chunk-552137b6.5abf94bc.js.map