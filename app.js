// loading animation
$(window).on('load', function () {
    $('#loading').fadeOut(1000);
})
/* ****************************************************************************
***************************************************************************** */
//Btn on Map
// Linyue
const ly = document.querySelector('#linyue');
// Steel
const sg = document.querySelector('#steel');
// Chang
const ch = document.querySelector('#chang');
// Ariba 
const aa = document.querySelector('#ariba');
// Saloni
const sa = document.querySelector('#saloni');
// Jonathan1
const j1 = document.querySelector('#jonathan01');
// Jonathan2
const j2 = document.querySelector('#jonathan02');
// Jonathan3
const j3 = document.querySelector('#jonathan03');
// Jonathan4
const j4 = document.querySelector('#jonathan04');
// Jonathan5
const j5 = document.querySelector('#jonathan05');
// Ruoyu1
const ry1 = document.querySelector('#ruoyu01');
// Ruoyu2
const ry2 = document.querySelector('#ruoyu02');
// Ruoyu3
const ry3 = document.querySelector('#ruoyu03');
// keyi
const ky = document.querySelector('#keyi');
// data structure { Name : [doc, ratioX, ratioY]}
let dict1 = {
    'ly': [ly, 623, 602, false],
    'sg': [sg, 630, 670, false],
    'ch': [ch, 384, 388, false],
    'aa': [aa, 405, 407, false],
    'sa': [sa, 429, 430, false],
    'j1': [j1, 371, 265, false],
    'j2': [j2, 707, 228, false],
    'j3': [j3, 517, 330, false],
    'j4': [j4, 360, 485, false],
    'j5': [j5, 1231, 542, false],
    'ry1': [ry1, 334, 368, false],
    'ry2': [ry2, 290, 410, false],
    'ry3': [ry3, 494, 602, false],
    'ky': [ky, 426, 649, false]
};

let zoom = false;

function initBtnStyle(key) {
    key.style.backgroundImage = 'url(btn.png)';
    key.style.backgroundColor = 'transparent';
    key.style.backgroundPosition = 'center';
    key.style.backgroundSize = 'contain';
    key.style.backgroundRepeat = 'no-repeat';
    key.style.width = '1.3vw';
    key.style.height = '1.3vw';
    key.style.padding = '0';
    key.style.border = 'none';
    key.style.borderRadius = '50%';
    key.style.boxShadow = '';
}

function initBtns() {
    for (let key in dict1) {
        dict1[key][3] = false;
        initBtnStyle(dict1[key][0]);
    }
}

//Btn along the line
// Linyuef
const lyUnder = document.querySelector('#lyBtn');
const lyP = document.querySelector('#lyP');
// Steel
const sgUnder = document.querySelector('#sgBtn');
const sgP = document.querySelector('#sgP');
// Chang
const chUnder = document.querySelector('#chBtn');
const chP = document.querySelector('#chP');
// Ariba 
const aaUnder = document.querySelector('#aaBtn');
const aaP = document.querySelector('#aaP');
// Saloni
const saUnder = document.querySelector('#saBtn');
const saP = document.querySelector('#saP');
// Jonathan
const jUnder = document.querySelector('#jBtn');
const jP = document.querySelector('#jP');
// Ruoyu
const ryUnder = document.querySelector('#ryBtn');
const ryP = document.querySelector('#ryP');
// keyi
const kyUnder = document.querySelector('#kyBtn');
const kyP = document.querySelector('#kyP');
// data structure { Name : [btnUnder, pUnder]}
let dict2 = {
    'ly': [lyUnder, lyP, false],
    'sg': [sgUnder, sgP, false],
    'ch': [chUnder, chP, false],
    'aa': [aaUnder, aaP, false],
    'sa': [saUnder, saP, false],
    'j': [jUnder, jP, false],
    'ry': [ryUnder, ryP, false],
    'ky': [kyUnder, kyP, false]
};

//hover effect -> pop up title
function shineFooterBtn(key) {
    dict2[key][0].style.boxShadow = '0 0 17px 13px rgba(255, 255, 255, 1)';
    dict2[key][0].style.backgroundColor = 'rgba(255, 255, 255, 1)';
    dict2[key][0].style.transition = 'all 0.8s ease';
}

function clearFooterBtn() {
    for (let k in dict2) {
        let footerB = dict2[k][0];
        if (!dict2[k][2]) {
            footerB.style.boxShadow = '';
            footerB.style.backgroundColor = '';
        }
    }
}

function shineAnnotation(key) {
    clearFooterBtn();
    dict2[key][1].style.transform = 'scale(1.05)';
    dict2[key][1].style.transition = 'transform 1.2s ease-in-out';
    shineFooterBtn(key);
}

function clearAnnotation(key) {
    if (!dict2[key][2]) {
        dict2[key][1].style.transform = 'scale(.9)';
        clearFooterBtn();
    }
}

function shineBtn(key) {
    let toggle = dict1[key][3];
    if (!toggle) {
        dict1[key][3] = true;
        dict1[key][0].style.boxShadow = '0 0 10px 12px rgba(255, 255, 255, 0.65)';
        dict1[key][0].style.transition = 'all 0.8s ease';
    }
}

