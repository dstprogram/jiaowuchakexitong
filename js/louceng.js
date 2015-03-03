//获得那一层
$(function(){
	var xmlhttp;  
    // 创建XMLHTTPRequest对象  
    function createXMLHTTPRequest()  
    {  
         if(window.ActiveXObject)//②如果当前浏览器为IE  
         {  
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");  
         }  
         else if(window.XMLHTTPRequest)//③如果是其他浏览器  
         {  
            xmlhttp = new XMLHTTPRequest();  
         }  
    }  


	$(".louceng  tr").click(function(){
		
		$(this).addClass('loucengback')
		.siblings().removeClass("loucengback");
		createXMLHTTPRequest();
		xmlhttp.open("get",)





	});
});