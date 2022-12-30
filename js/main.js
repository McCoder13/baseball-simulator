var ball = 0;
var strike = 0;
var out = 0;

var runnerFirst = false;
var runnerSecond = false;
var runnerThird = false;

var homeScore = 0;
var awayScore = 0;

var inning = 1;
var halfInning = false; // false == Top -- true == bottom

//Team lineup arrays
var homePitcher = "Gonzales";
var homePitchCount = 0;
var homePlayerNumber = 0;
var homePlayers = ["Rodriguez", "France", "Haniger", "Suarez", "Raleigh", "Winker", "Crawford", "Haggery", "Toro"];

var awayPitcher = "Kershaw";
var awayPitchCount = 0;
var awayPlayerNumber = 0;
var awayPlayers = ["Betts", "Turner", "Freeman", "Smith", "Muncy", "Gallo", "Thompson", "Talyor", "Bellinger"];

function playerAddStatPA() {
    if (halfInning == false) {
        switch (awayPlayerNumber) {
            case 0:
                awayBatterPA0++;
                document.getElementById("away0PA").innerHTML = awayBatterPA0;
                break;
            case 1:
                awayBatterPA1++;
                document.getElementById("away1PA").innerHTML = awayBatterPA1;
                break;
            case 2:
                awayBatterPA2++;
                document.getElementById("away2PA").innerHTML = awayBatterPA2;
                break;
            case 3:
                awayBatterPA3++;
                document.getElementById("away3PA").innerHTML = awayBatterPA3;
                break;
            case 4:
                awayBatterPA4++;
                document.getElementById("away4PA").innerHTML = awayBatterPA4;
                break;
            case 5:
                awayBatterPA5++;
                document.getElementById("away5PA").innerHTML = awayBatterPA5;
                break;
            case 6:
                awayBatterPA6++;
                document.getElementById("away6PA").innerHTML = awayBatterPA6;
                break;
            case 7:
                awayBatterPA7++;
                document.getElementById("away7PA").innerHTML = awayBatterPA7;
                break;
            case 8:
                awayBatterPA8++;
                document.getElementById("away8PA").innerHTML = awayBatterPA8;
                break;
            default:
                break;
        }
        changeBatter();
    }
    else if (halfInning == true) {
        switch (homePlayerNumber) {
            case 0:
                homeBatterPA0++;
                document.getElementById("home0PA").innerHTML = homeBatterPA0;
                break;
            case 1:
                homeBatterPA1++;
                document.getElementById("home1PA").innerHTML = homeBatterPA1;
                break;
            case 2:
                homeBatterPA2++;
                document.getElementById("home2PA").innerHTML = homeBatterPA2;
                break;
            case 3:
                homeBatterPA3++;
                document.getElementById("home3PA").innerHTML = homeBatterPA3;
                break;
            case 4:
                homeBatterPA4++;
                document.getElementById("home4PA").innerHTML = homeBatterPA4;
                break;
            case 5:
                homeBatterPA5++;
                document.getElementById("home5PA").innerHTML = homeBatterPA5;
                break;
            case 6:
                homeBatterPA6++;
                document.getElementById("home6PA").innerHTML = homeBatterPA6;
                break;
            case 7:
                homeBatterPA7++;
                document.getElementById("home7PA").innerHTML = homeBatterPA7;
                break;
            case 8:
                homeBatterPA8++;
                document.getElementById("home8PA").innerHTML = homeBatterPA8;
                break;
            default:
                break;
        }
        changeBatter();
    }
}

function playerAddStatAB() {
    if (halfInning == false) {
        switch (awayPlayerNumber) {
            case 0:
                awayBatterAB0++;
                document.getElementById("away0AB").innerHTML = awayBatterAB0;
                break;
            case 1:
                awayBatterAB1++;
                document.getElementById("away1AB").innerHTML = awayBatterAB1;
                break;
            case 2:
                awayBatterAB2++;
                document.getElementById("away2AB").innerHTML = awayBatterAB2;
                break;
            case 3:
                awayBatterAB3++;
                document.getElementById("away3AB").innerHTML = awayBatterAB3;
                break;
            case 4:
                awayBatterAB4++;
                document.getElementById("away4AB").innerHTML = awayBatterAB4;
                break;
            case 5:
                awayBatterAB5++;
                document.getElementById("away5AB").innerHTML = awayBatterAB5;
                break;
            case 6:
                awayBatterAB6++;
                document.getElementById("away6AB").innerHTML = awayBatterAB6;
                break;
            case 7:
                awayBatterAB7++;
                document.getElementById("away7AB").innerHTML = awayBatterAB7;
                break;
            case 8:
                awayBatterAB8++;
                document.getElementById("away8AB").innerHTML = awayBatterAB8;
                break;
            default:
                break;
        }
    }
    else if (halfInning == true) {
        switch (homePlayerNumber) {
            case 0:
                homeBatterAB0++;
                document.getElementById("home0AB").innerHTML = homeBatterAB0;
                break;
            case 1:
                homeBatterAB1++;
                document.getElementById("home1AB").innerHTML = homeBatterAB1;
                break;
            case 2:
                homeBatterAB2++;
                document.getElementById("home2AB").innerHTML = homeBatterAB2;
                break;
            case 3:
                homeBatterAB3++;
                document.getElementById("home3AB").innerHTML = homeBatterAB3;
                break;
            case 4:
                homeBatterAB4++;
                document.getElementById("home4AB").innerHTML = homeBatterAB4;
                break;
            case 5:
                homeBatterAB5++;
                document.getElementById("home5AB").innerHTML = homeBatterAB5;
                break;
            case 6:
                homeBatterAB6++;
                document.getElementById("home6AB").innerHTML = homeBatterAB6;
                break;
            case 7:
                homeBatterAB7++;
                document.getElementById("home7AB").innerHTML = homeBatterAB7;
                break;
            case 8:
                homeBatterAB8++;
                document.getElementById("home8AB").innerHTML = homeBatterAB8;
                break;
            default:
                break;
        }
    }
}

