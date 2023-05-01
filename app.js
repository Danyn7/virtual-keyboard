// ES6+ деструктуризация
const codes = ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'];

const [amountZ, amountX, amountC, amountV, amountB, amountN, amountM] = codes;

// ES6+ классы
class DoubleV {
  constructor(Keyvalue) {
    this.Keyvalue = Keyvalue;
  }

  getName() {
    return this.Keyvalue;
  }
}
const keyWin = document.createElement('div');
const keyW = document.createElement('div');

const objKeys = new DoubleV('keyW');
let keyWInRus = objKeys.getName();

keyWInRus = document.createElement('span');
keyWInRus.className = 'key-win-rus';
keyWInRus.innerHTML = 'ц';
keyW.append(keyWInRus);
keyWInRus.classList.add('hidden-key');

const container = document.createElement('div');
const heading = document.createElement('p');
const formForText = document.createElement('textarea');
const keyboard = document.createElement('div');
const littleMessage = document.createElement('p');
const littleMessage2 = document.createElement('p');

const keyRemarkIn = document.createElement('span');
const key1In = document.createElement('span');
const key2In = document.createElement('span');
const key3In = document.createElement('span');
const key4In = document.createElement('span');
const key5In = document.createElement('span');
const key6In = document.createElement('span');
const key7In = document.createElement('span');
const key8In = document.createElement('span');
const key9In = document.createElement('span');
const key0In = document.createElement('span');
const keyMinusIn = document.createElement('span');
const keyEqualsIn = document.createElement('span');
const keyBackspaceIn = document.createElement('span');

const lineOne = document.createElement('div');
const lineTwo = document.createElement('div');
const lineThree = document.createElement('div');
const lineFour = document.createElement('div');
const lineFive = document.createElement('div');

const keyRemark = document.createElement('div');
const key1 = document.createElement('div');
const key2 = document.createElement('div');
const key3 = document.createElement('div');
const key4 = document.createElement('div');
const key5 = document.createElement('div');
const key6 = document.createElement('div');
const key7 = document.createElement('div');
const key8 = document.createElement('div');
const key9 = document.createElement('div');
const key0 = document.createElement('div');
const keyMinus = document.createElement('div');
const keyEquals = document.createElement('div');
const keyBackspace = document.createElement('div');

const keyCtrlL = document.createElement('div');

const keyAltL = document.createElement('div');
const keySpace = document.createElement('div');
const keyAltR = document.createElement('div');
const keyLeft = document.createElement('div');
const keyDown = document.createElement('div');
const keyRight = document.createElement('div');
const keyCtrlR = document.createElement('div');

const keyCtrlLIn = document.createElement('span');
const keyWinIn = document.createElement('span');
const keyAltLIn = document.createElement('span');
const keySpaceIn = document.createElement('span');
const keyAltRIn = document.createElement('span');
const keyLeftIn = document.createElement('span');
const keyDownIn = document.createElement('span');
const keyRightIn = document.createElement('span');
const keyCtrlRIn = document.createElement('span');

keyCtrlL.className = 'key-ctrl-l';
keyWin.className = 'key-win';
keyAltL.className = 'key-alt-l';
keySpace.className = 'key-space';
keyAltR.className = 'key-alt-r';
keyLeft.className = 'key-left';
keyDown.className = 'key-down';
keyRight.className = 'key-right';
keyCtrlR.className = 'key-ctrl-r';

keyCtrlLIn.className = 'key-ctrl-l-span';
keyWinIn.className = 'key-win-span';
keyAltLIn.className = 'key-alt-l-span';
keySpaceIn.className = 'key-space-span';
keyAltRIn.className = 'key-alt-r-span';
keyLeftIn.className = 'key-left-span';
keyDownIn.className = 'key-down-span';
keyRightIn.className = 'key-right-span';
keyCtrlRIn.className = 'key-ctrl-r-span';

keyCtrlLIn.innerHTML = 'Ctrl';
keyWinIn.innerHTML = 'Win';
keyAltLIn.innerHTML = 'Alt';
keySpaceIn.innerHTML = '';
keyAltRIn.innerHTML = 'Alt';
keyLeftIn.innerHTML = '&#8592';
keyDownIn.innerHTML = '&#8595';
keyRightIn.innerHTML = '&#8594';
keyCtrlRIn.innerHTML = 'Ctrl';

lineFive.append(keyCtrlL);
lineFive.append(keyWin);
lineFive.append(keyAltL);
lineFive.append(keySpace);
lineFive.append(keyAltR);
lineFive.append(keyLeft);
lineFive.append(keyDown);
lineFive.append(keyRight);
lineFive.append(keyCtrlR);

const keyTab = document.createElement('div');
const keyQ = document.createElement('div');

const keyE = document.createElement('div');
const keyR = document.createElement('div');
const keyT = document.createElement('div');
const keyY = document.createElement('div');
const keyU = document.createElement('div');
const keyI = document.createElement('div');
const keyO = document.createElement('div');
const keyP = document.createElement('div');
const keySquareL = document.createElement('div');
const keySquareR = document.createElement('div');
const keySlash = document.createElement('div');
const keyDel = document.createElement('div');

const keyTabIn = document.createElement('span');
const keyQIn = document.createElement('span');
const keyWIn = document.createElement('span');
const keyEIn = document.createElement('span');
const keyRIn = document.createElement('span');
const keyTIn = document.createElement('span');
const keyYIn = document.createElement('span');
const keyUIn = document.createElement('span');
const keyIIn = document.createElement('span');
const keyOIn = document.createElement('span');
const keyPIn = document.createElement('span');
const keySquareLIn = document.createElement('span');
const keySquareRIn = document.createElement('span');
const keySlashIn = document.createElement('span');
const keyDelIn = document.createElement('span');

const keyCaps = document.createElement('div');
const keyA = document.createElement('div');
const keyS = document.createElement('div');
const keyD = document.createElement('div');
const keyF = document.createElement('div');
const keyG = document.createElement('div');
const keyH = document.createElement('div');
const keyJ = document.createElement('div');
const keyK = document.createElement('div');
const keyL = document.createElement('div');
const keySemicolon = document.createElement('div');
const keyApostrophe = document.createElement('div');
const keyEnter = document.createElement('div');

const keyCapsIn = document.createElement('span');
const keyAIn = document.createElement('span');
const keySIn = document.createElement('span');
const keyDIn = document.createElement('span');
const keyFIn = document.createElement('span');
const keyGIn = document.createElement('span');
const keyHIn = document.createElement('span');
const keyJIn = document.createElement('span');
const keyKIn = document.createElement('span');
const keyLIn = document.createElement('span');
const keySemicolonIn = document.createElement('span');
const keyApostropheIn = document.createElement('span');
const keyEnterIn = document.createElement('span');

