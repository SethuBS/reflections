// Options
// Copyright (c) 2010-2014 smart people on ice, LLC.
// All rights reserved.  Must not be reproduced without express written permission of smart people on ice, LLC.
//
// If you can read this you are in violation of the EULA:
// https://spoi.com/options/EULA

console.log(localStorage);

var options = JSON.stringify(localStorage);

var d = document;
if (d.getElementById('old_options')) {
	d.getElementById('old_options').value=options;
	console.log("\nALL:");
	console.log(options);
	d.getElementById('old_options').addEventListener('mouseup',function(){this.select();},true);
}
if (localStorage.Prof0!='' && localStorage.Prof0!=undefined && d.getElementById('ps1')) {
	d.getElementById('ps1_options').value=localStorage.Prof0;
	d.getElementById('ps1').style.display='block';
	console.log("\nPROF1:");
	console.log(localStorage.Prof0);
	d.getElementById('ps1_options').addEventListener('mouseup',function(){this.select();},true);
}
if (localStorage.Prof1!='' && localStorage.Prof1!=undefined && d.getElementById('ps2')) {
	d.getElementById('ps2_options').value=localStorage.Prof1;
	d.getElementById('ps2').style.display='block';
	console.log("\nPROF2:");
	console.log(localStorage.Prof1);
	d.getElementById('ps2_options').addEventListener('mouseup',function(){this.select();},true);
}
if (localStorage.Prof2!='' && localStorage.Prof2!=undefined && d.getElementById('ps3') && localStorage.Prof2!='{"ControlsTheme":"light","Frame":"true","Hide":"true","KeepView":"true","Keys":"true","OpenAtHome":"true","RSS":"Feedly","Scroll":"size","SetRes":"720","SetView":"720","Sites":"true"}') {
	d.getElementById('ps3_options').value=localStorage.Prof2;
	d.getElementById('ps3').style.display='block';
	console.log("\nPROF3:");
	console.log(localStorage.Prof2);
	d.getElementById('ps3_options').addEventListener('mouseup',function(){this.select();},true);
}
if (d.getElementById('showadv') && d.getElementById('adv')) {
	d.getElementById('showadv').addEventListener('click',function(){
		this.style.display='none';
		d.getElementById('adv').style.display='block';
	},true);
}
if (d.getElementById('showrem') && d.getElementById('rem')) {
	d.getElementById('showrem').addEventListener('click',function(){
		this.style.display='none';
		d.getElementById('rem').style.display='block';
	},true);
}

/* EOF */