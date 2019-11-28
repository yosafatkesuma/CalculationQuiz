function getId(id){
    return document.getElementById(id)
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
            i++
            if (i > dataList.length-1) {
                alert("Fabulous, anda telah menyelesaikan semua tantangan\nAnda dapat mengulanginya dengan cara menekan F5 saja")
            } else {
                layout(dataList[i][0], dataList[i][1], dataList[i][2], dataList[i][3], dataList[i][4], dataList[i][5], dataList[i][6], dataList[i][7], dataList[i][8], dataList[i][9])
            }
        }
    } else if (tempMove == 0) {
        if(tempResult == tempGoal){
            i++
            if (i > dataList.length-1) {
                alert("Fabulous, anda telah menyelesaikan semua tantangan\nAnda dapat mengulanginya dengan cara menekan F5 saja")
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

var dataList = [[1, 3, 12, 5, "+3", "-4", "+4", "+5", "+6", "-6"], [2, 2, 4, 5, "+2", "+4", "*5", "+5", "-6", "-9"], [3, 2, 4, 5, "/2", "+9", "*7", "-5", "-8", "-9"]]
var i = 0
layout(dataList[i][0], dataList[i][1], dataList[i][2], dataList[i][3], dataList[i][4], dataList[i][5], dataList[i][6], dataList[i][7], dataList[i][8], dataList[i][9])