const keyShiftL = document.createElement('div');
const keyZ = document.createElement('div');
const keyX = document.createElement('div');
const keyC = document.createElement('div');
const keyV = document.createElement('div');
const keyB = document.createElement('div');
const keyN = document.createElement('div');
const keyM = document.createElement('div');
const keyComma = document.createElement('div');
const keyDot = document.createElement('div');
const keyAnotherSlash = document.createElement('div');
const keyUp = document.createElement('div');
const keyShiftR = document.createElement('div');

const keyShiftLIn = document.createElement('span');
const keyZIn = document.createElement('span');
const keyXIn = document.createElement('span');
const keyCIn = document.createElement('span');
const keyVIn = document.createElement('span');
const keyBIn = document.createElement('span');
const keyNIn = document.createElement('span');
const keyMIn = document.createElement('span');
const keyCommaIn = document.createElement('span');
const keyDotIn = document.createElement('span');
const keyAnotherSlashIn = document.createElement('span');
const keyUpIn = document.createElement('span');
const keyShiftRIn = document.createElement('span');

keyShiftL.className = 'key-shift-l';
keyZ.className = 'key-z';
keyX.className = 'key-x';
keyC.className = 'key-c';
keyV.className = 'key-v';
keyB.className = 'key-b';
keyN.className = 'key-n';
keyM.className = 'key-m';
keyComma.className = 'key-comma';
keyDot.className = 'key-dot';
keyAnotherSlash.className = 'key-another-slash';
keyUp.className = 'key-up';
keyShiftR.className = 'key-shift-r';

keyShiftLIn.className = 'key-shift-l-span';
keyZIn.className = 'key-z-span';
keyXIn.className = 'key-x-span';
keyCIn.className = 'key-c-span';
keyVIn.className = 'key-v-span';
keyBIn.className = 'key-b-span';
keyNIn.className = 'key-n-span';
keyMIn.className = 'key-m-span';
keyCommaIn.className = 'key-comma-span';
keyDotIn.className = 'key-dot-span';
keyAnotherSlashIn.className = 'key-another-slash-span';
keyUpIn.className = 'key-up-span';
keyShiftRIn.className = 'key-shift-r-span';

keyCaps.className = 'key-caps';
keyA.className = 'key-a';
keyS.className = 'key-s';
keyD.className = 'key-d';
keyF.className = 'key-f';
keyG.className = 'key-g';
keyH.className = 'key-h';
keyJ.className = 'key-j';
keyK.className = 'key-k';
keyL.className = 'key-l';
keySemicolon.className = 'key-semicolon';
keyApostrophe.className = 'key-apostrophe';
keyEnter.className = 'key-enter';

keyCapsIn.className = 'key-caps-span';
keyAIn.className = 'key-a-span';
keySIn.className = 'key-s-span';
keyDIn.className = 'key-d-span';
keyFIn.className = 'key-f-span';
keyGIn.className = 'key-g-span';
keyHIn.className = 'key-h-span';
keyJIn.className = 'key-j-span';
keyKIn.className = 'key-k-span';
keyLIn.className = 'key-l-span';
keySemicolonIn.className = 'key-semicolon-span';
keyApostropheIn.className = 'key-apostrophe-span';
keyEnterIn.className = 'key-enter-span';

keyTab.className = 'key-tab';
keyQ.className = 'key-q';
keyW.className = 'key-w';
keyE.className = 'key-e';
keyR.className = 'key-r';
keyT.className = 'key-t';
keyY.className = 'key-y';
keyU.className = 'key-u';
keyI.className = 'key-i';
keyO.className = 'key-o';
keyP.className = 'key-p';
keySquareL.className = 'key-square-l';
keySquareR.className = 'key-square-r';
keySlash.className = 'key-slash';
keyDel.className = 'key-del';

keyTabIn.className = 'key-tab-span';
keyQIn.className = 'key-q-span';
keyWIn.className = 'key-w-span';
keyEIn.className = 'key-e-span';
keyRIn.className = 'key-r-span';
keyTIn.className = 'key-t-span';
keyYIn.className = 'key-y-span';
keyUIn.className = 'key-u-span';
keyIIn.className = 'key-i-span';
keyOIn.className = 'key-o-span';
keyPIn.className = 'key-p-span';
keySquareLIn.className = 'key-square-l-span';
keySquareRIn.className = 'key-square-r-span';
keySlashIn.className = 'key-slash-span';
keyDelIn.className = 'key-del-span';

lineTwo.append(keyTab);
lineTwo.append(keyQ);
lineTwo.append(keyW);
lineTwo.append(keyE);
lineTwo.append(keyR);
lineTwo.append(keyT);
lineTwo.append(keyY);
lineTwo.append(keyU);
lineTwo.append(keyI);
lineTwo.append(keyO);
lineTwo.append(keyP);
lineTwo.append(keySquareL);
lineTwo.append(keySquareR);
lineTwo.append(keySlash);
lineTwo.append(keyDel);

lineThree.append(keyCaps);
lineThree.append(keyA);
lineThree.append(keyS);
lineThree.append(keyD);
lineThree.append(keyF);
lineThree.append(keyG);
lineThree.append(keyH);
lineThree.append(keyJ);
lineThree.append(keyK);
lineThree.append(keyL);
lineThree.append(keySemicolon);
lineThree.append(keyApostrophe);
lineThree.append(keyEnter);

lineFour.append(keyShiftL);
lineFour.append(keyZ);
lineFour.append(keyX);
lineFour.append(keyC);
lineFour.append(keyV);
lineFour.append(keyB);
lineFour.append(keyN);
lineFour.append(keyM);
lineFour.append(keyComma);
lineFour.append(keyDot);
lineFour.append(keyAnotherSlash);
lineFour.append(keyUp);
lineFour.append(keyShiftR);

keyRemark.className = 'key-remark';
key1.className = 'key1';
key2.className = 'key2';
key3.className = 'key3';
key4.className = 'key4';
key5.className = 'key5';
key6.className = 'key6';
key7.className = 'key7';
key8.className = 'key8';
key9.className = 'key9';
key0.className = 'key0';
keyMinus.className = 'key-minus';
keyEquals.className = 'key-equals';
keyBackspace.className = 'key-backspace';

keyRemarkIn.className = 'key-remark-span';
key1In.className = 'key1-span';
key2In.className = 'key2-span';
key3In.className = 'key3-span';
key4In.className = 'key4-span';
key5In.className = 'key5-span';
key6In.className = 'key6-span';
key7In.className = 'key7-span';
key8In.className = 'key8-span';
key9In.className = 'key9-span';
key0In.className = 'key0-span';
keyMinusIn.className = 'key-minus-span';
keyEqualsIn.className = 'key-equals-span';
keyBackspaceIn.className = 'key-backspace-span';

lineOne.className = 'line-one';
lineTwo.className = 'line-two';
lineThree.className = 'line-three';
lineFour.className = 'line-four';
lineFive.className = 'line-five';