function clearBtn() {
    for (let k in dict1) {
        dict1[k][3] = false;
        let btn = dict1[k][0];
        btn.style.boxShadow = '';
    }
}

lyUnder.onmouseover = function() {
    shineAnnotation('ly');
    if (!zoom) {
        shineBtn('ly');
    }
    else {
        ly.style.transform = 'rotate(+180deg)';
        ly.style.transition = 'all 1.5s';
    }
}
lyUnder.onmouseout = function() {
    clearAnnotation('ly');
    if (!zoom && !dict2['ly'][2]) {
        clearBtn();
    }
    if (zoom) {
        ly.style.transform = 'rotate(0deg)';
        ly.style.transition = 'all 1.5s';
    }
}
ly.onmouseover = function() {
    shineAnnotation('ly');
    if (!zoom) {
        shineBtn('ly');
    }
    else {
        ly.style.transform = 'rotate(+180deg)';
        ly.style.transition = 'all 1.5s';
    }
    
}
ly.onmouseout = function() {
    clearAnnotation('ly');
    if (!zoom && !dict2['ly'][2]) {
        clearBtn();
    }
    if (zoom) {
        ly.style.transform = 'rotate(0deg)';
        ly.style.transition = 'all 1.5s';
    }
}
sgUnder.onmouseover = function() {
    shineAnnotation('sg');
    if (!zoom) {
        shineBtn('sg');
    }
    else {
        sg.style.transform = 'rotate(+180deg)';
        sg.style.transition = 'all 1.5s';
    }
}
sgUnder.onmouseout = function() {
    clearAnnotation('sg');
    if (!zoom && !dict2['sg'][2]) {
        clearBtn();
    }
    if (zoom) {
        sg.style.transform = 'rotate(0deg)';
        sg.style.transition = 'all 1.5s';
    }
}
sg.onmouseover = function() {
    shineAnnotation('sg');
    if (!zoom) {
        shineBtn('sg');
    }
    else {
        sg.style.transform = 'rotate(+180deg)';
        sg.style.transition = 'all 1.5s';
    }
}
sg.onmouseout = function() {
    clearAnnotation('sg');
    if (!zoom && !dict2['sg'][2]) {
        clearBtn();
    }
    if (zoom) {
        sg.style.transform = 'rotate(0deg)';
        sg.style.transition = 'all 1.5s';
    }
}
chUnder.onmouseover = function() {
    shineAnnotation('ch');
    if (!zoom) {
        shineBtn('ch');
    }
    else {
        ch.style.transform = 'rotate(+180deg)';
        ch.style.transition = 'all 1.5s';
    }
}
chUnder.onmouseout = function() {
    clearAnnotation('ch');
    if (!zoom && !dict2['ch'][2]) {
        clearBtn();
    }
    if (zoom) {
        ch.style.transform = 'rotate(0deg)';
        ch.style.transition = 'all 1.5s';
    }
}
ch.onmouseover = function() {
    shineAnnotation('ch');
    if (!zoom) {
        shineBtn('ch');
    }
    else {
        ch.style.transform = 'rotate(+180deg)';
        ch.style.transition = 'all 1.5s';
    }
}
ch.onmouseout = function() {
    clearAnnotation('ch');
    if (!zoom && !dict2['ch'][2]) {
        clearBtn();
    }
    if (zoom) {
        ch.style.transform = 'rotate(0deg)';
        ch.style.transition = 'all 1.5s';
    }
}
aaUnder.onmouseover = function() {
    shineAnnotation('aa');
    if (!zoom) {
        shineBtn('aa');
    }
    else {
        aa.style.transform = 'rotate(+180deg)';
        aa.style.transition = 'all 1.5s';
    }
}
aaUnder.onmouseout = function() {
    clearAnnotation('aa');
    if (!zoom && !dict2['aa'][2]) {
        clearBtn();
    }
    if (zoom) {
        aa.style.transform = 'rotate(0deg)';
        aa.style.transition = 'all 1.5s';
    }
}
aa.onmouseover = function() {
    shineAnnotation('aa');
    if (!zoom) {
        shineBtn('aa');
    }
    else {
        aa.style.transform = 'rotate(+180deg)';
        aa.style.transition = 'all 1.5s';
    }
}
aa.onmouseout = function() {
    clearAnnotation('aa');
    if (!zoom && !dict2['aa'][2]) {
        clearBtn();
    }
    if (zoom) {
        aa.style.transform = 'rotate(0deg)';
        aa.style.transition = 'all 1.5s';
    }
}
saUnder.onmouseover = function() {
    shineAnnotation('sa');
    if (!zoom) {
        shineBtn('sa');
    }
    else {
        sa.style.transform = 'rotate(+180deg)';
        sa.style.transition = 'all 1.5s';
    }
}
saUnder.onmouseout = function() {
    clearAnnotation('sa');
    if (!zoom && !dict2['sa'][2]) {
        clearBtn();
    }
    if (zoom) {
        sa.style.transform = 'rotate(0deg)';
        sa.style.transition = 'all 1.5s';
    }
}
sa.onmouseover = function() {
    shineAnnotation('sa');
    if (!zoom) {
        shineBtn('sa');
    }
    else {
        sa.style.transform = 'rotate(+180deg)';
        sa.style.transition = 'all 1.5s';
    }
}
sa.onmouseout = function() {
    clearAnnotation('sa');
    if (!zoom && !dict2['sa'][2]) {
        clearBtn();
    }
    if (zoom) {
        sa.style.transform = 'rotate(0deg)';
        sa.style.transition = 'all 1.5s';
    }
}
jUnder.onmouseover = function() {
    shineAnnotation('j');
    if (!zoom) {
        shineBtn('j1');
        shineBtn('j2');
        shineBtn('j3');
        shineBtn('j4');
        shineBtn('j5');
    }
    else {
        j1.style.transform = 'rotate(+180deg)';
        j1.style.transition = 'all 1.5s';
        j2.style.transform = 'rotate(+180deg)';
        j2.style.transition = 'all 1.5s';
        j3.style.transform = 'rotate(+180deg)';
        j3.style.transition = 'all 1.5s';
        j4.style.transform = 'rotate(+180deg)';
        j4.style.transition = 'all 1.5s';
        j5.style.transform = 'rotate(+180deg)';
        j5.style.transition = 'all 1.5s';
    }
}
jUnder.onmouseout = function() {
    if (!dict2['j'][2] && !zoom) {
        clearAnnotation('j');
        clearBtn();
    }
    if (!dict2['j'][2] && zoom) {
        clearAnnotation('j');
        j1.style.transform = 'rotate(0deg)';
        j1.style.transition = 'all 1.5s';
        j2.style.transform = 'rotate(0deg)';
        j2.style.transition = 'all 1.5s';
        j3.style.transform = 'rotate(0deg)';
        j3.style.transition = 'all 1.5s';
        j4.style.transform = 'rotate(0deg)';
        j4.style.transition = 'all 1.5s';
        j5.style.transform = 'rotate(0deg)';
        j5.style.transition = 'all 1.5s';
    }
}
j1.onmouseover = function() {
    shineAnnotation('j');
    if (!zoom) {
        shineBtn('j1');
    }
    else {
        j1.style.transform = 'rotate(+180deg)';
        j1.style.transition = 'all 1.5s';
    } 
}
j1.onmouseout = function() {
    clearAnnotation('j');
    if (!zoom && !dict2['j'][2]) {
        clearBtn();
    }
    if (zoom) {
        j1.style.transform = 'rotate(0deg)';
        j1.style.transition = 'all 1.5s';
    }
}
j2.onmouseover = function() {
    shineAnnotation('j');
    if (!zoom) {
        shineBtn('j2');
    }
    else {
        j2.style.transform = 'rotate(+180deg)';
        j2.style.transition = 'all 1.5s';
    }
}
j2.onmouseout = function() {
    clearAnnotation('j');
    if (!zoom && !dict2['j'][2]) {
        clearBtn();
    }
    if (zoom) {
        j2.style.transform = 'rotate(0deg)';
        j2.style.transition = 'all 1.5s';
    }
}
j3.onmouseover = function() {
    shineAnnotation('j');
    if (!zoom) {
        shineBtn('j3');
    }
    else {
        j3.style.transform = 'rotate(+180deg)';
        j3.style.transition = 'all 1.5s';
    }
}
j3.onmouseout = function() {
    clearAnnotation('j');
    if (!zoom && !dict2['j'][2]) {
        clearBtn();
    }
    if (zoom) {
        j3.style.transform = 'rotate(0deg)';
        j3.style.transition = 'all 1.5s';
    }
}
j4.onmouseover = function() {
    shineAnnotation('j');
    if (!zoom) {
        shineBtn('j4');
    }
    else {
        j4.style.transform = 'rotate(+180deg)';
        j4.style.transition = 'all 1.5s';
    }
}
j4.onmouseout = function() {
    clearAnnotation('j');
    if (!zoom && !dict2['j'][2]) {
        clearBtn();
    }
    if (zoom) {
        j4.style.transform = 'rotate(0deg)';
        j4.style.transition = 'all 1.5s';
    }
}
j5.onmouseover = function() {
    shineAnnotation('j');
    if (!zoom) {
        shineBtn('j5');
    }
    else {
        j5.style.transform = 'rotate(+180deg)';
        j5.style.transition = 'all 1.5s';
    }
}
j5.onmouseout = function() {
    clearAnnotation('j');
    if (!zoom && !dict2['j'][2]) {
        clearBtn();
    }
    if (zoom) {
        j5.style.transform = 'rotate(0deg)';
        j5.style.transition = 'all 1.5s';
    }
}
ryUnder.onmouseover = function() {
    shineAnnotation('ry');
    if (!dict2['ry'][2] && !zoom) {
        shineBtn('ry1');
        shineBtn('ry2');
        shineBtn('ry3');
        $('#corridor').fadeIn(1200);
    }
    if (!dict2['ry'][2] && zoom) {
        ry1.style.transform = 'rotate(+180deg)';
        ry1.style.transition = 'all 1.5s';
        ry2.style.transform = 'rotate(+180deg)';
        ry2.style.transition = 'all 1.5s';
        ry3.style.transform = 'rotate(+180deg)';
        ry3.style.transition = 'all 1.5s';
    }
}
ryUnder.onmouseout = function() {
    if (!dict2['ry'][2] && !zoom) {
        clearAnnotation('ry');
        clearBtn();
        $('#corridor').fadeOut(800);
    }
    if (!dict2['ry'][2] && zoom) {
        clearAnnotation('ry');
        ry1.style.transform = 'rotate(0deg)';
        ry1.style.transition = 'all 1.5s';
        ry2.style.transform = 'rotate(0deg)';
        ry2.style.transition = 'all 1.5s';
        ry3.style.transform = 'rotate(0deg)';
        ry3.style.transition = 'all 1.5s';
    }
}
ry1.onmouseover = function() {
    shineAnnotation('ry');
    if (!zoom) {
        shineBtn('ry1');
    }
    else {
        ry1.style.transform = 'rotate(+180deg)';
        ry1.style.transition = 'all 1.5s';
    }
}
ry1.onmouseout = function() {
    clearAnnotation('ry');
    if (!zoom && !dict2['ry'][2]) {
        clearBtn();
    }
    if (zoom) {
        ry1.style.transform = 'rotate(0deg)';
        ry1.style.transition = 'all 1.5s';
    }
}
ry2.onmouseover = function() {
    shineAnnotation('ry');
    if (!zoom) {
        shineBtn('ry2');
    }
    else {
        ry2.style.transform = 'rotate(+180deg)';
        ry2.style.transition = 'all 1.5s';
    }
}
ry2.onmouseout = function() {
    clearAnnotation('ry');
    if (!zoom && !dict2['ry'][2]) {
        clearBtn();
    }
    if (zoom) {
        ry2.style.transform = 'rotate(0deg)';
        ry2.style.transition = 'all 1.5s';
    }
}
ry3.onmouseover = function() {
    shineAnnotation('ry');
    if (!zoom) {
        shineBtn('ry3');
    }
    else {
        ry3.style.transform = 'rotate(+180deg)';
        ry3.style.transition = 'all 1.5s';
    }
}
ry3.onmouseout = function() {
    clearAnnotation('ry');
    if (!zoom && !dict2['ry'][2]) {
        clearBtn();
    }
    if (zoom) {
        ry3.style.transform = 'rotate(0deg)';
        ry3.style.transition = 'all 1.5s';
    }
}
kyUnder.onmouseover = function() {
    shineAnnotation('ky');
    if (!zoom) {
        shineBtn('ky');
    }
    else {
        ky.style.transform = 'rotate(+180deg)';
        ky.style.transition = 'all 1.5s';
    }
}
kyUnder.onmouseout = function() {
    clearAnnotation('ky');
    if (!zoom && !dict2['ky'][2]) {
        clearBtn();
    }
    if (zoom) {
        ky.style.transform = 'rotate(0deg)';
        ky.style.transition = 'all 1.5s';
    }
}
ky.onmouseover = function() {
    shineAnnotation('ky');
    if (!zoom) {
        shineBtn('ky');
    }
    else {
        ky.style.transform = 'rotate(+180deg)';
        ky.style.transition = 'all 1.5s';
    }
}
ky.onmouseout = function() {
    clearAnnotation('ky');
    if (!zoom && !dict2['ky'][2]) {
        clearBtn();
    }
    if (zoom) {
        ky.style.transform = 'rotate(0deg)';
        ky.style.transition = 'all 1.5s';
    }
}

