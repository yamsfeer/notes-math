import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,a as s,b as t,e as a}from"./app-22722871.js";const o={},c=s("h1",{id:"线性组合、张成空间、基",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#线性组合、张成空间、基","aria-hidden":"true"},"#"),t(" 线性组合、张成空间、基")],-1),i=s("p",null,"本节要介绍三个概念，线性组合、张成空间、基，它们之间相互联系，我们一个个来介绍。",-1),h={class:"katex"},_=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"i"),s("mo",null,"⃗")]),s("mo",null,"="),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mn",null,"0"),s("mo",{stretchy:"false"},")"),s("mo",{separator:"true"},","),s("mover",{accent:"true"},[s("mi",null,"j"),s("mo",null,"⃗")]),s("mo",null,"="),s("mo",{stretchy:"false"},"("),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\vec{i}=(1,0),\\vec{j}=(0,1)")])])],-1),m={class:"katex-html","aria-hidden":"true"},p={class:"base"},d=s("span",{class:"strut",style:{height:"0.9425em"}},null,-1),r={class:"mord accent"},g={class:"vlist-t"},u={class:"vlist-r"},y={class:"vlist",style:{height:"0.9425em"}},w=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"i")],-1),v={style:{top:"-3.2285em"}},x=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),M={class:"accent-body",style:{left:"-0.2355em"}},b={class:"overlay",style:{height:"0.714em",width:"0.471em"}},k={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},f=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),S=[f],z=s("span",{class:"mspace",style:{"margin-right":"0.2778em"}},null,-1),B=s("span",{class:"mrel"},"=",-1),A=s("span",{class:"mspace",style:{"margin-right":"0.2778em"}},null,-1),H={class:"base"},R=a('<span class="strut" style="height:1.1925em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">0</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span>',9),Y={class:"mord accent"},L={class:"vlist-t vlist-t2"},j={class:"vlist-r"},K={class:"vlist",style:{height:"0.9425em"}},N=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j")],-1),V={style:{top:"-3.2285em"}},q=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),E={class:"accent-body",style:{left:"-0.2355em"}},T={class:"overlay",style:{height:"0.714em",width:"0.471em"}},C={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},D=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),F=[D],G=s("span",{class:"vlist-s"},"​",-1),I=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])],-1),J=s("span",{class:"mspace",style:{"margin-right":"0.2778em"}},null,-1),O=s("span",{class:"mrel"},"=",-1),P=s("span",{class:"mspace",style:{"margin-right":"0.2778em"}},null,-1),Q=a('<span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)</span></span>',1),U={class:"katex"},W=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"i"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{i}")])])],-1),X={class:"katex-html","aria-hidden":"true"},Z={class:"base"},$=s("span",{class:"strut",style:{height:"0.9425em"}},null,-1),ss={class:"mord accent"},ts={class:"vlist-t"},es={class:"vlist-r"},ns={class:"vlist",style:{height:"0.9425em"}},as=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"i")],-1),ls={style:{top:"-3.2285em"}},os=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),cs={class:"accent-body",style:{left:"-0.2355em"}},is={class:"overlay",style:{height:"0.714em",width:"0.471em"}},hs={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},_s=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),ms=[_s],ps={class:"katex"},ds=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"j"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{j}")])])],-1),rs={class:"katex-html","aria-hidden":"true"},gs={class:"base"},us=s("span",{class:"strut",style:{height:"1.137em","vertical-align":"-0.1944em"}},null,-1),ys={class:"mord accent"},ws={class:"vlist-t vlist-t2"},vs={class:"vlist-r"},xs={class:"vlist",style:{height:"0.9425em"}},Ms=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j")],-1),bs={style:{top:"-3.2285em"}},ks=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),fs={class:"accent-body",style:{left:"-0.2355em"}},Ss={class:"overlay",style:{height:"0.714em",width:"0.471em"}},zs={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},Bs=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),As=[Bs],Hs=s("span",{class:"vlist-s"},"​",-1),Rs=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])],-1),Ys=s("strong",null,[t("基向量( "),s("em",null,"basis vectors"),t(" )")],-1),Ls=s("img",{class:"img-shadow",src:"https://raw.githubusercontent.com/yamsfeer/pic-bed/master/e6c9d24egy1h2sx19cpu8g20k00bagrp.gif",alt:"Kapture 2022-06-01 at 18.03.21",style:{zoom:"75%"}},null,-1),js={class:"katex"},Ks=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"v"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{v}")])])],-1),Ns={class:"katex-html","aria-hidden":"true"},Vs={class:"base"},qs=s("span",{class:"strut",style:{height:"0.714em"}},null,-1),Es={class:"mord accent"},Ts={class:"vlist-t"},Cs={class:"vlist-r"},Ds={class:"vlist",style:{height:"0.714em"}},Fs=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v")],-1),Gs={style:{top:"-3em"}},Is=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),Js={class:"accent-body",style:{left:"-0.2077em"}},Os={class:"overlay",style:{height:"0.714em",width:"0.471em"}},Ps={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},Qs=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Us=[Qs],Ws={class:"katex"},Xs=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"w"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{w}")])])],-1),Zs={class:"katex-html","aria-hidden":"true"},$s={class:"base"},st=s("span",{class:"strut",style:{height:"0.714em"}},null,-1),tt={class:"mord accent"},et={class:"vlist-t"},nt={class:"vlist-r"},at={class:"vlist",style:{height:"0.714em"}},lt=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w")],-1),ot={style:{top:"-3em"}},ct=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),it={class:"accent-body",style:{left:"-0.1522em"}},ht={class:"overlay",style:{height:"0.714em",width:"0.471em"}},_t={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},mt=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),pt=[mt],dt={class:"katex"},rt=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"a"),s("mover",{accent:"true"},[s("mi",null,"v"),s("mo",null,"⃗")]),s("mo",null,"+"),s("mi",null,"b"),s("mover",{accent:"true"},[s("mi",null,"w"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"a\\vec{v} + b\\vec{w}")])])],-1),gt={class:"katex-html","aria-hidden":"true"},ut={class:"base"},yt=s("span",{class:"strut",style:{height:"0.7973em","vertical-align":"-0.0833em"}},null,-1),wt=s("span",{class:"mord mathnormal"},"a",-1),vt={class:"mord accent"},xt={class:"vlist-t"},Mt={class:"vlist-r"},bt={class:"vlist",style:{height:"0.714em"}},kt=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v")],-1),ft={style:{top:"-3em"}},St=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),zt={class:"accent-body",style:{left:"-0.2077em"}},Bt={class:"overlay",style:{height:"0.714em",width:"0.471em"}},At={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},Ht=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Rt=[Ht],Yt=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),Lt=s("span",{class:"mbin"},"+",-1),jt=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),Kt={class:"base"},Nt=s("span",{class:"strut",style:{height:"0.714em"}},null,-1),Vt=s("span",{class:"mord mathnormal"},"b",-1),qt={class:"mord accent"},Et={class:"vlist-t"},Tt={class:"vlist-r"},Ct={class:"vlist",style:{height:"0.714em"}},Dt=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w")],-1),Ft={style:{top:"-3em"}},Gt=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),It={class:"accent-body",style:{left:"-0.1522em"}},Jt={class:"overlay",style:{height:"0.714em",width:"0.471em"}},Ot={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},Pt=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Qt=[Pt],Ut=s("em",null,"基向量有一些限制条件，后面会提到。",-1),Wt={class:"katex"},Xt=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"a"),s("mover",{accent:"true"},[s("mi",null,"v"),s("mo",null,"⃗")]),s("mo",null,"+"),s("mi",null,"b"),s("mover",{accent:"true"},[s("mi",null,"w"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"a\\vec{v} + b\\vec{w}")])])],-1),Zt={class:"katex-html","aria-hidden":"true"},$t={class:"base"},s3=s("span",{class:"strut",style:{height:"0.7973em","vertical-align":"-0.0833em"}},null,-1),t3=s("span",{class:"mord mathnormal"},"a",-1),e3={class:"mord accent"},n3={class:"vlist-t"},a3={class:"vlist-r"},l3={class:"vlist",style:{height:"0.714em"}},o3=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v")],-1),c3={style:{top:"-3em"}},i3=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),h3={class:"accent-body",style:{left:"-0.2077em"}},_3={class:"overlay",style:{height:"0.714em",width:"0.471em"}},m3={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},p3=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),d3=[p3],r3=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),g3=s("span",{class:"mbin"},"+",-1),u3=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),y3={class:"base"},w3=s("span",{class:"strut",style:{height:"0.714em"}},null,-1),v3=s("span",{class:"mord mathnormal"},"b",-1),x3={class:"mord accent"},M3={class:"vlist-t"},b3={class:"vlist-r"},k3={class:"vlist",style:{height:"0.714em"}},f3=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w")],-1),S3={style:{top:"-3em"}},z3=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),B3={class:"accent-body",style:{left:"-0.1522em"}},A3={class:"overlay",style:{height:"0.714em",width:"0.471em"}},H3={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},R3=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Y3=[R3],L3=s("strong",null,[t("线性组合( "),s("em",null,"Linear combination"),t(" )")],-1),j3=s("img",{class:"img-shadow",src:"https://raw.githubusercontent.com/yamsfeer/pic-bed/master/e6c9d24egy1h2sx1i03kfg20k00baald.gif",alt:"Kapture 2022-06-01 at 18.08.48",style:{zoom:"75%"}},null,-1),K3=s("p",null,"当然，当两个向量共线时，能得到的向量就有限了。它们可能都落在一条直线或一个点上。",-1),N3=s("img",{class:"img-shadow",src:"https://raw.githubusercontent.com/yamsfeer/pic-bed/master/e6c9d24egy1h2uan4wwoog20k00baai0.gif",alt:"Kapture 2022-06-02 at 22.54.53",style:{zoom:"75%"}},null,-1),V3={class:"katex"},q3=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"v"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{v}")])])],-1),E3={class:"katex-html","aria-hidden":"true"},T3={class:"base"},C3=s("span",{class:"strut",style:{height:"0.714em"}},null,-1),D3={class:"mord accent"},F3={class:"vlist-t"},G3={class:"vlist-r"},I3={class:"vlist",style:{height:"0.714em"}},J3=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v")],-1),O3={style:{top:"-3em"}},P3=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),Q3={class:"accent-body",style:{left:"-0.2077em"}},U3={class:"overlay",style:{height:"0.714em",width:"0.471em"}},W3={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},X3=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Z3=[X3],$3={class:"katex"},se=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"w"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{w}")])])],-1),te={class:"katex-html","aria-hidden":"true"},ee={class:"base"},ne=s("span",{class:"strut",style:{height:"0.714em"}},null,-1),ae={class:"mord accent"},le={class:"vlist-t"},oe={class:"vlist-r"},ce={class:"vlist",style:{height:"0.714em"}},ie=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w")],-1),he={style:{top:"-3em"}},_e=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),me={class:"accent-body",style:{left:"-0.1522em"}},pe={class:"overlay",style:{height:"0.714em",width:"0.471em"}},de={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},re=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),ge=[re],ue=s("strong",null,"线性组合",-1),ye=s("strong",null,[t("张成的空间( "),s("em",null,"span"),t(" )")],-1),we={class:"katex"},ve=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"v"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{v}")])])],-1),xe={class:"katex-html","aria-hidden":"true"},Me={class:"base"},be=s("span",{class:"strut",style:{height:"0.714em"}},null,-1),ke={class:"mord accent"},fe={class:"vlist-t"},Se={class:"vlist-r"},ze={class:"vlist",style:{height:"0.714em"}},Be=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v")],-1),Ae={style:{top:"-3em"}},He=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),Re={class:"accent-body",style:{left:"-0.2077em"}},Ye={class:"overlay",style:{height:"0.714em",width:"0.471em"}},Le={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},je=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Ke=[je],Ne={class:"katex"},Ve=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"w"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{w}")])])],-1),qe={class:"katex-html","aria-hidden":"true"},Ee={class:"base"},Te=s("span",{class:"strut",style:{height:"0.714em"}},null,-1),Ce={class:"mord accent"},De={class:"vlist-t"},Fe={class:"vlist-r"},Ge={class:"vlist",style:{height:"0.714em"}},Ie=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w")],-1),Je={style:{top:"-3em"}},Oe=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),Pe={class:"accent-body",style:{left:"-0.1522em"}},Qe={class:"overlay",style:{height:"0.714em",width:"0.471em"}},Ue={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},We=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Xe=[We],Ze=s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x"),s("mi",null,"y")]),s("annotation",{encoding:"application/x-tex"},"xy")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y")])])],-1),$e=s("p",null,"向量张成的空间实际上是指，向量通过加法和数乘两种基本运算能得到的所有可能向量是什么。",-1),s1=s("img",{class:"img-shadow",src:"https://raw.githubusercontent.com/yamsfeer/pic-bed/master/e6c9d24egy1h2uav5bxcug20k00bagt7.gif",alt:"Kapture 2022-06-02 at 22.54.53",style:{zoom:"75%"}},null,-1),t1=s("p",null,"3 维空间中的也是类似的，线性组合需要 3 个向量。",-1),e1={class:"katex-block"},n1={class:"katex-display"},a1={class:"katex"},l1=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"a"),s("mover",{accent:"true"},[s("mi",null,"v"),s("mo",null,"⃗")]),s("mo",null,"+"),s("mi",null,"b"),s("mover",{accent:"true"},[s("mi",null,"w"),s("mo",null,"⃗")]),s("mo",null,"+"),s("mi",null,"c"),s("mover",{accent:"true"},[s("mi",null,"u"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"}," a\\vec{v}+b\\vec{w}+c\\vec{u} ")])])],-1),o1={class:"katex-html","aria-hidden":"true"},c1={class:"base"},i1=s("span",{class:"strut",style:{height:"0.7973em","vertical-align":"-0.0833em"}},null,-1),h1=s("span",{class:"mord mathnormal"},"a",-1),_1={class:"mord accent"},m1={class:"vlist-t"},p1={class:"vlist-r"},d1={class:"vlist",style:{height:"0.714em"}},r1=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v")],-1),g1={style:{top:"-3em"}},u1=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),y1={class:"accent-body",style:{left:"-0.2077em"}},w1={class:"overlay",style:{height:"0.714em",width:"0.471em"}},v1={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},x1=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),M1=[x1],b1=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),k1=s("span",{class:"mbin"},"+",-1),f1=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),S1={class:"base"},z1=s("span",{class:"strut",style:{height:"0.7973em","vertical-align":"-0.0833em"}},null,-1),B1=s("span",{class:"mord mathnormal"},"b",-1),A1={class:"mord accent"},H1={class:"vlist-t"},R1={class:"vlist-r"},Y1={class:"vlist",style:{height:"0.714em"}},L1=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w")],-1),j1={style:{top:"-3em"}},K1=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),N1={class:"accent-body",style:{left:"-0.1522em"}},V1={class:"overlay",style:{height:"0.714em",width:"0.471em"}},q1={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},E1=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),T1=[E1],C1=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),D1=s("span",{class:"mbin"},"+",-1),F1=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),G1={class:"base"},I1=s("span",{class:"strut",style:{height:"0.714em"}},null,-1),J1=s("span",{class:"mord mathnormal"},"c",-1),O1={class:"mord accent"},P1={class:"vlist-t"},Q1={class:"vlist-r"},U1={class:"vlist",style:{height:"0.714em"}},W1=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"u")],-1),X1={style:{top:"-3em"}},Z1=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),$1={class:"accent-body",style:{left:"-0.2077em"}},sn={class:"overlay",style:{height:"0.714em",width:"0.471em"}},tn={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},en=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),nn=[en],an=s("p",null,"由于第 3 个向量的存在，使得线性组合的可能性扩大到整个 3 维空间。",-1),ln=s("img",{class:"img-shadow",src:"https://raw.githubusercontent.com/yamsfeer/pic-bed/master/e6c9d24egy1h2ubhhqhmag20k00ba7rf.gif",alt:"三维张成的空间",style:{zoom:"75%"}},null,-1),on={class:"katex"},cn=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"v"),s("mo",null,"⃗")]),s("mo",{separator:"true"},","),s("mover",{accent:"true"},[s("mi",null,"w"),s("mo",null,"⃗")]),s("mo",{separator:"true"},","),s("mover",{accent:"true"},[s("mi",null,"u"),s("mo",null,"⃗")])]),s("annotation",{encoding:"application/x-tex"},"\\vec{v},\\vec{w},\\vec{u}")])])],-1),hn={class:"katex-html","aria-hidden":"true"},_n={class:"base"},mn=s("span",{class:"strut",style:{height:"0.9084em","vertical-align":"-0.1944em"}},null,-1),pn={class:"mord accent"},dn={class:"vlist-t"},rn={class:"vlist-r"},gn={class:"vlist",style:{height:"0.714em"}},un=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v")],-1),yn={style:{top:"-3em"}},wn=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),vn={class:"accent-body",style:{left:"-0.2077em"}},xn={class:"overlay",style:{height:"0.714em",width:"0.471em"}},Mn={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},bn=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),kn=[bn],fn=s("span",{class:"mpunct"},",",-1),Sn=s("span",{class:"mspace",style:{"margin-right":"0.1667em"}},null,-1),zn={class:"mord accent"},Bn={class:"vlist-t"},An={class:"vlist-r"},Hn={class:"vlist",style:{height:"0.714em"}},Rn=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w")],-1),Yn={style:{top:"-3em"}},Ln=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),jn={class:"accent-body",style:{left:"-0.1522em"}},Kn={class:"overlay",style:{height:"0.714em",width:"0.471em"}},Nn={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},Vn=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),qn=[Vn],En=s("span",{class:"mpunct"},",",-1),Tn=s("span",{class:"mspace",style:{"margin-right":"0.1667em"}},null,-1),Cn={class:"mord accent"},Dn={class:"vlist-t"},Fn={class:"vlist-r"},Gn={class:"vlist",style:{height:"0.714em"}},In=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"u")],-1),Jn={style:{top:"-3em"}},On=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),Pn={class:"accent-body",style:{left:"-0.2077em"}},Qn={class:"overlay",style:{height:"0.714em",width:"0.471em"}},Un={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},Wn=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Xn=[Wn],Zn=s("strong",null,[t("线性相关( "),s("em",null,"Linearly dependent"),t(" )")],-1),$n=a('<p>否则，它们是<strong>线性无关( <em>Linearly independent</em> )</strong> 的。</p><img class="img-shadow" src="https://raw.githubusercontent.com/yamsfeer/pic-bed/master/e6c9d24egy1h2uc23o3t0g20k00bau0x.gif" alt="Kapture 2022-06-02 at 23.41.21" style="zoom:75%;"><p>至此，我们可以给出基向量的严格定义：向量空间的一组<strong>基向量</strong>是<strong>张成</strong>该空间的一个<strong>线性无关</strong>向量集。</p>',3);function sa(ta,ea){return e(),n("div",null,[c,i,s("p",null,[t("假设有两个向量 "),s("span",h,[_,s("span",m,[s("span",p,[d,s("span",r,[s("span",g,[s("span",u,[s("span",y,[w,s("span",v,[x,s("span",M,[s("span",b,[(e(),n("svg",k,S))])])])])])])]),z,B,A]),s("span",H,[R,s("span",Y,[s("span",L,[s("span",j,[s("span",K,[N,s("span",V,[q,s("span",E,[s("span",T,[(e(),n("svg",C,F))])])])]),G]),I])]),J,O,P]),Q])]),t("，通过向量加法和向量数乘运算，可以得到一个新的向量。")]),s("p",null,[s("span",U,[W,s("span",X,[s("span",Z,[$,s("span",ss,[s("span",ts,[s("span",es,[s("span",ns,[as,s("span",ls,[os,s("span",cs,[s("span",is,[(e(),n("svg",hs,ms))])])])])])])])])])]),t(" 和 "),s("span",ps,[ds,s("span",rs,[s("span",gs,[us,s("span",ys,[s("span",ws,[s("span",vs,[s("span",xs,[Ms,s("span",bs,[ks,s("span",fs,[s("span",Ss,[(e(),n("svg",zs,As))])])])]),Hs]),Rs])])])])]),t(" 称为这个坐标系的"),Ys,t("。")]),Ls,s("p",null,[t("当然，基向量的选择可以多种，随便选择空间中的两个向量 "),s("span",js,[Ks,s("span",Ns,[s("span",Vs,[qs,s("span",Es,[s("span",Ts,[s("span",Cs,[s("span",Ds,[Fs,s("span",Gs,[Is,s("span",Js,[s("span",Os,[(e(),n("svg",Ps,Us))])])])])])])])])])]),t(" 和 "),s("span",Ws,[Xs,s("span",Zs,[s("span",$s,[st,s("span",tt,[s("span",et,[s("span",nt,[s("span",at,[lt,s("span",ot,[ct,s("span",it,[s("span",ht,[(e(),n("svg",_t,pt))])])])])])])])])])]),t(" 作为基，它们通过 "),s("span",dt,[rt,s("span",gt,[s("span",ut,[yt,wt,s("span",vt,[s("span",xt,[s("span",Mt,[s("span",bt,[kt,s("span",ft,[St,s("span",zt,[s("span",Bt,[(e(),n("svg",At,Rt))])])])])])])]),Yt,Lt,jt]),s("span",Kt,[Nt,Vt,s("span",qt,[s("span",Et,[s("span",Tt,[s("span",Ct,[Dt,s("span",Ft,[Gt,s("span",It,[s("span",Jt,[(e(),n("svg",Ot,Qt))])])])])])])])])])]),t(" 可以得到空间中的任意一个向量。("),Ut,t(")")]),s("p",null,[s("span",Wt,[Xt,s("span",Zt,[s("span",$t,[s3,t3,s("span",e3,[s("span",n3,[s("span",a3,[s("span",l3,[o3,s("span",c3,[i3,s("span",h3,[s("span",_3,[(e(),n("svg",m3,d3))])])])])])])]),r3,g3,u3]),s("span",y3,[w3,v3,s("span",x3,[s("span",M3,[s("span",b3,[s("span",k3,[f3,s("span",S3,[z3,s("span",B3,[s("span",A3,[(e(),n("svg",H3,Y3))])])])])])])])])])]),t(" 称为这两个向量的"),L3,t("。")]),j3,K3,N3,s("p",null,[s("span",V3,[q3,s("span",E3,[s("span",T3,[C3,s("span",D3,[s("span",F3,[s("span",G3,[s("span",I3,[J3,s("span",O3,[P3,s("span",Q3,[s("span",U3,[(e(),n("svg",W3,Z3))])])])])])])])])])]),t(" 和 "),s("span",$3,[se,s("span",te,[s("span",ee,[ne,s("span",ae,[s("span",le,[s("span",oe,[s("span",ce,[ie,s("span",he,[_e,s("span",me,[s("span",pe,[(e(),n("svg",de,ge))])])])])])])])])])]),t(" 全部"),ue,t("构成的向量集合称为"),ye,t("。")]),s("p",null,[t("很明显，"),s("span",we,[ve,s("span",xe,[s("span",Me,[be,s("span",ke,[s("span",fe,[s("span",Se,[s("span",ze,[Be,s("span",Ae,[He,s("span",Re,[s("span",Ye,[(e(),n("svg",Le,Ke))])])])])])])])])])]),t(" 和 "),s("span",Ne,[Ve,s("span",qe,[s("span",Ee,[Te,s("span",Ce,[s("span",De,[s("span",Fe,[s("span",Ge,[Ie,s("span",Je,[Oe,s("span",Pe,[s("span",Qe,[(e(),n("svg",Ue,Xe))])])])])])])])])])]),t(" 张成的空间就是 "),Ze,t(" 平面。")]),$e,s1,t1,s("p",e1,[s("span",n1,[s("span",a1,[l1,s("span",o1,[s("span",c1,[i1,h1,s("span",_1,[s("span",m1,[s("span",p1,[s("span",d1,[r1,s("span",g1,[u1,s("span",y1,[s("span",w1,[(e(),n("svg",v1,M1))])])])])])])]),b1,k1,f1]),s("span",S1,[z1,B1,s("span",A1,[s("span",H1,[s("span",R1,[s("span",Y1,[L1,s("span",j1,[K1,s("span",N1,[s("span",V1,[(e(),n("svg",q1,T1))])])])])])])]),C1,D1,F1]),s("span",G1,[I1,J1,s("span",O1,[s("span",P1,[s("span",Q1,[s("span",U1,[W1,s("span",X1,[Z1,s("span",$1,[s("span",sn,[(e(),n("svg",tn,nn))])])])])])])])])])])])]),an,ln,s("p",null,[t("如果在 "),s("span",on,[cn,s("span",hn,[s("span",_n,[mn,s("span",pn,[s("span",dn,[s("span",rn,[s("span",gn,[un,s("span",yn,[wn,s("span",vn,[s("span",xn,[(e(),n("svg",Mn,kn))])])])])])])]),fn,Sn,s("span",zn,[s("span",Bn,[s("span",An,[s("span",Hn,[Rn,s("span",Yn,[Ln,s("span",jn,[s("span",Kn,[(e(),n("svg",Nn,qn))])])])])])])]),En,Tn,s("span",Cn,[s("span",Dn,[s("span",Fn,[s("span",Gn,[In,s("span",Jn,[On,s("span",Pn,[s("span",Qn,[(e(),n("svg",Un,Xn))])])])])])])])])])]),t(" 三个向量中，有一个向量能被表示为另外两个的线性组合，或者说， 有一个向量在另两个向量的张成空间中，则称它们是"),Zn,t(" 的。")]),$n])}const la=l(o,[["render",sa],["__file","2.线性组合、张成的空间、基.html.vue"]]);export{la as default};
