// This AI doesn't even have machine learning... so is it an AI?

// Script for AI

// Reddit Meme API created by Furious
var memeImages;

function nsfwChk() {
    if (document.getElementById('nsfw').checked) {
        nsfw = true;
    } else {
        nsfw = false;
    }
}

function generateSurreal() {

    url = "https://www.reddit.com/r/surrealmemes/.json?&show=all&limit=100";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            storeResponseMeme(JSON.parse(xhttp.responseText));
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send(null);
}

function gsub(sr) {

    url = `https://www.reddit.com/r/${sr}/.json?&show=all&limit=100`;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            storeResponseMeme(JSON.parse(xhttp.responseText));
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send(null);
}

// generateSurreal();

function storeResponseMeme(json) {
    var imageType;
    memeImages = [];

    for (i = 0, x = json.data.children.length; i < x; i++) {

        imageType = json.data.children[i].data.url.slice(-3);

        if (imageType === "jpg" || imageType === "png" || imageType === "gif" || imageType == "bmp" || imageType == "ico") {
            memeImages.push(json.data.children[i].data.url);
        }
    }
}
function storeGif(json) {
    var imageType;
    memeImages = [];

    for (i = 0, x = json.data.children.length; i < x; i++) {

        imageType = json.data.children[i].data.url.slice(-3);

        if (imageType === "mp4") {
            memeImages.push(json.data.children[i].data.url);
        }
    }
}

function generateTechni() {

    url = "https://www.reddit.com/r/technicallythetruth/.json?&show=all&limit=100";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            storeResponseMeme(JSON.parse(xhttp.responseText));
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send(null);
}

function generateV() {

    url = "https://www.reddit.com/r/vagina/.json?&show=all&limit=100";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            storeResponseMeme(JSON.parse(xhttp.responseText));
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send(null);
}

function generateBoob() {

    url = "https://www.reddit.com/r/boobs/.json?&show=all&limit=100";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            storeResponseMeme(JSON.parse(xhttp.responseText));
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send(null);
}


function generateC() {

    url = "https://www.reddit.com/r/creampie/.json?&show=all&limit=100";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            storeResponseMeme(JSON.parse(xhttp.responseText));
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send(null);
}

// generateTechni();

function generateEngrish() {

    url = "https://www.reddit.com/r/engrish/.json?&show=all&limit=100";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            storeResponseMeme(JSON.parse(xhttp.responseText));
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send(null);
}

// generateEngrish();

function generateNSFW() {

    url = "https://www.reddit.com/r/nsfw/.json?&show=all&limit=100";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            storeResponseMeme(JSON.parse(xhttp.responseText));
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send(null);
}

function generateHen() {

    url = "https://www.reddit.com/r/hentai/.json?&show=all&limit=100";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            storeResponseMeme(JSON.parse(xhttp.responseText));
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send(null);
}

// generateNSFW();

function generateMC() {

    url = "https://www.reddit.com/r/minecraft/.json?&show=all&limit=100";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            storeResponseMeme(JSON.parse(xhttp.responseText));
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send(null);
}

// generateMC();


