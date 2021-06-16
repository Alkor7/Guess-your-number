var iMin = 0, iMax = 100, MyNum = 0, newText, btnState, isRND, showForm, iCount = 1;

var rndNum = function(min, max) {
  isRND = document.getElementById('radRnd');
  if (isRND.checked) {
    return Math.ceil(Math.random() * (max - min) + min);
  } else {
    return Math.ceil(min + ((max - min) / 2));
  }

};

function ugadator() {
  btnState = document.getElementById("ButtonStartJS");
  btnState.style.display = "none";
  showForm = document.getElementById("forma");
  showForm.style.display = "none";
  MyNum = rndNum(iMin, iMax);
  newText = document.getElementById("changeBlock");
  newText.style.fontSize = "36px";
  newText.innerText = MyNum;

  document.addEventListener('keyup', function(event) {
    if (event.key == "ArrowUp") { KeyArrowUp(); }
    if (event.key == "ArrowDown") {KeyArrowDown(); }
    if (event.key == "Enter") { KeyArrowOK(); }
  });
}

function KeyArrowUp() {
  iMin = MyNum;
  MyNum = rndNum(iMin, iMax);
  iCount++;
  console.log('Вверх. iMin=' + iMin + ' iMax=' + iMax);
  newText = document.getElementById("changeBlock");
  newText.textContent = MyNum;
}

function KeyArrowDown() {
  iMax = MyNum;
  MyNum = rndNum(iMin, iMax);
  iCount++;
  console.log('Вниз. iMin=' + iMin + ' iMax=' + iMax);
  newText = document.getElementById("changeBlock");
  newText.textContent = MyNum;
}

function KeyArrowOK() {
  newText = document.getElementById("changeBlock");
  newText.textContent = ("Ваше число = " + MyNum);
  newText = document.getElementById("newTry");
  newText.style.display = "block";
  btnState = document.getElementById("block-of-keys");
  btnState.style.display = "none";
  if (isRND.checked) {
    alert('Число ' + MyNum +  ' угадали случайными числами за ' + iCount + ' попыток.')
  } else {
    alert('Число ' + MyNum +  ' угадали делением пополам за ' + iCount + ' попыток.')
  }
  iCount = 1;
}