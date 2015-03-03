$(function(){
	var database=[
		{
			"no":1,
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
		"classNo":"011S0102",
		"courseName":"操作系统原理",
		"teacher":"小崔 18919906751",
		"classTime":"5,6,7",
		"classRoom":"2401",
		"details":"已查，通过",
		"remark":"无"
		}
		];
	/*alert(database[0].no);
	alert(database[0].classNo);
	alert(database[0].courseName);
	alert(database[0].teacher);
	alert(database[0].classTime);
	alert(database[0].classRoom);
	alert(database[0].details);
	alert(database[0].remark);*/
	var tabNode=document.getElementById('tab');
	if (true) {} else{};
	for (var i = 0; i < database.length; i++) {
		var trNode=tabNode.insertRow();
		for (var j = 0; j < 8; j++) {
			var tdNode=trNode.insertCell();
			
			tdNode.innerHTML=database[i].no;
		};
	};

});

