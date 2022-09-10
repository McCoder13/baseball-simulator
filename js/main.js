var ball = 0;
var strike = 0;
var out = 0;
var pitchCount = 0;

var runnerFirst = false;
var runnerSecond = false;
var runnerThird = false;

var homeScore = 0;
var awayScore = 0;

var inning = 1;
var halfInning = false; // false == Top -- true == bottom

function switchInning() {
    if (halfInning == false) {
        halfInning = true;
        document.getElementById("inning").innerHTML = inning;
        document.getElementById("halfInning").innerHTML = "Bottom ";
        console.log(halfInning);
        console.log(inning);
    } 
    else {
        halfInning = false;
        inning++;
        document.getElementById("inning").innerHTML = inning;
        document.getElementById("halfInning").innerHTML = "Top ";
    }
}

function checkRunners() {
    if (runnerFirst == true) {
        document.getElementById("firstBase").classList.add("onbase");
        document.getElementById("scoreboardFirst").classList.add("onbase");
    }
    if (runnerSecond == true) {
        document.getElementById("secondBase").classList.add("onbase");
        document.getElementById("scoreboardSecond").classList.add("onbase");
    }
    if (runnerThird == true) {
        document.getElementById("thirdBase").classList.add("onbase");
        document.getElementById("scoreboardThird").classList.add("onbase");
    }

    if (runnerFirst == false) {
        document.getElementById("firstBase").classList.remove("onbase");
        document.getElementById("scoreboardFirst").classList.remove("onbase");
    }
    if (runnerSecond == false) {
        document.getElementById("secondBase").classList.remove("onbase");
        document.getElementById("scoreboardSecond").classList.remove("onbase");
    }
    if (runnerThird == false) {
        document.getElementById("thirdBase").classList.remove("onbase");
        document.getElementById("scoreboardThird").classList.remove("onbase");
    }
}

function homerun() {
    if (halfInning == false) {
        awayScore++;
        if (runnerFirst == true) {
            awayScore++;
            runnerFirst = false;
        }
        if (runnerSecond == true) {
            awayScore++;
            runnerSecond = false;
        }
        if (runnerThird == true) {
            awayScore++;
            runnerThird = false;
        }
        document.getElementById("awayScore").innerHTML = awayScore;
        checkRunners();
    } 

    else if (halfInning == true) {
        homeScore++;
        if (runnerFirst == true) {
            homeScore++;
            runnerFirst = false;
        }
        if (runnerSecond == true) {
            homeScore++;
            runnerSecond = false;
        }
        if (runnerThird == true) {
            homeScore++;
            runnerThird = false;
        }
        document.getElementById("homeScore").innerHTML = homeScore;
        checkRunners();
    } 
}

function triple() {
    if (halfInning == false) {
        if (runnerFirst == true) {
            awayScore++;
            runnerFirst = false;
        }
        if (runnerSecond == true) {
            awayScore++;
            runnerSecond = false;
        }
        if (runnerThird == true) {
            awayScore++;
        }
        runnerThird = true;
        checkRunners();
        document.getElementById("awayScore").innerHTML = awayScore;
    } 

    if (halfInning == true) {
        if (runnerFirst == true) {
            homeScore++;
            runnerFirst = false;
        }
        if (runnerSecond == true) {
            homeScore++;
            runnerSecond = false;
        }
        if (runnerThird == true) {
            homeScore++;
        }
        runnerThird = true;
        checkRunners();
        document.getElementById("homeScore").innerHTML = homeScore;
    } 
}

function double() {
    if (halfInning == false) {
        if (runnerThird == true) {
            awayScore++;
            runnerThird = false;
        }
        if (runnerSecond == true) {
            awayScore++;
        }
        if (runnerFirst == true) {
            runnerThird = true;
            runnerFirst = false;
        }
        runnerSecond = true;
        checkRunners();
        document.getElementById("awayScore").innerHTML = awayScore;
    } 

    else if (halfInning == true) {
        if (runnerThird == true) {
            homeScore++;
            runnerThird = false;
        }
        if (runnerSecond == true) {
            homeScore++;
        }
        if (runnerFirst == true) {
            runnerThird = true;
            runnerFirst = false;
        }
        runnerSecond = true;
        checkRunners();
        document.getElementById("homeScore").innerHTML = homeScore;
    } 
}

