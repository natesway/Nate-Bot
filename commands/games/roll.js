const a45_0x18ae=['Lost\x20the\x20bet\x20in\x20Roll.','match','bet','channel','length','reduce','parseInt','applyModifier','credit','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','COLORS','modifierPattern','../../utils/numbers','applyModifiers','gambling','roll','\x20/\x20','multiplier','send','test','document','filter','join','constructor','pattern','guild','Command','exports','member','GAMBLING_DISABLED','enabled','exec','It\x20allows\x20you\x20to\x20roll\x20dice\x20and\x20see\x20the\x20result.\x20It\x20supports\x20dice\x20notation.\x20It\x20also\x20supports\x20gambling.','push','debit','Dice\x20Roll','getRandomInt','Won\x20the\x20bet\x20in\x20Roll.'];(function(_0x5d49af,_0x18aedb){const _0x1e660e=function(_0x4de646){while(--_0x4de646){_0x5d49af['push'](_0x5d49af['shift']());}},_0x34fe67=function(){const _0x314dbb={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x241192,_0x4ee8ca,_0x3ed48e,_0x3c9c47){_0x3c9c47=_0x3c9c47||{};let _0x44c528=_0x4ee8ca+'='+_0x3ed48e,_0x43fb0a=0x0;for(let _0x27406a=0x0,_0x1d4b47=_0x241192['length'];_0x27406a<_0x1d4b47;_0x27406a++){const _0x5ea699=_0x241192[_0x27406a];_0x44c528+=';\x20'+_0x5ea699;const _0x30b63e=_0x241192[_0x5ea699];_0x241192['push'](_0x30b63e),_0x1d4b47=_0x241192['length'],_0x30b63e!==!![]&&(_0x44c528+='='+_0x30b63e);}_0x3c9c47['cookie']=_0x44c528;},'removeCookie':function(){return'dev';},'getCookie':function(_0x51caf8,_0x29fc17){_0x51caf8=_0x51caf8||function(_0x4bf865){return _0x4bf865;};const _0x35f214=_0x51caf8(new RegExp('(?:^|;\x20)'+_0x29fc17['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x91eadf=function(_0x2a80de,_0xd24bef){_0x2a80de(++_0xd24bef);};return _0x91eadf(_0x1e660e,_0x18aedb),_0x35f214?decodeURIComponent(_0x35f214[0x1]):undefined;}},_0x1ca5ba=function(){const _0x5110c9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5110c9['test'](_0x314dbb['removeCookie']['toString']());};_0x314dbb['updateCookie']=_0x1ca5ba;let _0x54e79a='';const _0x6a5c15=_0x314dbb['updateCookie']();if(!_0x6a5c15)_0x314dbb['setCookie'](['*'],'counter',0x1);else _0x6a5c15?_0x54e79a=_0x314dbb['getCookie'](null,'counter'):_0x314dbb['removeCookie']();};_0x34fe67();}(a45_0x18ae,0x1ec));const a45_0x1e66=function(_0x5d49af,_0x18aedb){_0x5d49af=_0x5d49af-0x0;let _0x1e660e=a45_0x18ae[_0x5d49af];return _0x1e660e;};const a45_0x3ed48e=function(){let _0x376d62=!![];return function(_0x3ee36e,_0x3e0e3a){const _0x2ead6c=_0x376d62?function(){if(_0x3e0e3a){const _0xe7dac1=_0x3e0e3a[a45_0x1e66('0x18')](_0x3ee36e,arguments);return _0x3e0e3a=null,_0xe7dac1;}}:function(){};return _0x376d62=![],_0x2ead6c;};}(),a45_0x4ee8ca=a45_0x3ed48e(this,function(){const _0x5deec2=function(){const _0x15bbca=_0x5deec2[a45_0x1e66('0x0')](a45_0x1e66('0x19'))()[a45_0x1e66('0x0')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x15bbca[a45_0x1e66('0x23')](a45_0x4ee8ca);};return _0x5deec2();});a45_0x4ee8ca();'use strict';const tesseract_1=require('@bastion/tesseract'),numbers=require(a45_0x1e66('0x1c'));module[a45_0x1e66('0x4')]=class RollCommand extends tesseract_1[a45_0x1e66('0x3')]{constructor(){super('roll',{'description':a45_0x1e66('0x9'),'triggers':[],'arguments':{'number':[a45_0x1e66('0x11')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a45_0x1e66('0x1f'),'roll\x20NOTATION','roll\x20--bet\x20RESULT']}),this[a45_0x1e66('0x16')]=(_0x169e1f,_0x3ba6f6)=>{const [,_0x304a0d,_0x20a850]=_0x3ba6f6[a45_0x1e66('0x10')](this[a45_0x1e66('0x1b')]);switch(_0x304a0d['toLowerCase']()){case'+':return _0x169e1f+Number[a45_0x1e66('0x15')](_0x20a850);case'-':return _0x169e1f-Number[a45_0x1e66('0x15')](_0x20a850);case'/':return _0x169e1f/Number[a45_0x1e66('0x15')](_0x20a850);case'*':case'x':return _0x169e1f*Number[a45_0x1e66('0x15')](_0x20a850);default:return _0x169e1f;}},this[a45_0x1e66('0x1d')]=(_0x353d0e,_0x51872c)=>{for(const _0x5798b4 of _0x51872c){_0x353d0e=this[a45_0x1e66('0x16')](_0x353d0e,_0x5798b4);}return _0x353d0e;},this[a45_0x1e66('0x8')]=async(_0x4eb205,_0x4a87db)=>{const [,_0x3e1c5e,_0x213c22,..._0x38b9e0]=_0x4a87db['_'][a45_0x1e66('0x26')]('')[a45_0x1e66('0x10')](this['pattern']),_0x46a102=_0x3e1c5e?Number[a45_0x1e66('0x15')](_0x3e1c5e):0x1,_0x1d0e4a=_0x213c22?Number[a45_0x1e66('0x15')](_0x213c22):0x6,_0x53f7f8=[];for(let _0x9e46f7=0x0;_0x9e46f7<_0x46a102;_0x9e46f7++){_0x53f7f8['push'](numbers[a45_0x1e66('0xd')](0x1,_0x1d0e4a));}let _0x4ad6f5=_0x53f7f8[a45_0x1e66('0x14')]((_0x3aaf09,_0x1c8e80)=>_0x3aaf09+_0x1c8e80,0x0);const _0x5ca256=[];_0x38b9e0[a45_0x1e66('0x25')](_0x3b1fcb=>_0x3b1fcb)[a45_0x1e66('0x13')]&&(_0x5ca256[a45_0x1e66('0xa')]({'name':'Modifiers','value':_0x38b9e0['join']('\x20'),'inline':!![]}),_0x4ad6f5=this[a45_0x1e66('0x1d')](_0x4ad6f5,_0x38b9e0[a45_0x1e66('0x25')](_0x4b0c75=>_0x4b0c75)));if(_0x4a87db['bet']){if(_0x4eb205[a45_0x1e66('0x2')][a45_0x1e66('0x24')][a45_0x1e66('0x1e')]&&_0x4eb205[a45_0x1e66('0x2')][a45_0x1e66('0x24')]['gambling'][a45_0x1e66('0x7')])_0x4ad6f5===_0x4a87db[a45_0x1e66('0x11')]?_0x4eb205[a45_0x1e66('0x5')][a45_0x1e66('0x17')](0x64*(_0x4eb205['guild']['document'][a45_0x1e66('0x1e')][a45_0x1e66('0x21')]||0x1),a45_0x1e66('0xe')):_0x4eb205[a45_0x1e66('0x5')][a45_0x1e66('0xb')](0x64*(_0x4eb205['guild'][a45_0x1e66('0x24')][a45_0x1e66('0x1e')][a45_0x1e66('0x21')]||0x1),a45_0x1e66('0xf'));else throw new Error(a45_0x1e66('0x6'));}_0x5ca256['push']({'name':'Result','value':_0x4ad6f5,'inline':!![]}),await _0x4eb205[a45_0x1e66('0x12')][a45_0x1e66('0x22')]({'embed':{'color':tesseract_1['Constants'][a45_0x1e66('0x1a')]['IRIS'],'title':a45_0x1e66('0xc'),'description':_0x53f7f8[a45_0x1e66('0x26')](a45_0x1e66('0x20')),'fields':_0x5ca256}});},this[a45_0x1e66('0x1')]=/^(\d+)?(?:d(\d*))?([-+x*/]\d+)?([-+x*/]\d+)?$/i,this['modifierPattern']=/^([-+x*/])(\d+)$/i;}};