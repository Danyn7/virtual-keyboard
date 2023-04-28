const container = document.createElement('div');
const heading = document.createElement('p');
const formForText = document.createElement('textarea');
const keyboard = document.createElement('div');
const littleMessage = document.createElement('p');
const littleMessage2 = document.createElement('p');

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

keyCtrlL.className = 'key-ctrl-l';
keyWin.className = 'key-win';
keyAltL.className = 'key-alt-l';
keySpace.className = 'key-space';
keyAltR.className = 'key-alt-r';
keyLeft.className = 'key-left';
keyDown.className = 'key-down';
keyRight.className = 'key-right';
keyCtrlR.className = 'key-ctrl-r';

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