function playerAddStatH() {
    if (halfInning == false) {
        switch (awayPlayerNumber) {
            case 0:
                awayBatterH0++;
                document.getElementById("away0H").innerHTML = awayBatterH0;
                //let awayBatterAVG0 = awayBatterH0
                break;
            case 1:
                awayBatterH1++;
                document.getElementById("away1H").innerHTML = awayBatterH1;
                break;
            case 2:
                awayBatterH2++;
                document.getElementById("away2H").innerHTML = awayBatterH2;
                break;
            case 3:
                awayBatterH3++;
                document.getElementById("away3H").innerHTML = awayBatterH3;
                break;
            case 4:
                awayBatterH4++;
                document.getElementById("away4H").innerHTML = awayBatterH4;
                break;
            case 5:
                awayBatterH5++;
                document.getElementById("away5H").innerHTML = awayBatterH5;
                break;
            case 6:
                awayBatterH6++;
                document.getElementById("away6H").innerHTML = awayBatterH6;
                break;
            case 7:
                awayBatterH7++;
                document.getElementById("away7H").innerHTML = awayBatterH7;
                break;
            case 8:
                awayBatterH8++;
                document.getElementById("away8H").innerHTML = awayBatterH8;
                break;
            default:
                break;
        }
    }
    else if (halfInning == true) {
        switch (homePlayerNumber) {
            case 0:
                homeBatterH0++;
                document.getElementById("home0H").innerHTML = homeBatterH0;
                break;
            case 1:
                homeBatterH1++;
                document.getElementById("home1H").innerHTML = homeBatterH1;
                break;
            case 2:
                homeBatterH2++;
                document.getElementById("home2H").innerHTML = homeBatterH2;
                break;
            case 3:
                homeBatterH3++;
                document.getElementById("home3H").innerHTML = homeBatterH3;
                break;
            case 4:
                homeBatterH4++;
                document.getElementById("home4H").innerHTML = homeBatterH4;
                break;
            case 5:
                homeBatterH5++;
                document.getElementById("home5H").innerHTML = homeBatterH5;
                break;
            case 6:
                homeBatterH6++;
                document.getElementById("home6H").innerHTML = homeBatterH6;
                break;
            case 7:
                homeBatterH7++;
                document.getElementById("home7H").innerHTML = homeBatterH7;
                break;
            case 8:
                homeBatterH8++;
                document.getElementById("home8H").innerHTML = homeBatterH8;
                break;
            default:
                break;
        }
    }
}

function playerAddStatRBI() {
    if (halfInning == false) {
        switch (awayPlayerNumber) {
            case 0:
                awayBatterRBI0++;
                document.getElementById("away0RBI").innerHTML = awayBatterRBI0;
                break;
            case 1:
                awayBatterRBI1++;
                document.getElementById("away1RBI").innerHTML = awayBatterRBI1;
                break;
            case 2:
                awayBatterRBI2++;
                document.getElementById("away2RBI").innerHTML = awayBatterRBI2;
                break;
            case 3:
                awayBatterRBI3++;
                document.getElementById("away3RBI").innerHTML = awayBatterRBI3;
                break;
            case 4:
                awayBatterRBI4++;
                document.getElementById("away4RBI").innerHTML = awayBatterRBI4;
                break;
            case 5:
                awayBatterRBI5++;
                document.getElementById("away5RBI").innerHTML = awayBatterRBI5;
                break;
            case 6:
                awayBatterRBI6++;
                document.getElementById("away6RBI").innerHTML = awayBatterRBI6;
                break;
            case 7:
                awayBatterRBI7++;
                document.getElementById("away7RBI").innerHTML = awayBatterRBI7;
                break;
            case 8:
                awayBatterRBI8++;
                document.getElementById("away8RBI").innerHTML = awayBatterRBI8;
                break;
            default:
                break;
        }
    }
    else if (halfInning == true) {
        switch (homePlayerNumber) {
            case 0:
                homeBatterRBI0++;
                document.getElementById("home0RBI").innerHTML = homeBatterRBI0;
                break;
            case 1:
                homeBatterRBI1++;
                document.getElementById("home1RBI").innerHTML = homeBatterRBI1;
                break;
            case 2:
                homeBatterRBI2++;
                document.getElementById("home2RBI").innerHTML = homeBatterRBI2;
                break;
            case 3:
                homeBatterRBI3++;
                document.getElementById("home3RBI").innerHTML = homeBatterRBI3;
                break;
            case 4:
                homeBatterRBI4++;
                document.getElementById("home4RBI").innerHTML = homeBatterRBI4;
                break;
            case 5:
                homeBatterRBI5++;
                document.getElementById("home5RBI").innerHTML = homeBatterRBI5;
                break;
            case 6:
                homeBatterRBI6++;
                document.getElementById("home6RBI").innerHTML = homeBatterRBI6;
                break;
            case 7:
                homeBatterRBI7++;
                document.getElementById("home7RBI").innerHTML = homeBatterRBI7;
                break;
            case 8:
                homeBatterRBI8++;
                document.getElementById("home8RBI").innerHTML = homeBatterRBI8;
                break;
            default:
                break;
        }
    }
}

