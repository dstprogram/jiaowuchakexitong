$(function(){
	var database=[
		{
			"no":1,
			"day":"3",
			"classNo":"011S0101",
			"courseName":"数据库原理",
			"teacher":"黎扬 18919904823",
			"classTime":"3,4",
			"classRoom":"2401",
			"details":"已查，通过",
			"remark":"无"
		},
		{
		"no":2,
		"day":"3",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"5,6,7",
		"classRoom":"2401",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":3,
		"day":"3",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"5,6,7",
		"classRoom":"2401",
		"details":"已查，通过",
		"remark":"无"
		},
		{
		"no":4,
		"day":"2",
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"5,6,7",
		"classRoom":"2401",
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




	createTable(database,database.length,8);

	/*for (var i = 0; i < database.length; i++) {
		if(database[i].day==day && database[i].classTime==jieduan){
			//创建表格
			
			
		}
	};*/
});
//创建表格
function createTable(database,r,c){
	var tabNode=document.getElementById('tab');
	for (var i = 0; i <r; i++) {
		var tr=document.createElement("tr");
		var tdText="<td>"+database[i].no+"</td><td>"+database[i].classNo+"</td><td>"+database[i].courseName+"</td><td>"
			+database[i].teacher+"</td><td>"+database[i].classTime+"</td><td>"+database[i].classRoom
			+"</td><td>"+"<input type='button' value='结果'>"
			+"</td><td>"+"<input type='text'>"+"</td>";
		tr.innerHTML+=tdText;
		tabNode.appendChild(tr);
	}
}