// JavaScript Document
<!--
/*MSClass (Class Of Marquee Scroll - General Uninterrupted Scrolling(JS)) Ver 2.9*\

@ Code By : Yongxiang Cui(333) E-Mail:zhadan007@21cn.com http://www.popub.net
@ Update��: 2011-12-14 (Ver 2.9.111214)
@ Examples: http://www.popub.net/script/MSClass.html

\***============== Please keep the above copyright information ==============***/

eval(function(MSClass){var d=MSClass,p=d[0],k=d[1],c=k.length,a=62,e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(['17 1V(){1c c=1W,b=1K,a;13(!(c 70 b.47)){18(1v b[0]=="2F"&&b[0].1j&&b.1j<5)||(1v b[0]!="2F"&&b.1j<5)?2z("6Z 6Y 6X 6W 6V!"):6U 1V(b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8],b[9],b[10],b[11],b[12])}c.$=17(d){18 1R.6T(d)};c.t=(c.F=["3G 2.9.6S","6R 6Q 1V 6P","6O 6N 6M(6L)","6K://6J.6I.6H/6G/3G.6F","6E 6D(4K) 6C@6B.6A"]).6z("\\n");13(!((c.c=1v(c.a=b[0]["3G"]||b[0]||b[0][0])=="2F"?c.$(c.a[0])||c.$(c.a.4J):c.$(c.a))&&c.6y.1Y().2X(6x>>4K,6w>>>4)==c.F[1].2X(6v>>>6u,14>>6t))){18 2z("4f ["+(c.a.4J||c.a[0]||c.a)+"] 6s 6r!")||(c.c=-1)}13(c.c.3F=="3q"||c.c.3F=="4p"||c.c.3F=="6q"){c.a=[0,c.c.4e];c.c=c.c.3B}c.1a=b[1]||b[0]["1a"]||0;c.1g=b[2]||b[0]["1g"]||1;c.1E=c.W=(a=b[3]||b[0]["1E"]||0)==0?1s(c.c.16.1P):a;c.1D=c.H=(a=b[4]||b[0]["1D"]||0)==0?1s(c.c.16.1S):a;c.1X=(a=b[5]||b[0]["1X"]||0)<20?(a*10||20):a;c.2g=(a=b[6]||b[0]["2g"]||0)<=4I?a*2K:a;c.2k=(a=b[7]||b[0]["2k"]||0)<=4I?(a*2K||38):a;c.1e=b[8]||b[0]["1e"]||0;c.2r=b[9]||b[0]["2r"]||0;c.2q=b[10]||b[0]["2q"];c.3i=c.$(b[11]||b[0]["6p"])||0;c.3h=c.$(b[12]||b[0]["6o"])||0;c.c.16.3m=c.c.16.4a=c.c.16.49="2C";13(b.1j>=5||b[0]["6n"]){c.3e()}}1V.3P.3e=17(){13(1W.c==-1||1W.i>=0){13(1W.i==2){1W.2v()}18 1x}1c k=1W,M=k.c,b,w,Z,1b,1u,1H,z,n,T=0,g="6m",1f=1V,R=0,s=[],h=0,O=0,d=0,r={6l:-2,6k:-1,6j:-1,28:0,6i:0,6h:1,6g:1,2Q:2,6f:3,6e:4,6d:5},S=[],1q=0,V=0,v=0,1O=0,I=0,B=0,a=0,F=0,X=0,l=0,J=0,2j=0,D=0,x=0,u=0,W=0,1A=0,c=[],1G=1C,1h=1C,t=0,o=0,Y=k.1e,P=k.2g,C=0,U=0,A=[],2l=0,N=0,Q=0;k.I=k.j=1+(k.i=k.2i=-1);13(!1f.H){1p.$?0:1p.$=k.$;1f.m=(1R.3A)?1:0;1f.4j=6c.6b.6a("69")>0;1f.H=17(m,j,i){i?0:i=0;18 1f.m?(m.2e[j]!="4H"&&m.2e[j]!="4G"&&m.2e[j]!="4F"&&m.2e[j]!="68"&&m.2e[j]!="67"&&m.2e[j]!="3y")?m.2e[j]:i:(1p.2u(m,1C)[j]!="4H"&&1p.2u(m,1C)[j]!="4G"&&1p.2u(m,1C)[j]!="4F"&&1p.2u(m,1C)[j]!="4g"&&1p.2u(m,1C)[j]!="3y")?1p.2u(m,1C)[j]:i};(1f.K=17(m,j,i){1f.m?m.66("4E"+j,i):m.65(j,i,1x)})(28.1R,"64",17(i){13((i||1p.1J).63==62){2z(k.t)}});1f.L=17(m,j,i){1f.m?m.61("4E"+j,i):m.60(j,i,1x)};1f.1Z={4q:17(i,m,j){18 m},5Z:17(i,m,j){18 m*(i/=j)*i},5Y:17(i,m,j){18-m*(i/=j)*(i-2)},5X:17(i,m,j){18(i/=j/2)<1?m/2*i*i:-m/2*((--i)*(i-2)-1)},5W:17(i,m,j){18 m*(i/=j)*i*i},5V:17(i,m,j){18 m*((i=i/j-1)*i*i+1)},5U:17(i,m,j){18(i/=j/2)<1?m/2*i*i*i:m/2*((i-=2)*i*i+2)},5T:17(i,m,j){18 m*(i/=j)*i*i*i},5S:17(i,m,j){18-m*((i=i/j-1)*i*i*i-1)},5R:17(i,m,j){18(i/=j/2)<1?m/2*i*i*i*i:-m/2*((i-=2)*i*i*i-2)},5Q:17(i,m,j){18 m*(i/=j)*i*i*i*i},5P:17(i,m,j){18 m*((i=i/j-1)*i*i*i*i+1)},5O:17(i,m,j){18(i/=j/2)<1?m/2*i*i*i*i*i:m/2*((i-=2)*i*i*i*i+2)},5N:17(i,m,j){18-m*1d.4D(i/j*(1d.1I/2))+m},5M:17(i,m,j){18 m*1d.2H(i/j*(1d.1I/2))},5L:17(i,m,j){18-m/2*(1d.4D(1d.1I*i/j)-1)},5K:17(i,m,j){18 i==0?0:m*1d.1U(2,10*(i/j-1))},5J:17(i,m,j){18 i==j?m:m*(-1d.1U(2,-10*i/j)+1)},5I:17(i,m,j){18 i==0?0:i==j?m:(i/=j/2)<1?m/2*1d.1U(2,10*(i-1)):m/2*(-1d.1U(2,-10*--i)+2)},5H:17(i,m,j){18-m*(1d.30(1-(i/=j)*i)-1)},5G:17(i,m,j){18 m*1d.30(1-(i=i/j-1)*i)},5F:17(i,m,j){18(i/=j/2)<1?-m/2*(1d.30(1-i*i)-1):m/2*(1d.30(1-(i-=2)*i)+1)},2P:17(j,1m,1o){1c m=1.2t,19=0,i=1m;13(j==0){18 0}13((j/=1o)==1){18 1m}13(!19){19=1o*0.3}13(i<1d.3E(1m)){i=1m;m=19/4}1r{m=19/(2*1d.1I)*1d.3D(1m/i)}18-(i*1d.1U(2,10*(j-=1))*1d.2H((j*1o-m)*(2*1d.1I)/19))},43:17(j,1m,1o){1c m=1.2t,19=0,i=1m;13(j==0){18 0}13((j/=1o)==1){18 1m}13(!19){19=1o*0.3}13(i<1d.3E(1m)){i=1m;m=19/4}1r{m=19/(2*1d.1I)*1d.3D(1m/i)}18 i*1d.1U(2,-10*j)*1d.2H((j*1o-m)*(2*1d.1I)/19)+1m},5E:17(j,1m,1o){1c m=1.2t,19=0,i=1m;13(j==0){18 0}13((j/=1o/2)==2){18 1m}13(!19){19=1o*(0.3*1.5)}13(i<1d.3E(1m)){i=1m;m=19/4}1r{m=19/(2*1d.1I)*1d.3D(1m/i)}13(j<1){18-0.5*(i*1d.1U(2,10*(j-=1))*1d.2H((j*1o-m)*(2*1d.1I)/19))}18 i*1d.1U(2,-10*(j-=1))*1d.2H((j*1o-m)*(2*1d.1I)/19)*0.5+1m},3k:17(i,19,m){1c j=1.2t;18 19*(i/=m)*i*((j+1)*i-j)},42:17(i,19,m){1c j=1.2t;18 19*((i=i/m-1)*i*((j+1)*i+j)+1)},5D:17(i,19,m){1c j=1.2t;18(i/=m/2)<1?19/2*(i*i*(((j*=1.4C)+1)*i-j)):19/2*((i-=2)*i*(((j*=1.4C)+1)*i+j)+2)},4B:17(i,m,j){18 m-1f.1Z.3C(j-i,m,j)},3C:17(i,m,j){18(i/=j)<1/2.2d?m*7.2Z*i*i:i<2/2.2d?m*(7.2Z*(i-=1.5/2.2d)*i+0.2d):i<2.5/2.2d?m*(7.2Z*(i-=2.25/2.2d)*i+0.5C):m*(7.2Z*(i-=2.5B/2.2d)*i+0.5A)},5z:17(i,m,j){18 i<j/2?1f.1Z.4B(i*2,m,j)*0.5:1f.1Z.3C(i*2-j,m,j)*0.5+m*0.5},5y:17(i,m,j){18 i*m/j}}}13(1v k.W=="1L"||1v k.1E=="1L"){k.1E=M.3B.4t*(1s(k.W)||1s(k.1E))/2D}13(1v k.H=="1L"||1v k.1D=="1L"){k.1D=M.3B.4s*(1s(k.H)||1s(k.1D))/2D}13(!4A(k.1E)){M.16.1P=k.1E+"1l"}13(!4A(k.1D)){M.16.1S=k.1D+"1l"}13(1v k.1a=="1L"){k.1a=r[k.1a.1Y().2L()]}Q=k.1a>1?1:0;b=Q?"<2G 4v=\'0\' 4u=\'0\' 16=\'3x-2Y:2Y;1N:3w;\'><2s><1T 3p=2x 16=\'4z-4y: 3o;4x-1M:4w-3A;\'>2p</1T><1T 3p=2x 16=\'4z-4y: 3o;4x-1M:4w-3A;\'>2p</1T></2s></2G>":"<2G 4v=\'0\' 4u=\'0\' 16=\'3x-2Y:2Y;\'><2s><1T>2p</1T></2s><2s><1T>2p</1T></2s></2G>";w=Q?k.1E:k.1D;1u=Q?"4t":"4s";1b=Q?"3O":"3N";Z=Q?"2Q":"28";k.n=M.1z;13(k.1g.1j){T=(17(i){k.1g=k.1g[0]<1?4r(k.1g[0].1Y().3n("0.","")):4r(k.1g[0]);1B(1n 5x 1f.1Z){1c j=++j||0;13((1n.2X(4)==i||i.2X(4)==1n||1n==i||i==j)&&j>=0){R=j;18 1n}}})(k.1g[1].1Y().2L()).1Y()}13(k.1g<1){T=k.1g}13(k.1g>=w){k.2r=5}3V(k.2r){21 0:k.1e=k.1e||w;1M;21 1:Y=k.1e=w;2l=o=1;1M;21 3:k.I=1A=1;1M;21 4:Y=Y||1;C=1;1M;21 5:T="4q";k.1g=k.1e=k.1e||w;1M;5w:k.2r==2?h=1:F=1f.m?k.2r:1-(h=1);13(Y>0){2l=N=1-(h=0);k.1e=w}13(1f.m&&F>0){M.16.3j="29(5v="+(P/2K*0.2)+",3l="+(F-10)+")";13(F>=33||F<10){M.2o.29.3l=1d.2A(1d.46()*22)}M.2o.29.45();M.2o.29.44()}k.1g=w;R=T=1-(o=1)}13(k.2q){1c 3z=(1v k.2q)=="1L"?[k.2q]:k.2q;1B(1n=0;1n<3z.1j;1n++){1c H=k.$(3z[1n]);13(H&&H.16.1N=="2m"){V=1;s[1n]=[H,1f.H(H,"2n","3y"),1f.H(H,"28")];H.16.2n="4b";H.16.2M="2C";H.16.28="-5u";H.16.1N="3u"}}}(k.G=17(){13(1v k.a=="2F"&&(!k.a.1j||k.a.1j>0)){1h=k.$(k.a[1])||k.$(k.a.5t);13(1h){13(1h.2U=="3q"||1h.2U=="4p"){1h.16.2T=1h.16.3x=1h.16.3s="0";1f.H(1h,"4o")=="5s"?1h.16.4o="1.15":0;13(Q&&1f.m){1h.16.1P="5r"}}1h.16.1N="3w-3u";1h.16.4h=1h.16.3s=0;1h.16.3r="2m";1B(1c 1t=0,2b=1h.1w.1j;1t<2b;1t++){1c 1k=1h.1w[1t];13(1k.2R==1){1k.16.3r="2m";13(Q){1c 4k=1s(1k.16.4n=1f.H(1k,"4n")),m=1s(1k.16.2W=1f.H(1k,"2W")),1o=1s(1k.16.4m=1f.H(1k,"4m")),3v=1s(1k.16.4l=1f.H(1k,"4l"));13(1f.H(1k,"1N")!="2G-5q"){1k.16.5p=1k.16.5o="2Q";1k.16.1N="3w";t+=(A[A.1j]=1k[1u]+4k+m+1o+3v)}1r{1f.4j?t+=(A[A.1j]=1k[1u]):t+=(A[A.1j]=1k[1u]+1o+3v)}}1r{1k.16.1N="3u";1k.16.5n="5m";A[A.1j]=1k[1u]}13(1A){c[c.1j]=1k}}}U=A.1j;k.1a<=1?t=1h[1u]:0;Q?(1h.16.1P=t+"1l")||(1h.16.1S=k.1D+"1l"):(1h.16.1S=t+"1l")||(1h.16.1P=k.1E+"1l");I=1s(M[1u]/(k.1e||w));1O=k.1i=1;13(1v k.a=="2F"&&(!k.a.1j||k.a.1j>1)){1c 2c=k.$(k.a[2])||k.a[2]||k.$(k.a.5l);13(2c&&(2c.1j||2c.2U)){1c 2E=(k.a[3]||k.a.5k||"2w").1Y().2L();(2E=="2w"||2E=="3g")?0:2E="2w";1c 1m=(k.a[4]||k.a.5j||0);k.1e=k.1e||w;1c 2a=1d.48(t/k.1e);1c 19=2a*k.1e-t;13(19>0){1B(1c 1t=1h.1w.1j-1;1t>=0;1t--){1c 1k=1h.1w[1t];13(1k.2R==1){Q?1k.16.2W=1s(1f.H(1k,"2W"))+19+"1l":1k.16.4i=1s(1f.H(1k,"4i"))+19+"1l";t+=19;1M}}}1B(1c 2V=0,3t=2c.1j||1,1Q=0,1y=2c;2V<3t;2V++){13(3t>1){1y=k.$(2c[2V])}1y.16.4h=1y.16.3s=0;1y.16.3r="2m";13(1y.2U=="3q"){1y.16.2T="0"}I=1y.1w.1j;1B(1c 1t=0;1t<I;1t++){13(1y.1w[1t].2R==1){13(2a==1Q||2a<=1){1y.1w[1t].16.1N="2m";5i}1y.1w[1t].16.2T=1f.H(1y.1w[1t],"2T","4g");1y.1w[1t].16.3m="2C";S[1Q]=1y.1w[1t];S[1Q][2E]=(17(i){18 17(){W=1F(17(){v=1;1B(1c 2S=0;2S<S.1j;2S++){S[2S].2B=""}S[i].2B=g;f(i)},1m)}})(1Q);S[1Q].31=(17(i){18 17(){2h(W);13(v){v=0;13(k.i==0){2y(x);x=2J(D,k.1X)}1r{2h(u);u=1F(p,P)}E(i)}}})(1Q);1Q+=1}}}I=1Q;a=I>1?1:0;13(S.1j>0){S[0].2B=g}13(I>0&&2a>I){B=2a-I;1B(1c 2b=0;2b<S.1j;2b++){S[2b].2w=S[2b].31=17(){}}I=2a;2z("4f ["+M.4e+"] 4d 5h 5g 5f 5e ["+B+"] 5d 5c 4d!")||0}}}Q?1h.16.1S=k.1D+"1l":1h.16.1P=k.1E+"1l";13(!1A&&(o==0||o==2)&&!h&&F==0&&k.1a>=0&&k.1a<=3){Q?1h.16.1P=t*2+"1l":1h.16.1S=t*2+"1l";1h.1z+=1h.1z}1r{Q?1h.16.1P=t+"1l":1h.16.1S=t+"1l"}}}})();13(!1O&&1A){1B(1c 1n=0,4c=M.1w.1j;1n<4c;1n++){13(M.1w[1n].2R==1){c[c.1j]=M.1w[1n]}}}13(!1O&&!1A&&(k.1a==0||k.1a==1)){M.1z=b.3n(/2p/g,M.1z)}1r{13(!1O&&!1A&&(k.1a==2||k.1a==3)){M.3p=2x;M.16.5b="3o";(k.1e==0&&P==0)?M.1z+=M.1z:M.1z=b.3n(/2p/g,M.1z)}1r{13(k.1a>=4||k.1a<=-1){13(k.1a==5||k.1a==-2){X=1}k.1a=22%k.1a;k.I=1}}}1q=k.I;1H=k.1e;z=k.1a;1O?M.16.2n=1f.H(M,"2n","5a"):0;13(2l){n=1R.59("58");n.16.1P=k.1E+"1l";n.16.1S=k.1D+"1l";n.16.2n="4b";n.16[Z]=k.1a%2?-w+"1l":w+"1l";Q?n.16.28="0":n.16.2Q="0";n.1z=M.1z;n.16.3m=n.16.4a=n.16.49="2C";M.3Z(n)}1c L=(1v T=="1L"&&o==0)?2:o,D=17(){T>0?k.1g=1d.48((k.1e-d)*T):0;y[L]()},E=17(j){13(k.i==2){18 1x}13(X){z=z>1?2:0}},f=17(j){13(k.i==2||(o==1&&j+1==k.1i)){18 1x}k.2f();13(o==0){1c m=1s(M[1b]/1H)+1;13(j+1==m&&M[1b]%1H==0){18 1x}13(m>I){m-=I}j+=1;v=1;13(j<=m){k.1e=1H*(m-j)+M[1b]%1H;k.1a=Q?3:1}1r{13(j-m==I-1){13(R==24){T="2P"}13(R==27||R==26){T="3k"}}13(m<=2&&j==I&&R==23){T="2P"}k.1e=1H*(j-m)-M[1b]%1H;k.1a=Q?2:0}k.1i=j}1r{13(o==1){13(k.i==0&&1q){k.1a=Q?5-k.1a:1-k.1a;z=k.1a}13(2l&&!N){k.1a%2?n.16[Z]=-w+M[1b]+"1l":n.16[Z]=w+M[1b]+"1l";j==I?n[1b]=1-(k.1i=1):n[1b]=w*j}k.1i=j+1}}13(k.1e>0){p(0,j)}},2O=17(m){2h(O);1c 19=m||M,i=N?2D:5,j=N?-5:5;(17(){1f.m?19.16.3j="40(2N="+i+")":19.16.2N=i/2D;i+=j;(j<0?i>=0:i<=2D)?O=1F(1K.47,k.1X):j<0?19.16.2M="2C":0})()},p=17(m,j){1c 19=k.1a%2;13(h){2O()}13(N){1c 1o=j>=0?j:k.1i;n[1b]=M[1b];n.16[Z]=1o==I?0:w*1o+"1l";n.16.2M="3X";2O(n)}13(F>0){13(F>=33||F<10){M.2o.29.3l=1d.2A(1d.46()*22)}M.2o.29.45();M.2o.29.44()}13(k.j){u=1F(p,P)}1r{2y(x);l=J=d=k.i=0;13(1q&&T>0){13((k.1a==2||k.1a==0)&&M[1u]-w-M[1b]<k.1e){k.1e=M[1u]-w-M[1b]}13(19&&M[1b]<k.1e){k.1e=M[1b]}}13(1O&&!v){19?k.1i-=1:k.1i+=1;13(1q&&o==1&&k.1i>I){k.1i=1}13(k.1i>I){1q?k.1i-=1:k.1i-=I}13(k.1i<=0){1q?k.1i=1:k.1i=I}19&&X?k.1i=1:0;13(a&&B==0){1B(1c j=0;j<I;j++){S[j].2B=""}S[k.1i-1].2B=g}}13(1q&&(1A||I>1)){13((R==22||R==24)&&((!19&&k.1i==2)||(19&&k.1i==I-1))){T="43"}13((R==23||R==24)&&(1A||(!19&&k.1i==I)||(19&&k.1i==1))){T="2P"}13((R==25||R==27)&&((!19&&k.1i==2)||(19&&k.1i==I-1))){T="42"}13((R==26||R==27)&&(1A||(!19&&k.1i==I)||(19&&k.1i==1))){T="3k"}}13(1q&&k.2i>=0){k.2i=-1;k.3T()}13(C){k.1e=K(19)}x=2J(D,k.1X);k.3S()}},q=17(){2y(x);l=J=d=1-(k.i=1);k.1e=1H;k.1a=z;13(v){18 1x}13(1q){13(o==1){}1r{13(M[1b]==0||M[1b]>=M[1u]-w){13(1A){G()}1r{13(X){k.1e=z%2?1H:M[1b]}k.2i=k.1a;k.3U();z=k.1a=Q?5-k.1a:1-k.1a}}}}k.3R();u=1F(p,P)},K=17(1o){1B(1c m=0,j=0;m<Y;m++){1c 19=(19=M.3Y("41")/1+1||1)>U?1:19;M.3d("41",19);13(1o){19=U-19+1}j+=A[19-1]}18 j},G=17(){13(Y>0){13(1G){2O(1G)}}1c j=!1O?M:1h,19=k.1a%2;1c m=19?c.1j-1:0;1G=c[m].57(2x);k.1e=c[m][1u];13(Y>0){1f.m?1G.16.3j="40(2N = 0)":1G.16.2N=0}19?j.56(1G,j.1w[0]):j.3Z(1G);j.55(c[m]);19?M[1b]=k.1e:M[1b]=M[1u]-w-k.1e;13(19){c.54(1G);c.53()}1r{c.52(1G);c.51()}},e=17(){k.y=(t*2||M[1u])/2;13(o==0&&k.y<=w+k.1g&&!1q){13(1O){1c j=M.3Y("3c")/1+1||1;M.3d("3c",j);13(j<5){k.G();1F(e,0)}}1r{M.1z=k.n}18 1x}13(1q){k.2i=Q?5-k.1a:1-k.1a}13(V){1B(1n=0;1n<s.1j;1n++){1c i=s[1n][0];i.16.2n=s[1n][1];i.16.1N="2m";i.16.2M="3X";i.16.28=s[1n][2]}}13(P>0&&k.3i){k.3i.3g=17(){k.3f(Q?5-k.1a:1-k.1a)}}13(P>0&&k.3h){k.3h.3g=17(){k.3f(k.1a)}}M[1b]=k.i=l=J=0;13(1A){13(!k.1a%2){M[1b]=M[1u]}G()}13(2l){n[1b]=k.1e}2j=1d.2A(k.1e/k.1g);13(k.2k>=50){k.i=1;13(k.2k==4Z){P=k.2g=3W}k.2k=3W;18}1F(17(){13((k.1e>=0&&k.l)||(P==0&&k.1e==-2&&k.l)){k.l()}p()},k.2k-38)},y=[17(){1c i=k.1a%2;d+=k.1g;13((d>=k.1e&&P>0)||(1q&&d>k.1g&&(M[1b]<=0||M[1b]>=M[1u]-w))){i?M[1b]-=k.1e+k.1g-d:M[1b]+=k.1e+k.1g-d;q();18}3V(i){21 0:13(M[1b]>=k.y&&!1q){M[1b]-=k.y}M[1b]+=k.1g;1M;21 1:13(M[1b]<=k.1g&&!1q){M[1b]+=k.y}M[1b]-=k.1g}},17(){13(N||h){q();18 M[1b]=k.1i==1?0:w*(k.1i-1)}1c i=k.1a%2;R>0?d+=l:d+=k.1g;13((R==0&&d>=k.1e&&P>0)||(R>0&&l>2j)){i?n.16[Z]=(1s(n.16[Z])-(k.1e-k.1g-d))+"1l":n.16[Z]=(1s(n.16[Z])+(k.1e-k.1g-d))+"1l";q();M[1b]=n[1b];i?n.16[Z]=-w+M[1b]+"1l":n.16[Z]=w+M[1b]+"1l";k.1i==I?n[1b]=0:n[1b]=w*k.1i}1r{13(R>0){J+=(k.1g=1d.2A(1f.1Z[T](l++,k.1e,2j))-J)}i?n.16[Z]=(1s(n.16[Z])+k.1g)+"1l":n.16[Z]=(1s(n.16[Z])-k.1g)+"1l"}},17(){13(l<=2j){J+=(k.1g=1d.2A(1f.1Z[T](l++,k.1e,2j))-J);13(M[1b]<=k.1g&&!1q){M[1b]+=k.y}k.1a%2?M[1b]-=k.1g:M[1b]+=k.1g}1r{13(M[1b]>k.y&&!1q){M[1b]-=k.y}q()}}];k.3f=17(j){13(k.i==1){1c i=-1;13(1v 1K[0]=="4Y"){i=1K[0]}13(1v 1K[0]=="1L"){z=i=r[1K[0].1Y().2L()]}13(i<0||i>3){2z("4X 4W 4V!");18 1x}13(k.2i==i){18 1x}k.1a=i;13(1v 1K[0]=="1L"||1q){z=k.1a}k.2I()}};k.3U=k.3T=k.3S=k.3R=17(){};k.2I=17(){2h(u);u=1F(p,1K[0])};k.3b=17(i){1p.3Q=1C;1F(17(){1p.3Q=17(){k.3b()}},2K);k.3a();k.3e()};k.3a=k.4U=17(){k.39();M.1z=k.n;M.3d("3c",M[1b]=k.2I=k.3b=k.3a=k.2v=k.39=k.2f=k.i=l=J=0);k.i=-1};k.2v=17(){13(k.i==2&&!1K[0]){k.i=d>1?0:1;x=2J(D,k.1X);18 1x}13(k.i==0){2y(x);x=2J(D,k.1X)}13(k.i==1){k.2I(P)}};k.39=17(){13(k.i!=2){k.2f();k.i=2}};k.2f=k.4T=17(){2h(W);2y(x);2h(u)};1F(e,38)};1V.3P.l=17(){1c i=1W,f=1V,h=1C,j=1C,k=0,l=0,c=0,e=0,b=i.1a>1?"3O":"3N",a=17(m){1c m=m||1p.1J;13(i.2g!=0||(m.3M&&m.3M!=1)||(m.3L&&m.3L!=1)||i.i==2||i.i==-1){18 1x}13(k==0){i.i=k=1;i.2f();m.3K?m.3K():m.4S=2x;m.3J?m.3J():m.4R=1x;c=i.c[b];l=i.1a>1?1p.1J?m.37:m.36:1p.1J?m.35:m.34;h=m.4Q||m.4P;j=h.16.32;h.16.32="4O";13(f.m){h.4N()}f.K(1R,"3I",g);f.K(1R,"3H",d)}},g=17(n){1c n=n||1p.1J;e=i.1a>1?1p.1J?n.37:n.36:1p.1J?n.35:n.34;1c m=l-e+c;13(m<=0||m>=i.y){m<=0?i.c[b]+=i.y:i.c[b]=i.y-m;l=i.1a>1?1p.1J?n.37:n.36:1p.1J?n.35:n.34;c=i.c[b];m=l-e+c}i.c[b]=m},d=17(m){13(f.m){h.4M()}f.L(1R,"3I",g);f.L(1R,"3H",d);k=i.j=0;h.16.32=j;i.2v()};13(!i.I){f.K(i.c,"4L",a)}i.c.2w=17(){13((i.i==0&&i.2g>0)||i.i==2||i.i==-1){18 1x}i.j=1;i.2f()};i.c.31=17(){13(i.j){i.j=0;i.2v()}}};','|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||if|||style|function|return|ap|Direction|aa|var|Math|ScrollStep|ah|Step|am|Counter|length|aE|px|ar|ak|aq|window|an|else|parseInt|aw|ai|typeof|childNodes|false|aD|innerHTML|af|for|null|Height|Width|setTimeout|al|ae|PI|event|arguments|string|break|display|ab|width|aA|document|height|td|pow|Marquee|this|Timer|toString|Tween||case|||||||top|revealTrans|aB|av|ay|75|currentStyle|Pause|DelayTime|clearTimeout|Bound|ao|WaitTime|ag|none|position|filters|MSCLASS_TEMP_HTML|HiddenID|SwitchType|tr|70158|getComputedStyle|Continue|onmouseover|true|clearInterval|alert|round|className|hidden|100|ax|object|table|sin|Play|setInterval|1000|toLowerCase|visibility|opacity|ac|inelastic|left|nodeType|aF|fontSize|tagName|az|marginRight|substr|collapse|5625|sqrt|onmouseout|cursor||pageY|clientY|pageX|clientX|800|Stop|Reset|ReStart|fixnum|setAttribute|Start|Run|onclick|NextBtn|PrevBtn|filter|inback|Transition|overflow|replace|nowrap|noWrap|UL|listStyle|padding|at|block|aC|inline|border|static|ad|all|parentNode|outbounce|asin|abs|nodeName|MSClass|mouseup|mousemove|preventDefault|stopPropagation|button|which|scrollTop|scrollLeft|prototype|onresize|OnPause|OnScroll|UnBound|OnBound|switch|3600000|visible|getAttribute|appendChild|alpha|nownum|outback|outelastic|play|apply|random|callee|ceil|overflowY|overflowX|absolute|aj|pages|id|The|12px|margin|marginBottom|IsFF|au|borderRightWidth|borderLeftWidth|marginLeft|lineHeight|OL|def|parseFloat|scrollHeight|scrollWidth|cellpadding|cellspacing|keep|word|space|white|isNaN|inbounce|525|cos|on|0px|medium|auto|120|MSClassID|333|mousedown|releaseCapture|setCapture|move|target|srcElement|returnValue|cancelBuble|Terminate|Destroy|set|wrong|Parameters|number|100000|60000|shift|push|pop|unshift|removeChild|insertBefore|cloneNode|div|createElement|relative|whiteSpace|actual|than|less|numbers|tab|or|continue|TabTimeout|TabEvent|TabID|both|clear|cssFloat|styleFloat|cell|100000px|normal|ContentID|10000px|Duration|default|in|simple|inoutbounce|984375|625|9375|inoutback|inoutelastic|inoutcirc|outcirc|incirc|inoutexpo|outexpo|inexpo|inoutsine|outsine|insine|inoutquint|outquint|inquint|inoutquart|outquart|inquart|inoutcubic|outcubic|incubic|inoutquad|outquad|inquad|removeEventListener|detachEvent|113|keyCode|keydown|addEventListener|attachEvent|1em|30pt|Firefox|indexOf|userAgent|navigator|rollbacktop|alterleft|right|down|bottom|up|alterup|altertop|rollbackleft|active|AutoStart|NextBtnID|PrevBtnID|DL|error|initialization|97|99|79|123|73737|constructor|join|com|21cn|zhadan007|Cui|Yongxiang|html|script|net|popub|www|http|JS|Scrolling|Uninterrupted|General|Scroll|Of|Class|111214|getElementById|new|accept|not|does|mode|Set|instanceof'.split('|')]))

//-->