/**
 * webpack-key-parse v0.0.3 
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).WebpackKeyParse={})}(this,(function(e){"use strict";e.parse=e=>{0===e.indexOf("./")&&(e=e.slice(2));const t=e.lastIndexOf("."),n=e.lastIndexOf("/");let s="",i="",d="",r="",f="";return s=e.slice(t),n>-1&&(i=e.slice(0,n)),{name:d=e.slice(n+1,t),ext:s,base:r=d+s,dir:i,entry:f=i?i+"/"+d:d,dir_dash:i.replace(/\//g,"-"),entry_dash:f.replace(/\//g,"-")}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=webpack-key-parse.js.map
