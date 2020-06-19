// This is HaxorAI created by Furious

// Script for AI

// Reddit Meme API created by Furious
var memeImages;


function genLink(){
          var text = "";
 var possible = "GQUNnbqsx7269";

 for (var i = 0; i < 5; i++){
   text += possible.charAt(Math.floor(Math.random() * possible.length));
 }
return `<a href="https://goo.gl/${text}">Here is your random link</a>`;
          
      }

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

window.setInterval(function(){UpdateChat()}, 5000);

function UpdateChat()
{
    var output = document.getElementById("output");

    fetch("https://haxornite.ml/ai/ai.html",  {
        method: 'GET',
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
      }).then(function(response) {
        return response.text().then(function(text) {
          output.innerHTML = text;
        });
     });  
     
}

function enterCheck(event) {
    if (event.keyCode == 13) {
        resp(document.getElementById("msg").value);
    }
}

function addLove(val) {
    var res = parseInt(document.getElementById("lom").innerHTML) + val;
    document.getElementById("lom").innerHTML = res.toString();
}
function resp(mess) {
    fetch(`https://haxornite.ml/ai/ai_tool.php?mess=${mess}`)
    UpdateChat();
}