function playerAddStatBB() {
    if (halfInning == false) {
        switch (awayPlayerNumber) {
            case 0:
                awayBatterBB0++;
                document.getElementById("away0BB").innerHTML = awayBatterBB0;
                break;
            case 1:
                awayBatterBB1++;
                document.getElementById("away1BB").innerHTML = awayBatterBB1;
                break;
            case 2:
                awayBatterBB2++;
                document.getElementById("away2BB").innerHTML = awayBatterBB2;
                break;
            case 3:
                awayBatterBB3++;
                document.getElementById("away3BB").innerHTML = awayBatterBB3;
                break;
            case 4:
                awayBatterBB4++;
                document.getElementById("away4BB").innerHTML = awayBatterBB4;
                break;
            case 5:
                awayBatterBB5++;
                document.getElementById("away5BB").innerHTML = awayBatterBB5;
                break;
            case 6:
                awayBatterBB6++;
                document.getElementById("away6BB").innerHTML = awayBatterBB6;
                break;
            case 7:
                awayBatterBB7++;
                document.getElementById("away7BB").innerHTML = awayBatterBB7;
                break;
            case 8:
                awayBatterBB8++;
                document.getElementById("away8BB").innerHTML = awayBatterBB8;
                break;
            default:
                break;
        }
    }
    else if (halfInning == true) {
        switch (homePlayerNumber) {
            case 0:
                homeBatterBB0++;
                document.getElementById("home0BB").innerHTML = homeBatterBB0;
                break;
            case 1:
                homeBatterBB1++;
                document.getElementById("home1BB").innerHTML = homeBatterBB1;
                break;
            case 2:
                homeBatterBB2++;
                document.getElementById("home2BB").innerHTML = homeBatterBB2;
                break;
            case 3:
                homeBatterBB3++;
                document.getElementById("home3BB").innerHTML = homeBatterBB3;
                break;
            case 4:
                homeBatterBB4++;
                document.getElementById("home4BB").innerHTML = homeBatterBB4;
                break;
            case 5:
                homeBatterBB5++;
                document.getElementById("home5BB").innerHTML = homeBatterBB5;
                break;
            case 6:
                homeBatterBB6++;
                document.getElementById("home6BB").innerHTML = homeBatterBB6;
                break;
            case 7:
                homeBatterBB7++;
                document.getElementById("home7BB").innerHTML = homeBatterBB7;
                break;
            case 8:
                homeBatterBB8++;
                document.getElementById("home8BB").innerHTML = homeBatterBB8;
                break;
            default:
                break;
        }
    }
}

function playerAddStatSO() {
    if (halfInning == false) {
        switch (awayPlayerNumber) {
            case 0:
                awayBatterSO0++;
                document.getElementById("away0SO").innerHTML = awayBatterSO0;
                break;
            case 1:
                awayBatterSO1++;
                document.getElementById("away1SO").innerHTML = awayBatterSO1;
                break;
            case 2:
                awayBatterSO2++;
                document.getElementById("away2SO").innerHTML = awayBatterSO2;
                break;
            case 3:
                awayBatterSO3++;
                document.getElementById("away3SO").innerHTML = awayBatterSO3;
                break;
            case 4:
                awayBatterSO4++;
                document.getElementById("away4SO").innerHTML = awayBatterSO4;
                break;
            case 5:
                awayBatterSO5++;
                document.getElementById("away5SO").innerHTML = awayBatterSO5;
                break;
            case 6:
                awayBatterSO6++;
                document.getElementById("away6SO").innerHTML = awayBatterSO6;
                break;
            case 7:
                awayBatterSO7++;
                document.getElementById("away7SO").innerHTML = awayBatterSO7;
                break;
            case 8:
                awayBatterSO8++;
                document.getElementById("away8SO").innerHTML = awayBatterSO8;
                break;
            default:
                break;
        }
    }
    else if (halfInning == true) {
        switch (homePlayerNumber) {
            case 0:
                homeBatterSO0++;
                document.getElementById("home0SO").innerHTML = homeBatterSO0;
                break;
            case 1:
                homeBatterSO1++;
                document.getElementById("home1SO").innerHTML = homeBatterSO1;
                break;
            case 2:
                homeBatterSO2++;
                document.getElementById("home2SO").innerHTML = homeBatterSO2;
                break;
            case 3:
                homeBatterSO3++;
                document.getElementById("home3SO").innerHTML = homeBatterSO3;
                break;
            case 4:
                homeBatterSO4++;
                document.getElementById("home4SO").innerHTML = homeBatterSO4;
                break;
            case 5:
                homeBatterSO5++;
                document.getElementById("home5SO").innerHTML = homeBatterSO5;
                break;
            case 6:
                homeBatterSO6++;
                document.getElementById("home6SO").innerHTML = homeBatterSO6;
                break;
            case 7:
                homeBatterSO7++;
                document.getElementById("home7SO").innerHTML = homeBatterSO7;
                break;
            case 8:
                homeBatterSO8++;
                document.getElementById("home8SO").innerHTML = homeBatterSO8;
                break;
            default:
                break;
        }
    }
}