function single() {
    if (halfInning == false) {
        if (runnerThird == true) {
            awayScore++;
            runnerThird = false;
        }
        if (runnerSecond == true) {
            runnerThird = true;
            runnerSecond = false;
        }
        if (runnerFirst == true) {
            runnerSecond = true;
        }
        runnerFirst = true;
        checkRunners();
        document.getElementById("awayScore").innerHTML = awayScore;
    } 

    else if (halfInning == true) {
        if (runnerThird == true) {
            homeScore++;
            runnerThird = false;
        }
        if (runnerSecond == true) {
            runnerThird = true;
            runnerSecond = false;
        }
        if (runnerFirst == true) {
            runnerSecond = true;
        }
        runnerFirst = true;
        checkRunners();
        document.getElementById("homeScore").innerHTML = homeScore;
    } 
}

function walk() {
    if (halfInning == false) {    
        if (runnerThird == true && runnerSecond == true && runnerFirst == true) {
            awayScore++;
        }
        if (runnerFirst == true && runnerSecond == true && runnerThird == false) {
            runnerThird = true;
        }
        if (runnerFirst == true && runnerSecond == false) {
            runnerSecond = true;
        }
        runnerFirst = true;
        checkRunners();
        document.getElementById("awayScore").innerHTML = awayScore;
    } 

    else if (halfInning == true) {    
        if (runnerThird == true && runnerSecond == true && runnerFirst == true) {
            homeScore++;
        }
        if (runnerFirst == true && runnerSecond == true && runnerThird == false) {
            runnerThird = true;
        }
        if (runnerFirst == true && runnerSecond == false) {
            runnerSecond = true;
        }
        runnerFirst = true;
        checkRunners();
        document.getElementById("awayScore").innerHTML = awayScore;
    } 
}

function resetCounters() {
    ball = 0;
    strike = 0;
    out = 0;
    runnerFirst = false;
    runnerSecond = false;
    runnerThird = false;
    console.log(out, strike, ball);
    document.getElementById("realball").innerHTML = ball;
    document.getElementById("strike").innerHTML = strike;
    document.getElementById("out").innerHTML = out;
    document.getElementById("pitchCount").innerHTML = pitchCount;
    checkRunners();
}

function resetGame() {
    ball = 0;
    strike = 0;
    out = 0;
    pitchCount = 0;
    runnerFirst = false;
    runnerSecond = false;
    runnerThird = false;
    homeScore = 0;
    awayScore = 0;
    inning = 1;
    halfInning = false;
    console.log(out, strike, ball);
    document.getElementById("realball").innerHTML = ball;
    document.getElementById("strike").innerHTML = strike;
    document.getElementById("out").innerHTML = out;
    document.getElementById("pitchCount").innerHTML = pitchCount;
    document.getElementById("halfInning").innerHTML = "Top ";
    document.getElementById("inning").innerHTML = inning;
    document.getElementById("awayScore").innerHTML = awayScore;
    document.getElementById("homeScore").innerHTML = homeScore;
    checkRunners();
}

