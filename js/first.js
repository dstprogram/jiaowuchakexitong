	var database=[
		{
			"no":1,
			"day":"4",
			"classNo":"011S0101",
			"courseName":"数据库原理",
			"teacher":"黎扬 18919904823",
			"classTime":"上午",
			"classRoom":"2,401",
			"details":"已查，通过",
			"remark":"无"
		},
		{
		"no":2,
		"day":"3",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"下午",
		"classRoom":"2,401",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":3,
		"day":"2",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"下午",
		"classRoom":"2,201",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":4,
		"day":"2",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"晚上",
		"classRoom":"2,403",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":5,
		"day":"4",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"下午",
		"classRoom":"2,403",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":6,
		"day":"5",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"上午",
		"classRoom":"3,401",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":7,
		"day":"2",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"上午",
		"classRoom":"2,401",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":8,
		"day":"4",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"下午",
		"classRoom":"3,403",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":9,
		"day":"4",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"下午",
		"classRoom":"3,403",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":10,
		"day":"4",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"晚上",
		"classRoom":"2,401",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":11,
		"day":"5",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"下午",
		"classRoom":"2,401",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":12,
		"day":"5",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"下午",
		"classRoom":"2,201",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":13,
		"day":"5",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"下午",
		"classRoom":"2,201",
		"details":"已查，通过",
		"remark":"无"
		}
		];
/*	//获取数据
	alert(database[0].no);
	alert(database[0].classNo);
	alert(database[0].courseName);
	alert(database[0].teacher);
	alert(database[0].classTime);
	alert(database[0].classRoom);
	alert(database[0].details);
	alert(database[0].remark);*/
	/*var tdText="<tr><td>"+database[i].no+"</td><td>"+database[i].classNo+"</td><td>"+database[i].courseName+"</td><td>"
			+database[0].teacher+"</td><td>"+database[0].classTime+"</td><td>"+database[0].classRoom
			+"</td><td>"+"<input type='checkbox' name='查询详情' checked='checked'>通过<input type='checkbox' name='查询详情'>不通过"
			+"</td><td>"+"<input type=textarea>"+"</td></tr>";*/
	//峰哥的
	/*var tabNode=document.getElementById('tab');
	for (var i = 0; i < database.length; i++) {
		var tr=document.createElement("tr");
		for (var j = 0; j < 8; j++){
			var td=document.createElement("td");
			td.innerHTML=i+j;
			tr.appendChild(td);
		}
		tabNode.appendChild(tr);
	};*/
	//createTable(database,database.length,8);