function getBatterName() {
    if (halfInning == false) {
        document.getElementById("batterName").innerHTML = awayPlayers[0];
    }
    else if (halfInning == true) {
        document.getElementById("batterName").innerHTML = homePlayers[0];
    }
}

function changeBatter() {
    if (halfInning == false) {
        awayPlayerNumber++;
        if (awayPlayerNumber == 9) {
            awayPlayerNumber = 0;
            document.getElementById("batterName").innerHTML = awayPlayers[awayPlayerNumber];
        }
        else {
            document.getElementById("batterName").innerHTML = awayPlayers[awayPlayerNumber];
        }
    }
    if (halfInning == true) {
        homePlayerNumber++;
        if (homePlayerNumber == 9) {
            homePlayerNumber = 0;
            document.getElementById("batterName").innerHTML = homePlayers[homePlayerNumber];
        }
        else {
            document.getElementById("batterName").innerHTML = homePlayers[homePlayerNumber];
        }
    }
}

function getPitcherName() {
    if (halfInning == false) {
        document.getElementById("pitcherName").innerHTML = homePitcher;
        document.getElementById("mobile-pitcherName").innerHTML = homePitcher;
    }
    if (halfInning == true) {
        document.getElementById("pitcherName").innerHTML = awayPitcher;
        document.getElementById("mobile-pitcherName").innerHTML = awayPitcher;
    }
}

function getPitchCount() {
    if (halfInning == false) {
        homePitchCount++;
        document.getElementById("pitchCount").innerHTML = homePitchCount;
        document.getElementById("mobile-pitchCount").innerHTML = homePitchCount;
    }
    if (halfInning == true) {
        awayPitchCount++;
        document.getElementById("pitchCount").innerHTML = awayPitchCount;
        document.getElementById("mobile-pitchCount").innerHTML = awayPitchCount;
    }
}

function switchInning() {
    if (halfInning == false) {
        halfInning = true;
        document.getElementById("halfInning").innerHTML = "Bottom ";
        document.getElementById("mobile-halfInning").innerHTML = "Bottom ";
        document.getElementById("batterName").innerHTML = homePlayers[homePlayerNumber];
        document.getElementById("mobile-batterName").innerHTML = homePlayers[homePlayerNumber];
        console.log(halfInning);
        console.log(inning);
    } 
    else {
        halfInning = false;
        inning++;
        document.getElementById("inning").innerHTML = inning;
        document.getElementById("mobile-inning").innerHTML = inning;
        document.getElementById("halfInning").innerHTML = "Top ";
        document.getElementById("mobile-halfInning").innerHTML = "Top ";
        document.getElementById("batterName").innerHTML = awayPlayers[awayPlayerNumber];
        document.getElementById("mobile-batterName").innerHTML = awayPlayers[awayPlayerNumber];
    }
    getPitcherName();
}

function checkRunners() {
    if (runnerFirst == true) {
        document.getElementById("firstBase").classList.add("onbase");
        document.getElementById("scoreboardFirst").classList.add("onbase");
        document.getElementById("mobile-scoreboardFirst").classList.add("mobile-onbase");
    }
    if (runnerSecond == true) {
        document.getElementById("secondBase").classList.add("onbase");
        document.getElementById("scoreboardSecond").classList.add("onbase");
        document.getElementById("mobile-scoreboardSecond").classList.add("mobile-onbase");
    }
    if (runnerThird == true) {
        document.getElementById("thirdBase").classList.add("onbase");
        document.getElementById("scoreboardThird").classList.add("onbase");
        document.getElementById("mobile-scoreboardThird").classList.add("mobile-onbase");
    }

    if (runnerFirst == false) {
        document.getElementById("firstBase").classList.remove("onbase");
        document.getElementById("scoreboardFirst").classList.remove("onbase");
        document.getElementById("mobile-scoreboardFirst").classList.remove("mobile-onbase");
    }
    if (runnerSecond == false) {
        document.getElementById("secondBase").classList.remove("onbase");
        document.getElementById("scoreboardSecond").classList.remove("onbase");
        document.getElementById("mobile-scoreboardSecond").classList.remove("mobile-onbase");
    }
    if (runnerThird == false) {
        document.getElementById("thirdBase").classList.remove("onbase");
        document.getElementById("scoreboardThird").classList.remove("onbase");
        document.getElementById("mobile-scoreboardThird").classList.remove("mobile-onbase");
    }
}

