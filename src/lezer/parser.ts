// This file was generated by lezer-generator. You probably shouldn't edit it.
import { LRParser } from "@lezer/lr";
const spec_identifier = {
  __proto__: null,
  true: 6,
  false: 6,
  maybe: 6,
  null: 14,
  function: 134,
};
export const parser = LRParser.deserialize({
  version: 14,
  states:
    "*hQYQPOOOOQO'#DU'#DUO!mQPO'#CdO!rOQO'#CfO!}OSO'#CfO#YOWO'#CfO#bOWO'#CfO#jO`O'#CfO#rQpO'#ChOOQO'#Ci'#CiO#zQPO'#CkO$SQPO'#CmO$ZQPO'#CnO$bQPO'#CoO$jQPO'#CsOOQO'#DS'#DSOOQO'#Cv'#CvQYQPOOOOQO,59O,59OOOOO'#Cw'#CwO$oOQO,59QOOQO,59Q,59QOOOO'#Cx'#CxO$zOSO,59QOOOO'#Cy'#CyO%VOWO,59QO%_OWO,59QOOOO'#Cz'#CzO%gO`O,59QOOQO'#C{'#C{O%oQpO,59SO%wQ!bO,59SOOQO,59V,59VOOQO,59X,59XO&VQPO,59XOOQO,59Y,59YO&^QPO,59YOOQO'#Cq'#CqO&eQPO'#CpOOQO'#C}'#C}O&jQPO,59ZOOQO,59Z,59ZO&rQPO'#CtO&zQPO,59_OOQO-E6t-E6tOOOO-E6u-E6uOOQO1G.l1G.lOOOO-E6v-E6vOOOO-E6w-E6wOOOO-E6x-E6xOOQO-E6y-E6yO'PQ!bO1G.nOOQO'#C|'#C|O'PQ!bO1G.nOOQO1G.n1G.nOOQO1G.s1G.sOOQO1G.t1G.tOYQPO,59[OOQO-E6{-E6{OOQO1G.u1G.uOOQO'#Cu'#CuOOQO'#DO'#DOO'_QPO,59`OOQO,59`,59`OOQO1G.y1G.yO'gQ!bO7+$YOOQO7+$Y7+$YOOQO-E6z-E6zOOQO'#Cr'#CrOOQO1G.v1G.vOOQO-E6|-E6|OOQO1G.z1G.zOOQO<<Gt<<Gt",
  stateData:
    "'}~OuOSPOS~OR_OSPOTPOUPOV_OX_O^_O`_OwXOyQOzRO|SO!QTO!TUO!VVO!XWO!_YO!aZO!c[O!d]O!e^O~OwbO~OZcOzeO{cO~O}fO!OeO!PeO~O!RhO!SeO~O!RhO!UeO~O!PeO!WkO~O!YmO!ZoO~O`pOwXO~O!`qO~PYO!bsO~PYOwuO!byO~O!czO~OZcOz!OO{cO~O}fO!O!OO!P!OO~O!RhO!S!OO~O!RhO!U!OO~O!P!OO!WkO~O!YmO!Z!TO~O!U!WO![!UO!]!UO!^!UO~O!`!XO~PYO!b!YO~PYOy!ZO~OwuO!b!]O~OwXO!b!aO~O!c[O~O!U!dO![!UO!]!UO!^!UO~OwXO!b!iO~O!U!jO![!UO!]!UO!^!UO~OUTS!YuP!Y~",
  goto: "$xyPPPPPPPPzPzPz!TPzPz!ez!q!u!yz!|#P#T#c#i#o#y$P$V$a$gPPP$mPz__OZ[art!Z^_OZ[art!ZQpYT!^z!`^_OZ[art!ZR!b{Tw]xTv]xR!g!ZR{^T!_z!`QaOQrZQt[V|artQdRR}dQgSR!PgQiTQjUT!QijQlVR!RlQnWR!SnQ!VoQ!c!TT!e!V!cQx]R![xQ!`zR!h!`[`OZ[artR!f!Z",
  nodeNames:
    "⚠ LineComment Program Logical Integer Floating Version null Type Char String Escape Regex Word Color Literal Symbol Inline Block Dictionary KeyValuePair Key Value Function Parameters Parameter",
  maxTerm: 67,
  skippedNodes: [0, 1],
  repeatNodeCount: 9,
  tokenData:
    "Fl~R#TOX'bXY'oYZ)cZ^'o^p'bpq'oqr*^rs*ust+Stu0euv0evw0ewx0txy2myz2|z{3]{|3o|}'b}!O4R!O!P5x!P!Q6e!Q![6z![!]9d!]!^:R!^!_;V!_!`=P!`!a=l!a!b>r!b!c0e!c!}?U!}#O@Y#O#P@i#P#QAi#Q#R0e#R#S?U#S#T'b#T#]?U#]#^Ax#^#a?U#a#bBj#b#g?U#g#hC[#h#o?U#o#pC|#p#qDm#q#rEY#r#sEg#s#y'b#y#z'o#z$f'b$f$g'o$g$q'b$q$rEy$r$s0e$s#BY'b#BY#BZ'o#BZ$IS'b$IS$I_'o$I_$I|'b$I|$JO'o$JO$JT'b$JT$JU'o$JU$KV'b$KV$KW'o$KW%&_'b%&_%&`0e%&`%&b'b%&b%&c0e%&c%&d0e%&d%&i'b%&i%&j0e%&j%&k'b%&k%&l0e%&l%&x'b%&x%&y0e%&y%'R'b%'R%'S0e%'S%'T0e%'T%'U0e%'U%'V0e%'V%)Q'b%)Q%)R0e%)R%)S0e%)S%)U'b%)U%)V0e%)V%)W0e%)W%*]'b%*]%*^0e%*^%*_0e%*_&FU'b&FU&FV'o&FV;'S'b;'S;=`FY;=`<%lFb<%l~'b~O'b~~Fg!`'oO!W`{Q!RW}S!Yp#s(OY!W`{Q!RW}S!Ypu#TX^(npq(n#y#z(n$f$g(n#BY#BZ(n$IS$I_(n$I|$JO(n$JT$JU(n$KV$KW(n&FU&FV(n#T(sYu#TX^(npq(n#y#z(n$f$g(n#BY#BZ(n$IS$I_(n$I|$JO(n$JT$JU(n$KV$KW(n&FU&FV(n#q)nY!OS!W`!RWu#TX^(npq(n#y#z(n$f$g(n#BY#BZ(n$IS$I_(n$I|$JO(n$JT$JU(n$KV$KW(n&FU&FV(n!a*mP`P!W`{Q!RW}S!Ypqr*pP*uO`P!a+SOzR!W`!RW}S!Yp!a+aV!W`{Q!RW}S!Ypst+v!Q![,h!c!i-{!i!}0T!}#O0`#T#Z-{#Z#o0TP+{P`Pst,OP,TP`Pst,WP,]P`Pst,`P,eP`Pst*pP,kR!Q![,t!c!i,t#T#Z,tP,wR!Q![-Q!c!i-Q#T#Z-QP-TR!Q![-^!c!i-^#T#Z-^P-aR!Q![-j!c!i-j#T#Z-jP-mR!Q![-v!c!i-v#T#Z-vP-{O^PP.QT^P!Q![,t!c!i.a!i!}0T#T#Z.a#Z#o0TP.fT^P!Q![-Q!c!i.u!i!}0T#T#Z.u#Z#o0TP.zT^P!Q![-^!c!i/Z!i!}0T#T#Z/Z#Z#o0TP/`T^P!Q![-j!c!i/o!i!}0T#T#Z/o#Z#o0TP/tT^P!Q![-v!c!i0T!i!}0T#T#Z0T#Z#o0TP0YQ^P!c!}0T#T#o0TP0eO!dP!a0tO`P!W`{Q!RW}S!Yp!a1TU!_P!W`{Q!RW}S!YpOw1gx#O1g#O#P1r#P;'S1g;'S;=`2g<%lO1gP1jPwx1mP1rOXPP1uTOw1gwx2Ux;'S1g;'S;=`2^;=`O1gP2ZPXPwx1mP2aQwx1m;=`<%l1gP2jP;=`<%l1g!a2|O!aP!W`{Q!RW}S!Yp!a3]O!`P!W`{Q!RW}S!Yp!a3lP`P!W`{Q!RW}S!Ypz{*p!a4OP`P!W`{Q!RW}S!Yp{|*p!a4bS`P!W`{Q!RW}S!Yp}!O4n![!]*p!^!_5h!`!a5pP4sQ`P}!O4y!`!a*pP4|P}!O5PP5SP}!O5VP5YP}!O5]P5`PYZ5cP5hO!VPP5mP`P!^!_*pP5uP`P!`!a*p!a6VQ!W`{Q!RW}S!Yp!O!P6]!P!Q*pP6bP`P!O!P*p!a6tQ!Zp`P!W`{Q!RW}Suv*p!P!Q*p!a7ZS!W`{Q!RW}SSP!Yp!O!P7g!Q![8g!g!h8x#X#Y8xP7jP!Q![7mP7rQTP!O!P7x!Q![7mP7{P!Q![8OP8TUUP{|8O}!O8O!O!P8O!Q![8O!c!}8O#T#o8OP8lSSP!O!P7g!Q![8g!g!h8x#X#Y8xP8{R{|9U}!O9U!Q![9[P9XP!Q![9[P9aPSP!Q![9[!a9sRyP!W`{Q!RW}S!Yp![!]*p!_!`*p#q#r9|W:RO!SW#s:bS!W`{Q!RW}S!YpP#TOY:nZ;'S:n;'S;=`;P<%lO:n#T:sSP#TOY:nZ;'S:n;'S;=`;P<%lO:n#T;SP;=`<%l:n!a;fV`P!W`{Q!RW}S!Yp}!O;{![!]*p!^!_<W!_!`<t!`!a*p#p#q5p#r#s5pP<QQ`P}!O5p!`!a*pP<]R`P}!O<f!^!_*p!_!`<fP<kP`P!`!a<nP<qP!`!a*pP<yQ`P!_!`5p!`!a*p!a=`S`P!W`{Q!RW}S!Yp!^!_*p!_!`5p!`!a5p#r#s*p!a={S`P!W`{Q!RW}S!Yp}!O5h![!]*p!_!`*p!`!a>XP>^Q`P}!O>d!`!a*pP>iP`P!^!_>lP>oP!^!_*p!a?RP`P!W`{Q!RW}S!Yp!a!b*p!a?eTwP!W`{Q!RW}S!Yp!Q![?t!a!b?t!c!}?t#R#S?t#T#o?tP?yTwP!Q![?t!a!b?t!c!}?t#R#S?t#T#o?t!a@iO!cP!W`{Q!RW}S!Ypo@tT`P!W`!RW}SO#OAT#O#PAY#P;'SAT;'S;=`Aa;=`OATQAYOZQRAaOZQ`PQAfPZQ;=`<%lAT!aAxO!bP!W`{Q!RW}S!Yp#sBZT![!bwP!W`{Q!RW}S!Yp!Q![?t!a!b?t!c!}?t#R#S?t#T#o?t#sB{T!]!bwP!W`{Q!RW}S!Yp!Q![?t!a!b?t!c!}?t#R#S?t#T#o?t#sCmT!^!bwP!W`{Q!RW}S!Yp!Q![?t!a!b?t!c!}?t#R#S?t#T#o?t!aD]Q!TP!W`{Q!RW}S!Yp!P!QDc![!]DhPDhO!XPPDmO!QP!aD|S`P!W`{Q!RW}S!Yp}!O*p!_!`*p!`!a*p#p#q*p#rEgO!U!j!W`{Q}S!Yp!aEvP`P!W`{Q!RW}S!Yp!`!a*p!aFYO|P!W`{Q!RW}S!Yp!`F_P!W`;=`<%l'b`FgO!W`~FlO!P~",
  tokenizers: [0, 1, 2, 3, 4, 5, 6],
  topRules: { Program: [0, 2] },
  specialized: [
    {
      term: 39,
      get: (value: number) =>
        spec_identifier.hasOwnProperty(value)
          ? (spec_identifier as any)[value]
          : -1,
    },
  ],
  tokenPrec: 313,
});
