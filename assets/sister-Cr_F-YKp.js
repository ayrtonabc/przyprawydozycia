var n=function(){var n={},r={};return n.on=function(n,e){var a={name:n,handler:e};return r[n]=r[n]||[],r[n].unshift(a),a},n.off=function(n){var e=r[n.name].indexOf(n);-1!==e&&r[n.name].splice(e,1)},n.trigger=function(n,e){var a,f=r[n];if(f)for(a=f.length;a--;)f[a].handler(e)},n};
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/export{n as s};