function initAnnotation() {
    for (k in dict2) {
        let p = dict2[k][1];
        p.style.transform = 'scale(.9)';
        dict2[k][2] = false;
        dict2[k][0].style.boxShadow = '';
        dict2[k][0].style.backgroundColor = '';
    }
}

//card await to pop up
// Linyue
const lyCard = document.querySelector('#lyC');
// Steel
const sgCard = document.querySelector('#sgC');
// Chang
const chCard = document.querySelector('#chC');
// Ariba 
const aaCard = document.querySelector('#aaC');
// Saloni
const saCard = document.querySelector('#saC');
// Jonathan
const jCard = document.querySelector('#jC');
// Ruoyu
const ryCard = document.querySelector('#ryC');
// keyi
const kyCard = document.querySelector('#kyC');
// data structure { Name : [doc, popupLogic]}
let dict3 = {
    'ly': [lyCard, false],
    'sg': [sgCard, false],
    'ch': [chCard, false],
    'aa': [aaCard, false],
    'sa': [saCard, false],
    'j': [jCard, false],
    'ry': [ryCard, false],
    'ky': [kyCard, false]
};

function initCard() {
    for (k in dict3) {
        let card = dict3[k];
        card[0].style.display = 'none';
        card[1] = false;
    }
}

/* ****************************************************************************
***************************************************************************** */
// set positions
const img = document.querySelector('#baseMap');
const imgRatio = 1440 / 1024;
const winRatio = window.innerWidth / window.innerHeight;
const imgWidth = 1440;
const imgHeight = 1024;

