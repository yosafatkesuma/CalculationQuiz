b = 0;
function release(){
	a = document.getElementById("earth")
	if(b==0){
		b=1;
		a.src="images/Earth Explode.gif";
		setTimeout(show,3000);
	}
	
}
function show(){
	a = document.getElementById("explode")

	a.style.visibility="visible";
	document.getElementById("earth").src="images/space.jpg";
	setTimeout(function()
		{
			a.style.visibility="hidden";
			setTimeout(function()
				{
					document.getElementById("reset").style.visibility="visible";
				}
				,1000)
		}
		,1500);
}
function resetAll(){
	b=0;
	document.getElementById("earth").src="images/Earth Explode.jpg";
}