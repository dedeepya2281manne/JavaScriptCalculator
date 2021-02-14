function display(value){
	document.getElementById('equation').value+=value
}

function calculate(){
	var value=document.getElementById('equation').value
	var result=eval(value);
	document.getElementById('equation').value=result
}
function clr(){
	document.getElementById('equation').value=""
}