
var gNums = [];
var lvl = 4;

function init() {
    gNums = createTable(lvl);

}
function changeLvl(lvl) {
    createTable(lvl)
}

function createTable(lvl) {
    var nums = [];
    var elTable = document.querySelector('tbody');

    var strHtml = ``;

    nums = fillNums(lvl);
    nums = shuffleNums(lvl, nums);

    var counter = 0;

    strHtml += '\t<tr>'
    for (var i = 1; i <= lvl; i++) {
        strHtml += '<th>col ' + i + '</th>'
    }
    strHtml += '\t</tr>'

    for (let i = 0; i < lvl; i++) {
        strHtml += '\t<tr>'
        for (let j = 0; j < lvl; j++) {
            counter++
            strHtml += `<td class="cell-${i}-${j}" onclick="cellClicked(this,${i},${j})">${nums[counter]}</td>\n`
        }
        strHtml += '\t</tr>'

    }
    console.log(strHtml)
    elTable.innerHTML = strHtml
}

function cellClicked(elTD, posI, posJ) {
    console.log('elTD,posI,posJ', elTD, posI, posJ)
}

function fillNums(lvl) {
    var temp = lvl * lvl;
    var nums = [];
    for (var i = 0; i < temp; i++) {
        nums.push(i + 1);
    }
    return nums;
}

function shuffleNums(lvl, nums) {
    var res = [];
    temp = 1;

    while (temp <= (lvl * lvl)) {
        var rndIdx = getRandomInt(0, (nums.length - 1));
        res.push(nums[rndIdx]);
        nums.splice(rndIdx, 1);
        temp++;
    }
    console.log(res);

    return res;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;////The maximum is inclusive and the minimum is inclusive
}