$(function(){	
	var mydate=new Date();
	timeH=mydate.getHours();
	timeD=mydate.getDay();
	nowdate=mydate.toLocaleString();
//默认显示当前时间
	var timeNode=document.getElementById('time');
	timeNode.innerHTML="当前时间："+nowdate;
	
});
$(function(){
//默认显示在哪一栋教学楼
	var jiaoxuelouNode=document.getElementById('jiaoxuelou').value;
//默认显示上午下午
	var jieduanNode=document.getElementById('jieduan');
	if(timeH>=6 && timeH<12)
		jieduanNode[1].selected=true;
	else if(timeH>=12 && timeH<18)
		jieduanNode[2].selected=true;
	else if (timeH>=18 && timeH<24) 
		jieduanNode[3].selected=true;
	//获得上午还是下午，用来显示数据
	var jieduan=jieduanNode.options[jieduanNode.selectedIndex].text;
	//默认显示周几
	var weekNode=document.getElementById('week');
	weekNode[timeD-1].selected=true;
	var day=weekNode.options[weekNode.selectedIndex].value;
	//用来保留生成表格的第一行，表头
	var tabText="<tr><td>"+"序号"+"</td><td>"+"课堂号"+"</td><td>"+"课程名称"+"</td><td>"
					+"教师及联系方式"+"</td><td>"+"地点时间"+"</td><td>"+"上课班级"
					+"</td><td>"+"查课详情"
					+"</td><td>"+"备注"+"</td></tr>";


//根据默认显示的教学楼、星期和阶段创建表格
	for (var i = 0; i < database.length; i++) {
		if((database[i].classRoom).split(",")[0]==jiaoxuelouNode && database[i].day==day && database[i].classTime==jieduan){
			//创建表格 		
			var j=i;
			var tdText="<td>"+database[j].no+"</td><td>"+database[j].classNo+"</td><td>"+database[j].courseName+"</td><td>"
					+database[j].teacher+"</td><td>"+database[j].classTime+"</td><td>"+database[j].classRoom
					+"</td><td>"+"<input type='button' class='resultBt' value='结果'>"
					+"</td><td>"+"<input type='text'>"+"</td>";	
			createTable(tdText,1,8);
		};
	};
	resultButton();


	//select改变后发生的响应时间

//根据教学楼查
	$('#jiaoxuelou').change(function(){
		var tabNode=document.getElementById('tab');
		tabNode.innerHTML=tabText;
		var jiaoxuelouChange=$(this).children('option:selected').val();
		for (var i = 0; i < database.length; i++) {
			if ((database[i].classRoom).split(",")[0]==jiaoxuelouChange && database[i].day==day && database[i].classTime==jieduan){
				var j=i;
				var tdText="<td>"+database[j].no+"</td><td>"+database[j].classNo+"</td><td>"+database[j].courseName+"</td><td>"
						+database[j].teacher+"</td><td>"+database[j].classTime+"</td><td>"+database[j].classRoom
						+"</td><td>"+"<input type='button' class='resultBt' value='结果'>"
						+"</td><td>"+"<input type='text'>"+"</td>";	
				createTable(tdText,r,8);
			}
		};
		resultButton();
	});

	//根据星期查
	$('#week').change(function(){
		var tabNode=document.getElementById('tab');
		tabNode.innerHTML=tabText;
		//$('#tab').html()="";
		var jiaoxuelouChange=$('#jiaoxuelou').children('option:selected').val();
		var dayChange=$(this).children('option:selected').val();
		for (var i = 0; i < database.length; i++) {
			if((database[i].classRoom).split(",")[0]==jiaoxuelouChange && database[i].day==dayChange){
				var j=i;
				 tdText="<td>"+database[j].no+"</td><td>"+database[j].classNo+"</td><td>"+database[j].courseName+"</td><td>"
						+database[j].teacher+"</td><td>"+database[j].classTime+"</td><td>"+database[j].classRoom
						+"</td><td>"+"<input type='button' class='resultBt' value='结果'/>"
						+"</td><td>"+"<input type='text'>"+"</td>";	
			createTable(tdText,1,8);
			}else {
				//createTable(database,0,0);
			}			
		};
		resultButton();
	});
	//根据上下午查
	$('#jieduan').change(function(){
		var tabNode=document.getElementById('tab');
		tabNode.innerHTML=tabText;
		var jiaoxuelouChange=$('#jiaoxuelou').children('option:selected').val();
		var dayChange=$('#week').children('option:selected').val();
		var jieduanChange=$(this).children('option:selected').val();
		for (var i = 0; i < database.length; i++) {
			if((database[i].classRoom).split(",")[0]==jiaoxuelouChange && database[i].day==dayChange && database[i].classTime==jieduanChange){
				var j=i;
				tdText="<td>"+database[j].no+"</td><td>"+database[j].classNo+"</td><td>"+database[j].courseName+"</td><td>"
						+database[j].teacher+"</td><td>"+database[j].classTime+"</td><td>"+database[j].classRoom
						+"</td><td>"+"<input type='button' class='resultBt' value='结果'/>"
						+"</td><td>"+"<input type='text'>"+"</td>";	
				createTable(tdText,1,8);
			}
		}
		resultButton();
	});
	//最后才是很据楼层查
	$(".louceng  tr").click(function(){
		$(this).addClass('loucengback')
		.siblings().removeClass("loucengback");
		var tabNode=document.getElementById('tab');
		tabNode.innerHTML=tabText;
		var jiaoxuelouChange=$('#jiaoxuelou').children('option:selected').val();
		var dayChange=$('#week').children('option:selected').val();
		var jieduanChange=$("#jieduan").children('option:selected').val();
		var loucengChange;
		//将汉字转为数字
		if($(this).text()=="一楼")
			loucengChange="1";
		else if($(this).text()=="二楼")
			loucengChange="2";
		else if($(this).text()=="三楼")
			loucengChange="3";
		else if($(this).text()=="四楼")
			loucengChange="4";
		else if($(this).text()=="五楼")
			loucengChange="5";
		else if($(this).text()=="六楼")
			loucengChange="6";
		for (var i = 0; i < database.length; i++) {
			if((database[i].classRoom).split(",")[0]==jiaoxuelouChange &&
			 database[i].day==dayChange && database[i].classTime==jieduanChange &&
			  ((database[i].classRoom).split(",")[1]).charAt(0)==loucengChange){
				var j=i;
				tdText="<td>"+database[j].no+"</td><td>"+database[j].classNo+"</td><td>"+database[j].courseName+"</td><td>"
						+database[j].teacher+"</td><td>"+database[j].classTime+"</td><td>"+database[j].classRoom
						+"</td><td>"+"<input type='button' class='resultBt' value='结果'/>"
						+"</td><td>"+"<input type='text'>"+"</td>";	
				createTable(tdText,1,8);
			}
		}
		resultButton();    
	});
});
//创建表格
function createTable(tdText,r,c){
	var tabNode=document.getElementById('tab');
	console.log(tdText);
	for (var i = 0; i <r; i++) {
		var tr=document.createElement("tr");
		tr.innerHTML+=tdText;
		tabNode.appendChild(tr);
	}
}
//点击结果响应的事件
function resultButton(){
	var changeButton;
	var hiddenDiv=document.getElementById('hiddenDiv');
	$('.resultBt').click(function(){
		changeButton=$(this);
		hiddenDiv.style.top="200px";
		hiddenDiv.style.left="430px";
		hiddenDiv.style.visibility="visible";

		$('#conform').click(function(){
			hiddenDiv.style.visibility="hidden";
			if($('input[name="result"]:checked').val()=="通过"){
				changeButton.addClass('tongguored');
				changeButton.val("通过");
			}else{
				changeButton.addClass('butongguo');
				changeButton.val("不通过");
			}
			
		});
	});
}