const a72_0x2291=['send','return\x20/\x22\x20+\x20this\x20+\x20\x22/','COLOR','resolveRole','Command','default','delete','BASTION_ERROR_TYPE','author','join','GREEN','info','tag','color','name','rename','roles\x20--rename\x20ROLE\x20--name\x20NAME\x20--\x20REASON','locale','hoist','mentionable','length','resolver','client','@bastion/tesseract','create','roles\x20--delete\x20ROLE\x20--\x20REASON','document','DiscordError','COLORS','INVALID_COMMAND_SYNTAX','test','getString','exec','catch','../../utils/errors','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','MANAGE_ROLES','roles\x20--create\x20NAME\x20--mentionable\x20--\x20REASON','Constants','guild','roles\x20--create\x20NAME\x20--color\x20COLOR\x20--\x20REASON','channel','roles','constructor','roleRename','language'];(function(_0x10251d,_0x2291fd){const _0x230c21=function(_0x57c3e0){while(--_0x57c3e0){_0x10251d['push'](_0x10251d['shift']());}},_0x34fc78=function(){const _0x382635={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x23e4f9,_0x59e6e9,_0x514aac,_0x163a13){_0x163a13=_0x163a13||{};let _0x4d1ac2=_0x59e6e9+'='+_0x514aac,_0x1b5e37=0x0;for(let _0x1ddc79=0x0,_0x177140=_0x23e4f9['length'];_0x1ddc79<_0x177140;_0x1ddc79++){const _0x1426b2=_0x23e4f9[_0x1ddc79];_0x4d1ac2+=';\x20'+_0x1426b2;const _0xddfee6=_0x23e4f9[_0x1426b2];_0x23e4f9['push'](_0xddfee6),_0x177140=_0x23e4f9['length'],_0xddfee6!==!![]&&(_0x4d1ac2+='='+_0xddfee6);}_0x163a13['cookie']=_0x4d1ac2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3fd92e,_0x556a4c){_0x3fd92e=_0x3fd92e||function(_0x10275d){return _0x10275d;};const _0x2c6a3f=_0x3fd92e(new RegExp('(?:^|;\x20)'+_0x556a4c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x49fb8b=function(_0x3a2a27,_0x55002d){_0x3a2a27(++_0x55002d);};return _0x49fb8b(_0x230c21,_0x2291fd),_0x2c6a3f?decodeURIComponent(_0x2c6a3f[0x1]):undefined;}},_0x2be99e=function(){const _0x2a8db6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2a8db6['test'](_0x382635['removeCookie']['toString']());};_0x382635['updateCookie']=_0x2be99e;let _0x2e1377='';const _0x219007=_0x382635['updateCookie']();if(!_0x219007)_0x382635['setCookie'](['*'],'counter',0x1);else _0x219007?_0x2e1377=_0x382635['getCookie'](null,'counter'):_0x382635['removeCookie']();};_0x34fc78();}(a72_0x2291,0xa7));const a72_0x230c=function(_0x10251d,_0x2291fd){_0x10251d=_0x10251d-0x0;let _0x230c21=a72_0x2291[_0x10251d];return _0x230c21;};const a72_0x514aac=function(){let _0x1a7509=!![];return function(_0x5d8e95,_0x266118){const _0x1e1cd2=_0x1a7509?function(){if(_0x266118){const _0x341f28=_0x266118['apply'](_0x5d8e95,arguments);return _0x266118=null,_0x341f28;}}:function(){};return _0x1a7509=![],_0x1e1cd2;};}(),a72_0x59e6e9=a72_0x514aac(this,function(){const _0x19300a=function(){const _0x22cd02=_0x19300a[a72_0x230c('0xe')](a72_0x230c('0x12'))()[a72_0x230c('0xe')](a72_0x230c('0x6'));return!_0x22cd02[a72_0x230c('0x1')](a72_0x59e6e9);};return _0x19300a();});a72_0x59e6e9();'use strict';const tesseract_1=require(a72_0x230c('0x28')),confirmation_1=require('../../utils/confirmation'),errors=require(a72_0x230c('0x5'));module['exports']=class RolesCommand extends tesseract_1[a72_0x230c('0x15')]{constructor(){super(a72_0x230c('0xd'),{'description':'It\x20allows\x20you\x20create,\x20delete\x20and\x20update\x20roles\x20in\x20the\x20server.','triggers':[],'arguments':{'array':[a72_0x230c('0x29'),a72_0x230c('0x17'),a72_0x230c('0x1f'),a72_0x230c('0x20')],'boolean':[a72_0x230c('0x23'),a72_0x230c('0x24')],'string':[a72_0x230c('0x29'),a72_0x230c('0x17'),a72_0x230c('0x20')],'coerce':{'color':tesseract_1[a72_0x230c('0x9')]['ArgumentTypes'][a72_0x230c('0x13')]}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a72_0x230c('0x7')],'userPermissions':[a72_0x230c('0x7')],'syntax':['roles\x20--create\x20NAME\x20--\x20REASON',a72_0x230c('0xb'),'roles\x20--create\x20NAME\x20--hoist\x20--\x20REASON',a72_0x230c('0x8'),a72_0x230c('0x21'),a72_0x230c('0x2a')]}),this[a72_0x230c('0x3')]=async(_0x14f918,_0x1e9dca)=>{const _0x31313f=_0x1e9dca['_']['join']('\x20')||'-';if(_0x1e9dca[a72_0x230c('0x29')]&&_0x1e9dca[a72_0x230c('0x29')][a72_0x230c('0x25')]){const _0x502590=await _0x14f918[a72_0x230c('0xa')][a72_0x230c('0xd')][a72_0x230c('0x29')]({'data':{'name':_0x1e9dca[a72_0x230c('0x29')][a72_0x230c('0x1a')]('\x20'),'color':_0x1e9dca[a72_0x230c('0x1e')],'hoist':_0x1e9dca[a72_0x230c('0x23')],'mentionable':_0x1e9dca[a72_0x230c('0x24')]},'reason':_0x31313f});return await _0x14f918['channel'][a72_0x230c('0x11')]({'embed':{'color':tesseract_1['Constants'][a72_0x230c('0x2d')][a72_0x230c('0x1b')],'description':this['client'][a72_0x230c('0x22')][a72_0x230c('0x2')](_0x14f918['guild'][a72_0x230c('0x2b')]['language'],a72_0x230c('0x1c'),'roleCreate',_0x14f918[a72_0x230c('0x19')][a72_0x230c('0x1d')],_0x502590[a72_0x230c('0x1f')],_0x31313f)}})[a72_0x230c('0x4')](()=>{});}if(_0x1e9dca[a72_0x230c('0x17')]&&_0x1e9dca[a72_0x230c('0x17')]['length']){const _0x3bf142=this[a72_0x230c('0x27')][a72_0x230c('0x26')][a72_0x230c('0x14')](_0x14f918[a72_0x230c('0xa')],_0x1e9dca[a72_0x230c('0x17')]['join']('\x20')),_0x139a89=await confirmation_1[a72_0x230c('0x16')](_0x14f918,this[a72_0x230c('0x27')][a72_0x230c('0x22')][a72_0x230c('0x2')](_0x14f918[a72_0x230c('0xa')]['document'][a72_0x230c('0x10')],a72_0x230c('0x1c'),'roleDeleteQuestion',_0x14f918['author'][a72_0x230c('0x1d')],_0x3bf142[a72_0x230c('0x1f')]));if(_0x139a89)return await _0x3bf142[a72_0x230c('0x17')](_0x31313f),await _0x14f918[a72_0x230c('0xc')][a72_0x230c('0x11')]({'embed':{'color':tesseract_1[a72_0x230c('0x9')][a72_0x230c('0x2d')][a72_0x230c('0x1b')],'description':this[a72_0x230c('0x27')][a72_0x230c('0x22')]['getString'](_0x14f918[a72_0x230c('0xa')][a72_0x230c('0x2b')][a72_0x230c('0x10')],a72_0x230c('0x1c'),'roleDelete',_0x14f918[a72_0x230c('0x19')]['tag'],_0x3bf142['name'],_0x31313f)}})[a72_0x230c('0x4')](()=>{});return!![];}if(_0x1e9dca[a72_0x230c('0x20')]&&_0x1e9dca[a72_0x230c('0x20')][a72_0x230c('0x25')]&&_0x1e9dca[a72_0x230c('0x1f')]&&_0x1e9dca[a72_0x230c('0x1f')][a72_0x230c('0x25')]){let _0x51e352=this[a72_0x230c('0x27')][a72_0x230c('0x26')][a72_0x230c('0x14')](_0x14f918['guild'],_0x1e9dca[a72_0x230c('0x20')][a72_0x230c('0x1a')]('\x20'));return _0x51e352=await _0x51e352['edit']({'name':_0x1e9dca[a72_0x230c('0x1f')][a72_0x230c('0x1a')]('\x20')}),await _0x14f918[a72_0x230c('0xc')]['send']({'embed':{'color':tesseract_1[a72_0x230c('0x9')][a72_0x230c('0x2d')][a72_0x230c('0x1b')],'description':this['client']['locale'][a72_0x230c('0x2')](_0x14f918[a72_0x230c('0xa')]['document'][a72_0x230c('0x10')],a72_0x230c('0x1c'),a72_0x230c('0xf'),_0x14f918['author'][a72_0x230c('0x1d')],_0x51e352[a72_0x230c('0x1f')],_0x31313f)}})[a72_0x230c('0x4')](()=>{});}throw new errors[(a72_0x230c('0x2c'))](errors[a72_0x230c('0x18')][a72_0x230c('0x0')],this[a72_0x230c('0x1f')]);};}};