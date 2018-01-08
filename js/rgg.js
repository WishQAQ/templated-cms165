// JavaScript Document
lastScrollY=0;
function heartBeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
    diffY = document.documentElement.scrollTop;
else if (document.body)
    diffY = document.body.scrollTop
else
    {/*Netscape stuff*/}
    
//alert(diffY);
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
//document.getElementById("lovexin12").style.top=parseInt(document.getElementById("lovexin12").style.top)+percent+"px";
document.getElementById("lovexin14").style.top=parseInt(document.getElementById("lovexin14").style.top)+percent+"px";

lastScrollY=lastScrollY+percent; 
//alert(lastScrollY);
}


suspendcode14="<DIV id=\"lovexin14\" style='right:8px;POSITION:absolute;TOP:100px;z-index:11;'><embed src=/images/123.jpg width=150 height=180></embed><br><a href=JavaScript:; onclick=\"lovexin14.style.display = 'none'\"></a></div>"

//document.write(suspendcode12); 
document.write(suspendcode14); 
window.setInterval("heartBeat()",1);