const ryLine = document.querySelector('#corridor');
ryLine.style.position = 'absolute';
ryLine.style.top = '19%';
ryLine.style.left = '15.9%';
$('#corridor').hide();

function position(btnX, btnY) {
    let oldX = btnX - 720;
    let oldY = btnY - 512;
    let newX;
    let newY;
    let scale;
    if (imgRatio <= winRatio) {
        // imgW <= windowW -> scale by the ratio of width to fit
        scale = window.innerWidth / imgWidth;
        newX = window.innerWidth/2 + (oldX * scale);
        newY = window.innerHeight/2 + (oldY * scale);
    } else {
        // imgW > windowW -> scale by the ratio of height to fit
        scale = window.innerHeight / imgHeight;
        newX = window.innerWidth/2 + (oldX * scale);
        newY = window.innerHeight/2 + (oldY * scale);
    }
    return [newX, newY];
}

let dictCoor = {};

function loadInitPosition() {
    document.body.style.cursor = 'default';
    img.style.position = 'absolute';
    img.style.left = '0px';
    img.style.top = '0px';
    img.style.width = '100%';
    img.style.height = '100%';
    for (const key in dict1) {
        let val = dict1[key];
        let loadedPos = position(val[1], val[2]);
        dictCoor[key] = [val[0], loadedPos[0], loadedPos[1]];
        val[0].style.position = 'absolute';
        val[0].style.left = loadedPos[0] + 'px';
        val[0].style.top = loadedPos[1] + 'px';
    }
}

