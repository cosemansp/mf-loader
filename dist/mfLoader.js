!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("mfLoader",[],t):"object"==typeof exports?exports.mfLoader=t():e.mfLoader=t()}("undefined"!=typeof self?self:this,(function(){return(()=>{"use strict";var e={773:(e,t,r)=>{r.d(t,{default:()=>s});const o={},n=async e=>{if(o[e])return o[e];const t=(e=>{e=e||{};const{timeout:t}=e;let r,o,n;const i=new Promise(((e,t)=>{r=e,o=t}));if(i.resolve=e=>{clearTimeout(n),r(e)},i.reject=e=>{clearTimeout(n),o(e)},"number"==typeof t){const r=e.id||"anonymous";n=setTimeout((()=>o({reason:`timeout (${t}) reached on "${r}"`})),t)}return i})({timeout:3e4,id:e}),{document:r}=window,n=r.createElement("script");return n.setAttribute("type","text/javascript"),n.setAttribute("src",e),n.addEventListener("error",(r=>{o[e]=null,t.reject(new Error(`Failed to load script: ${e}`))})),n.addEventListener("load",(()=>{t.resolve(n)})),r.head.appendChild(n),o[e]=t,t},i=async(e,t)=>{const o=await(async e=>{await r.I("default");const t=window[e];if(!t||!t.init)throw new Error(`Cannot find external remote: ${e}`);return await t.init(r.S.default),t})(e);return(await o.get(t))()},a=[],s={register:(e,t,r)=>{const{selector:o}=r||{},n=document.querySelector(o),i=e.split("@"),s=i[0],l=i[1];if(!s||!l)throw Error("Invalid remote");a.push({name:s,url:l,moduleName:t,element:n,selector:o,options:r})},start:async()=>{const e=a.map((e=>n(e.url)));await Promise.all(e);const t=a.map((e=>i(e.name,e.moduleName).then((t=>({module:t,selector:e.selector,element:e.element,options:e.options})))));(await Promise.all(t)).forEach((e=>{e.element?e.module.mount(e.element,e.options):console.error(`Missing or invalid selector: ${e.selector}`)}))},getRemoteModule:i,loadScript:n}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.m=e,r.c=t,r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{r.S={};var e={},t={};r.I=(o,n)=>{n||(n=[]);var i=t[o];if(i||(i=t[o]={}),!(n.indexOf(i)>=0)){if(n.push(i),e[o])return e[o];r.o(r.S,o)||(r.S[o]={}),r.S[o];var a=[];return e[o]=a.length?Promise.all(a).then((()=>e[o]=1)):1}}})();var o=r(773);return o.default})()}));
//# sourceMappingURL=mfLoader.js.map