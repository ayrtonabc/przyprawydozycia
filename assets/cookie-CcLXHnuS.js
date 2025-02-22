var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.parse=function(e,i){const t=new a,r=e.length;if(r<2)return t;const n=(null==i?void 0:i.decode)||c;let o=0;do{const i=e.indexOf("=",o);if(-1===i)break;const a=e.indexOf(";",o),c=-1===a?r:a;if(i>c){o=e.lastIndexOf(";",i-1)+1;continue}const p=s(e,o,i),d=u(e,i,p),f=e.slice(p,d);if(void 0===t[f]){let r=s(e,i+1,c),o=u(e,c,r);const a=n(e.slice(r,o));t[f]=a}o=c+1}while(o<r);return t},e.serialize=function(e,a,s){const u=(null==s?void 0:s.encode)||encodeURIComponent;if(!i.test(e))throw new TypeError(`argument name is invalid: ${e}`);const c=u(a);if(!t.test(c))throw new TypeError(`argument val is invalid: ${a}`);let p=e+"="+c;if(!s)return p;if(void 0!==s.maxAge){if(!Number.isInteger(s.maxAge))throw new TypeError(`option maxAge is invalid: ${s.maxAge}`);p+="; Max-Age="+s.maxAge}if(s.domain){if(!r.test(s.domain))throw new TypeError(`option domain is invalid: ${s.domain}`);p+="; Domain="+s.domain}if(s.path){if(!n.test(s.path))throw new TypeError(`option path is invalid: ${s.path}`);p+="; Path="+s.path}if(s.expires){if(!function(e){return"[object Date]"===o.call(e)}(s.expires)||!Number.isFinite(s.expires.valueOf()))throw new TypeError(`option expires is invalid: ${s.expires}`);p+="; Expires="+s.expires.toUTCString()}s.httpOnly&&(p+="; HttpOnly");s.secure&&(p+="; Secure");s.partitioned&&(p+="; Partitioned");if(s.priority){switch("string"==typeof s.priority?s.priority.toLowerCase():void 0){case"low":p+="; Priority=Low";break;case"medium":p+="; Priority=Medium";break;case"high":p+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${s.priority}`)}}if(s.sameSite){switch("string"==typeof s.sameSite?s.sameSite.toLowerCase():s.sameSite){case!0:case"strict":p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"none":p+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${s.sameSite}`)}}return p};const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,n=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function s(e,i,t){do{const t=e.charCodeAt(i);if(32!==t&&9!==t)return i}while(++i<t);return t}function u(e,i,t){for(;i>t;){const t=e.charCodeAt(--i);if(32!==t&&9!==t)return i+1}return t}function c(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(i){return e}}
