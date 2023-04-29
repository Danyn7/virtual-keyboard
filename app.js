// ES6+ деструктуризация
const codes = ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'];

const [amountZ, amountX, amountC, amountV, amountB, amountN, amountM] = codes;

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
const keyWin = document.createElement('div');
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
keySpaceIn.innerHTML = 'Space';
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
const keyW = document.createElement('div');
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

heading.innerHTML = 'Virtual keyboard';
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