function pitchaction(pitchType) {
    if (pitchType == "ball") {
        ball++;
        console.log(pitchType, ball);
        document.getElementById("realball").innerHTML = ball;

        if (ball == 4) {
            ball = 0;
            strike = 0;
            console.log(pitchType, ball);
            document.getElementById("realball").innerHTML = ball;
            document.getElementById("strike").innerHTML = strike;
            walk();
        }
    }
    
    if (pitchType == "foulball") {
        if (strike == 2) {
            console.log("Stays alive");
        }

        else {
            strike++;
            console.log(pitchType, strike);
            document.getElementById("strike").innerHTML = strike;
        }
    }
    
    if (pitchType == "strike") {
        strike++;
        console.log(pitchType, strike);
        document.getElementById("strike").innerHTML = strike;
        
        if (strike == 3) {
            out++;
            console.log(out);
            strike = 0;
            ball = 0;
            document.getElementById("realball").innerHTML = ball;
            document.getElementById("strike").innerHTML = strike;
            document.getElementById("out").innerHTML = out;

            if (out == 3) {
                resetCounters()
                switchInning()
            }
        }
    }

    if (pitchType == "contact") {
        let randomContact = ["bunt", "out", "out", "out", "out", "single", "single", "single", "out", "out", "double", "double", "out", "out", "homerun", "homerun", "out", "out", "triple"]

        //let testContact = ["single"]
        //let selectRandomContact = testContact[Math.floor(Math.random() * testContact.length)];

        let selectRandomContact = randomContact[Math.floor(Math.random() * randomContact.length)];

        setTimeout(function(){alert(selectRandomContact); }, 801);

        console.log(selectRandomContact);

        ball = 0;
        strike = 0;
        document.getElementById("realball").innerHTML = ball;
        document.getElementById("strike").innerHTML = strike;

        if (selectRandomContact == "out") {
            out++;
            document.getElementById("out").innerHTML = out;

            if (out == 3) {
                resetCounters()
                switchInning()
            }
        }
        else if (selectRandomContact == "homerun") {
            homerun();
        }
        else if (selectRandomContact == "triple") {
            triple();
        }
        else if (selectRandomContact == "double") {
            double();
        }
        else if (selectRandomContact == "single" || selectRandomContact == "bunt") {
            single();
        }
    }

    if (pitchType == "autoContact") {
        let randomContact = ["bunt", "out", "out", "out", "out", "single", "single", "single", "out", "out", "double", "double", "out", "out", "homerun", "homerun", "out", "out", "triple"]

        //let testContact = ["single"]
        //let selectRandomContact = testContact[Math.floor(Math.random() * testContact.length)];

        let selectRandomContact = randomContact[Math.floor(Math.random() * randomContact.length)];

        console.log(selectRandomContact);

        ball = 0;
        strike = 0;
        document.getElementById("realball").innerHTML = ball;
        document.getElementById("strike").innerHTML = strike;

        if (selectRandomContact == "out") {
            out++;
            document.getElementById("out").innerHTML = out;

            if (out == 3) {
                resetCounters()
                switchInning()
            }
        }
        else if (selectRandomContact == "homerun") {
            homerun();
        }
        else if (selectRandomContact == "triple") {
            triple();
        }
        else if (selectRandomContact == "double") {
            double();
        }
        else if (selectRandomContact == "single" || selectRandomContact == "bunt") {
            single();
        }
    }
}

function pitch() {
    checkRunners();

    // Pitch Animation
    let pitchElement = document.getElementById("ball");
    pitchElement.classList.add("pitch");

    // Delay 1 seconds before removing class from element
    setTimeout(function(){pitchElement.classList.remove("pitch"); }, 800);

    // Actions to choose from
    let randomAction = ["ball", "strike", "contact", "foulball", "ball"]

    // Select random action
    let selectRandomAction = randomAction[Math.floor(Math.random() * randomAction.length)];

    // Delay 1 seconds before displaying the action selection
    setTimeout(function(){alert(selectRandomAction); }, 800);

    pitchaction(selectRandomAction);

    pitchCount++;
    document.getElementById("pitchCount").innerHTML = pitchCount;
 }

 function autoSim() {
    let inningAmount = prompt("How many innings would you like simulated?", 9);

    let inningAmountConverted = Number(inningAmount);

    while (inning < inningAmountConverted + 1) {
        checkRunners();

        let pitchElement = document.getElementById("ball");
        pitchElement.classList.add("pitch");

        setTimeout(function(){pitchElement.classList.remove("pitch"); }, 700);

        let randomAction = ["ball", "strike", "autoContact", "foulball", "ball"]

        let selectRandomAction = randomAction[Math.floor(Math.random() * randomAction.length)];

        pitchaction(selectRandomAction);

        pitchCount++;
        document.getElementById("pitchCount").innerHTML = pitchCount;
    }
 }