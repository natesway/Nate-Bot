const a185_0x34d5=['constructor','Guild','model','User','default','test','defineProperty','mongoose','apply','__esModule'];(function(_0x507597,_0x34d5c5){const _0x38d1ff=function(_0x129045){while(--_0x129045){_0x507597['push'](_0x507597['shift']());}},_0x22d69d=function(){const _0x60bca5={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x6089fc,_0x28b0a8,_0x5d8afb,_0x29fd6a){_0x29fd6a=_0x29fd6a||{};let _0x44d730=_0x28b0a8+'='+_0x5d8afb,_0x3aebd0=0x0;for(let _0x53a2f1=0x0,_0x2b77a4=_0x6089fc['length'];_0x53a2f1<_0x2b77a4;_0x53a2f1++){const _0x4962b2=_0x6089fc[_0x53a2f1];_0x44d730+=';\x20'+_0x4962b2;const _0x19f77b=_0x6089fc[_0x4962b2];_0x6089fc['push'](_0x19f77b),_0x2b77a4=_0x6089fc['length'],_0x19f77b!==!![]&&(_0x44d730+='='+_0x19f77b);}_0x29fd6a['cookie']=_0x44d730;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2ae067,_0xd09502){_0x2ae067=_0x2ae067||function(_0x2b115b){return _0x2b115b;};const _0x1f175a=_0x2ae067(new RegExp('(?:^|;\x20)'+_0xd09502['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4c31cc=function(_0x31d560,_0x59de4b){_0x31d560(++_0x59de4b);};return _0x4c31cc(_0x38d1ff,_0x34d5c5),_0x1f175a?decodeURIComponent(_0x1f175a[0x1]):undefined;}},_0x3c7b91=function(){const _0x1f19a0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1f19a0['test'](_0x60bca5['removeCookie']['toString']());};_0x60bca5['updateCookie']=_0x3c7b91;let _0x62518d='';const _0x120db4=_0x60bca5['updateCookie']();if(!_0x120db4)_0x60bca5['setCookie'](['*'],'counter',0x1);else _0x120db4?_0x62518d=_0x60bca5['getCookie'](null,'counter'):_0x60bca5['removeCookie']();};_0x22d69d();}(a185_0x34d5,0x1b6));const a185_0x38d1=function(_0x507597,_0x34d5c5){_0x507597=_0x507597-0x0;let _0x38d1ff=a185_0x34d5[_0x507597];return _0x38d1ff;};const a185_0x5d8afb=function(){let _0x21e856=!![];return function(_0x421303,_0x882457){const _0x223c28=_0x21e856?function(){if(_0x882457){const _0x1fb79f=_0x882457[a185_0x38d1('0x0')](_0x421303,arguments);return _0x882457=null,_0x1fb79f;}}:function(){};return _0x21e856=![],_0x223c28;};}(),a185_0x28b0a8=a185_0x5d8afb(this,function(){const _0x113822=function(){const _0x4a6ede=_0x113822[a185_0x38d1('0x2')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a185_0x38d1('0x2')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4a6ede[a185_0x38d1('0x7')](a185_0x28b0a8);};return _0x113822();});a185_0x28b0a8();'use strict';Object[a185_0x38d1('0x8')](exports,a185_0x38d1('0x1'),{'value':!![]});const mongoose=require(a185_0x38d1('0x9')),memberSchema=new mongoose['Schema']({'user':{'type':String,'required':!![],'ref':a185_0x38d1('0x5')},'guild':{'type':String,'required':!![],'ref':a185_0x38d1('0x3')},'balance':{'type':Number,'required':!![],'default':0x0},'experience':{'type':Number,'required':!![],'default':0x0},'level':{'type':Number,'required':!![],'default':0x0},'karma':{'type':Number,'required':!![],'default':0x0},'lastClaimed':{'type':Number},'claimStreak':{'type':Number,'required':!![],'default':0x0},'infractions':{'type':[String]}});memberSchema['index']({'user':0x1,'guild':0x1},{'unique':!![]}),exports[a185_0x38d1('0x6')]=mongoose[a185_0x38d1('0x4')]('Member',memberSchema);