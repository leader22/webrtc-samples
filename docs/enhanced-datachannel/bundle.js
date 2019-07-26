!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){(function(r){t.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,s=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(r++,"%c"===e&&(s=r))}),t.splice(s,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n(5)(t);const{formatters:s}=e.exports;s.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,n(4))},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(3)),o=r(n(0)).default("based-dc"),i=["open","close","error","message","bufferedamountlow"];t.default=class extends s.default{constructor(e){super(),this._dc=e,this._closed=!1;for(const e of i)this._dc.addEventListener(e,this,!1)}get binaryType(){return this._dc.binaryType}set binaryType(e){this._dc.binaryType=e}get bufferedAmountLowThreshold(){return this._dc.bufferedAmountLowThreshold}set bufferedAmountLowThreshold(e){this._dc.bufferedAmountLowThreshold=e}get bufferedAmount(){return this._dc.bufferedAmount}get id(){return this._dc.id}get label(){return this._dc.label}get maxPacketLifeTime(){return"maxPacketLifeTime"in this._dc?this._dc.maxPacketLifeTime:this._dc.maxRetransmitTime}get maxRetransmits(){return this._dc.maxRetransmits}get negotiated(){return this._dc.negotiated}get ordered(){return this._dc.ordered}get priority(){return this._dc.priority}get protocol(){return this._dc.protocol}get readyState(){return this._dc.readyState}get closed(){return this._closed}close(){o("close()"),this._closed=!0;for(const e of i)this._dc.removeEventListener(e,this,!1);this._dc.close(),this.emit("close"),this.removeAllListeners()}send(e){if(o("send()",e),this._closed)throw new Error("Closed!");if("open"!==this._dc.readyState)throw new Error("Not opened!");this._dc.send(e)}handleEvent(e){if(!this._closed)switch(e.type){case"open":return this._handleOpen();case"close":return this._handleClose();case"error":return this._handleError(e);case"message":return this._handleMessage(e);case"bufferedamountlow":return this._handleBufferedAmountLow()}}_handleOpen(){this.emit("open")}_handleClose(){this.emit("close")}_handleError(e){this.emit("error",e.error)}_handleMessage(e){this.emit("message",e.data)}_handleBufferedAmountLow(){this.emit("bufferedamountlow")}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(1)),o=r(n(7)),i=r(n(8)),a=r(n(0)).default("enhanced-dc");t.based=function(e){if(e instanceof RTCDataChannel==0)throw new Error("Missing datachannel instance!");return new s.default(e)},t.promised=function(e){if(e instanceof RTCDataChannel==0)throw new Error("Missing datachannel instance!");if(!e.ordered)throw new Error("The ordered property must be true!");return new o.default(e)},t.chunked=function(e){if(e instanceof RTCDataChannel==0)throw new Error("Missing datachannel instance!");if(!e.ordered)throw new Error("The ordered property must be true!");return"arraybuffer"!==e.binaryType&&(a(`change binaryType ${e.binaryType} -> arraybuffer`),e.binaryType="arraybuffer"),new i.default(e)}},function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,s="~";function o(){}function i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function a(e,t,n,r,o){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new i(n,r||e,o),c=s?s+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function c(e,t){0==--e._eventsCount?e._events=new o:delete e._events[t]}function u(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),(new o).__proto__||(s=!1)),u.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(s?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},u.prototype.listeners=function(e){var t=s?s+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,o=n.length,i=new Array(o);r<o;r++)i[r]=n[r].fn;return i},u.prototype.listenerCount=function(e){var t=s?s+e:e,n=this._events[t];return n?n.fn?1:n.length:0},u.prototype.emit=function(e,t,n,r,o,i){var a=s?s+e:e;if(!this._events[a])return!1;var c,u,l=this._events[a],d=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),d){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,r),!0;case 5:return l.fn.call(l.context,t,n,r,o),!0;case 6:return l.fn.call(l.context,t,n,r,o,i),!0}for(u=1,c=new Array(d-1);u<d;u++)c[u-1]=arguments[u];l.fn.apply(l.context,c)}else{var f,h=l.length;for(u=0;u<h;u++)switch(l[u].once&&this.removeListener(e,l[u].fn,void 0,!0),d){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,t);break;case 3:l[u].fn.call(l[u].context,t,n);break;case 4:l[u].fn.call(l[u].context,t,n,r);break;default:if(!c)for(f=1,c=new Array(d-1);f<d;f++)c[f-1]=arguments[f];l[u].fn.apply(l[u].context,c)}}return!0},u.prototype.on=function(e,t,n){return a(this,e,t,n,!1)},u.prototype.once=function(e,t,n){return a(this,e,t,n,!0)},u.prototype.removeListener=function(e,t,n,r){var o=s?s+e:e;if(!this._events[o])return this;if(!t)return c(this,o),this;var i=this._events[o];if(i.fn)i.fn!==t||r&&!i.once||n&&i.context!==n||c(this,o);else{for(var a=0,u=[],l=i.length;a<l;a++)(i[a].fn!==t||r&&!i[a].once||n&&i[a].context!==n)&&u.push(i[a]);u.length?this._events[o]=1===u.length?u[0]:u:c(this,o)}return this},u.prototype.removeAllListeners=function(e){var t;return e?(t=s?s+e:e,this._events[t]&&c(this,t)):(this._events=new o,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=s,u.EventEmitter=u,e.exports=u},function(e,t){var n,r,s=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&h())}function h(){if(!l){var e=a(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.prependListener=g,s.prependOnceListener=g,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(e,t,n){e.exports=function(e){function t(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function r(e){let n;function i(...e){if(!i.enabled)return;const t=i,s=Number(new Date),o=s-(n||s);t.diff=o,t.prev=n,t.curr=s,n=s,e[0]=r.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,s)=>{if("%%"===n)return n;a++;const o=r.formatters[s];if("function"==typeof o){const r=e[a];n=o.call(t,r),e.splice(a,1),a--}return n}),r.formatArgs.call(t,e),(t.log||r.log).apply(t,e)}return i.namespace=e,i.enabled=r.enabled(e),i.useColors=r.useColors(),i.color=t(e),i.destroy=s,i.extend=o,"function"==typeof r.init&&r.init(i),r.instances.push(i),i}function s(){const e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function o(e,t){const n=r(this.namespace+(void 0===t?":":t)+e);return n.log=this.log,n}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){const e=[...r.names.map(i),...r.skips.map(i).map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){let t;r.save(e),r.names=[],r.skips=[];const n=("string"==typeof e?e:"").split(/[\s,]+/),s=n.length;for(t=0;t<s;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(t=0;t<r.instances.length;t++){const e=r.instances[t];e.enabled=r.enabled(e.namespace)}},r.enabled=function(e){if("*"===e[e.length-1])return!0;let t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=n(6),Object.keys(e).forEach(t=>{r[t]=e[t]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=t,r.enable(r.load()),r}},function(e,t){var n=1e3,r=60*n,s=60*r,o=24*s,i=7*o,a=365.25*o;function c(e,t,n,r){var s=t>=1.5*n;return Math.round(e/n)+" "+r+(s?"s":"")}e.exports=function(e,t){t=t||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*a;case"weeks":case"week":case"w":return c*i;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*s;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===u&&isFinite(e))return t.long?function(e){var t=Math.abs(e);if(t>=o)return c(e,t,o,"day");if(t>=s)return c(e,t,s,"hour");if(t>=r)return c(e,t,r,"minute");if(t>=n)return c(e,t,n,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=o)return Math.round(e/o)+"d";if(t>=s)return Math.round(e/s)+"h";if(t>=r)return Math.round(e/r)+"m";if(t>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(0)),o=r(n(1)),i=s.default("promised-dc"),a={REQUEST:0,SUCCESS_RESPONSE:1,ERROR_RESPONSE:2};t.default=class extends o.default{constructor(e){super(e),this._sentRequests=new Map}close(){i("close()");for(const e of this._sentRequests.values())e.close();this._sentRequests.clear(),super.close()}async send(e){if(i("send()",e),this._closed)throw new Error("Closed!");if("open"!==this._dc.readyState)throw new Error("Not opened!");const t=String(Math.random()).slice(2,6),n={type:a.REQUEST,id:t,data:e};return this._sendMessage(n),new Promise((e,r)=>{const s=1e3+500*this._sentRequests.size,o={timer:window.setTimeout(()=>{this._sentRequests.delete(n.id)&&r(new Error("Timeout!"))},s),resolve:t=>{this._sentRequests.delete(n.id)&&(window.clearTimeout(o.timer),e(t))},reject:e=>{this._sentRequests.delete(n.id)&&(window.clearTimeout(o.timer),r(e))},close:()=>{this._sentRequests.delete(n.id)&&(window.clearTimeout(o.timer),r(new Error("Closed!")))}};this._sentRequests.set(t,o)})}_sendMessage(e){this._dc.send(JSON.stringify(e))}_handleMessage(e){const t=JSON.parse(e.data);switch(t.type){case a.REQUEST:return this._handleRequest(t);case a.SUCCESS_RESPONSE:case a.ERROR_RESPONSE:return this._handleResponse(t)}}_handleRequest(e){try{this.emit("message",e.data,t=>{this._sendMessage({type:a.SUCCESS_RESPONSE,id:e.id,data:t})},t=>{this._sendMessage({type:a.ERROR_RESPONSE,id:e.id,err:t.toString()})})}catch(t){this._sendMessage({type:a.ERROR_RESPONSE,id:e.id,err:t.toString()})}}_handleResponse(e){const t=this._sentRequests.get(e.id);if(t)return"err"in e?t.reject(new Error(e.err)):t.resolve(e.data);i("sent request not found...")}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(0)),o=r(n(1)),i=s.default("chunked-dc"),a=16e3,c={START:"START",END:"END"};t.default=class extends o.default{constructor(e){super(e),this._sending=!1,this._recving=!1,this._recvBuffer=[]}get sending(){return this._sending}get recving(){return this._recving}set binaryType(e){throw new Error("Can not change binaryType!")}get binaryType(){return this._dc.binaryType}close(){i("close()"),this._sending=!1,this._recving=!1,this._recvBuffer.length=0,super.close()}async send(e,t={}){if(i("send()",e,t),this._closed)throw new Error("Closed!");if("open"!==this._dc.readyState)throw new Error("Not opened!");if(this._sending)throw new Error("Can not send files in parallel!");if(e instanceof Blob==0)throw new Error("Argument is not an instance of File!");if(0===e.size)throw new Error("Empty file!");return i(`data has ${e.size}bytes`),new Promise((n,r)=>{const s=new FileReader;let o=0;const u=t=>{i(`read slice of idx ${t}`);const n=e.slice(o,t+a);s.readAsArrayBuffer(n)};s.onerror=e=>r(e),s.onabort=()=>r(new Error("Read file aborted!")),s.onload=()=>{const{result:a}=s;if(null===a||"string"==typeof a)return r(new Error("Invalid read result!"));i("send slice"),this._dc.send(a),(o+=a.byteLength)<e.size?u(o):(i("signal end sending"),this._dc.send(JSON.stringify({type:c.END,meta:t})),s.onerror=s.onabort=s.onload=null,this._sending=!1,n())},i("signal start sending"),this._sending=!0,this._dc.send(JSON.stringify({type:c.START})),u(0)})}_handleMessage(e){const{data:t}=e;if("string"==typeof t||t instanceof ArrayBuffer){if("string"==typeof t){const{type:e,meta:n}=JSON.parse(t);return e===c.START&&(i("start recving"),this._recving=!0),void(e===c.END&&(i("end recving"),this.emit("message",new Blob(this._recvBuffer),n),this._recving=!1,this._recvBuffer.length=0))}i("recv chunk"),this._recvBuffer.push(t)}}}},function(e,t,n){"use strict";n.r(t);var r=n(2);const s=location.pathname.split("/").filter(Boolean).pop(),o=localStorage.getItem("SIGNALING_SFX")+"+"+s,i=localStorage.getItem("SIGNALING_KEY");function a(e){const t=document.querySelectorAll(e);if(0===t.length)throw new Error(`${e} not found!`);return 1===t.length?t[0]:t}const{createChannel:c}=window.External;(async()=>{!function(e){const t=document.createElement("a");t.href=`https://github.com/leader22/webrtc-samples/blob/master/docs/${s}`,t.textContent="View source";const n=document.createTextNode(" | UA: "),r=document.createElement("span");r.textContent=e,document.body.append(document.createElement("hr")),document.body.append(t),document.body.append(n),document.body.append(r)}(navigator.userAgent),a("#connect").onclick=async()=>{const e=await c(i,o),t=await e.fetchUsers();console.log(t);const n=1===t.length?"answer":"offer";"offer"===n&&console.log("Create and send offer..."),"answer"===n&&console.log("Wait for offer...");const s={bundlePolicy:"max-bundle",iceServers:[{urls:"stun:stun.l.google.com:19302"}]},u=window.pc=new RTCPeerConnection(s);console.log("pc created w/",s);const l={negotiated:!0,id:1},d=window.dc=u.createDataChannel("",l);console.log("dc created w/",l),u.onicecandidate=t=>{console.warn("onicecandidate"),null!==t.candidate&&""!==t.candidate.candidate&&(e.send(t.candidate),console.log("send icecandidate",t.candidate))},e.on("@message",async({data:t})=>{"offer"===t.type&&(console.log("receive offer"),console.warn(t.sdp),await Promise.all([u.setRemoteDescription(t),u.createAnswer().then(e=>u.setLocalDescription(e))]),console.log("send answer"),e.send(u.localDescription),console.warn(u.localDescription.sdp)),"answer"===t.type&&(console.log("receive answer"),console.warn(t.sdp),await u.setRemoteDescription(t)),t.candidate&&(console.log("receive candidate"),await u.addIceCandidate(t))}),"offer"===n&&(await u.createOffer().then(e=>u.setLocalDescription(e)),e.send(u.localDescription),console.log("send offer"),console.warn(u.localDescription.sdp)),d.onopen=()=>{console.warn("dc.onopen");const e=window.pdc=Object(r.promised)(d);e.on("message",(e,t)=>{t(navigator.userAgent)}),a("#ask").onclick=async()=>{const t=await e.send("What is your UA?");console.log(t)}}}})()}]);