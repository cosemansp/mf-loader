!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("mfLoader",[],t):"object"==typeof exports?exports.mfLoader=t():e.mfLoader=t()}("undefined"!=typeof self?self:this,(function(){return(()=>{"use strict";var e={843:(e,t,r)=>{r.d(t,{default:()=>o});const o={init:(e,t,o)=>{const{selector:n}=o||{};if(!n)throw Error("Selector required");const i=document.querySelector(n);if(!i)throw Error(`Element not found: ${n}`);const d=e.split("@"),f=d[0],a=d[1];if(!f||!a)throw Error("Invalid remote");const s=document.createElement("script");s.setAttribute("src",a),document.head.appendChild(s),s.addEventListener("load",(async()=>{await r.I("default");const e=window[f];if(!e)throw Error(`Remote not found: ${f}`);await e.init(r.S.default),(await e.get(t))().mount(i,o)}))}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.m=e,r.c=t,r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{r.S={};var e={},t={};r.I=(o,n)=>{n||(n=[]);var i=t[o];if(i||(i=t[o]={}),!(n.indexOf(i)>=0)){if(n.push(i),e[o])return e[o];r.o(r.S,o)||(r.S[o]={}),r.S[o];var d=[];return e[o]=d.length?Promise.all(d).then((()=>e[o]=1)):1}}})();var o=r(843);return o.default})()}));
//# sourceMappingURL=mfLoader.js.map