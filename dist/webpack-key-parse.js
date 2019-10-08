/**
 * webpack-key-parse v0.0.1 
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).WebpackKeyParse={})}(this,(function(e){"use strict";e.parse=e=>{const t=(e=e.slice(2)).lastIndexOf("."),s=e.lastIndexOf("/");let n="",i="",r="",d="",c="";return n=e.slice(t),s>-1&&(i=e.slice(0,s)),{name:r=e.slice(s+1,t),ext:n,base:d=r+n,dir:i,entry:c=i?i+"/"+r:r,dir_dash:i.replace(/\//g,"-"),entry_dash:c.replace(/\//g,"-")}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=webpack-key-parse.js.map
