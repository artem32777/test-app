import{u as Le}from"./vue.f36acd1f.UZxJARWF.js";import{h as ae,E as Re,j as Q,p as We,F as he,G as $e,H as le,l as Ee,m as be,c as I,d as V,r as P,o as Ge,g as X,I as Ne,J as Te,K as Oe,L as Ve,M as ve,t as ye,N as Be,A as we,O as Ue,P as qe,Q as Z,_ as Fe,v as He,z as J,x as D,B as Ze}from"./entry.J70qHtWG.js";import Je from"./Icon.1ValUZIF.js";import"./index.0wqzsba0.js";async function Qe(e,t){return await Xe(t).catch(r=>(console.error("Failed to get image meta for "+t,r+""),{width:0,height:0,ratio:0}))}async function Xe(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,o)=>{const r=new Image;r.onload=()=>{const i={width:r.width,height:r.height,ratio:r.width/r.height};t(i)},r.onerror=i=>o(i),r.src=e})}function ce(e){return t=>t?e[t]||t:e.missingValue}function Ye({formatter:e,keyMap:t,joinWith:o="/",valueMap:r}={}){e||(e=(n,s)=>`${n}=${s}`),t&&typeof t!="function"&&(t=ce(t));const i=r||{};return Object.keys(i).forEach(n=>{typeof i[n]!="function"&&(i[n]=ce(i[n]))}),(n={})=>Object.entries(n).filter(([a,c])=>typeof c<"u").map(([a,c])=>{const l=i[a];return typeof l=="function"&&(c=l(n[a])),a=typeof t=="function"?t(a):a,e(a,c)}).join(o)}function _(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function De(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const o of e.split(" ")){const r=parseInt(o.replace("x",""));r&&t.add(r)}return Array.from(t)}function Ke(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function et(e){const t={};if(typeof e=="string")for(const o of e.split(/[\s,]+/).filter(r=>r)){const r=o.split(":");r.length!==2?t["1px"]=r[0].trim():t[r[0].trim()]=r[1].trim()}else Object.assign(t,e);return t}function tt(e){const t={options:e},o=(i,n={})=>xe(t,i,n),r=(i,n={},s={})=>o(i,{...s,modifiers:he(n,s.modifiers||{})}).url;for(const i in e.presets)r[i]=(n,s,a)=>r(n,s,{...e.presets[i],...a});return r.options=e,r.getImage=o,r.getMeta=(i,n)=>rt(t,i,n),r.getSizes=(i,n)=>it(t,i,n),t.$img=r,r}async function rt(e,t,o){const r=xe(e,t,{...o});return typeof r.getMeta=="function"?await r.getMeta():await Qe(e,r.url)}function xe(e,t,o){var l,d;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:r,defaults:i}=ot(e,o.provider||e.options.provider),n=nt(e,o.preset);if(t=ae(t)?t:Re(t),!r.supportsAlias)for(const p in e.options.alias)t.startsWith(p)&&(t=Q(e.options.alias[p],t.substr(p.length)));if(r.validateDomains&&ae(t)){const p=We(t).host;if(!e.options.domains.find(b=>b===p))return{url:t}}const s=he(o,n,i);s.modifiers={...s.modifiers};const a=s.modifiers.format;(l=s.modifiers)!=null&&l.width&&(s.modifiers.width=_(s.modifiers.width)),(d=s.modifiers)!=null&&d.height&&(s.modifiers.height=_(s.modifiers.height));const c=r.getImage(t,s,e);return c.format=c.format||a||"",c}function ot(e,t){const o=e.options.providers[t];if(!o)throw new Error("Unknown provider: "+t);return o}function nt(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function it(e,t,o){var y,m,v,z,S;const r=_((y=o.modifiers)==null?void 0:y.width),i=_((m=o.modifiers)==null?void 0:m.height),n=et(o.sizes),s=(v=o.densities)!=null&&v.trim()?De(o.densities.trim()):e.options.densities;Ke(s);const a=r&&i?i/r:0,c=[],l=[];if(Object.keys(n).length>=1){for(const w in n){const x=de(w,String(n[w]),i,a,e);if(x!==void 0){c.push({size:x.size,screenMaxWidth:x.screenMaxWidth,media:`(max-width: ${x.screenMaxWidth}px)`});for(const k of s)l.push({width:x._cWidth*k,src:ue(e,t,o,x,k)})}}st(c)}else for(const w of s){const x=Object.keys(n)[0];let k=de(x,String(n[x]),i,a,e);k===void 0&&(k={size:"",screenMaxWidth:0,_cWidth:(z=o.modifiers)==null?void 0:z.width,_cHeight:(S=o.modifiers)==null?void 0:S.height}),l.push({width:w,src:ue(e,t,o,k,w)})}at(l);const d=l[l.length-1],p=c.length?c.map(w=>`${w.media?w.media+" ":""}${w.size}`).join(", "):void 0,b=p?"w":"x",f=l.map(w=>`${w.src} ${w.width}${b}`).join(", ");return{sizes:p,srcset:f,src:d==null?void 0:d.src}}function de(e,t,o,r,i){const n=i.options.screens&&i.options.screens[e]||parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let a=parseInt(t);if(!n||!a)return;s&&(a=Math.round(a/100*n));const c=r?Math.round(a*r):o;return{size:t,screenMaxWidth:n,_cWidth:a,_cHeight:c}}function ue(e,t,o,r,i){return e.$img(t,{...o.modifiers,width:r._cWidth?r._cWidth*i:void 0,height:r._cHeight?r._cHeight*i:void 0},o)}function st(e){var o;e.sort((r,i)=>r.screenMaxWidth-i.screenMaxWidth);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.media===t&&e.splice(r,1),t=i.media}for(let r=0;r<e.length;r++)e[r].media=((o=e[r+1])==null?void 0:o.media)||""}function at(e){e.sort((o,r)=>o.width-r.width);let t=null;for(let o=e.length-1;o>=0;o--){const r=e[o];r.width===t&&e.splice(o,1),t=r.width}}const lt=Ye({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>le(e)+"_"+le(t)}),ct=(e,{modifiers:t={},baseURL:o}={},r)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const i=lt(t)||"_";return o||(o=Q(r.options.nuxt.baseURL,"/_ipx")),{url:Q(o,i,$e(e))}},dt=!0,ut=!0,ft=Object.freeze(Object.defineProperty({__proto__:null,getImage:ct,supportsAlias:ut,validateDomains:dt},Symbol.toStringTag,{value:"Module"})),Se={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};Se.providers={ipxStatic:{provider:ft,defaults:{}}};const ze=()=>{const e=Ee(),t=be();return t.$img||t._img||(t._img=tt({...Se,nuxt:{baseURL:e.app.baseURL}}))},pt={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},gt=e=>{const t=I(()=>({provider:e.provider,preset:e.preset})),o=I(()=>({width:_(e.width),height:_(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),r=ze(),i=I(()=>({...e.modifiers,width:_(e.width),height:_(e.height),format:e.format,quality:e.quality||r.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:o,modifiers:i}},mt={...pt,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},ht=V({name:"NuxtImg",props:mt,emits:["load","error"],setup:(e,t)=>{const o=ze(),r=gt(e),i=P(!1),n=I(()=>o.getSizes(e.src,{...r.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...r.modifiers.value,width:_(e.width),height:_(e.height)}})),s=I(()=>{const f={...r.attrs.value,"data-nuxt-img":""};return(!e.placeholder||i.value)&&(f.sizes=n.value.sizes,f.srcset=n.value.srcset),f}),a=I(()=>{let f=e.placeholder;if(f===""&&(f=!0),!f||i.value)return!1;if(typeof f=="string")return f;const y=Array.isArray(f)?f:typeof f=="number"?[f,f]:[10,10];return o(e.src,{...r.modifiers.value,width:y[0],height:y[1],quality:y[2]||50,blur:y[3]||3},r.options.value)}),c=I(()=>e.sizes?n.value.src:o(e.src,r.modifiers.value,r.options.value)),l=I(()=>a.value?a.value:c.value);if(e.preload){const f=Object.values(n.value).every(y=>y);Le({link:[{rel:"preload",as:"image",nonce:e.nonce,...f?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:l.value}}]})}const d=P(),b=be().isHydrating;return Ge(()=>{if(a.value){const f=new Image;f.src=c.value,e.sizes&&(f.sizes=n.value.sizes||"",f.srcset=n.value.srcset),f.onload=y=>{i.value=!0,t.emit("load",y)};return}d.value&&(d.value.complete&&b&&(d.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),d.value.onload=f=>{t.emit("load",f)},d.value.onerror=f=>{t.emit("error",f)})}),()=>X("img",{ref:d,src:l.value,...s.value,...t.attrs})}});function _e(e){var t,o,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=_e(e[t]))&&(r&&(r+=" "),r+=o);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function bt(){for(var e,t,o=0,r="";o<arguments.length;)(e=arguments[o++])&&(t=_e(e))&&(r&&(r+=" "),r+=t);return r}const fe=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,pe=bt,vt=(e,t)=>o=>{var r;if((t==null?void 0:t.variants)==null)return pe(e,o==null?void 0:o.class,o==null?void 0:o.className);const{variants:i,defaultVariants:n}=t,s=Object.keys(i).map(l=>{const d=o==null?void 0:o[l],p=n==null?void 0:n[l];if(d===null)return null;const b=fe(d)||fe(p);return i[l][b]}),a=o&&Object.entries(o).reduce((l,d)=>{let[p,b]=d;return b===void 0||(l[p]=b),l},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((l,d)=>{let{class:p,className:b,...f}=d;return Object.entries(f).every(y=>{let[m,v]=y;return Array.isArray(v)?v.includes({...n,...a}[m]):{...n,...a}[m]===v})?[...l,p,b]:l},[]);return pe(e,s,c,o==null?void 0:o.class,o==null?void 0:o.className)};function B(e){let t=!1,o;const r=Te(!0);return(...i)=>(t||(o=r.run(()=>e(...i)),t=!0),o)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function ke(e){return e?e.flatMap(t=>t.type===ve?ke(t.children):[t]):[]}B(()=>P());B(()=>P(0));B(()=>({count:P(0)}));const yt=V({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:t,slots:o}){return()=>{var r,i;if(!o.default)return null;const n=ke(o.default()),[s,...a]=n;if(Object.keys(t).length>0){(r=s.props)==null||delete r.ref;const c=Oe(t,s.props??{});t.class&&(i=s.props)!=null&&i.class&&delete s.props.class;const l=Ve(s,c);for(const d in c)d.startsWith("on")&&(l.props||(l.props={}),l.props[d]=c[d]);return n.length===1?l:[l,...a]}return n}}}),wt=V({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:t,slots:o}){return(e.asChild?"template":e.as)!=="template"?()=>X(e.as,t,{default:o.default}):()=>X(yt,t,{default:o.default})}});Ne({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set});B(()=>P([]));function Ce(e){var t,o,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(o=Ce(e[t]))&&(r&&(r+=" "),r+=o)}else for(o in e)e[o]&&(r&&(r+=" "),r+=o);return r}function xt(){for(var e,t,o=0,r="",i=arguments.length;o<i;o++)(e=arguments[o])&&(t=Ce(e))&&(r&&(r+=" "),r+=t);return r}const K="-";function St(e){const t=_t(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:r}=e;function i(s){const a=s.split(K);return a[0]===""&&a.length!==1&&a.shift(),Me(a,t)||zt(s)}function n(s,a){const c=o[s]||[];return a&&r[s]?[...c,...r[s]]:c}return{getClassGroupId:i,getConflictingClassGroupIds:n}}function Me(e,t){var s;if(e.length===0)return t.classGroupId;const o=e[0],r=t.nextPart.get(o),i=r?Me(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const n=e.join(K);return(s=t.validators.find(({validator:a})=>a(n)))==null?void 0:s.classGroupId}const ge=/^\[(.+)\]$/;function zt(e){if(ge.test(e)){const t=ge.exec(e)[1],o=t==null?void 0:t.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}}function _t(e){const{theme:t,prefix:o}=e,r={nextPart:new Map,validators:[]};return Ct(Object.entries(e.classGroups),o).forEach(([n,s])=>{Y(s,r,n,t)}),r}function Y(e,t,o,r){e.forEach(i=>{if(typeof i=="string"){const n=i===""?t:me(t,i);n.classGroupId=o;return}if(typeof i=="function"){if(kt(i)){Y(i(r),t,o,r);return}t.validators.push({validator:i,classGroupId:o});return}Object.entries(i).forEach(([n,s])=>{Y(s,me(t,n),o,r)})})}function me(e,t){let o=e;return t.split(K).forEach(r=>{o.nextPart.has(r)||o.nextPart.set(r,{nextPart:new Map,validators:[]}),o=o.nextPart.get(r)}),o}function kt(e){return e.isThemeGetter}function Ct(e,t){return t?e.map(([o,r])=>{const i=r.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,a])=>[t+s,a])):n);return[o,i]}):e}function Mt(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,o=new Map,r=new Map;function i(n,s){o.set(n,s),t++,t>e&&(t=0,r=o,o=new Map)}return{get(n){let s=o.get(n);if(s!==void 0)return s;if((s=r.get(n))!==void 0)return i(n,s),s},set(n,s){o.has(n)?o.set(n,s):i(n,s)}}}const Ae="!";function At(e){const t=e.separator,o=t.length===1,r=t[0],i=t.length;return function(s){const a=[];let c=0,l=0,d;for(let m=0;m<s.length;m++){let v=s[m];if(c===0){if(v===r&&(o||s.slice(m,m+i)===t)){a.push(s.slice(l,m)),l=m+i;continue}if(v==="/"){d=m;continue}}v==="["?c++:v==="]"&&c--}const p=a.length===0?s:s.substring(l),b=p.startsWith(Ae),f=b?p.substring(1):p,y=d&&d>l?d-l:void 0;return{modifiers:a,hasImportantModifier:b,baseClassName:f,maybePostfixModifierPosition:y}}}function It(e){if(e.length<=1)return e;const t=[];let o=[];return e.forEach(r=>{r[0]==="["?(t.push(...o.sort(),r),o=[]):o.push(r)}),t.push(...o.sort()),t}function jt(e){return{cache:Mt(e.cacheSize),splitModifiers:At(e),...St(e)}}const Pt=/\s+/;function Lt(e,t){const{splitModifiers:o,getClassGroupId:r,getConflictingClassGroupIds:i}=t,n=new Set;return e.trim().split(Pt).map(s=>{const{modifiers:a,hasImportantModifier:c,baseClassName:l,maybePostfixModifierPosition:d}=o(s);let p=r(d?l.substring(0,d):l),b=!!d;if(!p){if(!d)return{isTailwindClass:!1,originalClassName:s};if(p=r(l),!p)return{isTailwindClass:!1,originalClassName:s};b=!1}const f=It(a).join(":");return{isTailwindClass:!0,modifierId:c?f+Ae:f,classGroupId:p,originalClassName:s,hasPostfixModifier:b}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:c,hasPostfixModifier:l}=s,d=a+c;return n.has(d)?!1:(n.add(d),i(c,l).forEach(p=>n.add(a+p)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Rt(){let e=0,t,o,r="";for(;e<arguments.length;)(t=arguments[e++])&&(o=Ie(t))&&(r&&(r+=" "),r+=o);return r}function Ie(e){if(typeof e=="string")return e;let t,o="";for(let r=0;r<e.length;r++)e[r]&&(t=Ie(e[r]))&&(o&&(o+=" "),o+=t);return o}function Wt(e,...t){let o,r,i,n=s;function s(c){const l=t.reduce((d,p)=>p(d),e());return o=jt(l),r=o.cache.get,i=o.cache.set,n=a,a(c)}function a(c){const l=r(c);if(l)return l;const d=Lt(c,o);return i(c,d),d}return function(){return n(Rt.apply(null,arguments))}}function g(e){const t=o=>o[e]||[];return t.isThemeGetter=!0,t}const je=/^\[(?:([a-z-]+):)?(.+)\]$/i,$t=/^\d+\/\d+$/,Et=new Set(["px","full","screen"]),Gt=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Nt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Tt=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ot=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Vt=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function C(e){return j(e)||Et.has(e)||$t.test(e)}function M(e){return L(e,"length",Qt)}function j(e){return!!e&&!Number.isNaN(Number(e))}function O(e){return L(e,"number",j)}function $(e){return!!e&&Number.isInteger(Number(e))}function Bt(e){return e.endsWith("%")&&j(e.slice(0,-1))}function u(e){return je.test(e)}function A(e){return Gt.test(e)}const Ut=new Set(["length","size","percentage"]);function qt(e){return L(e,Ut,Pe)}function Ft(e){return L(e,"position",Pe)}const Ht=new Set(["image","url"]);function Zt(e){return L(e,Ht,Yt)}function Jt(e){return L(e,"",Xt)}function E(){return!0}function L(e,t,o){const r=je.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):o(r[2]):!1}function Qt(e){return Nt.test(e)&&!Tt.test(e)}function Pe(){return!1}function Xt(e){return Ot.test(e)}function Yt(e){return Vt.test(e)}function Dt(){const e=g("colors"),t=g("spacing"),o=g("blur"),r=g("brightness"),i=g("borderColor"),n=g("borderRadius"),s=g("borderSpacing"),a=g("borderWidth"),c=g("contrast"),l=g("grayscale"),d=g("hueRotate"),p=g("invert"),b=g("gap"),f=g("gradientColorStops"),y=g("gradientColorStopPositions"),m=g("inset"),v=g("margin"),z=g("opacity"),S=g("padding"),w=g("saturate"),x=g("scale"),k=g("sepia"),ee=g("skew"),te=g("space"),re=g("translate"),U=()=>["auto","contain","none"],q=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto",u,t],h=()=>[u,t],oe=()=>["",C,M],G=()=>["auto",j,u],ne=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],N=()=>["solid","dashed","dotted","double","none"],ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],H=()=>["start","end","center","between","around","evenly","stretch"],R=()=>["","0",u],se=()=>["auto","avoid","all","avoid-page","page","left","right","column"],W=()=>[j,O],T=()=>[j,u];return{cacheSize:500,separator:":",theme:{colors:[E],spacing:[C,M],blur:["none","",A,u],brightness:W(),borderColor:[e],borderRadius:["none","","full",A,u],borderSpacing:h(),borderWidth:oe(),contrast:W(),grayscale:R(),hueRotate:T(),invert:R(),gap:h(),gradientColorStops:[e],gradientColorStopPositions:[Bt,M],inset:F(),margin:F(),opacity:W(),padding:h(),saturate:W(),scale:W(),sepia:R(),skew:T(),space:h(),translate:h()},classGroups:{aspect:[{aspect:["auto","square","video",u]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":se()}],"break-before":[{"break-before":se()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ne(),u]}],overflow:[{overflow:q()}],"overflow-x":[{"overflow-x":q()}],"overflow-y":[{"overflow-y":q()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",$,u]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",u]}],grow:[{grow:R()}],shrink:[{shrink:R()}],order:[{order:["first","last","none",$,u]}],"grid-cols":[{"grid-cols":[E]}],"col-start-end":[{col:["auto",{span:["full",$,u]},u]}],"col-start":[{"col-start":G()}],"col-end":[{"col-end":G()}],"grid-rows":[{"grid-rows":[E]}],"row-start-end":[{row:["auto",{span:[$,u]},u]}],"row-start":[{"row-start":G()}],"row-end":[{"row-end":G()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",u]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",u]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[v]}],mx:[{mx:[v]}],my:[{my:[v]}],ms:[{ms:[v]}],me:[{me:[v]}],mt:[{mt:[v]}],mr:[{mr:[v]}],mb:[{mb:[v]}],ml:[{ml:[v]}],"space-x":[{"space-x":[te]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[te]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",u,t]}],"min-w":[{"min-w":[u,t,"min","max","fit"]}],"max-w":[{"max-w":[u,t,"none","full","min","max","fit","prose",{screen:[A]},A]}],h:[{h:[u,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[u,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[u,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[u,t,"auto","min","max","fit"]}],"font-size":[{text:["base",A,M]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",O]}],"font-family":[{font:[E]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",u]}],"line-clamp":[{"line-clamp":["none",j,O]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C,u]}],"list-image":[{"list-image":["none",u]}],"list-style-type":[{list:["none","disc","decimal",u]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[z]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[z]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...N(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",C,M]}],"underline-offset":[{"underline-offset":["auto",C,u]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:h()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",u]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",u]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[z]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ne(),Ft]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",qt]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Zt]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[z]}],"border-style":[{border:[...N(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[z]}],"divide-style":[{divide:N()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...N()]}],"outline-offset":[{"outline-offset":[C,u]}],"outline-w":[{outline:[C,M]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:oe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[z]}],"ring-offset-w":[{"ring-offset":[C,M]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",A,Jt]}],"shadow-color":[{shadow:[E]}],opacity:[{opacity:[z]}],"mix-blend":[{"mix-blend":ie()}],"bg-blend":[{"bg-blend":ie()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",A,u]}],grayscale:[{grayscale:[l]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[p]}],saturate:[{saturate:[w]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[l]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[z]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",u]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",u]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",u]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[$,u]}],"translate-x":[{"translate-x":[re]}],"translate-y":[{"translate-y":[re]}],"skew-x":[{"skew-x":[ee]}],"skew-y":[{"skew-y":[ee]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",u]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",u]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":h()}],"scroll-mx":[{"scroll-mx":h()}],"scroll-my":[{"scroll-my":h()}],"scroll-ms":[{"scroll-ms":h()}],"scroll-me":[{"scroll-me":h()}],"scroll-mt":[{"scroll-mt":h()}],"scroll-mr":[{"scroll-mr":h()}],"scroll-mb":[{"scroll-mb":h()}],"scroll-ml":[{"scroll-ml":h()}],"scroll-p":[{"scroll-p":h()}],"scroll-px":[{"scroll-px":h()}],"scroll-py":[{"scroll-py":h()}],"scroll-ps":[{"scroll-ps":h()}],"scroll-pe":[{"scroll-pe":h()}],"scroll-pt":[{"scroll-pt":h()}],"scroll-pr":[{"scroll-pr":h()}],"scroll-pb":[{"scroll-pb":h()}],"scroll-pl":[{"scroll-pl":h()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",u]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[C,M,O]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Kt=Wt(Dt);function er(...e){return Kt(xt(e))}const tr=V({__name:"Button",props:{asChild:{type:Boolean},variant:{default:"default"},size:{default:"default"},as:{default:"button"}},setup(e){return(t,o)=>(ye(),Be(Z(wt),{as:t.as,"as-child":t.asChild,class:qe(Z(er)(Z(rr)({variant:t.variant,size:t.size}),t.$attrs.class??""))},{default:we(()=>[Ue(t.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),rr=vt("inline-flex items-center justify-center rounded-md whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),or=""+globalThis.__publicAssetsURL("logo.svg"),nr="data:image/svg+xml,%3csvg%20width='256px'%20height='167px'%20viewBox='0%200%20256%20167'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMidYMid'%3e%3cpath%20d='M256,2.84217094e-14%20L224.03875,55.3664326%20L192.077501,2.84217094e-14%20L256,2.84217094e-14%20Z%20M85.3436667,36.9522887%20L64.0155001,36.9522887%20L117.335917,129.33301%20L96.0077501,166.285299%20L0,2.84217094e-14%20L106.671833,2.84217094e-14%20L160.02325,92.3807217%20L170.687333,73.9045774%20L128,2.84217094e-14%20L170.687333,2.84217094e-14%20L192.0155,36.9522887%20L213.343667,73.9045774%20L160.02325,166.285299%20L85.3436667,36.9522887%20Z'%20fill='%23a252c8'%3e%3c/path%3e%3c/svg%3e",ir={},sr=D("div",null,"page",-1),ar=D("img",{src:or,alt:"public"},null,-1),lr=D("img",{src:nr,alt:"assets"},null,-1);function cr(e,t){const o=ht,r=Je,i=tr;return ye(),He(ve,null,[sr,J(o,{src:"logo.svg"}),ar,lr,J(r,{name:"line-md:log-out"}),J(i,null,{default:we(()=>[Ze("123")]),_:1})],64)}const gr=Fe(ir,[["render",cr]]);export{gr as default};
