!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({8:function(e,t,n){"use strict";var r=n(9),o=document.querySelector(".tap"),i=document.querySelector(".longtap"),u=document.querySelector(".dbtap"),c=document.querySelector(".swipe"),a=document.querySelector(".drag"),l=document.querySelector(".scale"),s=document.querySelector(".rotate");r(o,"tap",function(e){return o.classList.toggle("grayscale")}),r(i,"longtap",function(e){return i.classList.toggle("grayscale")}),r(u,"dbtap",function(e){return u.classList.toggle("scale-2")}),r(c,"swipe",function(e){return c.style.transform="matrix(1, 0, 0, 1, "+e.displacement.x+", "+e.displacement.y+")"});var f=0,h=0;r(a,"drag",function(e){a.style.transform="matrix(1, 0, 0, 1, "+(f+=e.displacement.x)+", "+(h+=e.displacement.y)+")"}),a.addEventListener("touchend",function(e){return a.style.transform="matrix(1, 0, 0, 1, 0, 0)"}),r(l,"scale",function(e){return l.style.transform="matrix("+e.scale+", 0, 0, "+e.scale+", 0, 0)"}),l.addEventListener("touchend",function(e){return l.style.transform=""}),r(s,"rotate",function(e){return s.style.transform="rotate("+(e.rotate.dirt?e.rotate.rotateAngle:"-"+e.rotate.rotateAngle)+"deg)"}),s.addEventListener("touchend",function(e){return s.style.transform=""})},9:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==(void 0===e?"undefined":r(e))&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){e.exports=function(e,t,n){return new Proxy(n,{apply:function(n,r,o){var i=function(e,t,n){if(!t)return null;for(var r=new Set(document.querySelectorAll(t));n!=e;){if(r.has(n))return n;n=n.parentNode}return null}(e,t,o[0].target);if(t&&i||!t)return Reflect.apply.apply(Reflect,arguments)}})}},function(e,t,n){n(0),e.exports=function(e,t){var n=new WeakMap;n.set(e,t),e.addEventListener(event,n.get(e))}},function(e,t,n){(function(t){var o="function"==typeof Symbol&&"symbol"==r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=n(4),a=n(1),l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.userCallback2Handler=new Map}return i(e,[{key:"bind",value:function(e,t,n,r){var i=this;if("object"===(void 0===t?"undefined":o(t)))return this._handleEventObj(t,function(t,n){return i.bind(e,void 0,t,n)}),e;if(!(n instanceof Array||"object"!==(void 0===n?"undefined":o(n))))return this._handleEventObj(n,function(n,r){return i.bind(e,t,n,r)}),e;if("function"==typeof n||n instanceof Array)return this.bind(e,void 0,t,n);e=this._checkBindTargetInput(e);var l=u(e,t,r);return this.userCallback2Handler.set(r,l),this._isEventDIY(n)?c[n].bind(e,r,t):a(e,l,n),e}},{key:"remove",value:function(e,t,n){var r=this;return e=this._checkBindTargetInput(e),"object"===(void 0===t?"undefined":o(t))&&this._handleEventObj(t,function(t,n){r.remove(e,t,n)}),this._isEventDIY(t)?c[t].remove(e,n):e.removeEventListener(t,this.userCallback2Handler.get(n)),e}},{key:"_handleEventObj",value:function(e,t){return Object.entries(e).map(function(e){t(e[0],e[1])})}},{key:"_checkBindTargetInput",value:function(e){if("string"==typeof e&&!(e=document.querySelector(e)))throw new Error("None of DOM had been choisen, Please input a correct selector or a HTMLElement");return e}},{key:"_isEventDIY",value:function(e){return new Set(Object.keys(c)).has(e)}}]),e}(),s=new l,f=Object.create(l.prototype),h=s.bind.bind(s);Object.setPrototypeOf(h,f),Object.keys(s).map(function(e){h[e]=s[e]}),"Browser"===t.env.PLATFORM?window.mtEvents=h:e.exports=h}).call(this,n(3))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,l=[],s=!1,f=-1;function h(){s&&a&&(s=!1,a.length?l=a.concat(l):f=-1,l.length&&d())}function d(){if(!s){var e=c(h);s=!0;for(var t=l.length;t;){for(a=l,l=[];++f<t;)a&&a[f].run();f=-1,t=l.length}a=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||s||c(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){var r=n(5),o=n(6),i=n(7);function u(e,t,n,r){return Math.sqrt(Math.pow(e-n,2)+Math.pow(t-r,2))}e.exports=new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tap=new r({eventHandlers:function(e){var t=new o,n=new i;return{touchstart:function(e){e.preventDefault(),n.initLastClientObjs([{x:e.touches[0].clientX,y:e.touches[0].clientY}]),t.timeoutCreator(200,function(){t.clearTimer(),n.initLastClientObjs(null)})},touchend:function(r){if(t.timer){var o=n.getDisplacement(r.changedTouches[0]),i=Math.abs(o.x),u=Math.abs(o.y);i<=50&&u<=50&&(r.preventDefault(),e(r))}t.clearTimer()}}}}),this.longtap=new r({eventHandlers:function(e){var t=new o,n=new i;return{touchstart:function(e){e.preventDefault(),n.initLastClientObjs([{x:e.touches[0].clientX,y:e.touches[0].clientY}]),t.timeoutCreator(1e3)},touchend:function(r){if(!t.timer){var o=n.getDisplacement(r.changedTouches)[0],i=Math.abs(o.x),u=Math.abs(o.y);i<=100&&u<=100&&(r.preventDefault(),e(r))}t.clearTimer()}}}}),this.dbtap=new r({eventHandlers:function(e){var t=new o,n=new i;return{touchend:function(r){if(t.timer){t.clearTimer();var o=n.getDisplacement(r.changedTouches[0]),i=Math.abs(o.x),u=Math.abs(o.y);i<=100&&u<=100&&(r.preventDefault(),e())}else n.initLastClientObjs([{x:r.changedTouches[0].clientX,y:r.changedTouches[0].clientY}]),t.timeoutCreator(500,function(){n.initLastClientObjs(null)})}}}}),this.swipe=new r({eventHandlers:function(e){var t=new i;return{touchstart:function(e){t.initLastClientObjs([{x:e.touches[0].clientX,y:e.touches[0].clientY}])},touchend:function(n){n.displacement=t.getDisplacement(n.changedTouches)[0],e(n)}}}}),this.drag=new r({eventHandlers:function(e){var t=new i;return{touchstart:function(e){t.initLastClientObjs([{x:e.touches[0].clientX,y:e.touches[0].clientY}])},touchmove:function(n){n.preventDefault(),n.displacement=t.getDisplacement(n.touches)[0],t.initLastClientObjs([{x:n.touches[0].clientX,y:n.touches[0].clientY}]),e(n)}}}}),this.scale=new r({eventHandlers:function(e){var t=0,n=new o;return{touchmove:function(r){r.preventDefault(),2==r.touches.length&&(t?n.timer||n.timeoutCreator(50,function(){if(t){var n=u(r.touches[0].clientX,r.touches[0].clientY,r.touches[1].clientX,r.touches[1].clientY),o=Math.floor(100*n/t)/100;r.scale=o,e(r)}}):t=u(r.touches[0].clientX,r.touches[0].clientY,r.touches[1].clientX,r.touches[1].clientY))},touchend:function(e){t=0}}}}),this.rotate=new r({eventHandlers:function(e){var t=null,n=new o;return{touchmove:function(r){2==r.touches.length&&(t?n.timer||n.timeoutCreator(50,function(){if(t){var n=t[0].clientX,o=t[1].clientX,i=r.touches[0].clientX,c=r.touches[1].clientX,a=t[0].clientY,l=t[1].clientY,s=r.touches[0].clientY,f=r.touches[1].clientY,h=u(n,a,o,l),d=u(i,s,c,f),p=(o-n)*(f-s)-(c-i)*(l-a),v={rotateAngle:180*Math.acos(((o-n)*(c-i)+(l-a)*(f-s))/(h*d))/Math.PI};p<0?(v.direction="anticlockwise",v.dirt=0):p>0&&(v.direction="clockwise",v.dirt=1),r.rotate=v,e(r)}}):t=Object.assign([],r.touches))},touchend:function(e){t=null}}}})}},function(e,t,n){var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=n(0),u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.eventHandler=new Map}return r(e,[{key:"bind",value:function(e,t,n){var r=this.options.eventHandlers(t);Object.keys(r).map(function(t){r[t]=i(e,n,r[t]),o(e,r[t],t)}),this.eventHandlers.set(t,this.eventHandlers)}},{key:"remove",value:function(e,t){return Object.entries(this.eventHandler.get(t)).map(function(t){e.removeEventListener(t[0],t[1])}),e}}]),e}();e.exports=u},function(e,t,n){var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.timer=null}return r(e,[{key:"timeoutCreator",value:function(e,t){var n=this;this.timer=setTimeout(function(){return clearTimeout(n.timer),n.timer=null,t&&t()},e)}},{key:"celarTimer",value:function(){clearTimeout(this.timer),this.timer=null}}]),e}();e.exports=o},function(e,t,n){var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lastClientObjs=[]}return r(e,[{key:"initLastClientObjs",value:function(e){this.lastClientObjs=Object.assign([],e)}},{key:"getDisplacement",value:function(e){var t=this;return(e=Array.from(e)).map(function(e,n){var r=t.lastClientObjs[n],o=r.x,i=r.y;return{x:e.clientX-o,y:e.clientY-i}})}}]),e}();e.exports=o}])}});