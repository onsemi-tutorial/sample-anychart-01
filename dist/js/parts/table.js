if(!_.table){_.table=1;(function($){var NQ=function(a,b){this.$=a;this.tf=b?LQ:MQ},OQ=function(a){this.$=a},PQ=function(a){$.gd.call(this);this.g=a;this.U=this.P=null},QQ=function(a,b,c){PQ.call(this,a);this.reset(b,c)},RQ=function(a,b){PQ.call(this,a);this.he=b;this.b=null},SQ=function(a,b){PQ.call(this,a);this.he=b;this.b=null},TQ=function(a,b){$.X.call(this);this.b=[];this.f=$.tn(b,4);this.g=$.tn(a,5);this.o=0;this.P=[];this.N=[];this.G=[];this.ba=[];this.U=[];this.D={fill:"none",cellBorder:"black",topPadding:0,rightPadding:0,bottomPadding:0,
leftPadding:0,hAlign:"start",vAlign:"top",enabled:!0,wordWrap:"break-word",wordBreak:"normal"};this.D.fill="#fff"},VQ=function(a){if(a.J(2048)){var b=[],c=a.o?a.b.length/a.o:0,d,e,f=Math.min(c,a.g),h=Math.min(a.o,a.f);for(d=0;d<f;d++){for(e=0;e<h;e++)b.push(a.b[d*a.o+e]);for(e=h;e<a.f;e++)b.push(UQ(a,d,e));for(e=h;e<a.o;e++){var k=a,l=a.b[d*a.o+e];l.content(null);k.P.push(l)}}for(d=f;d<a.g;d++)for(e=0;e<a.f;e++)b.push(UQ(a,d,e));for(d=f;d<c;d++)for(e=0;e<a.o;e++)f=a,h=a.b[d*a.o+e],h.content(null),
f.P.push(h);a.b=b;a.o=window.NaN;a.I(2048);a.u(1984)}},XQ=function(a){if(a.J(64)){var b=a.sb(),c=WQ(a.f,a.G,a.sr,a.rr,a.wJ,a.vJ,a.uJ,b.width,a.U);b=WQ(a.g,a.N,a.ns,a.ms,a.II,a.zJ,a.yJ,b.height,a.ba);a.I(64);if(c||b)a.U=c||a.U,a.ba=b||a.ba,a.u(1792)}},ZQ=function(a,b,c,d,e,f,h){if(f&&"none"!=f){var k=(f.thickness?f.thickness:1)%2?.5:0;b=YQ(a,b,c,d,e);c=$.Bk(f);c in a.xu?a=a.xu[c]:(d=a.ln.length?a.ln.pop():$.aj(),a.yb.ec(d),$.D(f)&&"keys"in f&&!$.D(f.mode)&&(f=$.Ak(f),f.mode=a.sb()),d.stroke(f),d.fill(null),
a=a.xu[c]=d);switch(h){case 0:a.moveTo(b.tb(),b.$b()+k);a.lineTo(b.$a()+1,b.$b()+k);break;case 1:a.moveTo(b.$a()+k,b.$b());a.lineTo(b.$a()+k,b.Ra()+1);break;case 2:a.moveTo(b.tb(),b.Ra()+k);a.lineTo(b.$a()+1,b.Ra()+k);break;case 3:a.moveTo(b.tb()+k,b.$b()),a.lineTo(b.tb()+k,b.Ra()+1)}}},$Q=function(a,b,c){if(b||c){var d;if((d=b&&b.ib("bottomBorder"))||(d=c&&c.ib("topBorder"))||(d=b&&b.ib("border"))||(d=c&&c.ib("border")))return d;if(a.qn){var e=a.qn[(b||window.NaN)&&b.f],f=a.qn[(c||window.NaN)&&c.f];
if((d=e&&e.ib("bottomBorder"))||(d=f&&f.ib("topBorder"))||(d=e&&e.ib("border"))||(d=f&&f.ib("border"))||(d=e&&e.ib("cellBottomBorder"))||(d=f&&f.ib("cellTopBorder"))||(d=e&&e.ib("cellBorder"))||(d=f&&f.ib("cellBorder")))return d}if(e=a.Mm&&a.Mm[(b||c).D])if((d=!b&&(e.ib("topBorder")||e.ib("border"))||!c&&(e.ib("bottomBorder")||e.ib("border")))||(d=e.ib("cellBottomBorder"))||(d=e.ib("cellTopBorder"))||(d=e.ib("cellBorder"))||(d=e.ib("cellBorder")))return d;return(d=!b&&(a.ib("topBorder")||a.ib("border"))||
!c&&(a.ib("bottomBorder")||a.ib("border")))||(d=b&&a.ib("cellBottomBorder"))?d:(d=c&&a.ib("cellTopBorder"))?d:a.ib("cellBorder")||"none"}return"none"},aR=function(a,b,c){if(b||c){var d;if((d=b&&b.ib("rightBorder"))||(d=c&&c.ib("leftBorder"))||(d=b&&b.ib("border"))||(d=c&&c.ib("border")))return d;var e=a.qn&&a.qn[(b||c).f];if(e&&((d=!b&&(e.ib("leftBorder")||e.ib("border"))||!c&&(e.ib("rightBorder")||e.ib("border")))||(d=e.ib("cellRightBorder"))||(d=e.ib("cellLeftBorder"))||(d=e.ib("cellBorder"))||
(d=e.ib("cellBorder"))))return d;if(a.Mm){e=a.Mm[(b||window.NaN)&&b.D];var f=a.Mm[(c||window.NaN)&&c.D];if((d=e&&e.ib("rightBorder"))||(d=f&&f.ib("leftBorder"))||(d=e&&e.ib("border"))||(d=f&&f.ib("border"))||(d=e&&e.ib("cellRightBorder"))||(d=f&&f.ib("cellLeftBorder"))||(d=e&&e.ib("cellBorder"))||(d=f&&f.ib("cellBorder")))return d}return(d=!b&&(a.ib("leftBorder")||a.ib("border"))||!c&&(a.ib("rightBorder")||a.ib("border")))||(d=b&&a.ib("cellRightBorder"))?d:(d=c&&a.ib("cellLeftBorder"))?d:a.ib("cellBorder")||
"none"}return"none"},bR=function(a,b,c){if($.p(c)){var d=!1;null===c?a.ns&&b in a.ns&&(delete a.ns[b],d=!0):(a.ns||(a.ns=[]),a.ns[b]!=c&&(a.ns[b]=c,d=!0));d&&a.u(64,1);return a}return a.ns&&b in a.ns?a.ns[b]:null},cR=function(a,b,c){if($.p(c)){var d=!1;null===c?a.ms&&b in a.ms&&(delete a.ms[b],d=!0):(a.ms||(a.ms=[]),a.ms[b]!=c&&(a.ms[b]=c,d=!0));d&&a.u(64,1);return a}return a.ms&&b in a.ms?a.ms[b]:null},dR=function(a,b,c){return $.p(c)?(a.G[b]!=c&&(null===c?delete a.G[b]:a.G[b]=c,a.u(64,1)),a):b in
a.G?a.G[b]:null},eR=function(a,b,c){if($.p(c)){var d=!1;null===c?a.sr&&b in a.sr&&(delete a.sr[b],d=!0):(a.sr||(a.sr=[]),a.sr[b]!=c&&(a.sr[b]=c,d=!0));d&&a.u(64,1);return a}return a.sr&&b in a.sr?a.sr[b]:null},fR=function(a,b,c){if($.p(c)){var d=!1;null===c?a.rr&&b in a.rr&&(delete a.rr[b],d=!0):(a.rr||(a.rr=[]),a.rr[b]!=c&&(a.rr[b]=c,d=!0));d&&a.u(64,1);return a}return a.rr&&b in a.rr?a.rr[b]:null},YQ=function(a,b,c,d,e,f){VQ(a);XQ(a);var h=a.sb();f=$.K(f,$.I)?f:new $.I(0,0,0,0);var k=a.U[c-1]+1||
0;c=a.U[Math.min(c+e,a.f)-1];f.width=c-k;f.left=h.left+k;k=a.ba[b-1]+1||0;c=a.ba[Math.min(b+d,a.g)-1];f.height=c-k;f.top=h.top+k;return f},WQ=function(a,b,c,d,e,f,h,k,l){var m,n=!1,q=0,r=[],t=[],u=[],v=0;e=$.M(e,k);f=$.M(f,k);h=$.M(h,k);var w=!1;for(m=0;m<a;m++){var x=c?$.M(c[m],k):window.NaN;var y=d?$.M(d[m],k):window.NaN;var A=b[m];var G=x,C=y;A=$.M(A,k);G=$.M(G,k);C=$.M(C,k);(0,window.isNaN)(A)&&(A=e);(0,window.isNaN)(G)&&(G=f);(0,window.isNaN)(C)&&(C=h);(0,window.isNaN)(G)||(A=Math.max(A,G));
(0,window.isNaN)(C)||(A=Math.min(A,C));(0,window.isNaN)(A)?(v++,(0,window.isNaN)(x)?(0,window.isNaN)(f)||(t[m]=f,w=!0):(t[m]=x,w=!0),(0,window.isNaN)(y)?(0,window.isNaN)(h)||(u[m]=h,w=!0):(u[m]=y,w=!0)):(q+=A,r[m]=A)}if(w&&0<v){var J=[];c=v*v;do for(d=!1,b=Math.max(3*v,k-q)/v,m=0;m<a;m++)if(!(m in r))if(m in J){if(J[m]==t[m]&&t[m]<b){q-=t[m];v++;delete J[m];d=!0;break}if(J[m]==u[m]&&u[m]>b){q-=u[m];v++;delete J[m];d=!0;break}}else{if(m in t&&t[m]>b){q+=J[m]=t[m];v--;d=!0;break}if(m in u&&u[m]<b){q+=
J[m]=u[m];v--;d=!0;break}}while(d&&0<v&&c--)}t=0;u=[];b=Math.max(3*v,k-q)/v;for(m=0;m<a;m++)m in r?A=r[m]:J&&m in J?A=J[m]:A=b,t+=A,k=Math.round(t)-1,u[m]=k,k!=l[m]&&(n=!0);return n?u:null},UQ=function(a,b,c){return a.P.length?a.P.pop().reset(b,c):new QQ(a,b,c)},gR=function(a,b,c,d,e,f){return c.o&&c.o[b]||d&&d.o&&d.o[b]||e&&e.o&&e.o[b]||a.D&&a.D[b]||f},hR=function(a,b){TQ.call(this,a,b)};$.Ov.prototype.wt=$.ca(10,function(){return!0});$.Vv.prototype.wt=$.ca(9,function(){return!1});
var MQ=["topBorder","rightBorder","bottomBorder","leftBorder"],LQ=["cellTopBorder","cellRightBorder","cellBottomBorder","cellLeftBorder"];NQ.prototype.top=function(a,b,c,d,e){null!=a&&(a=$.Ub.apply(null,arguments));return this.$.ib(this.tf[0],a,256)};NQ.prototype.right=function(a,b,c,d,e){null!=a&&(a=$.Ub.apply(null,arguments));return this.$.ib(this.tf[1],a,256)};NQ.prototype.bottom=function(a,b,c,d,e){null!=a&&(a=$.Ub.apply(null,arguments));return this.$.ib(this.tf[2],a,256)};
NQ.prototype.left=function(a,b,c,d,e){null!=a&&(a=$.Ub.apply(null,arguments));return this.$.ib(this.tf[3],a,256)};var iR=NQ.prototype;iR.top=iR.top;iR.right=iR.right;iR.bottom=iR.bottom;iR.left=iR.left;var jR=["topPadding","rightPadding","bottomPadding","leftPadding"];OQ.prototype.top=function(a){$.p(a)&&(a=$.qn(a)||0);return this.$.ib(jR[0],a,1024)};OQ.prototype.right=function(a){$.p(a)&&(a=$.qn(a)||0);return this.$.ib(jR[1],a,1024)};OQ.prototype.bottom=function(a){$.p(a)&&(a=$.qn(a)||0);return this.$.ib(jR[2],a,1024)};OQ.prototype.left=function(a){$.p(a)&&(a=$.qn(a)||0);return this.$.ib(jR[3],a,1024)};var kR=OQ.prototype;kR.top=kR.top;kR.right=kR.right;kR.bottom=kR.bottom;kR.left=kR.left;$.H(PQ,$.gd);$.g=PQ.prototype;$.g.ib=function(a,b,c){if($.p(a)){if($.p(b)){var d=!1;null===b?this.o&&this.o[a]&&(delete this.o[a],d=!0):(this.o||(this.o={}),this.o[a]!=b&&(this.o[a]=b,d=!0));d&&this.g.u(+c||1024,1);return this}return this.o&&this.o[a]}return this.o||{}};$.g.fontSize=function(a){$.p(a)&&(a=$.qn(a));return this.ib("fontSize",a)};$.g.fontFamily=function(a){$.p(a)&&(a=String(a));return this.ib("fontFamily",a)};$.g.u9=function(a){$.p(a)&&(a=String(a));return this.ib("fontColor",a)};
$.g.w9=function(a){$.p(a)&&(a=$.Ya(+a,0,1));return this.ib("fontOpacity",a)};$.g.v9=function(a){$.p(a)&&(a=$.Jj(a));return this.ib("fontDecoration",a)};$.g.fontStyle=function(a){$.p(a)&&(a=$.Mj(a));return this.ib("fontStyle",a)};$.g.fontVariant=function(a){$.p(a)&&(a=$.Nj(a));return this.ib("fontVariant",a)};$.g.fontWeight=function(a){$.p(a)&&(a=$.qn(a));return this.ib("fontWeight",a)};$.g.letterSpacing=function(a){$.p(a)&&(a=$.qn(a));return this.ib("letterSpacing",a)};
$.g.x9=function(a){$.p(a)&&(a=$.Oj(a));return this.ib("textDirection",a)};$.g.lineHeight=function(a){$.p(a)&&(a=$.qn(a));return this.ib("lineHeight",a)};$.g.textIndent=function(a){$.p(a)&&(a=(0,window.parseFloat)($.qn(a)));return this.ib("textIndent",a)};$.g.vAlign=function(a){$.p(a)&&(a=$.Ij(a));return this.ib("vAlign",a)};$.g.Wl=function(a){$.p(a)&&(a=$.Hj(a));return this.ib("hAlign",a)};$.g.wordWrap=function(a){return this.ib("wordWrap",a)};$.g.du=function(a){return this.ib("wordBreak",a)};
$.g.textOverflow=function(a){$.p(a)&&(a=String(a));return this.ib("textOverflow",a)};$.g.bm=function(a){$.p(a)&&(a=!!a);return this.ib("selectable",a)};$.g.td=function(a){$.p(a)&&(a=!!a);return this.ib("disablePointerEvents",a)};$.g.y9=function(a){$.p(a)&&(a=!!a);return this.ib("useHtml",a)};
$.g.t9=function(a,b,c,d,e){if($.p(a)){null===a||(a=$.Ub.apply(null,arguments));$.U(this.g);this.ib("border",a,256);for(var f=0;4>f;f++)this.ib(MQ[f],null,256);this.g.da(!0);return this}return this.P||(this.P=new NQ(this,!1))};
$.g.NT=function(a,b,c,d){if($.p(a)){var e,f,h;if($.B(a)){var k=a;a=k[0];b=k[1];c=k[2];d=k[3];k=k.length}else k=arguments.length;if(k)$.D(a)?(e=$.qn(a.top)||0,f=$.qn(a.right)||0,h=$.qn(a.bottom)||0,l=$.qn(a.left)||0):1==k?l=h=f=e=$.qn(a)||0:2==k?(h=e=$.qn(a)||0,l=f=$.qn(b)||0):3==k?(e=$.qn(a)||0,l=f=$.qn(b)||0,h=$.qn(c)||0):4<=k&&(e=$.qn(a)||0,f=$.qn(b)||0,h=$.qn(c)||0,l=$.qn(d)||0);else var l=h=f=e=0;$.U(this.g);this.ib(jR[0],e,1024);this.ib(jR[1],f,1024);this.ib(jR[2],h,1024);this.ib(jR[3],l,1024);
this.g.da(!0);return this}return this.U||(this.U=new OQ(this))};var lR=PQ.prototype;lR.fontSize=lR.fontSize;lR.fontFamily=lR.fontFamily;lR.fontColor=lR.u9;lR.fontOpacity=lR.w9;lR.fontDecoration=lR.v9;lR.fontStyle=lR.fontStyle;lR.fontVariant=lR.fontVariant;lR.fontWeight=lR.fontWeight;lR.letterSpacing=lR.letterSpacing;lR.textDirection=lR.x9;lR.lineHeight=lR.lineHeight;lR.textIndent=lR.textIndent;lR.vAlign=lR.vAlign;lR.hAlign=lR.Wl;lR.wordWrap=lR.wordWrap;lR.wordBreak=lR.du;lR.textOverflow=lR.textOverflow;
lR.selectable=lR.bm;lR.disablePointerEvents=lR.td;lR.useHtml=lR.y9;lR.border=lR.t9;$.H(QQ,PQ);$.g=QQ.prototype;$.g.reset=function(a,b){($.ea(this.ud)||$.z(this.ud))&&$.hd(this.Mh);this.G=this.N=1;this.f=a;this.D=b;this.Mh=this.ud=null;this.b=window.NaN;delete this.o;return this};
$.g.content=function(a){if($.p(a)){if(this.ud!=a){this.ud=a;this.Mh&&this.g.GE(this.Mh);if($.ea(a)||$.z(a)){var b=this.g;b.Qg||(b.Qg=new $.kt,b.Qg.K($.cl("standalones.labelsFactory")),b.Qg.anchor("center"),b.Qg.position("center"));this.Mh=b.Qg.add({value:String(a)},{value:{x:0,y:0}})}else $.K(a,$.Jf)?(this.Mh=$.Zi(),this.Mh.ec(a)):this.Mh=a;this.g.u(1024,1)}return this}return this.ud};$.g.Fw=function(a){return $.p(a)?(a=$.tn(a,this.G),a!=this.G&&(this.G=a,this.g.u(128,1)),this):this.G};
$.g.Gw=function(a){return $.p(a)?(a=$.tn(a,this.N),a!=this.N&&(this.N=a,this.g.u(128,1)),this):this.N};$.g.B9=function(){return this.f};$.g.A9=function(){return this.D};$.g.$m=function(){return this.g.$m(this.f)};$.g.z9=function(){return this.g.pX(this.D)};$.g.kb=function(){return YQ(this.g,this.f,this.D,this.N,this.G)};$.g.fill=function(a,b,c,d,e,f,h){null!=a&&(a=$.Sb.apply(null,arguments));return this.ib("fill",a,512)};$.g.padding=function(a,b,c,d){return this.NT.apply(this,arguments)};
$.g.R=function(){($.ea(this.ud)||$.z(this.ud))&&$.hd(this.Mh);QQ.B.R.call(this)};var mR=QQ.prototype;mR.content=mR.content;mR.rowSpan=mR.Gw;mR.colSpan=mR.Fw;mR.padding=mR.padding;mR.getBounds=mR.kb;mR.getRowNum=mR.B9;mR.getColNum=mR.A9;mR.getRow=mR.$m;mR.getCol=mR.z9;mR.fill=mR.fill;$.H(RQ,PQ);$.g=RQ.prototype;$.g.G9=function(){return this.he};$.g.E9=function(a){return this.g.Fy(a,this.he)};$.g.width=function(a){return $.p(a)?(dR(this.g,this.he,a),this):dR(this.g,this.he)};$.g.minWidth=function(a){return $.p(a)?(eR(this.g,this.he,a),this):eR(this.g,this.he)};$.g.maxWidth=function(a){return $.p(a)?(fR(this.g,this.he,a),this):fR(this.g,this.he)};$.g.rX=function(a,b,c,d,e,f,h){null!=a&&(a=$.Sb.apply(null,arguments));return this.ib("fill",a,512)};
$.g.C9=function(a,b,c,d,e){if($.p(a)){null===a||(a=$.Ub.apply(null,arguments));$.U(this.g);this.ib("cellBorder",a,256);for(var f=0;4>f;f++)this.ib(LQ[f],null,256);this.g.da(!0);return this}return this.b||(this.b=new NQ(this,!0))};$.g.D9=function(a,b,c,d){return this.NT.apply(this,arguments)};var nR=RQ.prototype;nR.width=nR.width;nR.maxWidth=nR.maxWidth;nR.minWidth=nR.minWidth;nR.getCell=nR.E9;nR.getColNum=nR.G9;nR.cellFill=nR.rX;nR.cellBorder=nR.C9;nR.cellPadding=nR.D9;$.H(SQ,PQ);$.g=SQ.prototype;$.g.K9=function(){return this.he};$.g.J9=function(a){return this.g.Fy(this.he,a)};$.g.height=function(a){return $.p(a)?(this.g.u1(this.he,a),this):this.g.u1(this.he)};$.g.minHeight=function(a){return $.p(a)?(bR(this.g,this.he,a),this):bR(this.g,this.he)};$.g.maxHeight=function(a){return $.p(a)?(cR(this.g,this.he,a),this):cR(this.g,this.he)};$.g.sX=function(a,b,c,d,e,f,h){null!=a&&(a=$.Sb.apply(null,arguments));return this.ib("fill",a,512)};
$.g.H9=function(a,b,c,d,e){if($.p(a)){null===a||(a=$.Ub.apply(null,arguments));$.U(this.g);this.ib("cellBorder",a,256);for(var f=0;4>f;f++)this.ib(LQ[f],null,256);this.g.da(!0);return this}return this.b||(this.b=new NQ(this,!0))};$.g.I9=function(a,b,c,d){return this.NT.apply(this,arguments)};var oR=SQ.prototype;oR.height=oR.height;oR.maxHeight=oR.maxHeight;oR.minHeight=oR.minHeight;oR.getCell=oR.J9;oR.getRowNum=oR.K9;oR.cellFill=oR.sX;oR.cellBorder=oR.H9;oR.cellPadding=oR.I9;$.H(TQ,$.Us);$.g=TQ.prototype;$.g.ra=$.Us.prototype.ra;$.g.qa=$.Us.prototype.qa|4032;$.g.Qg=null;$.g.yb=null;$.g.pE=null;$.g.xu=null;$.g.Xu=null;$.g.ln=null;$.g.uB=null;$.g.nX=null;$.g.oX=null;$.g.qX=null;$.g.qn=null;$.g.Mm=null;$.g.ns=null;$.g.ms=null;$.g.sr=null;$.g.rr=null;$.g.II=null;$.g.zJ=null;$.g.yJ=null;$.g.wJ=null;$.g.vJ=null;$.g.uJ=null;$.g.rU=function(a){return $.p(a)?(a=$.tn(a,this.g),this.g!=a&&((0,window.isNaN)(this.o)&&(this.o=this.f),this.g=a,this.u(2176,1)),this):this.g};
$.g.DP=function(a){return $.p(a)?(a=$.tn(a,this.f),this.f!=a&&((0,window.isNaN)(this.o)&&(this.o=this.f),this.f=a,this.u(2176,1)),this):this.f};$.g.Fy=function(a,b){VQ(this);a=$.tn(a,window.NaN,!0);b=$.tn(b,window.NaN,!0);return this.b[a*this.f+b]||null};$.g.$m=function(a){VQ(this);a=$.tn(a,window.NaN,!0);if((0,window.isNaN)(a)||a>=this.g)return null;this.qn||(this.qn=[]);a in this.qn||(this.qn[a]=new SQ(this,a));return this.qn[a]};
$.g.pX=function(a){VQ(this);a=$.tn(a,window.NaN,!0);if((0,window.isNaN)(a)||a>=this.f)return null;this.Mm||(this.Mm=[]);a in this.Mm||(this.Mm[a]=new RQ(this,a));return this.Mm[a]};$.g.cga=function(a){return $.p(a)?(this.II!=a&&(this.II=a,this.u(64,1)),this):this.II};$.g.ega=function(a){return $.p(a)?(this.zJ!=a&&(this.zJ=a,this.u(64,1)),this):this.zJ};$.g.dga=function(a){return $.p(a)?(this.yJ!=a&&(this.yJ=a,this.u(64,1)),this):this.yJ};
$.g.M$=function(a){return $.p(a)?(this.wJ!=a&&(this.wJ=a,this.u(64,1)),this):this.wJ};$.g.L$=function(a){return $.p(a)?(this.vJ!=a&&(this.vJ=a,this.u(64,1)),this):this.vJ};$.g.K$=function(a){return $.p(a)?(this.uJ!=a&&(this.uJ=a,this.u(64,1)),this):this.uJ};$.g.k9=function(a,b,c,d,e){if($.p(a)){null===a||(a=$.Ub.apply(null,arguments));$.U(this);this.ib("border",a,256);for(var f=0;4>f;f++)this.ib(MQ[f],null,256);this.da(!0);return this}return this.nX||(this.nX=new NQ(this,!1))};
$.g.S$=function(a,b){var c;if($.p(a)){var d=!$.B(a);var e=0;if(!d){var f=a.length;for(c=0;c<f;c++){var h=a[c];if($.B(h))h.length>e&&(e=h.length);else{d=!0;break}}}if(!d&&f&&e){$.U(this);this.rU(f);this.DP(e);if(b)for(c=0;c<f;c++)for(d=0;d<e;d++){var k=this.Fy(c,d);k.Gw(1);k.Fw(1)}for(c=0;c<f;c++)for(h=a[c],d=0;d<e;d++){k=this.Fy(c,d);var l=h[d];k.content($.p(l)?l:null)}this.da(!0)}else $.Sj(3);return this}e=[];for(c=0;c<this.g;c++){h=[];for(d=0;d<this.f;d++)h.push(this.Fy(c,d).content());e.push(h)}return e};
$.g.X=function(){if(!this.xc())return this;this.yb||(this.yb=$.Zi(),$.Ps(this,this.yb),this.pE=this.yb.Nd());var a=this.yb.Ga(),b=a&&!a.Ve();b&&a.suspend();this.J(4)&&(this.u(64),($.kn(this.left())||$.kn(this.top()))&&this.u(1792),this.I(4));this.Qg&&$.U(this.Qg);VQ(this);XQ(this);if(this.J(128)){var c,d;for(c=0;c<this.b.length;c++)this.b[c].b=window.NaN;for(var e=0;e<this.g;e++)for(var f=0;f<this.f;f++){var h=e*this.f+f,k=this.b[h];if((0,window.isNaN)(k.b)&&(1<k.Fw()||1<k.Gw())){for(c=Math.min(this.g,
e+k.Gw());c-- >e;)for(d=Math.min(this.f,f+k.Fw());d-- >f;)this.b[c*this.f+d].b=h;k.b=window.NaN}}this.I(128);this.u(1792)}if(this.J(512)){this.ln||(this.ln=[]);if(this.Xu)for(var l in this.Xu)c=this.Xu[l],c.clear(),c.parent(null),this.ln.push(c),delete this.Xu[l];else this.Xu={};for(l=0;l<this.g;l++)for(c=0;c<this.f;c++)if(f=this.b[l*this.f+c],(0,window.isNaN)(f.b)){var m=YQ(this,l,c,f.Gw(),f.Fw(),m);d=l;e=c;d=(f=f.fill())?f:(f=this.qn&&this.qn[d]&&this.qn[d].sX())?f:(f=this.Mm&&this.Mm[e]&&this.Mm[e].rX())?
f:(f=d%2?this.z1():this.t1())?f:this.ib("fill");d&&(e=$.Bk(d),e in this.Xu?d=this.Xu[e]:(f=this.ln.length?this.ln.pop():$.aj(),this.yb.$f(f,0),f.fill(d),f.stroke(null),d=this.Xu[e]=f),e=m.tb(),f=m.$a()+1,h=m.$b(),k=m.Ra()+1,d.moveTo(e,h),d.lineTo(f,h),d.lineTo(f,k),d.lineTo(e,k),d.close())}this.I(512)}if(this.J(256)){this.ln||(this.ln=[]);if(this.xu)for(var n in this.xu)m=this.xu[n],m.clear(),m.parent(null),this.ln.push(m),delete this.xu[n];else this.xu={};for(m=0;m<this.f;m++)l=this.b[m],(0,window.isNaN)(l.b)&&
ZQ(this,0,m,1,l.Fw(),$Q(this,void 0,l),0);for(n=0;n<this.g;n++)l=this.b[n*this.f],(0,window.isNaN)(l.b)&&ZQ(this,n,0,l.Gw(),1,aR(this,void 0,l),3);for(n=0;n<this.g;n++)for(m=0;m<this.f;m++)d=n*this.f+m,l=this.b[d],(c=this.b[d+this.f])?(0,window.isNaN)(l.b)?(0,window.isNaN)(c.b)||(c.b==d?l=c=void 0:c=this.b[c.b]):(0,window.isNaN)(c.b)?l=this.b[l.b]:l.b==c.b?l=c=void 0:(l=this.b[l.b],c=this.b[c.b]):(0,window.isNaN)(l.b)||(l=this.b[l.b]),ZQ(this,n,m,1,1,$Q(this,l,c),2),d=n*this.f+m,l=this.b[d],(c=m+
1==this.f?void 0:this.b[d+1])?(0,window.isNaN)(l.b)?(0,window.isNaN)(c.b)||(c.b==d?l=c=void 0:c=this.b[c.b]):(0,window.isNaN)(c.b)?l=this.b[l.b]:l.b==c.b?l=c=void 0:(l=this.b[l.b],c=this.b[c.b]):(0,window.isNaN)(l.b)||(l=this.b[l.b]),ZQ(this,n,m,1,1,aR(this,l,c),1);this.I(256)}if(this.J(1024)){if(this.uB)for(;this.uB.length;){var q=this.uB.pop();$.K(q,$.Jf)?q.remove():($.U(q),$.K(q,$.pt)?(f=q,$.xt(f)&&$.xt(f).clear(f.ka())):$.K(q,$.ww)?(d=q,$.xw(d)&&$.xw(d).clear(d.ka())):$.K(q,$.X)&&(q.wt&&q.wt()&&
(d=q,d.xE(d.C0)),q.O(null),q.remove()),$.Xp(q,this.YR),q.da(!1))}n=this.g*this.f;for(m=0;m<n;m++)d=this.b[m],!(0,window.isNaN)(d.b)&&(q=d.Mh)&&($.K(q,$.gg)?(q.Ti(),$.hd(q)):($.U(q),$.Xp(q,this.YR),$.K(q,$.pt)||$.K(q,$.ww)?q.enabled(!1):q.wt&&q.wt()&&(d=q,d.xE(d.C0)),q.O(null),q.remove(),q.da(!1)));n=new $.dt;$.U(n);for(m=0;m<this.g;m++)for(l=0;l<this.f;l++)if(d=this.b[m*this.f+l],q=d.Mh,c=$.K(q,$.Jf),q){e=this.qn&&this.qn[m];h=this.Mm&&this.Mm[l];c||$.U(q);if((0,window.isNaN)(d.b)){var r=YQ(this,
m,l,d.Gw(),d.Fw(),r);n.top(this.tK("topPadding",d,e,h,this));n.right(this.tK("rightPadding",d,e,h,this));n.bottom(this.tK("bottomPadding",d,e,h,this));n.left(this.tK("leftPadding",d,e,h,this));r=n.Wi(r);if(c){q.parent(this.pE);f=q.Jd(0);var t=gR(this,"hAlign",d,e,h,"start");k=gR(this,"vAlign",d,e,h,"top");"start"==t?t="rtl"==gR(this,"textDirection",d,e,h,"rtl")?"right":"left":"end"==t&&(t="rtl"==gR(this,"textDirection",d,e,h,"rtl")?"left":"right");switch(t){case "right":d=r.left+r.width-f.$Q();break;
case "center":d=r.left+(r.width-f.$Q())/2;break;default:d=r.left}switch(k){case "bottom":e=r.top+r.height-f.ZQ();break;case "middle":e=r.top+(r.height-f.ZQ())/2;break;default:e=r.top}f.setPosition(d,e);q.clip(r)}else{q.O(this.pE);if($.K(q,$.pt))if(f=q,f.Cc({value:{x:r.left,y:r.top}}),$.xt(f)==this.Qg){f.anchor("left-top");f.width(r.width);f.height(r.height);(q=h&&h.o)&&f.K(q);(q=e&&e.o)&&f.K(q);(q=d.o)&&f.K(q);f.da(!1);continue}else e=f.i("position")||$.yt(f)&&$.yt(f).i("position")||$.xt(f)&&$.xt(f).i("position"),
e={value:$.un(r,e)},f.Cc(e),f.X();else $.K(q,$.ww)?(d=q,e=d.i("position")||$.yw(d)&&$.yw(d).i("position")||$.xw(d)&&$.xw(d).i("position"),e={value:$.un(r,e)},d.Cc(e),d.X()):$.K(q,$.X)&&(q.wt&&q.wt()&&(d=q,d.C0=d.xE(),d.xE(!1)),d=q,d.fa(r),d.X&&d.X());$.L(q,this.YR)}}c||q.da(!1)}n.da(!1);this.Qg&&($.U(this.Qg),this.Qg.K(this.D),this.Qg.O(this.pE),this.Qg.fa(this.sb()),this.Qg.X(),this.Qg.da(!1));this.I(1024)}this.Qg&&this.Qg.da(!1);this.J(8)&&(this.yb.zIndex(this.zIndex()),this.I(8));this.J(2)&&(this.yb.parent(this.O()),
this.I(2));this.Ij||this.contextMenu({Zla:!0,enabled:!0});b&&a.resume();return this};$.g.uh=function(a){return"contextmenu"==a.type?this.dispatchEvent(a):!1};$.g.remove=function(){this.yb&&this.yb.parent(null)};$.g.fontSize=function(a){$.p(a)&&(a=$.qn(a));return this.ib("fontSize",a)};$.g.fontFamily=function(a){$.p(a)&&(a=String(a));return this.ib("fontFamily",a)};$.g.o9=function(a){$.p(a)&&(a=String(a));return this.ib("fontColor",a)};
$.g.q9=function(a){$.p(a)&&(a=$.Ya(+a,0,1));return this.ib("fontOpacity",a)};$.g.p9=function(a){$.p(a)&&(a=$.Jj(a));return this.ib("fontDecoration",a)};$.g.fontStyle=function(a){$.p(a)&&(a=$.Mj(a));return this.ib("fontStyle",a)};$.g.fontVariant=function(a){$.p(a)&&(a=$.Nj(a));return this.ib("fontVariant",a)};$.g.fontWeight=function(a){$.p(a)&&(a=$.qn(a));return this.ib("fontWeight",a)};$.g.letterSpacing=function(a){$.p(a)&&(a=$.qn(a));return this.ib("letterSpacing",a)};
$.g.r9=function(a){$.p(a)&&(a=$.Oj(a));return this.ib("textDirection",a)};$.g.lineHeight=function(a){$.p(a)&&(a=$.qn(a));return this.ib("lineHeight",a)};$.g.textIndent=function(a){$.p(a)&&(a=(0,window.parseFloat)($.qn(a)));return this.ib("textIndent",a)};$.g.vAlign=function(a){$.p(a)&&(a=$.Ij(a));return this.ib("vAlign",a)};$.g.Wl=function(a){$.p(a)&&(a=$.Hj(a));return this.ib("hAlign",a)};$.g.du=function(a){return this.ib("wordBreak",a)};$.g.wordWrap=function(a){return this.ib("wordWrap",a)};
$.g.textOverflow=function(a){$.p(a)&&(a=String(a));return this.ib("textOverflow",a)};$.g.bm=function(a){$.p(a)&&(a=!!a);return this.ib("selectable",a)};$.g.td=function(a){$.p(a)&&(a=!!a);return this.ib("disablePointerEvents",a)};$.g.s9=function(a){$.p(a)&&(a=!!a);return this.ib("useHtml",a)};$.g.m9=function(a,b,c,d,e,f,h){null!=a&&(a=$.Sb.apply(null,arguments));return this.ib("fill",a,512)};$.g.z1=function(a,b,c,d,e,f,h){null!=a&&(a=$.Sb.apply(null,arguments));return this.ib("rowOddFill",a,512)};
$.g.t1=function(a,b,c,d,e,f,h){null!=a&&(a=$.Sb.apply(null,arguments));return this.ib("rowEvenFill",a,512)};$.g.l9=function(a,b,c,d,e){if($.p(a)){a=$.Ub.apply(null,arguments);$.U(this);this.ib("cellBorder",a,256);for(var f=0;4>f;f++)this.ib(LQ[f],null,256);this.da(!0);return this}return this.oX||(this.oX=new NQ(this,!0))};
$.g.n9=function(a,b,c,d){if($.p(a)){var e,f,h;if($.B(a)){var k=a;a=k[0];b=k[1];c=k[2];d=k[3];k=k.length}else k=arguments.length;if(k)$.D(a)?(e=$.qn(a.top)||0,f=$.qn(a.right)||0,h=$.qn(a.bottom)||0,l=$.qn(a.left)||0):1==k?l=h=f=e=$.qn(a)||0:2==k?(h=e=$.qn(a)||0,l=f=$.qn(b)||0):3==k?(e=$.qn(a)||0,l=f=$.qn(b)||0,h=$.qn(c)||0):4<=k&&(e=$.qn(a)||0,f=$.qn(b)||0,h=$.qn(c)||0,l=$.qn(d)||0);else var l=h=f=e=0;$.U(this);this.ib(jR[0],e,1024);this.ib(jR[1],f,1024);this.ib(jR[2],h,1024);this.ib(jR[3],l,1024);
this.da(!0);return this}return this.qX||(this.qX=new OQ(this))};$.g.YR=function(a){$.E(a.target.X)&&a.target.X()};$.g.ib=function(a,b,c){if($.p(a)){if($.p(b)){var d=!1;null===b?this.D[a]&&(delete this.D[a],d=!0):this.D[a]!=b&&(this.D[a]=b,d=!0);d&&this.u(+c||1024,1);return this}return this.D&&this.D[a]}return this.D||{}};$.g.u1=function(a,b){return $.p(b)?(this.N[a]!=b&&(null===b?delete this.N[a]:this.N[a]=b,this.u(64,1)),this):a in this.N?this.N[a]:null};$.g.GE=function(a){this.uB=this.uB||[];this.uB.push(a)};
$.g.tK=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d&&(d=d.ib(a),null!=d))return d}return 0};$.g.R=function(){$.jd(this.b,this.P,this.qn,this.Mm,this.Xu,this.xu,this.ln);$.hd(this.Qg);$.hd(this.yb);$.hd(this.pE);$.hd(this.Ij);delete this.D;TQ.B.R.call(this)};$.g.oF=function(a){var b=$.fa.anychart.exports;b?this.bt||(this.bt=b.create()):$.Sj(4,null,["Exporting"]);return $.p(a)&&this.bt?(this.bt.Y(a),this):this.bt};
$.g.Xj=function(a){var b=$.D(a)?a:{};a=b.rowsSeparator||"\n";$.Wn(a);var c=b.columnsSeparator||",";$.Wn(c);b=b.ignoreFirstRow||!1;var d=this.rU(),e=this.DP(),f,h,k,l=Array(d);for(f=0;f<d;f++)l[f]=Array(e);var m={},n=[];for(f=0;f<d;f++){for(h=0;h<e;h++)if(!(f*e+h in m)){var q=this.Fy(f,h);var r=q.content();r=$.z(r)||$.ea(r)||$.da(r)?String(r):"";-1!=r.indexOf(c)?(r=r.split('"').join('""'),r='"'+r+'"'):-1!=r.indexOf(a)&&(r=r.split('"').join('""'),r='"'+r+'"');l[f][h]=r;r=q.Fw();var t=q.Gw();if(2!=t+
r)for(q=0;q<t;q++)for(k=0;k<r;k++)if(0!=q||0!=k)l[f+q][h+k]="",m[(f+q)*e+(h+k)]=!0}n.push(l[f].join(c))}b&&n.shift();return n.join(a)};$.g.Xx=function(a){var b=$.Vj.anychart.exports;if(b){var c=this.Xj({rowsSeparator:"\n",columnsSeparator:",",ignoreFirstRow:!1});b.Xx(this,c,a)}else $.Sj(4,null,["Exporting"])};$.g.Wx=function(a,b){var c=$.Vj.anychart.exports;if(c){var d=this.Xj(a);c.Wx(this,d,b)}else $.Sj(4,null,["Exporting"])};$.H(hR,TQ);$.Vs(hR,TQ);
TQ.prototype.contextMenu=function(a){!this.Ij&&(this.Ij=$.Vj.anychart.ui.contextMenu(!0))&&(this.Ij.itemsProvider(this.IP),this.Ij.attach(this));return $.p(a)?(this.Ij&&this.Ij.setup(a),this):this.Ij};TQ.prototype.IP=function(a){var b={};$.Vj.anychart.exports&&$.Kc(b,$.Ak(pR.exporting));$.Ci()&&a.menuParent&&$.Kc(b,$.Ak(pR[a.menuParent.fullScreen()?"full-screen-exit":"full-screen-enter"]));$.Kc(b,$.Ak(pR.main));return a.menuParent.Zx(b,a)};TQ.prototype.Zx=function(a){return a};
var qR={"save-table-as":{index:10,text:"Save table as...",iconClass:"ac ac-file-image-o",subMenu:{"save-table-as-png":{index:10,text:".png",iconClass:"ac ac-file-image-o",eventType:"anychart.saveAsPng",action:function(a){a.menuParent.Ot()}},"save-table-as-jpg":{index:20,text:".jpg",iconClass:"ac ac-file-image-o",eventType:"anychart.saveAsJpg",action:function(a){a.menuParent.Mt()}},"save-table-as-pdf":{index:30,text:".pdf",iconClass:"ac ac-file-pdf-o",eventType:"anychart.saveAsPdf",action:function(a){a.menuParent.Nt()}},
"save-table-as-svg":{index:40,text:".svg",iconClass:"ac ac-file-code-o",eventType:"anychart.saveAsSvg",action:function(a){a.menuParent.Pt()}}}},"save-data-as":{index:20,text:"Save data as...",iconClass:"ac ac-save",subMenu:{"save-data-as-text":{index:10,text:".csv",iconClass:"ac ac-file-excel-o",eventType:"anychart.saveAsCsv",action:function(a){a.menuParent.Wx()}},"save-data-as-xlsx":{index:20,text:".xlsx",iconClass:"ac ac-file-excel-o",eventType:"anychart.saveAsXlsx",action:function(a){a.menuParent.Xx()}}}},
"share-with":{index:30,text:"Share with...",iconClass:"ac ac-net",subMenu:{"share-with-facebook":{index:10,text:"Facebook",iconClass:"ac ac-facebook",eventType:"anychart.shareWithFacebook",action:function(a){a.menuParent.mD()}},"share-with-twitter":{index:20,text:"Twitter",iconClass:"ac ac-twitter",eventType:"anychart.shareWithTwitter",action:function(a){a.menuParent.pD()}},"share-with-linkedin":{index:30,text:"LinkedIn",iconClass:"ac ac-linkedin",eventType:"anychart.shareWithLinkedIn",action:function(a){a.menuParent.nD()}},
"share-with-pinterest":{index:40,text:"Pinterest",iconClass:"ac ac-pinterest",eventType:"anychart.shareWithPinterest",action:function(a){a.menuParent.oD()}}}},"print-table":{index:50,text:"Print",iconClass:"ac ac-print",eventType:"anychart.print",action:function(a){a.menuParent.print()}},"full-screen-enter":{index:60,text:"Enter full screen",action:function(a){a.menuParent.fullScreen(!0)}},"full-screen-exit":{index:60,text:"Exit full screen",action:function(a){a.menuParent.fullScreen(!1)}},about:{index:80,
iconClass:"ac ac-cog",text:"AnyChart "+$.dc.apply(null,["v%s.%s.%s.%s"].concat(["8","6","0","1927"])),href:"https://anychart.com"},"link-to-help":{index:110,iconClass:"ac ac-question",text:"Need help? Go to support center!",href:"https://anychart.com/support"},"version-history":{index:120,text:"Version History",href:""}},pR={exporting:{"save-table-as":qR["save-table-as"],"save-data-as":qR["save-data-as"],"share-with":qR["share-with"],"print-table":qR["print-table"],"exporting-separator":{index:51}},
"full-screen-enter":{"full-screen-enter":qR["full-screen-enter"],"full-screen-separator":{index:61}},"full-screen-exit":{"full-screen-exit":qR["full-screen-exit"],"full-screen-separator":{index:61}},main:{about:qR.about}};TQ.prototype.fullScreen=function(a){var b=this.O();b=b?b.Ga():null;return $.p(a)?(b&&b.fullScreen(a),this):b?b.fullScreen():!1};TQ.prototype.Cx=function(){var a=this.O();return(a=a?a.Ga():null)?a.Cx():!1};var rR=TQ.prototype;rR.rowsCount=rR.rU;rR.colsCount=rR.DP;rR.getCell=rR.Fy;
rR.getRow=rR.$m;rR.getCol=rR.pX;rR.rowsHeight=rR.cga;rR.rowsMinHeight=rR.ega;rR.rowsMaxHeight=rR.dga;rR.colsWidth=rR.M$;rR.colsMinWidth=rR.L$;rR.colsMaxWidth=rR.K$;rR.border=rR.k9;rR.contents=rR.S$;rR.contextMenu=rR.contextMenu;rR.draw=rR.X;rR.fullScreen=rR.fullScreen;rR.isFullScreenAvailable=rR.Cx;rR.fontSize=rR.fontSize;rR.fontFamily=rR.fontFamily;rR.fontColor=rR.o9;rR.fontOpacity=rR.q9;rR.fontDecoration=rR.p9;rR.fontStyle=rR.fontStyle;rR.fontVariant=rR.fontVariant;rR.fontWeight=rR.fontWeight;
rR.letterSpacing=rR.letterSpacing;rR.textDirection=rR.r9;rR.lineHeight=rR.lineHeight;rR.textIndent=rR.textIndent;rR.vAlign=rR.vAlign;rR.hAlign=rR.Wl;rR.wordBreak=rR.du;rR.wordWrap=rR.wordWrap;rR.textOverflow=rR.textOverflow;rR.selectable=rR.bm;rR.disablePointerEvents=rR.td;rR.useHtml=rR.s9;rR.cellFill=rR.m9;rR.rowEvenFill=rR.t1;rR.rowOddFill=rR.z1;rR.cellBorder=rR.l9;rR.cellPadding=rR.n9;rR.saveAsPng=rR.Ot;rR.saveAsJpg=rR.Mt;rR.saveAsPdf=rR.Nt;rR.saveAsSvg=rR.Pt;rR.shareAsPng=rR.St;
rR.shareAsJpg=rR.pA;rR.shareAsPdf=rR.qA;rR.shareAsSvg=rR.rA;rR.getPngBase64String=rR.rz;rR.getJpgBase64String=rR.pz;rR.getSvgBase64String=rR.vz;rR.getPdfBase64String=rR.qz;rR.toSvg=rR.$p;rR.toCsv=rR.Xj;rR.saveAsCsv=rR.Wx;rR.saveAsXlsx=rR.Xx;rR.exports=rR.oF;rR.shareWithFacebook=rR.mD;rR.shareWithTwitter=rR.pD;rR.shareWithLinkedIn=rR.nD;rR.shareWithPinterest=rR.oD;rR.parentBounds=rR.fa;rR.container=rR.O;rR=hR.prototype;rR.draw=rR.X;$.F("anychart.standalones.table",function(a,b){return new hR(a,b)});}).call(this,$)}