container.className = 'container';
heading.className = 'heading';
formForText.className = 'form-for-text';
keyboard.className = 'keyboard';
littleMessage.className = 'little-message';
littleMessage2.className = 'little-message2';

heading.innerHTML = 'RSS Virtual keyboard';
littleMessage.innerHTML = 'Клавиатура подходит для операционной системы Windows';
littleMessage2.innerHTML = 'Комбинация для переключения языка: левые shift + alt';

document.body.append(container);
container.append(heading);
container.append(formForText);
container.append(keyboard);
container.append(littleMessage);
container.append(littleMessage2);

keyboard.append(lineOne);
keyboard.append(lineTwo);
keyboard.append(lineThree);
keyboard.append(lineFour);
keyboard.append(lineFive);

lineOne.append(keyRemark);
lineOne.append(key1);
lineOne.append(key2);
lineOne.append(key3);
lineOne.append(key4);
lineOne.append(key5);
lineOne.append(key6);
lineOne.append(key7);
lineOne.append(key8);
lineOne.append(key9);
lineOne.append(key0);
lineOne.append(keyMinus);
lineOne.append(keyEquals);
lineOne.append(keyBackspace);

keyRemark.append(keyRemarkIn);
key1.append(key1In);
key2.append(key2In);
key3.append(key3In);
key4.append(key4In);
key5.append(key5In);
key6.append(key6In);
key7.append(key7In);
key8.append(key8In);
key9.append(key9In);
key0.append(key0In);
keyMinus.append(keyMinusIn);
keyEquals.append(keyEqualsIn);
keyBackspace.append(keyBackspaceIn);

keyRemarkIn.innerHTML = '`';
key1In.innerHTML = '1';
key2In.innerHTML = '2';
key3In.innerHTML = '3';
key4In.innerHTML = '4';
key5In.innerHTML = '5';
key6In.innerHTML = '6';
key7In.innerHTML = '7';
key8In.innerHTML = '8';
key9In.innerHTML = '9';
key0In.innerHTML = '0';
keyMinusIn.innerHTML = '-';
keyEqualsIn.innerHTML = '=';
keyBackspaceIn.innerHTML = 'Backspace';

keyTab.append(keyTabIn);
keyQ.append(keyQIn);
keyW.append(keyWIn);
keyE.append(keyEIn);
keyR.append(keyRIn);
keyT.append(keyTIn);
keyY.append(keyYIn);
keyU.append(keyUIn);
keyI.append(keyIIn);
keyO.append(keyOIn);
keyP.append(keyPIn);
keySquareL.append(keySquareLIn);
keySquareR.append(keySquareRIn);
keySlash.append(keySlashIn);
keyDel.append(keyDelIn);

keyTabIn.innerHTML = 'Tab';
keyQIn.innerHTML = 'q';
keyWIn.innerHTML = 'w';
keyEIn.innerHTML = 'e';
keyRIn.innerHTML = 'r';
keyTIn.innerHTML = 't';
keyYIn.innerHTML = 'y';
keyUIn.innerHTML = 'u';
keyIIn.innerHTML = 'i';
keyOIn.innerHTML = 'o';
keyPIn.innerHTML = 'p';
keySquareLIn.innerHTML = '[';
keySquareRIn.innerHTML = ']';
keySlashIn.innerHTML = '&#92';
keyDelIn.innerHTML = 'Del';

keyCapsIn.innerHTML = 'CapsLock';
keyAIn.innerHTML = 'a';
keySIn.innerHTML = 's';
keyDIn.innerHTML = 'd';
keyFIn.innerHTML = 'f';
keyGIn.innerHTML = 'g';
keyHIn.innerHTML = 'h';
keyJIn.innerHTML = 'j';
keyKIn.innerHTML = 'k';
keyLIn.innerHTML = 'l';
keySemicolonIn.innerHTML = ';';
keyApostropheIn.innerHTML = '&#39';
keyEnterIn.innerHTML = 'Enter';

keyShiftLIn.innerHTML = 'Shift';
keyZIn.innerHTML = 'z';
keyXIn.innerHTML = 'x';
keyCIn.innerHTML = 'c';
keyVIn.innerHTML = 'v';
keyBIn.innerHTML = 'b';
keyNIn.innerHTML = 'n';
keyMIn.innerHTML = 'm';
keyCommaIn.innerHTML = ',';
keyDotIn.innerHTML = '.';
keyAnotherSlashIn.innerHTML = '/';
keyUpIn.innerHTML = '&#8593';
keyShiftRIn.innerHTML = 'Shift';

keyCaps.append(keyCapsIn);
keyA.append(keyAIn);
keyS.append(keySIn);
keyD.append(keyDIn);
keyF.append(keyFIn);
keyG.append(keyGIn);
keyH.append(keyHIn);
keyJ.append(keyJIn);
keyK.append(keyKIn);
keyL.append(keyLIn);
keySemicolon.append(keySemicolonIn);
keyApostrophe.append(keyApostropheIn);
keyEnter.append(keyEnterIn);

keyShiftL.append(keyShiftLIn);
keyZ.append(keyZIn);
keyX.append(keyXIn);
keyC.append(keyCIn);
keyV.append(keyVIn);
keyB.append(keyBIn);
keyN.append(keyNIn);
keyM.append(keyMIn);
keyComma.append(keyCommaIn);
keyDot.append(keyDotIn);
keyAnotherSlash.append(keyAnotherSlashIn);
keyUp.append(keyUpIn);
keyShiftR.append(keyShiftRIn);

keyCtrlL.append(keyCtrlLIn);
keyWin.append(keyWinIn);
keyAltL.append(keyAltLIn);
keySpace.append(keySpaceIn);
keyAltR.append(keyAltRIn);
keyLeft.append(keyLeftIn);
keyDown.append(keyDownIn);
keyRight.append(keyRightIn);
keyCtrlR.append(keyCtrlRIn);

