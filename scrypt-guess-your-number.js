var iMin=1, iMax=100, MyNum=0, newText, btnState;

var rndNum = function (min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

function ugadator () {

	console.info("Начинаем!");

btnState = document.getElementById("ButtonStartJS");
btnState.style.display = "none";

btnState = document.getElementById("block-of-keys");
btnState.style.display = "flex";

	

	MyNum = rndNum(iMin, iMax);

	newText = document.getElementById("changeBlock");
	newText.style.fontSize = "36px";
	newText.innerText=MyNum;

	document.addEventListener('keyup', function(event) {

		if (event.key == "ArrowUp") {
			iMin = MyNum+1;
			MyNum = rndNum(iMin, iMax);
			console.log("Нажал Вверх. iMin=" + iMin + " iMax =" + iMax + " MyNum =" + MyNum);
			newText = document.getElementById("changeBlock")
			newText.textContent=MyNum;
		}
		if (event.key == "ArrowDown") {
			iMax = MyNum-1;
			MyNum = rndNum(iMin, iMax);
			console.info("Нажали Вниз. iMin=" + iMin + " iMax =" + iMax + " MyNum =" + MyNum);
			newText = document.getElementById("changeBlock")
			newText.textContent=MyNum;
		}
		if (event.key == "Enter") {
			console.info("УГАДАЛ число = " + MyNum);
			newText = document.getElementById("changeBlock")
			newText.textContent=("Ваше число = " + MyNum);
			newText = document.getElementById("newTry");
			newText.style.display = "block"
		}
	});
}


function KeyArrowUp () {
			iMin = MyNum+1;
			MyNum = rndNum(iMin, iMax);
			console.log("Нажал Вверх. iMin=" + iMin + " iMax =" + iMax + " MyNum =" + MyNum);
			newText = document.getElementById("changeBlock")
			newText.textContent=MyNum;
}

function KeyArrowDown () {
			iMax = MyNum-1;
			MyNum = rndNum(iMin, iMax);
			console.info("Нажали Вниз. iMin=" + iMin + " iMax =" + iMax + " MyNum =" + MyNum);
			newText = document.getElementById("changeBlock")
			newText.textContent=MyNum;
}

function KeyArrowOK () {
			console.info("УГАДАЛ число = " + MyNum);
			newText = document.getElementById("changeBlock")
			newText.textContent=("Ваше число = " + MyNum);
			newText = document.getElementById("newTry");
			newText.style.display = "block"
			btnState = document.getElementById("block-of-keys");
			btnState.style.display = "none";
}