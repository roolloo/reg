let btn = document.querySelector(".none");
let word = document.querySelector(".modolwind");
let btn2 = document.querySelector(".opnwind");
let value = document.forms['form'].elements['text'].value




btn.onclick = function(){
	word.classList.add("hidden")
	btn2.classList.add("opn")
}


btn2.onclick = function(){
	btn2.classList.remove("opn")
	word.classList.remove("hidden")
}

// function sendMail(){
//    let pismo =  window.open("about:blank","text","width=400,height=400")
	
// 	let div = pismo.document.createElement("div"),
// 	body = pismo.document.body;
    
	
//    console.log(value)
//    div.innerText = `Привет: ${value}`
  
// 	body.append(div)
// }

document.forms.sendMail.onsubmit = function() {
	let value = this.text.value;
	let value2 = this.text2.value;
	

	let pismo =  window.open("about:hi","text","width=400,height=400,left=720,top = 300")
	
	let div = pismo.document.createElement("div"),
	body = pismo.document.body;
    
	
   console.log(value)
   div.innerText = `Привет: ${value} \n`+ `${value2}`
	

  
	body.append(div)
	
	return false;
 };