function setInit() {
    drag = false;
    zoom = false;
    dictCoor = {};
    initBtns();
    loadInitPosition();
    initAnnotation();
    initCard();
    $('#corridor').fadeOut(800);
}

window.addEventListener('load', setInit);
window.addEventListener('resize', setInit);

const nav = document.querySelector('#navbtn');
nav.addEventListener('click', setInit);


/* ****************************************************************************
***************************************************************************** */
// set zoom + card popup
let drag = false;

function scaleBtn(refX, refY, x, y) {
    let newRelX = (x - refX) * 6 + refX;
    let newRelY = (y - refY) * 6 + refY;
    return [newRelX, newRelY];
}

function btnRep(refX0, refY0, refX, refY, x, y) {
    let newRelX = refX0 - refX + x;
    let newRelY = refY0 - refY + y;
    return [newRelX, newRelY]; 
}

function resizeImg(x, y) {
    for (let btn in dict1) {
        let btnVal = dict1[btn];
        let prevX = dictCoor[btn][1];
        let prevY = dictCoor[btn][2];
        let newCoor = scaleBtn(x, y, prevX, prevY);
        dictCoor[btn][1] = newCoor[0];
        dictCoor[btn][2] = newCoor[1];
        btnVal[0].style.left = newCoor[0] + 'px';
        btnVal[0].style.top = newCoor[1] + 'px';
    }
    img.style.left = 0 - 5 * x + 'px';
    img.style.top = 0 - 5 * y + 'px';
    img.style.width = '600%';
    img.style.height = '600%';
    img.style.position = 'absolute';
    img.style.transition = 'all 1.2s ease 0.2s';
}

function reloadImg(x0, y0, x, y) {
    for (let btn in dict1) {
        let btnVal = dict1[btn];
        let prevX = dictCoor[btn][1];
        let prevY = dictCoor[btn][2];
        let newCoor = btnRep(x0, y0, x, y, prevX, prevY);
        dictCoor[btn][1] = newCoor[0];
        dictCoor[btn][2] = newCoor[1];
        btnVal[0].style.left = newCoor[0] + 'px';
        btnVal[0].style.top = newCoor[1] + 'px';
    }
    img.style.left = 0 - 5 * x0 + 'px';
    img.style.top = 0 - 5 * y0 + 'px';
    img.style.position = 'absolute';
    img.style.transition = 'all 1.5s ease 0.5s';
}

function clearCardPopup() {
    for (let key in dict3) {
        let toggle = dict3[key][1];
        if (toggle) {
            dict3[key][0].style.display = 'none';
            dict3[key][1] = false;
        }
    }
}

let id = null;
function popupCard(key) {
    let cardInfo = dict3[key];
    let card = cardInfo[0];
    cardInfo[1] = true;
    let topEnd = 0.2 * parseInt(window.innerHeight);
    let pos = parseInt(window.innerHeight);
    card.style.display = 'flex';
    card.style.top = pos + 'px';
    clearInterval(id);
    id = setInterval(move, 0.5);
    function move() {
        if (pos <= topEnd) {
            clearInterval(id);
        } else {
            pos--;
            card.style.top = pos + 'px';
        }
    }
}

function changeMainBtnStyles(btn) {
    btn.style.width = '10em';
    btn.style.height = '10em';
}