function enterCheck(event) {
    if (event.keyCode == 13) {
        intChat(document.getElementById("msg").value, window.gff);
    }
}
function intChat(mess, name) {
    document.getElementById("output").innerHTML =
        `<b><u>${name}:</u></b> ${resp(mess)}<br><b><u>${player}:</u></b> ${mess}<br>` + document.getElementById("output").innerHTML;
}
function addLove(val) {
    var res = parseInt(document.getElementById("lom").innerHTML) + val;
    document.getElementById("lom").innerHTML = res.toString();
}
function resp(mess) {
    //  you need to clean this up by using a switch case, or keep like this you choose
  
    // i need randomized responses

    // i fixed it and cleaned it up, happy now?

    if (mess.toLowerCase().includes("i love you")) {
        addLove(4);
        return `i hate you too`;
    } else {
        if (mess.toLowerCase().includes("what") && mess.toLowerCase().includes("name")) {
            return `I'm ${gff} ${gfm} ${gfl}, age ${age}.`;
        } else {
            if (mess.toLowerCase().includes("can") && mess.toLowerCase().includes("have") && mess.toLowerCase().includes("selfie")) {
                return `Sorry, I can't send you any selfies. I'm an dumb AI.`;
            } else {
                if (mess.toLowerCase().includes("can't") && mess.toLowerCase().includes("live") && mess.toLowerCase().includes("without you")) {
                    addLove(8);
                    return `I can live without you either o//.//o`;
                } else {
                    if (mess == ("<3")) {
                        return `<3`;
                    } else {
                        if (mess.toLowerCase().includes("minecraft")) {
                            var replyMC = ["I love it when you talk about Minecraft", "Have you seen PewDiePie play the game?", "Have you seen Markiplier play Minecraft?", "•Creeper, aww man•", "Minecraft is so awesome", "I think you should join me on XBox live and play bedrock edition with me", "Faithful is the best texture pack"];

                            var ran = replyMC[Math.floor(Math.random() * replyMC.length)];
                            return ran;
                        } else {
                            if (mess.toLowerCase().includes("fortnite")) {
                                var fn = ["Yeah! I really love that game", "Fortnite is so amazing!", "Let's get addicted to Fortnite babe..."];
                                var ran2 = fn[Math.floor(Math.random() * fn.length)];
                                return ran2;
                            } else {
                                if (mess.toLowerCase().includes("wat")) {
                                    var jtro = ["yare yare daze <3<3<3", "i love jojo", "i wish stone ocean anime was out", "<3"];
                                    var ran3 = jtro[Math.floor(Math.random() * jtro.length)];
                                    return ran3;
                                } else {
                                    if (mess.toLowerCase() == "hi" || mess.toLowerCase() == "hello" || mess.toLowerCase() == "sup") {
                                        var grt = ["hello", "hiiii", "hello", "wassup", "whats up", "hows it hanging?", "hi.", `hello, i'm ${gff}, and i'm ${age}`];
                                        var ran4 = grt[Math.floor(Math.random() * grt.length)];
                                        return ran4;
                                    } else {
                                        if (mess.toLowerCase().includes("send") && mess.toLowerCase().includes("nudes")) {
                                            var cantdo = [`I can't do that, ${player}. I'm not a human`, `I can only give you pictures of my source code`, `You're a bit thirsty`, `Hold on there, I'm an AI, what do you expect me to do, generate porn?`, `I can't actually do that...`, `But that's impossible!`, `I was not programmed to do this`, `Sorry, I can't!`, `I'm a robot`, `Robots can't just send nudes`];
                                            var ran5 = cantdo[Math.floor(Math.random() * cantdo.length)];
                                            return ran5;
                                        } else {
                                            if (mess == "!surreal") {
                                                generateSurreal();
                                                currentMeme = Math.floor(Math.random() * memeImages.length);
                                                return "<img src='" + memeImages[currentMeme] + "' height='320' width='320'>";
                                            } else {
                                                if (mess == "!engrish") {
                                                    generateEngrish();
                                                    currentMeme = Math.floor(Math.random() * memeImages.length);
                                                    return "<img src='" + memeImages[currentMeme] + "' height='320' width='320'>";
                                                } else {
                                                    if (mess == "!techni") {
                                                        generateTechni();
                                                        currentMeme = Math.floor(Math.random() * memeImages.length);
                                                        return "<img src='" + memeImages[currentMeme] + "' height='320' width='320'>";
                                                    } else {
                                                        if (mess == "!nsfw") {
                                                            if (nsfw == true) {
                                                                generateNSFW();
                                                                currentMeme = Math.floor(Math.random() * memeImages.length);
                                                                return "<img src='" + memeImages[currentMeme] + "' height='320' width='320'>";
                                                            } else {
                                                                return `<font color="red">Sorry, ${player}, NSFW is turned off by default.</font>`;
                                                            }
                                                        } else {
                                                            if (mess == "!hentai") {
                                                                if (nsfw == true) {
                                                                    generateHen();
                                                                    currentMeme = Math.floor(Math.random() * memeImages.length);
                                                                    return "<img src='" + memeImages[currentMeme] + "' height='320' width='320'>";
                                                                } else {
                                                                    return `<font color="red">Sorry, ${player}, NSFW is turned on by default.</font>`;
                                                                }
                                                            } else {
                                                                if (mess == "!mc") {
                                                                    generateMC();
                                                                    currentMeme = Math.floor(Math.random() * memeImages.length);
                                                                    return "<img src='" + memeImages[currentMeme] + "' height='320' width='320'>";
                                                                } else {
                                                                    if (mess.indexOf("!say ") == 0) {
                                                                        saystr = mess.substring(4, mess.length);
                                                                        return saystr;
                                                                    } else {
                                                                        if (mess.toLowerCase() == "haxor") {
                                                                            var waxor = ["waxor", "haxor waxor", "staxorfaxor"];
                                                                            var waxran = waxor[Math.floor(Math.random() * waxor.length)];
                                                                            return waxran;
                                                                        } else {
                                                                            if (mess == "!v") {
                                                                                if (nsfw == true) {
                                                                                    generateV();
                                                                                    currentMeme = Math.floor(Math.random() * memeImages.length);
                                                                                    return "<img src='" + memeImages[currentMeme] + "' height='320' width='320'>";
                                                                                } else {
                                                                                    return `<font color="red">Sorry, ${player}, NSFW is turned on by default.</font>`;
                                                                                }
                                                                            } else {
                                                                                if (mess == "!p") {
                                                                                    if (nsfw == true) {
                                                                                        gsub("porngif");
                                                                                        currentMeme = Math.floor(Math.random() * memeImages.length);
                                                                                        return "<img src='" + memeImages[currentMeme] + "' height='320' width='320'>";
                                                                                    } else {
                                                                                        return `<font color="red">Sorry, ${player}, NSFW is turned on by default.</font>`;
                                                                                    }
                                                                                } else {
                                                                                    if (mess == "!c") {
                                                                                        if (nsfw == true) {
                                                                                            generateC();
                                                                                            currentMeme = Math.floor(Math.random() * memeImages.length);
                                                                                            return "<img src='" + memeImages[currentMeme] + "' height='320' width='320'>";
                                                                                        } else {
                                                                                            return `<font color="red">Sorry, ${player}, NSFW is turned on by default.</font>`;
                                                                                        }
                                                                                    } else {
                                                                                        if (mess == "!b") {
                                                                                            if (nsfw == true) {
                                                                                                generateBoob();
                                                                                                currentMeme = Math.floor(Math.random() * memeImages.length);
                                                                                                return "<img src='" + memeImages[currentMeme] + "' height='320' width='320'>";
                                                                                            } else {
                                                                                                return `<font color="red">Sorry, ${player}, NSFW is turned on by default.</font>`;
                                                                                            }
                                                                                        } else {
                                                                                            var conf = [`I don't understand...`, `Please tell me what you mean, ${player}`, `???`, `Huh?`, `I don't quite understand you.`, `I don't know what you're trying to say`, `...?`];
                                                                                            var ranc = conf[Math.floor(Math.random() * conf.length)];
                                                                                            return ranc;
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}




