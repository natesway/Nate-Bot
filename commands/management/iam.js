const a64_0x52e4=['author','not','roleNotFound','exec','selfAssignable','guild','ERROR','ROLE_NOT_FOUND','getString','info','document','selfRemoveRole','iam\x20ROLE','COLORS','Constants','iam\x20--not\x20ROLE','join','return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','default','locale','name','INVALID_COMMAND_SYNTAX','@bastion/tesseract','length','BASTION_ERROR_TYPE','../../models/Role','It\x20allows\x20you\x20add\x20(and\x20remove)\x20yourself\x20to\x20(and\x20from)\x20the\x20Self\x20Roles\x20set\x20in\x20the\x20server.','catch','DiscordError','../../utils/errors','resolver','constructor','selfAddRole','roleNotSelfAssignable','resolveRole','roles','send','findById','tag','client','exports','add','GREEN','member'];(function(_0x2c3428,_0x52e417){const _0x180826=function(_0x31acb2){while(--_0x31acb2){_0x2c3428['push'](_0x2c3428['shift']());}},_0x35d602=function(){const _0x327df8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3a5ce0,_0x2cb377,_0x1b5e50,_0x25b704){_0x25b704=_0x25b704||{};let _0x4d69e9=_0x2cb377+'='+_0x1b5e50,_0x1fb65c=0x0;for(let _0x3afe44=0x0,_0x31c321=_0x3a5ce0['length'];_0x3afe44<_0x31c321;_0x3afe44++){const _0x3e9665=_0x3a5ce0[_0x3afe44];_0x4d69e9+=';\x20'+_0x3e9665;const _0x491515=_0x3a5ce0[_0x3e9665];_0x3a5ce0['push'](_0x491515),_0x31c321=_0x3a5ce0['length'],_0x491515!==!![]&&(_0x4d69e9+='='+_0x491515);}_0x25b704['cookie']=_0x4d69e9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3d71ee,_0x16418a){_0x3d71ee=_0x3d71ee||function(_0x4b2c12){return _0x4b2c12;};const _0x3fc799=_0x3d71ee(new RegExp('(?:^|;\x20)'+_0x16418a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3d0cf5=function(_0x4ad289,_0x42d8b5){_0x4ad289(++_0x42d8b5);};return _0x3d0cf5(_0x180826,_0x52e417),_0x3fc799?decodeURIComponent(_0x3fc799[0x1]):undefined;}},_0x40ac7f=function(){const _0x10ab78=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x10ab78['test'](_0x327df8['removeCookie']['toString']());};_0x327df8['updateCookie']=_0x40ac7f;let _0x2b05ff='';const _0x3ead74=_0x327df8['updateCookie']();if(!_0x3ead74)_0x327df8['setCookie'](['*'],'counter',0x1);else _0x3ead74?_0x2b05ff=_0x327df8['getCookie'](null,'counter'):_0x327df8['removeCookie']();};_0x35d602();}(a64_0x52e4,0x11d));const a64_0x1808=function(_0x2c3428,_0x52e417){_0x2c3428=_0x2c3428-0x0;let _0x180826=a64_0x52e4[_0x2c3428];return _0x180826;};const a64_0x1b5e50=function(){let _0x4f6557=!![];return function(_0xb1e40e,_0x2db097){const _0x30d8f2=_0x4f6557?function(){if(_0x2db097){const _0x2e1379=_0x2db097['apply'](_0xb1e40e,arguments);return _0x2db097=null,_0x2e1379;}}:function(){};return _0x4f6557=![],_0x30d8f2;};}(),a64_0x2cb377=a64_0x1b5e50(this,function(){const _0x475d97=function(){const _0x244510=_0x475d97[a64_0x1808('0x11')](a64_0x1808('0x2'))()[a64_0x1808('0x11')](a64_0x1808('0x3'));return!_0x244510['test'](a64_0x2cb377);};return _0x475d97();});a64_0x2cb377();'use strict';const tesseract_1=require(a64_0x1808('0x8')),Role_1=require(a64_0x1808('0xb')),errors=require(a64_0x1808('0xf'));module[a64_0x1808('0x1a')]=class IAmCommand extends tesseract_1['Command']{constructor(){super('iam',{'description':a64_0x1808('0xc'),'triggers':[],'arguments':{'alias':{'not':['n']},'boolean':[a64_0x1808('0x1f')]},'scope':a64_0x1808('0x23'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a64_0x1808('0x2a'),a64_0x1808('0x0')]}),this[a64_0x1808('0x21')]=async(_0x1544c8,_0x4dbf36)=>{if(!_0x4dbf36['_'][a64_0x1808('0x9')])throw new errors[(a64_0x1808('0xe'))](errors[a64_0x1808('0xa')][a64_0x1808('0x7')],this['name']);const _0x382bab=this['client'][a64_0x1808('0x10')][a64_0x1808('0x14')](_0x1544c8[a64_0x1808('0x23')],_0x4dbf36['_'][a64_0x1808('0x1')]('\x20'));if(!_0x382bab)throw new errors['DiscordError'](errors[a64_0x1808('0xa')][a64_0x1808('0x25')],this[a64_0x1808('0x19')][a64_0x1808('0x5')][a64_0x1808('0x26')](_0x1544c8['guild'][a64_0x1808('0x28')]['language'],'errors',a64_0x1808('0x20')));const _0x45c372=await Role_1[a64_0x1808('0x4')][a64_0x1808('0x17')](_0x382bab['id']);if(!_0x45c372||!_0x45c372[a64_0x1808('0x22')])throw new errors[(a64_0x1808('0xe'))](errors[a64_0x1808('0xa')][a64_0x1808('0x24')],this[a64_0x1808('0x19')][a64_0x1808('0x5')][a64_0x1808('0x26')](_0x1544c8[a64_0x1808('0x23')][a64_0x1808('0x28')]['language'],'errors',a64_0x1808('0x13'),_0x382bab[a64_0x1808('0x6')]));_0x4dbf36[a64_0x1808('0x1f')]?await _0x1544c8[a64_0x1808('0x1d')][a64_0x1808('0x15')]['remove'](_0x382bab):await _0x1544c8[a64_0x1808('0x1d')]['roles'][a64_0x1808('0x1b')](_0x382bab),await _0x1544c8['channel'][a64_0x1808('0x16')]({'embed':{'color':_0x4dbf36[a64_0x1808('0x1f')]?tesseract_1[a64_0x1808('0x2c')][a64_0x1808('0x2b')]['RED']:tesseract_1['Constants']['COLORS'][a64_0x1808('0x1c')],'description':this[a64_0x1808('0x19')][a64_0x1808('0x5')]['getString'](_0x1544c8[a64_0x1808('0x23')]['document']['language'],a64_0x1808('0x27'),_0x4dbf36[a64_0x1808('0x1f')]?a64_0x1808('0x29'):a64_0x1808('0x12'),_0x1544c8[a64_0x1808('0x1e')][a64_0x1808('0x18')],_0x382bab[a64_0x1808('0x6')])}})[a64_0x1808('0xd')](()=>{});};}};