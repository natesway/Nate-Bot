const a78_0x3e75=['getString','infractions\x20--kick\x205','floor','You\x20haven\x27t\x20caused\x20any\x20trouble,\x20yet.\x20Keep\x20it\x20up!','Infractions','findById','GREEN','length','Command','default','NO_PERMISSION','infractionThreshold','clamp','document','exec','banThreshold','apply','channel','Constants','permissions','infractions\x20--ban\x2010','../../models/Guild','kickThreshold','ban','It\x20allows\x20you\x20to\x20list\x20all\x20your\x20infractions.\x20If\x20you\x27re\x20a\x20server\x20manager,\x20it\x20also\x20allows\x20you\x20to\x20set\x20the\x20thresholds\x20for\x20the\x20actions\x20that\x20should\x20be\x20taken\x20for\x20violating\x20infractions.','member','../../utils/numbers','infractions','language','return\x20/\x22\x20+\x20this\x20+\x20\x22/','COLORS','info','Kick\x20Threshold','kick','@bastion/tesseract','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exports','guild','ORANGE','catch','tag','MANAGE_GUILD','save','client','send'];(function(_0x346b79,_0x3e75a8){const _0x41375a=function(_0x1e330f){while(--_0x1e330f){_0x346b79['push'](_0x346b79['shift']());}},_0x321708=function(){const _0x2cac67={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5bf7e8,_0x52b4ad,_0x1c15d9,_0x3d56a0){_0x3d56a0=_0x3d56a0||{};let _0x959695=_0x52b4ad+'='+_0x1c15d9,_0xb3b3f4=0x0;for(let _0x4d20af=0x0,_0x78fcd5=_0x5bf7e8['length'];_0x4d20af<_0x78fcd5;_0x4d20af++){const _0x9d657a=_0x5bf7e8[_0x4d20af];_0x959695+=';\x20'+_0x9d657a;const _0x58f5d4=_0x5bf7e8[_0x9d657a];_0x5bf7e8['push'](_0x58f5d4),_0x78fcd5=_0x5bf7e8['length'],_0x58f5d4!==!![]&&(_0x959695+='='+_0x58f5d4);}_0x3d56a0['cookie']=_0x959695;},'removeCookie':function(){return'dev';},'getCookie':function(_0x827080,_0x2dd4ee){_0x827080=_0x827080||function(_0x7e2dc5){return _0x7e2dc5;};const _0x23dbd2=_0x827080(new RegExp('(?:^|;\x20)'+_0x2dd4ee['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x154c9e=function(_0x428ed5,_0x1fa369){_0x428ed5(++_0x1fa369);};return _0x154c9e(_0x41375a,_0x3e75a8),_0x23dbd2?decodeURIComponent(_0x23dbd2[0x1]):undefined;}},_0xef917=function(){const _0x12c279=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x12c279['test'](_0x2cac67['removeCookie']['toString']());};_0x2cac67['updateCookie']=_0xef917;let _0x6f839b='';const _0x2644e1=_0x2cac67['updateCookie']();if(!_0x2644e1)_0x2cac67['setCookie'](['*'],'counter',0x1);else _0x2644e1?_0x6f839b=_0x2cac67['getCookie'](null,'counter'):_0x2cac67['removeCookie']();};_0x321708();}(a78_0x3e75,0x71));const a78_0x4137=function(_0x346b79,_0x3e75a8){_0x346b79=_0x346b79-0x0;let _0x41375a=a78_0x3e75[_0x346b79];return _0x41375a;};const a78_0x1c15d9=function(){let _0x101ce7=!![];return function(_0x253c03,_0x351343){const _0x469b6a=_0x101ce7?function(){if(_0x351343){const _0x57f7dc=_0x351343[a78_0x4137('0x29')](_0x253c03,arguments);return _0x351343=null,_0x57f7dc;}}:function(){};return _0x101ce7=![],_0x469b6a;};}(),a78_0x52b4ad=a78_0x1c15d9(this,function(){const _0x9a66ad=function(){const _0x253bd2=_0x9a66ad[a78_0x4137('0xe')](a78_0x4137('0x8'))()[a78_0x4137('0xe')](a78_0x4137('0xf'));return!_0x253bd2['test'](a78_0x52b4ad);};return _0x9a66ad();});a78_0x52b4ad();'use strict';const tesseract_1=require(a78_0x4137('0xd')),Guild_1=require(a78_0x4137('0x0')),numbers=require(a78_0x4137('0x5'));module[a78_0x4137('0x10')]=class InfractionsCommand extends tesseract_1[a78_0x4137('0x21')]{constructor(){super(a78_0x4137('0x6'),{'description':a78_0x4137('0x3'),'triggers':[],'arguments':{'coerce':{'kick':_0x126065=>Math[a78_0x4137('0x1b')](numbers[a78_0x4137('0x25')](_0x126065,0x1,0x100)),'ban':_0x5f166c=>Math[a78_0x4137('0x1b')](numbers[a78_0x4137('0x25')](_0x5f166c,0x1,0x100))},'number':['kick',a78_0x4137('0x2')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['infractions',a78_0x4137('0x1a'),a78_0x4137('0x2d')]}),this[a78_0x4137('0x27')]=async(_0x2612dc,_0x641387)=>{if(_0x641387[a78_0x4137('0xc')]||_0x641387[a78_0x4137('0x2')]){if(!_0x2612dc[a78_0x4137('0x4')][a78_0x4137('0x2c')]['has'](a78_0x4137('0x15')))throw new Error(a78_0x4137('0x23'));const _0x5c47bd=await Guild_1[a78_0x4137('0x22')][a78_0x4137('0x1e')](_0x2612dc[a78_0x4137('0x11')]['id']);return _0x5c47bd['infractions']={..._0x5c47bd['infractions'],'kickThreshold':_0x641387[a78_0x4137('0xc')]?_0x641387[a78_0x4137('0xc')]:_0x5c47bd[a78_0x4137('0x6')]&&_0x5c47bd[a78_0x4137('0x6')][a78_0x4137('0x1')]?_0x5c47bd[a78_0x4137('0x6')]['kickThreshold']:undefined,'banThreshold':_0x641387['ban']?_0x641387[a78_0x4137('0x2')]:_0x5c47bd[a78_0x4137('0x6')]&&_0x5c47bd[a78_0x4137('0x6')]['banThreshold']?_0x5c47bd[a78_0x4137('0x6')][a78_0x4137('0x28')]:undefined},await _0x5c47bd[a78_0x4137('0x16')](),await _0x2612dc['channel'][a78_0x4137('0x18')]({'embed':{'color':tesseract_1[a78_0x4137('0x2b')]['COLORS'][a78_0x4137('0x1f')],'description':this[a78_0x4137('0x17')]['locale'][a78_0x4137('0x19')](_0x2612dc[a78_0x4137('0x11')][a78_0x4137('0x26')][a78_0x4137('0x7')],a78_0x4137('0xa'),a78_0x4137('0x24'),_0x2612dc['author'][a78_0x4137('0x14')]),'fields':[{'name':a78_0x4137('0xb'),'value':_0x5c47bd[a78_0x4137('0x6')]&&_0x5c47bd[a78_0x4137('0x6')][a78_0x4137('0x1')]?_0x5c47bd[a78_0x4137('0x6')]['kickThreshold']:'-','inline':!![]},{'name':'Ban\x20Threshold','value':_0x5c47bd['infractions']&&_0x5c47bd['infractions'][a78_0x4137('0x28')]?_0x5c47bd['infractions'][a78_0x4137('0x28')]:'-','inline':!![]}]}});}await _0x2612dc[a78_0x4137('0x2a')][a78_0x4137('0x18')]({'embed':{'color':_0x2612dc[a78_0x4137('0x4')][a78_0x4137('0x26')][a78_0x4137('0x6')]&&_0x2612dc['member'][a78_0x4137('0x26')]['infractions'][a78_0x4137('0x20')]?tesseract_1[a78_0x4137('0x2b')][a78_0x4137('0x9')][a78_0x4137('0x12')]:tesseract_1['Constants']['COLORS'][a78_0x4137('0x1f')],'author':{'name':_0x2612dc['author'][a78_0x4137('0x14')]},'title':a78_0x4137('0x1d'),'description':_0x2612dc[a78_0x4137('0x4')][a78_0x4137('0x26')][a78_0x4137('0x6')]&&_0x2612dc[a78_0x4137('0x4')][a78_0x4137('0x26')][a78_0x4137('0x6')][a78_0x4137('0x20')]?_0x2612dc[a78_0x4137('0x4')][a78_0x4137('0x26')][a78_0x4137('0x6')]['join']('\x0a'):a78_0x4137('0x1c')}})[a78_0x4137('0x13')](()=>{});};}};