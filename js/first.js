$(function(){
	//获得教学楼
	var jiaoxuelouNode=document.getElementById('jiaoxuelou').value;
	var mydate=new Date();
	timeH=mydate.getHours();
	timeD=mydate.getDay();
	nowdate=mydate.toLocaleString();
	//默认显示当前时间
	var timeNode=document.getElementById('time');
	timeNode.innerHTML="当前时间："+nowdate;
	
});
$(function(){
//默认显示上午下午
	var jieduanNode=document.getElementById('jieduan');
	
	if(timeH>=8 && timeH<12)
		jieduanNode[1].selected=true;
	else if(timeH>=12 && timeH<18)
		jieduanNode[2].selected=true;
	else if (timeH>=18 && timeH<21) 
		jieduanNode[3].selected=true;
	//获得上午还是下午，用来显示数据
	alert(jieduanNode.options[jieduanNode.selectedIndex].text);
});

//默认显示周几
$(function(){
	var weekNode=document.getElementById('week');
	weekNode[timeD-1].selected=true;
});
