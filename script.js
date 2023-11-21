//your JS code here. If required.
function changeContent () {
	let p = document.getElementById("status");
    let newElm = document.createElement("h1");
	newElm.id = "status";
	newElm.innerText = "Entered Metaverse";
	p.innerText = "";
	p.appendChild(newElm);

}


