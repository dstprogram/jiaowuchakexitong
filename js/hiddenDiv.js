function result(){
	var hiddenDiv=document.getElementById('hiddenDiv');
	hiddenDiv.style.top="200px";
	hiddenDiv.style.left="200px";
	var baseText=null;
	if(baseText==null){
		baseText=hiddenDiv.innerHTML;
	}
	hiddenDiv.innerHTML=baseText+"<div id='close'><button onclick='hiddenDivBt()'>关闭</button></div>"
	var closeNode=document.getElementById('close');
	closeNode.style.marginTop="140px";
	closeNode.style.marginLeft="100px";
	hiddenDiv.style.visibility="visible";
}


function hiddenDivBt(){
	var hiddenDiv=document.getElementById('hiddenDiv');
	hiddenDiv.style.visibility="hidden";
}