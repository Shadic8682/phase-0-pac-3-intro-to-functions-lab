function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    const lower = "I can\'t hear you!"
    const upper = "YES INDEED!"
    const dinner = "I would love to!"
    if (string.toLowerCase(string) === string) {
      return lower
    }
    else if (string.toUpperCase(string) === string) {
        return upper
    }
    else if ("Let\'s have dinner together!" === string) {
        return dinner
    }
}