document.addEventListener('keydown', (event) => {
  if (event.code === amountZ) {
    keyZ.classList.add('turn-on');
    if (keyZIn.classList.contains('hidden-key')) {
      formForText.textContent += 'я';
    } else {
      formForText.textContent += 'z';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === amountZ) {
    keyZ.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === amountX) {
    keyX.classList.add('turn-on');
    if (keyXIn.classList.contains('hidden-key')) {
      formForText.textContent += 'ч';
    } else {
      formForText.textContent += 'x';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === amountX) {
    keyX.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === amountC) {
    keyC.classList.add('turn-on');
    formForText.textContent += 'c';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === amountC) {
    keyC.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === amountV) {
    keyV.classList.add('turn-on');
    if (keyVIn.classList.contains('hidden-key')) {
      formForText.textContent += 'м';
    } else {
      formForText.textContent += 'v';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === amountV) {
    keyV.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === amountB) {
    keyB.classList.add('turn-on');
    if (keyBIn.classList.contains('hidden-key')) {
      formForText.textContent += 'и';
    } else {
      formForText.textContent += 'b';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === amountB) {
    keyB.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === amountN) {
    keyN.classList.add('turn-on');
    if (keyNIn.classList.contains('hidden-key')) {
      formForText.textContent += 'т';
    } else {
      formForText.textContent += 'n';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === amountN) {
    keyN.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === amountM) {
    keyM.classList.add('turn-on');
    if (keyMIn.classList.contains('hidden-key')) {
      formForText.textContent += 'ь';
    } else {
      formForText.textContent += 'm';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === amountM) {
    keyM.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Comma') {
    keyComma.classList.add('turn-on');
    if (keyCommaIn.classList.contains('hidden-key')) {
      formForText.textContent += 'б';
    } else {
      formForText.textContent += ',';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Comma') {
    keyComma.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Period') {
    keyDot.classList.add('turn-on');
    if (keyDotIn.classList.contains('hidden-key')) {
      formForText.textContent += 'ю';
    } else {
      formForText.textContent += '.';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Period') {
    keyDot.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Slash') {
    keyAnotherSlash.classList.add('turn-on');
    if (keyAnotherSlashIn.classList.contains('hidden-key')) {
      formForText.textContent += '.';
    } else {
      formForText.textContent += '/';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Slash') {
    keyAnotherSlash.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowUp') {
    keyUp.classList.add('turn-on');
    formForText.textContent += '↑';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowUp') {
    keyUp.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft') {
    keyShiftL.classList.add('turn-on');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft') {
    keyShiftL.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftRight') {
    keyShiftR.classList.add('turn-on');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftRight') {
    keyShiftR.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ControlLeft') {
    keyCtrlL.classList.add('turn-on');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ControlLeft') {
    keyCtrlL.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ControlRight') {
    keyCtrlR.classList.add('turn-on');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ControlRight') {
    keyCtrlR.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'MetaLeft') {
    keyWin.classList.add('turn-on');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'MetaLeft') {
    keyWin.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'AltLeft') {
    event.preventDefault();
    keyAltL.classList.add('turn-on');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'AltLeft') {
    event.preventDefault();
    keyAltL.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'AltRight') {
    event.preventDefault();
    keyAltR.classList.add('turn-on');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'AltRight') {
    event.preventDefault();
    keyAltR.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    keySpace.classList.add('turn-on');
    formForText.textContent += ' ';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    keySpace.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    event.preventDefault();
    keyLeft.classList.add('turn-on');
    formForText.textContent += '←';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowLeft') {
    event.preventDefault();
    keyLeft.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowRight') {
    event.preventDefault();
    keyRight.classList.add('turn-on');
    formForText.textContent += '→';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowRight') {
    event.preventDefault();
    keyRight.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowDown') {
    event.preventDefault();
    keyDown.classList.add('turn-on');
    formForText.textContent += '↓';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowDown') {
    event.preventDefault();
    keyDown.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') {
    event.preventDefault();
    keyCaps.classList.add('turn-on');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'CapsLock') {
    event.preventDefault();
    keyCaps.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyA') {
    event.preventDefault();
    keyA.classList.add('turn-on');
    if (keyAIn.classList.contains('hidden-key')) {
      formForText.textContent += 'ф';
    } else {
      formForText.textContent += 'a';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyA') {
    event.preventDefault();
    keyA.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyS') {
    event.preventDefault();
    keyS.classList.add('turn-on');
    if (keySIn.classList.contains('hidden-key')) {
      formForText.textContent += 'ы';
    } else {
      formForText.textContent += 's';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyS') {
    event.preventDefault();
    keyS.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyD') {
    event.preventDefault();
    keyD.classList.add('turn-on');
    if (keyDIn.classList.contains('hidden-key')) {
      formForText.textContent += 'в';
    } else {
      formForText.textContent += 'd';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyD') {
    event.preventDefault();
    keyD.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyF') {
    event.preventDefault();
    keyF.classList.add('turn-on');
    if (keyFIn.classList.contains('hidden-key')) {
      formForText.textContent += 'а';
    } else {
      formForText.textContent += 'f';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyF') {
    event.preventDefault();
    keyF.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyG') {
    event.preventDefault();
    keyG.classList.add('turn-on');
    if (keyGIn.classList.contains('hidden-key')) {
      formForText.textContent += 'п';
    } else {
      formForText.textContent += 'g';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyG') {
    event.preventDefault();
    keyG.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyH') {
    event.preventDefault();
    keyH.classList.add('turn-on');
    if (keyHIn.classList.contains('hidden-key')) {
      formForText.textContent += 'р';
    } else {
      formForText.textContent += 'h';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyH') {
    event.preventDefault();
    keyH.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyJ') {
    event.preventDefault();
    keyJ.classList.add('turn-on');
    if (keyJIn.classList.contains('hidden-key')) {
      formForText.textContent += 'о';
    } else {
      formForText.textContent += 'j';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyJ') {
    event.preventDefault();
    keyJ.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyK') {
    event.preventDefault();
    keyK.classList.add('turn-on');
    if (keyKIn.classList.contains('hidden-key')) {
      formForText.textContent += 'л';
    } else {
      formForText.textContent += 'k';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyK') {
    event.preventDefault();
    keyK.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyL') {
    event.preventDefault();
    keyL.classList.add('turn-on');
    if (keyLIn.classList.contains('hidden-key')) {
      formForText.textContent += 'д';
    } else {
      formForText.textContent += 'l';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyL') {
    event.preventDefault();
    keyL.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Semicolon') {
    event.preventDefault();
    keySemicolon.classList.add('turn-on');
    if (keySemicolonIn.classList.contains('hidden-key')) {
      formForText.textContent += 'ж';
    } else {
      formForText.textContent += ';';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Semicolon') {
    event.preventDefault();
    keySemicolon.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Quote') {
    event.preventDefault();
    keyApostrophe.classList.add('turn-on');
    if (keyApostropheIn.classList.contains('hidden-key')) {
      formForText.textContent += 'э';
    } else {
      formForText.textContent += "'";
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Quote') {
    event.preventDefault();
    keyApostrophe.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    event.preventDefault();
    keyEnter.classList.add('turn-on');
    formForText.textContent += ' \n';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    event.preventDefault();
    keyEnter.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
    keyTab.classList.add('turn-on');
    formForText.textContent += '    ';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
    keyTab.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyQ') {
    event.preventDefault();
    keyQ.classList.add('turn-on');
    if (keyQIn.classList.contains('hidden-key')) {
      formForText.textContent += 'й';
    } else {
      formForText.textContent += 'q';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyQ') {
    event.preventDefault();
    keyQ.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyW') {
    event.preventDefault();
    keyW.classList.add('turn-on');
    if (keyWIn.classList.contains('hidden-key')) {
      formForText.textContent += 'ц';
    } else {
      formForText.textContent += 'w';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyW') {
    event.preventDefault();
    keyW.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyE') {
    event.preventDefault();
    keyE.classList.add('turn-on');
    if (keyEIn.classList.contains('hidden-key')) {
      formForText.textContent += 'у';
    } else {
      formForText.textContent += 'e';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyE') {
    event.preventDefault();
    keyE.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyR') {
    event.preventDefault();
    keyR.classList.add('turn-on');
    if (keyRIn.classList.contains('hidden-key')) {
      formForText.textContent += 'к';
    } else {
      formForText.textContent += 'r';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyR') {
    event.preventDefault();
    keyR.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyT') {
    event.preventDefault();
    keyT.classList.add('turn-on');
    if (keyTIn.classList.contains('hidden-key')) {
      formForText.textContent += 'е';
    } else {
      formForText.textContent += 't';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyT') {
    event.preventDefault();
    keyT.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyY') {
    event.preventDefault();
    keyY.classList.add('turn-on');
    if (keyYIn.classList.contains('hidden-key')) {
      formForText.textContent += 'н';
    } else {
      formForText.textContent += 'y';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyY') {
    event.preventDefault();
    keyY.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyU') {
    event.preventDefault();
    keyU.classList.add('turn-on');
    if (keyUIn.classList.contains('hidden-key')) {
      formForText.textContent += 'г';
    } else {
      formForText.textContent += 'u';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyU') {
    event.preventDefault();
    keyU.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyI') {
    event.preventDefault();
    keyI.classList.add('turn-on');
    if (keyIIn.classList.contains('hidden-key')) {
      formForText.textContent += 'ш';
    } else {
      formForText.textContent += 'i';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyI') {
    event.preventDefault();
    keyI.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyO') {
    event.preventDefault();
    keyO.classList.add('turn-on');
    if (keyOIn.classList.contains('hidden-key')) {
      formForText.textContent += 'щ';
    } else {
      formForText.textContent += 'o';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyO') {
    event.preventDefault();
    keyO.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyP') {
    event.preventDefault();
    keyP.classList.add('turn-on');
    if (keyPIn.classList.contains('hidden-key')) {
      formForText.textContent += 'з';
    } else {
      formForText.textContent += 'p';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyP') {
    event.preventDefault();
    keyP.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'BracketLeft') {
    event.preventDefault();
    keySquareL.classList.add('turn-on');
    if (keySquareLIn.classList.contains('hidden-key')) {
      formForText.textContent += 'х';
    } else {
      formForText.textContent += '[';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'BracketLeft') {
    event.preventDefault();
    keySquareL.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'BracketRight') {
    event.preventDefault();
    keySquareR.classList.add('turn-on');
    if (keySquareRIn.classList.contains('hidden-key')) {
      formForText.textContent += 'ъ';
    } else {
      formForText.textContent += ']';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'BracketRight') {
    event.preventDefault();
    keySquareR.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Delete') {
    event.preventDefault();
    keyDel.classList.add('turn-on');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Delete') {
    event.preventDefault();
    keyDel.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Backslash') {
    event.preventDefault();
    keySlash.classList.add('turn-on');
    formForText.textContent += '';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Backslash') {
    event.preventDefault();
    keySlash.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Backquote') {
    event.preventDefault();
    keyRemark.classList.add('turn-on');
    if (keyRemarkIn.classList.contains('hidden-key')) {
      formForText.textContent += 'ё';
    } else {
      formForText.textContent += '`';
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Backquote') {
    event.preventDefault();
    keyRemark.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit1') {
    event.preventDefault();
    key1.classList.add('turn-on');
    formForText.textContent += '1';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit1') {
    event.preventDefault();
    key1.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit2') {
    event.preventDefault();
    key2.classList.add('turn-on');
    formForText.textContent += '2';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit2') {
    event.preventDefault();
    key2.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit3') {
    event.preventDefault();
    key3.classList.add('turn-on');
    formForText.textContent += '3';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit3') {
    event.preventDefault();
    key3.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit4') {
    event.preventDefault();
    key4.classList.add('turn-on');
    formForText.textContent += '4';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit4') {
    event.preventDefault();
    key4.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit5') {
    event.preventDefault();
    key5.classList.add('turn-on');
    formForText.textContent += '5';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit5') {
    event.preventDefault();
    key5.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit6') {
    event.preventDefault();
    key6.classList.add('turn-on');
    formForText.textContent += '6';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit6') {
    event.preventDefault();
    key6.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit7') {
    event.preventDefault();
    key7.classList.add('turn-on');
    formForText.textContent += '7';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit7') {
    event.preventDefault();
    key7.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit8') {
    event.preventDefault();
    key8.classList.add('turn-on');
    formForText.textContent += '8';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit8') {
    event.preventDefault();
    key8.classList.remove('turn-on');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit9') {
    event.preventDefault();
    key9.classList.add('turn-on');
    formForText.textContent += '9';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit9') {
    event.preventDefault();
    key9.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit0') {
    event.preventDefault();
    key0.classList.add('turn-on');
    formForText.textContent += '0';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit0') {
    event.preventDefault();
    key0.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Minus') {
    event.preventDefault();
    keyMinus.classList.add('turn-on');
    formForText.textContent += '-';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Minus') {
    event.preventDefault();
    keyMinus.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Equal') {
    event.preventDefault();
    keyEquals.classList.add('turn-on');
    formForText.textContent += '=';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Equal') {
    event.preventDefault();
    keyEquals.classList.remove('turn-on');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Backspace') {
    event.preventDefault();
    keyBackspace.classList.add('turn-on');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Backspace') {
    event.preventDefault();
    keyBackspace.classList.remove('turn-on');
  }
});

const keyRemarkInRus = document.createElement('span');
keyRemarkInRus.className = 'key-remark-span-rus';
keyRemarkInRus.innerHTML = 'ё';
keyRemark.append(keyRemarkInRus);
keyRemarkInRus.classList.add('hidden-key');

const keyQInRus = document.createElement('span');
keyQInRus.className = 'key-q-span-rus';
keyQInRus.innerHTML = 'й';
keyQ.append(keyQInRus);
keyQInRus.classList.add('hidden-key');

const keyEInRus = document.createElement('span');
keyEInRus.className = 'key-e-span-rus';
keyEInRus.innerHTML = 'у';
keyE.append(keyEInRus);
keyEInRus.classList.add('hidden-key');

const keyRInRus = document.createElement('span');
keyRInRus.className = 'key-r-span-rus';
keyRInRus.innerHTML = 'к';
keyR.append(keyRInRus);
keyRInRus.classList.add('hidden-key');

const keyTInRus = document.createElement('span');
keyTInRus.className = 'key-t-span-rus';
keyTInRus.innerHTML = 'е';
keyT.append(keyTInRus);
keyTInRus.classList.add('hidden-key');

const keyYInRus = document.createElement('span');
keyYInRus.className = 'key-y-span-rus';
keyYInRus.innerHTML = 'н';
keyY.append(keyYInRus);
keyYInRus.classList.add('hidden-key');

const keyUInRus = document.createElement('span');
keyUInRus.className = 'key-u-span-rus';
keyUInRus.innerHTML = 'г';
keyU.append(keyUInRus);
keyUInRus.classList.add('hidden-key');

const keyIInRus = document.createElement('span');
keyIInRus.className = 'key-i-span-rus';
keyIInRus.innerHTML = 'ш';
keyI.append(keyIInRus);
keyIInRus.classList.add('hidden-key');

const keyOInRus = document.createElement('span');
keyOInRus.className = 'key-o-span-rus';
keyOInRus.innerHTML = 'щ';
keyO.append(keyOInRus);
keyOInRus.classList.add('hidden-key');

const keyPInRus = document.createElement('span');
keyPInRus.className = 'key-p-span-rus';
keyPInRus.innerHTML = 'з';
keyP.append(keyPInRus);
keyPInRus.classList.add('hidden-key');

const keySquareLInRus = document.createElement('span');
keySquareLInRus.className = 'key-sql-span-rus';
keySquareLInRus.innerHTML = 'х';
keySquareL.append(keySquareLInRus);
keySquareLInRus.classList.add('hidden-key');

const keySquareRInRus = document.createElement('span');
keySquareRInRus.className = 'key-sqr-span-rus';
keySquareRInRus.innerHTML = 'ъ';
keySquareR.append(keySquareRInRus);
keySquareRInRus.classList.add('hidden-key');

const keyAInRus = document.createElement('span');
keyAInRus.className = 'key-a-span-rus';
keyAInRus.innerHTML = 'ф';
keyA.append(keyAInRus);
keyAInRus.classList.add('hidden-key');

const keySInRus = document.createElement('span');
keySInRus.className = 'key-s-span-rus';
keySInRus.innerHTML = 'ы';
keyS.append(keySInRus);
keySInRus.classList.add('hidden-key');

const keyDInRus = document.createElement('span');
keyDInRus.className = 'key-d-span-rus';
keyDInRus.innerHTML = 'в';
keyD.append(keyDInRus);
keyDInRus.classList.add('hidden-key');

const keyFInRus = document.createElement('span');
keyFInRus.className = 'key-f-span-rus';
keyFInRus.innerHTML = 'а';
keyF.append(keyFInRus);
keyFInRus.classList.add('hidden-key');

const keyGInRus = document.createElement('span');
keyGInRus.className = 'key-g-span-rus';
keyGInRus.innerHTML = 'п';
keyG.append(keyGInRus);
keyGInRus.classList.add('hidden-key');

const keyHInRus = document.createElement('span');
keyHInRus.className = 'key-h-span-rus';
keyHInRus.innerHTML = 'р';
keyH.append(keyHInRus);
keyHInRus.classList.add('hidden-key');

const keyJInRus = document.createElement('span');
keyJInRus.className = 'key-j-span-rus';
keyJInRus.innerHTML = 'о';
keyJ.append(keyJInRus);
keyJInRus.classList.add('hidden-key');

const keyKInRus = document.createElement('span');
keyKInRus.className = 'key-k-span-rus';
keyKInRus.innerHTML = 'л';
keyK.append(keyKInRus);
keyKInRus.classList.add('hidden-key');

const keyLInRus = document.createElement('span');
keyLInRus.className = 'key-l-span-rus';
keyLInRus.innerHTML = 'д';
keyL.append(keyLInRus);
keyLInRus.classList.add('hidden-key');

const keySemicolonInRus = document.createElement('span');
keySemicolonInRus.className = 'key-semicolon-span-rus';
keySemicolonInRus.innerHTML = 'ж';
keySemicolon.append(keySemicolonInRus);
keySemicolonInRus.classList.add('hidden-key');

const keyApostropheInRus = document.createElement('span');
keyApostropheInRus.className = 'key-apostrophe-span-rus';
keyApostropheInRus.innerHTML = 'э';
keyApostrophe.append(keyApostropheInRus);
keyApostropheInRus.classList.add('hidden-key');

const keyZInRus = document.createElement('span');
keyZInRus.className = 'key-z-span-rus';
keyZInRus.innerHTML = 'я';
keyZ.append(keyZInRus);
keyZInRus.classList.add('hidden-key');

const keyXInRus = document.createElement('span');
keyXInRus.className = 'key-x-span-rus';
keyXInRus.innerHTML = 'ч';
keyX.append(keyXInRus);
keyXInRus.classList.add('hidden-key');

const keyCInRus = document.createElement('span');
keyCInRus.className = 'key-c-span-rus';
keyCInRus.innerHTML = 'с';
keyC.append(keyCInRus);
keyCInRus.classList.add('hidden-key');

const keyVInRus = document.createElement('span');
keyVInRus.className = 'key-v-span-rus';
keyVInRus.innerHTML = 'м';
keyV.append(keyVInRus);
keyVInRus.classList.add('hidden-key');

const keyBInRus = document.createElement('span');
keyBInRus.className = 'key-b-span-rus';
keyBInRus.innerHTML = 'и';
keyB.append(keyBInRus);
keyBInRus.classList.add('hidden-key');

const keyNInRus = document.createElement('span');
keyNInRus.className = 'key-n-span-rus';
keyNInRus.innerHTML = 'т';
keyN.append(keyNInRus);
keyNInRus.classList.add('hidden-key');

const keyMInRus = document.createElement('span');
keyMInRus.className = 'key-m-span-rus';
keyMInRus.innerHTML = 'ь';
keyM.append(keyMInRus);
keyMInRus.classList.add('hidden-key');

const keyCommaInRus = document.createElement('span');
keyCommaInRus.className = 'key-comma-span-rus';
keyCommaInRus.innerHTML = 'б';
keyComma.append(keyCommaInRus);
keyCommaInRus.classList.add('hidden-key');

const keyDotInRus = document.createElement('span');
keyDotInRus.className = 'key-dot-span-rus';
keyDotInRus.innerHTML = 'ю';
keyDot.append(keyDotInRus);
keyDotInRus.classList.add('hidden-key');

const keyAnotherSlashInRus = document.createElement('span');
keyAnotherSlashInRus.className = 'key-another-slash-span-rus';
keyAnotherSlashInRus.innerHTML = '.';
keyAnotherSlash.append(keyAnotherSlashInRus);
keyAnotherSlashInRus.classList.add('hidden-key');

document.onkeydown = function changeLanguage(event) {
  if (event.shiftKey && event.code === 'AltLeft') {
    keyQInRus.classList.toggle('hidden-key');
    keyQIn.classList.toggle('hidden-key');
    keyRemarkInRus.classList.toggle('hidden-key');
    keyRemarkIn.classList.toggle('hidden-key');
    keyWInRus.classList.toggle('hidden-key');
    keyWIn.classList.toggle('hidden-key');
    keyEInRus.classList.toggle('hidden-key');
    keyEIn.classList.toggle('hidden-key');
    keyRInRus.classList.toggle('hidden-key');
    keyRIn.classList.toggle('hidden-key');
    keyTInRus.classList.toggle('hidden-key');
    keyTIn.classList.toggle('hidden-key');
    keyYInRus.classList.toggle('hidden-key');
    keyYIn.classList.toggle('hidden-key');
    keyUInRus.classList.toggle('hidden-key');
    keyUIn.classList.toggle('hidden-key');
    keyIInRus.classList.toggle('hidden-key');
    keyIIn.classList.toggle('hidden-key');
    keyOInRus.classList.toggle('hidden-key');
    keyOIn.classList.toggle('hidden-key');
    keyPInRus.classList.toggle('hidden-key');
    keyPIn.classList.toggle('hidden-key');
    keySquareLInRus.classList.toggle('hidden-key');
    keySquareLIn.classList.toggle('hidden-key');
    keySquareRInRus.classList.toggle('hidden-key');
    keySquareRIn.classList.toggle('hidden-key');
    keyAInRus.classList.toggle('hidden-key');
    keyAIn.classList.toggle('hidden-key');
    keySInRus.classList.toggle('hidden-key');
    keySIn.classList.toggle('hidden-key');
    keyDInRus.classList.toggle('hidden-key');
    keyDIn.classList.toggle('hidden-key');
    keyFInRus.classList.toggle('hidden-key');
    keyFIn.classList.toggle('hidden-key');
    keyGInRus.classList.toggle('hidden-key');
    keyGIn.classList.toggle('hidden-key');
    keyHInRus.classList.toggle('hidden-key');
    keyHIn.classList.toggle('hidden-key');
    keyJInRus.classList.toggle('hidden-key');
    keyJIn.classList.toggle('hidden-key');
    keyKInRus.classList.toggle('hidden-key');
    keyKIn.classList.toggle('hidden-key');
    keyLInRus.classList.toggle('hidden-key');
    keyLIn.classList.toggle('hidden-key');
    keySemicolonInRus.classList.toggle('hidden-key');
    keySemicolonIn.classList.toggle('hidden-key');
    keyApostropheInRus.classList.toggle('hidden-key');
    keyApostropheIn.classList.toggle('hidden-key');
    keyZInRus.classList.toggle('hidden-key');
    keyZIn.classList.toggle('hidden-key');
    keyXInRus.classList.toggle('hidden-key');
    keyXIn.classList.toggle('hidden-key');
    keyCInRus.classList.toggle('hidden-key');
    keyCIn.classList.toggle('hidden-key');
    keyVInRus.classList.toggle('hidden-key');
    keyVIn.classList.toggle('hidden-key');
    keyBInRus.classList.toggle('hidden-key');
    keyBIn.classList.toggle('hidden-key');
    keyNInRus.classList.toggle('hidden-key');
    keyNIn.classList.toggle('hidden-key');
    keyMInRus.classList.toggle('hidden-key');
    keyMIn.classList.toggle('hidden-key');
    keyCommaInRus.classList.toggle('hidden-key');
    keyCommaIn.classList.toggle('hidden-key');
    keyDotInRus.classList.toggle('hidden-key');
    keyDotIn.classList.toggle('hidden-key');
    keyAnotherSlashInRus.classList.toggle('hidden-key');
    keyAnotherSlashIn.classList.toggle('hidden-key');
  }
};

/* Ввод текста в форму */

function addInFormQ() {
  if (keyQIn.classList.contains('hidden-key')) {
    formForText.textContent += 'й';
  } else {
    formForText.textContent += 'q';
  }
}

keyQ.addEventListener('click', addInFormQ);

function addInForm1() {
  if (key1In.classList.contains('hidden-key')) {
    formForText.textContent += '1';
  } else {
    formForText.textContent += '1';
  }
}

key1.addEventListener('click', addInForm1);

function addInFormRemark() {
  if (keyRemarkIn.classList.contains('hidden-key')) {
    formForText.textContent += 'ё';
  } else {
    formForText.textContent += '`';
  }
}

keyRemark.addEventListener('click', addInFormRemark);

function addInForm2() {
  formForText.textContent += '2';
}

key2In.addEventListener('click', addInForm2);

function addInForm3() {
  formForText.textContent += '3';
}

key3In.addEventListener('click', addInForm3);

function addInForm4() {
  formForText.textContent += '4';
}

key4In.addEventListener('click', addInForm4);

function addInForm5() {
  formForText.textContent += '5';
}

key5In.addEventListener('click', addInForm5);

function addInForm6() {
  formForText.textContent += '6';
}

key6In.addEventListener('click', addInForm6);

function addInForm7() {
  formForText.textContent += '7';
}

key7In.addEventListener('click', addInForm7);

function addInForm8() {
  formForText.textContent += '8';
}

key8In.addEventListener('click', addInForm8);

function addInForm9() {
  formForText.textContent += '9';
}

key9In.addEventListener('click', addInForm9);

function addInForm0() {
  formForText.textContent += '0';
}

key0In.addEventListener('click', addInForm0);

function addInFormMinus() {
  formForText.textContent += '-';
}

keyMinusIn.addEventListener('click', addInFormMinus);

function addInFormEquals() {
  formForText.textContent += '=';
}

keyEqualsIn.addEventListener('click', addInFormEquals);

function addInFormTab() {
  formForText.textContent += '    ';
}

keyTabIn.addEventListener('click', addInFormTab);

function addInFormW() {
  if (keyWIn.classList.contains('hidden-key')) {
    formForText.textContent += 'ц';
  } else {
    formForText.textContent += 'w';
  }
}

keyW.addEventListener('click', addInFormW);

function addInFormE() {
  if (keyEIn.classList.contains('hidden-key')) {
    formForText.textContent += 'у';
  } else {
    formForText.textContent += 'e';
  }
}

keyE.addEventListener('click', addInFormE);

function addInFormR() {
  if (keyRIn.classList.contains('hidden-key')) {
    formForText.textContent += 'к';
  } else {
    formForText.textContent += 'r';
  }
}

keyR.addEventListener('click', addInFormR);

function addInFormT() {
  if (keyTIn.classList.contains('hidden-key')) {
    formForText.textContent += 'е';
  } else {
    formForText.textContent += 't';
  }
}

keyT.addEventListener('click', addInFormT);

function addInFormY() {
  if (keyYIn.classList.contains('hidden-key')) {
    formForText.textContent += 'н';
  } else {
    formForText.textContent += 'y';
  }
}

keyY.addEventListener('click', addInFormY);

function addInFormU() {
  if (keyUIn.classList.contains('hidden-key')) {
    formForText.textContent += 'г';
  } else {
    formForText.textContent += 'u';
  }
}

keyU.addEventListener('click', addInFormU);

function addInFormI() {
  if (keyIIn.classList.contains('hidden-key')) {
    formForText.textContent += 'ш';
  } else {
    formForText.textContent += 'i';
  }
}

keyI.addEventListener('click', addInFormI);

function addInFormO() {
  if (keyOIn.classList.contains('hidden-key')) {
    formForText.textContent += 'щ';
  } else {
    formForText.textContent += 'o';
  }
}

keyO.addEventListener('click', addInFormO);

function addInFormP() {
  if (keyPIn.classList.contains('hidden-key')) {
    formForText.textContent += 'з';
  } else {
    formForText.textContent += 'p';
  }
}

keyP.addEventListener('click', addInFormP);

function addInFormSquareL() {
  if (keySquareLIn.classList.contains('hidden-key')) {
    formForText.textContent += 'х';
  } else {
    formForText.textContent += '[';
  }
}

keySquareL.addEventListener('click', addInFormSquareL);

function addInFormSquareR() {
  if (keySquareRIn.classList.contains('hidden-key')) {
    formForText.textContent += 'ъ';
  } else {
    formForText.textContent += ']';
  }
}

keySquareR.addEventListener('click', addInFormSquareR);

function addInFormA() {
  if (keyAIn.classList.contains('hidden-key')) {
    formForText.textContent += 'ф';
  } else {
    formForText.textContent += 'a';
  }
}

keyA.addEventListener('click', addInFormA);

function addInFormS() {
  if (keySIn.classList.contains('hidden-key')) {
    formForText.textContent += 'ы';
  } else {
    formForText.textContent += 's';
  }
}

keyS.addEventListener('click', addInFormS);

function addInFormD() {
  if (keyDIn.classList.contains('hidden-key')) {
    formForText.textContent += 'в';
  } else {
    formForText.textContent += 'd';
  }
}

keyD.addEventListener('click', addInFormD);

function addInFormF() {
  if (keyFIn.classList.contains('hidden-key')) {
    formForText.textContent += 'а';
  } else {
    formForText.textContent += 'f';
  }
}

keyF.addEventListener('click', addInFormF);

function addInFormG() {
  if (keyGIn.classList.contains('hidden-key')) {
    formForText.textContent += 'п';
  } else {
    formForText.textContent += 'g';
  }
}

keyG.addEventListener('click', addInFormG);

function addInFormH() {
  if (keyHIn.classList.contains('hidden-key')) {
    formForText.textContent += 'р';
  } else {
    formForText.textContent += 'h';
  }
}

keyH.addEventListener('click', addInFormH);

function addInFormJ() {
  if (keyJIn.classList.contains('hidden-key')) {
    formForText.textContent += 'о';
  } else {
    formForText.textContent += 'j';
  }
}

keyJ.addEventListener('click', addInFormJ);

function addInFormK() {
  if (keyKIn.classList.contains('hidden-key')) {
    formForText.textContent += 'л';
  } else {
    formForText.textContent += 'k';
  }
}

keyK.addEventListener('click', addInFormK);

function addInFormL() {
  if (keyLIn.classList.contains('hidden-key')) {
    formForText.textContent += 'д';
  } else {
    formForText.textContent += 'l';
  }
}

keyL.addEventListener('click', addInFormL);

function addInFormSemicolon() {
  if (keySemicolonIn.classList.contains('hidden-key')) {
    formForText.textContent += 'ж';
  } else {
    formForText.textContent += ';';
  }
}

keySemicolon.addEventListener('click', addInFormSemicolon);

function addInFormApostrophe() {
  if (keyApostropheIn.classList.contains('hidden-key')) {
    formForText.textContent += 'э';
  } else {
    formForText.textContent += "'";
  }
}

keyApostrophe.addEventListener('click', addInFormApostrophe);

function addInFormEnter() {
  formForText.textContent += '\n';
}

keyEnterIn.addEventListener('click', addInFormEnter);

function addInFormZ() {
  if (keyZIn.classList.contains('hidden-key')) {
    formForText.textContent += 'я';
  } else {
    formForText.textContent += 'z';
  }
}

keyZ.addEventListener('click', addInFormZ);

function addInFormX() {
  if (keyXIn.classList.contains('hidden-key')) {
    formForText.textContent += 'ч';
  } else {
    formForText.textContent += 'x';
  }
}

keyX.addEventListener('click', addInFormX);

function addInFormC() {
  formForText.textContent += 'c';
}

keyC.addEventListener('click', addInFormC);

function addInFormV() {
  if (keyVIn.classList.contains('hidden-key')) {
    formForText.textContent += 'м';
  } else {
    formForText.textContent += 'v';
  }
}

keyV.addEventListener('click', addInFormV);

function addInFormB() {
  if (keyBIn.classList.contains('hidden-key')) {
    formForText.textContent += 'и';
  } else {
    formForText.textContent += 'b';
  }
}

keyB.addEventListener('click', addInFormB);

function addInFormN() {
  if (keyNIn.classList.contains('hidden-key')) {
    formForText.textContent += 'т';
  } else {
    formForText.textContent += 'n';
  }
}

keyN.addEventListener('click', addInFormN);

function addInFormM() {
  if (keyMIn.classList.contains('hidden-key')) {
    formForText.textContent += 'ь';
  } else {
    formForText.textContent += 'm';
  }
}

keyM.addEventListener('click', addInFormM);

function addInFormComma() {
  if (keyCommaIn.classList.contains('hidden-key')) {
    formForText.textContent += 'б';
  } else {
    formForText.textContent += ',';
  }
}

keyComma.addEventListener('click', addInFormComma);

function addInFormDot() {
  if (keyDotIn.classList.contains('hidden-key')) {
    formForText.textContent += 'ю';
  } else {
    formForText.textContent += '.';
  }
}

keyDot.addEventListener('click', addInFormDot);

function addInFormAnotherSlash() {
  if (keyAnotherSlashIn.classList.contains('hidden-key')) {
    formForText.textContent += '.';
  } else {
    formForText.textContent += '/';
  }
}

keyAnotherSlash.addEventListener('click', addInFormAnotherSlash);

function addInFormUp() {
  formForText.textContent += '↑';
}

keyUpIn.addEventListener('click', addInFormUp);

function addInFormDown() {
  formForText.textContent += '↓';
}

keyDownIn.addEventListener('click', addInFormDown);

function addInFormLeft() {
  formForText.textContent += '←';
}

keyLeftIn.addEventListener('click', addInFormLeft);

function addInFormRight() {
  formForText.textContent += '→';
}

keyRightIn.addEventListener('click', addInFormRight);

function addInFormSpace() {
  formForText.textContent += ' ';
}

keySpaceIn.addEventListener('click', addInFormSpace);
