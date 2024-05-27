import './polyfills.server.mjs';
import{A as s,B as d,C as A,D as l,E as g,F as v,H as be,N as De,O as Me,P as ue,R as Ee,S as Ae,V as Fe,Z as we,a as ye,aa as xe,b as _e,c as Ce,d as T,e as V,f as ee,g as te,h as D,i as M,j as m,k as ie,l as h,m as j,n as S,o as ne,p as I,q as R,r as u,s as re,t as f,u as oe,v as Ve,w as se,x as ae,y as le,z as a}from"./chunk-OKCLTBU7.mjs";import{a as C,b as E}from"./chunk-VVCT4QZE.mjs";var Se=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-header"]],standalone:!0,features:[v],decls:4,vars:0,consts:[[1,"header"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"h2"),l(2,"Freyja's garden studios"),s(),d(3,"p"),s())},styles:["div.header[_ngcontent-%COMP%]{background-color:#32aabe;top:0;left:0;position:fixed;width:100%;min-height:75px}"]});let t=e;return t})();var je=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(u(re),u(ne))},e.\u0275dir=h({type:e});let t=e;return t})(),Re=(()=>{let e=class e extends je{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=S(e)))(o||e)}})(),e.\u0275dir=h({type:e,features:[f]});let t=e;return t})(),ce=new D(""),vt={provide:ce,useExisting:V(()=>he),multi:!0},he=(()=>{let e=class e extends Re{writeValue(i){this.setProperty("checked",i)}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=S(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(r,o){r&1&&A("change",function(_){return o.onChange(_.target.checked)})("blur",function(){return o.onTouched()})},features:[g([vt]),f]});let t=e;return t})(),yt={provide:ce,useExisting:V(()=>Z),multi:!0};function _t(){let t=ue()?ue().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ct=new D(""),Z=(()=>{let e=class e extends je{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!_t())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(u(re),u(ne),u(Ct,8))},e.\u0275dir=h({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&A("input",function(_){return o._handleInput(_.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(_){return o._compositionEnd(_.target.value)})},features:[g([yt]),f]});let t=e;return t})();function b(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Be(t){return t!=null&&typeof t.length=="number"}var G=new D(""),Y=new D(""),Vt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,x=class{static min(e){return bt(e)}static max(e){return Dt(e)}static required(e){return Ue(e)}static requiredTrue(e){return Mt(e)}static email(e){return Et(e)}static minLength(e){return At(e)}static maxLength(e){return Ft(e)}static pattern(e){return wt(e)}static nullValidator(e){return U(e)}static compose(e){return ze(e)}static composeAsync(e){return Ye(e)}};function bt(t){return e=>{if(b(e.value)||b(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function Dt(t){return e=>{if(b(e.value)||b(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Ue(t){return b(t.value)?{required:!0}:null}function Mt(t){return t.value===!0?null:{required:!0}}function Et(t){return b(t.value)||Vt.test(t.value)?null:{email:!0}}function At(t){return e=>b(e.value)||!Be(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ft(t){return e=>Be(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function wt(t){if(!t)return U;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(b(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function U(t){return null}function He(t){return t!=null}function Le(t){return be(t)?ye(t):t}function $e(t){let e={};return t.forEach(n=>{e=n!=null?C(C({},e),n):e}),Object.keys(e).length===0?null:e}function We(t,e){return e.map(n=>n(t))}function xt(t){return!t.validate}function qe(t){return t.map(e=>xt(e)?e:n=>e.validate(n))}function ze(t){if(!t)return null;let e=t.filter(He);return e.length==0?null:function(n){return $e(We(n,e))}}function Ze(t){return t!=null?ze(qe(t)):null}function Ye(t){if(!t)return null;let e=t.filter(He);return e.length==0?null:function(n){let i=We(n,e).map(Le);return Ce(i).pipe(_e($e))}}function Xe(t){return t!=null?Ye(qe(t)):null}function Ie(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ke(t){return t._rawValidators}function Je(t){return t._rawAsyncValidators}function de(t){return t?Array.isArray(t)?t:[t]:[]}function H(t,e){return Array.isArray(t)?t.includes(e):t===e}function Oe(t,e){let n=de(e);return de(t).forEach(r=>{H(n,r)||n.push(r)}),n}function Ne(t,e){return de(e).filter(n=>!H(t,n))}var L=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ze(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Xe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},p=class extends L{get formDirective(){return null}get path(){return null}},P=class extends L{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},$=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},St={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Fi=E(C({},St),{"[class.ng-submitted]":"isSubmitted"}),Qe=(()=>{let e=class e extends ${constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u(P,2))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ae("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[f]});let t=e;return t})(),et=(()=>{let e=class e extends ${constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u(p,10))},e.\u0275dir=h({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ae("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[f]});let t=e;return t})();var O="VALID",B="INVALID",w="PENDING",N="DISABLED";function tt(t){return(X(t)?t.validators:t)||null}function It(t){return Array.isArray(t)?Ze(t):t||null}function it(t,e){return(X(e)?e.asyncValidators:t)||null}function Ot(t){return Array.isArray(t)?Xe(t):t||null}function X(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Nt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new T(1e3,"");if(!i[n])throw new T(1001,"")}function Pt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new T(1002,"")})}var W=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===B}get pending(){return this.status==w}get disabled(){return this.status===N}get enabled(){return this.status!==N}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Oe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Oe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ne(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}hasValidator(e){return H(this._rawValidators,e)}hasAsyncValidator(e){return H(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=w,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=N,this.errors=null,this._forEachChild(i=>{i.disable(E(C({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(E(C({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(i=>{i.enable(E(C({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(E(C({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===w)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=w,this._hasOwnPendingAsyncValidator=!0;let n=Le(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new I,this.statusChanges=new I}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(w)?w:this._anyControlsHaveStatus(B)?B:O}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){X(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=It(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ot(this._rawAsyncValidators)}},k=class extends W{constructor(e,n,i){super(tt(n),it(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Pt(this,!0,e),Object.keys(e).forEach(i=>{Nt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var nt=new D("CallSetDisabledState",{providedIn:"root",factory:()=>fe}),fe="always";function pe(t,e){return[...e.path,t]}function Pe(t,e,n=fe){me(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Gt(t,e),jt(t,e),Tt(t,e),kt(t,e)}function ke(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),z(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function q(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function kt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function me(t,e){let n=Ke(t);e.validator!==null?t.setValidators(Ie(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Je(t);e.asyncValidator!==null?t.setAsyncValidators(Ie(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();q(e._rawValidators,r),q(e._rawAsyncValidators,r)}function z(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Ke(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=Je(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return q(e._rawValidators,i),q(e._rawAsyncValidators,i),n}function Gt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&rt(t,e)})}function Tt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&rt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function rt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function jt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Rt(t,e){t==null,me(t,e)}function Bt(t,e){return z(t,e)}function Ut(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Ht(t){return Object.getPrototypeOf(t.constructor)===Re}function Lt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function $t(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===Z?n=o:Ht(o)?i=o:r=o}),r||i||n||null}function Wt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ge(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Te(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var y=class extends W{constructor(e=null,n,i){super(tt(n),it(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Te(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ge(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ge(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Te(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var qt=t=>t instanceof y,zt=(()=>{let e=class e extends p{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return pe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=S(e)))(o||e)}})(),e.\u0275dir=h({type:e,features:[f]});let t=e;return t})();var ot=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var st=new D("");var Zt={provide:p,useExisting:V(()=>K)},K=(()=>{let e=class e extends p{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new I,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Pe(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){ke(i.control||null,i,!1),Wt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Lt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(ke(r||null,i),qt(o)&&(Pe(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Rt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Bt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){me(this.form,this),this._oldForm&&z(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(u(G,10),u(Y,10),u(nt,8))},e.\u0275dir=h({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&A("submit",function(_){return o.onSubmit(_)})("reset",function(){return o.onReset()})},inputs:{form:[M.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[g([Zt]),f,j]});let t=e;return t})(),Yt={provide:p,useExisting:V(()=>J)},J=(()=>{let e=class e extends zt{constructor(i,r,o){super(),this.name=null,this._parent=i,this._setValidators(r),this._setAsyncValidators(o)}_checkParentType(){lt(this._parent)}};e.\u0275fac=function(r){return new(r||e)(u(p,13),u(G,10),u(Y,10))},e.\u0275dir=h({type:e,selectors:[["","formGroupName",""]],inputs:{name:[M.None,"formGroupName","name"]},features:[g([Yt]),f]});let t=e;return t})(),Xt={provide:p,useExisting:V(()=>at)},at=(()=>{let e=class e extends p{constructor(i,r,o){super(),this.name=null,this._parent=i,this._setValidators(r),this._setAsyncValidators(o)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return pe(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){lt(this._parent)}};e.\u0275fac=function(r){return new(r||e)(u(p,13),u(G,10),u(Y,10))},e.\u0275dir=h({type:e,selectors:[["","formArrayName",""]],inputs:{name:[M.None,"formArrayName","name"]},features:[g([Xt]),f]});let t=e;return t})();function lt(t){return!(t instanceof J)&&!(t instanceof K)&&!(t instanceof at)}var Kt={provide:P,useExisting:V(()=>ge)},ge=(()=>{let e=class e extends P{set isDisabled(i){}constructor(i,r,o,c,_){super(),this._ngModelWarningConfig=_,this._added=!1,this.name=null,this.update=new I,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=$t(this,c)}ngOnChanges(i){this._added||this._setUpControl(),Ut(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return pe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(u(p,13),u(G,10),u(Y,10),u(ce,10),u(st,8))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""]],inputs:{name:[M.None,"formControlName","name"],isDisabled:[M.None,"disabled","isDisabled"],model:[M.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[g([Kt]),f,j]});let t=e;return t})();var Jt=(()=>{let e=class e{constructor(){this._validator=U}ngOnChanges(i){if(this.inputName in i){let r=this.normalizeInput(i[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):U,this._onChange&&this._onChange()}}validate(i){return this._validator(i)}registerOnValidatorChange(i){this._onChange=i}enabled(i){return i!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=h({type:e,features:[j]});let t=e;return t})();var Qt={provide:G,useExisting:V(()=>ve),multi:!0};var ve=(()=>{let e=class e extends Jt{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=De,this.createValidator=i=>Ue}enabled(i){return i}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=S(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,o){r&2&&Ve("required",o._enabled?"":null)},inputs:{required:"required"},features:[g([Qt]),f]});let t=e;return t})();var ei=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ie({type:e}),e.\u0275inj=te({});let t=e;return t})();var ut=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:st,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:nt,useValue:i.callSetDisabledState??fe}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ie({type:e}),e.\u0275inj=te({imports:[ei]});let t=e;return t})();var Q=(()=>{let e=class e{constructor(){}SubmitEmail(i,r,o){let c={Services:i,Email:r,Adress:o};return console.log(c,r,o),c}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ee({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function ni(t,e){t&1&&(a(0,"p"),l(1,"Email and is required and must be of the form xxx@xxx.xxx."),s())}function ri(t,e){t&1&&(a(0,"p"),l(1,"Adress and is required."),s())}var dt=(()=>{let e=class e{constructor(i){this.emailFormService=i,this.emailRegex=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,this.emailForm=new k({services:new k({services_lm:new y(!1),service_lawnEdging:new y(!1),service_rockWall:new y(!1),service_bushMunch:new y(!1),service_treeTrim:new y(!1),service_garden:new y(!1)}),email:new y("",[x.required,x.pattern(this.emailRegex)]),adress:new y("",[x.required])})}submitEmail(){let i=this.emailForm.value;i.services&&i.email&&i.adress&&(this.emailFormService.SubmitEmail(i.services,i.email,i.adress),console.log("Form is submitted")),console.log(i),console.log("Form is submitted")}};e.\u0275fac=function(r){return new(r||e)(u(Q))},e.\u0275cmp=m({type:e,selectors:[["app-submit-form"]],standalone:!0,features:[g([Q]),v],decls:43,vars:4,consts:[[1,"emailForm",3,"formGroup"],["formGroupName","services"],["id","service_lawnMowing","type","checkbox","formControlName","services_lm"],["id","service_lawnEdging","type","checkbox","formControlName","service_lawnEdging"],["id","service_rockWall","type","checkbox","formControlName","service_rockWall"],["id","service_bushMunch","type","checkbox","formControlName","service_bushMunch"],["id","service_treeTrim","type","checkbox","formControlName","service_treeTrim"],["id","service_garden","type","checkbox","formControlName","service_garden"],[1,"form-field"],["id","email","type","text","formControlName","email","required",""],["id","adress","type","text","formControlName","adress","required",""],[1,"form-buttons"],[1,"button","button-primary",3,"click","disabled"]],template:function(r,o){r&1&&(a(0,"form",0)(1,"label"),l(2,"Service request"),s(),a(3,"div",1)(4,"h2"),l(5,"Services:"),s(),d(6,"input",2),a(7,"label"),l(8,"lawn mowing:"),s(),d(9,"br")(10,"input",3),a(11,"label"),l(12,"lawn edging:"),s(),d(13,"br")(14,"input",4),a(15,"label"),l(16,"rock wall:"),s(),d(17,"br")(18,"input",5),a(19,"label"),l(20,"bush munching:"),s(),d(21,"br")(22,"input",6),a(23,"label"),l(24,"tree triming:"),s(),d(25,"br")(26,"input",7),a(27,"label"),l(28,"gardening:"),s(),d(29,"br"),s(),a(30,"div",8)(31,"label"),l(32,"Email:"),s(),d(33,"input",9),oe(34,ni,2,0,"p"),a(35,"div",8)(36,"label"),l(37,"Adress:"),s(),d(38,"input",10),oe(39,ri,2,0,"p"),s()(),a(40,"div",11)(41,"button",12),A("click",function(){return o.submitEmail()}),l(42,"Send service request email"),s()()()),r&2&&(se("formGroup",o.emailForm),R(34),le(34,o.emailForm.controls.email.invalid?34:-1),R(5),le(39,o.emailForm.controls.adress.invalid?39:-1),R(2),se("disabled",!o.emailForm.valid))},dependencies:[ut,ot,Z,he,Qe,et,ve,K,ge,J],styles:["form.emailForm[_ngcontent-%COMP%]{border:3px solid #f1f1f1}"]});let t=e;return t})();var ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-footer"]],standalone:!0,features:[v],decls:4,vars:0,consts:[[1,"footer"],[1,"copyright"]],template:function(r,o){r&1&&(a(0,"div",0),d(1,"h1"),a(2,"p",1),l(3," \xA9 2024 Gerald Young"),s()())},styles:["div.footer[_ngcontent-%COMP%]{background-color:#32aabe;bottom:0;left:0;position:relative;width:100%;min-height:75px}p.copyright[_ngcontent-%COMP%]{color:#696969}"]});let t=e;return t})();var ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-home"]],standalone:!0,features:[v],decls:31,vars:0,consts:[[1,"main"],[1,"title"],[1,"imgText"],[1,"background"],[1,"add_copy"],[1,"submit_form"]],template:function(r,o){r&1&&(d(0,"app-header"),a(1,"div",0)(2,"div",1)(3,"h1",2),l(4,"Fryer's garden studio Service Request Form"),s(),d(5,"div",3),s(),a(6,"div",4)(7,"p"),l(8," Got an unruly lawn? An oversized bush? A tree that needs pruning? With our expert team of bush munchers, we can transform your overgrown mess into a butiful lsuh, habital landsape. "),s(),d(9,"br"),a(10,"p"),l(11,"we offer the following services"),s(),a(12,"li")(13,"p"),l(14,"lawn mowing: 10$ per hour."),s(),a(15,"p"),l(16,"lawn edging: 20$."),s(),a(17,"p"),l(18,"rock wall: 100$."),s(),a(19,"p"),l(20,"bush munching: 69$ per hour, max four hours."),s(),a(21,"p"),l(22,"tree triming: 30$ per hour."),s(),a(23,"p"),l(24,"gardening: 15$ per hour."),s()()(),a(25,"div",5)(26,"p"),l(27," Please submit the services you want, your email, and your adress. A service request will be created and emailed from your email to our office email and you will hear from us shortly. "),s(),d(28,"br")(29,"app-submit-form"),s(),d(30,"app-footer"),s())},dependencies:[Se,dt,ct],styles:["div.main[_ngcontent-%COMP%]{text-align:center;display:block;padding-top:75px;height:100vh}div.background[_ngcontent-%COMP%]{background:url(https://gerald-young.github.io/spa_angular_base/assets/serverRoom.jpg);background-size:100vw 200px;width:100vw;height:200px;background-repeat:no-repeat;min-height:200px;place-content:center;filter:blur(5px);grid-area:1 / 1;z-index:-2}h1.imgText[_ngcontent-%COMP%]{grid-area:1 / 1;z-index:-1}div.title[_ngcontent-%COMP%]{font-weight:700;border:3px solid #f1f1f1;display:grid;place-content:center;align-items:center}div.add_copy[_ngcontent-%COMP%], div.submit_form[_ngcontent-%COMP%]{min-height:40vh;place-content:center}li[_ngcontent-%COMP%]{list-style:none}h2[_ngcontent-%COMP%]{margin:0}"]});let t=e;return t})();var ft=(()=>{let e=class e{constructor(){this.title="spa_client"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[v],decls:2,vars:0,template:function(r,o){r&1&&d(0,"app-home")(1,"router-outlet")},dependencies:[we,ht]});let t=e;return t})();var pt=[];var mt={providers:[xe(pt),Ae()]};var oi={providers:[Fe()]},gt=Me(mt,oi);var si=()=>Ee(ft,gt),Qi=si;export{Qi as a};