function homerun() {
    if (halfInning == false) {
        awayScore++;
        playerAddStatRBI();
        if (runnerFirst == true) {
            awayScore++;
            playerAddStatRBI();
            runnerFirst = false;
        }
        if (runnerSecond == true) {
            awayScore++;
            playerAddStatRBI();
            runnerSecond = false;
        }
        if (runnerThird == true) {
            awayScore++;
            playerAddStatRBI();
            runnerThird = false;
        }
        document.getElementById("awayScore").innerHTML = awayScore;
        document.getElementById("mobile-awayScore").innerHTML = awayScore;
        checkRunners();
    } 

    else if (halfInning == true) {
        homeScore++;
        playerAddStatRBI();
        if (runnerFirst == true) {
            homeScore++;
            playerAddStatRBI();
            runnerFirst = false;
        }
        if (runnerSecond == true) {
            homeScore++;
            playerAddStatRBI();
            runnerSecond = false;
        }
        if (runnerThird == true) {
            homeScore++;
            playerAddStatRBI();
            runnerThird = false;
        }
        document.getElementById("homeScore").innerHTML = homeScore;
        document.getElementById("mobile-homeScore").innerHTML = homeScore;
        checkRunners();
    } 
}

function triple() {
    if (halfInning == false) {
        if (runnerFirst == true) {
            awayScore++;
            playerAddStatRBI();
            runnerFirst = false;
        }
        if (runnerSecond == true) {
            awayScore++;
            playerAddStatRBI();
            runnerSecond = false;
        }
        if (runnerThird == true) {
            awayScore++;
            playerAddStatRBI();
        }
        runnerThird = true;
        checkRunners();
        document.getElementById("awayScore").innerHTML = awayScore;
        document.getElementById("mobile-awayScore").innerHTML = awayScore;
    } 

    if (halfInning == true) {
        if (runnerFirst == true) {
            homeScore++;
            playerAddStatRBI();
            runnerFirst = false;
        }
        if (runnerSecond == true) {
            homeScore++;
            playerAddStatRBI();
            runnerSecond = false;
        }
        if (runnerThird == true) {
            homeScore++;
            playerAddStatRBI();
        }
        runnerThird = true;
        checkRunners();
        document.getElementById("homeScore").innerHTML = homeScore;
        document.getElementById("mobile-homeScore").innerHTML = homeScore;
    } 
}

function double() {
    if (halfInning == false) {
        if (runnerThird == true) {
            awayScore++;
            playerAddStatRBI();
            runnerThird = false;
        }
        if (runnerSecond == true) {
            awayScore++;
            playerAddStatRBI();
        }
        if (runnerFirst == true) {
            runnerThird = true;
            runnerFirst = false;
        }
        runnerSecond = true;
        checkRunners();
        document.getElementById("awayScore").innerHTML = awayScore;
        document.getElementById("mobile-awayScore").innerHTML = awayScore;
    } 

    else if (halfInning == true) {
        if (runnerThird == true) {
            homeScore++;
            playerAddStatRBI();
            runnerThird = false;
        }
        if (runnerSecond == true) {
            homeScore++;
            playerAddStatRBI();
        }
        if (runnerFirst == true) {
            runnerThird = true;
            runnerFirst = false;
        }
        runnerSecond = true;
        checkRunners();
        document.getElementById("homeScore").innerHTML = homeScore;
        document.getElementById("mobile-homeScore").innerHTML = homeScore;
    } 
}

