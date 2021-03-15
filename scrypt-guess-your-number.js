var iMin=1, iMax=100, MyNum=0, newText;

function ugadator () {

	var rndNum = function (min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	MyNum = rndNum(iMin, iMax);

	newText = document.getElementById("changeBlock");
	newText.style.fontSize = "36px";
	newText.innerText=(MyNum);


document.addEventListener('keyup', function(event) {

	if (event.key == "ArrowUp") {
		iMin = MyNum;		
		MyNum = rndNum(iMin, iMax);
		console.log("Нажал Вверх. Min=" + iMin + " Max =" + iMax + " Число =" + MyNum);
		newText = document.getElementById("changeBlock")
		newText.textContent=(MyNum);

	}
	if (event.key == "ArrowDown") {
		iMax = MyNum;
		MyNum = rndNum(iMin, iMax);
		console.info("Нажали Вниз. Min=" + iMin + " Max =" + iMax + " Число =" + MyNum);
		newText = document.getElementById("changeBlock")
		newText.textContent=(MyNum);
		
	}
	if (event.key == "Enter") {
		console.info("УГАДАЛ число = " + MyNum);
		newText.style.backgroundColor=("#00FF00");
		newText = document.getElementById("changeBlock")
		newText.textContent=("Я угадал Ваше число = " + MyNum);
	}
});
}
