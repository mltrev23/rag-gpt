import{c as ke,r as e,$ as j,_ as I,a as st,b as rt,d as Ae,e as B,f as lt,g as P,h as it,i as K,j as Le,k as dt,l as ft,m as ut,n as pt,o as mt,p as gt,q as we,s as ht,t as vt,u as _e,v as xt,w as $t,x as a,y as z,C as bt,z as St,I as ie,A as Ee,B as Ie,D as Ne,E as ce,U as Pe,F as be,G as se,H as wt}from"./index-rBgYIjBV.js";import{$ as yt}from"./index-1ovLHQU6.js";import{T as Te}from"./textarea-cjeYz5RG.js";/**
 * @license lucide-react v0.319.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=ke("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.319.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=ke("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);function Re(o,[n,t]){return Math.min(t,Math.max(n,o))}const _t=e.forwardRef((o,n)=>e.createElement(j.span,I({},o,{ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...o.style}}))),Et=[" ","Enter","ArrowUp","ArrowDown"],It=[" ","Enter"],fe="Select",[ue,pe,Nt]=st(fe),[te,So]=rt(fe,[Nt,Ae]),ye=Ae(),[Pt,Y]=te(fe),[Tt,Rt]=te(fe),jt=o=>{const{__scopeSelect:n,children:t,open:s,defaultOpen:r,onOpenChange:f,value:l,defaultValue:c,onValueChange:i,dir:u,name:x,autoComplete:C,disabled:d,required:v}=o,p=ye(n),[h,y]=e.useState(null),[$,m]=e.useState(null),[b,oe]=e.useState(!1),O=vt(u),[ne=!1,T]=_e({prop:s,defaultProp:r,onChange:f}),[D,q]=_e({prop:l,defaultProp:c,onChange:i}),Z=e.useRef(null),G=h?!!h.closest("form"):!0,[A,F]=e.useState(new Set),U=Array.from(A).map(N=>N.props.value).join(";");return e.createElement(xt,p,e.createElement(Pt,{required:v,scope:n,trigger:h,onTriggerChange:y,valueNode:$,onValueNodeChange:m,valueNodeHasChildren:b,onValueNodeHasChildrenChange:oe,contentId:we(),value:D,onValueChange:q,open:ne,onOpenChange:T,dir:O,triggerPointerDownPosRef:Z,disabled:d},e.createElement(ue.Provider,{scope:n},e.createElement(Tt,{scope:o.__scopeSelect,onNativeOptionAdd:e.useCallback(N=>{F(L=>new Set(L).add(N))},[]),onNativeOptionRemove:e.useCallback(N=>{F(L=>{const V=new Set(L);return V.delete(N),V})},[])},t)),G?e.createElement(We,{key:U,"aria-hidden":!0,required:v,tabIndex:-1,name:x,autoComplete:C,value:D,onChange:N=>q(N.target.value),disabled:d},D===void 0?e.createElement("option",{value:""}):null,Array.from(A)):null))},Dt="SelectTrigger",Ot=e.forwardRef((o,n)=>{const{__scopeSelect:t,disabled:s=!1,...r}=o,f=ye(t),l=Y(Dt,t),c=l.disabled||s,i=B(n,l.onTriggerChange),u=pe(t),[x,C,d]=Ke(p=>{const h=u().filter(m=>!m.disabled),y=h.find(m=>m.value===l.value),$=ze(h,p,y);$!==void 0&&l.onValueChange($.value)}),v=()=>{c||(l.onOpenChange(!0),d())};return e.createElement(lt,I({asChild:!0},f),e.createElement(j.button,I({type:"button",role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":Ue(l.value)?"":void 0},r,{ref:i,onClick:P(r.onClick,p=>{p.currentTarget.focus()}),onPointerDown:P(r.onPointerDown,p=>{const h=p.target;h.hasPointerCapture(p.pointerId)&&h.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&(v(),l.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)},p.preventDefault())}),onKeyDown:P(r.onKeyDown,p=>{const h=x.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&C(p.key),!(h&&p.key===" ")&&Et.includes(p.key)&&(v(),p.preventDefault())})})))}),Mt="SelectValue",kt=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:s,style:r,children:f,placeholder:l="",...c}=o,i=Y(Mt,t),{onValueNodeHasChildrenChange:u}=i,x=f!==void 0,C=B(n,i.onValueNodeChange);return K(()=>{u(x)},[u,x]),e.createElement(j.span,I({},c,{ref:C,style:{pointerEvents:"none"}}),Ue(i.value)?e.createElement(e.Fragment,null,l):f)}),At=e.forwardRef((o,n)=>{const{__scopeSelect:t,children:s,...r}=o;return e.createElement(j.span,I({"aria-hidden":!0},r,{ref:n}),s||"▼")}),Lt=o=>e.createElement(it,I({asChild:!0},o)),ee="SelectContent",Bt=e.forwardRef((o,n)=>{const t=Y(ee,o.__scopeSelect),[s,r]=e.useState();if(K(()=>{r(new DocumentFragment)},[]),!t.open){const f=s;return f?Le.createPortal(e.createElement(Ve,{scope:o.__scopeSelect},e.createElement(ue.Slot,{scope:o.__scopeSelect},e.createElement("div",null,o.children))),f):null}return e.createElement(Vt,I({},o,{ref:n}))}),H=10,[Ve,X]=te(ee),Vt=e.forwardRef((o,n)=>{const{__scopeSelect:t,position:s="item-aligned",onCloseAutoFocus:r,onEscapeKeyDown:f,onPointerDownOutside:l,side:c,sideOffset:i,align:u,alignOffset:x,arrowPadding:C,collisionBoundary:d,collisionPadding:v,sticky:p,hideWhenDetached:h,avoidCollisions:y,...$}=o,m=Y(ee,t),[b,oe]=e.useState(null),[O,ne]=e.useState(null),T=B(n,g=>oe(g)),[D,q]=e.useState(null),[Z,G]=e.useState(null),A=pe(t),[F,U]=e.useState(!1),N=e.useRef(!1);e.useEffect(()=>{if(b)return dt(b)},[b]),ft();const L=e.useCallback(g=>{const[_,...R]=A().map(w=>w.ref.current),[E]=R.slice(-1),S=document.activeElement;for(const w of g)if(w===S||(w==null||w.scrollIntoView({block:"nearest"}),w===_&&O&&(O.scrollTop=0),w===E&&O&&(O.scrollTop=O.scrollHeight),w==null||w.focus(),document.activeElement!==S))return},[A,O]),V=e.useCallback(()=>L([D,b]),[L,D,b]);e.useEffect(()=>{F&&V()},[F,V]);const{onOpenChange:J,triggerPointerDownPosRef:W}=m;e.useEffect(()=>{if(b){let g={x:0,y:0};const _=E=>{var S,w,M,k;g={x:Math.abs(Math.round(E.pageX)-((S=(w=W.current)===null||w===void 0?void 0:w.x)!==null&&S!==void 0?S:0)),y:Math.abs(Math.round(E.pageY)-((M=(k=W.current)===null||k===void 0?void 0:k.y)!==null&&M!==void 0?M:0))}},R=E=>{g.x<=10&&g.y<=10?E.preventDefault():b.contains(E.target)||J(!1),document.removeEventListener("pointermove",_),W.current=null};return W.current!==null&&(document.addEventListener("pointermove",_),document.addEventListener("pointerup",R,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",R,{capture:!0})}}},[b,J,W]),e.useEffect(()=>{const g=()=>J(!1);return window.addEventListener("blur",g),window.addEventListener("resize",g),()=>{window.removeEventListener("blur",g),window.removeEventListener("resize",g)}},[J]);const[me,re]=Ke(g=>{const _=A().filter(S=>!S.disabled),R=_.find(S=>S.ref.current===document.activeElement),E=ze(_,g,R);E&&setTimeout(()=>E.ref.current.focus())}),ge=e.useCallback((g,_,R)=>{const E=!N.current&&!R;(m.value!==void 0&&m.value===_||E)&&(q(g),E&&(N.current=!0))},[m.value]),he=e.useCallback(()=>b==null?void 0:b.focus(),[b]),Q=e.useCallback((g,_,R)=>{const E=!N.current&&!R;(m.value!==void 0&&m.value===_||E)&&G(g)},[m.value]),le=s==="popper"?je:Ht,ae=le===je?{side:c,sideOffset:i,align:u,alignOffset:x,arrowPadding:C,collisionBoundary:d,collisionPadding:v,sticky:p,hideWhenDetached:h,avoidCollisions:y}:{};return e.createElement(Ve,{scope:t,content:b,viewport:O,onViewportChange:ne,itemRefCallback:ge,selectedItem:D,onItemLeave:he,itemTextRefCallback:Q,focusSelectedItem:V,selectedItemText:Z,position:s,isPositioned:F,searchRef:me},e.createElement(ut,{as:pt,allowPinchZoom:!0},e.createElement(mt,{asChild:!0,trapped:m.open,onMountAutoFocus:g=>{g.preventDefault()},onUnmountAutoFocus:P(r,g=>{var _;(_=m.trigger)===null||_===void 0||_.focus({preventScroll:!0}),g.preventDefault()})},e.createElement(gt,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:f,onPointerDownOutside:l,onFocusOutside:g=>g.preventDefault(),onDismiss:()=>m.onOpenChange(!1)},e.createElement(le,I({role:"listbox",id:m.contentId,"data-state":m.open?"open":"closed",dir:m.dir,onContextMenu:g=>g.preventDefault()},$,ae,{onPlaced:()=>U(!0),ref:T,style:{display:"flex",flexDirection:"column",outline:"none",...$.style},onKeyDown:P($.onKeyDown,g=>{const _=g.ctrlKey||g.altKey||g.metaKey;if(g.key==="Tab"&&g.preventDefault(),!_&&g.key.length===1&&re(g.key),["ArrowUp","ArrowDown","Home","End"].includes(g.key)){let E=A().filter(S=>!S.disabled).map(S=>S.ref.current);if(["ArrowUp","End"].includes(g.key)&&(E=E.slice().reverse()),["ArrowUp","ArrowDown"].includes(g.key)){const S=g.target,w=E.indexOf(S);E=E.slice(w+1)}setTimeout(()=>L(E)),g.preventDefault()}})}))))))}),Ht=e.forwardRef((o,n)=>{const{__scopeSelect:t,onPlaced:s,...r}=o,f=Y(ee,t),l=X(ee,t),[c,i]=e.useState(null),[u,x]=e.useState(null),C=B(n,T=>x(T)),d=pe(t),v=e.useRef(!1),p=e.useRef(!0),{viewport:h,selectedItem:y,selectedItemText:$,focusSelectedItem:m}=l,b=e.useCallback(()=>{if(f.trigger&&f.valueNode&&c&&u&&h&&y&&$){const T=f.trigger.getBoundingClientRect(),D=u.getBoundingClientRect(),q=f.valueNode.getBoundingClientRect(),Z=$.getBoundingClientRect();if(f.dir!=="rtl"){const S=Z.left-D.left,w=q.left-S,M=T.left-w,k=T.width+M,ve=Math.max(k,D.width),xe=window.innerWidth-H,$e=Re(w,[H,xe-ve]);c.style.minWidth=k+"px",c.style.left=$e+"px"}else{const S=D.right-Z.right,w=window.innerWidth-q.right-S,M=window.innerWidth-T.right-w,k=T.width+M,ve=Math.max(k,D.width),xe=window.innerWidth-H,$e=Re(w,[H,xe-ve]);c.style.minWidth=k+"px",c.style.right=$e+"px"}const G=d(),A=window.innerHeight-H*2,F=h.scrollHeight,U=window.getComputedStyle(u),N=parseInt(U.borderTopWidth,10),L=parseInt(U.paddingTop,10),V=parseInt(U.borderBottomWidth,10),J=parseInt(U.paddingBottom,10),W=N+L+F+J+V,me=Math.min(y.offsetHeight*5,W),re=window.getComputedStyle(h),ge=parseInt(re.paddingTop,10),he=parseInt(re.paddingBottom,10),Q=T.top+T.height/2-H,le=A-Q,ae=y.offsetHeight/2,g=y.offsetTop+ae,_=N+L+g,R=W-_;if(_<=Q){const S=y===G[G.length-1].ref.current;c.style.bottom="0px";const w=u.clientHeight-h.offsetTop-h.offsetHeight,M=Math.max(le,ae+(S?he:0)+w+V),k=_+M;c.style.height=k+"px"}else{const S=y===G[0].ref.current;c.style.top="0px";const M=Math.max(Q,N+h.offsetTop+(S?ge:0)+ae)+R;c.style.height=M+"px",h.scrollTop=_-Q+h.offsetTop}c.style.margin=`${H}px 0`,c.style.minHeight=me+"px",c.style.maxHeight=A+"px",s==null||s(),requestAnimationFrame(()=>v.current=!0)}},[d,f.trigger,f.valueNode,c,u,h,y,$,f.dir,s]);K(()=>b(),[b]);const[oe,O]=e.useState();K(()=>{u&&O(window.getComputedStyle(u).zIndex)},[u]);const ne=e.useCallback(T=>{T&&p.current===!0&&(b(),m==null||m(),p.current=!1)},[b,m]);return e.createElement(Ft,{scope:t,contentWrapper:c,shouldExpandOnScrollRef:v,onScrollButtonChange:ne},e.createElement("div",{ref:i,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:oe}},e.createElement(j.div,I({},r,{ref:C,style:{boxSizing:"border-box",maxHeight:"100%",...r.style}}))))}),je=e.forwardRef((o,n)=>{const{__scopeSelect:t,align:s="start",collisionPadding:r=H,...f}=o,l=ye(t);return e.createElement($t,I({},l,f,{ref:n,align:s,collisionPadding:r,style:{boxSizing:"border-box",...f.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[Ft,Ce]=te(ee,{}),De="SelectViewport",Ut=e.forwardRef((o,n)=>{const{__scopeSelect:t,...s}=o,r=X(De,t),f=Ce(De,t),l=B(n,r.onViewportChange),c=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(ue.Slot,{scope:t},e.createElement(j.div,I({"data-radix-select-viewport":"",role:"presentation"},s,{ref:l,style:{position:"relative",flex:1,overflow:"auto",...s.style},onScroll:P(s.onScroll,i=>{const u=i.currentTarget,{contentWrapper:x,shouldExpandOnScrollRef:C}=f;if(C!=null&&C.current&&x){const d=Math.abs(c.current-u.scrollTop);if(d>0){const v=window.innerHeight-H*2,p=parseFloat(x.style.minHeight),h=parseFloat(x.style.height),y=Math.max(p,h);if(y<v){const $=y+d,m=Math.min(v,$),b=$-m;x.style.height=m+"px",x.style.bottom==="0px"&&(u.scrollTop=b>0?b:0,x.style.justifyContent="flex-end")}}}c.current=u.scrollTop})}))))}),Wt="SelectGroup",[Kt,zt]=te(Wt),qt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...s}=o,r=we();return e.createElement(Kt,{scope:t,id:r},e.createElement(j.div,I({role:"group","aria-labelledby":r},s,{ref:n})))}),Gt="SelectLabel",Yt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...s}=o,r=zt(Gt,t);return e.createElement(j.div,I({id:r.id},s,{ref:n}))}),Se="SelectItem",[Xt,He]=te(Se),Zt=e.forwardRef((o,n)=>{const{__scopeSelect:t,value:s,disabled:r=!1,textValue:f,...l}=o,c=Y(Se,t),i=X(Se,t),u=c.value===s,[x,C]=e.useState(f??""),[d,v]=e.useState(!1),p=B(n,$=>{var m;return(m=i.itemRefCallback)===null||m===void 0?void 0:m.call(i,$,s,r)}),h=we(),y=()=>{r||(c.onValueChange(s),c.onOpenChange(!1))};if(s==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return e.createElement(Xt,{scope:t,value:s,disabled:r,textId:h,isSelected:u,onItemTextChange:e.useCallback($=>{C(m=>{var b;return m||((b=$==null?void 0:$.textContent)!==null&&b!==void 0?b:"").trim()})},[])},e.createElement(ue.ItemSlot,{scope:t,value:s,disabled:r,textValue:x},e.createElement(j.div,I({role:"option","aria-labelledby":h,"data-highlighted":d?"":void 0,"aria-selected":u&&d,"data-state":u?"checked":"unchecked","aria-disabled":r||void 0,"data-disabled":r?"":void 0,tabIndex:r?void 0:-1},l,{ref:p,onFocus:P(l.onFocus,()=>v(!0)),onBlur:P(l.onBlur,()=>v(!1)),onPointerUp:P(l.onPointerUp,y),onPointerMove:P(l.onPointerMove,$=>{if(r){var m;(m=i.onItemLeave)===null||m===void 0||m.call(i)}else $.currentTarget.focus({preventScroll:!0})}),onPointerLeave:P(l.onPointerLeave,$=>{if($.currentTarget===document.activeElement){var m;(m=i.onItemLeave)===null||m===void 0||m.call(i)}}),onKeyDown:P(l.onKeyDown,$=>{var m;((m=i.searchRef)===null||m===void 0?void 0:m.current)!==""&&$.key===" "||(It.includes($.key)&&y(),$.key===" "&&$.preventDefault())})}))))}),de="SelectItemText",Jt=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:s,style:r,...f}=o,l=Y(de,t),c=X(de,t),i=He(de,t),u=Rt(de,t),[x,C]=e.useState(null),d=B(n,$=>C($),i.onItemTextChange,$=>{var m;return(m=c.itemTextRefCallback)===null||m===void 0?void 0:m.call(c,$,i.value,i.disabled)}),v=x==null?void 0:x.textContent,p=e.useMemo(()=>e.createElement("option",{key:i.value,value:i.value,disabled:i.disabled},v),[i.disabled,i.value,v]),{onNativeOptionAdd:h,onNativeOptionRemove:y}=u;return K(()=>(h(p),()=>y(p)),[h,y,p]),e.createElement(e.Fragment,null,e.createElement(j.span,I({id:i.textId},f,{ref:d})),i.isSelected&&l.valueNode&&!l.valueNodeHasChildren?Le.createPortal(f.children,l.valueNode):null)}),Qt="SelectItemIndicator",eo=e.forwardRef((o,n)=>{const{__scopeSelect:t,...s}=o;return He(Qt,t).isSelected?e.createElement(j.span,I({"aria-hidden":!0},s,{ref:n})):null}),Oe="SelectScrollUpButton",to=e.forwardRef((o,n)=>{const t=X(Oe,o.__scopeSelect),s=Ce(Oe,o.__scopeSelect),[r,f]=e.useState(!1),l=B(n,s.onScrollButtonChange);return K(()=>{if(t.viewport&&t.isPositioned){let i=function(){const u=c.scrollTop>0;f(u)};const c=t.viewport;return i(),c.addEventListener("scroll",i),()=>c.removeEventListener("scroll",i)}},[t.viewport,t.isPositioned]),r?e.createElement(Fe,I({},o,{ref:l,onAutoScroll:()=>{const{viewport:c,selectedItem:i}=t;c&&i&&(c.scrollTop=c.scrollTop-i.offsetHeight)}})):null}),Me="SelectScrollDownButton",oo=e.forwardRef((o,n)=>{const t=X(Me,o.__scopeSelect),s=Ce(Me,o.__scopeSelect),[r,f]=e.useState(!1),l=B(n,s.onScrollButtonChange);return K(()=>{if(t.viewport&&t.isPositioned){let i=function(){const u=c.scrollHeight-c.clientHeight,x=Math.ceil(c.scrollTop)<u;f(x)};const c=t.viewport;return i(),c.addEventListener("scroll",i),()=>c.removeEventListener("scroll",i)}},[t.viewport,t.isPositioned]),r?e.createElement(Fe,I({},o,{ref:l,onAutoScroll:()=>{const{viewport:c,selectedItem:i}=t;c&&i&&(c.scrollTop=c.scrollTop+i.offsetHeight)}})):null}),Fe=e.forwardRef((o,n)=>{const{__scopeSelect:t,onAutoScroll:s,...r}=o,f=X("SelectScrollButton",t),l=e.useRef(null),c=pe(t),i=e.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return e.useEffect(()=>()=>i(),[i]),K(()=>{var u;const x=c().find(C=>C.ref.current===document.activeElement);x==null||(u=x.ref.current)===null||u===void 0||u.scrollIntoView({block:"nearest"})},[c]),e.createElement(j.div,I({"aria-hidden":!0},r,{ref:n,style:{flexShrink:0,...r.style},onPointerDown:P(r.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(s,50))}),onPointerMove:P(r.onPointerMove,()=>{var u;(u=f.onItemLeave)===null||u===void 0||u.call(f),l.current===null&&(l.current=window.setInterval(s,50))}),onPointerLeave:P(r.onPointerLeave,()=>{i()})}))}),no=e.forwardRef((o,n)=>{const{__scopeSelect:t,...s}=o;return e.createElement(j.div,I({"aria-hidden":!0},s,{ref:n}))});function Ue(o){return o===""||o===void 0}const We=e.forwardRef((o,n)=>{const{value:t,...s}=o,r=e.useRef(null),f=B(n,r),l=yt(t);return e.useEffect(()=>{const c=r.current,i=window.HTMLSelectElement.prototype,x=Object.getOwnPropertyDescriptor(i,"value").set;if(l!==t&&x){const C=new Event("change",{bubbles:!0});x.call(c,t),c.dispatchEvent(C)}},[l,t]),e.createElement(_t,{asChild:!0},e.createElement("select",I({},s,{ref:f,defaultValue:t})))});We.displayName="BubbleSelect";function Ke(o){const n=ht(o),t=e.useRef(""),s=e.useRef(0),r=e.useCallback(l=>{const c=t.current+l;n(c),function i(u){t.current=u,window.clearTimeout(s.current),u!==""&&(s.current=window.setTimeout(()=>i(""),1e3))}(c)},[n]),f=e.useCallback(()=>{t.current="",window.clearTimeout(s.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(s.current),[]),[t,r,f]}function ze(o,n,t){const r=n.length>1&&Array.from(n).every(u=>u===n[0])?n[0]:n,f=t?o.indexOf(t):-1;let l=ao(o,Math.max(f,0));r.length===1&&(l=l.filter(u=>u!==t));const i=l.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==t?i:void 0}function ao(o,n){return o.map((t,s)=>o[(n+s)%o.length])}const co=jt,qe=Ot,so=kt,ro=At,lo=Lt,Ge=Bt,io=Ut,fo=qt,Ye=Yt,Xe=Zt,uo=Jt,po=eo,Ze=to,Je=oo,Qe=no,mo=co,go=fo,ho=so,et=e.forwardRef(({className:o,children:n,...t},s)=>a.jsxs(qe,{ref:s,className:z("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",o),...t,children:[n,a.jsx(ro,{asChild:!0,children:a.jsx(Be,{className:"h-4 w-4 opacity-50"})})]}));et.displayName=qe.displayName;const tt=e.forwardRef(({className:o,...n},t)=>a.jsx(Ze,{ref:t,className:z("flex cursor-default items-center justify-center py-1",o),...n,children:a.jsx(Ct,{className:"h-4 w-4"})}));tt.displayName=Ze.displayName;const ot=e.forwardRef(({className:o,...n},t)=>a.jsx(Je,{ref:t,className:z("flex cursor-default items-center justify-center py-1",o),...n,children:a.jsx(Be,{className:"h-4 w-4"})}));ot.displayName=Je.displayName;const nt=e.forwardRef(({className:o,children:n,position:t="popper",...s},r)=>a.jsx(lo,{children:a.jsxs(Ge,{ref:r,className:z("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",o),position:t,...s,children:[a.jsx(tt,{}),a.jsx(io,{className:z("p-1",t==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),a.jsx(ot,{})]})}));nt.displayName=Ge.displayName;const at=e.forwardRef(({className:o,...n},t)=>a.jsx(Ye,{ref:t,className:z("py-1.5 pl-8 pr-2 text-sm font-semibold",o),...n}));at.displayName=Ye.displayName;const ct=e.forwardRef(({className:o,children:n,...t},s)=>a.jsxs(Xe,{ref:s,className:z("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),...t,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(po,{children:a.jsx(bt,{className:"h-4 w-4"})})}),a.jsx(uo,{children:n})]}));ct.displayName=Xe.displayName;const vo=e.forwardRef(({className:o,...n},t)=>a.jsx(Qe,{ref:t,className:z("-mx-1 my-1 h-px bg-muted",o),...n}));vo.displayName=Qe.displayName;const wo=()=>{const[o,n]=e.useState({id:0,initial_messages:[],suggested_messages:[],bot_name:"",bot_avatar:"",chat_icon:"",placeholder:"",model:""}),[t,s]=e.useState({initial_messages:"",suggested_messages:""}),[r,f]=e.useState({updating:!1,avatarUploading:!1,avatarRemoving:!1,chatIconUploading:!1,chatIconRemoving:!1}),l=e.useRef(null),c=e.useRef(null);e.useEffect(()=>{St().then(d=>{n(d.data.config),s({initial_messages:d.data.config.initial_messages.join(`
`),suggested_messages:d.data.config.suggested_messages.join(`
`)})})},[]);const i=(d,v)=>{s(p=>({...p,[v]:d})),n(p=>({...p,[v]:d.split(`
`)}))},u=async()=>{f(d=>({...d,updating:!0}));try{await be(o),se.success("Settings updated successfully.")}catch(d){se.error(d.message||"Failed to update settings. Please try again.")}f(d=>({...d,updating:!1}))},x=async(d,v)=>{if(!v)return;const p=d==="bot_avatar"?" avatarRemoving":"chatIconRemoving";f(h=>({...h,[p]:!0}));try{const{data:{picture_url:h}}=await wt(v);await be({...o,[d]:h}),n(y=>({...y,[d]:h})),se.success("Image updated successfully.")}catch(h){se.error(h.message||"Failed to upload image. Please try again.")}f(h=>({...h,[p]:!1}))},C=async d=>{const v=d==="bot_avatar"?" avatarRemoving":"chatIconRemoving";f(p=>({...p,[v]:!0}));try{await be({...o,[d]:""}),n(p=>({...p,[d]:""}))}catch(p){se.error(p.message||"Failed to remove image. Please try again.")}f(p=>({...p,[v]:!1}))};return a.jsxs("div",{className:"mt-6 border border-zinc-200 h-fit rounded-md",children:[a.jsxs("div",{className:"p-5",children:[a.jsx("small",{className:"text-sm font-medium leading-none mb-3",children:"Model"}),a.jsx("div",{className:"mt-1 mb-3",children:a.jsxs(mo,{value:o.model,children:[a.jsx(et,{children:a.jsx(ho,{placeholder:"Select a model"})}),a.jsx(nt,{children:a.jsxs(go,{children:[a.jsx(at,{children:o.model}),a.jsx(ct,{value:"gpt-3.5-turbo",children:"gpt-3.5-turbo"})]})})]})}),a.jsx("small",{className:"text-sm font-medium leading-none",children:"Initial Messages"}),a.jsx("div",{className:"mt-1 mb-3",children:a.jsx(Te,{placeholder:"Type your message here.",value:t.initial_messages,onChange:d=>i(d.target.value,"initial_messages")})}),a.jsx("small",{className:"text-sm font-medium leading-none",children:"Suggested Messages"}),a.jsx("div",{className:"mt-1 mb-3",children:a.jsx(Te,{placeholder:"Type your message here.",value:t.suggested_messages,onChange:d=>i(d.target.value,"suggested_messages")})}),a.jsx("small",{className:"text-sm font-medium leading-none",children:"Message Placeholder"}),a.jsx("div",{className:"mt-1 mb-3",children:a.jsx(ie,{type:"text",placeholder:"Type your message here.",value:o.placeholder,onChange:d=>n(v=>({...v,placeholder:d.target.value}))})}),a.jsxs("div",{className:"flex items-center",children:[a.jsxs(Ee,{children:[a.jsx(Ie,{}),a.jsx(Ne,{src:o.bot_avatar,alt:o.bot_name})]}),a.jsxs("div",{className:"ml-6",children:[a.jsx("small",{className:"text-sm font-medium leading-none",children:"Profile Picture"}),a.jsxs("div",{className:"mt-1 mb-3",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsxs(ce,{className:"h-7 px-3 text-xs",variant:"outline",loading:r.avatarUploading,onClick:()=>{var d;return(d=l.current)==null?void 0:d.click()},children:[a.jsx(Pe,{className:"mr-2"}),"Upload image"]}),o.bot_avatar&&a.jsx(ce,{className:"h-7 px-3 text-xs",variant:"ghost",loading:r.avatarRemoving,onClick:()=>C("bot_avatar"),children:"Remove"})]}),a.jsx(ie,{className:"hidden",accept:"image/*",multiple:!1,type:"file",ref:l,onChange:d=>{var v;return x("bot_avatar",(v=d.target.files)==null?void 0:v[0])}})]})]})]}),a.jsx("small",{className:"text-sm font-medium leading-none",children:"Display name"}),a.jsx("div",{className:"mt-1 mb-3",children:a.jsx(ie,{type:"text",placeholder:"Type your name here.",value:o.bot_name,onChange:d=>n(v=>({...v,bot_name:d.target.value}))})}),a.jsxs("div",{className:"flex items-center",children:[a.jsxs(Ee,{children:[a.jsx(Ie,{}),a.jsx(Ne,{src:o.chat_icon,alt:"Ask"})]}),a.jsxs("div",{className:"ml-6",children:[a.jsx("small",{className:"text-sm font-medium leading-none",children:"Chat icon"}),a.jsxs("div",{className:"mt-1 mb-3",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsxs(ce,{className:"h-7 px-3 text-xs",variant:"outline",loading:r.chatIconUploading,onClick:()=>{var d;return(d=c.current)==null?void 0:d.click()},children:[a.jsx(Pe,{className:"mr-2"}),"Upload image"]}),o.chat_icon&&a.jsx(ce,{className:"h-7 px-3 text-xs",variant:"ghost",loading:r.chatIconRemoving,onClick:()=>C("chat_icon"),children:"Remove"})]}),a.jsx(ie,{className:"hidden",accept:"image/*",multiple:!1,type:"file",ref:c,onChange:d=>{var v;return x("chat_icon",(v=d.target.files)==null?void 0:v[0])}})]})]})]})]}),a.jsx("div",{className:"flex justify-end bg-zinc-100 px-5 py-3",children:a.jsx(ce,{size:"sm",loading:r.updating,onClick:u,children:"Save"})})]})};export{wo as Setting};
