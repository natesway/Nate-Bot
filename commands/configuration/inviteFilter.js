const a21_0x6966=['@bastion/tesseract','inviteFilter\x20--disable','locale','author','disable','inviteFilter\x20--no-infraction','test','inviteFilter','catch','exports','RED','filters','info','enable','inviteFilter\x20--infraction','filterInfractionDisabled','GREEN','enabled','infraction','apply','inviteFilter\x20--enable','channel','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Invite\x20Filter\x20in\x20the\x20server.\x20And\x20it\x20also\x20allows\x20you\x20to\x20configure\x20if\x20violation\x20of\x20this\x20filter\x20should\x20be\x20considered\x20an\x20infraction.','guild','document','language','save','Constants','inviteFilterEnable','exec','constructor','MANAGE_GUILD','client','IRIS','inviteFilterEnabled','COLORS','getString','return\x20/\x22\x20+\x20this\x20+\x20\x22/','inviteFilterDisabled'];(function(_0x31bfa0,_0x6966b1){const _0x201b2e=function(_0x4691d7){while(--_0x4691d7){_0x31bfa0['push'](_0x31bfa0['shift']());}},_0x2f8441=function(){const _0x313300={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4905ab,_0x5108b7,_0x4f8913,_0x530565){_0x530565=_0x530565||{};let _0x429a4e=_0x5108b7+'='+_0x4f8913,_0x17fc8d=0x0;for(let _0x140586=0x0,_0x1f2430=_0x4905ab['length'];_0x140586<_0x1f2430;_0x140586++){const _0x54a5b8=_0x4905ab[_0x140586];_0x429a4e+=';\x20'+_0x54a5b8;const _0x7ae21=_0x4905ab[_0x54a5b8];_0x4905ab['push'](_0x7ae21),_0x1f2430=_0x4905ab['length'],_0x7ae21!==!![]&&(_0x429a4e+='='+_0x7ae21);}_0x530565['cookie']=_0x429a4e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2f5c5b,_0x33572c){_0x2f5c5b=_0x2f5c5b||function(_0x43d411){return _0x43d411;};const _0x485e64=_0x2f5c5b(new RegExp('(?:^|;\x20)'+_0x33572c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x584e02=function(_0x560f71,_0x31290d){_0x560f71(++_0x31290d);};return _0x584e02(_0x201b2e,_0x6966b1),_0x485e64?decodeURIComponent(_0x485e64[0x1]):undefined;}},_0x22159a=function(){const _0x2cf076=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2cf076['test'](_0x313300['removeCookie']['toString']());};_0x313300['updateCookie']=_0x22159a;let _0x3b5eb8='';const _0x2024fc=_0x313300['updateCookie']();if(!_0x2024fc)_0x313300['setCookie'](['*'],'counter',0x1);else _0x2024fc?_0x3b5eb8=_0x313300['getCookie'](null,'counter'):_0x313300['removeCookie']();};_0x2f8441();}(a21_0x6966,0x135));const a21_0x201b=function(_0x31bfa0,_0x6966b1){_0x31bfa0=_0x31bfa0-0x0;let _0x201b2e=a21_0x6966[_0x31bfa0];return _0x201b2e;};const a21_0x4f8913=function(){let _0x5365aa=!![];return function(_0x59f15f,_0x576c7c){const _0x48f526=_0x5365aa?function(){if(_0x576c7c){const _0x3201b2=_0x576c7c[a21_0x201b('0x16')](_0x59f15f,arguments);return _0x576c7c=null,_0x3201b2;}}:function(){};return _0x5365aa=![],_0x48f526;};}(),a21_0x5108b7=a21_0x4f8913(this,function(){const _0x304bb8=function(){const _0x533826=_0x304bb8[a21_0x201b('0x21')](a21_0x201b('0x1'))()[a21_0x201b('0x21')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x533826[a21_0x201b('0x9')](a21_0x5108b7);};return _0x304bb8();});a21_0x5108b7();'use strict';const tesseract_1=require(a21_0x201b('0x3'));module[a21_0x201b('0xc')]=class InviteFilterCommand extends tesseract_1['Command']{constructor(){super('inviteFilter',{'description':a21_0x201b('0x19'),'triggers':[],'arguments':{'alias':{'disable':['d'],'enable':['e'],'infraction':['i']},'boolean':['disable',a21_0x201b('0x10'),a21_0x201b('0x15')]},'scope':a21_0x201b('0x1a'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a21_0x201b('0x22')],'syntax':[a21_0x201b('0xa'),a21_0x201b('0x17'),a21_0x201b('0x4'),a21_0x201b('0x11'),a21_0x201b('0x8')]}),this[a21_0x201b('0x20')]=async(_0x2cae0e,_0x3c6105)=>{const _0x2abb13=_0x2cae0e[a21_0x201b('0x1a')];_0x2abb13['document']['filters']={..._0x2abb13['document']['filters'],'inviteFilter':{'enabled':_0x3c6105[a21_0x201b('0x7')]?undefined:_0x3c6105['enable']||_0x2abb13[a21_0x201b('0x1b')]['filters']&&_0x2abb13['document']['filters'][a21_0x201b('0xa')]&&_0x2abb13['document']['filters'][a21_0x201b('0xa')][a21_0x201b('0x14')]?!![]:undefined,'infraction':_0x3c6105['infraction']===![]?undefined:_0x3c6105[a21_0x201b('0x15')]||_0x2abb13[a21_0x201b('0x1b')]['filters']&&_0x2abb13[a21_0x201b('0x1b')][a21_0x201b('0xe')][a21_0x201b('0xa')]&&_0x2abb13[a21_0x201b('0x1b')][a21_0x201b('0xe')]['inviteFilter'][a21_0x201b('0x15')]?!![]:undefined}},await _0x2abb13[a21_0x201b('0x1b')][a21_0x201b('0x1d')](),await _0x2cae0e[a21_0x201b('0x18')]['send']({'embed':{'color':_0x3c6105[a21_0x201b('0x10')]?tesseract_1[a21_0x201b('0x1e')][a21_0x201b('0x26')][a21_0x201b('0x13')]:_0x3c6105[a21_0x201b('0x7')]?tesseract_1['Constants'][a21_0x201b('0x26')][a21_0x201b('0xd')]:tesseract_1[a21_0x201b('0x1e')][a21_0x201b('0x26')][a21_0x201b('0x24')],'description':this[a21_0x201b('0x23')][a21_0x201b('0x5')][a21_0x201b('0x0')](_0x2cae0e[a21_0x201b('0x1a')][a21_0x201b('0x1b')][a21_0x201b('0x1c')],a21_0x201b('0xf'),_0x3c6105['enable']?a21_0x201b('0x1f'):_0x3c6105[a21_0x201b('0x7')]?'inviteFilterDisable':_0x2abb13[a21_0x201b('0x1b')][a21_0x201b('0xe')][a21_0x201b('0xa')][a21_0x201b('0x14')]?a21_0x201b('0x25'):a21_0x201b('0x2'),_0x2cae0e[a21_0x201b('0x6')]['tag']),'footer':{'text':_0x2abb13[a21_0x201b('0x1b')][a21_0x201b('0xe')][a21_0x201b('0xa')][a21_0x201b('0x14')]?this['client'][a21_0x201b('0x5')][a21_0x201b('0x0')](_0x2cae0e[a21_0x201b('0x1a')][a21_0x201b('0x1b')]['language'],a21_0x201b('0xf'),_0x2abb13[a21_0x201b('0x1b')][a21_0x201b('0xe')][a21_0x201b('0xa')][a21_0x201b('0x15')]?'filterInfractionEnabled':a21_0x201b('0x12')):''}}})[a21_0x201b('0xb')](()=>{});};}};