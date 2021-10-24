
//Use button 'NameGen' to create new random name
let btn1 = document.getElementById('NameGen');
let head = document.getElementById("headTitle").innerHTML
//let numClicks = 0;
btn1.innerHTML = "Don't click" ;
btn1.onclick = function() {
	
	btn1.innerHTML = "Nah, I want a different name";
	head = "Random Name: ";
	document.getElementById("Random Name").innerHTML = randomName();
	//numClicks++;
	
}
document.body.appendChild(btn1);

//convert to ascii lowercase
function toAlphabet(num){
	if (num < 1 || num > 26 || typeof num !=='number') {
		alert(num);
		return -1;
	}
	return String.fromCharCode(num + 64);
}

//Random number 1-26
function returnRandLet() {
	return Math.round(Math.random() * 25 + 1);
}

//Random name with 7 letters constant vowel : CVVCCVC
function randomName() {
	var word = ""
	for(let i = 0; i < 7; i++){
		var letter = returnRandLet();
		
		if(i == 1 || i == 2 || i == 5) {	
			switch(letter) {
				case 1:
				case 5:
				case 9:
				case 15:
				case 21:
				word += toAlphabet(letter);
				break;
				
				default:
				i--;
				break;
			}
		}
		else {switch(letter) {
				case 1:
				case 5:
				case 9:
				case 15:
				case 21:
				i--;
				break;
				default:
				word += toAlphabet(letter);
				break;
			}
			
		}
	}
	return word;
}