function chuanshu(name,shuo,ziti,bj,shu,yanse)
{
//document.getElementById("fenshu").innerHTML =shu;
$.ajax({
  url: "",
  type: "POST",
  data: {
	"name":name,
	"shuo":shuo,
	'ziti':ziti,
	'bj':bj,
	'shu':shu,
	'yanse':yanse,
    "csrfmiddlewaretoken": $("[name = 'csrfmiddlewaretoken']").val() 
  },
  success: function (data) {
    console.log(data);
  }
})
}