function changeMainBtns() {
    clearBtn();
    ly.style.backgroundImage = 'url(images/ly.png)';
    sg.style.backgroundImage = 'url(images/sg.png)';
    ch.style.backgroundImage = 'url(images/cl.png)';
    aa.style.backgroundImage = 'url(images/aa.png)';
    sa.style.backgroundImage = 'url(images/sa.png)';
    j1.style.backgroundImage = 'url(images/jp.png)';
    j2.style.backgroundImage = 'url(images/jp.png)';
    j3.style.backgroundImage = 'url(images/jp.png)';
    j4.style.backgroundImage = 'url(images/jp.png)';
    j5.style.backgroundImage = 'url(images/jp.png)';
    ry1.style.backgroundImage = 'url(images/ry.png)';
    ry2.style.backgroundImage = 'url(images/ry.png)';
    ry3.style.backgroundImage = 'url(images/ry.png)';
    ky.style.backgroundImage = 'url(images/ky.png)';
    for (let k in dict1) {
        let btn = dict1[k][0];
        changeMainBtnStyles(btn);
    }
}

function pressLy() {
    lyCoor0 = position(dict1['ly'][1], dict1['ly'][2]);
    lyx0 = lyCoor0[0];
    lyy0 = lyCoor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        resizeImg(lyx0, lyy0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(lyx0, lyy0, dictCoor['ly'][1], dictCoor['ly'][2]);
    }
    clearCardPopup();
    popupCard('ly');
}

ly.addEventListener('click', (e) => {
    if (!zoom) {
        changeMainBtns();
    }
    $('#corridor').fadeOut(800);
    initAnnotation();
    pressLy();
    dict2['ly'][2] = true;
    shineAnnotation('ly');
});
lyUnder.addEventListener('click', (e) => {
    if (!zoom) {
        changeMainBtns();
    }
    initAnnotation();
    $('#corridor').fadeOut(800);
    pressLy();
    dict2['ly'][2] = true;
    shineAnnotation('ly');
});

function pressSg() {
    sgCoor0 = position(dict1['sg'][1], dict1['sg'][2]);
    sgx0 = sgCoor0[0];
    sgy0 = sgCoor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        resizeImg(sgx0, sgy0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(sgx0, sgy0, dictCoor['sg'][1], dictCoor['sg'][2]);
    }
    clearCardPopup();
    popupCard('sg');
}

sg.addEventListener('click', (e) => {
    if (!zoom) {
        changeMainBtns();
    }
    $('#corridor').fadeOut(800);
    initAnnotation();
    pressSg();
    dict2['sg'][2] = true;
    shineAnnotation('sg');
});
sgUnder.addEventListener('click', (e) => {
    if (!zoom) {
        changeMainBtns();
    }
    $('#corridor').fadeOut(800);
    initAnnotation();
    pressSg();
    dict2['sg'][2] = true;
    shineAnnotation('sg');
});

function pressCh() {
    chCoor0 = position(dict1['ch'][1], dict1['ch'][2]);
    chx0 = chCoor0[0];
    chy0 = chCoor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        resizeImg(chx0, chy0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(chx0, chy0, dictCoor['ch'][1], dictCoor['ch'][2]);
    }
    clearCardPopup();
    popupCard('ch');
}

ch.addEventListener('click', (e) => {
    if (!zoom) {
        changeMainBtns();
    }
    $('#corridor').fadeOut(800);
    initAnnotation();
    pressCh();
    dict2['ch'][2] = true;
    shineAnnotation('ch');
});
chUnder.addEventListener('click', (e) => {
    if (!zoom) {
        changeMainBtns();
    }
    $('#corridor').fadeOut(800);
    initAnnotation();
    pressCh();
    dict2['ch'][2] = true;
    shineAnnotation('ch');
});

function pressAa() {
    aaCoor0 = position(dict1['aa'][1], dict1['aa'][2]);
    aax0 = aaCoor0[0];
    aay0 = aaCoor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        resizeImg(aax0, aay0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(aax0, aay0, dictCoor['aa'][1], dictCoor['aa'][2]);
    }
    clearCardPopup();
    popupCard('aa');
}

aa.addEventListener('click', (e) => {
    if (!zoom) {
        changeMainBtns();
    }
    $('#corridor').fadeOut(800);
    initAnnotation();
    pressAa();
    dict2['aa'][2] = true;
    shineAnnotation('aa');
});
aaUnder.addEventListener('click', (e) => {
    if (!zoom) {
        changeMainBtns();
    }
    $('#corridor').fadeOut(800);
    initAnnotation();
    pressAa();
    dict2['aa'][2] = true;
    shineAnnotation('aa');
});

function pressSa() {
    saCoor0 = position(dict1['sa'][1], dict1['sa'][2]);
    sax0 = saCoor0[0];
    say0 = saCoor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        resizeImg(sax0, say0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(sax0, say0, dictCoor['sa'][1], dictCoor['sa'][2]);
    }
    clearCardPopup();
    popupCard('sa');
}

