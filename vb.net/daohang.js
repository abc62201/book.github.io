window.onload=function(){
	window.external.chushi();
	
var js_fmt = document.getElementById("fmt").src;
if(js_fmt="")
{
document.getElementById("fmt").style.display='none';
}
var js_yemei = document.getElementById("yemei").src;
if(js_yemei="")
{
document.getElementById("yemei").style.display='none';
}
var js_logo = document.getElementById("logo").src;
if(js_logo="")
{
document.getElementById("logo").style.display='none';
}
var js_dsh = document.getElementById("dsh").src;
if(js_dsh="")
{
document.getElementById("dsh").style.display='none';
}
var js_jiz = document.getElementById("jiz").src;
if(js_jiz="")
{
document.getElementById("jiz").style.display='none';
}
var js_renwu = document.getElementById("renwu").src;
if(js_renwu="")
{
document.getElementById("renwu").style.display='none';
}
 liebiao();
}

document.onkeydown=function(event)
 {


 if(event.keyCode == 123){
 window.external.shezhi();
 }
  
  }