function single() {
    if (halfInning == false) {
        if (runnerThird == true) {
            awayScore++;
            playerAddStatRBI();
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
        document.getElementById("mobile-awayScore").innerHTML = awayScore;
    } 

    else if (halfInning == true) {
        if (runnerThird == true) {
            homeScore++;
            playerAddStatRBI();
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
        document.getElementById("mobile-homeScore").innerHTML = homeScore;
    } 
}

function walk() {
    if (halfInning == false) {    
        if (runnerThird == true && runnerSecond == true && runnerFirst == true) {
            awayScore++;
            playerAddStatRBI();
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
        document.getElementById("mobile-awayScore").innerHTML = awayScore;
    } 

    else if (halfInning == true) {    
        if (runnerThird == true && runnerSecond == true && runnerFirst == true) {
            homeScore++;
            playerAddStatRBI();
        }
        if (runnerFirst == true && runnerSecond == true && runnerThird == false) {
            runnerThird = true;
        }
        if (runnerFirst == true && runnerSecond == false) {
            runnerSecond = true;
        }
        runnerFirst = true;
        checkRunners();
        document.getElementById("homeScore").innerHTML = homeScore;
        document.getElementById("mobile-homeScore").innerHTML = homeScore;
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
    checkRunners();
    getPitcherName();
}

function resetGame() {
    ball = 0;
    strike = 0;
    out = 0;
    homePitchCount = 0;
    awayPitchCount = 0;
    runnerFirst = false;
    runnerSecond = false;
    runnerThird = false;
    homeScore = 0;
    awayScore = 0;
    homePlayerNumber = 0;
    awayPlayerNumber = 0;
    inning = 1;
    halfInning = false;
    console.log(out, strike, ball);
    getPitcherName();
    getBatterName();
    document.getElementById("batterName").innerHTML = "Pitch to start";
    document.getElementById("pitcherName").innerHTML = "Pitch to start";
    document.getElementById("realball").innerHTML = ball;
    document.getElementById("strike").innerHTML = strike;
    document.getElementById("out").innerHTML = out;
    document.getElementById("pitchCount").innerHTML = 0;
    document.getElementById("halfInning").innerHTML = "Top ";
    document.getElementById("inning").innerHTML = inning;
    document.getElementById("awayScore").innerHTML = awayScore;
    document.getElementById("homeScore").innerHTML = homeScore;
    checkRunners();
    awayBatterPA0 = 0;
    awayBatterAB0 = 0;
    awayBatterH0 = 0;
    awayBatterRBI0 = 0;
    awayBatterBB0 = 0;
    awayBatterSO0 = 0;
   
   // 2.
    awayBatterPA1 = 0;
    awayBatterAB1 = 0;
    awayBatterH1 = 0;
    awayBatterRBI1 = 0;
    awayBatterBB1 = 0;
    awayBatterSO1 = 0;
   
   // 3.
    awayBatterPA2 = 0;
    awayBatterAB2 = 0;
    awayBatterH2 = 0;
    awayBatterRBI2 = 0;
    awayBatterBB2 = 0;
    awayBatterSO2 = 0;
   
   // 4.
    awayBatterPA3 = 0;
    awayBatterAB3 = 0;
    awayBatterH3 = 0;
    awayBatterRBI3 = 0;
    awayBatterBB3 = 0;
    awayBatterSO3 = 0;
   
   // 5.
    awayBatterPA4 = 0;
    awayBatterAB4 = 0;
    awayBatterH4 = 0;
    awayBatterRBI4 = 0;
    awayBatterBB4 = 0;
    awayBatterSO4 = 0;
   
   // 6.
    awayBatterPA5 = 0;
    awayBatterAB5 = 0;
    awayBatterH5 = 0;
    awayBatterRBI5 = 0;
    awayBatterBB5 = 0;
    awayBatterSO5 = 0;
   
   // 7.
    awayBatterPA6 = 0;
    awayBatterAB6 = 0;
    awayBatterH6 = 0;
    awayBatterRBI6 = 0;
    awayBatterBB6 = 0;
    awayBatterSO6 = 0;
   
   // 8.
    awayBatterPA7 = 0;
    awayBatterAB7 = 0;
    awayBatterH7 = 0;
    awayBatterRBI7 = 0;
    awayBatterBB7 = 0;
    awayBatterSO7 = 0;
   
   // 9.
    awayBatterPA8 = 0;
    awayBatterAB8 = 0;
    awayBatterH8 = 0;
    awayBatterRBI8 = 0;
    awayBatterBB8 = 0;
    awayBatterSO8 = 0;
   
   //---------------------------Home Players-------------------------//
   // 1. Leadoff
    homeBatterPA0 = 0;
    homeBatterAB0 = 0;
    homeBatterH0 = 0;
    homeBatterRBI0 = 0;
    homeBatterBB0 = 0;
    homeBatterSO0 = 0;
   
   // 2.
    homeBatterPA1 = 0;
    homeBatterAB1 = 0;
    homeBatterH1 = 0;
    homeBatterRBI1 = 0;
    homeBatterBB1 = 0;
    homeBatterSO1 = 0;
   
   // 3.
    homeBatterPA2 = 0;
    homeBatterAB2 = 0;
    homeBatterH2 = 0;
    homeBatterRBI2 = 0;
    homeBatterBB2 = 0;
    homeBatterSO2 = 0;
   
   // 4.
    homeBatterPA3 = 0;
    homeBatterAB3 = 0;
    homeBatterH3 = 0;
    homeBatterRBI3 = 0;
    homeBatterBB3 = 0;
    homeBatterSO3 = 0;
   
   // 5.
    homeBatterPA4 = 0;
    homeBatterAB4 = 0;
    homeBatterH4 = 0;
    homeBatterRBI4 = 0;
    homeBatterBB4 = 0;
    homeBatterSO4 = 0;
   
   // 6.
    homeBatterPA5 = 0;
    homeBatterAB5 = 0;
    homeBatterH5 = 0;
    homeBatterRBI5 = 0;
    homeBatterBB5 = 0;
    homeBatterSO5 = 0;
   
   // 7.
    homeBatterPA6 = 0;
    homeBatterAB6 = 0;
    homeBatterH6 = 0;
    homeBatterRBI6 = 0;
    homeBatterBB6 = 0;
    homeBatterSO6 = 0;
   
   // 8.
    homeBatterPA7 = 0;
    homeBatterAB7 = 0;
    homeBatterH7 = 0;
    homeBatterRBI7 = 0;
    homeBatterBB7 = 0;
    homeBatterSO7 = 0;
   
   // 9.
    homeBatterPA8 = 0;
    homeBatterAB8 = 0;
    homeBatterH8 = 0;
    homeBatterRBI8 = 0;
    homeBatterBB8 = 0;
    homeBatterSO8 = 0;
}

function pitchaction(pitchType) {
    if (pitchType == "ball") {
        ball++;
        console.log(pitchType, ball);
        document.getElementById("realball").innerHTML = ball;
        document.getElementById("mobile-realball").innerHTML = ball;

        if (ball == 4) {
            ball = 0;
            strike = 0;
            console.log(pitchType, ball);
            document.getElementById("realball").innerHTML = ball;
            document.getElementById("mobile-realball").innerHTML = ball;
            document.getElementById("strike").innerHTML = strike;
            document.getElementById("mobile-strike").innerHTML = strike;
            walk();
            playerAddStatBB();
            playerAddStatPA();
        }
    }
    
    else if (pitchType == "foulball") {
        if (strike == 2) {
            console.log("Stays alive");
        }

        else {
            strike++;
            console.log(pitchType, strike);
            document.getElementById("strike").innerHTML = strike;
            document.getElementById("mobile-strike").innerHTML = strike;
        }
    }
    
    else if (pitchType == "strike") {
        strike++;
        console.log(pitchType, strike);
        document.getElementById("strike").innerHTML = strike;
        document.getElementById("mobile-strike").innerHTML = strike;
        
        if (strike == 3) {
            out++;
            console.log(out);
            strike = 0;
            ball = 0;
            document.getElementById("realball").innerHTML = ball;
            document.getElementById("mobile-realball").innerHTML = ball;
            document.getElementById("strike").innerHTML = strike;
            document.getElementById("mobile-strike").innerHTML = strike;
            document.getElementById("out").innerHTML = out;
            document.getElementById("mobile-out").innerHTML = out;
            playerAddStatAB();
            playerAddStatSO();
            playerAddStatPA();

            if (out == 3) {
                resetCounters();
                switchInning();
            }
        }
    }

    else if (pitchType == "contact") {
        let randomContact = ["out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "out", "single", "single", "single", "single", "double", "double","double","double", "homerun", "homerun", "homerun", "triple"]

        //let testContact = ["single"]
        //let selectRandomContact = testContact[Math.floor(Math.random() * testContact.length)];

        let selectRandomContact = randomContact[Math.floor(Math.random() * randomContact.length)];

        setTimeout(function(){alert(selectRandomContact); }, 001);

        console.log(selectRandomContact);

        if (selectRandomContact == "out") {
            out++;
            document.getElementById("out").innerHTML = out;
            document.getElementById("mobile-out").innerHTML = out;

            if (out == 3) {
                resetCounters();
                switchInning();
            }
        }
        else if (selectRandomContact == "homerun") {
            homerun();
            playerAddStatH();
        }
        else if (selectRandomContact == "triple") {
            triple();
            playerAddStatH();
        }
        else if (selectRandomContact == "double") {
            double();
            playerAddStatH();
        }
        else if (selectRandomContact == "single" || selectRandomContact == "bunt") {
            single();
            playerAddStatH();
        }

        ball = 0;
        strike = 0;
        document.getElementById("realball").innerHTML = ball;
        document.getElementById("mobile-realball").innerHTML = ball;
        document.getElementById("strike").innerHTML = strike;
        document.getElementById("mobile-strike").innerHTML = strike;
        playerAddStatAB();
        playerAddStatPA();
    }

    else if (pitchType == "autoContact") {
        let randomContact = ["bunt", "out", "out", "out", "out", "single", "single", "single", "out", "out", "double", "double", "out", "out", "homerun", "homerun", "out", "out", "triple"]

        //let testContact = ["single"]
        //let selectRandomContact = testContact[Math.floor(Math.random() * testContact.length)];

        let selectRandomContact = randomContact[Math.floor(Math.random() * randomContact.length)];

        console.log(selectRandomContact);

        if (selectRandomContact == "out") {
            out++;
            document.getElementById("out").innerHTML = out;
            document.getElementById("mobile-out").innerHTML = out;

            if (out == 3) {
                resetCounters();
                switchInning();
            }
        }
        else if (selectRandomContact == "homerun") {
            homerun();
            playerAddStatH();
        }
        else if (selectRandomContact == "triple") {
            triple();
            playerAddStatH();
        }
        else if (selectRandomContact == "double") {
            double();
            playerAddStatH();
        }
        else if (selectRandomContact == "single" || selectRandomContact == "bunt") {
            single();
            playerAddStatH();
        }

        ball = 0;
        strike = 0;
        document.getElementById("realball").innerHTML = ball;
        document.getElementById("mobile-realball").innerHTML = ball;
        document.getElementById("strike").innerHTML = strike;
        document.getElementById("mobile-strike").innerHTML = strike;
        playerAddStatAB();
        playerAddStatPA();
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

    // Display leadoff batter name
    if (homePitchCount == 0) {
        document.getElementById("batterName").innerHTML = awayPlayers[awayPlayerNumber];
    }

    getPitchCount();
    getPitcherName();
    switchTabs();
 }

function mobilePitch() {
    checkRunners();

    let randomAction = ["ball", "strike", "contact", "foulball", "ball"]

    let selectRandomAction = randomAction[Math.floor(Math.random() * randomAction.length)];

    alert(selectRandomAction);

    pitchaction(selectRandomAction);

    // Display leadoff batter name
    if (homePitchCount == 0) {
        document.getElementById("mobile-batterName").innerHTML = awayPlayers[awayPlayerNumber];
    }

    getPitchCount();
    getPitcherName();
    switchTabs();
 }

 function autoSim() {
    let inningAmount = prompt("Put the inning you would like to simulate up to. WARNING: Anything more than 10,000 innings may crash your device.", 9);

    // Convert user input to an integer
    let inningAmountConverted = Number(inningAmount);

    while (inning < inningAmountConverted + 1) {
        checkRunners();

        let pitchElement = document.getElementById("ball");
        pitchElement.classList.add("pitch");

        setTimeout(function(){pitchElement.classList.remove("pitch"); }, 700);

        let randomAction = ["ball", "strike", "autoContact", "foulball", "ball"]

        let selectRandomAction = randomAction[Math.floor(Math.random() * randomAction.length)];

        pitchaction(selectRandomAction);

        getPitchCount();
    }
 }

 ///////////////////////////////////////////////////////////////////
 //===============================================================//
 ///////////////////////////////////////////////////////////////////
 //===============================================================//
 ///////////////////////////////////////////////////////////////////

//---------------------------Away Players-------------------------//
// 1. Leadoff
var awayBatterPA0 = 0;
var awayBatterAB0 = 0;
var awayBatterH0 = 0;
var awayBatterRBI0 = 0;
var awayBatterBB0 = 0;
var awayBatterSO0 = 0;

// 2.
var awayBatterPA1 = 0;
var awayBatterAB1 = 0;
var awayBatterH1 = 0;
var awayBatterRBI1 = 0;
var awayBatterBB1 = 0;
var awayBatterSO1 = 0;

// 3.
var awayBatterPA2 = 0;
var awayBatterAB2 = 0;
var awayBatterH2 = 0;
var awayBatterRBI2 = 0;
var awayBatterBB2 = 0;
var awayBatterSO2 = 0;

// 4.
var awayBatterPA3 = 0;
var awayBatterAB3 = 0;
var awayBatterH3 = 0;
var awayBatterRBI3 = 0;
var awayBatterBB3 = 0;
var awayBatterSO3 = 0;

// 5.
var awayBatterPA4 = 0;
var awayBatterAB4 = 0;
var awayBatterH4 = 0;
var awayBatterRBI4 = 0;
var awayBatterBB4 = 0;
var awayBatterSO4 = 0;

// 6.
var awayBatterPA5 = 0;
var awayBatterAB5 = 0;
var awayBatterH5 = 0;
var awayBatterRBI5 = 0;
var awayBatterBB5 = 0;
var awayBatterSO5 = 0;

// 7.
var awayBatterPA6 = 0;
var awayBatterAB6 = 0;
var awayBatterH6 = 0;
var awayBatterRBI6 = 0;
var awayBatterBB6 = 0;
var awayBatterSO6 = 0;

// 8.
var awayBatterPA7 = 0;
var awayBatterAB7 = 0;
var awayBatterH7 = 0;
var awayBatterRBI7 = 0;
var awayBatterBB7 = 0;
var awayBatterSO7 = 0;

// 9.
var awayBatterPA8 = 0;
var awayBatterAB8 = 0;
var awayBatterH8 = 0;
var awayBatterRBI8 = 0;
var awayBatterBB8 = 0;
var awayBatterSO8 = 0;

//---------------------------Home Players-------------------------//
// 1. Leadoff
var homeBatterPA0 = 0;
var homeBatterAB0 = 0;
var homeBatterH0 = 0;
var homeBatterRBI0 = 0;
var homeBatterBB0 = 0;
var homeBatterSO0 = 0;

// 2.
var homeBatterPA1 = 0;
var homeBatterAB1 = 0;
var homeBatterH1 = 0;
var homeBatterRBI1 = 0;
var homeBatterBB1 = 0;
var homeBatterSO1 = 0;

// 3.
var homeBatterPA2 = 0;
var homeBatterAB2 = 0;
var homeBatterH2 = 0;
var homeBatterRBI2 = 0;
var homeBatterBB2 = 0;
var homeBatterSO2 = 0;

// 4.
var homeBatterPA3 = 0;
var homeBatterAB3 = 0;
var homeBatterH3 = 0;
var homeBatterRBI3 = 0;
var homeBatterBB3 = 0;
var homeBatterSO3 = 0;

// 5.
var homeBatterPA4 = 0;
var homeBatterAB4 = 0;
var homeBatterH4 = 0;
var homeBatterRBI4 = 0;
var homeBatterBB4 = 0;
var homeBatterSO4 = 0;

// 6.
var homeBatterPA5 = 0;
var homeBatterAB5 = 0;
var homeBatterH5 = 0;
var homeBatterRBI5 = 0;
var homeBatterBB5 = 0;
var homeBatterSO5 = 0;

// 7.
var homeBatterPA6 = 0;
var homeBatterAB6 = 0;
var homeBatterH6 = 0;
var homeBatterRBI6 = 0;
var homeBatterBB6 = 0;
var homeBatterSO6 = 0;

// 8.
var homeBatterPA7 = 0;
var homeBatterAB7 = 0;
var homeBatterH7 = 0;
var homeBatterRBI7 = 0;
var homeBatterBB7 = 0;
var homeBatterSO7 = 0;

// 9.
var homeBatterPA8 = 0;
var homeBatterAB8 = 0;
var homeBatterH8 = 0;
var homeBatterRBI8 = 0;
var homeBatterBB8 = 0;
var homeBatterSO8 = 0;