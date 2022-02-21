//Use button 'NameGen' to create new random name
let btn1 = document.getElementById('NameGen');
let head = document.getElementById("headTitle")

btn1.innerHTML = "Don't click" ;
btn1.onclick = function() {
	
	btn1.innerHTML = "Nah, I want a different name";
	head.innerHTML = "Random Name: ";
	document.getElementById("Random Name").innerHTML = randomName();
	
}

//Convert to ascii lowercase
function toAlphabet(num) {
	if (num < 1 || num > 26 || typeof num !=='number') {
		alert(num);
		return -1;
	}
	return String.fromCharCode(num + 96);
}

//Random name with 7 letters constant vowel : CVVCCVC
function randomName() {
	var word = ""
	for(let i = 0; i < 7; i++){

		//Grab random letter
		var letter = Math.round(Math.random() * 25 + 1);

		//if vowel add, if constant go back one
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
		//if constant add, if vowel go back one
		else {
			switch(letter) {
				case 1:
				case 5:
				case 9:
				case 10:
				case 15:
				case 17:
				case 21:
				case 24:
				i--;
				break;
				default:
				word += toAlphabet(letter);
				break;
			}
			
		}
	}

	//return capitalized word
	return word.charAt(0).toUpperCase() + word.slice(1);;
}