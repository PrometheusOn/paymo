var X=Object.defineProperty;var Z=(e,t,a)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var b=(e,t,a)=>Z(e,typeof t!="symbol"?t+"":t,a);import{d as T,r as N,c as I,w as ee,a as _,b as G,e as K,o as F,u as te,f as $,g as v,h as x,E as y,i as g,j as w,k as D,l as P,m as A,n as ne,_ as ae,t as J}from"./index-O0UQtvKg.js";import{u as ie}from"./transactionStore-BSwcA8dy.js";/**
 * Vue Number Format 3.34.1
 * (c) 2021-2023 Dipak Sarkar <hello@dipaksarkar.in> (https://dipaksarkar.in/)
 * @license MIT
 */var M={prefix:"",suffix:"",separator:",",decimal:".",precision:2,minimumFractionDigits:null,prefill:!0,reverseFill:!1,min:null,max:null,nullValue:""};function re(e){return t=0,a=e,l=20,Math.max(t,Math.min(a,l));var t,a,l}class q{constructor(t){b(this,"options");b(this,"input");b(this,"number");b(this,"isClean");b(this,"preSurRegExp");b(this,"numberRegExp");b(this,"cleanRegExp");b(this,"negativeRegExp");this.options=Object.assign(L(M),t);const{prefix:a,suffix:l,decimal:i,reverseFill:o}=this.options;this.input="",this.number="",this.isClean=!o;const u=a.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),n=l.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&");this.preSurRegExp=new RegExp(`${u}|${n}`,"g"),this.numberRegExp=new RegExp(`[^0-9\\${i}]+`,"gi"),this.cleanRegExp=new RegExp("[^0-9]+","gi"),this.negativeRegExp=new RegExp("[^0-9\\-]+","gi")}isNull(){return!this.numberOnly(this.isClean?this.cleanRegExp:this.negativeRegExp)}clean(t=!1){return this.isClean=t,this}sign(){if(this.input===null||this.input===void 0)return"";const t=this.input.toString().indexOf("-")>=0;return this.isClean?t&&this.realNumber()>0?"-":"":t?"-":""}toFixed(){const t=Math.pow(10,this.options.precision);return(parseFloat(this.numberOnly(/\D+/g))/t||0).toFixed(re(this.options.precision))}toNumber(t){return Number(t)}numberOnly(t){var a;return(a=this.input)==null?void 0:a.toString().replace(this.preSurRegExp,"").replace(t||this.numberRegExp,"")}isNegative(){return this.sign()==="-"}numbers(){const{reverseFill:t,decimal:a}=this.options;return t?this.number=this.toFixed().replace(".",a):typeof this.input=="number"?this.number=this.parts(this.input.toString().replace("-",""),".").join(a):isNaN(this.toNumber(this.input))?this.number=this.parts(this.numberOnly()).join(a):this.number=this.parts(this.input.replace("-",""),".").join(a),this.number}unformatNumber(){return this.numbers().toString().replace(this.options.decimal,".")}realNumber(){return parseFloat(this.unformatNumber())}parts(t,a){const{precision:l,minimumFractionDigits:i,decimal:o}=this.options;let u=t.toString().split(a||o);if(u.length>1&&(u[0]=this.toNumber(u[0])||0,u[1]=u.slice(1,u.length).join(""),u=u.slice(0,2)),this.isClean){const n=this.toNumber(u.join(".")).toFixed(l),d=this.toNumber(n),p=d.toFixed(i);u=i>=0&&d.toString().length<p.length?p.toString().split("."):d.toString().split(".")}return u.slice(0,2)}addSeparator(){const{decimal:t,separator:a}=this.options,l=this.numbers().split(t);return l[0]=l[0].toString().replace(/(\d)(?=(?:\d{3})+\b)/gm,`$1${a}`),l.join(t)}format(t){this.input=t;const{reverseFill:a,nullValue:l,prefix:i,suffix:o}=this.options;return this.isNull()&&!a?l:this.sign()+i+this.addSeparator()+o}unformat(t){this.input=t;const{reverseFill:a,nullValue:l}=this.options,i=this.realNumber(),o=this.unformatNumber();return this.isNull()||a&&i===0?l:this.sign()+o}}const j="-";function L(e){return JSON.parse(JSON.stringify(e))}function O(e){return new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:{facade:!0}})}function C(e){const t=e instanceof HTMLInputElement?e:e.querySelector("input");if(!t)throw new Error("number directive requires an input element");return t}function z(e,t){const a=()=>{e.setSelectionRange(t,t)};a(),setTimeout(a,1)}function R(e,t,{emit:a=!0,force:l=!1,clean:i=!1}={}){var c;const{options:o,oldValue:u}=e,{reverseFill:n,max:d,min:p}=o,f=((c=t==null?void 0:t.props)==null?void 0:c.value)||e.value;if(l||u!==f){const r=new q(o).clean(i&&!n);let m=r.format(f),s=r.clean(!n).unformat(f);return i&&(Number(d)===d&&Number(s)>d?(m=r.format(d),s=d.toString()):Number(p)===p&&Number(s)<p&&(m=r.format(p),s=p.toString())),e.oldValue=m,e.unmasked=s,e.value!==m&&(e.value=m),a&&e.dispatchEvent(O("input"))}}var Q={beforeMount:(e,{value:t,modifiers:a},l)=>{var d;e=C(e);const i=Object.assign(L(M),t,a),{reverseFill:o,precision:u,decimal:n}=i;e.options=i,e.setAttribute("inputmode","numeric"),o&&e.value?(e.value=parseFloat(new q({...i,reverseFill:!1}).unformat(e.value)).toFixed(u),(d=l==null?void 0:l.props)!=null&&d.value&&(l.props.value=e.value)):e.value&&!isNaN(Number(e.value))&&(e.value=e.value.replace(".",n)),R(e,l,{force:i.prefill,clean:!0,emit:!1})},mounted:e=>{const t=(e=C(e)).parentElement||e,a=o=>{o.target===e&&function(u){const{target:n,detail:d}=u;if(d!=null&&d.facade)return!1;u.stopPropagation();let p=n.value.length;const{oldValue:f,options:c}=n;n.selectionEnd&&(p=n.value.length-n.selectionEnd),R(n,null,{clean:!c.precision,emit:!1}),c.suffix&&(p=Math.max(p,c.suffix.length)),p=n.value.length-p,c.prefix&&(p=Math.max(p,c.prefix.length)),z(n,p),f!==n.value&&n.dispatchEvent(O("input"))}(o)},l=o=>{o.target===e&&function(u){const{target:n}=u,{oldValue:d}=n;R(n,null,{force:!0,clean:!0,emit:!1}),d!==n.value&&n.dispatchEvent(O("input"))}(o)},i=o=>{o.target===e&&function(u,n){const{options:d}=n,{prefix:p,suffix:f,decimal:c,min:r,separator:m}=d,{key:s}=u,k=new RegExp(`${p}|${f}`,"g"),V=n.value.replace(k,""),B=r===void 0||Number(r)<0||Number(r)!==r;if(s===c)V.includes(c)?u.preventDefault():V||(n.value="0"+c,n.dispatchEvent(new Event("input")));else if(s!==j||B){if(s==="Backspace"){const S=n.selectionEnd||0,U=n.value.slice(S-1,S),W=n.value.slice(S-2,S);let E=n.value.length-S;[p,j,m].includes(U)&&(u.preventDefault(),n.value=U===m?n.value.replace(W,""):n.value.replace(new RegExp(`[${p}${j}]`,"g"),""),E=Math.max(E,f.length),E=n.value.length-E,E=Math.max(E,p.length),z(n,E),n.dispatchEvent(new Event("input")))}}else u.preventDefault()}(o,e)};t.addEventListener("input",a,!0),t.addEventListener("blur",l,!0),t.addEventListener("keydown",i,!0),e.cleanup=()=>{t.removeEventListener("input",a,!0),t.removeEventListener("blur",l,!0),t.removeEventListener("keydown",i,!0)}},updated:(e,{value:t,oldValue:a,modifiers:l},i)=>{if(e=C(e),t!==a){const o=e.options;e.options=Object.assign(o,t,l),R(e,i,{force:!0,clean:!1,emit:!1})}else R(e,i,{emit:!1})},unmounted:e=>{C(e).cleanup()}};const h=L(M);var H=T({name:"VueNumber",directives:{number:Q},props:{modelValue:{type:[String,Number],required:!0},nullValue:{type:[Number,String],default:h.nullValue},masked:Boolean,readonly:Boolean,disabled:Boolean,reverseFill:{type:Boolean,default:h.reverseFill},prefill:{type:Boolean,default:h.prefill},precision:{type:Number,default:()=>h.precision},minimumFractionDigits:{type:Number,default:()=>h.minimumFractionDigits},decimal:{type:String,default:()=>h.decimal},min:{type:Number,default:()=>h.min},max:{type:Number,default:()=>h.max},separator:{type:String,default:()=>h.separator},prefix:{type:String,default:()=>h.prefix},suffix:{type:String,default:()=>h.suffix}},emits:["update:model-value","input:model-value"],setup(e,{emit:t}){const a=N(e.modelValue),l=N(!1),i=N(""),o=I(()=>({...e})),u=new q(o.value),n=I(()=>e.masked?u.format(a.value):i.value),d=()=>{t("update:model-value",n.value)};return ee(()=>e.modelValue,p=>{const f=u.format(p);f!==a.value&&(a.value=f)}),{config:o,maskedValue:a,unmaskedValue:i,input:p=>{const{target:f}=p;a.value=f.value,i.value=f.unmasked,l.value=!0,t("input:model-value",n.value)},blur:()=>{l.value&&n.value!==e.modelValue&&d()},change:d}}});const le=["value","readonly","disabled"];H.render=function(e,t,a,l,i,o){const u=K("number");return _((F(),G("input",{type:"text",autocomplete:"off",value:e.maskedValue,readonly:e.readonly,disabled:e.disabled,class:"v-number vue-number-format",onChange:t[0]||(t[0]=(...n)=>e.change&&e.change(...n)),onInput:t[1]||(t[1]=(...n)=>e.input&&e.input(...n)),onBlur:t[2]||(t[2]=(...n)=>e.blur&&e.blur(...n))},null,40,le)),[[u,e.config]])},H.__file="src/component.vue";const ue={class:"flex gap-9 w-full"},se={class:"flex justify-start items-center gap-4 pb-4"},Y="₽",oe=T({__name:"PayForm",props:{initiatorName:{},duesTitle:{}},setup(e){const t=te(),a=ie(),l=N(),i=N({cardNumber:"",expirationDate:"",cvv:"",amount:null,senderName:"",description:"",transaction:"1"}),o=N({cardNumber:[{required:!0,validator:n,trigger:"change"}],expirationDate:[{required:!0,min:5,message:"Введите срок",trigger:"change"}],cvv:[{required:!0,min:3,message:"Введите CVV",trigger:"change"}],amount:[{required:!0,validator:d,trigger:"change"}],senderName:[{required:!0,message:"Введите имя",trigger:"change"}]}),u={suffix:` ${Y}`,nullValue:Y,separator:""};function n(c,r,m){if(!r||r.length<19)return m(new Error("Введите номер карты"));f(r)?m():m(new Error("Неправильно введён номер карты"))}function d(c,r,m){!r||isNaN(r)?m(new Error("Введите сумму")):r<10?m(new Error("Не менее 10 руб.")):m()}const p=async c=>{if(!c)return;let r=!0;await c.validate(m=>{m||(r=!1)}),r&&(a.assembleBody({transaction:i.value.transaction,amount:i.value.amount,description:i.value.description,initiatorName:e.initiatorName,duesTitle:e.duesTitle}),t.push({path:"/post"}))};function f(c){const r=c.replace(/[\s]/g,"").split("");let m=0;return r.forEach((s,k)=>{if(k%2)m+=+s;else{let V=+s*2,B=V>9?V-9:V;m+=B}}),!(m%10)}return(c,r)=>{const m=K("mask");return F(),$(v(ne),{ref_key:"formRef",ref:l,class:"flex flex-col gap-8",model:i.value,"label-position":"top",rules:o.value},{default:x(()=>[_((F(),$(v(y),{label:"Номер карты",max:"19",prop:"cardNumber"},{default:x(()=>[g(v(w),{modelValue:i.value.cardNumber,"onUpdate:modelValue":r[0]||(r[0]=s=>i.value.cardNumber=s),clearable:""},null,8,["modelValue"])]),_:1})),[[m,"#### #### #### ####"]]),D("div",ue,[_((F(),$(v(y),{label:"Срок действия",max:"5",prop:"expirationDate"},{default:x(()=>[g(v(w),{modelValue:i.value.expirationDate,"onUpdate:modelValue":r[1]||(r[1]=s=>i.value.expirationDate=s),placeholder:"ММ/ГГ",clearable:""},null,8,["modelValue"])]),_:1})),[[m,"##/##"]]),_((F(),$(v(y),{label:"CVV",max:"3",prop:"cvv"},{default:x(()=>[g(v(w),{modelValue:i.value.cvv,"onUpdate:modelValue":r[2]||(r[2]=s=>i.value.cvv=s),clearable:""},null,8,["modelValue"])]),_:1})),[[m,"###"]])]),g(v(y),{label:"Сумма перевода",prop:"amount"},{default:x(()=>[_(g(v(w),{maxlength:"15",modelValue:i.value.amount,"onUpdate:modelValue":r[3]||(r[3]=s=>i.value.amount=s),modelModifiers:{lazy:!0},formatter:s=>s,parser:s=>s.replace(u.suffix,""),clearable:""},null,8,["modelValue","formatter","parser"]),[[v(Q),u]])]),_:1}),g(v(y),{label:"Ваше имя",prop:"senderName"},{default:x(()=>[g(v(w),{modelValue:i.value.senderName,"onUpdate:modelValue":r[4]||(r[4]=s=>i.value.senderName=s),clearable:""},null,8,["modelValue"])]),_:1}),g(v(y),{label:"Сообщение получателю",prop:"messageToRecipient"},{default:x(()=>[g(v(w),{modelValue:i.value.description,"onUpdate:modelValue":r[5]||(r[5]=s=>i.value.description=s),clearable:""},null,8,["modelValue"])]),_:1}),D("div",se,[g(v(A),{type:"primary",class:"w-[131px]",onClick:r[6]||(r[6]=s=>p(l.value))},{default:x(()=>r[7]||(r[7]=[P("Перевести")])),_:1}),g(v(A),{type:"primary",plain:"",class:"!ml-0 w-[129px]"},{default:x(()=>r[8]||(r[8]=[P("Вернуться")])),_:1})])]),_:1},8,["model","rules"])}}}),pe=ae(oe,[["__scopeId","data-v-2424dcac"]]),me={class:"w-[100vw] h-[100vh] pt-[48px] flex justify-center bg-[#F4F5F6]"},de={class:"flex flex-col w-[600px] h-min bg-white p-8 rounded-2xl"},ce={class:"font-medium leading-7 text-[23px] w-full"},he=T({__name:"PayFormPage",setup(e){const t=N("Рамазан Файзов"),a=N("Кругосветное путешествие");return(l,i)=>(F(),G("div",me,[D("div",de,[D("p",ce,J(t.value)+" собирает на «"+J(a.value)+"» ",1),g(pe,{class:"pt-6",initiatorName:t.value,duesTitle:a.value},null,8,["initiatorName","duesTitle"])])]))}});export{he as default};