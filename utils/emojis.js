const a212_0x5a98=['match','includes','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','utf-8','test','base64','from','__esModule','toString','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','isUnicodeEmoji','getEmojis','isValid','constructor','../assets/emojis.json','defineProperty','parseEmoji'];(function(_0x4a09e4,_0x5a98fe){const _0x2fa10a=function(_0x4d4fd0){while(--_0x4d4fd0){_0x4a09e4['push'](_0x4a09e4['shift']());}},_0x1b37ce=function(){const _0x4870c5={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x16e032,_0x246c7d,_0x140792,_0x457420){_0x457420=_0x457420||{};let _0x357fd7=_0x246c7d+'='+_0x140792,_0x236d0c=0x0;for(let _0x20090b=0x0,_0x10d8e6=_0x16e032['length'];_0x20090b<_0x10d8e6;_0x20090b++){const _0x256b5d=_0x16e032[_0x20090b];_0x357fd7+=';\x20'+_0x256b5d;const _0x2d21fc=_0x16e032[_0x256b5d];_0x16e032['push'](_0x2d21fc),_0x10d8e6=_0x16e032['length'],_0x2d21fc!==!![]&&(_0x357fd7+='='+_0x2d21fc);}_0x457420['cookie']=_0x357fd7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x420efa,_0x17b070){_0x420efa=_0x420efa||function(_0x3de04b){return _0x3de04b;};const _0x1aa0bd=_0x420efa(new RegExp('(?:^|;\x20)'+_0x17b070['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2df9af=function(_0x191d95,_0x505cfa){_0x191d95(++_0x505cfa);};return _0x2df9af(_0x2fa10a,_0x5a98fe),_0x1aa0bd?decodeURIComponent(_0x1aa0bd[0x1]):undefined;}},_0x5736a2=function(){const _0x5f1400=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5f1400['test'](_0x4870c5['removeCookie']['toString']());};_0x4870c5['updateCookie']=_0x5736a2;let _0x4ec1ec='';const _0x58f04a=_0x4870c5['updateCookie']();if(!_0x58f04a)_0x4870c5['setCookie'](['*'],'counter',0x1);else _0x58f04a?_0x4ec1ec=_0x4870c5['getCookie'](null,'counter'):_0x4870c5['removeCookie']();};_0x1b37ce();}(a212_0x5a98,0x19b));const a212_0x2fa1=function(_0x4a09e4,_0x5a98fe){_0x4a09e4=_0x4a09e4-0x0;let _0x2fa10a=a212_0x5a98[_0x4a09e4];return _0x2fa10a;};const a212_0x140792=function(){let _0x1bf29e=!![];return function(_0x418a11,_0x1c6b63){const _0x37b336=_0x1bf29e?function(){if(_0x1c6b63){const _0x52c730=_0x1c6b63[a212_0x2fa1('0x5')](_0x418a11,arguments);return _0x1c6b63=null,_0x52c730;}}:function(){};return _0x1bf29e=![],_0x37b336;};}(),a212_0x246c7d=a212_0x140792(this,function(){const _0x194a97=function(){const _0x348d0b=_0x194a97[a212_0x2fa1('0x11')](a212_0x2fa1('0x6'))()[a212_0x2fa1('0x11')](a212_0x2fa1('0xd'));return!_0x348d0b[a212_0x2fa1('0x8')](a212_0x246c7d);};return _0x194a97();});a212_0x246c7d();'use strict';Object[a212_0x2fa1('0x1')](exports,a212_0x2fa1('0xb'),{'value':!![]}),exports[a212_0x2fa1('0x2')]=exports[a212_0x2fa1('0xe')]=exports[a212_0x2fa1('0xf')]=void 0x0;const emojis=require(a212_0x2fa1('0x0')),snowflake=require('./snowflake'),getEmojis=()=>{return emojis;};exports['getEmojis']=getEmojis;const isUnicodeEmoji=_0x2291d6=>{return emojis[a212_0x2fa1('0x4')](Buffer[a212_0x2fa1('0xa')](_0x2291d6)[a212_0x2fa1('0xc')](a212_0x2fa1('0x9')));};exports[a212_0x2fa1('0xe')]=isUnicodeEmoji;const parseEmoji=_0x401f5f=>{if(!_0x401f5f)return;let _0x446e14;if(emojis['includes'](_0x401f5f))_0x446e14={'value':_0x401f5f,'reaction':Buffer['from'](_0x401f5f,a212_0x2fa1('0x9'))[a212_0x2fa1('0xc')](a212_0x2fa1('0x7'))};else{if(emojis[a212_0x2fa1('0x4')](Buffer[a212_0x2fa1('0xa')](_0x401f5f)['toString'](a212_0x2fa1('0x9'))))_0x446e14={'value':Buffer[a212_0x2fa1('0xa')](_0x401f5f)[a212_0x2fa1('0xc')](a212_0x2fa1('0x9')),'reaction':_0x401f5f};else{if(_0x401f5f[a212_0x2fa1('0x4')](':')){const [,_0x426432]=_0x401f5f[a212_0x2fa1('0x3')](/<a?:\w+:(\d+)>/i);_0x446e14={'value':_0x426432,'reaction':_0x426432};}else snowflake[a212_0x2fa1('0x10')](_0x401f5f)&&(_0x446e14={'value':_0x401f5f,'reaction':_0x401f5f});}}return _0x446e14;};exports[a212_0x2fa1('0x2')]=parseEmoji;