const a123_0x49d2=['fullurl','sanitize','NOT_FOUND','guild','join','channel','length','json','wikipedia','\x0a...','pages','BASTION_ERROR_TYPE','query','send','constructor','../../utils/errors','exec','makeRequest','Command','https://en.wikipedia.org/','thumbnail','title','wikipedia\x20TITLE','@bastion/tesseract','It\x20allows\x20you\x20to\x20search\x20the\x20Wikipedia\x20for\x20the\x20specified\x20title.','source','IRIS'];(function(_0x15f7fa,_0x49d285){const _0x267457=function(_0x167539){while(--_0x167539){_0x15f7fa['push'](_0x15f7fa['shift']());}},_0x4bf8d8=function(){const _0x213211={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x24a235,_0xb2ae27,_0x3068c4,_0x369c41){_0x369c41=_0x369c41||{};let _0x5cbfab=_0xb2ae27+'='+_0x3068c4,_0x30c00a=0x0;for(let _0x4a9cff=0x0,_0x278529=_0x24a235['length'];_0x4a9cff<_0x278529;_0x4a9cff++){const _0x4a10ea=_0x24a235[_0x4a9cff];_0x5cbfab+=';\x20'+_0x4a10ea;const _0x54ab55=_0x24a235[_0x4a10ea];_0x24a235['push'](_0x54ab55),_0x278529=_0x24a235['length'],_0x54ab55!==!![]&&(_0x5cbfab+='='+_0x54ab55);}_0x369c41['cookie']=_0x5cbfab;},'removeCookie':function(){return'dev';},'getCookie':function(_0x43141c,_0x3688f5){_0x43141c=_0x43141c||function(_0x450233){return _0x450233;};const _0x4b3a1a=_0x43141c(new RegExp('(?:^|;\x20)'+_0x3688f5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4d35f6=function(_0x19a901,_0x10e08a){_0x19a901(++_0x10e08a);};return _0x4d35f6(_0x267457,_0x49d285),_0x4b3a1a?decodeURIComponent(_0x4b3a1a[0x1]):undefined;}},_0x341068=function(){const _0x150fc6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x150fc6['test'](_0x213211['removeCookie']['toString']());};_0x213211['updateCookie']=_0x341068;let _0x2eeb17='';const _0x3f18e7=_0x213211['updateCookie']();if(!_0x3f18e7)_0x213211['setCookie'](['*'],'counter',0x1);else _0x3f18e7?_0x2eeb17=_0x213211['getCookie'](null,'counter'):_0x213211['removeCookie']();};_0x4bf8d8();}(a123_0x49d2,0xc0));const a123_0x2674=function(_0x15f7fa,_0x49d285){_0x15f7fa=_0x15f7fa-0x0;let _0x267457=a123_0x49d2[_0x15f7fa];return _0x267457;};const a123_0x3068c4=function(){let _0x40d3ee=!![];return function(_0x275c89,_0x13041b){const _0x492171=_0x40d3ee?function(){if(_0x13041b){const _0x464991=_0x13041b['apply'](_0x275c89,arguments);return _0x13041b=null,_0x464991;}}:function(){};return _0x40d3ee=![],_0x492171;};}(),a123_0xb2ae27=a123_0x3068c4(this,function(){const _0x242397=function(){const _0x5422d4=_0x242397[a123_0x2674('0xb')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a123_0x2674('0xb')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5422d4['test'](a123_0xb2ae27);};return _0x242397();});a123_0xb2ae27();'use strict';const tesseract_1=require(a123_0x2674('0x14')),errors=require(a123_0x2674('0xc')),omnic=require('../../utils/omnic');module['exports']=class WikipediaCommand extends tesseract_1[a123_0x2674('0xf')]{constructor(){super(a123_0x2674('0x5'),{'description':a123_0x2674('0x15'),'triggers':[],'arguments':{},'scope':a123_0x2674('0x0'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a123_0x2674('0x13')]}),this['sanitize']=_0x5da440=>{return _0x5da440[a123_0x2674('0x3')]>0x7d0?_0x5da440['slice'](0x0,0x7d0)+a123_0x2674('0x6'):_0x5da440;},this[a123_0x2674('0xd')]=async(_0x36f988,_0x519e92)=>{if(!_0x519e92['_']['length'])throw new errors['DiscordError'](errors[a123_0x2674('0x8')]['INVALID_COMMAND_SYNTAX'],this['name']);const _0x176304=_0x519e92['_'][a123_0x2674('0x1')]('\x20'),_0x238148=await omnic[a123_0x2674('0xe')]('/wikimedia/wikipedia/'+_0x176304),_0x5c9627=await _0x238148[a123_0x2674('0x4')]();if(!_0x5c9627[a123_0x2674('0x9')]||!_0x5c9627[a123_0x2674('0x9')][a123_0x2674('0x7')])throw new Error(a123_0x2674('0x1a'));await _0x36f988[a123_0x2674('0x2')][a123_0x2674('0xa')]({'embed':{'color':tesseract_1['Constants']['COLORS'][a123_0x2674('0x17')],'author':{'name':'Wikipedia','url':a123_0x2674('0x10')},'title':_0x5c9627[a123_0x2674('0x9')][a123_0x2674('0x7')][0x0][a123_0x2674('0x12')],'url':_0x5c9627['query'][a123_0x2674('0x7')][0x0][a123_0x2674('0x18')],'description':this[a123_0x2674('0x19')](_0x5c9627[a123_0x2674('0x9')]['pages'][0x0]['extract']),'image':{'url':_0x5c9627[a123_0x2674('0x9')]['pages'][0x0][a123_0x2674('0x11')][a123_0x2674('0x16')]},'footer':{'text':'Powered\x20by\x20Omnic'}}});};}};