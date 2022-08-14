function shout(string) {
    return string.toUpperCase();
}

function whisper(HELLO) {
    return HELLO.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase()) ;
} 

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string){
    const firstAns ="I can't hear you!";
    const secondAns ="YES INDEED!";
    const thirdAns ="I would love to!";
    const  fourthAns="Let's have dinner together!"

    if (string === string.toLowerCase()) {
        return firstAns;
    }
    else if (string === string.toUpperCase()) {
       return secondAns; 
    }

    else if (string === fourthAns) {
        return thirdAns
    }
}
