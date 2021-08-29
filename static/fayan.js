var dengji='0';
function fayan()
{
	var js_name=document.getElementById("name").value;
	var js_shuo = document.getElementById("shuo").value;
	var js_ziti = document.getElementById("ziti").value;
	var js_bj = document.getElementById("bj").value;
	var js_yanse = document.getElementById("yanse").value;
	var js_text=document.getElementById("txt1");
	var js_shu = fenshu;
	//js_name=js_name.replace(/"'"/g,"&apos;") 
	// if(js_ziti=='volvo'){js_ziti='15px;';}
	// if(js_bj=='volvo'){js_bj='background: #ffffff;';}
	// if(js_yanse=='volvo'){js_yanse='color: #000000;';}
	if(js_shuo==''||js_name==''){alert('名字或发言不能为空');}else{
	chuanshu(js_name,js_shuo,js_ziti,js_bj,js_shu,js_yanse);
	fenshu=0;
	var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
				if(keys) {
					for(var i = keys.length; i--;){
						document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
				}}
	//xml_du();
	//alert(js_name+"说："+js_shuo+':'+js_text.innerHTML);
	document.getElementById("txt1").innerHTML=js_name+"说："+js_shuo+':'+js_text.innerHTML;
	document.getElementById("shuo").value='';}
	
}