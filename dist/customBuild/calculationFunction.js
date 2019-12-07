function getId(id){
    return document.getElementById(id)
}

function intervalTime(){
    counter.end = 120;
    counter.min = document.getElementById("cd-min");
    counter.sec = document.getElementById("cd-sec");
    
    if (counter.end > 0) {
        counter.ticker = setInterval(function(){
        
        counter.end--;
        if (counter.end <= 0) { 
            clearInterval(counter.ticker); 
            counter.end = 0;
        }
        var secs = counter.end;
        var mins  = Math.floor(secs / 60);
        secs -= mins * 60;

        counter.min.innerHTML = mins;
        counter.sec.innerHTML = secs;
        }, 1000);
    }
}
function timer(){
    intervalTime()

    if (calculatorBox.style.visibility === 'hidden') {
        calculatorBox.style.visibility = 'visible'
        startButton.style.visibility = 'hidden'
        timers.style.visibility = 'visible'
    } else {
        calculatorBox.style.visibility = 'hidden'
    }
    timesOut = setTimeout(function() { 
        alert("Timeout\nwaktu anda telah habis")
        window.location.reload() }, 120000)
    return timesOut
}


function layout(levels, moves, goals, results, num1, num2, num3, num4, num5, num6){
    level.innerHTML = "Level : " + levels
    move.innerHTML = "Move : " + moves
    goal.innerHTML = "Goal : " + goals
    tempMove = moves
    tempGoal = goals
    result.innerHTML = tempResult = results
    but1.innerHTML = but1.value = num1
    but2.innerHTML = but2.value = num2
    but3.innerHTML = but3.value = num3
    but4.innerHTML = but4.value = num4
    but5.innerHTML = but5.value = num5
    but6.innerHTML = but6.value = num6
}

function math(buts){
    if (buts[0] == "+"){
        tempResult += parseInt(buts[1])
    } else if (buts[0] == "-") {
        tempResult -= parseInt(buts[1])
    } else if (buts[0] == "*") {
        tempResult *= parseInt(buts[1])
    } else if (buts[0] == "/") {
        tempResult /= parseInt(buts[1])
    }
    tempMove -= 1
    move.innerHTML = "Move : " + tempMove
    result.innerHTML = tempResult
}

function chance (buts) {
    math(buts)
    console.log(tempMove)
    if (tempMove > 0){
        if(tempResult == tempGoal){
            if(tempMove != dataList[i][1])
            {
                alert("Mantap Sekali anda bisa menyelesaikan tantangan yang ada sebelum moves menyentuh 0")
            }

            i++

            if (i > dataList.length-1) {
                alert("Fabulous, anda telah menyelesaikan semua tantangan\nAnda dapat mengulanginya dengan cara menekan F5 saja")
                clearTimeout(timesOut)
                counter.end = 0
                clearInterval(counter.ticker)
            } else {
                layout(dataList[i][0], dataList[i][1], dataList[i][2], dataList[i][3], dataList[i][4], dataList[i][5], dataList[i][6], dataList[i][7], dataList[i][8], dataList[i][9])
            }
            
        }
    } else if (tempMove == 0) {
        if(tempResult == tempGoal){
            i++

            if (i > dataList.length-1) {
                alert("Fabulous, anda telah menyelesaikan semua tantangan\nAnda dapat mengulanginya dengan cara menekan F5 saja")
                clearTimeout(timesOut)
                counter.end = 0
                clearInterval(counter.ticker)
            } else {
                layout(dataList[i][0], dataList[i][1], dataList[i][2], dataList[i][3], dataList[i][4], dataList[i][5], dataList[i][6], dataList[i][7], dataList[i][8], dataList[i][9])
            }

        } else {
            let ans = confirm("Do you want to restart the calculation?")
            if(ans == true){
                layout(dataList[i][0], dataList[i][1], dataList[i][2], dataList[i][3], dataList[i][4], dataList[i][5], dataList[i][6], dataList[i][7], dataList[i][8], dataList[i][9])
            } else {
                alert("Just Go Home already")
                window.location.reload()
            }
        }
        
    }
    
}
var timesOut = 0
var timers = getId("timers")
var startButton = getId("start-button")
var calculatorBox =  getId("calculator-quiz")
var counter = {};
var tempMove = 0
var tempResult = 0
var tempGoal = 0
var level = getId("level")
var move = getId("div-move")
var goal = getId("div-goal")
var result = getId("result")
var but1 = getId("button1")
var but2 = getId("button2")
var but3 = getId("button3")
var but4 = getId("button4")
var but5 = getId("button5")
var but6 = getId("button6")

 //level, move, goal, tempResult, num1, num2, num3, num4, num5, num6

var dataList = [[1, 3, 12, 5, "+3", "-4", "+4", "+5", "+6", "-6"], [2, 2, 4, 5, "+2", "+4", "*5", "+5", "-6", "-9"], 
                [3, 4, 22, 5, "/2", "+4", "*5", "+5", "-6", "-3"], [4, 2, 4, 5, "/2", "+9", "*7", "+3", "-8", "-9"],
                [5, 2, 5, 4, "/2", "+9", "*7", "-5", "-8", "-9"]]
var i = 0
layout(dataList[i][0], dataList[i][1], dataList[i][2], dataList[i][3], dataList[i][4], dataList[i][5], dataList[i][6], dataList[i][7], dataList[i][8], dataList[i][9])
calculatorBox.style.visibility = 'hidden'
timers.style.visibility = 'hidden'