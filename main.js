/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var a;t.g.importScripts&&(a=t.g.location+"");var i=t.g.document;if(!a&&i&&(i.currentScript&&(a=i.currentScript.src),!a)){var n=i.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!a;)a=n[r--].src}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=a})();const a=t.p+"visa.png",i=t.p+"mastercard.png",n=t.p+"mir.png";const r=document.getElementById("hw-4"),e=new class{constructor(){this.container=null,this.submitListeners=[],this.valueListeners=[]}bindToDOM(t){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t}checkBinding(){if(null===this.container)throw new Error("ValidatorPlay not bind to DOM")}drawUI(){this.checkBinding(),this.container.innerHTML=`\n      <H2>\n        Credit Card Validator\n      </H2>\n      <div class="container">\n        <div class="imgs-cards">\n          <img src="${a}" alt="">\n          <img src="${i}" alt="">\n          <img src="${n}" alt="">\n        </div>\n        <form data-id="validator-form" class="validator-form">\n          <div class="container-label">\n            <input data-id="validator-card" class="validator-card" type="text" name="validator-card">\n            <label data-id="validator-label" class="validator-label">-</label>\n          </div>\n          <button data-id="validate-btn" class="validate-btn">Click to Validate</button>\n        </form>\n        <div class="example-header">Example credit card numbers</div>\n        <table>\n          <tr>\n            <td>Visa</td>\n            <td>4111111111111111</td>\n          </tr>\n          <tr>\n            <td>MasterCard</td>\n            <td>5555555555554444</td>\n          </tr>\n          <tr>\n            <td>Mir</td>\n            <td>220311111111111111</td>\n          </tr>\n        </table>\n      </div>\n    `,this.validatorForm=this.container.querySelector("[data-id=validator-form]"),this.validatorCard=this.container.querySelector("[data-id=validator-card]"),this.validatorLabel=this.container.querySelector("[data-id=validator-label]"),this.validatorForm.addEventListener("submit",(t=>this.onSubmit(t))),this.validatorCard.addEventListener("input",(t=>this.onInput(t)))}addSubmitListeners(t){this.submitListeners.push(t)}addValueListeners(t){this.valueListeners.push(t)}onSubmit(t){t.preventDefault();const{value:a}=this.validatorCard;this.submitListeners.forEach((t=>t.call(null,a)))}onInput(t){t.preventDefault();const{value:a}=t.currentTarget;this.valueListeners.forEach((t=>t.call(null,a)))}labelText(t="-"){this.validatorLabel.textContent=t}};e.bindToDOM(r);const l=new class{constructor(t){this.validatorPlay=t}init(){this.validatorPlay.addSubmitListeners(this.onSubmit.bind(this)),this.validatorPlay.addValueListeners(this.onInput.bind(this)),this.validatorPlay.drawUI()}onSubmit(t){this.validating(t)}onInput(){this.validatorPlay.labelText("-")}validating(t){this.validatorPlay.labelText("-");const a=function(t){const a=t.split("").reverse(),i=[];if(a.length<=0)return!1;for(let t=0;t<a.length;t+=1)if(t%2==0&&i.push(1*a[t]),t%2!=0){let n=2*a[t];n>9&&(n-=9),i.push(n)}return i.reduce(((t,a)=>t+a),0)%10==0}(t);if(!a)return this.validatorPlay.labelText("invalid"),!1;const i=function(t){const a=t.split("");let i=!1;return a.length>=13&&a.length<=19&&4==+a[0]&&(i=!0),i}(t),n=function(t){let a=!1;if(16!==t.length)return a;const i=t.split(""),n=Number(i[0]+i[1]),r=Number(i[0]+i[1]+i[2]+i[3]);return n>=51&&n<=55&&(a=!0),r>=2221&&r<=2720&&(a=!0),a}(t),r=function(t){let a=!1;if(!(t.length>=16&&t.length<=19))return a;const i=t.split(""),n=Number(i[0]+i[1]+i[2]+i[3]);return n>=2200&&n<=2204&&(a=!0),a}(t);return i&&this.validatorPlay.labelText("Visa"),n&&this.validatorPlay.labelText("MasterCard"),r&&this.validatorPlay.labelText("Mir"),i||n||r||this.validatorPlay.labelText("valid"),!0}}(e);l.init(),console.log("app started")})();