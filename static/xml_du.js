function xml_du() {
	var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
				if(keys) {
					for(var i = keys.length; i--;){
						document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
				}}

xmlDoc=loadXMLDoc("static/shuju.xml");

x=xmlDoc.getElementsByTagName("books");
var md_name;
var md_shuo;
var md_bj;
var md_shu;
var md_ziti;
var md_yanse;
 var c='';
 
for (i=x.length;i>0;i--)
{ 
	
	md_name=x[i-1].getElementsByTagName("name")[0].childNodes[0].nodeValue;
	md_shuo=x[i-1].getElementsByTagName("shuo")[0].childNodes[0].nodeValue;
	md_bj=x[i-1].getElementsByTagName("bj")[0].childNodes[0].nodeValue;
	md_shu=x[i-1].getElementsByTagName("shu")[0].childNodes[0].nodeValue;
	md_ziti=x[i-1].getElementsByTagName("ziti")[0].childNodes[0].nodeValue;
	md_yanse=x[i-1].getElementsByTagName("yanse")[0].childNodes[0].nodeValue;
	md_name=md_name.replace(/[\n]/g,"");
	md_shuo=md_shuo.replace(/[\n]/g,"");
	md_bj=md_bj.replace(/[\n]/g,"");
	md_shu=md_shu.replace(/[\n]/g,"");
	md_yanse=md_yanse.replace(/[\n]/g,"");
	if(md_shu==''){md_shu='0';}
	else if(parseInt(md_shu)<=99){md_shu='0';}
	else if(parseInt(md_shu)>899){md_shu='9';}
	else if(parseInt(md_shu)>799){md_shu='8';}
	else if(parseInt(md_shu)>699){md_shu='7';}
	else if(parseInt(md_shu)>599){md_shu='6';}
	else if(parseInt(md_shu)>499){md_shu='5';}
	else if(parseInt(md_shu)>399){md_shu='4';}
	else if(parseInt(md_shu)>299){md_shu='3';}
	else if(parseInt(md_shu)>199){md_shu='2';}
	else if(parseInt(md_shu)>99){md_shu='1';}
	c+='<p '
	+'style="font-size:'+md_ziti
	+md_bj
	+md_yanse
	+'">'
	+'等级'
	+md_shu
	+'的'
	+md_name
	+'说：'
	+md_shuo
	
	+'<br>'
	+'<p>';
	document.getElementById("txt1").innerHTML=c;
//document.write(path+'<br>');
	 
}


}