sa.addEventListener('click', (e) => {
    if (!zoom) {
        changeMainBtns();
    }
    $('#corridor').fadeOut(800);
    initAnnotation();
    pressSa();
    dict2['sa'][2] = true;
    shineAnnotation('sa');
});
saUnder.addEventListener('click', (e) => {
    if (!zoom) {
        changeMainBtns();
    }
    $('#corridor').fadeOut(800);
    initAnnotation();
    pressSa();
    dict2['sa'][2] = true;
    shineAnnotation('sa');
});

j1.addEventListener('click', (e) => {
    $('#corridor').fadeOut(800);
    j1Coor0 = position(dict1['j1'][1], dict1['j1'][2]);
    j1x0 = j1Coor0[0];
    j1y0 = j1Coor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        changeMainBtns();
        resizeImg(j1x0, j1y0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(j1x0, j1y0, dictCoor['j1'][1], dictCoor['j1'][2]);
    }
    clearCardPopup();
    initAnnotation();
    popupCard('j');
    dict2['j'][2] = true;
    shineAnnotation('j');
})

j2.addEventListener('click', (e) => {
    $('#corridor').fadeOut(800);
    j2Coor0 = position(dict1['j2'][1], dict1['j2'][2]);
    j2x0 = j2Coor0[0];
    j2y0 = j2Coor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        changeMainBtns();
        resizeImg(j2x0, j2y0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(j2x0, j2y0, dictCoor['j2'][1], dictCoor['j2'][2]);
    }
    clearCardPopup();
    initAnnotation();
    popupCard('j');
    dict2['j'][2] = true;
    shineAnnotation('j');
})

j3.addEventListener('click', (e) => {
    $('#corridor').fadeOut(800);
    j3Coor0 = position(dict1['j3'][1], dict1['j3'][2]);
    j3x0 = j3Coor0[0];
    j3y0 = j3Coor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        changeMainBtns();
        resizeImg(j3x0, j3y0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(j3x0, j3y0, dictCoor['j3'][1], dictCoor['j3'][2]);
    }
    clearCardPopup();
    initAnnotation();
    popupCard('j');
    dict2['j'][2] = true;
    shineAnnotation('j');
})

j4.addEventListener('click', (e) => {
    $('#corridor').fadeOut(800);
    j4Coor0 = position(dict1['j4'][1], dict1['j4'][2]);
    j4x0 = j4Coor0[0];
    j4y0 = j4Coor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        changeMainBtns();
        resizeImg(j4x0, j4y0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(j4x0, j4y0, dictCoor['j4'][1], dictCoor['j4'][2]);
    }
    clearCardPopup();
    initAnnotation();
    popupCard('j');
    dict2['j'][2] = true;
    shineAnnotation('j');
})

j5.addEventListener('click', (e) => {
    $('#corridor').fadeOut(800);
    j5Coor0 = position(dict1['j5'][1], dict1['j5'][2]);
    j5x0 = j5Coor0[0];
    j5y0 = j5Coor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        changeMainBtns();
        resizeImg(j5x0, j5y0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(j5x0, j5y0, dictCoor['j5'][1], dictCoor['j5'][2]);
    }
    clearCardPopup();
    initAnnotation();
    popupCard('j');
    dict2['j'][2] = true;
    shineAnnotation('j');
})

jUnder.addEventListener('click', (e) => {
    setInit();
    popupCard('j');
    dict2['j'][2] = true;
    initBtns();
    shineBtn('j1');
    shineBtn('j2');
    shineBtn('j3');
    shineBtn('j4');
    shineBtn('j5');
    dict2['j'][2] = true;
    shineAnnotation('j');
})

ry1.addEventListener('click', (e) => {
    $('#corridor').fadeOut(800);
    ry1Coor0 = position(dict1['ry1'][1], dict1['ry1'][2]);
    ry1x0 = ry1Coor0[0];
    ry1y0 = ry1Coor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        changeMainBtns();
        resizeImg(ry1x0, ry1y0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(ry1x0, ry1y0, dictCoor['ry1'][1], dictCoor['ry1'][2]);
    }
    clearCardPopup();
    initAnnotation();
    popupCard('ry');
    dict2['ry'][2] = true;
    shineAnnotation('ry');
})

ry2.addEventListener('click', (e) => {
    $('#corridor').fadeOut(800);
    ry2Coor0 = position(dict1['ry2'][1], dict1['ry2'][2]);
    ry2x0 = ry2Coor0[0];
    ry2y0 = ry2Coor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        changeMainBtns();
        resizeImg(ry2x0, ry2y0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(ry2x0, ry2y0, dictCoor['ry2'][1], dictCoor['ry2'][2]);
    }
    clearCardPopup();
    initAnnotation();
    popupCard('ry');
    dict2['ry'][2] = true;
    shineAnnotation('ry');
})

ry3.addEventListener('click', (e) => {
    $('#corridor').fadeOut(800);
    ry3Coor0 = position(dict1['ry3'][1], dict1['ry3'][2]);
    ry3x0 = ry3Coor0[0];
    ry3y0 = ry3Coor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        changeMainBtns();
        resizeImg(ry3x0, ry3y0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(ry3x0, ry3y0, dictCoor['ry3'][1], dictCoor['ry3'][2]);
    }
    clearCardPopup();
    initAnnotation();
    popupCard('ry');
    dict2['ry'][2] = true;
    shineAnnotation('ry');
})

