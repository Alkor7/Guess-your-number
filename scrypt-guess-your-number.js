var iMin=1, iMax=100, MyNum=0, newText, btnState;

var rndNum = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

function ugadator () {

	btnState = document.getElementById("ButtonStartJS");
	btnState.style.display = "none";

	MyNum = rndNum(iMin, iMax);

	newText = document.getElementById("changeBlock");
	newText.style.fontSize = "36px";
	newText.innerText=MyNum;

	document.addEventListener('keyup', function(event) {

		if (event.key == "ArrowUp") {KeyArrowUp ();}
		if (event.key == "ArrowDown") {KeyArrowDown ();}
			if (event.key == "Enter") {KeyArrowOK ();}
	});
}

function KeyArrowUp () {
	iMin = MyNum+1;
	MyNum = rndNum(iMin, iMax);
	newText = document.getElementById("changeBlock");
	newText.textContent=MyNum;
}

function KeyArrowDown () {
	iMax = MyNum-1;
	MyNum = rndNum(iMin, iMax);
	newText = document.getElementById("changeBlock");
	newText.textContent=MyNum;
}

function KeyArrowOK () {
	newText = document.getElementById("changeBlock");
	newText.textContent=("Ваше число = " + MyNum);
	newText = document.getElementById("newTry");
	newText.style.display = "block";
	btnState = document.getElementById("block-of-keys");
	btnState.style.display = "none";
}