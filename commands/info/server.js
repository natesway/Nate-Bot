const a57_0xd3d2=['Level\x20','join','Region','test','Roles','constructor','category','cache','\x20Channels','fetchBadges','exports','premiumSubscriptionCount','filter','Level','splash','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','description','premiumTier','apply','COLORS','ownerID','guild','badgeValue','toUpperCase','../../utils/badges','../../utils/constants','Command','send','createdAt','@bastion/tesseract','exec','banner','memberCount','fetch','user','IRIS','type','partnered','Emojis','json','verified','getMembership','size','catch','\x20•\x20','emoji','Owner','\x20/\x20','roles','\x20Server','bannerURL','channels','resolveBadges','name','\x20Roles','Partnered','\x20Boosts','maximumMembers','channel','return\x20/\x22\x20+\x20this\x20+\x20\x22/','isPublicBastion','owner'];(function(_0xc8e3b9,_0xd3d259){const _0x34a44c=function(_0x3ef07b){while(--_0x3ef07b){_0xc8e3b9['push'](_0xc8e3b9['shift']());}},_0x29fe83=function(){const _0x86d9d1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1ad845,_0x51d1d2,_0x4b2bea,_0x232d0c){_0x232d0c=_0x232d0c||{};let _0x3b53bd=_0x51d1d2+'='+_0x4b2bea,_0x128478=0x0;for(let _0x2c138d=0x0,_0x3cdfa9=_0x1ad845['length'];_0x2c138d<_0x3cdfa9;_0x2c138d++){const _0x41b175=_0x1ad845[_0x2c138d];_0x3b53bd+=';\x20'+_0x41b175;const _0x99a8c5=_0x1ad845[_0x41b175];_0x1ad845['push'](_0x99a8c5),_0x3cdfa9=_0x1ad845['length'],_0x99a8c5!==!![]&&(_0x3b53bd+='='+_0x99a8c5);}_0x232d0c['cookie']=_0x3b53bd;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1b0b2f,_0x2af01d){_0x1b0b2f=_0x1b0b2f||function(_0xb02e40){return _0xb02e40;};const _0x76fc4d=_0x1b0b2f(new RegExp('(?:^|;\x20)'+_0x2af01d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x448edd=function(_0x484ee1,_0x4a1726){_0x484ee1(++_0x4a1726);};return _0x448edd(_0x34a44c,_0xd3d259),_0x76fc4d?decodeURIComponent(_0x76fc4d[0x1]):undefined;}},_0x4f3560=function(){const _0x5e37e4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5e37e4['test'](_0x86d9d1['removeCookie']['toString']());};_0x86d9d1['updateCookie']=_0x4f3560;let _0x28c987='';const _0x3906da=_0x86d9d1['updateCookie']();if(!_0x3906da)_0x86d9d1['setCookie'](['*'],'counter',0x1);else _0x3906da?_0x28c987=_0x86d9d1['getCookie'](null,'counter'):_0x86d9d1['removeCookie']();};_0x29fe83();}(a57_0xd3d2,0x98));const a57_0x34a4=function(_0xc8e3b9,_0xd3d259){_0xc8e3b9=_0xc8e3b9-0x0;let _0x34a44c=a57_0xd3d2[_0xc8e3b9];return _0x34a44c;};const a57_0x4b2bea=function(){let _0x25af26=!![];return function(_0x56f4e1,_0x51c2ea){const _0x10670b=_0x25af26?function(){if(_0x51c2ea){const _0x59f59c=_0x51c2ea[a57_0x34a4('0x34')](_0x56f4e1,arguments);return _0x51c2ea=null,_0x59f59c;}}:function(){};return _0x25af26=![],_0x10670b;};}(),a57_0x51d1d2=a57_0x4b2bea(this,function(){const _0x4d1e96=function(){const _0x26b626=_0x4d1e96[a57_0x34a4('0x27')](a57_0x34a4('0x1f'))()[a57_0x34a4('0x27')](a57_0x34a4('0x31'));return!_0x26b626[a57_0x34a4('0x25')](a57_0x51d1d2);};return _0x4d1e96();});a57_0x51d1d2();'use strict';const tesseract_1=require(a57_0x34a4('0x1')),badges=require(a57_0x34a4('0x3a')),constants=require(a57_0x34a4('0x3b'));module[a57_0x34a4('0x2c')]=class ServerCommand extends tesseract_1[a57_0x34a4('0x3c')]{constructor(){super('server',{'description':'It\x20allows\x20you\x20see\x20the\x20information\x20of\x20the\x20server.','triggers':['serverInfo'],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[a57_0x34a4('0x2')]=async _0x224d57=>{const _0x265828=constants[a57_0x34a4('0x20')](this['client'][a57_0x34a4('0x6')])&&await badges[a57_0x34a4('0x2b')](_0x224d57[a57_0x34a4('0x37')][a57_0x34a4('0x36')],_0x224d57[a57_0x34a4('0x37')]['id'])['then'](_0x3caf57=>_0x3caf57[a57_0x34a4('0xb')]())[a57_0x34a4('0xf')](()=>{}),_0x5c0e4e=badges[a57_0x34a4('0xd')](_0x265828?_0x265828[a57_0x34a4('0x38')]:0x0);await _0x224d57['guild'][a57_0x34a4('0x5')]()[a57_0x34a4('0xf')](()=>{}),_0x224d57[a57_0x34a4('0x1e')][a57_0x34a4('0x3d')]({'embed':{'color':_0x5c0e4e?_0x5c0e4e['color']:tesseract_1['Constants'][a57_0x34a4('0x35')][a57_0x34a4('0x7')],'author':{'name':_0x224d57[a57_0x34a4('0x37')][a57_0x34a4('0x19')]},'title':(_0x224d57[a57_0x34a4('0x37')][a57_0x34a4('0x9')]?a57_0x34a4('0x1b'):_0x224d57[a57_0x34a4('0x37')][a57_0x34a4('0xc')]?'Verified':'')+a57_0x34a4('0x15'),'description':(_0x265828&&a57_0x34a4('0x38')in _0x265828?badges[a57_0x34a4('0x18')](_0x265828[a57_0x34a4('0x38')]):[])['map'](_0x5cba2a=>_0x5cba2a[a57_0x34a4('0x11')])[a57_0x34a4('0x23')]('\x20'),'fields':[{'name':'About','value':_0x224d57['guild'][a57_0x34a4('0x32')]||'-'},{'name':a57_0x34a4('0x12'),'value':_0x224d57[a57_0x34a4('0x37')][a57_0x34a4('0x21')]['user']['tag']+a57_0x34a4('0x10')+_0x224d57[a57_0x34a4('0x37')][a57_0x34a4('0x21')]['id']},{'name':a57_0x34a4('0x2f'),'value':a57_0x34a4('0x22')+_0x224d57['guild'][a57_0x34a4('0x33')]+a57_0x34a4('0x10')+_0x224d57[a57_0x34a4('0x37')][a57_0x34a4('0x2d')]+a57_0x34a4('0x1c'),'inline':!![]},{'name':a57_0x34a4('0x24'),'value':_0x224d57[a57_0x34a4('0x37')]['region'][a57_0x34a4('0x39')](),'inline':!![]},{'name':'Created','value':_0x224d57[a57_0x34a4('0x37')][a57_0x34a4('0x0')]['toUTCString'](),'inline':!![]},{'name':'Members','value':_0x224d57['guild'][a57_0x34a4('0x4')]+(_0x224d57['guild'][a57_0x34a4('0x1d')]?a57_0x34a4('0x13')+_0x224d57[a57_0x34a4('0x37')]['maximumMembers']:'')+'\x20Members'},{'name':a57_0x34a4('0x26'),'value':_0x224d57['guild'][a57_0x34a4('0x14')][a57_0x34a4('0x29')][a57_0x34a4('0xe')]+a57_0x34a4('0x1a'),'inline':!![]},{'name':'Channels','value':_0x224d57[a57_0x34a4('0x37')][a57_0x34a4('0x17')][a57_0x34a4('0x29')][a57_0x34a4('0x2e')](_0x3c992e=>_0x3c992e[a57_0x34a4('0x8')]!==a57_0x34a4('0x28'))['size']+a57_0x34a4('0x2a'),'inline':!![]},{'name':a57_0x34a4('0xa'),'value':_0x224d57['guild']['emojis'][a57_0x34a4('0x29')][a57_0x34a4('0xe')]+'\x20Emojis','inline':!![]}],'thumbnail':{'url':_0x224d57['guild']['iconURL']({'dynamic':!![],'size':0x200})},'image':{'url':_0x224d57[a57_0x34a4('0x37')][a57_0x34a4('0x3')]?_0x224d57[a57_0x34a4('0x37')][a57_0x34a4('0x16')]({'size':0x800}):_0x224d57[a57_0x34a4('0x37')][a57_0x34a4('0x30')]?_0x224d57[a57_0x34a4('0x37')]['splashURL']({'size':0x800}):null},'footer':{'text':(_0x5c0e4e?_0x5c0e4e[a57_0x34a4('0x19')]:'Powered\x20by\x20Bastion')+a57_0x34a4('0x10')+_0x224d57[a57_0x34a4('0x37')]['id']}}})[a57_0x34a4('0xf')](()=>{});};}};