ryUnder.addEventListener('click', (e) => {
    setInit();
    popupCard('ry');
    dict2['ry'][2] = true;
    initBtns();
    shineBtn('ry1');
    shineBtn('ry2');
    shineBtn('ry3');
    $('#corridor').fadeIn(1200);
    shineFooterBtn('ry');
    dict2['ry'][2] = true;
    shineAnnotation('ry');
})

function pressKy() {
    kyCoor0 = position(dict1['ky'][1], dict1['ky'][2]);
    kyx0 = kyCoor0[0];
    kyy0 = kyCoor0[1];
    if (!zoom) {
        zoom = true;
        drag = true;
        resizeImg(kyx0, kyy0);
        document.body.style.cursor = 'grab';
    }
    else {
        reloadImg(kyx0, kyy0, dictCoor['ky'][1], dictCoor['ky'][2]);
    }
    clearCardPopup();
    popupCard('ky');
}

ky.addEventListener('click', (e) => {
    if (!zoom) {
        changeMainBtns();
    }
    $('#corridor').fadeOut(800);
    initAnnotation();
    pressKy();
    dict2['ky'][2] = true;
    shineAnnotation('ky');
});
kyUnder.addEventListener('click', (e) => {
    if (!zoom) {
        changeMainBtns();
    }
    $('#corridor').fadeOut(800);
    initAnnotation();
    pressKy();
    dict2['ky'][2] = true;
    shineAnnotation('ky');
});

/* ****************************************************************************
***************************************************************************** */
// drag things
let prevMousePos = [];
let imgCoor = [];

function prevCoorInput(x, y){
    prevMousePos.push(x);
    prevMousePos.push(y);
    imgCoor.push(parseInt(img.style.left));
    imgCoor.push(parseInt(img.style.top));
}

function inTheBound(deltX, deltY) {
    let leftestX = imgCoor[0];
    let toppestY = imgCoor[1];
    let rightestX;
    let lowestY;
    let scale;
    if (imgRatio <= winRatio) {
        scale = window.innerWidth / imgWidth;
        rightestX = leftestX + parseInt(window.innerWidth) * 5.9;
        lowestY = toppestY + parseInt(window.innerHeight) * scale * 5.7;
    }
    else {
        scale = window.innerHeight / imgHeight;
        rightestX = leftestX + parseInt(window.innerWidth) * scale * 5.9;
        lowestY = toppestY + parseInt(window.innerHeight) * 5.7;
    }
    return (leftestX + deltX <= 0 && rightestX + deltX >= window.innerWidth
        && toppestY + deltY <= 0 && lowestY + deltY >= window.innerHeight);
}

function moveByDrag(x, y){
    deltX = x - prevMousePos[0];
    deltY = y - prevMousePos[1];
    if (inTheBound(deltX, deltY)) {
        img.style.left = imgCoor[0] + deltX + 'px';
        img.style.top = imgCoor[1] + deltY + 'px';
        img.style.transition = 'all 0s';
        for (btn in dictCoor) {
            dictCoor[btn][0].style.left = dictCoor[btn][1] + deltX + 'px';
            dictCoor[btn][0].style.top = dictCoor[btn][2] + deltY + 'px';
            dictCoor[btn][0].style.transition = 'all 0s';
        }
    }
}

function moveByDragEnd(x, y){
    deltX = x - prevMousePos[0];
    deltY = y - prevMousePos[1];
    if (inTheBound(deltX, deltY)) {
        img.style.left = imgCoor[0] + deltX + 'px';
        img.style.top = imgCoor[1] + deltY + 'px';
        img.style.transition = 'all 0s';
        for (btn in dictCoor) {
            dictCoor[btn][1] += deltX;
            dictCoor[btn][2] += deltY;
            dictCoor[btn][0].style.left = dictCoor[btn][1] + 'px';
            dictCoor[btn][0].style.top =  dictCoor[btn][2] + 'px';
            dictCoor[btn][0].style.transition = 'all 0s';
        }
    }
}

let isDown = false;

window.addEventListener('mousedown', (e) => {
    e.preventDefault();
    if (drag) {
        isDown = true;
        prevCoorInput(e.clientX, e.clientY);
        document.body.style.cursor = 'grabbing';
    }
});

window.addEventListener('mouseup', (e) => {
    e.preventDefault();
    if (isDown) {
        moveByDragEnd(e.clientX, e.clientY);
        prevMousePos = [];
        imgCoor = [];
        isDown = false;
        document.body.style.cursor = 'grab';
    }
});

window.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (isDown) {
        moveByDrag(e.clientX, e.clientY);
        document.body.style.cursor = 'grabbing';
    }
});

const backs = document.querySelectorAll('.back-btn');
backs.forEach(function (back) {
    back.addEventListener('click', setInit);
})
