//your JS code here. If required.
let para= document.getElementById("status");
let btn= document.getElementById("enterBtn");


button.addEventListener("click" ,() =>{
	let heading= document.createElement("h1");
	heading.id = "enterBtn";
	heading.innerText = "Entered Metaverse";
	document.body.insertBefore(heading , para);
	para.remove();
})