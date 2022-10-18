var U=Object.defineProperty;var u=(e,t)=>U(e,"name",{value:t,configurable:!0});import{r}from"./index.56550e34.js";import{$ as z,a as M}from"./index.module.4cbd1c4d.js";import{r as D}from"./index.77c68ebb.js";function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},C.apply(this,arguments)}u(C,"_extends$1");function j(e,t){const n=r.exports.createContext(t);function o(s){const{children:d,...f}=s,a=r.exports.useMemo(()=>f,Object.values(f));return r.exports.createElement(n.Provider,{value:a},d)}u(o,"Provider");function c(s){const d=r.exports.useContext(n);if(d)return d;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return u(c,"useContext"),o.displayName=e+"Provider",[o,c]}u(j,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function B(e,t=[]){let n=[];function o(s,d){const f=r.exports.createContext(d),a=n.length;n=[...n,d];function i(l){const{scope:p,children:$,...x}=l,N=(p==null?void 0:p[e][a])||f,P=r.exports.useMemo(()=>x,Object.values(x));return r.exports.createElement(N.Provider,{value:P},$)}u(i,"Provider");function b(l,p){const $=(p==null?void 0:p[e][a])||f,x=r.exports.useContext($);if(x)return x;if(d!==void 0)return d;throw new Error(`\`${l}\` must be used within \`${s}\``)}return u(b,"useContext"),i.displayName=s+"Provider",[i,b]}u(o,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=u(()=>{const s=n.map(d=>r.exports.createContext(d));return u(function(f){const a=(f==null?void 0:f[e])||s;return r.exports.useMemo(()=>({[`__scope${e}`]:{...f,[e]:a}}),[f,a])},"useScope")},"createScope");return c.scopeName=e,[o,q(c,...t)]}u(B,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function q(...e){const t=e[0];if(e.length===1)return t;const n=u(()=>{const o=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return u(function(s){const d=o.reduce((f,{useScope:a,scopeName:i})=>{const l=a(s)[`__scope${i}`];return{...f,...l}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}u(q,"$c512c27ab02ef895$var$composeContextScopes");function O(e,t,{checkForDefaultPrevented:n=!0}={}){return u(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}u(O,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function R(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}u(R,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function K({prop:e,defaultProp:t,onChange:n=u(()=>{},"onChange")}){const[o,c]=F({defaultProp:t,onChange:n}),s=e!==void 0,d=s?e:o,f=R(n),a=r.exports.useCallback(i=>{if(s){const l=typeof i=="function"?i(e):i;l!==e&&f(l)}else c(i)},[s,e,c,f]);return[d,a]}u(K,"$71cd76cc60e0454e$export$6f32135080cb4c3");function F({defaultProp:e,onChange:t}){const n=r.exports.useState(e),[o]=n,c=r.exports.useRef(o),s=R(t);return r.exports.useEffect(()=>{c.current!==o&&(s(o),c.current=o)},[o,c,s]),n}u(F,"$71cd76cc60e0454e$var$useUncontrolledState");function W(e){const t=r.exports.useRef({value:e,previous:e});return r.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}u(W,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const E=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{};function X(e){const[t,n]=r.exports.useState(void 0);return E(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let d,f;if("borderBoxSize"in s){const a=s.borderBoxSize,i=Array.isArray(a)?a[0]:a;d=i.inlineSize,f=i.blockSize}else d=e.offsetWidth,f=e.offsetHeight;n({width:d,height:f})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}u(X,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},S.apply(this,arguments)}u(S,"_extends");const H=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],w=H.reduce((e,t)=>{const n=r.exports.forwardRef((o,c)=>{const{asChild:s,...d}=o,f=s?z:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(f,S({},d,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),G="Label",[de,J]=j(G,{id:void 0,controlRef:{current:null}}),Q=u(e=>{const t=J("LabelConsumer"),{controlRef:n}=t;return r.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function Y(e,t){return r.exports.useReducer((n,o)=>{const c=t[n][o];return c!=null?c:n},e)}u(Y,"$fe963b355347cc68$export$3e6543de14f8614f");const _=u(e=>{const{present:t,children:n}=e,o=Z(t),c=typeof n=="function"?n({present:o.isPresent}):r.exports.Children.only(n),s=M(o.ref,c.ref);return typeof n=="function"||o.isPresent?r.exports.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");_.displayName="Presence";function Z(e){const[t,n]=r.exports.useState(),o=r.exports.useRef({}),c=r.exports.useRef(e),s=r.exports.useRef("none"),d=e?"mounted":"unmounted",[f,a]=Y(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.exports.useEffect(()=>{const i=g(o.current);s.current=f==="mounted"?i:"none"},[f]),E(()=>{const i=o.current,b=c.current;if(b!==e){const p=s.current,$=g(i);e?a("MOUNT"):$==="none"||(i==null?void 0:i.display)==="none"?a("UNMOUNT"):a(b&&p!==$?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,a]),E(()=>{if(t){const i=u(l=>{const $=g(o.current).includes(l.animationName);l.target===t&&$&&D.exports.flushSync(()=>a("ANIMATION_END"))},"handleAnimationEnd"),b=u(l=>{l.target===t&&(s.current=g(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",b),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",b),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:r.exports.useCallback(i=>{i&&(o.current=getComputedStyle(i)),n(i)},[])}}u(Z,"$921a889cee6df7e8$var$usePresence");function g(e){return(e==null?void 0:e.animationName)||"none"}u(g,"$921a889cee6df7e8$var$getAnimationName");const I="Checkbox",[V,fe]=B(I),[ee,te]=V(I),ne=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":o,name:c,checked:s,defaultChecked:d,required:f,disabled:a,value:i="on",onCheckedChange:b,...l}=e,[p,$]=r.exports.useState(null),x=M(t,m=>$(m)),N=Q(p),P=o||N,y=r.exports.useRef(!1),k=p?Boolean(p.closest("form")):!0,[v=!1,L]=K({prop:s,defaultProp:d,onChange:b});return r.exports.createElement(ee,{scope:n,state:v,disabled:a},r.exports.createElement(w.button,C({type:"button",role:"checkbox","aria-checked":h(v)?"mixed":v,"aria-labelledby":P,"aria-required":f,"data-state":T(v),"data-disabled":a?"":void 0,disabled:a,value:i},l,{ref:x,onKeyDown:O(e.onKeyDown,m=>{m.key==="Enter"&&m.preventDefault()}),onClick:O(e.onClick,m=>{L(A=>h(A)?!0:!A),k&&(y.current=m.isPropagationStopped(),y.current||m.stopPropagation())})})),k&&r.exports.createElement(ce,{control:p,bubbles:!y.current,name:c,value:i,checked:v,required:f,disabled:a,style:{transform:"translateX(-100%)"}}))}),oe="CheckboxIndicator",re=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...c}=e,s=te(oe,n);return r.exports.createElement(_,{present:o||h(s.state)||s.state===!0},r.exports.createElement(w.span,C({"data-state":T(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),ce=u(e=>{const{control:t,checked:n,bubbles:o=!0,...c}=e,s=r.exports.useRef(null),d=W(n),f=X(t);return r.exports.useEffect(()=>{const a=s.current,i=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(i,"checked").set;if(d!==n&&l){const p=new Event("click",{bubbles:o});a.indeterminate=h(n),l.call(a,h(n)?!1:n),a.dispatchEvent(p)}},[d,n,o]),r.exports.createElement("input",C({type:"checkbox","aria-hidden":!0,defaultChecked:h(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function h(e){return e==="indeterminate"}u(h,"$e698a72e93240346$var$isIndeterminate");function T(e){return h(e)?"indeterminate":e?"checked":"unchecked"}u(T,"$e698a72e93240346$var$getState");const le=ne,pe=re;export{le as $,pe as a,ne as b};
//# sourceMappingURL=index.module.f88b6a90.js.map
